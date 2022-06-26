import React from 'react'
import s from './Team.module.css'
import TeamMember from './team-member/TeamMember';
import Title from './../../common/ui/title/Title';

const Team = (props) => {

    return (
        <section className={s.container} >
            <div className={s.wrap}>
                <Title color={"white"}>team </Title>
                <div className={s.team}>
                    <TeamMember />
                </div>
            </div>
        </section>
    )
}
export default Team
