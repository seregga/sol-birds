import React, { useContext, useEffect, useRef } from 'react';
import s from './About.module.css'
import birdBlack from './../../assets/img/birds/bird-black.png'
import birdBlue from './../../assets/img/birds/bird-blue.png'
import birdCamouflage from './../../assets/img/birds/bird-camouflage.png'
import birdYellow from './../../assets/img/birds/bird-yellow.png'
import Text from './../../common/ui/text/Text';
import Title from './../../common/ui/title/Title';
// import { Context } from './../../common/js/context';
import { connect } from 'react-redux';
import { setRefToAbout, setRefToRoadMap } from './../../redux/actions/refTo-actions';


const About = (props) => {
    console.log('im About');

    // const { setLinksElementsState } = useContext(Context)

    const about = useRef()

    useEffect(() => {
        props.dispatch(setRefToAbout(about))
        // props.dispatch(setRefToRoadMap(refRoadMap))
        // setLinksElementsState(about)
    }, [])


    return (
        <section className={s.container} ref={about}>
            <div className={s.wrap}>
                <Title color={"white"}>about <span className={s.title__us}>us</span></Title>
                <aside className={s.desc}>
                    <Text color={"white"} fs={"fs34"}>Tired of mediocre, over-the-top projects, the birds create
                        an investment group to contribute their time and talent
                        to the development and promotion of projects
                        in the <span className={s.text_yellow}>SOLANA ecosystem</span>. And, of course,
                        to make money from it...
                    </Text>
                </aside>
                <div className={s.image__box}>
                    <img className={s.image} src={birdBlack} alt="bird-black" />
                    <img className={s.image} src={birdBlue} alt="bird-black" />
                    <img className={s.image} src={birdCamouflage} alt="bird-black" />
                    <img className={s.image} src={birdYellow} alt="bird-black" />
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        refToAbout: state.refToReducer.refToAbout,
        refToRoadMap: state.refToReducer.refToRoadMap
    }
}
export default connect(mapStateToProps)(About) 
