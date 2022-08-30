import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import ListComment from './ListComment'
import Rate from './Rate'

export default function Detail() {
    const getId = useParams()
    const [detailBlog, setDetailBlog] = useState('')
    const [listCmt, setListCmt] = useState("");
    const [IdReplay, setIdReplay] = useState("");
   

  
    useEffect(() =>{
         axios.get('http://localhost/laravel/laravel/public/api/blog/detail/' + getId.id )
         .then(res=>{
             setDetailBlog(res.data.data)
             setListCmt(res.data.data.comment)

         })
         .catch(err=>{console.log(err);})

    },[])
    // console.log(detailBlog.comment);
    const renderPost =()=>{
      if(Object.keys(detailBlog).length > 0){
        return (
            <div className="single-blog-post">
            <h3>{detailBlog.title}</h3>
            <div className="post-meta">
              <ul>
                <li><i className="fa fa-user" /> Mac Doe</li>
                <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
              </ul>
              <Rate idRate ={getId.id} />
            </div>
            <a href>
              <img src={"http://localhost/laravel/laravel/public/upload/Blog/image/" + detailBlog.image } alt="" />
            </a>
            <p>
              {detailBlog.description}
            </p>
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
   
    const getComment =(dataComment)=>{
      setListCmt(listCmt.concat(dataComment.data.data));
    }
    // console.log(listCmt);

    const getReply=(getID)=>{
      setIdReplay(getID)
    }
  return (
    <>
       <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
         
          {renderPost()}
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
            <ListComment listComment={listCmt} getReply={getReply} />
          </ul>					
        </div>{/*/Response-area*/}
          <Comment id={getId.id} getComment={getComment} IdReplay={IdReplay} />
       
    </>
  )
}
