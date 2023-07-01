import styled from 'styled-components'

export const TrendingVideoList = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 35px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const TrendingVideoImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 350px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`
export const TrendingVideoBottomContainer = styled.div`
  padding: 15px;
  background-color: #f9f9f9;
  display: flex;
  background-color: transparent;
`
export const TrendingVideoChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`
export const TrendingVideoTitleContainer = styled.div`
  width: 100%;
  margin-right: 10px;
`

export const TrendingVideoHeading = styled.p`
  font-size: 18px;
  margin-top: 0px;
  font-weight: 500;
  color: ${props => props.color};
`
export const TrendingVideoChannelName = styled.p`
  color: #6b7e9c;
  margin-top: 0px;
`

export const VideoViewDateContainer = styled.div`
  display: flex;
  color: #6b7e9c;
  font-size: 16px;
`

export const VideoViews = styled.p`
  margin-top: 0px;
`

export const VideoPublishTime = styled.p`
  margin-top: 0px;
`
export const VideoDotContainer = styled.div`
  font-size: 22px;
`
export const VideoBottomContainer = styled.div`
  padding: 15px;
  background-color: #f9f9f9;
  display: flex;
  background-color: transparent;
`
export const VideoChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`

export const VideoChannelCountContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 575px) {
    display: flex;
  }
`

export const VideoDotContainerSm = styled.div`
  font-size: 22px;
  color: #6b7e9c;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
