import styled from "styled-components";

const Button = styled.button`
  font-family: "Red Hat Display", sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 15px;
  width: 85%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0px 18px 30px -8px rgba(56, 41, 224, 0.24);
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.primary
      ? `
        background-color: hsl(245, 75%, 52%);
        color: white;

        &:hover {
          background-color: hsl(245, 70%, 45%);
          box-shadow: 0px 20px 40px -8px rgba(56, 41, 224, 0.4);
        }
      `
      : `
        background-color: transparent;
        color: hsl(224, 23%, 55%);
        box-shadow: none;

        &:hover {
          color: hsl(223, 47%, 23%);
          text-decoration: underline;
        }
      `}
`;

const Buttons = () => {
  return (
    <div>
      <Button primary>Proceed to Payment</Button>
      <Button>Cancel Order</Button>
    </div>
  );
};

export default Buttons;

