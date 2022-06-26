import React from 'react'
import s from './Title.module.css'

// color white or dark

const Title = ({ children, color }) => {
    return (
        <h2 className={[s.fs140, s[color]].join(' ')}>
            {children}
        </h2>
    )
}
export default Title
