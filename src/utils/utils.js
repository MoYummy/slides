import marked from 'marked'
import axios from 'axios'

const uriPrefix = getUriPrefix()

console.log(uriPrefix)
function getUriPrefix () {
  if (/github\.io$/.test(window.location.origin)) {
    console.log('github')
    return '/' + window.location.pathname.split('/')[1]
  }
  return ''
}

export function $fetch(uri) {
  return new Promise((resolve, reject) => {
    console.log(uriPrefix)
    axios.get(uriPrefix + uri).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
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
  tag = tag.replace(/<>/g, '')
  return '<' + tag + '>' + str + '</' + tag + '>'
}
