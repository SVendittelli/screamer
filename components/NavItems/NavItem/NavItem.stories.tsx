import type { Meta, StoryObj } from "@storybook/react";
import { FaHouse } from "react-icons/fa6";
import NavItem from "./NavItem";

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  title: "NavItem",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { href: "/", label: "Home", icon: <FaHouse /> },
  argTypes: {
    icon: { control: { disable: true }, description: "Icon to display" },
  },
};

type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  render: (args) => <NavItem {...args} />,
};

export default meta;
