# Star Wars Trivia

### A Star Wars trivia app powered by _GraphQL_, _Apollo Client_ and _React Native_. Written in _TypeScript_.

This is my first project using React Native, TypeScript and GraphQL, therefore to make life easier I used the Expo SDK to build the app.

The data is fetched from a [Star Wars GraphQL API](https://github.com/graphql/swapi-graphql/) using Apollo Client's [useQuery](https://www.apollographql.com/docs/react/api/react/hooks/#usequery) hook.
The data is then cached in memory using the [relayStylePagination](https://www.apollographql.com/docs/react/pagination/cursor-based/#relay-style-cursor-pagination) helper function.

Using cursor-based pagination allows for smaller and faster network responses, ensuring the app also remains fast by rendering a small number of items at a time.

Expo makes developing cross-platform mobile apps very easy, from the setup to the build process. There are certain drawbacks regarding size and native libraries, but for a beginner project this wasn't an issue.
