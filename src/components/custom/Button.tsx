import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  title: string;
  className?: string;
  type?: "button" | "submit" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  title,
  className,
  handleClick,
  type,
  icon,
}) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {icon && <div className="relative text-[20px]">{icon}</div>}
    </button>
  );
};

export default Button;
