import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Select from 'react-select';
import axios from "axios";

function App() {
  const [options, setOptions] = useState({});
  const [cate1, setCate1] = useState("");
  const [cate2, setCate2] = useState("");
  const [cate3, setCate3] = useState("");
  const [cate4, setCate4] = useState("");
  const [cate5, setCate5] = useState("");
  const [results, setResults] = useState([]);

  const BASE_URL = "http://54.164.227.155:8080";

  useEffect(() => {

    const getOptions   = async () => {
      let result = (await axios.get(`${BASE_URL}/options`)).data;
      let cate1 = result.map(el => { 
        return { 
          value: el.category1, 
          label: el.category1 
        }
      });
      let cate2 = result.map(el => { 
        return { 
          value: el.category2, 
          label: el.category2 
        }
      });
      let cate3 = result.map(el => { 
        return { 
          value: el.category3, 
          label: el.category3 
        }
      });
      let cate4 = result.map(el => { 
        return { 
          value: el.category4, 
          label: el.category4 
        }
      });
      let cate5 = result.map(el => { 
        return { 
          value: el.category5, 
          label: el.category5 
        }
      });

      let wrapper = [cate1, cate2, cate3, cate4, cate5];

      setOptions(wrapper);
    }

    getOptions();
  }, []); 
  
  const loadOptions = async () => {
    console.log(cate1);
    let result = (await axios.get(`${BASE_URL}/search?category1=${cate1.value}&category2=${cate2.value}&category3=${cate3.value}&category4=${cate4.value}&category5=${cate5.value}`)).data;
    setResults(result);
  }
  
  return (
    <Container>
      <div style={{marginTop: "30px", marginBottom: "30px"}}>
        <h3 style={{textAlign: "center"}}>Meta Test</h3>
      </div>

      <Row>
        <Col><Select options={options[0]} onChange={choice => setCate1(choice)} /></Col>
        <Col><Select options={options[1]} onChange={choice => setCate2(choice)} /></Col>
        <Col><Select options={options[2]} onChange={choice => setCate3(choice)} /></Col>
        <Col><Select options={options[3]} onChange={choice => setCate4(choice)} /></Col>
        <Col><Select options={options[4]} onChange={choice => setCate5(choice)} /></Col>
        <Col><Button className="w-100" onClick={loadOptions}>Run</Button></Col>
      </Row>

      {
        results.map((el, index) => {
          return <div style={{marginTop:"30px"}}>
            <h3>Results</h3>
            <Row>
              <Col key={index.toString()}><p>{el.category1}</p></Col>
              <Col key={index.toString()}><p>{el.category2}</p></Col>
              <Col key={index.toString()}><p>{el.category3}</p></Col>
              <Col key={index.toString()}><p>{el.category4}</p></Col>
              <Col key={index.toString()}><p>{el.category5}</p></Col>
              <Col key={index.toString()}><p>{el.text}</p></Col>
            </Row>
          </div>

        })

      }
    </Container>
  );
}

export default App;
