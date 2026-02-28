import React, { useEffect, useState } from 'react';
import HighlightBox from '../../components/highlightBox/highlightBox';
import {  MdCommit, MdWhatshot, MdLeaderboard, MdStar } from 'react-icons/md';
import { ContributionsService } from '../../services/contributionsService';
import { CodewarsService } from '../../services/codewarsService';
import { CircularProgress } from '@mui/material';
import './Stats.scss';

const IconGradient = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="80%" y2="80%">
      <stop offset="0%" stopColor="var(--color-primary-light)" />
      <stop offset="100%" stopColor="var(--color-primary-dark)" />
    </linearGradient>
  </svg>
);

const Stats: React.FC = () => {
    const [contributions, setContributions] = useState();
    const [longestStreak, setLongestStreak] = useState();
    const [codewarsData, setCodewarsData] = useState();
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

        const calculateLongestStreak = async () => {
            try {
                const startYear = 2021;
                const currentYear = new Date().getFullYear();

                let allDays: { date: string; contributionCount: number }[] = [];

                for (let year = startYear; year <= currentYear; year++) {
                    const fromDate = `${year}-01-01`;
                    const data = await ContributionsService.fetch(fromDate);

                    const yearDays = data.contributions.flat().map(day => ({
                        date: day.date,
                        contributionCount: day.contributionCount
                    }));

                    allDays = allDays.concat(yearDays);
                }

                allDays.sort(
                    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                );

                let longest = 0;
                let current = 0;

                for (const day of allDays) {
                    if (day.contributionCount > 0) {
                        current++;
                        longest = Math.max(longest, current);
                    } else {
                        current = 0;
                    }
                }
                setLongestStreak(longest);
            } catch (err) {
                console.error(err);
            }
        };

        const getUserData = async () => {
            try {
                const data = await CodewarsService.getUserData();
                console.log("data: "+JSON.stringify(data));
                setCodewarsData(data);
            } catch (err) {
                console.error(err);
            }
        };

        getUserData();
        sumContributions();
        calculateLongestStreak();
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
            <IconGradient />

            <p className="stats__title">Stats</p>

            <div className="stats__content">
                <HighlightBox
                    icon={<MdCommit size={84} style={{fill: "url(#blue-purple-gradient)" }} />}
                    value={contributions ? contributions : <CircularProgress size={24} color="inherit" />}
                    label="Commits"
                    accentColor="#78E4FE"
                />
                <HighlightBox
                    icon={<MdWhatshot size={84} style={{fill: "url(#blue-purple-gradient)" }} />}
                    value={longestStreak ? longestStreak : <CircularProgress size={24} color="inherit" />}
                    label="Longest Streak"
                    accentColor="#78E4FE"
                />
                <HighlightBox
                    icon={<MdStar size={84} style={{fill: "url(#blue-purple-gradient)" }} />}
                    value={codewarsData ? codewarsData?.ranks.overall.name : <CircularProgress size={24} color="inherit" />}
                    label="Codewars Rank"
                    accentColor="#78E4FE"
                />
                <HighlightBox
                    icon={<MdLeaderboard size={84} style={{fill: "url(#blue-purple-gradient)" }} />}
                    value={codewarsData ? Math.round((Number(codewarsData?.leaderboardPosition)/746458)*100)+"%" : <CircularProgress size={24} color="inherit" />}
                    label="Codewars Honor Percentile"
                    accentColor="#78E4FE"
                />
            </div>
        </section>
    );
};

export default Stats;