import React from 'react'


export default function FormSubmissionAlert() {
    const [text, setText] = React.useState<string>('')

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const submit= ()=>{
        alert('Ban da nhap: '+text)
        setText('')
    }

  return (
    <div>
        <h1>Exercise 5: Form Submission Alert</h1>

        <input type="text" name="" id="" value={text} onChange={handleForm}/>
        <button onClick={submit}>submit</button>
        
    </div>
  )
}