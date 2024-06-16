import React from 'react';
import {Link} from "react-router-dom";
import '../styles/components/_home.scss'
const Header = () => {
    return (

            <div className='header'>
                <Link className='mr-8 font-bold hover:bg-gray-200 rounded-3xl px-3 py-2 transition-all' to='/home'>Главная страница</Link>
                <Link className='mr-8 font-bold hover:bg-gray-200 rounded-3xl px-3 py-2 transition-all' to='/'>Авторизация</Link>
                <Link className='mr-8 font-bold hover:bg-gray-200 rounded-3xl px-3 py-2 transition-all' to='/shop'>Магазин</Link>
            </div>

    );
};

export default Header;