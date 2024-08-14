import React, {FC} from 'react';
import {Link} from "react-router-dom";


export const Header:FC = () => {
    return (
        <div className="head">
            <div className="header">
                <Link to={"/usersSlice"  ? "/" : "/usersSlice"}>
                    <div className="menu">☰</div>
                </Link>

                <Link to="/usersSlice">
                    <div className="logo">
                        Lincode Web-Messenger
                    </div>
                </Link>

            </div>
            <hr/>
        </div>

    );
}

