import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function Create() {
    const navigate = useNavigate()

    const handle =async(e)=>{
        e.preventDefault()

        const formdata = new FormData(e.target)
        axios.post("http://localhost:4000/post-create", formdata)
        .then((res)=>{
           navigate("/feed")
        })
        .catch((error)=>{
            alert("This is a error")
        })
    }
    return (
        <section className='create-post-sectin'>
            <h1>Create Post</h1>
            <form onSubmit={handle}> 
                <input type="file" name="image" accept='image/*' />
                 <input type="text" name="caption" required/>
                 <button type='submit'>Submit</button>

                </form>
        </section>
    )
}

export default Create