import { FC } from "react";

interface SvgProps {
  className?: string;
  pathData: string;
  width: string;
  height: string;
  fill: string;
}

const Svg: FC<SvgProps> = ({ className, pathData, width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className}
    >
      <path fill="currentColor" d={pathData} />
    </svg>
  );
};

export default Svg;
