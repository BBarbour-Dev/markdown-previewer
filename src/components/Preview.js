import React from 'react'
import marked from 'marked'

const renderer = new marked.Renderer()
renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}" title="${title}">${text}</a>`

const Preview = ({ userText }) => {
  const parseMarkdown = raw => {
    let markup = marked(raw, { renderer, sanitize: true, breaks: true })
    return markup
  }
  return (
    <div
      id="preview"
      className="content"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(userText) }}
    />
  )
}

export default Preview
