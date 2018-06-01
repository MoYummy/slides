import path from 'path'
import marked from 'marked'
import axios from 'axios'

const uriPrefix = getUriPrefix()

function getUriPrefix () {
  if (/github\.io$/.test(window.location.origin)) {
    return '/' + window.location.pathname.split('/')[1]
  }
  return ''
}

export function $fetch(uri, { absolute = false, useCache = true } = {}) {
  let url = absolute ? uri : (uriPrefix + uri)
  if (!useCache) {
    const qid = url.lastIndexOf('?')
    if (qid > -1) {
      url += ( qid === url.length - 1 ? '_=' : '&_=') + Date.now()
    } else {
      url += '?_=' + Date.now()
    }
  }
  return new Promise((resolve, reject) => {
    axios.get(url).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const githubRepoTree = (owner, repo) => 'https://' + path.join('api.github.com/repos', owner, repo, 'git/trees/master')

export function githubOwner () {
  return /([^\.\/]+)\.github\.io/.exec(window.location.origin)[1]
}

export function githubRepo () {
  return /\/([^\/]+)/.exec(window.location.pathname)[1]
}

export function fetchPrezList () {
  if (/github\.io$/.test(window.location.origin)) {
    const owner = githubOwner()
    const repo = githubRepo()
    const resRoot = 'res'
    return new Promise((resolve, reject) => {
      $fetch(githubRepoTree(owner, repo), { absolute: true }).then(resp => {
        try {
          const resUrl = resp.tree.find(x => x.path === resRoot).url
          resolve(resUrl)
        } catch (err) {
          reject(err)
        }
      }).catch(err => {
        console.error(err)
        resolve()
      })})
        .then(url => {
          if (!url) {
            return Promise.resolve([])
          }
          return $fetch(url, { absolute: true }).then(resp => {
            try {
              const prezList = Array.from(resp.tree).map(x => path.join('/', resRoot, x.path))
              return Promise.resolve(prezList)
            } catch (err) {
              console.error(err)
              return Promise.resolve([])
            }
          })
        })
  }
  if (/localhost/.test(window.location.origin)) {
    const resRoot = '/res/'
    return $fetch(resRoot).then(html => {
      const temp = document.createElement('div')
      temp.innerHTML = html
      return Array.from(temp.querySelectorAll('pre a'))
        .map(el => resRoot + el.getAttribute('href'))
        .filter(path => /\.md$/.test(path))
    })
  }
  return Promise.resolve([])
}

const horizontalSeparator = '[//]: <> (horizontal)'
const verticalSeparator = '[//]: <> (vertical)'
export function md2reveal(markdown) {
  const comments = []
  const commentPattern = /\[\/\/\]:\s*<>\s*\(([^\(\)]+)\)/g
  let match
  while ((match = commentPattern.exec(markdown)) !== null) {
    if (match[1] === 'end') {
      break
    }
    comments.push(match[1])
  }

  const html = markdown.split(horizontalSeparator).map(h => {
    const vs = h.split(verticalSeparator)
    if (vs.length < 2) {
      return wrapSection(h)
    }
    const nested = vs.map(v => wrapSection(v)).join('')
    return wrapTag(nested, { tag: 'section' })
  }).join('')

  return {
    html,
    comments,
  }
}

function wrapTag (str, { tag = 'div', clazz = '' } = {}) {
  tag = tag.replace(/<>/g, '') // in case
  clazz = clazz ? ' class="' + clazz + '"' : ''
  return '<' + tag + clazz + '>' + str + '</' + tag + '>'
}

function wrapSection (md) {
  const opts = { tag: 'section', clazz: '' }
  if (/\[\/\/\]:\s*<>\s*\(center\)/.test(md)) {
    opts.clazz += 'center'
  }
  return wrapTag(marked(md), opts)
}

export function metadata (str) {
  str = unescape(str).replace(/^.+\//, '').replace(/\.md$/, '')
  str = str.replace()
  let tags = []
  str = str.replace(/\([^\(\)]+\)$/, (match) => {
    tags = match.replace(/^\s*\(/, '').replace(/\)\s*$/, '').split(',')
    return ''
  })
  const title = str.replace(/-(\w)/g, (_, c) => c ? ' ' + c.toUpperCase() : '').replace(/^(\w)/g, (_, c) => c ? c.toUpperCase() : '')

  return {
    tags,
    title,
  }
}

export function getRevealTheme () {
  return document.getElementById('reveal-theme').getAttribute('href')
}

export function setRevealTheme (theme) {
  document.getElementById('reveal-theme').setAttribute('href', theme)
}