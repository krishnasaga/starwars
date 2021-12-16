import React, {useState, useContext} from 'react';

export const CharacterContext = React.createContext({});
import {Character, CharacterEntities, DataSchema} from '../Types';

export const CharacterContextProvider = ({children}: { children: React.ReactNode }) => {
    const [characters, setCharacters] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    return (<CharacterContext.Provider
        value={{
            characters,
            setCharacters,
            pageNumber,
            setPageNumber,
            isLoading,
            setIsLoading
        }}>
        {children}
    </CharacterContext.Provider>);
};

const toKeyValuePairs = (array: Character[]): CharacterEntities =>
    array.reduce((acc: CharacterEntities, current: Character) => {
    acc[current.id] = current;
    return acc;
}, {});

export const loadCharacters = ({pageNumber = 1}): Promise<DataSchema> => {
    return fetch(`/data${pageNumber}.json`)
        .then(response => response.json());
}

export const delay = (time: number, promise: Promise<any>): Promise<DataSchema> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            promise
                .then(data => {
                    resolve(data);
                });
        }, time);
    });
}

export const useStarWars = (): {
    characters: CharacterEntities,
    loadMoreCharacters: () => void,
    isLoading: boolean,
    pageNumber: number
} => {
    const {
        characters,
        setCharacters,
        pageNumber,
        setPageNumber,
        isLoading,
        setIsLoading
    } = useContext(CharacterContext) as {
        characters: CharacterEntities,
        setCharacters: (state: (state : CharacterEntities) => CharacterEntities) => CharacterEntities,
        pageNumber: number,
        setPageNumber: (state: number) => number,
        isLoading: boolean,
        setIsLoading: (state: boolean) => void,
    };

    const loadMoreCharacters = () => {
        setIsLoading(true);
        delay(2000, loadCharacters({pageNumber: pageNumber + 1}))
            .then((data) => {
                setCharacters((state : CharacterEntities ) :CharacterEntities =>
                    Object.assign({},state,toKeyValuePairs(data.results)));
                setPageNumber(data.info.page);
                setIsLoading(false);
            });
    };
    return {
        loadMoreCharacters,
        isLoading,
        characters,
        pageNumber
    }
};
