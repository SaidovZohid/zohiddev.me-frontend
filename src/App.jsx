import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <TypeAnimation
                sequence={[
                  "Golang excels in simplicity.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Golang simplifies software development.",
                  1000,
                  "Golang empowers efficient development.",
                  1000,
                  "Golang streamlines coding process.",
                  1000,
                  "Golang boosts productivity levels.",
                  1000,
                  "Golang enables scalable solutions.",
                  1000,
                  "Golang fosters code reusability.",
                  1000,
                  "Golang embraces modern paradigms.",
                  1000,
                  "Golang empowers concurrent programming.",
                  1000,
                  "Golang promotes clean code.",
                  1000,
                  "Golang facilitates rapid deployment.",
                  1000,
                  "Golang enhances system performance.",
                  1000,
                  "Golang fuels innovative applications.",
                  1000,
                  "Golang supports cross-platform development.",
                  1000,
                  "Golang embraces community collaboration.",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
          }
        />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
