import React from 'react';
import {Card} from "./components/Card";

export default {
    title: 'Example/Card',
    component: Card,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

