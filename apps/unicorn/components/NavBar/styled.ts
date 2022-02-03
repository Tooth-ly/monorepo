import styled from 'styled-components'

export const NavContainer = styled.div({
  display: 'flex',
  fontFamily: 'Segoe UI',
  justifyContent: 'space-between',
  alignItems: 'center',
  // margin: '0px 25px',
  height: '60px',
  // position: 'fixed',
  // top: 0,
  // width: '100%',
  padding: '0px 25px',
})

export const Logo = styled.p({
  fontSize: '45px',
  color: 'black',
  fontWeight: 'bold',
  textShadow: '0px 2px 2px white',
  textDecoration: 'none',
  cursor: 'pointer',
  textAlign: 'center',
})

export const SecondContainer = styled.div({
  display: 'flex',
  textAlign: 'center',
  alignContent: 'center',
})

export const Option = styled.p`
  font-size: 20px;
  color: #242424;
  text-decoration: none;
  cursor: pointer;
  margin-right: 20px;
`

export const ShadowBox = styled.div({
  boxShadow: '0 0px 5px rgb(0 0 0 / 0.2)',
  borderRadius: '5px',
  padding: '10px',
})

export const ShadowBoxII = styled.div({
  boxShadow: '0 0px 5px rgb(0 0 0 / 0.2)',
  borderRadius: '5px',
  padding: '10px',
})

export const LastOption = styled.p({
  fontSize: '20px',
  color: '#242424',
  cursor: 'pointer',
  textDecoration: 'none',
})
