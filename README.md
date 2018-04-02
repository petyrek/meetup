# Prolog

* Tooling
* Setup
* Flow typed

# The low hanging fruit

I don't see an excuse why not to use it for these scenarios

## data/animal/types.js

* plain simple typing our entites

## data/animal/dummyData.js

* using our types to type the data

## components/AnimalList/index0-2

* typing our components and replacing prop-types

# Getting deeper

* this will need some extra work, but will pay of

## data/animal/actions.js

* typing actions

## data/animal/reducer.js

* typing reducer using the action types and showing branch elimination in flow

## reducers.js

* typing the whole redux tree using reducer state types

## data/animal/selector.js + types/redux.js

* typing selectors and simplyfying

# Covering all our bases

This may be non-trivial, especially if new to types
But it's what you need to get that sweet coverage

## components/AnimalList/index3-7 + hoc/withLoader/index0-12
