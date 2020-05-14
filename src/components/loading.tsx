import React, { FC, useEffect, useRef,  } from 'react';
import lottie from 'lottie-web';
import Sword from '../assets/vectors/loading.json';

const Loading: FC = () => {
    const divLoad = useRef<HTMLDivElement>(null);
    useEffect( () => {
        const anim = lottie.loadAnimation({
            container: divLoad.current as HTMLDivElement,
            renderer: 'svg',
            autoplay: true,
            loop: true, 
            animationData: Sword 
        })

        return () => anim.destroy();
    }, []);
    return(
    <div className='loading'>
        <div className='load'>
            <div ref={divLoad}></div>
        </div>
    </div>
)};

export default Loading;