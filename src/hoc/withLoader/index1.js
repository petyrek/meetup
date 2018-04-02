// @flow

// the more verbose way, retaining type inference when used

import * as React from "react"
import { type HOC } from "recompose"

const Loader = () => <div>"loading..."</div>

function withLoader<Props>(
  predicate: Props => boolean,
): (React.ComponentType<Props>) => React.ComponentType<Props> {
  return Component => (props: Props) => {
    if (predicate(props)) return <Loader />

    return <Component {...props} />
  }
}

export default withLoader
