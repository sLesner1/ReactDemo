import React from 'react';
import './HighlightBox.scss';

interface HighlightBoxProps {
    icon?: React.ReactNode;
    value?: string;
    label?: string;
    accentColor?: string;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({
    icon = '',
    value = '',
    label = '',
    accentColor = '#78E4FE'
}) => {
    return (
        <div className="highlight-box">
            <div className="highlight-box__corner-glow" />

            <div className="highlight-box__grain-overlay" />

            <div className="highlight-box__content">
                <div className="highlight-box__icon"
                style={{ color: accentColor }}>
                    {icon}
                </div>
                <h3 className="highlight-box__value">{value}</h3>
                <p className="highlight-box__label">{label}</p>
            </div>

            <div className="highlight-box__accent-glow"
            style={{
                background: `radial-gradient(circle at center, ${accentColor}08, transparent 70%)`
            }} />
        </div>
    );
};

export default HighlightBox;