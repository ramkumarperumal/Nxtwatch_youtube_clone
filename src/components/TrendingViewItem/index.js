import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import {
  TrendingVideoList,
  TrendingVideoImg,
  TrendingVideoBottomContainer,
  TrendingVideoHeading,
  TrendingVideoChannelName,
  VideoViewDateContainer,
  VideoViews,
  VideoPublishTime,
  VideoDotContainer,
  TrendingVideoChannelLogo,
  TrendingVideoTitleContainer,
  VideoChannelCountContainer,
  VideoDotContainerSm,
} from './styledComponent'

const TrendingViewItem = props => {
  const {videoItem, channelLogo} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoItem
  const {name, profileImageUrl} = channel
  const formatDistance = formatDistanceToNow(new Date(publishedAt))
  const showChannelLogo = channelLogo === undefined

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link className="link" to={`/videos/${id}`}>
            <TrendingVideoList>
              <TrendingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoBottomContainer>
                {showChannelLogo && (
                  <TrendingVideoChannelLogo src={profileImageUrl} alt="" />
                )}
                <TrendingVideoTitleContainer>
                  <TrendingVideoHeading
                    color={darkTheme ? '#ffffff' : '#42485e'}
                  >
                    {title}
                  </TrendingVideoHeading>
                  <VideoChannelCountContainer>
                    <TrendingVideoChannelName>{name}</TrendingVideoChannelName>
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
                </TrendingVideoTitleContainer>
              </TrendingVideoBottomContainer>
            </TrendingVideoList>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingViewItem
