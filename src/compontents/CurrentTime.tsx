import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('');
  const [timeZoneOffset, setTimeZoneOffset] = useState('');
  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const getTimeZoneOffset = () => {
      const offset = new Date().getTimezoneOffset() / 60;
      const sign = offset <= 0 ? '+' : '-';
      return `UTC${sign}${Math.abs(offset)}`;
    };

    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    setTimeZoneOffset(getTimeZoneOffset());

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{currentTime.toLocaleTimeString()}</p>
      <p>{timeZone} ({timeZoneOffset})</p>
    </div>
  );
};

export default CurrentTime;
