import './roating.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }:any) => {
  const animationDuration = `${speed}s`;

  return (
    <button
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </button>
  );
};

export default ShinyText;
