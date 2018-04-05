// Simple stateless component using PropTypes

import React from "react"
import PropTypes from "prop-types"

const AnimalList = ({ animals }) => (
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

AnimalList.propTypes = {
  animals: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
}

export default AnimalList
