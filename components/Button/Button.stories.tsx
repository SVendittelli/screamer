import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  parameters: { layout: "centered" },
  args: { children: "Text", disabled: false },
  argTypes: {
    disabled: { control: "boolean" },
    href: {
      control: "text",
      description:
        "Optional router link location. Mutually exclusive with `onClick`.",
    },
    onClick: {
      action: "clicked",
      description: "Optional click handler. Mutually exclusive with `href`.",
      type: "function",
    },
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export default meta;
