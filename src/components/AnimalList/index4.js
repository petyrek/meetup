// @flow

// Stateless component wrapped in multiple HOCs, showing how added props are infered

import React from "react"
import {
  branch,
  renderComponent,
  withProps,
  compose,
  type HOC,
} from "recompose"
import type { Animal } from "data/animal/types"

const AnimalList = ({ animals, loading, animalsLengthX2 }) => (
  <div>
    <h2>Animal list, {animalsLengthX2}</h2>
    <ul>
      {animals.map(x => (
        <li>
          {x.id} - {x.name}
        </li>
      ))}
    </ul>
  </div>
)

const Loader = () => <div>"loading..."</div>

type Props = {
  animals: Animal[],
  loading: boolean,
}

const enhancer: HOC<*, Props> = compose(
  branch(props => props.loading, renderComponent(Loader)),
  withProps(props => ({
    animalsLength: props.animals.length,
  })),
  withProps(props => ({
    animalsLengthX2: props.animalsLength * 2,
  })),
)

export default enhancer(AnimalList)
