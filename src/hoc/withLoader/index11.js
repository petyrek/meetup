// @flow

// the less verbose way using recompose

import * as React from "react"
import { branch, renderComponent, type HOC } from "recompose"

const Loader = () => <div>"loading..."</div>

function withLoader<Props>(
  predicate: Props => boolean,
): (React.ComponentType<Props>) => React.ComponentType<Props> {
  return Component => branch(predicate, renderComponent(Component))
}

export default withLoader
