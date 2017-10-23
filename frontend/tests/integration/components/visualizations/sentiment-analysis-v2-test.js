import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('visualizations/sentiment-analysis-v2', 'Integration | Component | visualizations/sentiment analysis v2', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{visualizations/sentiment-analysis-v2}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#visualizations/sentiment-analysis-v2}}
      template block text
    {{/visualizations/sentiment-analysis-v2}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
