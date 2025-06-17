export default function Button({ text, textColor }) {
  return (
    <button className={textColor} >
      {text}
    </button>
  );
}