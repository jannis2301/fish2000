import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
  <header className="top">
    <h1>
      The
      <span className="ofThe">
        <span className="of">fish</span>
        <span className="the">bar</span>
      </span>
      2000
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
)

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
}

export default Header
