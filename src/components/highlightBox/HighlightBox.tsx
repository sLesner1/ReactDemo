import React from 'react';

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
        <div style={cardStyle}>
            <div style={cornerGlowStyle} />

            <div style={grainOverlayStyle} />

            <div style={contentStyle}>
                <div style={{ ...iconStyle, color: accentColor }}>
                    {icon}
                </div>
                <h3 style={valueStyle}>{value}</h3>
                <p style={labelStyle}>{label}</p>
            </div>

            <div style={{
                ...accentGlowStyle,
                background: `radial-gradient(circle at center, ${accentColor}08, transparent 70%)`
            }} />
        </div>
    );
};

const cardStyle: React.CSSProperties = {
    position: 'relative',
    width: '220px',
    height: '220px',
    borderRadius: '60px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'default',
    cornerShape: 'squircle'
};

const cornerGlowStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    background: `
        radial-gradient(ellipse at -40% -50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 140% 150%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)
    `,
    filter: 'blur(3px)',
};

const grainOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    opacity: 0.04,
    pointerEvents: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 Vag%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
};

const contentStyle: React.CSSProperties = {
    padding: 'var(--space-20)',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
};

const valueStyle: React.CSSProperties = {
    fontSize: '2.4rem',
    fontWeight: 800,
    color: '#FFFFFF',
    margin: 0,
    lineHeight: 1,
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))'
};

const labelStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.4)',
    marginTop: '6px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    lineHeight: '1.2',
    minHeight: '2.4em',
};

const iconStyle: React.CSSProperties = {
    marginBottom: '12px',
    filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.2))',
};

const accentGlowStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
};

export default HighlightBox;