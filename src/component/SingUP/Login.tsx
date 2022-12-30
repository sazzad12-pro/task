import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UseContext/UseContext";

const Login = () => {
  const { userLogIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);

    userLogIn(email, password)
      .then((result: any) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err: any) => console.error(err));
  };
  return (
    <div className="w-[50%] mx-auto">
      <h1 className="text-center text-primary text-2xl font-bold">
        Please Login
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Enter Your Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="Enter your Email"
            required={true}
            shadow={true}
            onChange={handleChange}
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
            name="password"
            required={true}
            placeholder="Enter Your Name"
            shadow={true}
            onChange={handleEmail}
            value={password}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
      <div>
        <h1>
          No Account{" "}
          <Link className="underline" to="/register">
            Register
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
