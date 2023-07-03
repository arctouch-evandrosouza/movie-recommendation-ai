import React from 'react'
import {screen, render, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import Video from '@/components/Video';

import { movies } from '../mock/movie';

jest.mock('next/router', () => require('next-router-mock'));
describe("Testing Video Component", () => {
    test('should load component', async () => { 
        render(<Video title={movies[0].title} videoKey={movies[0].video?.key} site={movies[0].video.site}  />)
        //const video = await waitFor(() => screen.getByTitle(movies[0].title.toLowerCase()));
        //expect(video).toBeInTheDocument()
    });
});