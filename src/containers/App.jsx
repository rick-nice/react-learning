import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import PropTypes from 'prop-types'

import { setFavorite, getRandomBeer } from '../actions/TestActions'
import Navbar from '../components/Navbar'
import BeerCard from '../components/BeerCard'
import loadingBeer from '../images/beer.svg'
import './App.css'

function App(props) {
  const { setFavAction, setBeerAction, beers } = props
  const { beer } = beers
  const { id = 'random', title = 'loading', img = loadingBeer } = beer
  return (
    <Layout>
      <Navbar getRandomBeer={setBeerAction} />
      <BeerCard id={id} title={title} img={img} setFavorite={setFavAction} />
    </Layout>
  )
}

App.propTypes = {
  beers: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    beer: PropTypes.array.isRequired,
  }).isRequired,
  favorites: PropTypes.shape({ favorites: PropTypes.array.isRequired })
    .isRequired,
  setFavAction: PropTypes.func.isRequired,
  setBeerAction: PropTypes.func.isRequired,
}


const mapStateToProps = (store) => ({
  favorites: store.favorites,
  beers: store.beers,
})


const mapDispatchToProps = (dispatch) => ({
  setFavAction: (id) => dispatch(setFavorite(id)),
  setBeerAction: (id) => dispatch(getRandomBeer(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
