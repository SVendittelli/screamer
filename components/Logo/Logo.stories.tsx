import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "Logo",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {},
  argTypes: {},
};

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: (args) => <Logo {...args} />,
};

export default meta;
