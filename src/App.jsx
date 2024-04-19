import Sidebar from "./components/Sidebar";
import Mainpage from "./pages/Mainpage";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <Sidebar />
      </div>
      <div className="md:w-2/3">
        <Mainpage />
      </div>
    </div>
  );
};

export default App;
