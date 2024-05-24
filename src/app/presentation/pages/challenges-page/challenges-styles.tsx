import styled from 'styled-components'

interface TextProps {
  children: React.ReactNode
  color: string
}

export const Text = styled.p<TextProps>`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
`
