var _ = require('lodash');

var data = [];
var id = 1;
function add(name, text) {

    data.push({ name: name, text: text, id: ++id});
}

function list() {
    return _.cloneDeep(data);
}

function find(properties) {
    return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
    var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
    var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
    var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (var i = 0; i < 10; i++) {
    module.exports.add(getFakeName(), getFakeTweet());
}

module.exports.add("FirstName LastName", "This is my tweet");
module.exports.add("David Zausner", "I am impressed");
module.exports.add("Edward Liew", "I hope this works");

// console.log(find(function(value, index, collection) {
// 	return value.name === "Edward";
// }));
