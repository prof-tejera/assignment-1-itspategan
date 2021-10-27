import styled from "styled-components";

const theme = {
  green: {
    default: "#76C893",
    hover: "#52B69A",
    border: "8px solid #D8F3DC",
  },
  blue: {
    default: "#168AAD",
    hover: "#1A759F",
    border: "8px solid #D8F3DC",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  height: 150px;
  width: 150px;
  font-size: 1.5em;
  color: white;
  line-height: 100px;
  padding: 5px 15px;
  border-radius: 100px;
  border: ${(props) => theme[props.theme].border};
  outline: 0;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  cursor: pointer;
  transition: ease background-color 100ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "green",
};

export default function App() {
  return (
    <>
      <div>
        <Button>Start</Button>
      </div>
      <div>
        <Button theme="blue">Reset</Button>
      </div>
    </>
  );
}
