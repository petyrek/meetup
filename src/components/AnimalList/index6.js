// @flow

// Stateless component wrapped in multiple HOCs, showing how type inference is retained, by better typing withLoader

import React from "react"
import { withProps, compose, type HOC } from "recompose"
import withLoader from "hoc/withLoader/index1"
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

type Props = {
  animals: Animal[],
  loading: boolean,
}

const enhancer: HOC<*, Props> = compose(
  withLoader(props => props.loading),
  withProps(props => ({
    animalsLength: props.animals.length,
  })),
  withProps(props => ({
    animalsLengthX2: props.animalsLength * 2,
  })),
)

export default enhancer(AnimalList)
