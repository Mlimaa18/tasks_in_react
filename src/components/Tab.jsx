import React from 'react';

const Tab = ({tab, change_tab}) => {
    const active_class = tab.status ? "is-active has-text-weight-bold" : "";
    return (
        <li  className={active_class}
        onClick={()=>{
            change_tab(tab.nombre);
        }}
        >
            <a>{tab.nombre}</a>
        </li>
    );
};

export default Tab;