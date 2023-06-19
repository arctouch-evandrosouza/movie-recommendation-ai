import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Video from '@/components/Video';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Video Component", () => {

    let url = '123'
    let source = 'youtube'

    test('should load component', async () => { 
       // render(<Video url={url} source={source} />)
       // const element = screen.getByRole('')
       // expect(element).toBeInTheDocument()
    });
});