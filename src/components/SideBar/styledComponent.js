import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 18vw;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SideBarItemsContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
`

export const SideBarItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  font-weight: 400;
  background-color: ${props => props.bgColor};
`
export const SideBarItemIconContainer = styled.div`
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: ${props => props.color};
`

export const SideBarItemText = styled.p`
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
`

export const SideBarFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85%;
`

export const SideBarFooterPara = styled.p`
  width: 170px;
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
`

export const SideBarFooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const SideBarFooterLogo = styled.img`
  margin-right: 20px;
  height: 40px;
  width: 40px;
`
