import React, { useEffect, useRef } from 'react';
import Title from '../../common/ui/title/Title';
import Text from '../../common/ui/text/Text';
import s from './BasicUtilities.module.css';
import { setBlockBasicUtilities } from '../../redux/slices/blockSlice';
import { useDispatch } from 'react-redux'

const BasicUtilities = (props) => {
    console.log('im BasicUtilities');

    const dispatch = useDispatch()

    const refBasicUtilities = useRef()

    useEffect(() => {
        dispatch(setBlockBasicUtilities(refBasicUtilities.current))
    }, [])

    return (
        <section className={s.container} ref={refBasicUtilities}>
            <div className={s.wrap}>
                <Title color={'white'} >Basic Utilities</Title>
                <div className={s.subTitle}>
                    <p className={s.subTitle__purple}>birds coin</p>
                    <p className={s.subTitle__text}>
                        is a platform for joint purchases
                        that we implement. How it will work:
                    </p>
                </div>
                <ul className={s.list}>
                    <li className={s.list__item}>
                        <div className={s.num_1}></div>
                        <div className={s.text__wrapper}>
                            <Text color={'white'} fs={'fs24'}>
                                Двое и более холдеров объединяются на нашей платформе.
                                Для каждую их сделку платформа создает отдельный командный кошелек,
                                куда они могут внести СОЛ или ЕТН
                            </Text>
                        </div>
                    </li>
                    <li className={s.list__item}>
                        <div className={s.num_2}></div>
                        <div className={s.text__wrapper}>
                            <Text color={'white'} fs={'fs24'}>
                                Двое и более холдеров объединяются на нашей платформе.
                                Для каждую их сделку платформа создает отдельный командный кошелек,
                                куда они могут внести СОЛ или ЕТН
                            </Text>
                        </div>
                    </li>
                    <li className={s.list__item}>
                        <div className={s.num_3}></div>
                        <div className={s.text__wrapper}>
                            <Text color={'white'} fs={'fs24'}>
                                Двое и более холдеров объединяются на нашей платформе.
                                Для каждую их сделку платформа создает отдельный командный кошелек,
                                куда они могут внести СОЛ или ЕТН
                            </Text>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default BasicUtilities 
