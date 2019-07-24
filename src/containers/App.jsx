import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import PropTypes from 'prop-types'

import { setFavorite, getRandomBeer } from '../actions/TestActions'
import Navbar from '../components/Navbar'
import BeerList from '../components/BeerList'

import './App.css'

const App = (props) => {
  const { setFavAction, setBeerAction, beerList } = props
  return (
    <Layout>
      <Navbar getRandomBeer={setBeerAction} />
      <BeerList data={beerList} setFavorite={setFavAction} />
    </Layout>
  )
}

App.propTypes = {
  beerList: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired,
  }).isRequired,
  favorites: PropTypes.shape({ favorites: PropTypes.array.isRequired })
    .isRequired,
  setFavAction: PropTypes.func.isRequired,
  setBeerAction: PropTypes.func.isRequired,
}

const mapStateToProps = (store) => ({
  favorites: store.favorites,
  beerList: store.beerList,
})

const mapDispatchToProps = (dispatch) => ({
  setFavAction: (id) => dispatch(setFavorite(id)),
  setBeerAction: () => dispatch(getRandomBeer()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
