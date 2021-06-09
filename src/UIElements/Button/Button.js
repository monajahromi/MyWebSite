import React from 'react';
import  {Link} from 'react-router-dom';
const Button = ({children,handelOnclick=()=>{},to="/"}) => {
    return (
       <Link to={to}>
        <button onClick={handelOnclick}>{children}</button>
        </Link>
    );
};

export default Button;