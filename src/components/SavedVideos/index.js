import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import TrendingViewItem from '../TrendingViewItem'
import {
  TrendingBodyContainer,
  TrendingMainContainer,
  TrendingTitleContainer,
  TrendingImgContainer,
  TrendingTitle,
  TrendingViewListContainer,
  NoSavedVideoContainer,
  NoSavedImg,
  NoSavedHeading,
  NoSavedPara,
} from './styledComponent'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value

      const renderSavedPage = () => (
        <>
          <TrendingTitleContainer bgColor={darkTheme ? '#181818' : '#f1f1f1'}>
            <TrendingImgContainer bgColor={darkTheme ? '#0f0f0f' : '#e1e9f0'}>
              <BiListPlus />
            </TrendingImgContainer>
            <TrendingTitle color={darkTheme ? '#ffffff' : '#1c293a'}>
              Saved Videos
            </TrendingTitle>
          </TrendingTitleContainer>
          <TrendingViewListContainer
            data-testid="savedVideos"
            bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
          >
            {savedVideos.map(each => (
              <TrendingViewItem
                channelLogo={false}
                key={each.id}
                videoItem={each}
              />
            ))}
          </TrendingViewListContainer>
        </>
      )

      const renderNoSavedVideo = () => (
        <NoSavedVideoContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
          <NoSavedImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedHeading color={darkTheme ? '#ffffff' : '#212121'}>
            No saved videos found
          </NoSavedHeading>
          <NoSavedPara color={darkTheme ? '#789198' : '#848392'}>
            You can save your videos while watching them
          </NoSavedPara>
        </NoSavedVideoContainer>
      )

      return (
        <>
          <Header />
          <TrendingBodyContainer>
            <SideBar />
            <TrendingMainContainer>
              {savedVideos.length > 0
                ? renderSavedPage()
                : renderNoSavedVideo()}
            </TrendingMainContainer>
          </TrendingBodyContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
