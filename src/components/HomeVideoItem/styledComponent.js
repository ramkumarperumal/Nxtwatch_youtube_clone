import styled from 'styled-components'

export const HomeVideoItemContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  margin-right: 15px;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    max-width: 290px;
  }
`

export const VideoThumbnailImg = styled.img`
  width: 100%;
  height: 160px;
  @media screen and (max-width: 575px) {
    height: 200px;
  }
`

export const VideoBottomContainer = styled.div`
  padding: 15px;
  background-color: #f9f9f9;
  display: flex;
  background-color: transparent;
`
export const VideoChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

export const VideoNameContainer = styled.div`
  width: 100%;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 500;
  margin-top: 0px;
`

export const VideoChannelName = styled.p`
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
