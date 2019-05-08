import Component from '@ember/component';

export default Component.extend({
  didRender() {
    this._super(...arguments);
    // console.log('I rendered!');
  },

  actions: {
    showPerson(person) {
      alert(person);
    }
  }
});
