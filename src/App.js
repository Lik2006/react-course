import React from 'react'
import Header from './components/Header/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from './components/Menu/Menu'
import PageDetail from './Pages/PageDetail/PageDetail'

function App () {
  console.log('dss')
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={2}><Menu /></Col>
          <Col lg={10}>
            <PageDetail />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
