import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginPage,
  LoginCard,
  NxtwatchLogo,
  LoginForm,
  InputContainer,
  Label,
  InputField,
  ShowpassContainer,
  Checkbox,
  ShowPassLabel,
  LoginButton,
  ErrorPara,
} from './styledComponent'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userData = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const responseData = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', responseData.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: responseData.error_msg})
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const logoImg = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          let inputBgColor
          if (errorMsg.length > 0) {
            inputBgColor = darkTheme ? '#e7f0fd' : '#ffffff'
          } else {
            inputBgColor = 'transparent'
          }
          return (
            <LoginPage bgColor={darkTheme ? '#212121' : '#ffffff'}>
              <LoginCard bgColor={darkTheme ? '#0f0f0f' : '#ffffff'}>
                <NxtwatchLogo src={logoImg} alt="website logo" />
                <LoginForm onSubmit={this.submitForm}>
                  <InputContainer>
                    <Label
                      color={darkTheme ? '#ffffff' : '#64748b'}
                      htmlFor="username"
                    >
                      USERNAME
                    </Label>
                    <InputField
                      bgColor={inputBgColor}
                      color={darkTheme ? '#ffffff' : '#000000'}
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.changeUsername}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label
                      color={darkTheme ? '#ffffff' : '#64748b'}
                      htmlFor="password"
                    >
                      PASSWORD
                    </Label>
                    <InputField
                      bgColor="transparent"
                      color={darkTheme ? '#ffffff' : '#000000'}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword}
                    />
                  </InputContainer>
                  <ShowpassContainer>
                    <Checkbox
                      onChange={this.toggleShowPassword}
                      type="checkbox"
                      id="showPassword"
                    />
                    <ShowPassLabel
                      color={darkTheme ? '#ffffff' : '#1e293b'}
                      htmlFor="showPassword"
                    >
                      Show Password
                    </ShowPassLabel>
                  </ShowpassContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {errorMsg.length > 0 ? (
                    <ErrorPara>{`*${errorMsg}`}</ErrorPara>
                  ) : (
                    ''
                  )}
                </LoginForm>
              </LoginCard>
            </LoginPage>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
