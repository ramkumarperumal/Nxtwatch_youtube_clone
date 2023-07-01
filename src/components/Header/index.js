import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNavContainerSm,
  HeaderNavItem,
  HeaderNavBtn,
  HeaderNavBtnMd,
  HeaderNavContainerMd,
  ProfileImg,
  PopupLogoutContainer,
  PopupLogoutPara,
  PopupBtnContainer,
  PopupButton,
  PopupMenuContainer,
  PopupMenuCloseBtn,
  PopupMenuItem,
  PopupMenuItemsContainer,
  PopupMenuIconContainer,
  PopupMenuItemPara,
} from './styledComponent'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value
      const logoImg = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const toggleTheme = () => {
        changeTheme()
      }

      const logoutUser = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={darkTheme ? '#212121' : '#ffffff'}>
          <Link to="/">
            <HeaderLogo src={logoImg} alt="website logo" />
          </Link>
          <HeaderNavContainerSm>
            <HeaderNavItem>
              <HeaderNavBtn
                onClick={toggleTheme}
                color={darkTheme ? '#ffffff' : '#010101'}
                data-testid="theme"
                type="button"
              >
                {darkTheme ? <FiSun /> : <FaMoon />}
              </HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
              <Popup
                modal
                trigger={
                  <HeaderNavBtn
                    color={darkTheme ? '#ffffff' : '#010101'}
                    type="button"
                  >
                    <GiHamburgerMenu />
                  </HeaderNavBtn>
                }
                contentStyle={{width: '100%', height: '100%'}}
              >
                {close => (
                  <PopupMenuContainer
                    bgColor={darkTheme ? '#212121' : '#ffffff'}
                  >
                    <PopupMenuCloseBtn
                      color={!darkTheme ? '#212121' : '#ffffff'}
                      onClick={() => close()}
                    >
                      <MdClose />
                    </PopupMenuCloseBtn>
                    <PopupMenuItemsContainer>
                      <Link onClick={() => close()} className="link" to="/">
                        <PopupMenuItem>
                          <PopupMenuIconContainer
                            color={darkTheme ? '#ff0000' : ' #ff0b37'}
                          >
                            <AiFillHome />
                          </PopupMenuIconContainer>

                          <PopupMenuItemPara
                            color={darkTheme ? '#7c7c7c' : '#000000'}
                            fontWeight={600}
                          >
                            Home
                          </PopupMenuItemPara>
                        </PopupMenuItem>
                      </Link>

                      <Link
                        onClick={() => close()}
                        className="link"
                        to="/trending"
                      >
                        <PopupMenuItem>
                          <PopupMenuIconContainer
                            color={darkTheme ? '#7c7c7c' : '#616161'}
                          >
                            <HiFire />
                          </PopupMenuIconContainer>

                          <PopupMenuItemPara
                            color={darkTheme ? '#7c7c7c' : '#616161'}
                          >
                            Trending
                          </PopupMenuItemPara>
                        </PopupMenuItem>
                      </Link>
                      <Link
                        onClick={() => close()}
                        className="link"
                        to="/gaming"
                      >
                        <PopupMenuItem>
                          <PopupMenuIconContainer
                            color={darkTheme ? '#7c7c7c' : '#616161'}
                          >
                            <SiYoutubegaming />
                          </PopupMenuIconContainer>

                          <PopupMenuItemPara
                            color={darkTheme ? '#7c7c7c' : '#616161'}
                          >
                            Gaming
                          </PopupMenuItemPara>
                        </PopupMenuItem>
                      </Link>
                      <Link
                        onClick={() => close()}
                        className="link"
                        to="/saved-videos"
                      >
                        <PopupMenuItem>
                          <PopupMenuIconContainer
                            color={darkTheme ? '#7c7c7c' : '#616161'}
                          >
                            <BiListPlus />
                          </PopupMenuIconContainer>

                          <PopupMenuItemPara
                            color={darkTheme ? '#7c7c7c' : '#616161'}
                          >
                            Saved videos
                          </PopupMenuItemPara>
                        </PopupMenuItem>
                      </Link>
                    </PopupMenuItemsContainer>
                  </PopupMenuContainer>
                )}
              </Popup>
            </HeaderNavItem>
            <HeaderNavItem>
              <Popup
                modal
                trigger={
                  <HeaderNavBtn
                    color={darkTheme ? '#ffffff' : '#010101'}
                    type="button"
                  >
                    <FiLogOut />
                  </HeaderNavBtn>
                }
              >
                {close => (
                  <PopupLogoutContainer
                    bgColor={darkTheme ? '#212121' : '#ffffff'}
                  >
                    <PopupLogoutPara color={darkTheme ? '#f8fafc' : '#00306e'}>
                      Are you sure, you want to logout?
                    </PopupLogoutPara>
                    <PopupBtnContainer>
                      <PopupButton
                        onClick={() => close()}
                        color={darkTheme ? '#697380' : '#9cacbd'}
                        bgColor="transparent"
                        borderColor={darkTheme ? '#697380' : '#9cacbd'}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton
                        onClick={logoutUser}
                        color="#ffffff"
                        bgColor="#2082f2"
                        borderColor="#2082f2"
                      >
                        Confirm
                      </PopupButton>
                    </PopupBtnContainer>
                  </PopupLogoutContainer>
                )}
              </Popup>
            </HeaderNavItem>
          </HeaderNavContainerSm>
          <HeaderNavContainerMd>
            <HeaderNavItem>
              <HeaderNavBtn
                onClick={toggleTheme}
                color={darkTheme ? '#ffffff' : '#010101'}
                data-testid="theme"
                type="button"
              >
                {darkTheme ? <FiSun /> : <FaMoon />}
              </HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </HeaderNavItem>
            <HeaderNavItem>
              <Popup
                modal
                trigger={
                  <HeaderNavBtnMd
                    onClick={logoutUser}
                    color={darkTheme ? '#ebe6dd' : '#3b82f6'}
                    type="button"
                  >
                    Logout
                  </HeaderNavBtnMd>
                }
              >
                {close => (
                  <PopupLogoutContainer
                    bgColor={darkTheme ? '#212121' : '#ffffff'}
                  >
                    <PopupLogoutPara color={darkTheme ? '#f8fafc' : '#00306e'}>
                      Are you sure you want to logout?
                    </PopupLogoutPara>
                    <PopupBtnContainer>
                      <PopupButton
                        onClick={() => close()}
                        color={darkTheme ? '#697380' : '#9cacbd'}
                        bgColor="transparent"
                        borderColor={darkTheme ? '#697380' : '#9cacbd'}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton
                        onClick={logoutUser}
                        color="#ffffff"
                        bgColor="#2082f2"
                        borderColor="#2082f2"
                      >
                        Confirm
                      </PopupButton>
                    </PopupBtnContainer>
                  </PopupLogoutContainer>
                )}
              </Popup>
            </HeaderNavItem>
          </HeaderNavContainerMd>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
