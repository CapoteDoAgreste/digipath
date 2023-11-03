import {PathDigimons as Component} from './PathDigimons';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'path digimons',
  component: Component,
};

export const PathDigimons: Story = {
  // ...
};

export default meta;
