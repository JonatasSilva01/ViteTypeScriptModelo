import { Container, Text } from '@chakra-ui/layout';
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Container maxW='100%' bg='CaptionText' color='white'>
      <Text
        bgGradient="linear(to-l, #7928ca7a, #5900ff)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
        JonatasDevPleno
      </Text>
      </Container>

    </React.Fragment>
  );
}

export default App;
