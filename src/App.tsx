import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}
