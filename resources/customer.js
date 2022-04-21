'use strict';

var root = '/Integration/v1';

module.exports = {

  /*
  Create Customer 
  */
  CreateCustomer: {
    method: 'post',
    endpoint: [root, '/CreateCustomer'].join(''),
    params: ['code','name*','email','mobile*', 'other', 'date']
  },

  /*
  Get Customer 
  */
  GetCustomer: {
    method: 'post',
    endpoint: [root, '/GetCustomer'].join(''),
    params: ['mobile*']
  },

};
