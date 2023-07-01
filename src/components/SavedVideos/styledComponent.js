import styled from 'styled-components'

export const TrendingBodyContainer = styled.div`
  display: flex;
`

export const TrendingMainContainer = styled.div`
  width: 100%;
`

export const TrendingTitleContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`
export const TrendingImgContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  font-size: 24px;
  color: #ff0b37;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const TrendingTitle = styled.h1`
  color: ${props => props.color};
`

export const TrendingViewListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  padding: 20px;
  margin-top: 0px;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`

export const NoSavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${props => props.bgColor};
`

export const NoSavedImg = styled.img`
  width: 30%;
`

export const NoSavedHeading = styled.h1`
  color: ${props => props.color};
`

export const NoSavedPara = styled.p`
  color: ${props => props.color};
`
