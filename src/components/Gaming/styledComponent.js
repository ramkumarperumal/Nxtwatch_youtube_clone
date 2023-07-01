import styled from 'styled-components'

export const GamingBodyContainer = styled.div`
  display: flex;
`

export const GamingMainContainer = styled.div`
  width: 100%;
`

export const GamingTitleContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`
export const GamingImgContainer = styled.div`
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

export const GamingTitle = styled.h1`
  color: ${props => props.color};
`

export const GamingViewListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
  padding: 20px;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`

export const GamingLoadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GamingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 40px;
  background-color: ${props => props.bgColor};
`
export const GamingFailureImg = styled.img`
  width: 30%;
`

export const GamingFailureHeading = styled.h1`
  color: ${props => props.color};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`

export const GamingFailurePara = styled.p`
  color: ${props => props.color};
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const GamingFailureRetryBtn = styled.button`
  height: 35px;
  width: 90px;
  background-color: #4a47e0;
  color: #ffffff;
  border: 0px;
  border-width: 5px;
  cursor: pointer;
`
