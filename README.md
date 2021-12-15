# StarWars


## Technology stack considerations

### Styled Components

### UI System theme specification

### Theme UI

## Performance considerations

### Optimize Images
 - Loading cna be defferd
 - Progressive loading 

### Optimize List
 - Virtualization - only render elements that are in view port while scrolling. it helps when there are hundreds of list items to render


## userStarWars Hook

All data fetching and state management logic to manage the data is behind this hook. this hook will give access to several states of data includeing actual data

```jsx
  const {
      loadMoreCharacters,
      isLoading,
      characters,
      pageNumber
  } = useStarWars();

```
