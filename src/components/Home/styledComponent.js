import styled from 'styled-components'

export const HomeBodyContainer = styled.div`
  display: flex;
`

export const HomeBannerContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 330px;
  @media screen and (min-width: 576px) {
    background-image: url(${props => props.bgImg});
    background-size: cover;
    padding-right: 40px;
  }
`

export const HomeLogoCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NxtwatchLogo = styled.img`
  width: 170px;
  height: 40px;
`

export const HomeBannerPara = styled.p`
  color: #374759;
  width: 250px;
  font-size: 20px;
  font-weight: 400;
`
export const HomeBannerBtn = styled.button`
  height: 40px;
  width: 130px;
  background-color: transparent;
  color: #374759;
  border: 1px solid #374759;
  font-size: 16px;
  font-weight: bold;
`

export const HomeBannerCloseBtn = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  cursor: pointer;
`
export const HomeVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 576px) {
    padding: 25px;
  }
`

export const HomeVideoSearchOuterContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
`

export const HomeVideoSearchContainer = styled.div`
  width: 90%;
  max-width: 550px;
  height: 35px;
  display: flex;
  border: 2px solid ${props => props.borderColor};
  @media screen and (max-width: 575px) {
    margin: auto;
  }
`

export const HomeSearchInput = styled.input`
  width: 85%;
  border: 0px;
  padding-left: 15px;
  height: 100%;
  font-size: 16px;
  background-color: transparent;
`

export const HomeSearchBtn = styled.button`
  width: 15%;
  border: 0px;
  color: #828282;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.bgColor};
`

export const HomeLowerBannerContainer = styled.div`
  width: 100%;
`
export const HomeVideoContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0px;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const HomeNoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: ${props => props.bgColor};
`
export const HomeNosearchImg = styled.img`
  width: 30%;
`

export const HomeNoSearchHeading = styled.h1`
  color: ${props => props.color};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`

export const HomeNoSearchPara = styled.p`
  color: ${props => props.color};
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const HomeNoSearchRetryBtn = styled.button`
  height: 35px;
  width: 90px;
  background-color: #4a47e0;
  color: #ffffff;
  border: 0px;
  border-width: 5px;
  cursor: pointer;
`
export const HomeLoadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
