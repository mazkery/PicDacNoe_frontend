import { React, useState } from 'react'
import './online.css'

export default function Online(props) {
    return (
        <div>
            {props.online.map((item) => (
                <div className='line'>
                    <div className='name'>
                        {item}
                    </div>
                    <div className='onl'>
                        <i class="fas fa-circle"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}