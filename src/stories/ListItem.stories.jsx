import React from 'react';
import {ListItem} from "./components/ListItem";

export default {
    title: 'Example/ListItem',
    component: ListItem,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});

