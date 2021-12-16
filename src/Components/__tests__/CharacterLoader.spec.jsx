import {render,screen} from "@testing-library/react";
import {Loader} from "../CharacterLoader";
import {useInView} from "react-intersection-observer";
import React, {useEffect} from 'react';

const mockIsLoading = jest.fn(() => true);
const mockLoadMoreCharacters = jest.fn(() => false);

jest.mock('react-intersection-observer');

jest.mock('../CharacterContext', () => {
    return {
        useStarWars: () => ({
            isLoading: mockIsLoading(),
            loadMoreCharacters: mockLoadMoreCharacters
        })
    }
})

describe('Loader', () => {

    beforeEach(()=>{
      useInView.mockImplementation(() => ({ ref: null, inView: false }));
    });

    it('should show loading while loading', () => {
        useInView.mockImplementation(() => [null, false]);
        render(<Loader/>);

    });

    it('should request load more items on change to inView', () => {
        useInView.mockImplementation(() => ({ ref: null, inView: true }));
        render(<Loader/>);
        expect(mockLoadMoreCharacters).toHaveBeenCalledTimes(1);
    });

    it('show loader when when loading in progress', () => {
        mockIsLoading.mockReturnValueOnce(true);
        render(<Loader/>);
        expect(screen.queryByText('Loading....')).toBeTruthy();

    })

    it('should hide loader when loading is complete', () => {
        mockIsLoading.mockReturnValueOnce(false);
        render(<Loader/>);
        expect(screen.queryByText('Loading....')).not.toBeTruthy();
    })

});
