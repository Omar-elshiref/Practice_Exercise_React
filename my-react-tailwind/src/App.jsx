import "./index.css"; // Import Tailwind CSS here
import Button from "./components/Button";
import CardEx from "./components/CardEx";

function App() {
  return (
    <div className="p-5 sm:text-base md:text-xl">
      <div className='bg-green-500 flex justify-center mb-5'>
        <div className='bg-red-100 p-5 font-bold from-neutral-600 text-6xl container'>
          This is a React app with tailwind
          <Button children={"Click"} />
        </div>
      </div>
      <CardEx />
    </div>
  );
}

export default App;
