import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage'

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        error: '',
        info: ''
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error: error, info: info });
      }

    render() {
        if (this.state.hasError) return <ErrorMessage error={this.state.error} info={this.state.info} />
        
        return this.props.children
    }
}

export default ErrorBoundary