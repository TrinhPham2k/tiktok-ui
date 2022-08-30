import React from "react";

export default function ListComment({listComment,getReply}) {
  // console.log(listComment)

  const handleReply =(id)=>{
     getReply(id)
  }

  const renderListComment = () => {
         
    // if(listComment.length > 0) {
      return  listComment && listComment.map(value =>{
         //  console.log(value);
         if(value.id_comment == 0){

             return(
                <>
                    <li className="media">
                        <a className="pull-left" href="#">
                        <img className="media-object" src={"http://localhost/laravel/laravel/public/upload/user/avatar/"+ value['image_user'] } alt="" />
                        </a>
                        <div className="media-body">
                        <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user" />{value['name_user']}</li>
                            <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                        </ul>
                        <p>{value['comment']}</p>
                        {/* bắt buộc phải đặt tên là id vì nó là một thuộc tính của thẻ a cũng giống như là className hoặc là onClick
                        nếu đặt tên khác sẽ không lấy được giá trị cao
                        chú ý: đây là thêm thuộc tính cho thẻ a nên phải đặt tên đúng , còn như mấy component kia thì đặt tên sao cũng được
                        */}
                        <a className="btn btn-primary" onClick={e => handleReply(value.id)} ><i className="fa fa-reply" />Replay</a>
                        </div>
                    </li>
                    {
                       listComment.map(index=>{
                           if(index.id_comment == value.id){
                                return(
                                     <li className="media second-media">
                                         <a className="pull-left" href="#">
                                         <img className="media-object" src={"http://localhost/laravel/laravel/public/upload/user/avatar/" + value['image_user']} alt="" />
                                         </a>
                                         <div className="media-body">
                                         <ul className="sinlge-post-meta">
                                             <li><i className="fa fa-user" />{index.name_user}</li>
                                             <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                                             <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                                         </ul>
                                         <p>{index.comment}</p>
                                         <a className="btn btn-primary" href><i className="fa fa-reply"  />Replay</a>
                                         </div>
                                   </li> 
                                )
                           }
                       }) 
                    }
                </>
            )

         }
      })
    // }
     
          
        }



  return <>{renderListComment()}</>;
}
