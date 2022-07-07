var cross_switch = require('../index')(process.env.APP_ID,process.env.APP_KEY,false)
  , mocha = require('mocha')
  , expect = require('chai').expect
  ;

describe("Cross-Switch Bill", ()=> {

  var mobile;

  // Create Customer Bill
  it("should Create Customer Bill", (done) =>{
    cross_switch.bill.createBill({
        number: `${Math.ceil(Math.random() * 10e8)}`,
        name: 'Plugin Test',
        mobile: '+233549444056',
        email: 'harmony@icloud.com',
        amount: 0,
        currency: 'GHS',
        type: 'Default',
        description: 'Ghana',
      }).then((body)=>{
        // console.log(body, 'Payment');
        expect(body).to.have.property('status_code');
        expect(body).to.have.property('status_message');
        expect(body).to.have.property('data');
        mobile = body.mobile;
        done();
      })
      .catch((error)=>{
        return done(error);
      });
  });

  // Get BIll Customer Mobile
  it("should Get Existing Customer Bill", (done) =>{
    cross_switch.bill.getBill({mobile: mobile})
    .then((body)=>{
      console.log(body, 'Get Custom Biller');
      expect(body).to.have.property('status_code');
      expect(body).to.have.property('status_message');
      expect(body).to.have.property('data');
      done();
    })
    .catch((error)=>{
      return done(error);
    });
  });

  // Get BIll Customer Mobile

});
