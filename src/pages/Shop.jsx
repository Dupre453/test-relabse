import React from 'react';
import '../styles/pages/_shop.scss'
import Card from "../components/Card";


const Shop = () => {
    return (
        <div className='grid grid-cols-4 gap-5 p-20'>
           <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
    );
};

export default Shop;