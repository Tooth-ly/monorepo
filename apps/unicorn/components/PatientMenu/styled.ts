import styled from 'styled-components'

export const Container = styled.div({
  backgroundColor: '#bfeff8',
  fontFamily: 'Sans',
  paddingBottom: '10px',
  paddingTop: '1px',
  marginTop: '-10px'
})

export const GreenCircle = styled.span`
  height: 20px;
  width: 20px;
  background-color: #42f584;
  border-radius: 50%;
  display: inline-block;
  padding: 0px;
`

export const StatusContainer = styled.div({
  backgroundColor: 'white',
  display: 'flex',
  backgroundSize: 'contain',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderRadius: '10px',
  paddingRight: '7px',
  paddingLeft: '7px',
  width: '135px',
})

export const Text = styled.p({
  fontWeight: 600,
  fontSize: '17px',
  cursor: 'default'
})
