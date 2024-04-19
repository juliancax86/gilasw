import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NotificationForm from './NotificationForm';

describe('NotificationForm Component', () => {
    it('renders correctly', () => {
        const { getByLabelText } = render(<NotificationForm />);
        expect(getByLabelText('Category:')).toBeInTheDocument();
        expect(getByLabelText('Message:')).toBeInTheDocument();
    });

    it('submits the form with category and message', async () => {
        const mockSubmit = jest.fn();
        const { getByLabelText, getByText } = render(<NotificationForm onSubmit={mockSubmit} />);
        fireEvent.change(getByLabelText('Category:'), { target: { value: 'Sports' } });
        fireEvent.change(getByLabelText('Message:'), { target: { value: 'Game tonight!' } });
        fireEvent.click(getByText('Send Notification'));

        await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
        expect(mockSubmit).toHaveBeenCalledWith({
            category: 'Sports',
            message: 'Game tonight!'
        });
    });
});
