import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding: 15px;
    padding-left: 40px;
    padding-right: 40px;
  }
`

export const HeaderLogo = styled.img`
  width: 90px;
  @media screen and (min-width: 768px) {
    width: 130px;
  }
`
export const HeaderNavContainerSm = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderNavItem = styled.li`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 25px;
  }
`

export const HeaderNavBtn = styled.button`
  background-color: transparent;
  border: 0px;
  color: ${props => props.color};
  font-size: 20px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const HeaderNavContainerMd = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HeaderNavBtnMd = styled.button`
  height: 30px;
  width: 90px;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  font-size: 16px;
  background-color: transparent;
  font-weight: 500;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
`
export const PopupLogoutContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  height: 200px;
`

export const PopupLogoutPara = styled.p`
  color: ${props => props.color};
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
`

export const PopupBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`
export const PopupButton = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  border: 2px solid ${props => props.borderColor};
  height: 35px;
  width: 75px;
  cursor: pointer;
  border-radius: 2px;
  font-size: 14px;
`
export const PopupMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  padding: 35px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopupMenuCloseBtn = styled.button`
  background-color: transparent;
  color: ${props => props.color};
  font-size: 28px;
  border: 0px;
  align-self: flex-end;
  cursor: pointer;
`
export const PopupMenuItemsContainer = styled.ul`
  list-style: none;
  margin-top: auto;
  margin-bottom: auto;
`

export const PopupMenuItem = styled.li`
  display: flex;
  margin: auto;
  width: 40%;
`
export const PopupMenuIconContainer = styled.div`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const PopupMenuItemPara = styled.p`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`
