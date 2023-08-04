import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import NoteTable from './NoteTable';



const meta = {
    title: 'Components/NoteTable',
    component: NoteTable,
    decorators: [
        (Story) => <Provider store={store}>
            <Story />
        </Provider>],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NoteTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notes: Story = {
    args: {
        tableTitle: 'My Notes',
        typeNotes: 'notes',
    }
};

export const ArchivedNotes: Story = {
    args: {
        tableTitle: 'Archived Notes',
        typeNotes: 'archivedNotes',
    }
};

