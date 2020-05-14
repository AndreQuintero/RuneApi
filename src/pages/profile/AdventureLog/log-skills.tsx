import React, { FC, memo } from 'react';
import ExpSkills from '../../../model/expSkills';

const LogSkills: FC<ExpSkills> = ({magicExp, meeleExp, rangedExp, totalSkill}) => (
    <div className="log-skills">
        <ul>
            <li>
                <div className="icon-log magic"></div> {magicExp ?? 0}                                
            </li>
            <li>
                <span className="icon-log meele"></span> {meeleExp ?? 0}                                
            </li>
            <li>
                <span className="icon-log ranged"></span> {rangedExp ?? 0}                                
            </li>
            <li>
                <span className="icon-log total-skill"></span> {totalSkill ?? 0}                                
            </li>
        </ul>
    </div>
);

export default memo(LogSkills);