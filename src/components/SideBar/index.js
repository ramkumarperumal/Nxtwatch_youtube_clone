import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SideBarContainer,
  SideBarItemsContainer,
  SideBarItem,
  SideBarItemIconContainer,
  SideBarItemText,
  SideBarFooterContainer,
  SideBarFooterPara,
  SideBarFooterLogoContainer,
  SideBarFooterLogo,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <SideBarContainer bgColor={darkTheme ? '#212121' : '#ffffff'}>
          <SideBarItemsContainer>
            <Link className="link" to="/">
              <SideBarItem color={darkTheme ? '#ffffff' : '#636363'}>
                <SideBarItemIconContainer>
                  <AiFillHome />
                </SideBarItemIconContainer>
                <SideBarItemText>Home</SideBarItemText>
              </SideBarItem>
            </Link>
            <Link className="link" to="/trending">
              <SideBarItem color={darkTheme ? '#ffffff' : '#636363'}>
                <SideBarItemIconContainer>
                  <HiFire />
                </SideBarItemIconContainer>
                <SideBarItemText>Trending</SideBarItemText>
              </SideBarItem>
            </Link>
            <Link className="link" to="/gaming">
              <SideBarItem color={darkTheme ? '#ffffff' : '#636363'}>
                <SideBarItemIconContainer>
                  <SiYoutubegaming />
                </SideBarItemIconContainer>
                <SideBarItemText>Gaming</SideBarItemText>
              </SideBarItem>
            </Link>
            <Link className="link" to="/saved-videos">
              <SideBarItem color={darkTheme ? '#ffffff' : '#636363'}>
                <SideBarItemIconContainer>
                  <BiListPlus />
                </SideBarItemIconContainer>
                <SideBarItemText>Saved videos</SideBarItemText>
              </SideBarItem>
            </Link>
          </SideBarItemsContainer>
          <SideBarFooterContainer>
            <SideBarFooterPara color={darkTheme ? '#ffffff' : '#2f4764'}>
              CONTACT US
            </SideBarFooterPara>
            <SideBarFooterLogoContainer>
              <SideBarFooterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SideBarFooterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SideBarFooterLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SideBarFooterLogoContainer>
            <SideBarFooterPara color={darkTheme ? '#ffffff' : '#2f4764'}>
              Enjoy! Now to see your channels and recommendations!
            </SideBarFooterPara>
          </SideBarFooterContainer>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
