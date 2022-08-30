import React, { Component } from 'react'
import Header from '../header'

export default class Educations extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <Header />
                    <div className="card-content">
                        <h6 className="">
                            <strong>EDUCATIONS</strong>
                        </h6>
                        <table className="striped">
                            <thead>
                            <tr>
                                <th>Certificate</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Danang University - University of Education</td>
                                <td>2017 - Present</td>
                                <td>
                                    <a href="https://ued.udn.vn/" target="blank" className="btn green lighten-2">
                                        View
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Athena English Center</td>
                                <td>2018 - 2019</td>
                                <td>
                                    <a href="https://anhnguathena.vn/" target="blank" className="btn green lighten-2">
                                        View
                                    </a>    
                                </td>
                            </tr>
                            <tr>
                                <td>Tester training center in Da Nang</td>
                                <td>11-2020</td>
                                <td>
                                    <a href="https://www.facebook.com/daotaotester" target="blank" className="btn green lighten-2">
                                        View
                                    </a>    
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
