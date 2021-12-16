import React, {useEffect} from 'react';
import {Text, Grid, Box, Image} from 'theme-ui';
import {
    useParams
} from "react-router-dom";
import {useStarWars} from "./CharacterContext";

export const CharacterDetails = (): React.ReactElement => {
    const {id} = useParams();
    const {characters, isLoading, loadMoreCharacters} = useStarWars();

    useEffect(() => {
        if (!characters) {
            loadMoreCharacters();
        }
    }, []);

    if (!id) return <Box>No Data</Box>;
    if (isLoading || !characters) return <Box>Loading...</Box>;

    const data = characters[parseInt(id)];
    const {img, name, description, affiliation} = data;
    return <Grid columns={[1, 2]}>
        <Box bg={'highlight'} p={'5'}>
            <Image src={img}/>
        </Box>
        <Box bg={'primary'} p={'5'}>
            <Text as={'h1'} data-testid={"name"}>{name}</Text>
            <Text as={'p'} my={10} data-testid={"description"}>{description}</Text>
            <Text as={'h3'} my={10} data-testid={"affiliation"}>AFFILIATION: {affiliation}</Text>
        </Box>
    </Grid>;
};
