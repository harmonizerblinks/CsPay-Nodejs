var cross_switch = require('../index')(process.env.APP_ID,process.env.APP_KEY,false)
  , mocha = require('mocha')
  , expect = require('chai').expect
  ;

describe("Cross-Switch Payment", function() {

  var reference;

  // Create Payment
  it("should initialize a Collection/ Cashout Payment", function(done) {
    cross_switch.payment.createPayment({
        type: 'Receive',
        name: 'Harmony Alabi',
        mobile: '+233546467407',
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
        // expect(body).to.have.property('trans_ref_no');
        expect(body).to.have.property('transaction_no');
        expect(body).to.have.property('interpaytxnref');
        reference = body.interpaytxnref;
        done();
      })
      .catch(function(error){
        return done(error);
      });
  });


  // Create Collection Transaction
  it("should trizzer a Collection request", function(done) {
    cross_switch.payment.Collection({
        name: 'Harmony Alabi',
        mobile: '+233546467407',
        mobile_network: 'MTN',
        email: 'harmony@icloud.com',
        currency: 'GHS',
        amount: 0.1,
        order_id: `${Math.ceil(Math.random() * 10e8)}`,
        order_desc: 'Testing',

      })
      .then(function(body){
        // console.log(body, 'Collection');
        expect(body).to.have.property('status_code');
        expect(body).to.have.property('status_message');
        // expect(body).to.have.property('trans_ref_no');
        expect(body).to.have.property('transaction_no');
        expect(body).to.have.property('interpaytxnref');
        reference = body.interpaytxnref;
        done();
      })
      .catch(function(error){
        return done(error);
      });
  });

  // Create Cashout Transaction
  it("should trizzer a cashout request", function(done) {
    cross_switch.payment.Cashout({
        name: 'Harmony Alabi',
        mobile: '+233546467407',
        mobile_network: 'MTN',
        email: 'harmony@icloud.com',
        currency: 'GHS',
        amount: 1,
        order_id: `${Math.ceil(Math.random() * 10e8)}`,
        order_desc: 'Testing',
      })
      .then(function(body){
        // console.log(body, 'Cashout');
        expect(body).to.have.property('status_code');
        expect(body).to.have.property('status_message');
        // expect(body).to.have.property('trans_ref_no');
        expect(body).to.have.property('transaction_no');
        expect(body).to.have.property('interpaytxnref');
        reference = body.interpaytxnref;
        done();
      })
      .catch(function(error){
        return done(error);
      });
  });

  // Balance Enquiry 
  it("should Get merchant Cashout Balance", function(done) {
    cross_switch.payment.getBalance({})
    .then(function(body){
      // console.log(body, 'Balance');
      expect(body).to.have.property('status_code');
      expect(body).to.have.property('status_message');
      expect(body).to.have.property('available_balance');
      done();
    })
    .catch(function(error){
      return done(error);
    });
  });

  // Verify Transaction
  it("should verify a transaction", function(done) {
    cross_switch.payment.verifyPayment({order_id: reference})
    .then(function(body){
      console.log(body, 'Verify');
      expect(body).to.have.property('status_code');
      expect(body).to.have.property('status_message');
      // expect(body).to.have.property('trans_ref_no');
      expect(body).to.have.property('transaction_no');
      expect(body).to.have.property('interpaytxnref');
      done();
    })
    .catch(function(error){
      return done(error);
    });
  });

  // Fetch Transaction
  // No transaction id :/
  /*
  it("should get details of a transaction", function(done) {
    paystack.transaction.get(transaction_id, function(error, body) {

      if (error)
        return done(error);

      expect(body).to.have.property('data');

      done();
    });
  });
  //*/

  // List Transactions
  // it("should list transaction", function(done) {
  //   cross_switch.payment.list()
  //   .then(function(body){
  //     expect(body).to.have.property('data');
  //     expect(body.data).to.be.instanceof(Array);

  //     done();
  //   })
  //   .catch(function(error){
  //     return done(error);
  //   });
  // });

  // Export Transactions
  // it("should export transaction", function(done) {
  //   paystack.transaction.export()
  //   .then(function(body){
  //     expect(body).to.have.property('data');
  //     done();
  //   })
  //   .catch(function(error){
  //     return done(error);
  //   });
  // });

});
