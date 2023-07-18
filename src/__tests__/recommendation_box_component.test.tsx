import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationBox from '@/components/RecommendationBox';
import { movies } from '../mock/movie';
import { TEXTS } from '../_i18n/languages';
const currentLanguage = TEXTS.en;


describe("Testing RecommendationBox Component", () => {
 
    test('should load the component', async () => { 
        render(<RecommendationBox movie={movies[0]} currentLanguage={currentLanguage}/>)
        const element = screen.getByText(movies[0].title)
        expect(element).toBeInTheDocument()
    });
 
});