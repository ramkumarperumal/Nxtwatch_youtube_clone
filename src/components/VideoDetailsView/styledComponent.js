import styled from 'styled-components'

export const VideoDetailViewContainer = styled.div`
  display: flex;
`

export const VideoDetailPlayerContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
`
export const VideoPlayer = styled.div`
  width: 100%;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 550px;
  }
`
export const VideoDetailTitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

export const VideoDetailTitle = styled.p`
  font-size: 28px;
  margin-bottom: 40px;
  font-weight: 500;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const VideoDetailViewLikeContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

export const VideoDetailViewTimeContainer = styled.div`
  display: flex;
  color: #6b7e9c;
  font-size: 16px;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const VideoDetailButton = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: ${props => props.color};
  margin-right: 15px;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const VideoDetailLikeContainer = styled.div`
  display: flex;
`
export const VideoViewPara = styled.p`
  margin-top: 0px;
`

export const VideoPublishDatePara = styled.p`
  margin-top: 0px;
`
export const VideoDetailBtnIconContainer = styled.div`
  margin-right: 5px;
  font-size: 20px;
`
export const VideoDotContainer = styled.div`
  margin-top: 4px;
`
export const VideoDetailChannelContainer = styled.div``

export const VideoDetailChannelLogoNameContainer = styled.div`
  display: flex;
  margin-top: 25px;
`

export const VideoDetailChannelLogo = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 20px;
`

export const VideoDetailChannelNameContainer = styled.div``

export const VideoDetailChannelName = styled.p`
  margin-top: 0px;
  color: ${props => props.color};
  font-weight: 400;
  font-size: 18px;
`

export const VideoDetailsChannelSub = styled.p`
  color: #6b7e9c;
  font-size: 14px;
`

export const VideoDetailsDescription = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoDetailsDescriptionMd = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const VideoDetailsLoadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoDetailNoFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.bgColor};
`
export const VideoDetailFailureImg = styled.img`
  width: 30%;
`

export const VideoDetailFailureHeading = styled.h1`
  color: ${props => props.color};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`

export const VideoDetailFailurePara = styled.p`
  color: ${props => props.color};
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`
export const VideoDetailFailureRetryBtn = styled.button`
  height: 35px;
  width: 90px;
  background-color: #4a47e0;
  color: #ffffff;
  border: 0px;
  border-width: 5px;
  cursor: pointer;
`
