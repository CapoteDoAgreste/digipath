import {Next as Component} from './Next';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'next',
  component: Component,
};

export const Next: Story = {
  // ...
};

export default meta;
