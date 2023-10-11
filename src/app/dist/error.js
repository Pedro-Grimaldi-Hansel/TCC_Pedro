'use client'; // Error components must be Client Components
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Error(_a) {
    var error = _a.error, reset = _a.reset;
    react_1.useEffect(function () {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);
    return (React.createElement("div", null,
        React.createElement("h2", null, "Something went wrong!"),
        React.createElement("button", { onClick: 
            // Attempt to recover by trying to re-render the segment
            function () { return reset(); } }, "Try again")));
}
exports["default"] = Error;
