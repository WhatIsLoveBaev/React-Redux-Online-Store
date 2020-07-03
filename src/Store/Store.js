import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import ErrorBoundary from '../ErrorBoundary'
import HeaderContainer from './Header'
import Content from './Content'
import ProductsPage from './Pages/ProductsPage'
import SearchResults from './Pages/SearchResults'
import Basket from './Pages/Basket'
import Login from './Pages/Login'
import Liked from './Pages/Liked'
import Footer from './Footer'


const Store = () => {
    return (
        <Router>
            <ErrorBoundary>
                <div className='store'>
                    <HeaderContainer />
                    <Switch>
                        <Route path='/' component={Content} exact />
                        <Route path='/login/' component={Login} exact />
                        <Route path='/liked/' component={Liked} exact />
                        <Route path='/basket/' component={Basket} exact />

                        <Route path='/search/:Results?' render={({ match }) => {
                            const { Results } = match.params
                            return <SearchResults results={Results} />
                        }} />

                        <Route path='/:ProductId/:SelectedId?' render={({ match }) => {
                            const { ProductId, SelectedId } = match.params

                            return <ProductsPage ProductId={ProductId} SelectedId={SelectedId} />
                        }}  />

                        <Redirect to='/' />
                    </Switch>
                    <Footer />
                </div>
            </ErrorBoundary>
        </Router>
    )
}

export default Store