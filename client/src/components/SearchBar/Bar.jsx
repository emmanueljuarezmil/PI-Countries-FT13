import "./SearchBar.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setOrderBy,
  setOrderType,
  setCurrentPage,
  setActivityFilter,
  setContinentFilter,
  getActivitiesForSearchBar,
} from "../../actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivitiesForSearchBar());
  }, [dispatch]);

  const currentSearch = useSelector((state) => state.searchedCountries);
  const orderBy = useSelector((state) => state.orderBy);
  const orderType = useSelector((state) => state.orderType);
  const activitiesForSearchBar = useSelector(
    (state) => state.activitiesForSearchBar
  );
  const activityFilter = useSelector((state) => state.activityFilter);
  const continents = useSelector((state) => state.continents);
  const continentFilter = useSelector((state) => state.continentFilter);

  const clearSearch = () => {
    dispatch(setSearch(""));
    dispatch(setOrderBy(""));
    dispatch(setOrderType(""));
    dispatch(setActivityFilter(""));
    dispatch(setContinentFilter(""));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="bar-container">
      <input
        className="bar-item"
        type="text"
        placeholder="Buscar..."
        value={currentSearch}
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
          dispatch(setCurrentPage(1));
        }}
      />
      <select
        className="bar-item"
        name="orderBy"
        value={orderBy}
        onChange={(e) => {
          dispatch(setOrderBy(e.target.value));
          dispatch(setCurrentPage(1));
        }}
      >
        <option value="">Ordenar por</option>
        <option value="name">Nombres</option>
        <option value="poblation">Población</option>
        <option value="area">Superficie</option>
      </select>
      <select
        className="bar-item"
        name="orderType"
        value={orderType}
        onChange={(e) => {
          dispatch(setOrderType(e.target.value));
          dispatch(setCurrentPage(1));
        }}
      >
        <option value="">Tipo de orden</option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
      </select>
      <select
        className="bar-item"
        name="continentFilter"
        value={continentFilter}
        onChange={(e) => {
          dispatch(setContinentFilter(e.target.value));
          dispatch(setCurrentPage(1));
        }}
      >
        <option value="">Filtrar por pais</option>
        {continents &&
          continents.map((continent, index) => (
            <option value={continent} key={index}>
              {continent}
            </option>
          ))}
      </select>
      <select
        className="bar-item"
        name="setActivityFilter"
        onChange={(e) => {
          dispatch(setActivityFilter(e.target.value));
          dispatch(setCurrentPage(1));
        }}
        value={activityFilter}
      >
        <option value="">Filtrar por actividades</option>
        {activitiesForSearchBar &&
          activitiesForSearchBar.map((activity, index) => (
            <option key={index} value={activity.id}>
              {activity.name}
            </option>
          ))}
      </select>
      <button className="bar-item button" onClick={() => clearSearch()}>
        Limpiar filtros
      </button>
    </div>
  );
};

export default SearchBar;
