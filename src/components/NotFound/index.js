import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  TrendingBodyContainer,
  TrendingMainContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponent'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const notFoundImg = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <TrendingBodyContainer>
            <SideBar />
            <TrendingMainContainer>
              <NotFoundContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
                <NotFoundImg src={notFoundImg} alt="not found" />
                <NotFoundHeading color={darkTheme ? '#ffffff' : '#212121'}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundPara color={darkTheme ? '#789198' : '#848392'}>
                  We are sorry, the page you requested could not be found.
                </NotFoundPara>
              </NotFoundContainer>
            </TrendingMainContainer>
          </TrendingBodyContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
