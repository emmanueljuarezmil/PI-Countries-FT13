import "./ActivityForm.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesForActivities } from "../../actions";
import { Link } from "react-router-dom";
import axios from "axios";

const ActivityForm = () => {
  const [input, setInput] = useState({
    name: "",
    difficult: "",
    season: "",
    description: "",
    duration: "",
    countryId: {
      id: "",
    },
    countriesIds: [],
  });

  const [error, setError] = useState(
    "Debes ingresar nombre, dificultad y al menos un pais"
  );

  const dispatch = useDispatch();
  const countriesForActivities = useSelector(
    (state) => state.countriesForActivities
  );

  useEffect(() => {
    if (!countriesForActivities.length) dispatch(getCountriesForActivities());
  }, [dispatch, countriesForActivities]);

  useEffect(() => {
    if (!input.name.length || !input.countriesIds.length || !input.difficult)
      setError("Debes ingresar nombre, dificultad y al menos un pais");
    else setError("");
  }, [input, input.countriesIds]);

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (name === "countryId") {
      setInput({
        ...input,
        [name]: {
          id: value,
          name: e.target.selectedOptions[0].text,
        },
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const countries = input.countriesIds.map((country) => country.id);
    const body = {
      countries,
      name: input.name,
      difficult: input.difficult !== "" ? parseInt(input.difficult) : null,
      duration: input.duration !== "" ? parseInt(input.duration) : null,
      season: input.season !== "" ? input.season : null,
      description: input.description !== "" ? input.description : null,
    };
    try {
      const { data } = await axios.post(
        `/activity`,
        body
      );
      alert(data);
      setInput({
        name: "",
        difficult: "",
        season: "",
        description: "",
        duration: "",
        countryId: {
          id: "",
        },
        countriesIds: [],
      });
    } catch (err) {
      alert(err.response.data);
      console.error(err);
    }
  };

  const addCountry = (e) => {
    e.preventDefault();
    const countryToAdd = input.countryId;
    const countriesIds = input.countriesIds;
    const exist = countriesIds.find(
      (country) => country.id === countryToAdd.id
    );
    if (!exist && countryToAdd.id !== "") {
      countriesIds.push(countryToAdd);
      setInput({
        ...input,
        countriesIds,
        countryId: {
          id: "",
        },
      });
    } else {
      setInput({
        ...input,
        countryId: {
          id: "",
        },
      });
    }
  };

  const deleteCountry = (id) => {
    const countriesIds = input.countriesIds.filter(
      (country) => country.id !== id
    );
    setInput({
      ...input,
      countriesIds,
    });
  };

  return (
    <div className="activityform-container">
      <div className="activities-link">
        <Link to="/activities" className="link">
          Regresar a actividades
        </Link>
      </div>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="activityform-form"
      >
        <div className="activityform-inputs-container">
          <div className="activityform-form-item">
            <span>Nombre*</span>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              className="activityform-form-input"
            />
          </div>
          <div className="activityform-form-item">
            <span htmlFor="name">Duración (minutos)</span>
            <input
              type="number"
              name="duration"
              value={input.duration}
              onChange={handleChange}
              min="0"
              className="activityform-form-input"
            />
          </div>
          <div className="activityform-form-item">
            <span>Descripción</span>
            <input
              type="text"
              name="description"
              value={input.description}
              onChange={handleChange}
              className="activityform-form-input"
            />
          </div>
          <div className="activityform-form-item">
            <span>Temporada</span>
            <select
              name="season"
              value={input.season}
              onChange={handleChange}
              className="activityform-form-input"
            >
              <option value="">Cualquiera</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
          </div>
          <div className="activityform-form-item">
            <span>Dificultad*</span>
            <select
              name="difficult"
              value={input.difficult}
              onChange={handleChange}
              className="activityform-form-input"
            >
              <option></option>
              <option value="1">Muy fácil</option>
              <option value="2">Fácil</option>
              <option value="3">Intermedia</option>
              <option value="4">Dificil</option>
              <option value="5">Muy dificil</option>
            </select>
          </div>
          <div className="activityform-form-item">
            <span>Paises*</span>
            <div className="activityform-form-input activityform-form-input-countries">
              <select
                name="countryId"
                value={input.countryId.id}
                onChange={handleChange}
              >
                <option value=""></option>
                {countriesForActivities &&
                  countriesForActivities.map((country) => (
                    <option value={country.id} key={country.id}>
                      {country.name}
                    </option>
                  ))}
              </select>
              <button onClick={(e) => addCountry(e)} className="button">Añadir</button>
            </div>
          </div>
        </div>
        <div className="activityform-countries">
          <p>Paises añadidos</p>
          <ul>
            {input.countriesIds.map((country) => (
              <li className="activityform-countries-item" key={country.id}>
                <button
                  className="activityform-countries-item-delete"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteCountry(country.id);
                  }}
                  >
                  X
                </button>
                <span>
                  {` ${country.name} `}
                </span>
              </li>
            ))}

          </ul>
        </div>
        <div className="activityform-errorsubmit">
            <span className="activityform-error">{error || ' '}</span>
            <input
              className={`button ${error.length !== 0 ? 'button-disabled' : ''}`}
              type="submit"
              value="Enviar actividad"
              onClick={(e) => submitForm(e)}
              disabled={error.length !== 0}
            />
        </div>
      </form>
    </div>
  );
};

export default ActivityForm;
