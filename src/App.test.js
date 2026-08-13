// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EdgeLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EdgeLink/i);
    expect(titleElement).toBeInTheDocument();
});
