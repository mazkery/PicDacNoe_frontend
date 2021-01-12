import { React, useState } from 'react'
import './room.css'

export default function Room({ history, id }) {
    const handleClick = () => {
        if (localStorage.getItem('token') === null) {
            history.push('/signin');
        }
        else {
            history.push(`/game/${id}`)
        }
    }
    return (
        <div className='room' onClick={() => handleClick()}>
            {id}
        </div>
    )
}