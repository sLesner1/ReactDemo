import React from 'react';
import HighlightBox from '../../components/highlightBox/highlightBox';
import { MdMemory, MdPhonelinkSetup, MdBrush, MdSpeed } from 'react-icons/md';

const Skills: React.FC = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            backgroundColor: 'var(--color-background)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <p style={{ color: 'var(--color-white)', fontSize: '2rem', fontWeight: 700, letterSpacing: '1px' }}>Skills</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 70, position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
                <HighlightBox
                    icon={<MdMemory size={64} />}
                    value="Web"
                    label="Interactive Web Apps"
                    accentColor="#78E4FE"
                />

                <HighlightBox
                    icon={<MdPhonelinkSetup size={64} />}
                    value="Mobile"
                    label="Mobile-first Experiences"
                    accentColor="#A01EEF"
                />

                <HighlightBox
                    icon={<MdBrush size={64} />}
                    value="Design"
                    label="UI / UX Engineering"
                    accentColor="#22D3EE"
                />

                <HighlightBox
                    icon={<MdSpeed size={64} />}
                    value="Optimize"
                    label="Performance & Rendering"
                    accentColor="#F472B6"
                />
            </div>
        </section>
    );
};

export default Skills;