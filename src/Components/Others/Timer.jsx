import { useEffect, useState } from "react";

function Timer() {
    const initialCount = 12 * 60 * 60; // 12 hours in seconds
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount((prev) => {
                if (prev === 0) {
                    clearInterval(timerId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    // Convert seconds to hours, minutes, and seconds
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count % 3600) / 60);
    const seconds = count % 60;

    return (
        <>
            <p>{hours}: {minutes}: {seconds}</p>
        </>
    );
}

export default Timer;
