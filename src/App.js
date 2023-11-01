import "./App.css";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(page, tag);
      
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(page, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname,location.search]);
  return (
    <>

    <Header/>
    <Outlet />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage /> } />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
    <Pagination />
    </>
    
  );
}

export default App;
