import "./index.css"; // Import Tailwind CSS here
import Button from "./components/Button";
import CardEx from "./components/CardEx";
import CardEx2 from "./components/CardEx2";

function App() {
  return (
    <div className='flex flex-col gap-2 p-5 justify-center md:flex-row flex-wrap'>
    {/* <CardEx /> */}
    <CardEx2 />
    <CardEx2 />
    <CardEx2 />
    <CardEx2 />
  </div>
  );
}

export default App;
