import React from 'react';
import RuneContainer from '../components/rune-container';


export default {
  title: 'RuneContainer',
  component: RuneContainer,
};

export const runeContainer = () => (
    <RuneContainer>
        <div style={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <p style={
                {
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '32px'

                }
            }>Este é o container usado nas páginas.</p>
        </div>
    </RuneContainer>
)
