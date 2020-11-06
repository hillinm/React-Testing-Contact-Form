import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';

import ContactForm from './ContactForm';

test('renders ContactForm', async () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target:{value:'Tim'}});
    fireEvent.change(lastNameInput, {target:{value: 'Bender'}});
    fireEvent.change(emailInput, {target:{value:'timbender@gmail.com'}});
    fireEvent.change(messageInput, {target:{value:'Message Message'}});

    expect(firstNameInput).toHaveValue('Tim')
    expect(lastNameInput).toHaveValue('Bender')
    expect(emailInput).toHaveValue('timbender@gmail.com')
    expect(messageInput).toHaveValue('Message Message')
})