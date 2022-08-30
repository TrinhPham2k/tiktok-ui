
function ListComment(props){
     
    const handleReply =(e)=>{
        e.preventDefault();
        // console.log(e.target.id)
        let getIdReply = e.target.id
        // đây là hàm getReplay được viết từ bên Detail và ta sẽ truyền id lấy được qua hàm này 
        // tức là truyền id lấy được bên ListComment qua Detail thông qua hàm getReply
          props.getReply(getIdReply)
    } 


    // nếu muốn hiển thị danh sách Comment thì ta phải hiểu như sau:
    //  file ListCommnet thì không liên quan chi đến file Commment , vậy làm sao để hiện danh sách Commnet lên thì 
    //  ta nghĩ như này:
    //  file ListCommnet k liên qua đến file Commmnet nhưng nó liên quan đến file Detail mà Filea Detail lại liên quan đế file 
    // Commment , kiểu như tính chất bắt cầu 
    //  Ban đầu file Commmmnet nếu mk làm đúng hết (không lỗi) thì lúc này trên database sẽ nhận được dữ liệu comment
    // đó (tại mình post nên dữ liệu sẽ được lưu ở database) mà trong file Datail thì api trả về có trường commnet nên 
    // lúc này dữ liệu ở bên file Commment đã được lưu ở database sẽ hiển thị bên trường comment của file Detail 
    // nên ta sẽ lấy dữ liệu commment ở file Datail để dùng để file ListCommment
    //  file ListComment chỉ cần gọi lại dl từ fiel Datail là được
     
    // console.log(props);

    const renderDataComment =()=>{
        // chú ý phải lấy đúng  biến mình đã đặt ở bên file Datail thì mới gọi ra dữ liệu được 

        // chú ý: nếu có dấu {listComment} ni thì sẽ trả về dữ liệu giống y như mà dữ liệu bên file Datail trả về là một array
        //  còn không có thì nó trả về giống dũ liệu mà props trả về ->thử in ra sẽ biết sự giống nhau và khác nhau
         // thường thì sẽ có dấu {}
        let {listComment} = props;
        // console.log(listComment);  
        if(listComment.length > 0) {
             return listComment.map(value =>{
                //  console.log(value);
                const idReplay = value.id
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
                               <a className="btn btn-primary" id={idReplay} onClick={handleReply}><i className="fa fa-reply" />Replay</a>
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
                                                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
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
        }
        
       

    }
    return(
        <>
          {renderDataComment()}
        </>
    )
}
export default ListComment