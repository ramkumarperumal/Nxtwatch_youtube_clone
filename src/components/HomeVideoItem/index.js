import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  HomeVideoItemContainer,
  VideoThumbnailImg,
  VideoBottomContainer,
  VideoChannelLogo,
  VideoNameContainer,
  VideoTitle,
  VideoChannelName,
  VideoViewDateContainer,
  VideoViews,
  VideoPublishTime,
  VideoDotContainer,
  VideoChannelCountContainer,
  VideoDotContainerSm,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const HomeVideoItem = props => {
  const {videoItem} = props

  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoItem
  const {name, profileImageUrl} = channel
  const formatDistance = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link className="link" to={`/videos/${id}`}>
            <HomeVideoItemContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
              <VideoThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoBottomContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
                <VideoChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoNameContainer>
                  <VideoTitle color={darkTheme ? '#ffffff' : '#42485e'}>
                    {title}
                  </VideoTitle>
                  <VideoChannelCountContainer>
                    <VideoChannelName>{name}</VideoChannelName>
                    <VideoDotContainerSm>
                      <BsDot />
                    </VideoDotContainerSm>
                    <VideoViewDateContainer>
                      <VideoViews>{viewCount} views</VideoViews>
                      <VideoDotContainer>
                        <BsDot />
                      </VideoDotContainer>
                      <VideoPublishTime>{formatDistance}</VideoPublishTime>
                    </VideoViewDateContainer>
                  </VideoChannelCountContainer>
                </VideoNameContainer>
              </VideoBottomContainer>
            </HomeVideoItemContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoItem
