export const PhaseSelector = ({ gamePhase, setGamePhase }) => {
    const handlePhaseChange = (event) => {
        setGamePhase(event.target.value);
    };

    return (
        <select value={gamePhase} onChange={handlePhaseChange}>
            <option value="The Crib">The Crib</option>
            <option value="The Go">The Go</option>
            <option value="The Count">The Count</option>
        </select>
    );
};