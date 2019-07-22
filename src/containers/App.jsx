import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'

import { setFavorite, getRandomBeer } from '../actions/TestActions'
import Navbar from '../components/Navbar'
import BeerCard from '../components/BeerCard'
import './App.css'

class App extends Component() {
  render() {
    const { setFavAction, setBeerAction, beer } = this.props
    const { id, title, img } = beer
    return (
      <Layout>
        <Navbar getRandomBeer={setBeerAction} />
        <BeerCard id={id} title={title} img={img} setFavorite={setFavAction} />
      </Layout>
    )
  }
}

const mapStateToProps = store => ({
  favorites: store.favorites,
})

const mapDispatchToProps = dispatch => ({
  setFavAction: id => dispatch(setFavorite(id)),
  setBeerAction: id => dispatch(getRandomBeer(id)),
})

export default connect(
  mapStateToProps,
  // eslint-disable-next-line comma-dangle
  mapDispatchToProps
)(App)
