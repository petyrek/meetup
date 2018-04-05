// @flow

// the least verbose way with predefined predicate function

import * as React from "react"
import { branch, renderComponent, type HOC } from "recompose"

const Loader = () => <div>"loading..."</div>

function withLoader<Props: { loading: boolean }>(
  Component: React.ComponentType<Props>,
): React.ComponentType<Props> {
  return branch(props => props.loading === true, renderComponent(Component))
}

export default withLoader
