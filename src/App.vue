<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList></VideoList>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'

const API_KEY = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_PROD_YOUTUBE_DATA_API_KEY : process.env.VUE_APP_YOUTUBE_DATA_API_KEY;

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(API_KEY);
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then( response => console.log(response));
    }
  }
};
</script>
