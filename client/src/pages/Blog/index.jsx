// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import Loader from "../../components/Loader";

// function Blog() {
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState();
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams ();

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/blogs/${id}`);
//       setBlog(response.data.data);
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onDelete = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.delete(`/api/blogs/${id}`);
//       toast.success(response.data.message);
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="flex flex-col gap-8">
//       {loading && <Loader />}
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl">{blog?.title}</h1>
//         <div className="flex gap-5">
//           <button className="btn-outlined" onClick={() => navigate("/")}>
//             Cancel
//           </button>
//           <button className="btn-outlined" onClick={onDelete}>
//             Delete
//           </button>
//           <button
//             className="btn-contained"
//             onClick={() => navigate(`/edit-blog/${id}`)}
//           >
//             Edit
//           </button>
//         </div>
//       </div>

//       <img src={blog?.image} alt="" className="object-cover rounded" />
//       <p>{blog?.description}</p>
//     </div>
//   );
// }

// export default Blog;

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader";

function Blog() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blogs/${id}`);
      setBlog(response.data.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/blogs/${id}`);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto max-w-3xl p-8 bg-white shadow-lg rounded-lg">
      {loading && <Loader />}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">{blog?.title}</h1>
        <div className="flex gap-5">
          <button
            className="btn-outlined text-gray-800 hover:text-gray-600"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button
            className="btn-outlined text-red-600 hover:text-red-800"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="btn-contained bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => navigate(`/edit-blog/${id}`)}
          >
            Edit
          </button>
        </div>
      </div>

      <img
        src={blog?.image}
        alt={blog?.title}
        className="object-cover rounded-lg mt-4 max-w-[400px] max-h-[230px]"
      />
      <p className="text-gray-700 text-lg mt-4">{blog?.description}</p>
    </div>
  );
}

export default Blog;
