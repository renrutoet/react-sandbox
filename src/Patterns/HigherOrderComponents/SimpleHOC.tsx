import { ComponentProps } from "react";

const Button = ({ onClick }: any) => {
  return <button onClick={onClick}> Click</button>;
};

const withLogic = (Component: React.ComponentType) => {
  const hocProp = "testing";

  return (props: ComponentProps<any>) => (
    <Component {...props} hocProp={hocProp} />
  );
};

const ButtonWithLogic = withLogic(Button);

export default ButtonWithLogic;
