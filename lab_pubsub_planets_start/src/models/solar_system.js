const PubSub = require('../helpers/pub_sub.js');


const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('NavView:planet-selected', (payload) => {
    const planetSelected = payload.detail;
    const planetData = this.planets.filter(planet => planet.name === planetSelected)[0];
    PubSub.publish('SolarSystem:selected-planet-data', planetData);
  });

};

module.exports = SolarSystem;
