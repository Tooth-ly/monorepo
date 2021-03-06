import styled from 'styled-components';

export const Container900 = styled.div({
  backgroundColor: '#DFFAFF',
  fontFamily: 'Sans',
  paddingBottom: '10px',
  paddingTop: '1px',
  marginTop: '-10px',
  display: 'grid',
  // templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'},
  gridTemplateColumns: '110px 1fr',
  gridAutoRows: '1fr',
});

export const Container = styled.div({
  backgroundColor: '#DFFAFF',
  fontFamily: 'Sans',
  paddingBottom: '10px',
  paddingTop: '1px',
  marginTop: '-10px',
  display: 'grid',
  // templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'},
  gridTemplateColumns: '90px 1fr',
  padding: '17px',
  gridAutoRows: '1fr',
});

export const GreenCircle = styled.span`
  height: 20px;
  width: 20px;
  background-color: #42f584;
  border-radius: 50%;
  display: inline-block;
  padding: 0px;
`;

export const RedCircle = styled.span`
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  padding: 0px;
`;

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
});

export const Text = styled.p({
  fontWeight: 600,
  fontSize: '17px',
  cursor: 'default',
});
