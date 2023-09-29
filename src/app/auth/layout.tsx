import { Metadata } from "next";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Auth |",
  description: "",
};
const layout: FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
