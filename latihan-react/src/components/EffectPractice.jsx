import { useState, useEffect } from "react";

function EffectPractice() {
    const [ count, setCount] = useState(0);
    const [ name, setName ] = useState("Adinata");
    const [ seconds, setSeconds ] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        console.log(`Count sekarang: ${count}`);
    }, [count]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => {
                const nextSeconds = prevSeconds + 1;
                return nextSeconds;
            })
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Tambah Count</button>
            <button onClick={() => setCount(count - 1)}>Kurangi Count</button>
            <p>Count: {count}</p>
            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Name: {name}</p>
            <p>Seconds: {seconds}</p>
        </div>
    )
}

export default EffectPractice;