import "./Home.css";
import React, { useEffect, useRef } from "react";
import CountryCardsContainer from "../CountryCardsContainer/CountryCardsContainer";
import { getCountries, setCurrentPage } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Paginater from "../Paginater/Paginater";

const Home = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const itemsPerPage = 9;
  const page = useSelector((state) => state.currentPage);
  const searchedCountries = useSelector((state) => state.searchedCountries);
  const orderBy = useSelector((state) => state.orderBy);
  const orderType = useSelector((state) => state.orderType);
  const activityFilter = useSelector((state) => state.activityFilter);
  const continentFilter = useSelector((state) => state.continentFilter);
  const totalPages = useSelector((state) => state.totalPages);

  const setPage = (e) => {
    e.preventDefault();
    dispatch(setCurrentPage(parseInt(e.target.value)));
    scrollRef.current.scrollTop = 0;
  };

  useEffect(() => {
    dispatch(
      getCountries(
        searchedCountries,
        orderBy,
        orderType,
        page,
        itemsPerPage,
        activityFilter,
        continentFilter
      )
    );
  }, [
    dispatch,
    searchedCountries,
    orderBy,
    orderType,
    page,
    itemsPerPage,
    activityFilter,
    continentFilter,
  ]);

  return (
    <div className="home-container">
      <div className="searchbar-home-container home-item">
        <SearchBar />
      </div>
      <div className="countries-home-container home-item" ref={scrollRef}>
        <CountryCardsContainer />
        {totalPages > 1 && (
          <Paginater page={page} totalPages={totalPages} setPage={setPage} />
        )}
      </div>
    </div>
  );
};

export default Home;
