import styled from 'styled-components'
import Image from 'next/image'

export const Title = styled.p({
  fontSize: '20px',
  padding: 0,
  margin: 0,
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
})

export const ImageStyle = styled(Image)`
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`
