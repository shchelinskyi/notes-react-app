import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../../redux/store";
import NoteForm from './NoteForm';



const meta = {
    title: 'Components/NoteForm',
    component: NoteForm,
    decorators: [
        (Story) => <Provider store={store}>
            <div style={{ width: '100vw', height:'100vh'}}>
            <Story />
            </div>
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

