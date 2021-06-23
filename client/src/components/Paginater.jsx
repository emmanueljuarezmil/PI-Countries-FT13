import React from 'react'
import './Paginater.css'

function Paginater({countriesPerPage, totalCountries, setCurrentPage, currentPage}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='paginater-container'>
                {
                    totalCountries >= 12 ?
                        pageNumbers.map((number) => (
                            <button className={number === currentPage ? 'paginater-button paginater-button-active' : 'paginater-button'} onClick={(e) => {
                                e.preventDefault()
                                setCurrentPage(number)
                            }
                            }>
                                {number}
                            </button>                
                        )) :
                    
                    null

                }
        </div>

    )
}

export default Paginater
