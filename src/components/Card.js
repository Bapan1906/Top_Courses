import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  // inside this " likedCourses " has a track if any course is like or not.
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // logic. -> [ Check inside likedCourses has current course id.]
    if (likedCourses.includes(course.id)) {
      // pahle se like hua pada tha.
      // then remove like.
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked removed");
    } else {
      // pahle se like nahi hai course
      // insert karna h ye course liked courses me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-gray-900 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url} alt="" />

        <div className=" w-[40px] h-[40px] bg-white rounded-full  absolute right-2 bottom-[-14px] grid place-items-center">
          <button onClick={clickHandler}>
            {
              // Check course is liked. then -> FcLike -> not -> FcLikePlaceholder
              likedCourses.includes(course.id) ? (
                <FcLike fontSize={"1.75rem"} />
              ) : (
                <FcLikePlaceholder fontSize={"1.75rem"} />
              )
            }
          </button>
        </div>
      </div>

      <div className="p-4 ">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className=" mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
