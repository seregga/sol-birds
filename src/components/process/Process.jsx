import React, { useEffect, useRef } from 'react'
import s from './Process.module.css'
import Title from '../../common/ui/title/Title';
import Text from './../../common/ui/text/Text';
import flower1 from './fower_1.png'
import flower2 from './fower_2.png'
import flower3 from './fower_3.png'
import { useDispatch } from 'react-redux'
import { setBlockProcess } from '../../redux/slices/blockSlice';


const Process = (props) => {

    const dispatch = useDispatch()

    const refProcess = useRef()

    useEffect(() => {
        dispatch(setBlockProcess(refProcess.current))
    }, [])

    return (
        <section className={s.container} ref={refProcess}>
            <div className={s.wrap}>
                <Title color={"white"}>How the process</Title>
                <h3 className={s.subtitle}>is organized</h3>
                <div className={s.points}>
                    <div className={s.item}>
                        <div className={s.image}>
                            <img src={flower1} alt="flower1" />
                        </div>
                        <div className={s.text}>
                            <Text fs={'fs24'} color={"white"}>
                                At the first stage only OG members
                                will be able to mint. They will be able
                                to take an unlimited amount
                            </Text>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.image}>
                            <img src={flower2} alt="flower1" />
                        </div>
                        <div className={s.text}>
                            <Text fs={'fs24'} color={"white"}>
                                At the second stage people
                                from the waiting list will be able
                                to mint
                            </Text>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div className={s.image}>
                            <img src={flower3} alt="flower1" />
                        </div>
                        <div className={s.text}>
                            <Text fs={'fs24'} color={"white"}>
                                On the third stage a public mint
                                will be opened, if tokens do not run out.
                                In total there will be 777 NFT
                            </Text>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Process
