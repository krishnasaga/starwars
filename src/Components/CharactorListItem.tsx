import React from 'react';
import {Box, Image, Text} from 'theme-ui';
import {Character} from "../Types";

const Card = (props : any) => {
    return <Box sx={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    }} p={10} {...props}/>
}

export const CharactersListItem = ({data} : { data: Character }) => {
    const { name,img } = data;
    return <Card bg={'highlight'}>
    <Image src={img}/>
    <Text as={'h2'}>{name}</Text>
    </Card>;
};
