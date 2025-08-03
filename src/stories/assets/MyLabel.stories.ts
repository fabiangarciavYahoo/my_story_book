import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel, type Props } from "../../components/MyLabel";

const meta: Meta<Props> = {
  title: 'MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'inline-radio'
    },
    color: {
      control: 'select'
    }
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Basic',
    color: 'text-primary',
    allCaps: false,
    size: 'normal',
    backgroundColor: 'blue'
  }
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps',
    color: 'text-tertiary',
    allCaps: true,
    size: 'normal',
    backgroundColor: 'magenta'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    color: 'text-secondary',
    allCaps: false,
    size: 'normal',
    backgroundColor: 'red'
    }
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    color: 'text-primary',
    allCaps: false,
    size: 'normal',
    backgroundColor: 'cyan'
    }
};
