"use strict";
(() => {
var exports = {};
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handler": () => (/* binding */ handler)
/* harmony export */ });
const handler = async (req, res)=>{
    const body = req.body;
    if (!body.email) {
        return res.status(400).json({
            error: "No email found"
        });
    }
    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `Basic ${"local-YXBpdXNlci1jMTU0OGU2MmVmODVAYXBpY29ubmVjdG9yLmNvbTpXcHJvMTIzIQ=="}`
        },
        body: JSON.stringify({
            email: body.email
        })
    };
    await fetch(`https://r2-api.dotdigital.com/v2/address-books/${"9992800900"}/contacts`, options);
    res.status(200).json({
        success: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(118));
module.exports = __webpack_exports__;

})();