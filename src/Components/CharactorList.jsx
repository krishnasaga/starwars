import React from 'react';
import { CharactersListItem } from "./CharactorListItem";
import { Grid,Box } from 'theme-ui';
import {useStarWars} from "./CharacterContext";

import { Link } from "react-router-dom";
import { Loader } from './CharacterLoader';

export const CharactersList = ({data}) => {
    const { characters } = useStarWars();
    return <Box>
        {characters ?  <Grid data-test-id="list" columns={[1,4]} bg={'background'}>
            { Object.values(characters).map((data)=>{
            const { id } = data;
            return <Link to={`/xmen/${id}`}>
                <CharactersListItem key={id} data={data}/>
            </Link>
        }) }
    </Grid> : null }
        <Loader/>
    </Box>
};
