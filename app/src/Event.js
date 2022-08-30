import { useState } from "react";

function Event(){
    // var isDemo = 1;
    const [isDemo, setIsDemo] = useState(1);


    function hanldeDemo (){
        setIsDemo(2)
    }

    // hanldeDemo = () => {

    // }

    //lang nghe co state thay doi thi tu dong reload lai
    return(
        <p onClick={hanldeDemo}>trang event {isDemo}</p>
    )
}
export default Event;