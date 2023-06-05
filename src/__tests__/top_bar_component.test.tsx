import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import TopBar from '@/components/TopBar';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing TopBar Component", () => {

    let text = 'Movies Recommendations By AI'

    test('should load a text on top bar', async () => { 
        render(<TopBar text={text} />)
        const element = screen.getByRole('banner')
        expect(element).toBeInTheDocument()
    });

    test('the top bar should have a text', async () => { 
        render(<TopBar text={text} />)
        const element = screen.getByText(text) 
        expect(element).toBeInTheDocument()
    });
});