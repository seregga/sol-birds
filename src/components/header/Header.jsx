import React, { useContext, useEffect, useRef } from 'react';
import s from './Header.module.css';
// import { Context } from './../../common/js/context';
import { connect } from 'react-redux';

const Header = (props) => {
    console.log('im Header');

    console.log(props.refToAbout);
    // const { linksElementsState } = useContext(Context)
    // console.log(linksElementsState);

    const refAboutUs = useRef()
    const refRoadMap = useRef()
    const birdsCoin = useRef()
    const team = useRef()
    const theProcess = useRef()
    const faq = useRef()


    useEffect(() => {
        refAboutUs.current.addEventListener('click', handleAboutUs)
        refRoadMap.current.addEventListener('click', handleAboutUs)
        birdsCoin.current.addEventListener('click', handleAboutUs)
        team.current.addEventListener('click', handleAboutUs)
        theProcess.current.addEventListener('click', handleAboutUs)
        faq.current.addEventListener('click', handleAboutUs)
    }, [])

    const handleAboutUs = (e) => {
        console.log('ok');

        props.refToAbout.current.scrollIntoView({ block: "center", behavior: "smooth" })

    }

    return (
        <header className={s.header}>
            <div className={s.wrap}>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item} ref={refAboutUs}>about us</li>
                        <li className={s.item} ref={refRoadMap}>road map</li>
                        <li className={s.item} ref={birdsCoin}>birds coin</li>
                        <li className={s.item} ref={team}>team</li>
                        <li className={s.item} ref={theProcess}>the process</li>
                        <li className={s.item} ref={faq}>FAQ</li>
                    </ul>
                    <hr className={s.line} />
                </nav>
            </div>
        </header>
    )


}
const mapStateToProps = (state) => {
    return {
        refToAbout: state.refToReducer.refToAbout,
        refToRoadMap: state.refToReducer.refToRoadMap
    }
}
export default connect(mapStateToProps)(Header) 
