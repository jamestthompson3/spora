// @flow
import * as React from 'react'
import { type Subscription, type Observable } from 'rxjs'

type Actions = {
  [key: string]: Observable
}

type Props = {
  actions: Actions,
  children: React.Node
}

type State = {
  [key: string]: Subscription
}

export const spora = (actions: Actions) => (Component: React.ComponentType<any>) =>
  class Spora extends React.PureComponent<State> {
    startAction = (key: string) => {
      return actions[key].subscribe(x => this.setState({ x }))
    }
    cancelAction = (key: string) => {
      return actions[key].unsubscribe()
    }

    render() {
      return (
        <Component
          {...this.state}
          startAction={this.startAction}
          cancelAction={this.cancelAction}
        />
      )
    }
  }
