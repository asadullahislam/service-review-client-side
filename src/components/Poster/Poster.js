import React from 'react';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.jpg';
import img10 from '../../assets/images/10.jpg';
import img11 from '../../assets/images/11.jpg';
import img12 from '../../assets/images/12.jpg';
import img13 from '../../assets/images/13.jpg';
import img14 from '../../assets/images/14.jpg';
import PosterItem from '../PosterItem/PosterItem';



const PosterData = [
    {
        image: img1,
        prev: 14,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 7
    },
    {
        image: img7,
        prev: 6,
        id: 7,
        next: 8
    },
    {
        image: img8,
        prev: 7,
        id: 8,
        next: 9
    },
    {
        image: img9,
        prev: 8,
        id: 9,
        next: 10
    },
    {
        image: img10,
        prev: 9,
        id: 10,
        next: 11
    },
    {
        image: img11,
        prev: 10,
        id: 11,
        next: 12
    },
    {
        image: img12,
        prev: 11,
        id: 12,
        next: 13
    },
    {
        image: img13,
        prev: 12,
        id: 13,
        next: 14
    },
    {
        image: img14,
        prev: 13,
        id: 14,
        next: 1
    },
]

const Poster = () => {
    return (
        <div className='carousel w-full py-10'>
            {
                PosterData.map(slide => <PosterItem
                    key={slide.id}
                    slide={slide}
                ></PosterItem>)
            }
        </div>
    );
};

export default Poster;