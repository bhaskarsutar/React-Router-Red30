import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate()
  const nameRef = useRef(null);

  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {state: { name:nameRef.current.value,email:emailRef.current.value}})
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <p>This email input field will accept all types of data not only email Okay, 😀 </p>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" name="Name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}