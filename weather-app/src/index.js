import { addsearchbarEvent } from "./modules/events";
import { themeToggle } from "./modules/mode";
import { createSearchBar, createHead, createError } from "./modules/ui";

import "./styles.css";

export async function WeatherData(location) {
  const API_KEY = 'PD58A82AFNL354M2KC5BB2PSP';
  const LOCATION = location;
  const UNIT_GROUP = 'metric';
  const INCLUDE_DATA = 'events,days,hours,current';
  const CONTENT_TYPE = 'json';  
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${LOCATION}?unitGroup=${UNIT_GROUP}&key=${API_KEY}&include=${INCLUDE_DATA}&contentType=${CONTENT_TYPE}`;

  return new Promise((resolve, reject) => {
    fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => {
      if (!response.ok) {
        throw response; 
      }
      return response.json();
    })
    .then(data => {
      resolve(data); 
      createHead(data);
    })
    .catch(error => {
      if (error.json) {
        createError(location);
      } else {
        reject(error);
      }
    });
  });
}

createSearchBar();
addsearchbarEvent();
themeToggle();
WeatherData('Jerusalem')