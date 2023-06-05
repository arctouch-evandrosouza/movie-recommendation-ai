import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Loading from '@/components/Loading';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Loading Component", () => {
 
    test('should load the component', async () => { 
        render(<Loading   />)
        const element = screen.getByRole('')
        expect(element).toBeInTheDocument()
    });
});