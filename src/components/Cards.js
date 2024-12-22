import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  // Assign the 'courses' prop to a local variable.
  let courses = props.courses;
  let category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);
  // Debugging: Print the courses to the console.
  //   console.log("Printing:");
  //   console.log(courses);

  let allCourses = [];

  // A function that extracts and returns a list of all courses received from the API response.
  const getCourses = () => {

     // Check if 'courses' is null or undefined
     if (!courses) {
      return []; // If 'courses' is null/undefined, return an empty array to avoid errors.
    }

    if (category === "All") {
      // Object.values converts the 'courses' object into an array of course categories.
      Object.values(courses).forEach((array) => {
        // For each category, loop through its array of courses and push each course into the 'allCourses' array.
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });

    // Return the full list of all courses.
    return allCourses;
    }
    else
    {
        // main sirf specific category ka array pass krunga
        return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {/* Call the getCourses function, then map over the returned list to render a Card component for each course */}
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}  
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
