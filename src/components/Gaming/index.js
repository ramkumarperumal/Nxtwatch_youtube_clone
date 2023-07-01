import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingBodyContainer,
  GamingMainContainer,
  GamingTitleContainer,
  GamingImgContainer,
  GamingTitle,
  GamingViewListContainer,
  GamingLoadingContainer,
  GamingFailureRetryBtn,
  GamingFailurePara,
  GamingFailureHeading,
  GamingFailureImg,
  GamingFailureContainer,
} from './styledComponent'
import GamingViewItem from '../GamingViewItem'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstant.initial, gamingVideoList: []}

  componentDidMount() {
    this.getGamingVideoList()
  }

  getGamingVideoList = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const responseData = await response.json()

    if (response.ok) {
      const {videos} = responseData
      const updatedData = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstant.success,
        gamingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderGamingSuccess = () => {
    const {gamingVideoList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <GamingTitleContainer bgColor={darkTheme ? '#181818' : '#f1f1f1'}>
                <GamingImgContainer bgColor={darkTheme ? '#0f0f0f' : '#e1e9f0'}>
                  <SiYoutubegaming />
                </GamingImgContainer>
                <GamingTitle color={darkTheme ? '#ffffff' : '#1c293a'}>
                  Gaming
                </GamingTitle>
              </GamingTitleContainer>
              <GamingViewListContainer
                bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
              >
                {gamingVideoList.map(each => (
                  <GamingViewItem key={each.id} videoItem={each} />
                ))}
              </GamingViewListContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoading = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <GamingLoadingContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
            </div>
          </GamingLoadingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <GamingFailureContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
            <GamingFailureImg src={failureImg} alt="failure view" />
            <GamingFailureHeading color={darkTheme ? '#ffffff' : '#212121'}>
              Oops! Something Went Wrong
            </GamingFailureHeading>
            <GamingFailurePara color={darkTheme ? '#789198' : '#848392'}>
              We are having some trouble to complete your request. Please try
              again.
            </GamingFailurePara>
            <GamingFailureRetryBtn
              onClick={this.getGamingVideoList}
              type="button"
            >
              Retry
            </GamingFailureRetryBtn>
          </GamingFailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderGamingSuccess()
      case apiStatusConstant.inProgress:
        return this.renderLoading()
      case apiStatusConstant.failure:
        return this.renderGamingFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <GamingBodyContainer>
          <SideBar />
          <GamingMainContainer>{this.renderGamingPage()}</GamingMainContainer>
        </GamingBodyContainer>
      </>
    )
  }
}

export default Gaming
