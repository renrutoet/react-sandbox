import type { Meta, StoryObj } from "@storybook/react";

import { Button, withLabel, withAlert } from "./SimpleHOC";
import { ComponentProps } from "react";
// import { Button } from "../../stories/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Patterns/HigherOrderComponents",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    label: "Click me!",
  },
};

export const HOCLabel: Story = {
  render: () => {
    const withLabel = (Component: React.ComponentType) => {
      const label = "From HOC";

      return (props: ComponentProps<any>) => (
        <Component {...props} label={label} />
      );
    };

    const ButtonWithLabel = withLabel(Button);

    return <ButtonWithLabel />;
  },
};
export const HOCAlert: Story = {
  render: () => {
    const withAlert = (Component: React.ComponentType) => {
      const handleClick = (): void => {
        alert("From the Higher Order Function!");
      };

      return (props: ComponentProps<any>) => (
        <Component {...props} onClick={handleClick} />
      );
    };

    const ButtonWithAlert = withAlert(Button);

    return <ButtonWithAlert label={"Click"} />;
  },
};
