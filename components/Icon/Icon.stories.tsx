import type { Meta, StoryObj } from "@storybook/react";
import { FaIcons } from "react-icons/fa6";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Icon",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { label: "Icon" },
  argTypes: {},
};

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => (
    <Icon {...args}>
      <FaIcons />
    </Icon>
  ),
};

export default meta;
