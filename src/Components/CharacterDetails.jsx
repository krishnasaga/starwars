import React from 'react';
import {Text,Grid,Box, Image} from 'theme-ui';
import {
    useParams
} from "react-router-dom";
import {useStarWars} from "./CharacterContext";

export const CharacterDetails = () => {
    const { id } = useParams();
    const { characters } = useStarWars();
    const data = characters ? characters[id] : {};
    const { img,name,description,affiliation,powers} = data;
    return <Grid columns={[1,2]}>
        <Box bg={'highlight'} p={'5'} >
            <Image src={img}/>
        </Box>
        <Box bg={'primary'} p={'5'} >
            <Text as={'h1'}>{name}</Text>
            <Text as={'p'} my={10}>{description}</Text>
             <Text as={'h3'} my={10} >AFFILIATION: {affiliation}</Text>
        </Box>
    </Grid>;
};
