import React from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>My Log</h1>
          <p>Check out your catch log.</p>
          <p>
            <Button href="/my-log">Go to the page</Button>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid>
        <Container>
          <h1>Community Log</h1>
          <p>Check out the community log.</p>
          <p>
            <Button href="/community-log">Go to the page</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
