import React from 'react'


const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
export default function SearchFilter() {
const [inpText, setInpText]= React.useState('')

const listSearch = items.filter(item => item.toLowerCase().includes(inpText.toLowerCase()))
  return (
    <div>
        <h1>Exercise 10: SearchFilter</h1>

        <input type="text" onChange={e=>setInpText(e.target.value)}/>
        <ul>
            {listSearch.length===0? 'No matching':listSearch.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}