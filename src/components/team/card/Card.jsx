import React from 'react'
import Text from '../../../common/ui/text/Text';
import s from './Card.module.css'

const Card = ({ image, name, text }) => {
    return (
        <div className={s.card}>
            <div className={s.image}>
                <img src={image} alt="smile1" />
            </div>
            <h2 className={s.title} >{name}</h2>
            <Text color={"white"} fs={"fs24"}>{text}</Text>
        </div>
    )
}
export default Card
