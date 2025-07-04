import React from 'react'


export default function InputFieldTracker() {
    const [text, setText] = React.useState<string>('')

    const handleTextInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
  return (
    <div>
        <h1>Exercise 2: Input Field Tracker</h1>
        <div><input type="text" name="" id="" onChange={handleTextInput}/></div>
        <div>You type: {text.trim() === '' ? 'nothing' : text}</div>
    </div>
  )
}