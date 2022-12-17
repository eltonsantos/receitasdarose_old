import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <Menu />
      <div>
        <main>
          <Post />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
