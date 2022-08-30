import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Comment({id,getComment,IdReplay}) {
    const [comment, setComment] = useState(" ")
   
    const handleSubmit =(e)=>{
        e.preventDefault();
        var xx = localStorage.getItem("useList")
        var vv = JSON.parse(xx)
        if(vv){
          const userData = JSON.parse(localStorage.getItem('useState'))
          
          const url = 'http://localhost/laravel/laravel/public/api/blog/comment/' + id
           const config ={
            headers:{
              'Authorization': 'Bearer ' + userData.token.token,
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'

            }
           }
           if(comment){
               const formData = new FormData()
               formData.append('id_blog', id)
               formData.append('id_user', userData.data.id)
               formData.append('id_comment', IdReplay? IdReplay:0)
               formData.append('comment',comment)
               formData.append('image_user',userData.data.avatar)
               formData.append('name_user',userData.data.name)
               axios.post(url, formData,config)
               .then(res =>{
                // console.log(res)
                getComment(res)
               })
               .catch(err => console.log(err))
           }
        }
       
    }
    
  return (
    <>
          <div className="replay-box">
            <div className="row">
           
              <div className="col-sm-8">
              <form onSubmit={handleSubmit}>
                <div className="blank-arrow">
                  <label>Your Name</label>
               
                </div>
                <span>*</span>
                <textarea value={comment} onChange={(e)=> setComment(e.target.value)}  name="comment" rows={11} defaultValue={""}  />
                <button type="submit"className="btn btn-primary" href>post comment</button>
              </form>
              </div>
            </div>
          </div> 
        
    </>
  )
}
