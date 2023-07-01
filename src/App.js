import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoDetailsView from './components/VideoDetailsView'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  toggleSavedVideo = video => {
    const {savedVideos} = this.state
    if (savedVideos.map(each => each.id === video.id).includes(true)) {
      const updatedSavedVideo = savedVideos.filter(each => each.id !== video.id)
      this.setState({savedVideos: updatedSavedVideo})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    }
  }

  toggleLikeVideo = id => {
    const {likedVideos, dislikedVideos} = this.state
    if (likedVideos.includes(id)) {
      const updatedLikedVideo = likedVideos.filter(each => each !== id)
      this.setState({likedVideos: updatedLikedVideo})
    } else {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, id],
      }))
    }
    if (dislikedVideos.includes(id)) {
      const updatedDislikeVideo = dislikedVideos.filter(each => each !== id)
      this.setState({dislikedVideos: updatedDislikeVideo})
    }
  }

  toggleDislikeVideo = id => {
    const {dislikedVideos, likedVideos} = this.state
    if (dislikedVideos.includes(id)) {
      const updatedDislikeVideo = dislikedVideos.filter(each => each !== id)
      this.setState({dislikedVideos: updatedDislikeVideo})
    } else {
      this.setState(prevState => ({
        dislikedVideos: [...prevState.dislikedVideos, id],
      }))
    }
    if (likedVideos.includes(id)) {
      const updatedLikedVideo = likedVideos.filter(each => each !== id)
      this.setState({likedVideos: updatedLikedVideo})
    }
  }

  render() {
    const {darkTheme, savedVideos, likedVideos, dislikedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          toggleSavedVideo: this.toggleSavedVideo,
          toggleLikeVideo: this.toggleLikeVideo,
          toggleDislikeVideo: this.toggleDislikeVideo,
          savedVideos,
          likedVideos,
          dislikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
