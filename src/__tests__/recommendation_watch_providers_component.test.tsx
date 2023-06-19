import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import RecommendationWatchProviders from '../components/RecommendationWatchProviders';
import { movies } from '../mock/movie';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing RecommendationWatchProviders Component", () => {
 
 
    test('should load the component', async () => { 

        const watchProviders = movies[0].watchProviders;
        const countWatchProviders = watchProviders?.length
        render(<RecommendationWatchProviders  watchProviders={watchProviders}  />)

        const items = screen.getAllByRole("listitem")
        expect(items.length).toBe(countWatchProviders)
      //  expect(element.find(SelectField)).to.have.lengthOf(2)
    });
});