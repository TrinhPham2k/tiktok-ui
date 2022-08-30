import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AddNote() {
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState([])
    const dispatch = useDispatch()
    const addStateNote = useSelector(state => state.note )
    console.log(addStateNote)
    const handleAdd=()=>{
        // dispatch(A(content))
    }

  return (
    <div className="col-md-12" style={{ marginBottom: 15 }}>
    <div className="input-group mb-8">
      <input
        type="text"
        className="form-control"
        placeholder="Nội dung ghi chú"
        value={content}
        onChange={e => setContent(e.target.value)}
     
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleAdd}>
          Thêm
        </button>
      </div>
    </div>
    <ul>
        {/* {
            notes.map(note=>{
                return <li>{<note></note>}</li>
            })
        } */}
    </ul>
  </div>
  )
}
