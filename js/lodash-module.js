var _ = require("lodash");

var data = [2, 3, 4, 5, 63, 4, 7, 8, 9, 5, 6, 4, 7, 6, 5, 4, 3, 5, 6, 7, 8, 1, 2, 3, 5, 4, 7, 8, 9, 5, 6];

var chunckedData = _.chunk(data, 2);

console.log(chunckedData);