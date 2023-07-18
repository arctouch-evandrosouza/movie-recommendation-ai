import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationWatchProviders from '../components/RecommendationWatchProviders';
import { movies } from '../mock/movie';

import { TEXTS } from '../_i18n/languages';
const currentLanguage = TEXTS.en;

describe("Testing RecommendationWatchProviders Component", () => {
 
 
    test('should load the component', async () => { 

        const watchProviders = movies[0].watchProviders;
        const countWatchProviders = watchProviders?.length
        render(<RecommendationWatchProviders  watchProviders={watchProviders} currentLanguage={currentLanguage} />)

        const items = screen.getAllByRole("listitem")
        expect(items.length).toBe(countWatchProviders)
      //  expect(element.find(SelectField)).to.have.lengthOf(2)
    });
});