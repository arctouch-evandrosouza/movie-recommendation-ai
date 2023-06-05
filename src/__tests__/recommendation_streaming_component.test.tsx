import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationStreaming from '@/components/RecommendationStreaming';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing RecommendationStreaming Component", () => {
 
    test('should load the component', async () => { 
        render(<RecommendationStreaming   />)
        const element = screen.getByRole('')
        expect(element).toBeInTheDocument()
    });
});