import React from 'react';
import {FollowerList} from "./components/FollowerList";


export default {
    title: 'Example/FollowerList',
    component: FollowerList,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <FollowerList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    followers: []
};
