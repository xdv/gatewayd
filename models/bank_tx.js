var Sequelize = require('sequelize');
var db = require('../config/sequelize.js');
var BankAccount = require('../models/bank_account');

var BankTx = sequelize.define('bank_transaction', {
  id: { type: Sequelize.INTEGER, unique: true, primaryKey: true, autoIncrement: true },
  deposit: Sequelize.BOOLEAN,
  currency: { type: Sequelize.STRING, allowNull: false },
  bankAccountId: { type: Sequelize.INTEGER, allowNull: false },
  cashAmount: { type: Sequelize.FLOAT(11,12), allowNull: false },
  rippleTxId: Sequelize.INTEGER
});

BankTx.belongsTo(BankAccount, {foreignKeyConstraint: true});

module.exports = BankTx;