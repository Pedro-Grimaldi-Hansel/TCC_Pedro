"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var navbar_1 = require("../components/navbar");
require("../styles/scss/globals.scss");
exports.metadata = {
    title: 'TCC Pedro',
    description: 'Developed by Pedro Grimaldi'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement(navbar_1["default"], null),
            children)));
}
exports["default"] = RootLayout;
