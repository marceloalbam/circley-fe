"use strict";
(() => {
var exports = {};
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Sitemap": () => (/* binding */ Sitemap),
  "default": () => (/* binding */ _sitemap_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "@wpro/sitemap"
const sitemap_namespaceObject = require("@wpro/sitemap");
;// CONCATENATED MODULE: ./pages/sitemap/[[...sitemap]].ts


const Sitemap = ()=>{
    return null;
};
const getServerSideProps = async (ctx)=>{
    const mainSitemapPath = "/sitemap/index.xml";
    const originUrl = "https://local-reinsman-fe.wpro.app" ?? 0;
    const pathname = ctx.resolvedUrl ?? "";
    const prismicSitemapGenerator = getPrismicSitemapGenerator(originUrl, pathname);
    const magentoSitemapGenerator = getMagentoSitemapGenerator(pathname, originUrl);
    const { getServerSidePropsValue  } = await (0,sitemap_namespaceObject.serverSideSitemaps)(ctx, {
        generators: [
            prismicSitemapGenerator,
            magentoSitemapGenerator
        ],
        mainSitemapPath
    });
    return getServerSidePropsValue();
};
/* harmony default export */ const _sitemap_ = (Sitemap);
const prismicTypeUrlResolver = (type, url)=>{
    if (type === "blog_category" || type === "blog_post") {
        return `${"/blog"}${url}`;
    }
    return url;
};
const getPrismicSitemapGenerator = (originUrl, pathname)=>{
    const cmsSitemapPath = "/sitemap/cms.xml";
    const prismicPageTypes = [
        "page",
        "blog_category",
        "blog_post"
    ];
    const pagesUrls = [
        `${"/blog"}`
    ];
    return (0,sitemap_namespaceObject.prismicSitemapGenerator)({
        options: {
            cmsSitemapPath,
            originUrl,
            pathname,
            prismicPageTypes,
            pagesUrls,
            prismicTypeUrlResolver
        }
    });
};
const getMagentoSitemapGenerator = (pathname, originUrl)=>{
    const sitemapUrl = "https://local-circy-be-staging.visiture.cloud/media/sitemap_reinsman.xml" ?? 0;
    return (0,sitemap_namespaceObject.magentoSitemapGenerator)({
        options: {
            sitemapUrl,
            originUrl,
            pathname
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(962));
module.exports = __webpack_exports__;

})();