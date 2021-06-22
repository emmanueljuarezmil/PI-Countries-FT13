import React from 'react'

function Paginater({countriesPerPage, totalCountries, setCurrentPage, currentPage}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
                {
                    pageNumbers.map((number) => (
                            <span key={number} >
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setCurrentPage(number)
                                }
                                }>
                                    {number}
                                </button>
                            </span>                 
                    ))
                }
        </div>

    )
}

export default Paginater
