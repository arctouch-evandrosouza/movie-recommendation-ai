import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationImage from '@/components/RecommendationImage';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing RecommendationImage Component", () => {
 
    test('should load the component', async () => { 
        render(<RecommendationImage   />)
        const element = screen.getByRole('')
        expect(element).toBeInTheDocument()
    });
});