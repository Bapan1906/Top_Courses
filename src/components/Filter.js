import React from "react";

// using Map() -> function.
// for each filter data -> create a button -> For each button insert title.
const Filter = (props) => {
  // Destructuring props
  let filterData = props.filterData;
  // Recive the category.
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandeler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black 
        hover:bg-opacity-50 border-2
        ${
          category === data.title
            ? " bg-opacity-60 border-white"
            : "bg-opacity-40 border-transparent"
        }
        `}
            key={data.id}
            // kisiv button pr click kar raha ho us button ka title as a parameter send kr diya.
            onClick={() => filterHandeler(data.title)}
          >
            {data.title}{" "}
          </button>
        ); // Removed semicolon inside JSX
      })}
    </div>
  );
};

export default Filter;

// css.
// ${category == data.title ? "bg-opacity-60 border-white"
// : "bg-opacity-40 border-transparent"} transition-all duration-300
