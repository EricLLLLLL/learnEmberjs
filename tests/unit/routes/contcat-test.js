import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contcat', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:contcat');
    assert.ok(route);
  });
});
