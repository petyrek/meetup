// @flow

// Simple statefull component using Flow

import * as React from "react"
import type { Animal } from "data/animal/types"

type Props = {
  animals: Animal[],
}

type State = {
  open: boolean,
}

class AnimalList extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  render() {
    const { animals } = this.props
    const { open } = this.state

    return (
      <div>
        <h2>Animal list</h2>
        {open && (
          <ul>
            {animals.map(x => (
              <li>
                {x.id} - {x.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default AnimalList
