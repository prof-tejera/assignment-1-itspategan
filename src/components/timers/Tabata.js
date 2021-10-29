import React from "react";
import styled from "styled-components";
import DisplayTime from "../generic/DisplayTime";
import ControlButton from "../generic/ControlButton";
import Input from "../generic/Input";
import SimpleText from "../generic/SimpleText";

const Container = styled.div`
  height: 90%;
  width: 100%;
  border: none;
  background: #8d99ae;
  padding: 20px;
  text-align: center;
`;

class Stopwatch extends React.Component {
  render() {
    return (
      <Container>
        <DisplayTime></DisplayTime>
        <div>
          <ControlButton value={"start"} />
          <ControlButton value={"pause"} />
        </div>
        <div>
          <SimpleText value={"WORK TIME"} />
          <Input />
          <SimpleText value={"REST TIME"} />
          <Input />
          <SimpleText value={"REPEATS"} />
          <Input />
        </div>
      </Container>
    );
  }
}

export default Stopwatch;
