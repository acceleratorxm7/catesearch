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
      let url = `${BASE_URL}/options?category1=${cate1?.value || ''}&category2=${cate2?.value || ''}&category3=${cate3?.value || ''}&category4=${cate4?.value || ''}&category5=${cate5?.value || ''}`;
      let result = (await axios.get(url)).data;

      let wrapper = result.map(el => {
        return el.map(obj => {
          return {
            label: obj.cate,
            value: obj.cate
          }
        })
      })

      setOptions(wrapper);
    }

    getOptions();
  }, [cate1, cate2, cate3, cate4, cate5]); 
  
  const loadOptions = async () => {
    console.log(cate1);
    let result = (await axios.get(`${BASE_URL}/search?category1=${cate1?.value || ''}&category2=${cate2?.value || ''}&category3=${cate3?.value || ''}&category4=${cate4?.value || ''}&category5=${cate5?.value || ''}`)).data;
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

      <h3>Header</h3>
      {
        results.map((el, index) => {
          return el.type == "Header" && <div style={{marginTop:"30px"}}>
            <Row>
              <Col key={"HeaderCate1"+index.toString()}><p>{el.category1}</p></Col>
              <Col key={"HeaderCate2"+index.toString()}><p>{el.category2}</p></Col>
              <Col key={"HeaderCate3"+index.toString()}><p>{el.category3}</p></Col>
              <Col key={"HeaderCate4"+index.toString()}><p>{el.category4}</p></Col>
              <Col key={"HeaderCate5"+index.toString()}><p>{el.category5}</p></Col>
            </Row>
          </div>
        })
      }

    <h3>Condition</h3>

      {
        results.map((el, index) => {
          return el.type == "Condition" && <div style={{marginTop:"30px"}}>
            <Row>
              <Col key={"ConditionCate1"+index.toString()}><p>{el.category1}</p></Col>
              <Col key={"ConditionCate2"+index.toString()}><p>{el.category2}</p></Col>
              <Col key={"ConditionCate3"+index.toString()}><p>{el.category3}</p></Col>
              <Col key={"ConditionCate4"+index.toString()}><p>{el.category4}</p></Col>
              <Col key={"ConditionCate5"+index.toString()}><p>{el.category5}</p></Col>
            </Row>
          </div>
        })
      }

      <h3>Log</h3>
      {
          results.map((el, index) => {
            return el.type == "Item" && <div style={{marginTop:"30px"}}>
              <h3>Log</h3>
              <Row>
                <Col key={"ItemCate1"+index.toString()}><p>{el.category1}</p></Col>
                <Col key={"ItemCate2"+index.toString()}><p>{el.category2}</p></Col>
                <Col key={"ItemCate3"+index.toString()}><p>{el.category3}</p></Col>
                <Col key={"ItemCate4"+index.toString()}><p>{el.category4}</p></Col>
                <Col key={"ItemCate5"+index.toString()}><p>{el.category5}</p></Col>
                <Col key={"Result"+index.toString()}><p>{el.result}</p></Col>
              </Row>
            </div>
          })
        }

    </Container>
  );
}

export default App;
