
// import logger from './logger.js'
// import{
//     log,warn,error
// }from './constains.js'
//  logger("test message", warn)

// const h1 = document.createElement('h1')
// h1.innerText ="trinh"
// h1.className ="heading"
// console.log(h1.getAttribute('trinh'))
// Object.assign(h1.style,{
//     color: 'red',
//     backgroundColor: 'black'
// })
// document.body.append(h1)

// const h1dom = document.createElement("h1")
// h1dom.title ="Hello"
// h1dom.className ="heading"
// h1dom.innerHTML ="Hello guys"
//  document.body.appendChild(h1dom)

// //  reatct
// const react  = React.createElement("h1",{
//     title:"tirnh",
//     className:"heading"
// },"hello")
// console.log(react)


// const uldom = document.createElement("ul")
// const lidom1 = document.createElement("li")
// lidom1.innerHTML ="Javascript"
// const lidom2 = document.createElement("li")
// lidom2.innerHTML ="Java"
// uldom.appendChild(lidom1)
// uldom.appendChild(lidom2)

// document.body.appendChild(uldom)


// const ulreact = React.createElement(
//    'ul',
//    {
//        id:"ul-id",
//        style:'color:red; font-size:30px'
//    },
//    React.createElement('li',{id:'li-1'},"Javascript"),
//    React.createElement('li',null,"Javas"),

// )
// console.log(ulreact)
//  ReactDOM.render(ulreact,document.getElementById('root'))

// --------------------------
// const postItem = React.createElement(
//     'div',
//     {
//       className: 'post-item'
//     },
//     React.createElement(
//       'h2',
//       {
//         title:'Hoc REACT tai f8'

//       },
//       'Hoc react tai f8 kkk'
//     ),
//     React.createElement(
//       'p',
//       null,
//       'Hoc react tai f8 tu co ban den nang cao'
//     )

// )
// console.log(postItem)
// ReactDOM.render(postItem, document.getElementById("root"))


// --------------------------------JSX-----------------
// const courses1 = [
//   { 
//     name: 'HTML, CSS'
//   },
//   { 
//     name: 'JAVA'
//   },
//   { 
//     name: 'REACTJS'
//   }
// ]
// const courserItem = (
//    <ul>
//         {
//             courses1.map((course,index) => 
//             <li key={index}>{course.name}</li>)
//         }
//    </ul>
   
// )
// ReactDOM.render(courserItem,document.getElementById("root"))


// ----jsx render ra nhieu element
// const ul = (
//      <React.Fragment>
//           <h1>Heading1</h1>
//           <h3>Heading3</h3>
//      </React.Fragment>
      
// )

// ReactDOM.render(ul,document.getElementById("root"))

function PostItem({
  title,
  heading,
  callback = () =>{}
}){
    callback()
  return(
     <div>
         <h2>{title}</h2>
         <p>{heading}</p>
     </div>
  )
}
function App(){
         
    // console.log( <PostItem title="trinh" className="kkk" />);
    return (
        <div id="wrapper">
            <PostItem
                title = "HTML5"
                heading = 'okeeeeee!!!'
                callback ={()=>{}}
            />
             <PostItem
                title = "HTML5"
                heading = 'okeeeeee!!!'
            />
            
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))


















// ------------------------------
// function PostItem({
//     title,
//     desc,
    
// }) {
//     // console.log(props);
   
//     return (
//         <div className="post-item">
            
//             <h2 className="post-title">{title}</h2>
//             <p className="post-desc">{desc}</p>
            
//         </div>
//     )
// }
// function App(){
         
//     // console.log( <PostItem title="trinh" className="kkk" />);
//     return (
//         <div id="wrapper">
//           <PostItem
//              title = "C#kkk"
//              desc ="Ban co kien thuc ngan hang 11"
//            callBack ={()=>{

//            }}
//           />
//           <PostItem/>
//           <PostItem
//              title = "C1#kkk"
//              desc ="Ban co kien thuc ngan hang 22"
//           />
//           <PostItem/>
//         </div>
//     )
// }
// ReactDOM.render(<App/>, document.getElementById("root"))


