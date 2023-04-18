'use strict';

var root = '/Integration/v1';

module.exports = {

  /*
  Create Bill 
  */
  createBill: {
    method: 'post',
    endpoint: [root, '/CreateCustomerBill'].join(''),
    params: ['type','number','name*','mobile*','currency*','email*','amount*','description*','frequency','expiry']
  },

  /*
  Get Bill 
  */
  getBill: {
    method: 'post',
    endpoint: [root, '/GetCustomerBills'].join(''),
    params: ['mobile*','index']
  },


  /*
  Pay Bill 
  */
  payBill: {
    method: 'post',
    endpoint: [root, '/PayCustomerBill'].join(''),
    params: ['bill_code*','mobile*', 'network*', 'amount*', 'callback']
  },

};
