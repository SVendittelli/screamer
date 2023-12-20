import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Sidebar",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: { open: true, setOpen: () => {} },
  argTypes: {
    open: { description: "On mobile, whether or not the sidebar is visible." },
    setOpen: { description: "On mobile, set the open state." },
  },
};

type Story = StoryObj<typeof Sidebar>;

export const Admin: Story = {
  render: (args) => <Sidebar {...args} />,
  parameters: { session: { doesSessionExist: true, roles: "admin" } },
};

export const LoggedIn: Story = {
  ...Admin,
  parameters: { session: { doesSessionExist: true } },
};

export const LoggedOut: Story = {
  ...Admin,
  parameters: { session: { doesSessionExist: false } },
};

export default meta;
