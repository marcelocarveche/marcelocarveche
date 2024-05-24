import React from 'react'
import { Text } from './challenges-styles'

export const ChallengesPage: React.FC = () => {
  return (
    <div>
      <h1>Challenge One</h1>
      <h2>Border-radius Previewer</h2>
      <h3>Requirements:</h3>
      <Text color="#e647e6">
        The border-radius property can have multiple values changed. Preview how the shape looks
        while changing these values.
      </Text>
      <div>
        <Text color="#c786ff">
          User can see a box which has a border-radius property applied to it
        </Text>
        <span>
          User can change the 4 border-radius values that are applied to the box (top-left,
          top-right, bottom-left, bottom-right)
        </span>
        <span>User can copy the resulting CSS to the clipboard</span>
        <span>
          User can change all 8 possible values of the border-radius in order to create a complex
          shape
        </span>
      </div>
    </div>
  )
}
