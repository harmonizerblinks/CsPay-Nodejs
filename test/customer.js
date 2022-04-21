var cross_switch = require('../index')(process.env.APP_ID,process.env.APP_KEY,false)
  , mocha = require('mocha')
  , expect = require('chai').expect
  ;

describe("Cross-Switch Customer", function() {

  var mobile;

  // Create Customer
  it("should Create Customer", function(done) {
    cross_switch.customer.CreateCustomer({
        name: 'Plugin Test',
        mobile: '+233549444056',
        mobile_network: 'MTN',
        email: 'harmony@icloud.com',
        currency: 'GHS',
        amount: 0.1,
        order_id: `${Math.ceil(Math.random() * 10e8)}`,
        order_desc: 'Testing',
        signature: '',
        callback: ''
      })
      .then(function(body){
        // console.log(body, 'Payment');
        expect(body).to.have.property('status_code');
        expect(body).to.have.property('status_message');
        expect(body).to.have.property('data');
        mobile = body.mobile;
        done();
      })
      .catch(function(error){
        return done(error);
      });
  });

  // Get Customer By Code or Mobile
  it("should Get Existing Customer", function(done) {
    cross_switch.customer.GetCustomer({mobile: code})
    .then(function(body){
      console.log(body, 'Verify');
      expect(body).to.have.property('status_code');
      expect(body).to.have.property('status_message');
      expect(body).to.have.property('data');
      done();
    })
    .catch(function(error){
      return done(error);
    });
  });

});
