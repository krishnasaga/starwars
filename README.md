# StarWars

This is a demo application listing star wars characters

## Technology stack considerations

- The technology stack is not architecture.
- A library or framework may bring some architecture building blocks. But it should never have been considered architecture. For example, React is not part of your application architecture. But it brings unidirectional data flow, which will be an architecture constraint for the applications that use it.
- Chose of the technology stack and architecture decisions should be based on scalability, resilience, and economics. Hence we need evolutionary architecture as economic conditions change the architecture can evolve. For example, you may not need super high availability and super speed performance when your application/feature is in a state when the time to market is a priority, but at some point in future, the application should be highly available and performed for competitive advantage.


### Styled Components

- In my opinions styled components provides good composition of course with some tradeoffs. 

###  System UI theme specification

[https://github.com/system-ui/theme-specification
](https://github.com/system-ui/theme-specification)

- This theme specification is separated from actual implementation. it is not coupled with any library
- It is designer centric and created on the concept of scales

In my personal opinion using such specifications improves communication between designers and developers saves so much time and technical debt in the long run.

### Theme UI

## Performance considerations

### Optimize Images
- Insertion of images to the dom can be differed and use a placeholder. This helps more when using server render
- Progressive loading - Progressively increase the image quality

### Optimize List
- Insertion of images to the dom can be differed and use a placeholder. This helps more when using server render
- Progressive loading - Progressively increase the image quality

## userStarWars Hook

All data fetching and state management logic to manage the data is behind this hook. this hook will give access to several states  including actual data

```jsx
  const {
      loadMoreCharacters,
      isLoading,
      characters,
      pageNumber
  } = useStarWars();

``` 

  - 2s deal is added to data fetching to illustrate the loading state. this is done using delay function


# What if StarWars implemented in micro frontends and microservices



