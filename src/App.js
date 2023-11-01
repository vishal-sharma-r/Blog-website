import "./App.css";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="flex justify-center">
      <div>
        <Header />
        <Blog />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
