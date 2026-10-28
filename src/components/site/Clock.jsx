import { useEffect, useState } from 'react';

const format = () =>
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Budapest', hour: '2-digit', minute: '2-digit' }).format(new Date());

// Live local time (CET/CEST), ticking every 15s.
const Clock = ({ className = '' }) => {
    const [time, setTime] = useState(format);
    useEffect(() => {
        const id = setInterval(() => setTime(format()), 15000);
        return () => clearInterval(id);
    }, []);
    return <span className={`tabular ${className}`}>{time} CET</span>;
};

export default Clock;
