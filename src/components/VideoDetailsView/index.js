import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import {BiDislike, BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideoDetailViewContainer,
  VideoDetailPlayerContainer,
  VideoPlayer,
  VideoDetailTitleContainer,
  VideoDetailTitle,
  VideoDetailViewLikeContainer,
  VideoDetailViewTimeContainer,
  VideoDetailLikeContainer,
  VideoDetailButton,
  VideoViewPara,
  VideoPublishDatePara,
  VideoDetailBtnIconContainer,
  VideoDotContainer,
  VideoDetailChannelContainer,
  VideoDetailChannelLogoNameContainer,
  VideoDetailChannelLogo,
  VideoDetailChannelNameContainer,
  VideoDetailChannelName,
  VideoDetailsChannelSub,
  VideoDetailsDescription,
  VideoDetailsDescriptionMd,
  VideoDetailsLoadingContainer,
  VideoDetailFailureRetryBtn,
  VideoDetailFailurePara,
  VideoDetailFailureHeading,
  VideoDetailFailureImg,
  VideoDetailNoFailureContainer,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class VideoDetailsView extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const responseData = await response.json()

    if (response.ok) {
      const updatedData = {
        id: responseData.video_details.id,
        title: responseData.video_details.title,
        videoUrl: responseData.video_details.video_url,
        thumbnailUrl: responseData.video_details.thumbnail_url,
        channel: {
          name: responseData.video_details.channel.name,
          profileImageUrl: responseData.video_details.channel.profile_image_url,
          subscriberCount: responseData.video_details.channel.subscriber_count,
        },
        viewCount: responseData.video_details.view_count,
        publishedAt: responseData.video_details.published_at,
        description: responseData.video_details.description,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderVideoDetailSuccess = () => {
    const {videoDetails} = this.state

    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails

    if (id !== undefined) {
      const {name, profileImageUrl, subscriberCount} = channel

      const dateFormat = formatDistanceToNow(new Date(publishedAt))

      return (
        <ThemeContext.Consumer>
          {value => {
            const {
              darkTheme,
              likedVideos,
              dislikedVideos,
              savedVideos,
              toggleLikeVideo,
              toggleDislikeVideo,
              toggleSavedVideo,
            } = value

            const savedVid = savedVideos
              .map(each => each.id === id)
              .includes(true)

            const like = likedVideos.includes(id)
            const dislike = dislikedVideos.includes(id)

            const toggleLikeButton = () => {
              toggleLikeVideo(videoDetails.id)
            }

            const toggleDislikeButton = () => {
              toggleDislikeVideo(videoDetails.id)
            }

            const toggleSaveButton = () => {
              toggleSavedVideo(videoDetails)
            }

            return (
              <VideoDetailPlayerContainer
                data-testid="videoItemDetails"
                bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
              >
                <VideoPlayer>
                  <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    controls
                  />
                </VideoPlayer>
                <VideoDetailTitleContainer
                  bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
                >
                  <VideoDetailTitle color={darkTheme ? '#ffffff' : '#42485e'}>
                    {title}
                  </VideoDetailTitle>
                  <VideoDetailViewLikeContainer>
                    <VideoDetailViewTimeContainer>
                      <VideoViewPara>{viewCount} views</VideoViewPara>
                      <VideoDotContainer>
                        <BsDot />
                      </VideoDotContainer>
                      <VideoPublishDatePara>{dateFormat}</VideoPublishDatePara>
                    </VideoDetailViewTimeContainer>
                    <VideoDetailLikeContainer>
                      <VideoDetailButton
                        color={like ? '#2563eb' : '#64748b'}
                        onClick={toggleLikeButton}
                      >
                        <VideoDetailBtnIconContainer>
                          <AiOutlineLike />
                        </VideoDetailBtnIconContainer>
                        Like
                      </VideoDetailButton>
                      <VideoDetailButton
                        color={dislike ? '#2563eb' : '#64748b'}
                        onClick={toggleDislikeButton}
                      >
                        <VideoDetailBtnIconContainer>
                          <BiDislike />
                        </VideoDetailBtnIconContainer>
                        Dislike
                      </VideoDetailButton>
                      <VideoDetailButton
                        color={savedVid ? '#2563eb' : '#64748b'}
                        onClick={toggleSaveButton}
                      >
                        <VideoDetailBtnIconContainer>
                          <BiListPlus />
                        </VideoDetailBtnIconContainer>
                        {savedVid ? 'Saved' : 'Save'}
                      </VideoDetailButton>
                    </VideoDetailLikeContainer>
                  </VideoDetailViewLikeContainer>
                  <hr />
                  <VideoDetailChannelContainer>
                    <VideoDetailChannelLogoNameContainer>
                      <VideoDetailChannelLogo
                        src={profileImageUrl}
                        alt="channel logo"
                      />
                      <VideoDetailChannelNameContainer>
                        <VideoDetailChannelName
                          color={darkTheme ? '#ffffff' : '#42485e'}
                        >
                          {name}
                        </VideoDetailChannelName>
                        <VideoDetailsChannelSub>
                          {subscriberCount} subscribers
                        </VideoDetailsChannelSub>
                        <VideoDetailsDescriptionMd
                          color={darkTheme ? '#f9f9f9' : '#83869e'}
                        >
                          {description}
                        </VideoDetailsDescriptionMd>
                      </VideoDetailChannelNameContainer>
                    </VideoDetailChannelLogoNameContainer>
                    <VideoDetailsDescription
                      color={darkTheme ? '#f9f9f9' : '#83869e'}
                    >
                      {description}
                    </VideoDetailsDescription>
                  </VideoDetailChannelContainer>
                </VideoDetailTitleContainer>
              </VideoDetailPlayerContainer>
            )
          }}
        </ThemeContext.Consumer>
      )
    }
    return null
  }

  renderLoading = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <VideoDetailsLoadingContainer
            bgColor={darkTheme ? '#181818' : '#f9f9f9'}
          >
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
            </div>
          </VideoDetailsLoadingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetailFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <VideoDetailNoFailureContainer
            bgColor={darkTheme ? '#181818' : '#f9f9f9'}
          >
            <VideoDetailFailureImg src={failureImg} alt="failure view" />
            <VideoDetailFailureHeading
              color={darkTheme ? '#ffffff' : '#212121'}
            >
              Oops! Something Went Wrong
            </VideoDetailFailureHeading>
            <VideoDetailFailurePara color={darkTheme ? '#789198' : '#848392'}>
              We are having some trouble to complete your request. Please try
              again.
            </VideoDetailFailurePara>
            <VideoDetailFailureRetryBtn
              onClick={this.getVideoDetails}
              type="button"
            >
              Retry
            </VideoDetailFailureRetryBtn>
          </VideoDetailNoFailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetailsPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoading()
      case apiStatusConstant.success:
        return this.renderVideoDetailSuccess()
      case apiStatusConstant.failure:
        return this.renderVideoDetailFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoDetailViewContainer>
          <SideBar />
          {this.renderVideoDetailsPage()}
        </VideoDetailViewContainer>
      </>
    )
  }
}

export default VideoDetailsView
