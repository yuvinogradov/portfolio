import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'javascript expert'} ></Skill>
                    <Skill title={'CSS'} description={'super cascades style sheets professional'}></Skill>
                    <Skill title={'React'} description={'Ultra uno react developer'}></Skill>
                </div>
            </div>
        </div>
    );
}

export default Skills;
