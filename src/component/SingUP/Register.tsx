import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUser(email, password)
      .then((result: any) => {
        const user = result.user;
        navigate("/");
      })
      .catch((err: any) => console.error(err));
  };

  return (
    <div className="w-[50%] mx-auto">
      <h1 className=" text-center text-primary font-bold text-2xl">
        Please Register
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Enter Your Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your Email"
            required={true}
            shadow={true}
            value={email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Enter Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            onChange={handleEmail}
            required={true}
            placeholder="Enter Your Password"
            shadow={true}
            value={password}
          />
        </div>

        <Button type="submit">Create Account</Button>
      </form>
      <div>
        <h1>
          Already Have Account{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Register;
