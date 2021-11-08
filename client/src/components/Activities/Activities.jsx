import React, { useEffect, useState, useRef } from "react";
import "./Activities.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getActivities } from "../../actions";
import ActivityCard from "../ActivityCard/ActivityCard";
import Paginater from "../Paginater/Paginater";

const Activities = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null)

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);

  const [page, setCurrentPage] = useState(1);
  const activitiesPerPage = 2;
  const totalPages = Math.ceil(activities.length / activitiesPerPage);
  const activitiesToRender = activities.slice(
    (page - 1) * activitiesPerPage,
    page * activitiesPerPage
  );

  const setPage = (e) => {
    e.preventDefault();
    setCurrentPage(parseInt(e.target.value));
    scrollRef.current.scrollTop = 0;
  };

  return (
    <div className="activities-container" ref={scrollRef}>
      <div className="activities-link">
        <Link to="/newactivity" className="link">Crear actividad</Link>
      </div>
      <div className="activities-cards-container">
        {activitiesToRender &&
          activitiesToRender.map((activity) => (
            <ActivityCard activity={activity} key={activity.id} />
          ))}
      </div>
      <div className="activities-paginater-container">
        <Paginater page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default Activities;
