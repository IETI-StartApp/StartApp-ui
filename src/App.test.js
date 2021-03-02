import React from 'react';
import { render, screen } from '@testing-library/react';
import {RegisterProjectPage} from './pages'

test('renders learn react link', () => {
  render(<RegisterProjectPage />);
  const linkElement = screen.getByText(/Elige un nombre para tu proyecto/i);
  expect(linkElement).toBeInTheDocument();
});
