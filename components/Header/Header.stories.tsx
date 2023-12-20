import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Header",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  args: {},
  argTypes: {},
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => (
    <div className="h-24">
      <Header {...args} />
    </div>
  ),
};

export default meta;
