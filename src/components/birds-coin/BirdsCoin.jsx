import React, { useEffect, useRef } from 'react'
import s from './BirdsCoin.module.css'
import Text from './../../common/ui/text/Text';
import Title from './../../common/ui/title/Title';
import { useDispatch } from 'react-redux'
import { setBlockBirdsCoin } from '../../redux/slices/blockSlice';


const BirdsCoin = () => {

    const refBirdsCoin = useRef()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setBlockBirdsCoin(refBirdsCoin.current))
    }, [])

    return (
        <section className={s.container} ref={refBirdsCoin}>
            <div className={s.wrap}>
                <Title color={'dark'}>birds <span className={s.title__slice}>coin</span></Title>
                <article className={s.group_text_up}>
                    <h3 className={s.group_title}>
                        Mining methods <br />
                        BIRDS COIN
                    </h3>
                    <div className={s.text_items} >
                        <Text color={'dark'} fs={'fs24'}>Exchange SOL an ETH </Text>
                        <Text color={'dark'} fs={'fs24'}>Birds Staking </Text>
                        <Text color={'dark'} fs={'fs24'}>За участие в закрытых конкурсах в наших сообществах </Text>
                    </div>
                </article>
                <article className={s.group_text_down}>
                    <div>
                        <h3 className={s.group_title}>
                            What you can spend
                            <br />
                            BIRDS COIN on
                        </h3>
                        <div className={s.text_items} >
                            <Text color={'dark'} fs={'fs24'}>Joint purchases of NFT at an early stage </Text>
                            <Text color={'dark'} fs={'fs24'}>Buying merch SOLBIRDS </Text>
                            <Text color={'dark'} fs={'fs24'}>Buying WL, which we will eceive for our DAO from other projects </Text>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default BirdsCoin
