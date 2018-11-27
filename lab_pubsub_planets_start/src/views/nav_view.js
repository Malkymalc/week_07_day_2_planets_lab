const PubSub = require('../helpers/pub_sub.js');

const NavView = function (element) {
  this.element = element;
};

NavView.prototype.bindEvents = function () {
  this.element.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log(event);
    const planetClicked = event.target.id;
    PubSub.publish('NavView:planet-selected', planetClicked);
  })
};

module.exports = NavView;
