import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Search from '@/components/Search';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Search Component", () => {
 
    test('should load the component', async () => { 
        render(<Search   />)
      //  const element = screen.getByRole('input')
      //  expect(element).toBeInTheDocument()
    });
});