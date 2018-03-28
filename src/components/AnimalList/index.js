// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import type { Animal } from "data/animal/types"
import { selectAnimals } from "data/animal/selectors"

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

const mapStateToProps = state => ({
  animals: selectAnimals(state),
})

export default connect(mapStateToProps)(AnimalList)
