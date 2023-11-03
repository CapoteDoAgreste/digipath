import {Previous as Component} from './Previous';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'previous',
  component: Component,
};

export const Previous: Story = {
  // ...
};

export default meta;
