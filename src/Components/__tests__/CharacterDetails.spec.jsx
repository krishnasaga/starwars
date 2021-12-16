import {render} from "@testing-library/react";
import {Loader} from "../CharacterLoader";
import {useInView} from "react-intersection-observer";
import React from 'react';

jest.mock('../CharacterContext', () => {
    return {
        useStarWars: () => ({
            isLoading: false
        })
    }
})

jest.mock('react-intersection-observer', () => {
    return {
        useInView: () => ({
            inView: false
        })
    }
})

describe('Loader', () => {
    it('should show loading while loading', () => {
        render(<Loader/>)
    })
});
