import React from 'react';
import HighlightBox from '../../components/highlightBox/highlightBox';

const Skills: React.FC = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            backgroundColor: 'var(--color-background)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <HighlightBox
                    icon={<></>}
                    value="Web"
                    label="Architecture & Logic"
                    accentColor="#78E4FE"
                />
            </div>
        </section>
    );
};

export default Skills;