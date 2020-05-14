import React, { FC, memo } from 'react';
import LogUpsModel from '../../../model/logUps';

const LogUps: FC<LogUpsModel> = ({ ups }) =>  (
    <div className="in-center">
        <div className="p-0-20">
            {ups.map( (up, index) => (
                <p key={index}>{up}</p>
            ))}
        </div>
    </div>
);

export default memo(LogUps);