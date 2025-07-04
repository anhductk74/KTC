import React from 'react'


export default function DropdownSelection() {
    const [select,setSelect] = React.useState('')

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }
  return (
    <div>
        <h1>Exercise 8: Dropdown Selection</h1>
        <select onChange={handleSelect} name="" id="">
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
        </select>
        <div>Select: {select}</div>
    </div>
  )
}