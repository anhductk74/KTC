import React from 'react'


export default function ToggleSwitch() {
    const [label, setLabel] = React.useState('on')

    const handleBtn = ()=>{
        return label === 'on' ? setLabel('off') : setLabel('on')
    }

  return (
    <div>
        <h1>Exercise 3: Toggle Switch</h1>
        <button onClick={handleBtn}>{label}</button>
        <div>Trang thai: {label}</div>
    </div>
  )
}