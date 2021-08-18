import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({items, n}) => {
    // const items = [
    //     'ola',
    //     'asd',
    //     'x',
    //     'c',
    //     'w',
    //     'asd',
    //     'as',
    //     'asd',
    //     'zxc',
    //     'asd',
    // ]
    // const n = 2
    const [slide, setSlide] = useState(1)
    const totalSlides = Math.ceil( items.length / n )
    const [itemsToShow, setItemsToShow] = useState( items.slice((slide - 1) * n, slide * n) )
    useEffect(() => {
        setItemsToShow( items.slice((slide - 1) * n, slide * n) )
    }, [slide, items, n])
    const previous = () => {
        if( slide === 1 ) setSlide( totalSlides )
        else setSlide( slide - 1 )
    }
    const next = () => {
        if(slide === totalSlides) setSlide( 1 )
        else setSlide( slide + 1 )
    }
    
    return (
        <div>
            {
                itemsToShow.length ?
                <div>
                    <div>
                        <button onClick={previous}>
                            {'<'}
                        </button>
                    </div>
                    <div>
                        <div>
                            {itemsToShow}
                        </div>
                        <div>
                            {`${slide} de ${totalSlides}`}
                        </div>
                    </div>
                    <div>
                        <button onClick={next}>
                            {'>'}
                        </button>
                    </div>
                </div> :
                null
            }
        </div>
    );
};

export default Carousel;
