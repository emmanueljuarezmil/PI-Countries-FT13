import './Paginater.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../actions'

const Paginater = () => {

    const dispatch = useDispatch()
    const page = useSelector(state => state.currentPage)
    const totalPages = useSelector(state => state.totalPages)

    const setPage = (e) => {
        e.preventDefault()
        dispatch(setCurrentPage(parseInt(e.target.value)))
    }

    return (
        <div>
            <button value={1} onClick={setPage} disabled={ page === 1 }>{"|<"}</button>
            <button value={page - 1} onClick={setPage} disabled={ page === 1 }>{"<<"}</button>
            <span>{page}</span>
            <button value={page + 1} onClick={setPage} disabled={ page === totalPages }>{">>"}</button>
            <button value={totalPages} onClick={setPage} disabled={ page === totalPages }>{">|"}</button>
            <span>de {totalPages}</span>
        </div>
    )
}

export default Paginater
