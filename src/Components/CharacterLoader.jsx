import React, {useEffect} from 'react';
import {Box,Text} from "theme-ui";
import { useInView } from 'react-intersection-observer';
import {useStarWars} from "./CharacterContext";

export const Loader = () => {
    const { ref, inView } = useInView();
    const { isLoading,loadMoreCharacters} = useStarWars();
    useEffect(() => {
      if(inView) {
        loadMoreCharacters();
      }
    },[inView])

    return <Box ref={ref} my={100}>
        { isLoading
            ? <Text as={'h2'} sx={{ textAlign: 'center'}}> Loading.... </Text>
            : null
        }
    </Box>;
};
