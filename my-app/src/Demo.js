import Demo2 from "./Demo2";

function Demo(props) {
   
    return (
      <div>
          {props.xx.info.phone}
            <Demo2 yy = {props.xx.user}/>
      </div>
  
      
    );
  }
  
  export default Demo;
  