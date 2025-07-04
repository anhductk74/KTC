import React from 'react'


export default function KeyPressDisplay() {
    const [keyPress, setKeyPress] = React.useState<string>('')
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        setKeyPress(e.key)
    }
  return (
    <div>
        <h1>Exercise 6: Key Press Display</h1>
        <input type="text" name="" id="" onKeyDown={handleKeyPress}/>
        <div><p>Phim cuoi cung: {keyPress}</p></div>
    </div>
  )
}