import type { Meta, StoryObj } from '@storybook/vue3'

import Chip from './chip.vue'

const meta = {
  title: 'Example/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {},
  args: { primary: false } // default value
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'American Airlines'
  }
}

export const Selected: Story = {
  args: {
    label: 'American Airlines',
    active: true
  }
}
