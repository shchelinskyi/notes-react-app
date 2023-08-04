import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import NoteItem from './NoteItem';

const meta = {
    title: 'Components/NoteItem',
    component: NoteItem,
    decorators: [
        (Story) => <Provider store={store}>
            <Story />
        </Provider>],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NoteItem>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Active: Story = {
    args: {
        item:  {
            id: 1690743110210,
            nameValue:"Go to the dentist 01/08/2023",
            formattedDate:"July 27, 2023",
            categoryValue:"Task",
            contentValue:"Examine teeth",
            datesValue:"01/08/2023",
            archived:false
        }
    }
};

export const Archived: Story = {
    args: {
        item:  {
            id:1690743110367,
            nameValue:"Design a smart home automation system",
            formattedDate:"July 27, 2023",
            categoryValue:"Random Thought",
            contentValue:"Lighting, smart sockets",
            datesValue:"",
            archived:true
        }
    }
};

