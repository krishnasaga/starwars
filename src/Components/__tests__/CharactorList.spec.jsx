/**
 * @jest-environment jsdom
 */
/**
 * This testing boilerplate can be reduced forther
 */
import {render,screen} from '@testing-library/react'
import {Box} from "theme-ui";
import {CharactersList} from "../CharactorList";
import React from 'react';

const observe = jest.fn();
const unobserve = jest.fn();

global.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
}))

const mockCharactersData = jest.fn(() => {
    return []
});


jest.mock('../CharacterContext', () => {
    return {
        useStarWars: () => {
            return {
                characters: mockCharactersData()
            };
        }
    }
});


describe('CharacterList', () => {
    beforeEach(() => {
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });

    it('Should render without a list when data has no characters', () => {
        render(<CharactersList/>);
        expect(screen.queryByTestId('list')).not.toBeTruthy();

    });


});
