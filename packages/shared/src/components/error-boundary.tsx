import React from 'react'

export class ErrorBoundary extends React.Component<
  { children: JSX.Element | JSX.Element[] },
  { hasError: boolean }
> {
  state = {
    hasError: false,
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>
    }

    return this.props.children
  }
}
