import axios from 'axios';

const KEY = "AIzaSyDayGRNjEWUvDmoYZkWCyABgC_UhaZwJFI";

// Teacher - AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg
// Sanjay - AIzaSyDayGRNjEWUvDmoYZkWCyABgC_UhaZwJFI;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
