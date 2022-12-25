import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  border-radius: 5px;
  width: 570px;
  margin: 0 auto;
  margin-top: 2rem;
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding: 10px 10px;
    max-width: 570px;
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
  img {
    height: 40px;
    width: 206px;
    margin: 0 auto;
    margin-top: 25px;
  }
  .login-item {
    color: #ffff;
    padding: 25px 25px 0;
    margin: 20px 20px 0;
    border-radius: 3px;
  }
  input {
    border: 0;
    color: inherit;
    font: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;

    :focus {
      outline: transparent;
      box-shadow: 0 0 0 2px var(--green-500);
    }
  }
  .email:before {
    content: "\f007";
    font: 14px fontawesome;
    color: #5b5b5b;
  }
  .lock:before {
    content: "\f023";
    font: 14px fontawesome;
    color: #5b5b5b;
  }
  .form input[type="password"],
  .form input[type="email"],
  .form input[type="submit"] {
    width: 100%;
  }
  .form-login label,
  .form-login input[type="email"],
  .form-login input[type="password"],
  .form-login input[type="submit"] {
    border-radius: 0.25rem;
    padding: 1rem;
    color: #3a3f44;
  }
  .form-login label {
    background-color: var(--primary);
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  .form-login input[type="email"],
  .form-login input[type="password"] {
    background-color: var(--gray-100);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .form-login input[type="email"]:focus,
  .form-login input[type="email"]:hover,
  .form-login input[type="password"]:focus,
  .form-login input[type="password"]:hover {
    background-color: #eeeeee;
  }
  .form-login input[type="submit"] {
    background-color: #00b9bc;
    color: #eee;
    font-weight: bold;
    text-transform: uppercase;
  }
  .form-login input[type="submit"]:focus,
  .form-login input[type="submit"]:hover {
    background-color: #197071;
    cursor: pointer;
  }
  .form-field {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 2rem;
  }
  .error {
    background-color: var(--red-500);
    color: #eee;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 0.25rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }
  .hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .text--center {
    text-align: center;
  }
`;
