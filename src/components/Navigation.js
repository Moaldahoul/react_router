import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation =() => {
    return (
        <div>
            <button>< NavLink to='/' > Home</ NavLink></button>
            <button>< NavLink to='/about' > About</ NavLink></button>
            <button>< NavLink to='/contact' > Countact</ NavLink></button>     
        </div>
        
    );
}

export default Navigation;