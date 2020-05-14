import React, { FC, memo } from 'react';
import TypeOfQuestModel from '../../../model/typeOfQuest';

const TypeOfQuest: FC<TypeOfQuestModel> = ({className, missoes}) => (
    <div className={className}>
        {missoes.map((missao, index) => (
            <p key={index}>{missao}</p>
        ))}
    </div>
)

export default memo(TypeOfQuest)