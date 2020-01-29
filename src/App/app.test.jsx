import { render } from '@testing-library/react';
import * as React from 'react';
import App from './app';

it('renders the app', () => {
    const document = render(<App />);
    expect(document).toBeTruthy();
});