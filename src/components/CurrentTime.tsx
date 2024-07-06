import { useState, useEffect } from "react";

const getTimeZoneOffset = () => {
    const offset = new Date().getTimezoneOffset();
    const sign = offset <= 0 ? "+" : "-";
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    return `UTC${sign}${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timeZone, setTimeZone] = useState("");
    const [timeZoneOffset, setTimeZoneOffset] = useState("");
    useEffect(() => {
        setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        setTimeZoneOffset(getTimeZoneOffset());
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <div>
            <p>{currentTime.toLocaleTimeString()}</p>
            <p>
                {timeZone} ({timeZoneOffset})
            </p>
        </div>
    );
};

export default CurrentTime;
