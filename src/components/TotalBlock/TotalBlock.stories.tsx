import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import TotalBlock from './TotalBlock';
import '../../index.css';


const meta = {
    title: 'Components/TotalBlock',
    component: TotalBlock,
    decorators: [
        (Story) => <Provider store={store}>
            <Story />
        </Provider>],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TotalBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {

};

