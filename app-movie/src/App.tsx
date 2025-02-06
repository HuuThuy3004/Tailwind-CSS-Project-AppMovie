import "./App.css";
import AuthButton from "./components/authbutton/AuthButton";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Trending from "./components/trending/Trending";

function App() {
  
  return (
    <div className="grid md:grid-cols-5">
      <Nav />
      <main className="md:col-span-4 mx-9">
        <AuthButton />
        <Header />
        <Trending />
      </main>
    </div>
  );
}

export default App;
