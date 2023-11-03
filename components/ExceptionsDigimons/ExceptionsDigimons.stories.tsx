import {ExceptionsDigimons as Component} from './ExceptionsDigimons';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'exceptionsDigimons',
  component: Component,
};

export const ExceptionsDigimons: Story = {
  // ...
};

export default meta;
