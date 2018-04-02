// @flow

// Stateless component wrapped in a HOC, props being infered

import React from "react"
import { branch, renderComponent, type HOC } from "recompose"
import type { Animal } from "data/animal/types"

const AnimalList = ({ animals, loading }) => (
  <div>
    <h2>Animal list</h2>
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

const enhancer: HOC<*, Props> = branch(
  props => props.loading,
  renderComponent(Loader),
)

export default enhancer(AnimalList)
