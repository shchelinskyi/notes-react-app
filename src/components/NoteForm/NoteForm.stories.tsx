import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import NoteForm from './NoteForm';
import '../../index.css';


const meta = {
    title: 'Components/NoteForm',
    component: NoteForm,
    decorators: [
        (Story) => <Provider store={store}>
            <Story />
        </Provider>],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NoteForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {

};

