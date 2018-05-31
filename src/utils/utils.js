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

export function $fetch(uri, absolute = false) {
  return new Promise((resolve, reject) => {
    axios.get(absolute ? uri : (uriPrefix + uri)).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const githubRepoTree = (owner, repo) => 'https://' + path.join('api.github.com/repos', owner, repo, 'git/trees/master')

export function fetchPrezList() {
  if (/github\.io$/.test(window.location.origin)) {
    const owner = /([^\.\/]+)\.github\.io/.exec(window.location.origin)[1]
    const repo = /\/([^\/]+)/.exec(window.location.pathname)[1]
    const resRoot = 'res'
    return new Promise((resolve, reject) => {
      $fetch(githubRepoTree(owner, repo), true).then(resp => {
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
          return $fetch(url, true).then(resp => {
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
  return markdown.split(horizontalSeparator).map(h => {
    const vs = h.split(verticalSeparator)
    return wrapTag(
      vs.length < 2 ? marked(h)
      : vs.map(v => wrapTag(marked(v), 'section')).join(''), 'section')
  }).join('')
}

function wrapTag(str, tag = 'div') {
  tag = tag.replace(/<>/g, '') // in case
  return '<' + tag + '>' + str + '</' + tag + '>'
}

export function metadata (str) {
  str = unescape(str).replace(/^.+\//, '').replace(/\.md$/, '')
  let tags = []
  str = str.replace(/\([^\(\)]+\)$/, (match) => {
    tags = match.replace(/^\s*\(/, '').replace(/\)\s*$/, '').split(',')
    return ''
  })
  return {
    title: str.replace(/-(\w)/g, (_, c) => c ? ' ' + c.toUpperCase() : '')
              .replace(/^(\w)/g, (_, c) => c ? c.toUpperCase() : ''),
    tags
  }
}
