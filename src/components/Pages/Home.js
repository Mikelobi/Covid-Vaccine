// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CountriesList from '../Country/CountriesList';
import africaImage from '../../assets/africa.png';
import classes from './Home.module.css';

const Home = () => {
  const { countries } = useSelector((state) => state.countries);
  const [searchValue, setSearchValue] = useState('');

  const totalVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.total;
      });
    }
    return total.toLocaleString();
  };

  const fullyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.full_vacinated;
      });
    }
    return total.toLocaleString();
  };

  const partiallyVacinated = () => {
    let total = 0;
    if (countries) {
      countries.forEach((country) => {
        total += country.partial_vaccinated;
      });
    }
    return total.toLocaleString();
  };
  const filterCountriesHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <section className={classes.homeCallout}>
        <div className={classes.africaImageDiv}>
          <img
            src={africaImage}
            className={classes.africaImage}
            alt="Map of Africa"
          />
        </div>
        <div className={classes.innercontent}>
          <h1>African Vaccine Statistics</h1>
          <p>
            Total Vaccines Administered:
            {' '}
            {totalVacinated()}
          </p>
          <p>
            Fully Vaccinated People:
            {' '}
            {fullyVacinated()}
          </p>
          <p>
            Partially Vaccinated People:
            {' '}
            {partiallyVacinated()}
          </p>
        </div>
      </section>
      <section className={classes.dataSection}>
        <h2 className={classes.dataSectionHeader}>
          Africa COVID Vaccine Data
        </h2>
        <div className={classes.inputDiv}>
          <label htmlFor="Filter" className={`${classes.field} ${classes.field_v1}`}>
            <input
              className={`${classes.field__input} ${classes.field__inputs}`}
              type="text"
              name="filter"
              value={searchValue}
              onChange={filterCountriesHandler}
              placeholder="e.g. Nigeria"
            />
            <span className={`${classes['field__label-wrap']}`}>
              <span className={`${classes.field__label}`}>Filter Country</span>
            </span>
          </label>
        </div>

        <div className={`${classes.homeContent}`}>
          <CountriesList searchValue={searchValue} />
        </div>
      </section>
    </>
  );
};

export default Home;
