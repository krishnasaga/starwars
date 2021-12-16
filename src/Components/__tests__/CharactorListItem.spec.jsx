/**
 * @jest-environment jsdom
 */

import {render,screen} from '@testing-library/react'
import {CharactersListItem} from "../CharactorListItem";
import React from 'react';

describe('CharacterList', () => {

    it('Should render without a list when data has characters', () => {
        render(<CharactersListItem data={{name: 'HELLO', image: 'URL'}} />);
        expect(screen.queryByTestId('list')).not.toBeTruthy();

    });


});
