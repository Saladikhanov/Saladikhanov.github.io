import { useEffect, useState } from "react";
import { handleChangeInput } from "../../lib/functions";
import styled from "styled-components";
import { ButtonDiv, ArrowRight, ArrowRightCircle } from "./ContactElements";
// import ArrowCircle from "../assets/arrow-circle.png";
// import { useLocation, Link } from "react-router-dom";
// import { useContext } from "react/cjs/react.development";
// import AppContext from "../context/AppContext";
// import { getUserById } from "../lib/firebaseFunctions";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  color: #e59aff;
  font-weight: 700;
  border: none;
  background: none;
`;
const Img = styled.img`
  margin-left: 3px;
  width: 10%;
  height: 10%;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #beaaea;
  background: none;
  border: none;
  border-bottom: 2px solid rgba(190, 170, 234, 0.5);
  width: 375px;
  margin-bottom: 30px;
  /* opacity: 0.5; */

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;
const LastInput = styled(Input)`
  padding-bottom: 60px;
`;

function ContactForm() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const [formData, setFormData] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  //   const [showAlert, setShowAlert] = useState(true);

  const [buttonContent, setButtonContent] = useState("");

  const handleInput = (e) => {
    handleChangeInput(e, formData, setFormData);
  };

  const handleSubmit = () => {
    fetch("https://formsubmit.co/ajax/saladikhanov@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    // setFormData.name = "";
    // setFormData.email = "";
    // setFormData.message = "";
    alert("DONE!");

    // console.log(formData);
  };

  useEffect(() => {
    if (
      formData.name &&
      formData.email &&
      formData.message

      // maybe check for is it an actual email and also password strength
    ) {
      setButtonContent("SUBMIT");
      setIsFormComplete(true);
    } else {
      setButtonContent("LEAVE ME A MESSAGE");
      setIsFormComplete(false);
    }
  }, [formData]);

  //   useEffect(() => {
  //     if (
  //       formData.password !== formData.confirmPassword
  //     //   !formData.password ||
  //     //   !formData.confirmPassword
  //     ) {
  //       setShowAlert(true);
  //     } else {
  //       setShowAlert(false);
  //     }
  //   }, [formData]);

  return (
    <div>
      <Div>
        <Input
          type="text"
          placeholder="Name*"
          name={`name`}
          onChange={handleInput}
          // value={formData.name}
        />
        <Input
          type="text"
          placeholder="Email*"
          name={`email`}
          // value={formData.email}
          onChange={handleInput}
        />

        <LastInput
          type="text"
          placeholder="Message*"
          name={`message`}
          // value={formData.message}
          onChange={handleInput}
        />
        {/* {showAlert && <div>Passwords must match</div>} */}
        <ButtonDiv>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            disabled={!isFormComplete}
            onClick={handleSubmit}
          >
            {buttonContent}
            {hover ? <ArrowRight /> : <ArrowRightCircle />}
          </Button>

          {/* <Img src={ArrowCircle} alt="arrow"/> */}
        </ButtonDiv>
      </Div>
    </div>
  );
}
export default ContactForm;
