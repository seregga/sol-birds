import React from 'react'
import s from './Text.module.css'


// color white or dark 
// fs 34 or 24  -(font-size)

const Text = ({ children, color, fs }) => {
    return (
        <p className={[s[color], s[fs]].join(' ')}>
            {children}
        </p>
    )
}
export default Text
