import React, { useState } from 'react'
import Editor from './Editor'
import Preview from './Preview'
import { ExampleText } from './ExampleText'
import ReactFCCtest from 'react-fcctest'

const App = () => {
  const [userText, setUserText] = useState(ExampleText)
  return (
    <div className="container">
      <h1 className="is-size-3 has-text-right" style={{ marginBottom: '3rem' }}>
        Markdown Previewer
      </h1>
      <Editor text={[userText, setUserText]} />
      <hr />
      <Preview userText={userText} />
      <ReactFCCtest />
    </div>
  )
}

export default App
