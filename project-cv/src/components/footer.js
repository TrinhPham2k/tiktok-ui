import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer style={{ backgroundColor: '#94b15b' }}>

                    <div className="card-content">
                        <h6 className="mt-button">
                            <strong>CONTACT</strong>
                        </h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Mail ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>thaovan8599@gmail.com</td>
                                    <td>
                                        <a
                                            target="blank"
                                            href="https://mail.google.com/mail/u/2/#inbox"
                                            className="btn green lighten-2 "
                                        >
                                            Click to send mail
                                                                </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </footer>
            </div>
        )
    }
}
