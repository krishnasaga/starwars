import React from 'react';
import { CharactersListItem } from "./CharactorListItem";
import { Grid,Box } from 'theme-ui';
import {useStarWars} from "./CharacterContext";

import { Link } from "react-router-dom";
import { Loader } from './CharacterLoader';
import { Character } from "../Types";

export const CharactersList = () => {
    const { characters } = useStarWars();
    const characterArray : Character[] = Object.values(characters || {});
    return <Box>
        {characters ?  <Grid data-test-id="list" columns={[1,4]} bg={'background'}>
            { characterArray.map((data)=>{
            const { id } = data;
            return <Link to={`/xmen/${id}`}>
                <CharactersListItem key={id} data={data}/>
            </Link>
        }) }
    </Grid> : null }
        <Loader/>
    </Box>
};
