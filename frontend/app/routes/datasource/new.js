import Ember from 'ember';
import config from '../../config/environment';

const {$: { ajax }, inject: { service } } = Ember;

export default Ember.Route.extend({
  sessionAccount: service(),

  actions: {
    create(){
      $('input#user').val(this.get('sessionAccount.id'));
      var form = $('#newDb')[0];
      var formData = new FormData(form);
      var me = this;
      ajax({
        url: `${config.mj_data_explorer}/datasources`,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success() {
          me.transitionTo('home.datasources');
        },
        error() {
          alert("Erro ao importar database");
        }
      });
    },
  },
});
