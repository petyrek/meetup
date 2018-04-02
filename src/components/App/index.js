// @flow
import React, { Component } from "react"
import AnimalList from "../AnimalList/index0"
import BookList from "../BookList"
import dummyData from "data/animal/dummyData"

const App = () => (
  <div>
    <h1>Typing everything in real world React</h1>
    <AnimalList />
    <BookList />
  </div>
)

export default App
