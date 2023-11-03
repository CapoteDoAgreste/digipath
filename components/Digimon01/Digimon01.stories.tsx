import {Digimon01 as Component} from './Digimon01';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'digimon01',
  component: Component,
};

export const Digimon01: Story = {
  // ...
};

export default meta;
