"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "App": () => (/* binding */ App),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@wpro/magento/dist/ui"
var ui_ = __webpack_require__(7448);
// EXTERNAL MODULE: external "@wpro/prismic"
var prismic_ = __webpack_require__(4703);
;// CONCATENATED MODULE: external "@wpro/magento/dist/core/components"
const components_namespaceObject = require("@wpro/magento/dist/core/components");
// EXTERNAL MODULE: ../../packages/shared/index.ts
var shared = __webpack_require__(6553);
;// CONCATENATED MODULE: ./pages/_app.tsx

// Core



// Project

const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(components_namespaceObject.PWA, {
        pageProps: pageProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ui_.ThemeProvider, {
            theme: shared/* theme */.rS,
            children: /*#__PURE__*/ jsx_runtime_.jsx(shared/* Main */.or, {
                layout: shared/* Layout */.Ar,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(shared/* Fonts */.F3, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(shared/* Layout */.Ar, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(prismic_.PrismicPreviewScript, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 2951:
/***/ ((module) => {

module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ 8099:
/***/ ((module) => {

module.exports = require("@urql/core");

/***/ }),

/***/ 1290:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/core/data/quote/cart");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/core/hooks");

/***/ }),

/***/ 740:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/core/hooks/");

/***/ }),

/***/ 5390:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/core/resources/constants");

/***/ }),

/***/ 797:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/core/resources/helpers");

/***/ }),

/***/ 2777:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/core/services/localStorage");

/***/ }),

/***/ 9251:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/core/services/magento/client");

/***/ }),

/***/ 8697:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/gtm/ga3/index");

/***/ }),

/***/ 9704:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/affirm");

/***/ }),

/***/ 3914:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/auth");

/***/ }),

/***/ 5599:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/cart");

/***/ }),

/***/ 6548:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/cart/components/TotalsTable/styled");

/***/ }),

/***/ 3273:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/cart/scenes/CartScene/styled");

/***/ }),

/***/ 4796:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/catalog");

/***/ }),

/***/ 5393:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/catalog/components/LayeredControls/styled");

/***/ }),

/***/ 6471:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/catalog/components/LayeredNavMobile/components/Filter");

/***/ }),

/***/ 9808:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/catalog/hooks");

/***/ }),

/***/ 682:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/catalog/hooks/useProductListPage/utils");

/***/ }),

/***/ 9547:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/catalog/index");

/***/ }),

/***/ 6773:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/checkout");

/***/ }),

/***/ 5975:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/checkout/");

/***/ }),

/***/ 4829:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/rolex/components/RolexModelPage/styled");

/***/ }),

/***/ 2623:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/shared");

/***/ }),

/***/ 6156:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/modules/shared/hooks");

/***/ }),

/***/ 7448:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/ui");

/***/ }),

/***/ 1516:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/ui/theme/checkbox");

/***/ }),

/***/ 3352:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/ui/theme/heading");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/ui/theme/link");

/***/ }),

/***/ 9224:
/***/ ((module) => {

module.exports = require("@wpro/magento/dist/ui/theme/text");

/***/ }),

/***/ 4703:
/***/ ((module) => {

module.exports = require("@wpro/prismic");

/***/ }),

/***/ 4317:
/***/ ((module) => {

module.exports = require("@wpro/ui");

/***/ }),

/***/ 264:
/***/ ((module) => {

module.exports = require("html-react-parser");

/***/ }),

/***/ 1403:
/***/ ((module) => {

module.exports = require("instagram-gallery");

/***/ }),

/***/ 1161:
/***/ ((module) => {

module.exports = require("keen-slider/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8938:
/***/ ((module) => {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4409:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 9585:
/***/ ((module) => {

module.exports = require("react-image-gallery");

/***/ }),

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 8405:
/***/ ((module) => {

module.exports = require("react-rater");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [88,880,727], () => (__webpack_exec__(7377)));
module.exports = __webpack_exports__;

})();