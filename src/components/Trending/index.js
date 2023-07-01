import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  TrendingBodyContainer,
  TrendingMainContainer,
  TrendingTitleContainer,
  TrendingImgContainer,
  TrendingTitle,
  TrendingViewListContainer,
  TrendingLoadingContainer,
  TrendingFailureRetryBtn,
  TrendingFailurePara,
  TrendingFailureHeading,
  TrendingFailureImg,
  TrendingFailureContainer,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import TrendingViewItem from '../TrendingViewItem'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstant.initial, trendingVideoList: []}

  componentDidMount() {
    this.getTrendingVideoList()
  }

  getTrendingVideoList = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        apiStatus: apiStatusConstant.success,
        trendingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderTrendingSuccess = () => {
    const {trendingVideoList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <TrendingTitleContainer
                bgColor={darkTheme ? '#181818' : '#f1f1f1'}
              >
                <TrendingImgContainer
                  bgColor={darkTheme ? '#0f0f0f' : '#e1e9f0'}
                >
                  <HiFire />
                </TrendingImgContainer>
                <TrendingTitle color={darkTheme ? '#ffffff' : '#1c293a'}>
                  Trending
                </TrendingTitle>
              </TrendingTitleContainer>
              <TrendingViewListContainer
                data-testid="trending"
                bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
              >
                {trendingVideoList.map(each => (
                  <TrendingViewItem key={each.id} videoItem={each} />
                ))}
              </TrendingViewListContainer>
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
          <TrendingLoadingContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
            </div>
          </TrendingLoadingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <TrendingFailureContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
            <TrendingFailureImg src={failureImg} alt="failure view" />
            <TrendingFailureHeading color={darkTheme ? '#ffffff' : '#212121'}>
              Oops! Something Went Wrong
            </TrendingFailureHeading>
            <TrendingFailurePara color={darkTheme ? '#789198' : '#848392'}>
              We are having some trouble to complete your request. Please try
              again.
            </TrendingFailurePara>
            <TrendingFailureRetryBtn
              onClick={this.getTrendingVideoList}
              type="button"
            >
              Retry
            </TrendingFailureRetryBtn>
          </TrendingFailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderTrendingSuccess()
      case apiStatusConstant.inProgress:
        return this.renderLoading()
      case apiStatusConstant.failure:
        return this.renderTrendingFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingBodyContainer>
          <SideBar />
          <TrendingMainContainer>
            {this.renderTrendingPage()}
          </TrendingMainContainer>
        </TrendingBodyContainer>
      </>
    )
  }
}

export default Trending
