import React from 'react'

function Paginater({countriesPerPage, totalCountries, setCurrentPage}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a href="/home/!#" className="page-link" onClick={(e) => {
                                e.preventDefault()
                                setCurrentPage(number)
                            }
                            }>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>

    )
}

export default Paginater
