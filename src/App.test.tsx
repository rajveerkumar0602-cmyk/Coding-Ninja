import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coding ninjas title', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/Coding Ninjas/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
