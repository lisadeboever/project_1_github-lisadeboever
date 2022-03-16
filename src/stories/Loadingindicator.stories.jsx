import React from 'react';
import {Loadingindicator} from "./components/Loadingindicator";

export default {
    title: 'Example/Loadingindicator',
    component: Loadingindicator,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Loadingindicator {...args} />;

export const Default = Template.bind({});

