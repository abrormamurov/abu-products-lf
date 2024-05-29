import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Link, Form } from "react-router-dom";

function Login() {
  return (
    <section className="h-sceen grid pleace-items-center">
      <Form
        method="post"
        className="car w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          label="email"
          type="email"
          name="email"
          defaultValue="type here"
        />
        <FormInput
          label="password:"
          type="password"
          name="password"
          defaultValue="type here"
        />
        <div className="mt-10">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block capitalize">
          guest user
        </button>
        <p className="text-center">
          Not a member yet:
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
