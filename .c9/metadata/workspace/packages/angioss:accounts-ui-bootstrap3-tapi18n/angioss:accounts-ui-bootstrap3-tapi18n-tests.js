{"filter":false,"title":"angioss:accounts-ui-bootstrap3-tapi18n-tests.js","tooltip":"/packages/angioss:accounts-ui-bootstrap3-tapi18n/angioss:accounts-ui-bootstrap3-tapi18n-tests.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["// Write your tests here!","// Here is an example.","Tinytest.add('example', function (test) {","  test.equal(true, true);","});",""]},{"start":{"row":0,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["// XXX Most of the testing of accounts-ui is done manually, across","// multiple browsers using examples/unfinished/accounts-ui-helper. We","// should *definitely* automate this, but Tinytest is generally not","// the right abstraction to use for this.","","","// XXX it'd be cool to also test that the right thing happens if options","// *are* validated, but Accounts.ui._options is global state which makes this hard","// (impossible?)","Tinytest.add('accounts-ui - config validates keys', function (test) {","  test.throws(function () {","    Accounts.ui.config({foo: \"bar\"});","  });","","  test.throws(function () {","    Accounts.ui.config({passwordSignupFields: \"not a valid option\"});","  });","","  test.throws(function () {","    Accounts.ui.config({requestPermissions: {facebook: \"not an array\"}});","  });","","  test.throws(function () {","    Accounts.ui.config({forceApprovalPrompt: {facebook: \"only google\"}});","  });","});"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":3},"end":{"row":25,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424624928196,"hash":"95592321d80c00948138a053db927503479e70fb"}