import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  className?: string;
  type?: "button" | "submit" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ title, className, handleClick, type }) => {
  return (
    <button
      disabled={true}
      type={type}
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
