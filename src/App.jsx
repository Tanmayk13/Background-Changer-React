import { useState } from "react";

// Header Component
const Header = () => {
  return (
    <div className="text-center py-4 bg-gray-200">
      <h1 className="text-xl font-bold">Color Changer</h1>
    </div>
  );
};

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
              Red
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>
              Green
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>
              Blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>
              Olive
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}>
              Gray
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>
              Pink
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>
              Yellow
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>
              Purple
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")}>
              Lavender
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>
              White
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
