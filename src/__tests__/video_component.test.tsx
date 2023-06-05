import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Video from '@/components/Video';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Video Component", () => {

    let url = '123'

    test('should load component', async () => { 
        render(<Video url={url} />)
        const element = screen.getByRole('banner')
        expect(element).toBeInTheDocument()
    });
});