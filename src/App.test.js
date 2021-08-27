import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey there! Whats up/i);
  expect(linkElement).toBeInTheDocument();
});

test('sum', () => {
  expect(1+1).toBe(2);
});
