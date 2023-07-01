import styled from 'styled-components'

export const TrendingBodyContainer = styled.div`
  display: flex;
`

export const TrendingMainContainer = styled.div`
  width: 100%;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${props => props.bgColor};
`

export const NotFoundImg = styled.img`
  width: 30%;
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.color};
`

export const NotFoundPara = styled.p`
  color: ${props => props.color};
`
