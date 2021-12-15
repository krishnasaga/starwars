# StarWars

This is a demo application listing star wars charactors

## Technology stack considerations

- Technology stack is not architecture
- A library or framework may bring some architecture building blocks. but it should never have considered as architecture. for example React is not part of you application architecture. but it brings unidirectional data flow. which will be an architecture constraint for the applications that using it. 
- chose of technology stack and architecture decisions should be based on scalability, resilience and economics at that point of time. Hence we need evolutionary architecture as economic conditions change the architecture can evolve. 
for example, you may not need super high availability and super speed performance when your application/feature in a state when time to market is priority but at some point in future the application should be highly available and performed for competitive advantage. 


### Styled Components

- In my opinions styled components provides good composition of course with some tradeoffs. 

###  System UI theme specification

[https://github.com/system-ui/theme-specification
](https://github.com/system-ui/theme-specification)

- This theme specification is seperated from actual implementation. it is not coupled with any library
- It is designer centric and created on the concept of scales

In my personal opinion using such specification improves communication between designers and developers saves so much time and technical debt in log run.

### Theme UI

## Performance considerations

### Optimize Images
 - Insertion of images to the dom can be different and a placeholder can be used. This helps more when using server render
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

  - 2s deal is added to data fetching to illustrate the loading state. this is done using delay function