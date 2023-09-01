import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ title, className, handleClick }) => {
  return (
    <button
      disabled={true}
      type={"button"}
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
