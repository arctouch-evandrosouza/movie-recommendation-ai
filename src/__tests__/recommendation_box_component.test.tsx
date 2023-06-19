import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationBox from '@/components/RecommendationBox';

import { movies } from '../mock/movie';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing RecommendationBox Component", () => {
 
    test('should load the component', async () => { 
        render(<RecommendationBox movie={movies[0]}/>)
        const element = screen.getByText(movies[0].title)
        expect(element).toBeInTheDocument()
    });
 
});