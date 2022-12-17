import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="wrapper">
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
        <Sidebar />
      </div>
      <Footer />

      <GlobalStyle />
    </div>
  );
}
