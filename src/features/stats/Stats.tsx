import React, { useEffect, useState } from 'react';
import HighlightBox from '../../components/highlightBox/highlightBox';
import { MdMemory, MdPhonelinkSetup, MdBrush, MdSpeed } from 'react-icons/md';
import { ContributionsService } from '../../services/contributionsService';
const Stats: React.FC = () => {
    const [contributions, setContributions] = useState();
    useEffect(() => {
    const sumContributions = async () => {
      try {
        const startYear = 2021;
        const currentYear = new Date().getFullYear();
        let total = 0;

        for (let year = startYear; year <= currentYear; year++) {
          const fromDate = `${year}-01-01`;
          const data = await ContributionsService.fetch(fromDate);
          total += data.totalContributions;
        }

        setContributions(total);
      } catch (err) {
        console.error(err);
      }
    };

    sumContributions();
  }, []);
    return (
        <section style={{
            position: 'relative',
            width: '100%',
            backgroundColor: 'var(--color-background)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <p style={{ color: 'var(--color-white)', fontSize: '2rem', fontWeight: 700, letterSpacing: '1px' }}>Stats</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 70, position: 'relative', zIndex: 2, textAlign: 'center', width: '100%' }}>
                <HighlightBox
                    icon={<MdMemory size={64} />}
                    value={contributions}
                    label="Interactive Web Apps"
                    accentColor="#78E4FE"
                />
                {/* <HighlightBox
                    icon={<MdPhonelinkSetup size={64} />}
                    value="Mobile"
                    label="Mobile-first Experiences"
                    accentColor="#A01EEF"
                />

                <HighlightBox
                    icon={<MdBrush size={64} />}
                    value="Design"
                    label="UX / UI Engineering"
                    accentColor="#22D3EE"
                />

                <HighlightBox
                    icon={<MdSpeed size={64} />}
                    value="Optimize"
                    label="Performance & Rendering"
                    accentColor="#F472B6"
                /> */}
            </div>
        </section>
    );
};

export default Stats;