import './Paginater.css'
import React from 'react'

const Paginater = ({page, totalPages, setPage}) => {

    return (
        <div>
            <button 
            value={1} 
            onClick={setPage} 
            disabled={ page === 1 }
            >
                {"|<"}
            </button>
            <button 
            value={page - 1} 
            onClick={setPage} 
            disabled={ page === 1 }
            >
                {"<<"}
            </button>
            <span>
                {page}
            </span>
            <button 
            value={page + 1} 
            onClick={setPage} 
            disabled={ page === totalPages }
            >
                {">>"}
            </button>
            <button 
            value={totalPages} 
            onClick={setPage} 
            disabled={ page === totalPages }
            >
                {">|"}
            </button>
            <span>
                de {totalPages}
            </span>
        </div>
    )
}

export default Paginater
