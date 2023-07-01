import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdClose} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideoItem from '../HomeVideoItem'
import {
  HomeBannerContainer,
  HomeLogoCloseContainer,
  NxtwatchLogo,
  HomeBannerPara,
  HomeBannerBtn,
  HomeBodyContainer,
  HomeBannerCloseBtn,
  HomeVideosContainer,
  HomeVideoSearchContainer,
  HomeSearchInput,
  HomeSearchBtn,
  HomeLowerBannerContainer,
  HomeVideoContainer,
  HomeNoSearchContainer,
  HomeNosearchImg,
  HomeNoSearchHeading,
  HomeNoSearchPara,
  HomeNoSearchRetryBtn,
  HomeVideoSearchOuterContainer,
  HomeLoadingContainer,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  noResult: 'NO SEARCH RESULT',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getHomeVideosList()
  }

  getHomeVideosList = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const responseData = await response.json()

    if (response.ok) {
      const {total, videos} = responseData
      if (total === 0) {
        this.setState({apiStatus: apiStatusConstant.noResult})
      } else {
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
          videosList: updatedData,
        })
      }
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchBtn = () => {
    this.getHomeVideosList()
  }

  renderBanner = () => (
    <HomeBannerContainer
      bgImg="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
      data-testid="banner"
    >
      <HomeLogoCloseContainer>
        <NxtwatchLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <HomeBannerCloseBtn
          data-testid="close"
          type="button"
          onClick={this.closeBanner}
        >
          <MdClose />
        </HomeBannerCloseBtn>
      </HomeLogoCloseContainer>
      <HomeBannerPara>
        Buy Nxt Watch Premium prepaid plans with UPI
      </HomeBannerPara>
      <HomeBannerBtn type="button">GET IT NOW</HomeBannerBtn>
    </HomeBannerContainer>
  )

  renderSearchInput = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <HomeVideoSearchOuterContainer
            bgColor={darkTheme ? '#181818' : '#f9f9f9'}
          >
            <HomeVideoSearchContainer
              borderColor={darkTheme ? '#303031' : '#d6d6d7'}
            >
              <HomeSearchInput
                onChange={this.changeSearchInput}
                type="search"
                placeholder="Search"
              />
              <HomeSearchBtn
                data-testid="searchButton"
                bgColor={darkTheme ? '#303031' : '#f4f4f4'}
                onClick={this.onClickSearchBtn}
              >
                <AiOutlineSearch />
              </HomeSearchBtn>
            </HomeVideoSearchContainer>
          </HomeVideoSearchOuterContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeVideos = () => {
    const {videosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <HomeVideosContainer
              data-test-id="home"
              bgColor={darkTheme ? '#181818' : '#f9f9f9'}
            >
              <HomeVideoContainer>
                {videosList.map(each => (
                  <HomeVideoItem key={each.id} videoItem={each} />
                ))}
              </HomeVideoContainer>
            </HomeVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderHomeNoSearch = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <HomeNoSearchContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
            <HomeNosearchImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HomeNoSearchHeading color={darkTheme ? '#ffffff' : '#212121'}>
              No Search results found
            </HomeNoSearchHeading>
            <HomeNoSearchPara color={darkTheme ? '#789198' : '#848392'}>
              Try different key words or remove search filter
            </HomeNoSearchPara>
            <HomeNoSearchRetryBtn
              onClick={this.getHomeVideosList}
              type="button"
            >
              Retry
            </HomeNoSearchRetryBtn>
          </HomeNoSearchContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImg = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <HomeNoSearchContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
            <HomeNosearchImg src={failureImg} alt="failure view" />
            <HomeNoSearchHeading color={darkTheme ? '#ffffff' : '#212121'}>
              Oops! Something Went Wrong
            </HomeNoSearchHeading>
            <HomeNoSearchPara color={darkTheme ? '#789198' : '#848392'}>
              We are having some trouble to complete your request. Please try
              again.
            </HomeNoSearchPara>
            <HomeNoSearchRetryBtn
              onClick={this.getHomeVideosList}
              type="button"
            >
              Retry
            </HomeNoSearchRetryBtn>
          </HomeNoSearchContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoading = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <HomeLoadingContainer bgColor={darkTheme ? '#181818' : '#f9f9f9'}>
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
            </div>
          </HomeLoadingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomePage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoading()
      case apiStatusConstant.success:
        return this.renderHomeVideos()
      case apiStatusConstant.noResult:
        return this.renderHomeNoSearch()
      case apiStatusConstant.failure:
        return this.renderHomeFailure()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state

    return (
      <>
        <Header />
        <HomeBodyContainer>
          <SideBar />
          <HomeLowerBannerContainer>
            {showBanner && this.renderBanner()}
            {this.renderSearchInput()}
            {this.renderHomePage()}
          </HomeLowerBannerContainer>
        </HomeBodyContainer>
      </>
    )
  }
}

export default Home
