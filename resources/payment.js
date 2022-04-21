'use strict';

var root = '/Integration/v1';

module.exports = {

  /*
  Create Payment 
  */
  createPayment: {
      method: 'post',
      endpoint: [root, '/CreatePayment'].join(''),
      params: ['type*','name*','email*','mobile*', 'mobile_network*', 'amount*', 'currency*', 'order_id*', 'order_desc*', 'customerid', 'callback']
    },


  /*
  Receive Payment (Receive)
  */
  Collection: {
    method: 'post',
    endpoint: [root, '/CreatePaymentTrans'].join(''),
    params: ['name*','email*','mobile*', 'mobile_network*', 'amount*', 'currency*', 'order_id*', 'order_desc*', 'customerid', 'callback']
  },


  /*
  Send Payment (Cashout)
  */
  Cashout: {
    method: 'post',
    endpoint: [root, '/CreateCashoutTrans'].join(''),
    params: ['name*','email*','mobile*', 'mobile_network*', 'amount*', 'currency*', 'order_id*', 'order_desc', 'customerid', 'signature', 'callback']
  },


  /*
  Balance Enquiry
  */
  getBalance: {
    method: 'post',
    endpoint: [root, '/CheckAvailableBalance'].join(''),
    params: ['name']
  },

  /*
  Verify transaction
  */
  verifyPayment: {
    method: 'post',
    endpoint: [root, '/GetTransStatus'].join(''),
    params: ['order_id*']
  },

  /*
  Get transactions
  */
  list: {
      method: 'get',
      endpoint: [root, '/Payments'].join(''),
      params: ['page', 'per_page', 'account', 'tranid']
    },

  /*
  Create Customer 
  */
  CreateCustomer: {
    method: 'post',
    endpoint: [root, '/CreateCustomer'].join(''),
    params: ['code','name*','email*','mobile*', 'other*', 'amount*', 'currency*', 'order_id*', 'order_desc*', 'signature', 'callback']
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
