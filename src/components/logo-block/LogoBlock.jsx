import React from 'react'
import s from './LogoBlock.module.css'

const LogoBlock = (props) => {
    return (
        <section className={s.container} >
            <section className={s.wrap}>
                <div className={s.title}>
                    <span className={s.word__top}>sol</span>
                    <br />
                    <span className={s.word__down}>birds</span>
                </div>
            </section>
            <div className={s.group__birds}></div>
            <div className={s.group__birds__fly__to__salana}></div>
            <div className={s.group__vector}></div>
        </section>
    )
}
export default LogoBlock
