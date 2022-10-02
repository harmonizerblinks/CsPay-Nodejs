'use strict';

var root = '/Integration/v1';

module.exports = {

  /*
  Send Otp 
  */
  sendOtp: {
    method: 'post',
    endpoint: [root, '/SendOtp'].join(''),
    params: ['mobile*','senderid*','length*','type']
  },

  /*
  Verify Otp 
  */
  verifyOtp: {
    method: 'post',
    endpoint: [root, '/VerifyOtp'].join(''),
    params: ['mobile*','otp*']
  },


  /*
  Send Sms 
  */
  sendSms: {
    method: 'post',
    endpoint: [root, '/SendSms'].join(''),
    params: ['mobile*','senderid*','message*']
  },

};
