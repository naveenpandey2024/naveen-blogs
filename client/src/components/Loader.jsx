function Loader() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50">
      <div className="border-t-8 border-gray-800 h-16 w-16 rounded-full animate-spin"></div>
      <div className="text-gray-800 ml-2 text-lg font-semibold">Loading...</div>
    </div>
  );
}

export default Loader;
