"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveFilteredResults_1 = require("../get/getAndRemoveFilteredResults");
function removeFilteredResults(testFunction, array) {
    getAndRemoveFilteredResults_1.getAndRemoveFilteredResults(testFunction, array);
}
exports.removeFilteredResults = removeFilteredResults;