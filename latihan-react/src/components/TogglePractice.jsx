import useToggle from "../hooks/useToggle";

function TogglePractice({ text, children }) {
    const { isVisible, actionToggle } = useToggle(false);

    return(
        <div>
            <button onClick={actionToggle}>
                {isVisible ? "Hide" : "Show"}
            </button>
            <p>{text} Status is { isVisible ? 'Visible' : 'Hidden'}</p>
            {isVisible && children}
        </div>
    )
}

export default TogglePractice;