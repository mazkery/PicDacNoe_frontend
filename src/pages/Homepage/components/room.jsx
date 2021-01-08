import { React, useState } from 'react'
import './room.css'

export default function Room({ history, id }) {
    const handleClick = () => {
        history.push(`/game/${id}`)
    }
    return (
        <div className='room' onClick={() => handleClick()}>
            {id}
        </div>
    )
}