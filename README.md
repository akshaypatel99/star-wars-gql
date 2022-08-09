# Star Wars Trivia

### **_All you need to know about the Star Wars Universe - a mobile app built with React Native, Apollo Client and GraphQL_**

#### Check out the live site [**here**](https://tinyurl.com/starwars-trivia-gql).

## Project Overview

Star Wars Trivia is a mobile app that provides facts and
figures about the Star Wars universe. Users can see facts
about their favourite characters, planets and starships.

### Stack

- React Native
- GraphQL
- Apollo Client

## Purpose and Goal

The primary aim of the project was to learn how to build cross-platform mobile apps with React Native and continue practising TypeScript. I also wanted to learn how to use Apollo to query GraphQL APIs and how to use GraphQL to query data from a GraphQL server.

## Implementation & Features

#### STACK

The entire app was built with React Native. Of the two options of using the React Native CLI or Expo CLI, I decided to use Expo for an introductory React Native project. The Expo CLI does have limitations, such as some limited access to iOS and Android APIs and large build size, however, for the features in my app these would not be a limitation.

#### GRAPHQL & STATE

I chose to query the [Star Wars GraphQL API](https://github.com/graphql/swapi-graphql/) using [Apollo Client](https://www.apollographql.com/docs/react/), which is a comprehensive library for state management, fetching and caching data. Apollo Client is a great tool that allows you to declaratively fetch data and present it without having to manually manage loading states. By caching the fetched data in the Apollo cache, it avoids unnecessary network requests.

#### INFINITE SCROLL

The `fetchMore` helper function of the `useQuery` hook, combined with the `FlatList` component of React Native, allows for infinite scrolling. The user can scroll to the bottom of the list and the app will fetch more data from the StarWars GraphQL API.

## Lessons Learned

This was a great project to learn how to use React Native and how to use Apollo Client to query data from a GraphQL server. Additional screens could be added to the app to allow the user to see facts about species, vehicles and the films. Cross-referencing data across screens is another feature that could be added in the future.

The Expo CLI makes it easy to build a React Native app, however, the next step would be to build a React Native app without Expo, which allows for using more native APIs and libraries.
