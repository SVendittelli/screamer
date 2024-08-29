import type { Meta, StoryObj } from "@storybook/react";
import SidebarLayout from "./SidebarLayout";

const meta: Meta<typeof SidebarLayout> = {
  component: SidebarLayout,
  title: "Layout",
  parameters: { layout: "fullscreen" },
  args: {},
  argTypes: {},
};

type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = {
  render: (args) => <SidebarLayout {...args}>Main Content</SidebarLayout>,
};

export default meta;
