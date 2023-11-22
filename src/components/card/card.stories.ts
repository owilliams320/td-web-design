import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './card.vue';

const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
  },
  args: { primary: false }, // default value
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
  },
  render: ()=> ({
    components: { Card },
    template: `
        <Card>
            Discover a better way to accelerate Artificial Intelligence/Machine Learning
        </Card>
    `
  })
};
