import { ThemeProvider } from "styled-components";
import Card from "./components/Card";

import Header from "./components/Header";

import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

import CARD_CONTENT from "./constants/CardContent";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {CARD_CONTENT.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
