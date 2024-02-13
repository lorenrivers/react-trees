export default function Button() {
  function handleClick() {
    console.log("Second button was clicked!");
  }

  return (
    <div>
      <button
        onClick={() => {
          alert("You clicked the button!");
        }}
      >
        Want an alert?
      </button>
      <button onClick={handleClick}>Console log something!</button>
    </div>
  );
}