// ------------------------
const courses =[
    {
        "id": 2,
        "title": "HTML, CSS từ Zero đến Hero",
        "slug": "html-css",
        "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
        "thumbnail": "courses/2.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "R6plN3FvzFY",
        "preview_path": null,
        "language": "html",
        "syntax_highligh": "language-html",
        "level": "Trình độ cơ bản",
        "priority": 10,
        "students_count": 75291,
        "deleted_at": null,
        "created_at": "2020-04-10T14:23:13.000000Z",
        "updated_at": "2021-11-15T01:45:50.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/2.png"
      },
      {
        "id": 1,
        "title": "JavaScript Cơ Bản",
        "slug": "javascript-co-ban",
        "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
        "thumbnail": "courses/1.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "0SJE9dYdpps",
        "preview_path": null,
        "language": "javascript",
        "syntax_highligh": "language-javascript",
        "level": "Trình độ cơ bản",
        "priority": 30,
        "students_count": 48435,
        "deleted_at": null,
        "created_at": "2020-06-10T14:23:13.000000Z",
        "updated_at": "2021-11-15T01:44:21.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png"
      },
      {
        "id": 7,
        "title": "Kiến Thức Nhập Môn",
        "slug": "lessons-for-newbie",
        "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
        "thumbnail": "courses/7.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "M62l1xA5Eu8",
        "preview_path": null,
        "language": null,
        "syntax_highligh": null,
        "level": "Trình độ cơ bản",
        "priority": 0,
        "students_count": 36849,
        "deleted_at": null,
        "created_at": "2020-02-10T14:23:13.000000Z",
        "updated_at": "2021-11-15T01:35:07.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png"
      },
      {
        "id": 3,
        "title": "Responsive Với Grid System",
        "slug": "responsive-web-design",
        "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
        "thumbnail": "courses/3.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "uz5LIP85J5Y",
        "preview_path": null,
        "language": "html",
        "syntax_highligh": "language-html",
        "level": "Trình độ cơ bản",
        "priority": 20,
        "students_count": 15174,
        "deleted_at": null,
        "created_at": "2020-05-10T14:23:13.000000Z",
        "updated_at": "2021-11-15T01:40:13.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png"
      },
      {
        "id": 6,
        "title": "Node & ExpressJS",
        "slug": "nodejs",
        "description": "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
        "thumbnail": "courses/6.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "z2f7RHgvddc",
        "preview_path": null,
        "language": "javascript",
        "syntax_highligh": "language-javascript",
        "level": "Trình độ cơ bản",
        "priority": 32,
        "students_count": 13081,
        "deleted_at": null,
        "created_at": "2020-08-01T14:23:13.000000Z",
        "updated_at": "2021-11-15T01:44:34.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/6.png"
      },
      {
        "id": 5,
        "title": "HTML, CSS Tips & Tricks",
        "slug": "html-css-tutorials",
        "description": "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
        "thumbnail": "courses/5.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "nB6cJh_bb1U",
        "preview_path": null,
        "language": "html",
        "syntax_highligh": "language-html",
        "level": "Trình độ cơ bản",
        "priority": 40,
        "students_count": 9823,
        "deleted_at": null,
        "created_at": "2020-03-10T14:23:13.000000Z",
        "updated_at": "2021-11-15T01:16:47.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/5.png"
      },
      {
        "id": 12,
        "title": "JavaScript Nâng Cao",
        "slug": "javascript-nang-cao",
        "description": "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
        "thumbnail": "courses/12.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "MGhw6XliFgo",
        "preview_path": null,
        "language": "javascript",
        "syntax_highligh": "language-javascript",
        "level": "Trình độ nâng cao",
        "priority": 31,
        "students_count": 8229,
        "deleted_at": null,
        "created_at": "2021-04-03T14:23:13.000000Z",
        "updated_at": "2021-11-14T18:33:01.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/12.png"
      },
      {
        "id": 13,
        "title": "ReactJS",
        "slug": "reactjs",
        "description": "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
        "thumbnail": "courses/13/13.png",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "x0fSBAgBrOQ",
        "preview_path": null,
        "language": "javascript",
        "syntax_highligh": "language-jsx",
        "level": "Trình độ trung bình",
        "priority": 0,
        "students_count": 7952,
        "deleted_at": null,
        "created_at": null,
        "updated_at": "2021-11-15T01:37:17.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png"
      },
      {
        "id": 4,
        "title": "Don't Touch Your Face",
        "slug": "tool-canh-bao-so-len-mat",
        "description": "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
        "thumbnail": "courses/4/4.jpeg",
        "content": null,
        "preview_origin": "youtube",
        "preview_youtube_id": "r6GWbQL-qwA",
        "preview_path": null,
        "language": "javascript",
        "syntax_highligh": "language-javascript",
        "level": "Trình độ cơ bản",
        "priority": 50,
        "students_count": 3589,
        "deleted_at": null,
        "created_at": "2020-01-10T14:23:13.000000Z",
        "updated_at": "2021-11-14T15:35:42.000000Z",
        "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/4/4.jpeg"
      }
]
function CourseItem(props){
    return(
         <div>
              {/* <h2>{props.title}</h2>  
              <img src={props.img} /> */}
              <p>{props.count}</p>
         </div> 
    )
}
function App(){
      

    return (
         <div id="wrapper">
             {
                 courses.map(course =>
                   
                      <CourseItem 
                          key  = {course.id}
                          count ={course.students_count}
                         
                      /> 
                    
                    )
                   
             }
           
         </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))











// function CoursesItem({
//    course,onClick
// }){
//     return(
//          <div>
//               <h2 onClick={()=> onClick(course)} > {course.title}  </h2>
//               <img src={course.thumbnail_cdn}/>
//               <p>{course.description}</p>
//          </div>
//     )
// }
// function App(){
//       const handleClick = (course)=>{
//          console.log(course.title)
//       }

//     return (
//          <div id="wrapper">
//              {
//                  courses.map(course => 
//                       <CoursesItem 
//                           key  = {course.id}
//                           course ={course}
//                           onClick ={handleClick}
//                       /> 
                    
//                     )
                   
//              }
           
//          </div>
//     )
// }
// ReactDOM.render(<App/>,document.getElementById("root"))