import React, {PropTypes} from 'react'

export default class FlowType extends React.Component {

  componentDidMount () {
    this.updateSettings()
    this.updateWidthFont()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateWidthFont.bind(this))
    }
  }

  componentWillReceiveProps () {
    this.updateSettings()
    this.updateFontSize()
  }

  updateSettings () {
    this.settings = {
      maximum: this.props.maximum || 9999,
      minimum: this.props.minimum || 1,
      maxFont: this.props.maxFont || 9999,
      minFont: this.props.minFont || 1,
      fontRatio: this.props.fontRatio
    }
  }

  updateWidthFont () {
    this.elemWidth = this.refs.textBody.offsetWidth
    this.updateFontSize()
  }

  updateFontSize () {
    let settings = this.settings
    let elw = this.elemWidth
    let width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw
    let fontBase = width / settings.fontRatio
    let fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase
    fontSize = Math.round(fontSize)
    this.setState({fontSize: fontSize})
  }

  render () {
    let fontSize = this.state && this.state.fontSize

    if (isNaN(fontSize)) {
      fontSize = this.props.default || null
    }

    let divStyle = (fontSize) ? {'fontSize': fontSize + 'px'} : {}

    return (
      <div style={divStyle} ref='textBody'>
        {this.props.children}
      </div>
    )
  }
}

FlowType.propTypes = {
  default: PropTypes.number,
  fontRatio: PropTypes.number.isRequired,
  maximum: PropTypes.number,
  minimum: PropTypes.number,
  minFont: PropTypes.number,
  maxFont: PropTypes.number
}
