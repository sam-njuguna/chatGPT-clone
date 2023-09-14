import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const SignupLayout: FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SignupLayout;
