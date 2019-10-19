# vue-videos-experiment

This is a work-in-progress Vue demo site that lets users search for videos using the YouTube API.

Content and instructions came from the [Vue JS Essentials with Vuex and Vue Router course on Udemy](https://www.udemy.com/course/vue-js-course/)

This project relies on Google's [YouTube Data API v3](https://developers.google.com/youtube/v3/docs) to query for videos. To use this app, you must supply your own YouTube Data API key. Below are the steps to obtain an API key and use it with this app:

1. Register an account and create a new project at console.developers.google.com.
2. [Follow these instructions](https://developers.google.com/youtube/v3/getting-started) to enable the YouTube Data API for your project and obtain an API key.
3. Make a copy of the .env file in the root of this project, rename it to .env.local, and set the value of **VUE_APP_YOUTUBE_DATA_API_KEY** to your API key.
4. In the terminal, from the root folder of the project, run `npm run serve` to start the application

## Available Scripts


Install required front-end dependencies:
```
npm install
```

Compile and hot-reload for development:
```
npm run serve
```