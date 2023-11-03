import {ExceptionDigimon as Component} from './ExceptionDigimon';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'exceptionDigimon',
  component: Component,
};

export const ExceptionDigimon: Story = {
  // ...
};

export default meta;
