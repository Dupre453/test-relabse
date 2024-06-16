import React from 'react';
import '../styles/pages/_shop.scss'


const Card = () => {
    return (
        <div className='card-item'>
            <img className='cart-item__image' src="https://avatars.mds.yandex.net/get-mpic/4448884/img_id6715658556277742975.jpeg/600x800"
                 alt=""
            />
            <div className='mt-2'>
                <b className='mr-3 '>1250 ₽</b>
                <b className='line-through opacity-50'>1990 ₽</b>
            </div>
            <p className='opacity-50'>My Hat Моя Шапка/Коврик/красный/бежевый/700х300х3мм</p>
            <div className='flex items-center mt-2 mb-3 cursor-pointer'>
                <span><img width="18" height="18" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star1"/></span>
                <span><img width="18" height="18" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star2"/></span>
                <span><img width="18" height="18" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star2"/></span>
                <span><img width="18" height="18" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star4"/></span>
                <span><img width="18" height="18" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star5"/></span>
                <span className='ml-2 opacity-70 text-sm'>33</span>
            </div>
            <span className='bg-amber-400 font-bold rounded-3xl px-3 py-1'>
                    рассрочка 0-0-6
                </span>
            <div className='flex mt-4 items-center justify-between'>
                <button className='bg-blue-700 text-amber-50 font-bold rounded-xl px-2 py-2'>Добавить</button>
                <span className='hover:bg-gray-200 rounded-3xl p-2 transition-all cursor-pointer'>
                    <img className='' width="22" height="22"
                         src="https://img.icons8.com/material-outlined/24/like--v1.png"
                         alt="like-icon"
                    />
                </span>
            </div>
        </div>
    );
};

export default Card;