import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

function Button(props) {
  return (
    <div>
      
    </div>
  )
}

export default Button

Button.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternall: propTypes.bool,
  hasShadow: propTypes.bool,
}

// taget itu untuk link externall, isExternall itu untuk memastikan apakah link itu mengarah ke luar aplikasi atau ke dalam aplikasi (jika luar pakai tag a, jika di dalam aplikasi pakai link dari react-router-dom)