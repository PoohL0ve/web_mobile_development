import { useEffect } from 'react';
// Constant Values: Using a Lookup Object
const TUNE_MAP = {
    Bass: "🎵🎵🎵 🔘 🎵🎵🎵 GET LOW!!!",
    Harmony: "🎶🎶🎶 🎹 🎶🎶🎶 Relax",
    Drum: "🎶🎶🎶 🥁 🎶🎶🎶 Time for the rhythm and beat"
};
function ChannelStrip({ id, name, isMuted, changeMute }) {
    const tune = TUNE_MAP[name] || "Generic Beat";

    // Run each time the mute is toggled
    useEffect(() => {
        console.log(`${name} status is now: ${isMuted ? 'Muted' : 'Active'}`);
        return () => {
            console.log(`Let's clean up: ${name}`);
        };
    }, [isMuted, name]);

    return (
        <div>
            <h3>Time for {name}</h3>
            {!isMuted && (<h4>Party Time: {tune}</h4>)}

            {/*Reference: Only run when clicked, it's a closure*/}
            <button onClick={() => changeMute(id)}>
                {isMuted ? "Unmute" : "Mute"}
            </button>
        </div>
    )
}

export default ChannelStrip