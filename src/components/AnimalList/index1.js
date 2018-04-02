// @flow

// Simple stateless component using Flow instead of PropTypes

import React from "react"
import type { Animal } from "data/animal/types"

type Props = {
  animals: Animal[],
}

const AnimalList = ({ animals }: Props) => (
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

export default AnimalList
