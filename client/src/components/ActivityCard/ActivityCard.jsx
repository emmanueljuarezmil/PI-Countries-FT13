import React from 'react'

const ActivityCard = ({activity}) => {
    console.log(activity)
    const {
        name,
        description,
        difficult,
        duration,
        // countries
    } = activity

    const difficults = [
        'Muy fácil',
        'Fácil',
        'Intermedia',
        'Dificil',
        'Muy dificil',
    ]

    
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{difficults[difficult - 1]}</p>
            <p>{duration}</p>            
        </div>
    )
}

export default ActivityCard
