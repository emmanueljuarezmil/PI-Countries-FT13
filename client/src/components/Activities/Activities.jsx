import React, { useEffect, useState } from 'react'
import './Activities.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getActivities } from '../../actions'
import ActivityCard from '../ActivityCard/ActivityCard';

const Activities = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const activities = useSelector(state => state.activities)

    const [page, setPage] = useState(1)
    const activitiesPerPage = 2
    const totalPages = Math.ceil(activities.length / activitiesPerPage)
    const activitiesRender = activities.slice((page - 1) * activitiesPerPage, page * activitiesPerPage)

    const setCurrentPage = (e) => {
        e.preventDefault()
        setPage(parseInt(e.target.value))
    }

    return (
        <div>
            <div>
                {
                    activitiesRender && activitiesRender.map(activity => <ActivityCard activity={activity} key={activity.id}/>)
                }
            </div>
            <div>
                <button value={1} onClick={setCurrentPage} disabled={ page === 1 }>{"|<"}</button>
                <button value={page - 1} onClick={setCurrentPage} disabled={ page === 1 }>{"<<"}</button>
                <span>{page}</span>
                <button value={page + 1} onClick={setCurrentPage} disabled={ page === totalPages }>{">>"}</button>
                <button value={totalPages} onClick={setCurrentPage} disabled={ page === totalPages }>{">|"}</button>
                <span>de {totalPages}</span>
            </div>
            <div>
                <Link to="/newactivity">Ingresar actividad</Link>
                <Link to="/home">Regresar al home</Link>
            </div>
        </div>
    )
}

export default Activities
