import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationBox from '@/components/RecommendationBox';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing RecommendationBox Component", () => {
 
    test('should load the component', async () => { 
        render(<RecommendationBox   />)
        const element = screen.getByRole('')
        expect(element).toBeInTheDocument()
    });
 
});