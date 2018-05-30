import marked from 'marked'
import axios from 'axios'

export function markdowns() {
  return [
    '# Marked1 in browser\n\nRendered by **marked**.',
    '# Marked2 in browser\n\nRendered by **marked**.'
  ]
}

export function md2html(markdowns) {
  return markdowns.map(md => marked(md))
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

export function $fetch(uri) {
  return new Promise((resolve, reject) => {
    axios.get(uri).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}
