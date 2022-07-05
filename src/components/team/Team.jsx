import React, { useEffect, useRef } from 'react'
import s from './Team.module.css'
import Title from './../../common/ui/title/Title';
import Card from './card/Card';
import smile1 from './image_1.png'
import smile2 from './image_2.png'
import smile3 from './image_3.png'
import smile4 from './image_4.png'
import smile5 from './image_5.png'
import { useDispatch } from 'react-redux';
import { setBlockTeam } from '../../redux/slices/blockSlice';



const Team = (props) => {

    const dispatch = useDispatch()

    const refTeam = useRef()

    useEffect(() => {
        dispatch(setBlockTeam(refTeam.current))
    }, [])

    return (
        <section className={s.container} ref={refTeam}>
            <div className={s.wrap}>
                <div className={s.title}>
                    <Title color={"white"} className={s.title}>team</Title>
                </div>
                <div className={s.team}>
                    <div className={s.team__up}>
                        <Card name={'TAD COX'} text={'Major creator'} image={smile1} />
                        <Card name={'Ciro Jimenez'} text={'Marketing'} image={smile2} />
                        <Card name={'Julia Mendoza'} text={'Digital-designer'} image={smile3} />
                    </div>
                    <div className={s.team__down}>
                        <Card name={'Oscar Davis'} text={'Technical Team'} image={smile4} />
                        <Card name={'Jenny Wilson'} text={'Community Team'} image={smile5} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team
