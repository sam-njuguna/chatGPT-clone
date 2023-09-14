import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const LoginLayout: FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;
