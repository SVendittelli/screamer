import type { Meta, StoryObj } from "@storybook/react";
import ViewProfile from "./ViewProfile";

const meta: Meta<typeof ViewProfile> = {
  component: ViewProfile,
  title: "ViewProfile",
  parameters: {
    layout: "centered",
  },
  args: { isLoggedIn: true, name: "John Smith", href: "/" },
  argTypes: {},
};

type Story = StoryObj<typeof ViewProfile>;

export const Default: Story = {
  render: (args) => <ViewProfile {...args} />,
};

export const LoggedOut: Story = {
  render: (args) => <ViewProfile {...args} />,
  args: { isLoggedIn: false },
};

export default meta;
