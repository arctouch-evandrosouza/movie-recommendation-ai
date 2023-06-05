import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationsStreamingButton from '@/components/RecommendationsStreamingButton';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing RecommendationsStreamingButton Component", () => {
 
    test('should load the component', async () => { 
        render(<RecommendationsStreamingButton   />)
        const element = screen.getByRole('')
        expect(element).toBeInTheDocument()
    });
});