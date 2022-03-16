import React from 'react';
import {Alert} from "./components/Alert";

export default {
    title: 'Example/Alert',
    component: Alert,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});

