import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Select from 'react-select';

function App() {
  const [options, setOptions] = useState({});
  const [items, setItems] = useState({});
  const [logs, setLogs] = useState({});

  useEffect(() => {
    setOptions([
      [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    ])
  }, []); 
  
  const loadResults = () => {
    console.log("TEST");
  }

  const loadOptions = () => {

  }

  return (
    <Container>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <h3 style={{textAlign: "center"}}>Meta Test</h3>
      </div>

      <Row>
        <Col><Select options={options[0]} /></Col>
        <Col><Select options={options[1]} /></Col>
        <Col><Select options={options[2]} /></Col>
        <Col><Select options={options[3]} /></Col>
        <Col><Select options={options[4]} /></Col>
        <Col><Button className="w-100" onClick={loadOptions()}>Run</Button></Col>
      </Row>

      {

      }
    </Container>
  );
}

export default App;
