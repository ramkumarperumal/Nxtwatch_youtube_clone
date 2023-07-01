import styled from 'styled-components'

export const GamingVideoList = styled.li`
  width: 250px;
  margin-right: 25px;
  @media screen and (max-width: 767px) {
    width: 150px;
    margin-right: 15px;
  }
`

export const GamingVideoImg = styled.img`
  width: 100%;
`

export const GamingVideoHeading = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 500;
`

export const GamingVideoViews = styled.p`
  color: #6b7e9c;
  font-size: 14px;
  margin-top: 0px;
`
