import './roating.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }:any) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
