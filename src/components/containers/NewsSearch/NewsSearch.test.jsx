global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch container', () => {
    it('changes the search results', () => {
        render(<NewsSearch />);

        const display = screen.getByTestId('display');
        const searchInput = screen.getByTestId('searchBar')
        const submitButton = screen.getByTestId('submitButton')
        fireEvent.change(searchInput, {
            target: {
                value: 'Bezos'
            }
        });

        fireEvent.submit(submitButton);

        return waitFor(() => {
            expect(display).toHaveTextContent('Jeff Bezos')
        })
    })
})