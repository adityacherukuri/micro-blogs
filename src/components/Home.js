import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, loading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading all blogs...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs.." />}
    </div>
  );
};

export default Home;
