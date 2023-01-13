import { Component, ReactNode } from 'react'

import { ErrorStub } from '../errorStub/errorStub'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorStub />
    }

    return this.props.children
  }
}
