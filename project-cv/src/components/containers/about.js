import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className= 'row'> 
                <div className="col s6">
                    <strong>FullName: </strong>
                    <span>Van Thi Thao</span>
                 </div>
                 <div className="col s6">
                    <strong>Date Of Birth: </strong>
                    <span>08-05-1999</span>
                 </div>
                 <div className="col s6">
                    <strong>Grender: </strong>
                    <span>Female</span>
                 </div>
                 <div className="col s6">
                    <strong>Phone: </strong>
                    <span>0379838029</span>
                 </div>
                 <div className="col s6">
                    <strong>Email: </strong>
                    <span>thaovan8599@gmail.com</span>
                 </div>
                 <div className="col s6">
                    <strong>Address: </strong>
                    <span>Dai Hoa- Dai Loc- Quang Nam</span>
                 </div>
                 <div className="col s12">
                    <h6><b>Introduce yourself</b></h6>
                    <p>My name is Thao. This is year I am 21 years old. I was born and raise in QuangNam.
                       Previously I studied at the University of Education- DaNang University and garaduated
                       with a bachelor's degree in information technology. I also took park in a tester course
                       at DaNang tester training center. Currently I am living and working in DaNang.
                    </p>
                 </div>
            </div>
        )
    }
}
