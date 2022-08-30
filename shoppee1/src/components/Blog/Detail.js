import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import Comment from "./Comment"
import ListComment from "./ListComment";
import Rate from "./Rate";

function Detail(){ 
    const [dataBlogDetail, setdataBlogDetail] = useState({});

    const [listCmt, setListCmt] = useState("");
    const [IdReplay, setIdReplay] = useState("");

    const getId = useParams();

      useEffect(() =>{
         axios.get("http://localhost/laravel/laravel/public/api/blog/detail/"  + getId.id)
           .then(res =>{
               
               setdataBlogDetail(res.data.data)
              // lấy dữ liệu comment
              // console.log(res.data.data.comment);
               setListCmt(res.data.data.comment)
           }) 
           .catch(err =>console.error(err))
      },[])
    // console.log(listCmt);
    const renderDataBlogDetail = () =>{
      // ban đầu nó là một object va chi co 1 gia tri tra ve nên không cần map
         if(Object.keys(dataBlogDetail).length >0){
              return(
                <div className="single-blog-post">
                <h3>Girls Pink T Shirt arrived in store</h3>
                <div className="post-meta">
                  <ul>
                    <li><i className="fa fa-user" /> Mac Doe</li>
                    <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                    <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                  </ul>
                  <span>
                     <Rate idblog={getId.id} />
                    {/* <i className="fa fa-star" /> */}
                   
                  </span>
                </div>
                <a href>
                  <img src={"http://localhost/laravel/laravel/public/upload/Blog/image/" + dataBlogDetail['image']} alt="" />
                </a>
                <p>
                    {dataBlogDetail.content}
               </p> <br />
              
               
                <div className="pager-area">
                  <ul className="pager pull-right">
                    <li><a href="#">Pre</a></li>
                    <li><a href="#">Next</a></li>
                  </ul>
                </div>
              </div>
                  
              )
         }
    }
  // xu ly khi không cần reload comments vẫn hiện ra comment mới nhất
    const getComment =(data)=>{
      // đây la comment mới nhẩt
      //  console.log(data);
      setListCmt(listCmt.concat(data.data.data));

    }
    const getReply = (data1) =>{
      // ta sẽ nhận được giá trị id được truyền qua hàm getReply từ ListCommment  trả về
        // console.log(data1);
        // tiếp tục truyền id này qua componet Comment
        setIdReplay(data1)
    }
    
    return (
        <div>
          <div className="blog-post-area">
            <h2 className="title text-center">Latest From our Blog</h2>
            {renderDataBlogDetail()}
          </div>{/*/blog-post-area*/}
          <div className="rating-area">
            <ul className="ratings">
              <li className="rate-this">Rate this item:</li>
              <li>
                <i className="fa fa-star color" />
                <i className="fa fa-star color" />
                <i className="fa fa-star color" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </li>
              <li className="color">(6 votes)</li>
            </ul>
            <ul className="tag">
              <li>TAG:</li>
              <li><a className="color" href>Pink <span>/</span></a></li>
              <li><a className="color" href>T-Shirt <span>/</span></a></li>
              <li><a className="color" href>Girls</a></li>
            </ul>
          </div>{/*/rating-area*/}

          <div className="socials-share">
            <a href><img src="images/blog/socials.png" alt="" /></a>
          </div>{/*/socials-share*/}

          <div className="media commnets">
        <a className="pull-left" href="#">
          <img className="media-object" src="images/blog/man-one.jpg" alt="" />
        </a>
        <div className="media-body">
          <h4 className="media-heading">Annie Davis</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="blog-socials">
            <ul>
              <li><a href><i className="fa fa-facebook" /></a></li>
              <li><a href><i className="fa fa-twitter" /></a></li>
              <li><a href><i className="fa fa-dribbble" /></a></li>
              <li><a href><i className="fa fa-google-plus" /></a></li>
            </ul>
            <a className="btn btn-primary" href>Other Posts</a>
          </div>
        </div>
      </div>{/*Comments*/}
       
      <div className="response-area">
        <h2>3 RESPONSES</h2>
        <ul className="media-list">
         
            <ListComment  listComment ={listCmt} getReply={getReply} />
         
       
        </ul>					
      </div>
      {/*/Response-area*/}
       <Comment id={getId.id} getCmt={getComment} IdReplay={IdReplay} />
     {/*/Repaly Box*/}
     
        </div>
      );
  
}
export default Detail