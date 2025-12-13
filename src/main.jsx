import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router";
import { About, Features, AllTodos, Home } from "./pages/index.js";
import { AddTodo } from "./components/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="all-todos" element={<AllTodos />} />
          <Route path="add-todo" element={<AddTodo />} />
          <Route path="features" element={<Features />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
