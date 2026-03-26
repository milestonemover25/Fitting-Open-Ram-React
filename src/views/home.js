import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fitting Open Ram</title>
        <meta property="og:title" content="Fitting Open Ram" />
        <link
          rel="canonical"
          href="https://fitting-open-ram-ktbft0.teleporthq.site/"
        />
        <meta
          property="og:url"
          content="https://fitting-open-ram-ktbft0.teleporthq.site/"
        />
      </Helmet>
    </div>
  )
}

export default Home
