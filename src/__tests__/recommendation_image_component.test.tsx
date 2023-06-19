import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationImage from '@/components/RecommendationImage';
import { movies } from '../mock/movie';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing RecommendationImage Component", () => {
 
    test('should load the image component', async () => { 
        render(<RecommendationImage  url={movies[0].image} alt={movies[0].title} />)
        const element = screen.getByRole('img')
        expect(element).toBeInTheDocument()
    });
 
    test('should load the image component with alt text ', async () => { 
        render(<RecommendationImage  url={movies[0].image} alt={movies[0].title} />)
        const elementByAlt = screen.getByAltText(movies[0].title)
        expect(elementByAlt).toBeInTheDocument()
    });
});