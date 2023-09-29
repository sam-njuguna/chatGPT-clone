import { FC } from "react";
import type { Metadata } from "next";
interface layoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Signup |",
  description: "Form",
};

const layout: FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
