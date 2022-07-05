import React from 'react';
import s from './Header.module.css';
import { useSelector } from 'react-redux'


const Header = () => {
    console.log('im Header');

    const blocks = useSelector((state) => state.blocks)
    console.log(blocks);


    const handleAboutUs = (e) => {
        if (e.target.innerText === 'about us') {
            blocks.blockAbout.scrollIntoView({ behavior: "smooth" })
        }
        if (e.target.innerText === 'road map') {
            blocks.blockRoadMap.scrollIntoView({ behavior: "smooth" })
        }
        if (e.target.innerText === 'birds coin') {
            blocks.blockBirdsCoin.scrollIntoView({ behavior: "smooth" })
        }
        if (e.target.innerText === 'BU') {
            blocks.blockBasicUtilities.scrollIntoView({ behavior: "smooth" })
        }
        if (e.target.innerText === 'team') {
            blocks.blockTeam.scrollIntoView({ behavior: "smooth" })
        }
        if (e.target.innerText === 'the process') {
            blocks.blockProcess.scrollIntoView({ behavior: "smooth" })
        }
        if (e.target.innerText === 'FAQ') {
            blocks.blockFaq.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className={s.header}>
            <div className={s.wrap}>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item} onClick={handleAboutUs}>about us</li>
                        <li className={s.item} onClick={handleAboutUs}>road map</li>
                        <li className={s.item} onClick={handleAboutUs}>birds coin</li>
                        <li className={s.item} onClick={handleAboutUs}>BU</li>
                        <li className={s.item} onClick={handleAboutUs}>team</li>
                        <li className={s.item} onClick={handleAboutUs}>the process</li>
                        <li className={s.item} onClick={handleAboutUs}>FAQ</li>
                    </ul>
                    <hr className={s.line} />
                </nav>
            </div>
        </header>
    )

}
export default Header
