'use strict';

var root = '/Integration/v1';

module.exports = {

  /*
  Create Customer 
  */
  createCustomer: {
    method: 'post',
    endpoint: [root, '/CreateCustomer'].join(''),
    params: ['code','name*','email','mobile*', 'other', 'date']
  },

  /*
  Get Customer 
  */
  getCustomer: {
    method: 'post',
    endpoint: [root, '/GetCustomer'].join(''),
    params: ['mobile*']
  },

};
