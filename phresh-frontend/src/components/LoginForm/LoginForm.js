import React from "react";
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiFieldPassword,
  EuiSpacer,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginFormWrapper = styled.div`
  padding: 2rem;
`;

const NeedAccountLink = styled.span`
  font-size: 0.8rem;
`;

const FieldText = styled(EuiFieldText)`
  width: calc(100% - 40px);
  padding: 0 2px 0 40px;
`;

const FieldPassword = styled(EuiFieldPassword)`
  padding: 0 2px 0 40px;
`;

export default function LoginForm({
  requestUserLogin = async ({ email, password }) =>
    console.log(`Logging in with ${email} and ${password}.`),
}) {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const handleInputChange = (label, value) => {
    setForm((form) => ({ ...form, [label]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await requestUserLogin({ email: form.email, password: form.password });
  };
  return (
    <LoginFormWrapper>
      <EuiForm component="form" onSubmit={handleSubmit}>
        <EuiFormRow
          label="Email"
          helpText="Enter the email associated with your account."
        >
          <FieldText
            icon="email"
            placeholder="user@gmail.com"
            value={form.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            aria-label="Enter the email associated with your account."
          />
        </EuiFormRow>
        <EuiFormRow label="Password" helpText="Enter your password.">
          <FieldPassword
            placeholder="••••••••••••"
            value={form.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            type="dual"
            aria-label="Enter your password."
          />
        </EuiFormRow>
        <EuiSpacer />
        <EuiButton type="submit" fill>
          Submit
        </EuiButton>
      </EuiForm>
      <EuiSpacer size="xl" />
      <NeedAccountLink>
        Need an account? Sign up <Link to="/registration">here</Link>.
      </NeedAccountLink>
    </LoginFormWrapper>
  );
}
