import React from "react";
import style from '../styles/Login.module.css';
import Link from 'next/link';

const Head3 = () => {
    return (
        <div className="col-6">
            <ul className="navbar-nav sm-icons mr-0 d-block float-right text-end">
                <button type="button" className={style.login_btn}><Link href="/login">Login</Link></button>
                <li className="float-left d-inline-block m-3"><i className="fa fa-facebook-f text-white"></i></li>
                <li className="float-left d-inline-block m-3"><i className="fa fa-instagram text-white"></i></li>
                <li className="float-left d-inline-block m-3"><i className="fa fa-twitter text-white"></i></li>
                <li className="float-left d-inline-block m-3"><i className="fa fa-pinterest-p text-white"></i></li>
            </ul>
        </div>
    )
}

export default Head3;