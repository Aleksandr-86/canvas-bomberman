import { Component, ReactNode } from 'react'

import { ErrorStub } from '../errorStub/errorStub'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorStub />
    }

    return this.props.children
  }
}
