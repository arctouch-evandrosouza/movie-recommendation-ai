import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Text from '@/components/Text';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Text Component", () => {

    let text = 'Lorem Ipsum, Lorem Ipsum'

    test('the text component should have a text', async () => { 
        render(<Text text={text} />)
        const element = screen.getByText(text) 
        expect(element).toBeInTheDocument()
    });
});