import React from 'react'

const Editor = ({ text }) => {
  const [userText, setUserText] = text
  return (
    <div className="field">
      <div className="control">
        <label className="label" htmlFor="editor">
          Enter Text
        </label>
        <textarea
          className="textarea"
          name="editor"
          id="editor"
          value={userText}
          onChange={e => setUserText(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Editor
