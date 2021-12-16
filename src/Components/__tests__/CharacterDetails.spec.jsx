import {render,screen} from "@testing-library/react";
import React from 'react';
import {CharacterDetails} from "../CharacterDetails";
import { useParams} from "react-router-dom";
import { useStarWars } from "../CharacterContext";

jest.mock('react-intersection-observer');
jest.mock('react-router-dom');
jest.mock('../CharacterContext');

describe('Loader', () => {

    beforeEach(()=>{
      useParams.mockImplementation(() => ({ id: 10 }));
      useStarWars.mockImplementation(() => ({ characters: { 10: { name: 'JOHN'}}}));
    });

    it('should show right info', () => {
        useParams.mockImplementation(() => ({ id: 10 }));
        useStarWars.mockImplementation(() => ({ characters: { 10: {
            name: 'JOHN',
            description: 'description',
            affiliation: 'XMEN'
        }}}));
        render(<CharacterDetails/>);
        expect(screen.queryByTestId('name').textContent).toBe('JOHN');
        expect(screen.queryByTestId('description').textContent).toBe('description');
        expect(screen.queryByTestId('affiliation').textContent).toBe('AFFILIATION: XMEN');

    });


});
