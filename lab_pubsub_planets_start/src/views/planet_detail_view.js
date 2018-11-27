const PubSub = require('../helpers/pub_sub.js');


const PlanetDetailView = function (targetElement) {
  this.targetElement = targetElement;

}

PlanetDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:selected-planet-data', (payload) => {
    const planetData = payload.detail;
    this.render(planetData);
  });
};

PlanetDetailView.prototype.render = function (planetData) {
    const infoList = document.createElement('p');
};

module.exports = PlanetDetailView;
