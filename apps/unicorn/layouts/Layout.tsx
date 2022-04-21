import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from '../components/NavBar';
import { CLIENT } from '../env';

interface LayoutProps {
  layoutType: 'Default' | 'Navbar';
}

const client = new ApolloClient({
  uri: CLIENT,
  cache: new InMemoryCache(),
  credentials: 'include',
});

const Layout: React.FC<LayoutProps> = ({
  children,
  layoutType = 'Default',
}) => {
  if (layoutType === 'Navbar') {
    return (
      <ApolloProvider client={client}>
        <LayoutContainerNavBar>
          <GlobalStyle />
          <NavBar />
          <main>{children}</main>
        </LayoutContainerNavBar>
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <main>{children}</main>
    </ApolloProvider>
  );
};

const GlobalStyle = createGlobalStyle`
      html{
        margin:0;
      padding: 0;
      }

      body{
        min-height: 100vh;
      margin: 0;
      }
      `;

const LayoutContainerNavBar = styled.div`
  width: 100vw;
  margin: 0px;
`;

export default Layout;
