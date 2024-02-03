import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialCartState } from "./reducers/CartReducer";

export default function App() {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartState, cartDispatch }}>
          <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
          </div>
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
