import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function BlogForm({ blogData }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const onSave = async () => {
    try {
      setLoading(true);
      let response;
      if (blogData) {
        response = await axios.put(`/api/blogs/${blogData._id}`, blog);
      } else {
        response = await axios.post("/api/blogs", blog);
      }
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogData) {
      setBlog(blogData);
    }
  }, [blogData]);

  return (
    <div className="container mx-auto max-w-md p-8 bg-white shadow-lg rounded-lg">
      {loading && <Loader />}
      <div>
        <label htmlFor="title" className="text-gray-600 text-sm block">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded-md mt-1"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="description" className="text-gray-600 text-sm block">
          Description
        </label>
        <textarea
          type="text"
          placeholder="Enter description"
          value={blog.description}
          onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded-md mt-1"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="image" className="text-gray-600 text-sm block">
          Image
        </label>
        <input
          value={blog.image}
          onChange={(e) => setBlog({ ...blog, image: e.target.value })}
          type="text"
          placeholder="Enter image URL"
          className="w-full border border-gray-300 p-2 rounded-md mt-1"
        />
      </div>

      <div className="flex justify-end mt-8 space-x-4">
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
