import {Link} from 'react-router-dom'
import {
  GamingVideoList,
  GamingVideoImg,
  GamingVideoHeading,
  GamingVideoViews,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const GamingViewItem = props => {
  const {videoItem} = props
  const {id, title, thumbnailUrl, viewCount} = videoItem

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <Link className="link" to={`/videos/${id}`}>
            <GamingVideoList>
              <GamingVideoImg src={thumbnailUrl} alt="video thumbnail" />
              <GamingVideoHeading color={darkTheme ? '#ffffff' : '#42485e'}>
                {title}
              </GamingVideoHeading>
              <GamingVideoViews>
                {viewCount} Watching Worldwide
              </GamingVideoViews>
            </GamingVideoList>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingViewItem
