"use strict";
exports.__esModule = true;
exports.metadata = void 0;
exports.metadata = {
    title: 'TCC Pedro',
    description: 'Developed by Pedro Grimaldi'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement("div", { className: "navbar" }, "Navbar"),
            children)));
}
exports["default"] = RootLayout;
