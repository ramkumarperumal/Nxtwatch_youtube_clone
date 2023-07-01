import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  savedVideos: [],
  likedVideos: [],
  dislikedVideos: [],
  toggleSavedVideo: () => {},
  toggleLikeVideo: () => {},
  toggleDislikeVideo: () => {},
})

export default ThemeContext
