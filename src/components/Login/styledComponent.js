import styled from 'styled-components'

export const LoginPage = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoginCard = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 10px 25px 10px;
  width: 85%;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    padding: 50px;
    max-width: 450px;
  }
`
export const NxtwatchLogo = styled.img`
  width: 45%;
  margin-bottom: 35px;
`

export const LoginForm = styled.form`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: ${props => props.color};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 8px;
`

export const InputField = styled.input`
  border: 1px solid #e4e9ef;
  height: 40px;
  padding-left: 15px;
  color: ${props => props.color};
  border-radius: 3px;
  background-color: ${props => props.bgColor};
`
export const ShowpassContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const Checkbox = styled.input`
  margin-right: 5px;
`

export const ShowPassLabel = styled.label`
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 400;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #2082f2;
  color: #ffffff;
  font-weight: 400;
  border-width: 0px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
export const ErrorPara = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-weight: 400;
`
