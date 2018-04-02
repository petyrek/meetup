// @flow

// Statefull component wrapped in multiple HOCs, infering proptypes for class components

import * as React from "react"
import { withProps, compose, type HOC } from "recompose"
import withLoader from "hoc/withLoader/index12"
import type { Animal } from "data/animal/types"

class AnimalList<P: *> extends React.Component<P> {
  render() {
    const { animals, loading, animalsLengthX2 } = this.props
    return (
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
  }
}

type Props = {
  animals: Animal[],
  loading: boolean,
}

const enhancer: HOC<*, Props> = compose(
  withLoader,
  withProps(props => ({
    animalsLength: props.animals.length,
  })),
  withProps(props => ({
    animalsLengthX2: props.animalsLength * 2,
  })),
)

export default enhancer(AnimalList)
