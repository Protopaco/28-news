import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import Articles from '../containers/Articles/Articles'
import Article from '../containers/Article/Article'
import Search from '../containers/Search/Search'

describe('App component', () => {
    afterEach(() => cleanup());

    it('renders Articles', () => {
        const { asFragment } = render(<Articles />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders Article', () => {
        const { asFragment } = render(<Article />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders Search', () => {
        const { asFragment } = render(<Search />);
        expect(asFragment()).toMatchSnapshot();
    });
});