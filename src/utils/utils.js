import marked from 'marked'

export function markdowns() {
  return [
    '# Marked1 in browser\n\nRendered by **marked**.',
    '# Marked2 in browser\n\nRendered by **marked**.'
  ]
}

export function md2html(markdowns) {
  return markdowns.map(md => marked(md))
}