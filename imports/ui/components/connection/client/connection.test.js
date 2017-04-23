import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Template } from 'meteor/templating';
import '../connection.js';

if (Meteor.isClient) {
  describe('connection', function () {
    it('web3 is available', function () {
    	let web3 = Template.connection.__helpers[' web3'].apply()
    	assert.notEqual(web3, undefined)
    });
  });
}