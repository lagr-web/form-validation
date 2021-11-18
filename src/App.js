import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Container, Row, Col, FormGroup, FormText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Input } from "reactstrap";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const App = () => {

  const schema = yup.object().shape({

    firstName: yup
    .string()
    .required("Vi skal bruge dit navn"),

    age:yup
    .number("Skal være et nummer")
    .typeError("det skal være et nummmer")
    .required("Skal udfyldes")
    .positive()
    .integer()
    .min(18, "du skal være over 18")
    .max(99, "du skal være under 99"),

    email:yup
    .string()
    .email("Invalid email format")
    .required("required"),

    terms:yup
    .bool()
    .oneOf([true], "du skal acceptere vores betingelser")

  })


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
     
    resolver:yupResolver(schema)

  });

  const onSubmit = (data) => console.log(data);
  

  return (
    <div id="myFormContainer" className="block-example border border-grey p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>First Name</label>
            </Col>

            <Col>
              <input
                className="form-control"
                id="firstname"
                {...register("firstName")}
                name="firstName"
                type="text"
              />

              <FormText color="muted">
                {errors.firstName?.message}
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
              <input
                className="form-control"
                id="Age"
                name="age"
                type="number"
                {...register("age")}
              />

              <FormText color="muted">
                {errors.age?.message}
              </FormText>
            </Col>
          </FormGroup>
        </Row>

        <Row className="mb-3">
          <FormGroup>

             <Col>
             <label>Email</label>
             </Col>

             <Col>
             <input className="form-control" id="email" type="email"
             {...register("email")}
             />
             <FormText color="muted">
              {errors.email?.message}
             </FormText>
             </Col>

          </FormGroup>
      
        </Row>

        <Row className="mb-3">
       
          <FormGroup>
           
           <Col>
            <div className="form-group form-check">
             <input name="terms"
             type="checkbox" 
             {...register('terms')} 
             id="terms" 
             className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`} />
             <label >Accept Terms & Conditions</label>
             <div className="invalid-feedback">{errors.terms?.message}</div>
           </div>
          </Col>

          </FormGroup>

        </Row>

        <Row>
          <FormGroup>
            <Col>
              <button className="float-end btn btn-secondary">
                Submit
              </button>
            </Col>
          </FormGroup>
        </Row>
      </form>
    </div>
  );
};

export default App;
