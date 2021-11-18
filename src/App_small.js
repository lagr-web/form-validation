import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { Container, Row, Col,FormGroup, FormText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
      <div id="myFormContainer" className="block-example border border-grey p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>FirstName</label>
              </Col>
              <Col>
                <input id="firstName" type="text" className="form-control" 
                {...register("firstName", { required: true, maxLength: 10 })}
                />
                <FormText color="muted">
                  {errors.firstName && <span>Your name is required</span>}
                </FormText>

              </Col>
            </FormGroup>
          </Row>

          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>Age</label>
              </Col>
              <Col>
                <input id="age" type="number" className="form-control"  
                 {...register("age", { required: true, min: 18, max: 99 })}
                />
                <FormText color="muted">
                  {errors.age && <span>Du skal indtaste din alder(18-99)</span>}
                </FormText>

              </Col>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Col>
                <button className="float-end btn btn-secondary" >Submit</button>
              </Col>
            </FormGroup>
          </Row>
        </form>
      </div>
  );
};

export default App;
