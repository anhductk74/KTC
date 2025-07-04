import React from 'react'


export default function CheckboxToggle() {
    const [checkbox, setCheckBox] = React.useState(false)

    const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCheckBox(e.target.checked)
    }
  return (
    <div>
        <h1>Exercise 9: Checkbox Toggle</h1>
        <div>
            <input type="checkbox" name="" id="" onChange={handleCheckBox}/><span>Toggle me</span>
        </div>
        <div>Checkbox is: {checkbox ? 'checked' : 'unchecked'}</div>
    </div>
  )
}