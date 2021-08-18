import React from 'react'
import { Link } from 'react-router-dom'
import { getCountryDetail } from '../../actions'
import { useDispatch } from 'react-redux'

const CarouselCountryItem = ({flag, name, id}) => {
    const dispatch = useDispatch()
    return (       
        <Link
        to='countryDetail'
        onClick={() => dispatch(getCountryDetail(id))}
        >
            <div>
                <div>
                    <img src={flag} alt="" />
                </div>
                <p>
                    {name}
                </p>
            </div>
        </Link>    
    )
}

export default CarouselCountryItem
