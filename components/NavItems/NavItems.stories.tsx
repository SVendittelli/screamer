import type { Meta, StoryObj } from "@storybook/react";
import NavItems from "./NavItems";

const meta: Meta<typeof NavItems> = {
  component: NavItems,
  title: "NavItems",
  parameters: { layout: "centered" },
  args: {},
  argTypes: {},
};

type Story = StoryObj<typeof NavItems>;

export const NormalUser: Story = {
  render: (args) => <NavItems {...args} />,
};

export const AdminUser: Story = {
  ...NormalUser,
  parameters: { session: { doesSessionExist: true, roles: "admin" } },
};

export default meta;
