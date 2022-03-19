## Cross-Switch Ghana 

# ![Issues](https://img.shields.io/github/issues/harmonizerblinks/Cross-Switch-Ghana) ![Star](https://img.shields.io/github/stars/harmonizerblinks/Cross-Switch-Ghana) ![Issues](https://img.shields.io/github/license/harmonizerblinks/Cross-Switch-Ghana)

Nodejs API wrapper for [Cross-Switch Ghana](https://docs.cross-switch.app).

# [![NPM](https://nodei.co/npm/cross-switch-gh.png)](https://nodei.co/npm/cross-switch-gh/)

### Installation

```
npm install cross-switch-gh
```

### Usaged

```js

var live = false;

if (process.env.NODE_ENV === 'production') {
	live = true;
}
// Require the library
var cross_switch = require('cross-switch-gh')(process.env.APP_ID, process.env.APP_KEY, live);


```

#### Making calls to the resources
The resource methods accepts are promisified, but can receive optional callback as the last argument.

```js
// cross_switch.{resource}
cross_switch.payment.createPayment({})
	.then((body)=> {
  		console.log(body);
	})
	.catch((error)=> {
		console.log(error);
	});
```



For all resource methods, the JSON body can be passed as the argument.

### Resources

- payment
  - createPayment
  - Collection
  - Cashout
  - getBalance
  - verifyPayment
- sms 
  - Coming soon

Method to Initiation Sending or Receiving from mobile Money.

```js
cross_switch.payment.createPayment({
	type: 'Receive || Send',
	name: 'Firstname Lastname',
	mobile: '+233540000000',
	mobile_network: 'MTN || AIRTEL || TIGO || VODAFONE',
	email: 'harmony@cross-switch.com',
	currency: 'GHS',
	amount: 0.1,
	order_id: `${Math.ceil(Math.random() * 10e8)}`,
	order_desc: 'Testing',
	account: '',
	signature: '',
	callback: ''
}).then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```

Method to Initiation Only Receiving from mobile Money.

```js
cross_switch.payment.Collection({
	name: 'Firstname Lastname',
	mobile: '+233540000000',
	mobile_network: 'MTN || AIRTEL || TIGO || VODAFONE',
	email: 'harmony@icloud.com',
	currency: 'GHS',
	amount: 0.1,
	order_id: `${Math.ceil(Math.random() * 10e8)}`,
	order_desc: 'Testing',
	account: '',
	signature: '',
	callback: ''
}).then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});;
```

Method to Initiation Only Receiving from mobile Money.

```js
cross_switch.payment.Cashout({
	name: 'Firstname Lastname',
	mobile: '+233540000000',
	mobile_network: 'MTN || AIRTEL || TIGO || VODAFONE',
	email: 'harmony@icloud.com',
	currency: 'GHS',
	amount: 1,
	order_id: `${Math.ceil(Math.random() * 10e8)}`,
	order_desc: 'Testing',
}).then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```


Method to Get Cashout Balance.

```js
cross_switch.payment.getBalance({})
.then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```

Method to Verify Transaction status.

```js
cross_switch.payment.verifyPayment({
	order_id: `${data.transaction_no}`,
}).then((body)=> {
	console.log(body);
}).catch((error)=> {
	console.log(error);
});
```
  

### Todo

- Add MOMO Number Verification
- Add MOMO Direct Debit
- Sms

