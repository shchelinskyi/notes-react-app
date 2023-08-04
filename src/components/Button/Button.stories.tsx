import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import Button from './Button';
import '../../index.css';


const meta = {
    title: 'Components/Button',
    component: Button,
    decorators: [
        (Story) => <Provider store={store}>
            <Story />
        </Provider>],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        children: 'Click me!',
        clickFunc: 'openForm',
        size: 'medium',
    },
};

