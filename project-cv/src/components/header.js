import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default class Header extends Component {
    render() {
        return (
            <>
                <nav style={{ backgroundColor: '#94b15b' }}>
                    <div className="container">
                    <div class="nav-wrapper">
                        <Link to='/project-cv' className='brand-logo' style={{color: 'black'}}>CV</Link>
                        <ul className='sidenav' id='side-nav'>
                            <li>
                                <Link to='/project-cv' >
                                    <i className="fas fa-home" ></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/project-cv/experiences">
                                    <i className="fas fa-id-badge"></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/project-cv/educations">
                                    <i className="fas fa-graduation-cap"></i>Educations
                                </Link>
                            </li>
                            <li>
                                <a href='https://www.topcv.vn/xem-cv/94c3a49c203e5bdc7f224d70ab89a8e7?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv' target="blank">
                                    <i className="fas fa-download"></i> Download
                            </a>
                            </li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to='/project-cv'>
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/project-cv/experiences'>
                                    <i className="fas fa-id-badge"></i> Experiences
                            </Link>
                            </li>
                            <li>
                                <Link to='/project-cv/educations'>
                                    <i className="fas fa-graduation-cap"></i> Educations
                            </Link>
                            </li>
                            <li>
                                <a href='https://www.topcv.vn/xem-cv/94c3a49c203e5bdc7f224d70ab89a8e7?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv' target="blank">
                                    <i className="fas fa-download"></i> Download
                                </a>
                            </li>
                        </ul>
                    </div>

                    </div>
                </nav>
            </>
        )
    }
}
