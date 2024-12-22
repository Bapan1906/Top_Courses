import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { aipUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  // starting category in define all.
  const [category, setCategory] = useState(filterData[0].title);

  // API Call.
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(aipUrl);
      // convert the responce into Json format.
      let output = await response.json();

      // output
      setCourses(output.data);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  }

  // use useEffect Hook.
  useEffect(() => {
    // call fetchData function
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-600">
      <div>
        <Navbar />
      </div>
      <div className="bg-gray-600">
        <div>
          <Filter 
          // send the data as a props.
          filterData={filterData}
          // pass the category inside filter.
          category={category}
          setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh">
          {/* Check if loading or not, and pass courses to Cards */}
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>
    </div>
  );
};

export default App;
