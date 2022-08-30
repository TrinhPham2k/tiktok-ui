import axios from "axios"
import { useEffect, useState } from "react"

function Comment(props){

     const [checkLogin, setCheckLogin] = useState("");
     const [checkComment, setCheckComment] = useState("");

     const [comment, setComment] = useState("");
 
     const handleComment =(e)=>{
         setComment(e.target.value);
     }


    const handleCheck =(e)=>{
        e.preventDefault();
        // kiem tra login chua moi cho phep binh luan
        var xx = localStorage.getItem("useList")
        var vv = JSON.parse(xx)
        if(vv){
              const userData = JSON.parse(localStorage.getItem('userState'))
              const url = 'http://localhost/laravel/laravel/public/api/blog/comment/' + props.id
              const config ={
                  headers:{
                    'Authorization': 'Bearer ' + userData.token.token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept':'application/json'
                  }
              }
            //   kiem tra co comment hay khong
            if(comment){
                const formData = new FormData();

                // nhớ id_blog, id_user,... phair viết chính xác theo tên của api trả về chứ không sẽ bị lỗi 
                // và không thể đưa dữ liệu ở html lên lưu server được 
                
                formData.append('id_blog', props.id)
                formData.append('id_user', userData.data.id)
                formData.append('id_comment',props.IdReplay ? props.IdReplay : 0)
                formData.append('comment',comment)
                formData.append('image_user',userData.data.avatar)
                formData.append('name_user',userData.data.name)
                
                axios.post(url, formData,config)
                 .then(res=>{
                    //   console.log(res);
                    props.getCmt(res)
                 })
                 .catch(err=>{console.log(err);})
                 setCheckComment('')
            }else{
                setCheckComment('Vui long comment')
            }
            
        }else{
             setCheckLogin('Vui long login moi comment')
            // console.log('vui long login');
        }
    }

    return(
         <>
            <div className="replay-box">
            <div className="row">

            <div className="col-sm-8">
                <div className="text-area">
                 <p>{checkLogin}</p>
                 <p>{checkComment}</p>

                 <form onSubmit={handleCheck}>
                    <div className="blank-arrow">
                        <label>Your Name</label>
                       
                    </div>
                    
                    <span>*</span>
                    
                    <textarea name="message" rows={11} defaultValue={""} value={comment} onChange={handleComment} />
                   
                    <button type="submit" className="btn btn-primary" href>post comment</button>
                 </form>

                </div>
            </div>
            </div>
        </div>
         </>
    )
}
export default Comment