import React from 'react';
import { CharactersListItem } from "./CharactorListItem";
import { Grid,Box } from 'theme-ui';
import {useStarWars} from "./CharacterContext";

import { Link } from "react-router-dom";
import { Loader } from './CharacterLoader';

export const CharactersList = ({data}) => {
    const { characters } = useStarWars();
    return <Box>
        <Grid columns={[1,4]} bg={'background'}>
        {characters ? Object.values(characters).map((data)=>{
            const { id } = data;
            return <Link to={`/xmen/${id}`}>
                <CharactersListItem key={id} data={data}/>
            </Link>
        }) : null }
    </Grid>
        <Loader/>
    </Box>
};
