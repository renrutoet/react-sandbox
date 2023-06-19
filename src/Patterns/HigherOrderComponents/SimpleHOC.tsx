import { ComponentProps } from "react";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
}

export const Button = ({ onClick, label }: ButtonProps) => {
  return <button onClick={onClick}> {label}</button>;
};

export const withLabel = (Component: React.ComponentType) => {
  const label = "From HOC";

  return (props: ComponentProps<any>) => <Component {...props} label={label} />;
};

export const withAlert = (Component: React.ComponentType) => {
  const handleClick = (): void => {
    alert("From the Higher Order Function!");
  };

  return (props: ComponentProps<any>) => (
    <Component {...props} onClick={handleClick} />
  );
};

export const ButtonWithLabel = withLabel(Button);
export const ButtonWithAlert = withAlert(Button);
