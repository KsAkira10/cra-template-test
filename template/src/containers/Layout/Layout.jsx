// @flow
import React from 'react'
import { element } from 'prop-types'
import { ReactComponent as Logo } from '../../logo.svg'
import './Layout.scss'

const Layout = ({ children }) => (
  <div className="layout">
    <header className="layout__header">
      <Logo className="layout__logo" />
    </header>
    {children}
  </div>
)

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
