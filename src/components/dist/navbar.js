"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navbar_module_scss_1 = require("../styles/scss/componentsStyles/navbar.module.scss");
var ai_1 = require("react-icons/ai");
function Navbar() {
    return (React.createElement("section", { className: navbar_module_scss_1["default"].navbar },
        React.createElement("div", { className: navbar_module_scss_1["default"].links },
            React.createElement("div", { className: navbar_module_scss_1["default"].views },
                React.createElement("div", { className: navbar_module_scss_1["default"].tags },
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement(ai_1.AiFillHome, null))),
                React.createElement("div", { className: navbar_module_scss_1["default"].tags },
                    React.createElement(link_1["default"], { href: "/content/frontEnd" },
                        React.createElement("p", null, "FrontEnd"))),
                React.createElement("div", { className: navbar_module_scss_1["default"].tags },
                    React.createElement(link_1["default"], { href: "/content/backEnd" },
                        React.createElement("p", null, "BackEnd"))),
                React.createElement("div", { className: navbar_module_scss_1["default"].tags },
                    React.createElement(link_1["default"], { href: "/content/fullStack" },
                        React.createElement("p", null, "FullStack")))),
            React.createElement("div", { className: navbar_module_scss_1["default"].auth },
                React.createElement("div", { className: navbar_module_scss_1["default"].tags },
                    React.createElement(link_1["default"], { href: "/auth/login" },
                        React.createElement("p", null, "Login"))),
                React.createElement("p", null, "ou"),
                React.createElement("div", { className: navbar_module_scss_1["default"].tags },
                    React.createElement(link_1["default"], { href: "/auth/signUp" },
                        React.createElement("p", null, "Sing Up"))))),
        React.createElement("div", { className: navbar_module_scss_1["default"].linha },
            React.createElement("hr", null))));
}
exports["default"] = Navbar;
