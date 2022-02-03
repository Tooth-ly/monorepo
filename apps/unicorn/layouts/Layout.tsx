import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { CLIENT } from "../env";
import NavBar from "../components/NavBar";

interface LayoutProps {
  layoutType: "Default" | "Keyboard" | "NoBgColor";
}

const client = new ApolloClient({
  uri: CLIENT,
  cache: new InMemoryCache(),
  credentials: "include",
});

const Layout: React.FC<LayoutProps> = ({
  children,
  layoutType = "Default",
}) => {
  if (layoutType === "Keyboard") {
    return (
      <ApolloProvider client={client}>
        <LayoutContainerKeyboard>
          <GlobalStyle />
          <NavBar />
          <main>{children}</main>
        </LayoutContainerKeyboard>
      </ApolloProvider>
    );
  }

  if (layoutType === "NoBgColor") {
    return (
      <ApolloProvider client={client}>
        <LayoutContainer>
          <GlobalStyle />
          <NavBar />
        </LayoutContainer>
        <main>{children}</main>
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <LayoutContainer>
        <GlobalStyle />
        <NavBar />
        <main>{children}</main>
      </LayoutContainer>
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
const LayoutContainer = styled.div`
  width: 100vw;
  margin: 0px;
`;

const LayoutContainerKeyboard = styled.div`
  width: 100vw;
  margin: 0px;
`;

export default Layout;
