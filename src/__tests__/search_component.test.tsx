import React from 'react'
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Search from '@/components/Search';
import { TEXTS } from '@/_i18n/languages';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Search Component", () => {
 
    test('should load the inout component', async () => { 
        render(<Search currentLanguage={TEXTS.en} setIsLoading={()=>{}} setRecommendations={()=>{}}  />)
        
       const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()

        const button = screen.getByRole('button', { name: /send/i })
        expect(button).toBeInTheDocument()
    });
});