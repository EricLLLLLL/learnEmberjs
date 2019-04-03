import Component from '@ember/component';

export default Component.extend({
    actions: {
        showPeople(people) {
            alert(people)
        }
    }
});
