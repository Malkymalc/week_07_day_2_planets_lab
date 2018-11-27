const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require('./views/nav_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const navElement = document.querySelector('.planets-menu')
  const nav = new NavView(navElement);
  nav.bindEvents();

  const planets = planetsData;
  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();

  const planetDetailElement = document.querySelector('.planets-details')
  const planetDetailView = new PlanetDetailView(planetDetailElement);
  planetDetailView.bindEvents();


  //const planetsDataModel = new SolarSystem(planetsData);
  //console.log(planetsDataModel.planets);

});
