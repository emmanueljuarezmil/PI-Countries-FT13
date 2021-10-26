import React, { useEffect, useState } from 'react'
import './Activities.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getActivities } from '../../actions'
import ActivityCard from '../ActivityCard/ActivityCard';
import Paginater from '../Paginater/Paginater';

const Activities = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const activities = useSelector(state => state.activities)

    const [page, setCurrentPage] = useState(1)
    const activitiesPerPage = 9
    const totalPages = Math.ceil(activities.length / activitiesPerPage)
    const activitiesToRender = activities.slice((page - 1) * activitiesPerPage, page * activitiesPerPage)

    const setPage = (e) => {
        e.preventDefault()
        setCurrentPage(parseInt(e.target.value))
    }

    return (
        <div>
            <div>
                {
                    activitiesToRender && activitiesToRender.map(activity => 
                    <ActivityCard 
                    activity={activity} 
                    key={activity.id}
                    />)
                }
            </div>
            <Paginater 
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            />
            <div>
                <Link to="/newactivity">Crear actividad</Link>
                <Link to="/home">Regresar al home</Link>
            </div>
        </div>
    )
}

export default Activities
