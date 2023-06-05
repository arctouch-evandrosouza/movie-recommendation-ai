import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Title from '@/components/Title';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Title Component", () => {

    let text = 'Lorem Ipsum, Lorem Ipsum'

    test('should load a text component', async () => { 
        render(<Title text={text} />)
        const element = screen.getByRole('banner')
        expect(element).toBeInTheDocument()
    });

    test('the text component should have a text', async () => { 
        render(<Title text={text} />)
        const element = screen.getByText(text) 
        expect(element).toBeInTheDocument()
    });
});