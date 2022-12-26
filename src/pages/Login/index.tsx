import * as S from "./styles";

import { Lock, User } from "phosphor-react";

export function Login() {
  return (
    <>
      <S.Content>
        <div className="content">
          <h1>Login</h1>
        </div>
      </S.Content>
      <S.Container>
        <form className="form form-login">
          <div className="form-field">
            <label className="email" htmlFor="login-email">
              <User weight="fill" color="#fff" />
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value=""
              required
            />
          </div>

          <div className="form-field">
            <label className="lock" htmlFor="login-password">
              <Lock weight="fill" color="#fff" />
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              value=""
              required
            />
          </div>

          <div className="form-field">
            <input type="submit" value="Entrar" />
          </div>
        </form>
      </S.Container>
    </>
  );
}
