import { Footer, Navbar } from "layout/index";
import AppRoutes from "router/Router";
import style from "src/styles/app-style.module.scss";

const App = () => (
  <div className={style.container}>
    <nav>
      <Navbar />
    </nav>

    <main>
      <AppRoutes />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
