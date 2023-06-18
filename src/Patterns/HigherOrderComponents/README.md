## Higher Order Components

# Their current place in the React ecosystem

Higher Order components where a popular pattern when it was more common to use React in a class based manner, with the introduction of Hooks the use of them might be on the downward trend.
It is however usedful to understand the problems they solved and the specifics of how they are implemented, they many well by used in projects and it would be good to understand at a glance what is going on.

# The basics

It is a pattern which builds upon Javascripts exsisting Higher Order Function pattern and closures and applies it to Reacts components.

It is a pattern to combat the 'DRY' principle, by allowing developers to reuse component logic.
A developer is able to create a relevant component, which is then passed into your HOC function.
This will then return a version of the original component with the additional logic added onto it.

Refer to the `SimpleHOC.tsx` file to see what that would look like.

There many be many cases where this may be wanted and the reuse is useful, for example there may be many component which need to know the browsers location so you could create a HOC to provied components with that information.
Another common use case would be to pass context into a component as this would likely be needed in many components.

### Alternate solutions to the problems solved by HOC

- Hooks and especially creating your own custom hooks
