import { useRef } from "react";

function Start({ setUserName }) {
  const inputRef = useRef();

  const handleClick = () => {
    if (!inputRef.current.value.trim()) return;
    setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        ref={inputRef}
        type="text"
        placeholder="enter your name"
        className="startInput"
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}

export default Start;
