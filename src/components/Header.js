import React from 'react';

const Header = (props) => {
    return(
    <header>
        <div className="user">
            <img src="" alt="" />
            <sapan className="name">{props.user.name}</sapan>
        </div>
        <button className="logout" onclick="logout()">Logout</button>
    </header>
    )
}

export default Header;