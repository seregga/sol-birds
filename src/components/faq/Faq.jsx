import React, { useEffect, useRef } from 'react';
import s from './Faq.module.css';
import Text from '../../common/ui/text/Text';
import Title from './../../common/ui/title/Title';
import { useDispatch } from 'react-redux'
import { setBlockFaq } from '../../redux/slices/blockSlice';


const Faq = () => {

    const refFaq = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setBlockFaq(refFaq.current))
    }, [])

    return (
        <section className={s.container} ref={refFaq}>
            <div className={s.wrap}>
                <Title color={'white'} >faq </Title>
                <article className={s.text__box}>
                    <div className={s.text__box_left}>
                        <Text color={'white'} fs={'fs24'}>Write in your Twitter account
                            how you can be useful
                            and tag our account.
                            We will make a decision
                            and collaborations.<span className={s.text_yellow}>Just organic growth</span>. Without drawing money from bribe bloggers. Joining the OG club only
                            after moderation
                        </Text>
                        <Text color={'white'} fs={'fs24'}> После продажи мы оставляем 30%
                            от выручки проекта и 66% вторичного оборота в общей кормушке, доступной только для холдеров. Средства направляются на инвестиции
                            в голубые фишки соланы и етн. Прибыль с продаж распределяется равномерно по кошелькам холдеров
                        </Text>

                        <Text color={'white'} fs={'fs24'}>  Continuation of life. Впоследствии птицы переходят в ранг многочейновой DAO
                            и завоевывают как популярные, так и новые блокчейны, показывая всему сообществу NFT, кто из животных главный, внедряя технологию совместных покупок
                            и распределение прибыли
                        </Text>

                    </div>
                    <div className={s.text__box_right}>
                        <Text color={'white'} fs={'fs24'}>Start of sales. First of all, only OG members
                            will be able to mint. Then, if there are available
                            NFTs, there will be a public sale
                        </Text>

                        <Text color={'white'} fs={'fs24'}>Запуск собственной монеты BIRDS COIN
                            и собственной системы совместных покупок на СОЛ И ЕТН, доступная
                            и для холдеров и для публичного рынка. Монету можно будет купить за СОЛ/ЕТН
                            или добыть при помощи стейкинга. Подробнее про монету ниже на сайте
                        </Text>

                    </div>

                </article>
            </div>
        </section>
    )
}

export default Faq
