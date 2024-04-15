import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "./";

const meta: Meta<typeof DataGrid> = {
  component: DataGrid,
};

export default meta;

type Story = StoryObj<typeof DataGrid>;

export const Basic: Story = {
  render: () => <DataGrid />,
};
