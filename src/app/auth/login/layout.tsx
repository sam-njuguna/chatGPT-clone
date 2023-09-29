import { FC } from "react";
import type { Metadata } from "next";
interface layoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Login |",
  description: "Form",
};
const LoginLayout: FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;
