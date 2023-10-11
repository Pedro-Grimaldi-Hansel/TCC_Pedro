"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function Home() {
    return (React.createElement("main", null,
        React.createElement("h1", null, "Home"),
        React.createElement("div", { className: "" },
            React.createElement(link_1["default"], { href: "/auth/login" }, "Login")),
        React.createElement("div", { className: "" },
            React.createElement(link_1["default"], { href: "/auth/signUp" }, "Sign Up")),
        React.createElement("div", { className: "" },
            React.createElement(link_1["default"], { href: "/content/backEnd" }, "BackEnd")),
        React.createElement("div", { className: "" },
            React.createElement(link_1["default"], { href: "/content/frontEnd" }, "FrontEnd")),
        React.createElement("div", { className: "" },
            React.createElement(link_1["default"], { href: "/content/fullStack" }, "FullStack")),
        React.createElement("div", { className: "" },
            React.createElement(link_1["default"], { href: "/user/x" }, "User"))));
}
exports["default"] = Home;
