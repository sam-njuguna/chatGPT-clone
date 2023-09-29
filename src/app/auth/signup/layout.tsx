import { Metadata } from "next";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Signup |",
  description: "Form",
};
const SignupLayout: FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SignupLayout;
