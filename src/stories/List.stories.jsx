import React from 'react';
import { List } from './components/List';

export default {
  title: 'Example/List',
  component: List,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <List {...args} />;

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  users: []
};

