import React, {useState, useContext} from 'react';

export const CharacterContext = React.createContext({});

export const CharacterContextProvider = ({children}) => {
    const [characters, setCharacters] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(0);

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

const toKeyValuePairs = array => array.reduce(function (acc, current) {
    acc[current.id] = current;
    return acc;
}, {});

export const loadCharacters = ({pageNumber = 1}) => {
    return fetch(`/data${pageNumber}.json`)
        .then(response => response.json());
}

export const delay = (time,promise) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            promise
                .then( data => {
                    resolve(data);
                });
        },time);
    });
}

export const useStarWars = () => {
    const {
        characters,
        setCharacters,
        pageNumber,
        setPageNumber,
        isLoading,
        setIsLoading
    } = useContext(CharacterContext);

    const loadMoreCharacters = () => {
        setIsLoading(true);
        delay(2000,loadCharacters({pageNumber: pageNumber + 1}))
            .then((data) => {
                setCharacters((state) => Object.assign({},
                    state,
                    toKeyValuePairs(data.results)));
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
