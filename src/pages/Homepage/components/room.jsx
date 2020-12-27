import { React, useState } from 'react'
import './room.css'

export default function Room(props) {
    return (
        <div className='room'>
            {props.id}
        </div>
    )
}