// @flow

// the simple way how to declare withLoader, but this loses type inference

import React from "react"
import { branch, renderComponent, type HOC } from "recompose"

const Loader = () => <div>"loading..."</div>

const withLoader = (predicate: Function) =>
  branch(predicate, renderComponent(Loader))

export default withLoader
