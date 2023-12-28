"use strict";
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 9727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "py": () => (/* reexport */ EntityType),
  "Uv": () => (/* reexport */ HomePage),
  "II": () => (/* reexport */ PrismicBlogPage),
  "dj": () => (/* reexport */ PrismicPage),
  "v": () => (/* reexport */ PrismicPageResolver),
  "_R": () => (/* reexport */ contentStyles),
  "NV": () => (/* reexport */ placementOptions)
});

// UNUSED EXPORTS: BLOG_FEATURED_CATEGORY_ID, BlogBreadcrumbs, BlogCategoryTree, BlogEntityResolver, Carousel, CmsNavigation, ContentColumns, Divider, DownloadImageLink, FaqWidget, FaqsGrid, FeaturedProducts, HeaderImage, Hero, HtmlSnippet, ImageContent, ImageObject, ImageSlider, InstagramFeed, NavItem, PrismicBlogCategoryPage, PrismicBlogHomePage, PrismicBlogPostPage, PrismicSerialNumberPage, ProductCard, RenderLink, RichText, SliceResolver, StoreLocator, TwoColumns, Video, alignImageRightStyles, getBlogCategoriesKey, getBlogCategoriesService, getBlogCategoryPostsKey, getBlogCategoryPostsService, getEntityResolverKey, getEntityResolverService, getItemSkus, getSliceLayout, useBlogCategories, useBlogCategoryPosts, useEntityResolver, useFeaturedProducts

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ../../packages/prismic/src/components/blog-breadcrumbs.tsx




const BlogBreadcrumbs = ({ items  })=>{
    const router = (0,router_.useRouter)();
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Breadcrumb, {
        mb: "20px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbItem, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbLink, {
                        children: "Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbItem, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbLink, {
                        children: "Blog"
                    })
                })
            }),
            items === null || items === void 0 ? void 0 : items.map((item, i)=>{
                const { path , title  } = item;
                return /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbItem, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: path ?? router.asPath.split("#")[0].split("?")[0],
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.BreadcrumbLink, {
                            children: title
                        })
                    })
                }, i);
            })
        ]
    });
};

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "@wpro/prismic"
var prismic_ = __webpack_require__(4703);
;// CONCATENATED MODULE: ../../packages/prismic/src/types/entity-type.ts
var EntityType;
(function(EntityType) {
    EntityType["BlogCategory"] = "blog_category";
    EntityType["BlogPost"] = "blog_post";
    EntityType["Page"] = "page";
    EntityType["Footer"] = "footer";
    EntityType["Nav"] = "header";
    EntityType["HomePage"] = "home_page";
    EntityType["MegaMenu"] = "megamenu";
    EntityType["CmsNavigation"] = "cms_navigation";
    EntityType["FaqsAccordions"] = "faq_accordion";
    EntityType["SerialNumberPage"] = "serial_number_page";
    EntityType["CategoryListing"] = "category_listing";
    EntityType["MaintenancePage"] = "maintenance-page";
})(EntityType || (EntityType = {}));

;// CONCATENATED MODULE: ../../packages/prismic/src/types/index.ts














;// CONCATENATED MODULE: ../../packages/prismic/src/hooks/use-blog-categories.ts



const getBlogCategoriesKey = ()=>{
    return [
        "prismic",
        "useBlogCategories"
    ];
};
const useBlogCategories = ()=>{
    const { data , isLoading  } = (0,external_react_query_.useQuery)(getBlogCategoriesKey(), async ()=>getBlogCategoriesService());
    return {
        documents: data,
        loading: isLoading
    };
};
const getBlogCategoriesService = async ()=>{
    return Promise.all([
        prismic_.prismicClient.query(prismic_.Prismic.Predicates.at("document.type", EntityType.BlogCategory), {
            orderings: `[my.${EntityType.BlogCategory}.title]`
        }), 
    ]).then((values)=>{
        return values[0].results ?? null;
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/hooks/use-blog-category-posts.ts



const getBlogCategoryPostsKey = ({ id  })=>{
    return [
        "prismic",
        "useBlogCategoryPosts",
        id
    ];
};
const useBlogCategoryPosts = (params)=>{
    const { data , isLoading  } = (0,external_react_query_.useQuery)(getBlogCategoryPostsKey(params), async ()=>getBlogCategoryPostsService(params));
    return {
        documents: data,
        loading: isLoading
    };
};
const getBlogCategoryPostsService = async (params)=>{
    const { id  } = params;
    return Promise.all([
        prismic_.prismicClient.query([
            prismic_.Prismic.Predicates.at("document.type", EntityType.BlogPost),
            prismic_.Prismic.Predicates.at(`my.${EntityType.BlogPost}.categories.category`, id), 
        ], {
            orderings: `[my.${EntityType.BlogPost}.date desc]`
        }), 
    ]).then((values)=>{
        var ref;
        return (ref = values[0]) === null || ref === void 0 ? void 0 : ref.results;
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/hooks/use-entity-resolver.ts



const getEntityResolverKey = ({ slug  })=>{
    return [
        "prismic",
        "useEntityResolver",
        slug
    ];
};
const useEntityResolver = (params)=>{
    const { data , isLoading  } = (0,external_react_query_.useQuery)(getEntityResolverKey(params), async ()=>getEntityResolverService(params));
    return {
        loading: isLoading,
        post: data === null || data === void 0 ? void 0 : data.post,
        category: data === null || data === void 0 ? void 0 : data.category
    };
};
const getEntityResolverService = async (params)=>{
    const { slug  } = params;
    return Promise.all([
        // Blog Posts
        prismic_.prismicClient.query([
            prismic_.Prismic.Predicates.at("document.type", EntityType.BlogPost),
            prismic_.Prismic.Predicates.at(`my.${EntityType.BlogPost}.uid`, slug), 
        ], {
            orderings: `[my.${EntityType.BlogPost}.date desc]`
        }),
        // Blog Category
        prismic_.prismicClient.query([
            prismic_.Prismic.Predicates.at("document.type", EntityType.BlogCategory),
            prismic_.Prismic.Predicates.at(`my.${EntityType.BlogCategory}.uid`, slug), 
        ], {
            orderings: `[my.${EntityType.BlogCategory}.title]`
        }), 
    ]).then((values)=>{
        var ref, ref1;
        const [posts, categories] = values;
        return {
            post: ((ref = posts.results) === null || ref === void 0 ? void 0 : ref[0]) ?? null,
            category: ((ref1 = categories.results) === null || ref1 === void 0 ? void 0 : ref1[0]) ?? null
        };
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/modules/catalog"
var catalog_ = __webpack_require__(4796);
;// CONCATENATED MODULE: ../../packages/prismic/src/hooks/use-featured-products.tsx

const useFeaturedProducts = ({ items  })=>{
    const skus = getItemSkus({
        items
    });
    const { isLoading , isError , isFetching , products  } = (0,catalog_.useProductsBySku)({
        sku: skus
    });
    return {
        isLoading,
        isError,
        isFetching,
        products
    };
};
const getItemSkus = (params)=>{
    const { items  } = params;
    return items === null || items === void 0 ? void 0 : items.reduce((acc, elem, index)=>{
        if (elem.sku) {
            acc.push(elem.sku);
        }
        return acc;
    }, []);
};

;// CONCATENATED MODULE: ../../packages/prismic/src/hooks/index.ts





;// CONCATENATED MODULE: ../../packages/prismic/src/components/render-link.tsx




const RenderLink = ({ category  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: (0,prismic_.getBlogPath)(category.uid),
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            children: category.data.title
        })
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/nav-item.tsx



const NavItem = ({ category  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(RenderLink, {
            category: category
        })
    }, category.id);
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/blog-category-tree.tsx




const BlogCategoryTree = ()=>{
    const { documents  } = useBlogCategories();
    if (!documents) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: "flex",
        justifyContent: "space-between",
        borderWidth: "1px",
        mb: "20px",
        p: "20px",
        children: documents === null || documents === void 0 ? void 0 : documents.map((category)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                category: category
            }, category.id);
        })
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/ui"
var ui_ = __webpack_require__(7448);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/shared"
var shared_ = __webpack_require__(2623);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ../../packages/shared/index.ts
var shared = __webpack_require__(6553);
;// CONCATENATED MODULE: ../../packages/prismic/src/pages/prismic-blog-category-page.tsx










const PrismicBlogCategoryPage = ({ id , data  })=>{
    const { documents: posts , loading  } = useBlogCategoryPosts({
        id
    });
    const { description , title  } = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: data.meta_title,
                description: data.meta_description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogBreadcrumbs, {
                items: [
                    {
                        title
                    }
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                display: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        width: "40%",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: data.image.url ?? shared/* IMAGE_PLACEHOLDER */.no,
                            width: data.image.alt ?? 200,
                            height: data.image.alt ?? 200,
                            alt: data.image.alt ?? "",
                            layout: "responsive",
                            objectFit: "contain"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        width: "60%",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: description
                        })
                    })
                ]
            }),
            loading ? /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {}) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>{
                    const { uid , data  } = post;
                    const { title  } = data;
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: (0,prismic_.getBlogPath)(uid),
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: title
                                    })
                                })
                            })
                        })
                    }, uid);
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/pages/prismic-blog-home-page.tsx








const BLOG_FEATURED_CATEGORY_ID = "YCE9XBUAACYApaMA";
const PrismicBlogHomePage = ()=>{
    const { document: category  } = (0,prismic_.useDocument)({
        id: BLOG_FEATURED_CATEGORY_ID
    });
    const { documents: posts , loading  } = useBlogCategoryPosts({
        id: BLOG_FEATURED_CATEGORY_ID
    });
    const title = "Prismic Blog Home";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: title,
                noindex: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogBreadcrumbs, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                mb: "30px",
                children: title
            }),
            loading ? /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                borderWidth: "1px",
                p: "10px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        size: "md",
                        children: category === null || category === void 0 ? void 0 : category.data.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>{
                            const { uid , data  } = post;
                            const { title  } = data;
                            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                my: "20px",
                                width: "100%",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: (0,prismic_.getBlogPath)(uid),
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                        children: title
                                    })
                                })
                            }, uid);
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/pages/prismic-blog-page.tsx

// import { GetStaticPaths, GetStaticProps } from 'next'
// import { ServerSideInterface } from '@wpro/magento/dist/types'
// import { coreServerSideApp } from '@wpro/magento/dist/ssr'
// import { prefetchDocumentQuery } from '@wpro/prismic'


// import {
//   getBlogCategoriesKey,
//   getBlogCategoriesService,
//   getBlogCategoryPostsKey,
//   getBlogCategoryPostsService,
//   getEntityResolverKey,
//   getEntityResolverService,
// } from '../hooks'
// import { BLOG_FEATURED_CATEGORY_ID } from './prismic-blog-home-page'
const PrismicBlogPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlogCategoryTree, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "section",
                children: /*#__PURE__*/ jsx_runtime_.jsx(BlogEntityResolver, {})
            })
        ]
    });
} //
 // export const serverSidePrismicBlogScene: ServerSideInterface = () => {
 //   const getStaticPaths: GetStaticPaths = async () => {
 //     return {
 //       paths: [],
 //       fallback: 'blocking',
 //     }
 //   }
 //
 //   const getStaticProps: GetStaticProps = async (context) => {
 //     const { getStaticProps, queryClient } = await coreServerSideApp()
 //     const slug = context.params?.path?.toString() ?? ''
 //     const entityResolverParams = { slug }
 //
 //     const entity = await getEntityResolverService(entityResolverParams)
 //     const notFound = Boolean(slug && !entity.category && !entity.post)
 //
 //     await queryClient.prefetchQuery(
 //       getEntityResolverKey(entityResolverParams),
 //       async () => entity
 //     )
 //
 //     const queries: Array<Promise<any>> = [
 //       queryClient.prefetchQuery(
 //         getBlogCategoriesKey(),
 //         async () => await getBlogCategoriesService()
 //       ),
 //     ]
 //
 //     if (!slug) {
 //       // blog home
 //       queries.push(
 //         prefetchDocumentQuery({
 //           queryClient,
 //           documentParams: {
 //             id: BLOG_FEATURED_CATEGORY_ID,
 //           },
 //         }),
 //
 //         queryClient.prefetchQuery(
 //           getBlogCategoryPostsKey({ id: BLOG_FEATURED_CATEGORY_ID }),
 //           async () =>
 //             await getBlogCategoryPostsService({ id: BLOG_FEATURED_CATEGORY_ID })
 //         )
 //       )
 //     }
 //
 //     if (entity.category) {
 //       // blog category
 //       queries.push(
 //         queryClient.prefetchQuery(
 //           getBlogCategoryPostsKey({ id: entity.category.id }),
 //           async () =>
 //             await getBlogCategoryPostsService({ id: entity.category.id })
 //         )
 //       )
 //     }
 //
 //     await Promise.all(queries)
 //
 //     return getStaticProps({
 //       notFound,
 //     })
 //   }
 //
 //   return {
 //     getStaticPaths,
 //     getStaticProps,
 //   }
 // }
;

;// CONCATENATED MODULE: ../../packages/prismic/src/pages/prismic-blog-post-page.tsx




const PrismicBlogPostPage = ({ data  })=>{
    const { body , title  } = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: data.meta_title,
                description: data.meta_description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogBreadcrumbs, {
                items: [
                    {
                        title
                    }
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                mb: "30px",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                spacing: "30px",
                children: body.map((slice, i)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(SliceResolver, {
                        slice: slice
                    }, i);
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/core/hooks"
var hooks_ = __webpack_require__(32);
;// CONCATENATED MODULE: ../../packages/prismic/src/pages/prismic-page.tsx





const PrismicPage = ({ data  })=>{
    const { body , title  } = data;
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        sx: {
            "h1, h2, h3, h4, h5, h6": {
                fontFamily: isReinsman ? "reinsman" : isHighHorse ? "highHorse" : isTucker ? "tucker" : "heading",
                fontWeight: isHighHorse ? "700" : "auto"
            },
            p: {
                fontFamily: isHighHorse ? "highHorse" : "body"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: data.meta_title,
                description: data.meta_description
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                mb: "30px",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                spacing: "0",
                overflow: "hidden",
                children: body.map((slice, i)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(SliceResolver, {
                        slice: slice
                    }, i);
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/pages/prismic-home-page.tsx







const HomePage = ()=>{
    const { document  } = (0,prismic_.useDocument)({
        uid: "homepage",
        types: [
            EntityType.HomePage
        ]
    });
    const { body  } = (document === null || document === void 0 ? void 0 : document.data) ?? {};
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    const spacingForFirstSlice = {
        base: "30px",
        md: "30px"
    };
    const spacingForSlice = {
        base: "40px",
        md: "80px"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        sx: {
            ".hero-home": {
                "+ div": {
                    marginTop: "30px !important"
                }
            },
            "h1, h2, h3, h4, h5, h6": {
                fontFamily: isReinsman ? "reinsman" : isHighHorse ? "highHorse" : isTucker ? "tucker" : "heading",
                fontWeight: isHighHorse ? "700" : "auto"
            },
            p: {
                fontFamily: isHighHorse ? "highHorse" : "body"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: document === null || document === void 0 ? void 0 : document.data.meta_title,
                description: document === null || document === void 0 ? void 0 : document.data.meta_description
            }),
            body === null || body === void 0 ? void 0 : body.map((slice, i)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                    spacing: {
                        base: "80px",
                        md: "160px"
                    },
                    overflow: "hidden",
                    mb: i === 0 ? spacingForFirstSlice : spacingForSlice,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SliceResolver, {
                        slice: slice,
                        index: i
                    })
                }, i))
        ]
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/core/services/magento/client"
var client_ = __webpack_require__(9251);
;// CONCATENATED MODULE: ../../packages/shared/src/hooks/useSerialNumberProduct.tsx


const getSerialNumberProductQuery = /* GraphQL */ `
  query getSerialNumberProductQuery($serial_number: String) {
    getSerialNumberProduct(serial_number: $serial_number) {
      brand
      serial_number
      description
      category
      date_made
      model
      model_number
      product_line
      saddle_color
      seat_color
      seat_size
      tree_size
      status
    }
  }
`;
const getSerialNumberProductKey = (params)=>{
    return [
        "useSerialNumberProduct",
        (params === null || params === void 0 ? void 0 : params.serial_number) ?? null
    ];
};
const getSerialNumberProductService = async (params)=>{
    const { serial_number  } = params;
    const query = await client_.urql.query(getSerialNumberProductQuery, {
        serial_number
    }, {
        preferGetMethod: true
    }).toPromise();
    return query === null || query === void 0 ? void 0 : query.data;
};
const useSerialNumberProduct = (params)=>{
    return (0,external_react_query_.useQuery)(getSerialNumberProductKey(params), async ()=>await getSerialNumberProductService(params), {
        enabled: Boolean(params === null || params === void 0 ? void 0 : params.serial_number)
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../packages/prismic/src/pages/prismic-serial-number-page.tsx







const PrismicSerialNumberPage = ({ data  })=>{
    const { body , title  } = data;
    const { 0: serial , 1: setSerial  } = (0,external_react_.useState)("");
    const { 0: showResults , 1: setShowResults  } = (0,external_react_.useState)(false);
    const { 0: serialProduct , 1: setSerialProduct  } = (0,external_react_.useState)({});
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    let content = null;
    const serialProductResult = useSerialNumberProduct({
        serial_number: serial
    });
    const updateSerial = (e)=>{
        setSerial(e.target.value);
    };
    const updateSerialProductData = ()=>{
        var ref;
        const hasData = (serialProductResult === null || serialProductResult === void 0 ? void 0 : serialProductResult.data) !== undefined;
        setShowResults(hasData);
        const product = (ref = serialProductResult.data) === null || ref === void 0 ? void 0 : ref.getSerialNumberProduct;
        setSerialProduct(product);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        sx: {
            "h1, h2, h3, h4, h5, h6": {
                fontFamily: isReinsman ? "reinsman" : isHighHorse ? "highHorse" : isTucker ? "tucker" : "heading",
                fontWeight: isHighHorse ? "700" : "auto"
            },
            p: {
                fontFamily: isHighHorse ? "highHorse" : "body"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: data.meta_title,
                description: data.meta_description
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                mb: "30px",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                spacing: "0",
                overflow: "hidden",
                children: [
                    body.map((slice, i)=>{
                        if (slice.slice_type === "rich_text") {
                            content = /*#__PURE__*/ jsx_runtime_.jsx(SliceResolver, {
                                slice: slice
                            }, i);
                        } else {
                            return /*#__PURE__*/ jsx_runtime_.jsx(SliceResolver, {
                                slice: slice
                            }, i);
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        templateColumns: {
                            base: "1fr",
                            md: "1fr",
                            lg: "1fr 2fr"
                        },
                        width: "60%",
                        mt: "2rem !important",
                        gap: 5,
                        mb: "2rem !important",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    children: content
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                padding: "0 2rem",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        as: "h2",
                                        textTransform: "uppercase",
                                        fontSize: "1.5rem",
                                        mb: "2rem !important",
                                        children: "Serial Number Lookup"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                        backgroundColor: "#f2f2ef",
                                        padding: "2rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                as: "h2",
                                                mb: "2rem",
                                                textAlign: "center",
                                                textTransform: "uppercase",
                                                children: "Enter your serial number"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                                templateColumns: {
                                                    base: "1fr",
                                                    md: "1fr",
                                                    lg: "2fr 1fr"
                                                },
                                                gap: 3,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                                        type: "text",
                                                        variant: "primary",
                                                        onChange: updateSerial,
                                                        placeholder: "Serial Number (Ex: 20061234)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                        type: "submit",
                                                        variant: "primary",
                                                        width: "100%",
                                                        onClick: updateSerialProductData,
                                                        children: "SEARCH"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                mt: "2rem",
                                                textAlign: "center",
                                                children: "The serial number Search is for saddles 2006 and newer."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    showResults ? serialProduct ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        backgroundColor: "#f2f2ef",
                        width: "50%",
                        mb: "2rem !important",
                        padding: "3rem",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                as: "h1",
                                borderBottom: "1px solid #ccc",
                                textTransform: "uppercase",
                                mb: "1rem",
                                children: "Saddle Information"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                templateColumns: {
                                    base: "1fr",
                                    md: "1fr",
                                    lg: "1fr 1fr"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Serial Number"
                                            }),
                                            ":",
                                            " ",
                                            serialProduct["serial_number"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Description"
                                            }),
                                            ": ",
                                            serialProduct["description"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Date"
                                            }),
                                            ": ",
                                            serialProduct["date_made"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Seat Size"
                                            }),
                                            ": ",
                                            serialProduct["seat_size"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Model Number"
                                            }),
                                            ": ",
                                            serialProduct["model_number"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Tree Size"
                                            }),
                                            ": ",
                                            serialProduct["tree_size"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Saddle Style"
                                            }),
                                            ": ",
                                            serialProduct["model"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Color"
                                            }),
                                            ": ",
                                            serialProduct["saddle_color"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Brand"
                                            }),
                                            ": ",
                                            serialProduct["brand"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Seat Color"
                                            }),
                                            ": ",
                                            serialProduct["seat_color"]
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Product Line"
                                            }),
                                            ": ",
                                            serialProduct["product_line"]
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.GridItem, {
                                        textTransform: "capitalize",
                                        pb: ".5rem",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Category"
                                            }),
                                            ": ",
                                            serialProduct["category"]
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        mt: "2rem !important",
                        backgroundColor: "#f2f2ef",
                        width: "50%",
                        margin: "2rem !important",
                        padding: "3rem",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                as: "h1",
                                borderBottom: "1px solid #ccc",
                                textTransform: "uppercase",
                                mb: "1rem",
                                children: "No Results Found"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: "The serial number that was requested doesn't exist. Verify it and try again."
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/pages/index.ts









;// CONCATENATED MODULE: ../../packages/prismic/src/components/blog-entity-resolver.tsx







const BlogEntityResolver = ()=>{
    const router = (0,router_.useRouter)();
    const pathname = router.asPath;
    const { category , post , loading  } = useEntityResolver({
        slug: (0,prismic_.getSlug)(pathname)
    });
    if (pathname === (0,prismic_.getBlogPath)()) {
        return /*#__PURE__*/ jsx_runtime_.jsx(PrismicBlogHomePage, {});
    }
    if (category) {
        return /*#__PURE__*/ jsx_runtime_.jsx(PrismicBlogCategoryPage, {
            ...category
        }, category.id);
    }
    if (post) {
        return /*#__PURE__*/ jsx_runtime_.jsx(PrismicBlogPostPage, {
            ...post
        }, post.id);
    }
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(shared_.NotFound, {});
};

// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(8938);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ../../packages/ui/index.ts + 5 modules
var ui = __webpack_require__(3877);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/rolex/components/RolexModelPage/styled"
var styled_ = __webpack_require__(4829);
;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/carousel.tsx








const Carousel = ({ primary , items  })=>{
    var ref, ref1, ref2, ref3;
    const { 0: created , 1: setCreated  } = (0,external_react_.useState)(false);
    const { 0: carouselIndex , 1: setCarouselIndex  } = (0,external_react_.useState)(0);
    const speed = 5000;
    const hasOnlyOneSlide = items.length === 1;
    const { autoplay , display_arrows: displayArrows , display_dots: displayDots , content_max_width: contentMaxWidth , display_bg: displayBg ,  } = primary;
    const [ref4, slider] = (0,ui/* useCarousel */.vr)({
        options: {
            slides: {
                perView: 1
            },
            loop: true,
            initial: 0,
            renderMode: "performance",
            slideChanged: (slider)=>setCarouselIndex(slider.track.details.rel),
            created: ()=>{
                setTimeout(()=>setCreated(true), 200);
            }
        },
        plugin: [
            (sliderInstance)=>{
                autoplay && !hasOnlyOneSlide && (0,ui/* carouselAutoPlay */.n3)(sliderInstance, speed);
            }, 
        ]
    });
    const handleIndexChange = (i)=>{
        var ref;
        setCarouselIndex(i);
        slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.moveToIdx(i);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        maxW: "container.xl",
        children: Boolean(items.length) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            w: "100%",
            opacity: created ? "1" : "0",
            pos: "relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(styled_.CarouselWrapper, {
                    ref: ref4,
                    children: items.map((item, i)=>{
                        var ref, ref1;
                        const { image , title , content  } = item;
                        return /*#__PURE__*/ jsx_runtime_.jsx(ui/* CarouselSlide */.qs, {
                            bgImage: displayBg ? "url(./images/carousel-bg.webp)" : undefined,
                            p: "40px",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Center, {
                                flexDirection: "column",
                                maxW: contentMaxWidth ? `${contentMaxWidth}px` : undefined,
                                mx: contentMaxWidth ? "auto" : undefined,
                                children: [
                                    image.url && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: image.url,
                                        alt: image.alt ?? "",
                                        width: (ref = image.dimensions) === null || ref === void 0 ? void 0 : ref.width,
                                        height: (ref1 = image.dimensions) === null || ref1 === void 0 ? void 0 : ref1.height
                                    }),
                                    title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                        mb: "15px",
                                        children: title
                                    }),
                                    Boolean(content.length) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textAlign: "center",
                                        children: external_prismic_reactjs_.RichText.render(content)
                                    })
                                ]
                            })
                        }, i);
                    })
                }),
                displayDots && /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                    className: "dots",
                    spacing: "6px",
                    justify: "center",
                    mt: "40px",
                    children: slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : (ref1 = ref.track) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.details) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.slides) === null || ref3 === void 0 ? void 0 : ref3.map((slider, i)=>{
                        const isActive = carouselIndex === i;
                        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            w: "14px",
                            h: "14px",
                            border: "1px solid",
                            borderColor: "secondary.100",
                            borderRadius: "50%",
                            cursor: "pointer",
                            background: isActive ? "secondary.900" : "transparent",
                            onClick: ()=>handleIndexChange(i)
                        }, i);
                    })
                }),
                displayArrows && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronLeft, {}),
                            "aria-label": "Prev",
                            variant: "ghost",
                            onClick: ()=>{
                                var ref;
                                return (ref = slider.current) === null || ref === void 0 ? void 0 : ref.prev();
                            },
                            sx: arrowStyles,
                            left: "0"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {}),
                            "aria-label": "Next",
                            variant: "ghost",
                            onClick: ()=>{
                                var ref;
                                return (ref = slider.current) === null || ref === void 0 ? void 0 : ref.next();
                            },
                            sx: arrowStyles,
                            right: "0"
                        })
                    ]
                })
            ]
        })
    });
};
const faderStyles = {
    position: "relative",
    overflow: "hidden",
    h: "300px",
    ".fader__slide": {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0"
    }
};
const arrowStyles = {
    pos: "absolute",
    top: "45%",
    bg: "whiteAlpha.700",
    w: "60px",
    h: "60px",
    color: "secondary.400",
    _hover: {
        bg: "whiteAlpha.700"
    },
    svg: {
        w: "30px",
        h: "30px"
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/cms-navigation.tsx






const CmsNavigation = ({ primary  })=>{
    const { navigation  } = primary;
    const { document  } = (0,prismic_.useDocument)({
        uid: navigation.uid,
        types: [
            EntityType.CmsNavigation
        ]
    });
    const items = document === null || document === void 0 ? void 0 : document.data.items;
    const { asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Wrap, {
        spacing: "24px",
        mt: "30px !important",
        justify: "center",
        children: items === null || items === void 0 ? void 0 : items.map((item)=>{
            const isActive = item.link === asPath;
            if (!item.link) {
                return null;
            }
            return /*#__PURE__*/ jsx_runtime_.jsx(react_.WrapItem, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: item.link,
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                        variant: "primary",
                        borderColor: isActive ? undefined : "transparent",
                        fontSize: "lg",
                        children: item.label
                    })
                })
            });
        })
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/content-columns.tsx





const ContentColumns = ({ primary , items , index  })=>{
    const { column_count: columnCount , layout  } = primary;
    const hasBg = Boolean(index && index > 1);
    const isWide = layout === "wide";
    if (items.length < 1) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        sx: hasBg ? bgStyles : undefined,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
            as: react_.Container,
            columns: {
                base: 1,
                md: columnCount ?? 3
            },
            w: "100%",
            spacing: {
                base: "40px",
                md: "30px"
            },
            pb: {
                base: "20px",
                md: "40px"
            },
            maxW: isWide ? "unset" : "container.xl",
            children: items.map((item, index)=>{
                var ref, ref1;
                const { title , link_url: linkUrl , image , link_label: linkLabel , content ,  } = item;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.LinkBox, {
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    children: [
                        image.url && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.url,
                            alt: image.alt ?? "",
                            width: (ref = image.dimensions) === null || ref === void 0 ? void 0 : ref.width,
                            height: (ref1 = image.dimensions) === null || ref1 === void 0 ? void 0 : ref1.height
                        }),
                        title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            as: "h3",
                            mt: "30px",
                            mb: "10px",
                            fontSize: {
                                base: "md",
                                md: "2xl"
                            },
                            children: title
                        }),
                        Boolean(content === null || content === void 0 ? void 0 : content.length) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            fontSize: "sm",
                            textAlign: "left",
                            my: "14px",
                            color: "secondary.400",
                            letterSpacing: ".3px",
                            children: external_prismic_reactjs_.RichText.render(content)
                        }),
                        linkLabel && linkUrl && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: linkUrl,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.LinkOverlay, {
                                as: react_.Link,
                                variant: "primary",
                                mt: "auto",
                                children: linkLabel
                            })
                        })
                    ]
                }, index);
            })
        })
    });
};
const bgStyles = {
    pos: "relative",
    zIndex: "1",
    w: "full",
    _before: {
        content: `''`,
        right: "0",
        zIndex: "-1",
        display: "block",
        pos: "absolute",
        top: "-640px",
        mx: "auto",
        bg: "url(./images/bg-right.webp)",
        w: "510px",
        h: "740px"
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/divider.tsx


const Divider = ({ primary  })=>{
    const { display_line: displayLine , size  } = primary;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        as: react_.Center,
        maxW: "container.xl",
        h: sizeOptions[size],
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
            borderColor: displayLine ? "secondary.100" : "transparent"
        })
    });
};
const sizeOptions = {
    default: "148px",
    small: "60px",
    large: "200px"
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/faqs-grid.tsx





const FaqsGrid = ({ primary  })=>{
    const { document  } = (0,prismic_.useDocument)({
        id: primary.accordion.id ?? "",
        types: [
            EntityType.FaqsAccordions
        ]
    });
    const { body  } = (document === null || document === void 0 ? void 0 : document.data) ?? {};
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
        as: react_.SimpleGrid,
        maxW: "container.xl",
        columns: {
            base: 1,
            md: 2,
            lg: 3
        },
        gap: "40px",
        children: body === null || body === void 0 ? void 0 : body.map((slice, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(AccordionSection, {
                ...slice
            }, i);
        })
    });
};
const AccordionSection = ({ primary , items  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                as: "h2",
                fontSize: "lg",
                color: "secondary.400",
                fontFamily: "body",
                fontWeight: "semibold",
                mb: "20px",
                children: primary.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Accordion, {
                allowMultiple: true,
                allowToggle: true,
                children: items.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionItem, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionButton, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            flex: "1",
                                            textAlign: "left",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionIcon, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionPanel, {
                                pb: 4,
                                children: external_prismic_reactjs_.RichText.render(item.content)
                            })
                        ]
                    }, i))
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/product-cartd.tsx






const ProductCard = ({ product  })=>{
    const { name , image , price , sku , typeName , getUrlPath  } = product;
    const urlPath = getUrlPath();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.LinkBox, {
        w: "100%",
        textAlign: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                ratio: 1,
                w: "100%",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image.small.url ?? shared/* IMAGE_PLACEHOLDER */.no,
                    alt: image.small.label ?? name,
                    layout: "fill",
                    objectFit: "contain",
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                mt: "30px",
                pt: "30px",
                textAlign: "center",
                borderTop: "1px solid",
                borderColor: "secondary.100",
                w: "auto",
                mx: "auto",
                display: "inline-block",
                color: "secondary.400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        mb: "20px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: urlPath,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.LinkOverlay, {
                                fontSize: "sm",
                                textTransform: "uppercase",
                                children: name
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(catalog_.ProductPrice, {
                            price: price,
                            type: typeName
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/featured-products.tsx






const VISIBLE_ITEMS = 5;
const FeaturedProducts = ({ primary , items  })=>{
    var ref, ref1;
    const { products , isLoading  } = useFeaturedProducts({
        items
    });
    const { title , layout , display_navigation: displayNavigation , display_arrows: displayArrows , display_line_behind_title: lineBehindTitle , transition_speed: carouselSpeed , is_autoplay: autoplay ,  } = primary;
    const isWide = layout === "wide";
    const { 0: created , 1: setCreated  } = (0,external_react_.useState)(false);
    const { 0: carouselIndex , 1: setCarouselIndex  } = (0,external_react_.useState)(0);
    const hasOnlyOneSlide = (products === null || products === void 0 ? void 0 : products.length) && (products === null || products === void 0 ? void 0 : products.length) <= VISIBLE_ITEMS;
    const [ref2, slider] = (0,ui/* useCarousel */.vr)({
        options: {
            breakpoints: {
                "(min-width: 480px)": {
                    slides: {
                        perView: 2,
                        spacing: 20
                    }
                },
                "(min-width: 768px)": {
                    slides: {
                        perView: 3,
                        spacing: 20
                    }
                },
                "(min-width: 1000px)": {
                    slides: {
                        perView: 4,
                        spacing: 20
                    }
                },
                "(min-width: 1200px)": {
                    slides: {
                        perView: VISIBLE_ITEMS,
                        spacing: 20
                    }
                }
            },
            slides: {
                perView: 1,
                spacing: 20
            },
            loop: true,
            initial: 0,
            renderMode: "performance",
            slideChanged: (slider)=>setCarouselIndex(slider.track.details.rel),
            created: ()=>{
                setTimeout(()=>setCreated(true), 200);
            }
        },
        plugin: [
            (sliderInstance)=>{
                !hasOnlyOneSlide && autoplay && (0,ui/* carouselAutoPlay */.n3)(sliderInstance, carouselSpeed ?? 5000);
            }, 
        ]
    });
    // @ts-expect-error
    const slidesPerView = (ref1 = (ref = slider.current) === null || ref === void 0 ? void 0 : ref.options.slides) === null || ref1 === void 0 ? void 0 : ref1.perView;
    const dotItems = (0,external_react_.useMemo)(()=>{
        var ref;
        return slider.current ? (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slides.map((x, i)=>i).filter((i)=>i % (slidesPerView ?? 1) === 0) : [];
    }, [
        slidesPerView,
        slider
    ]);
    const handleIndexChange = (i)=>{
        var ref;
        setCarouselIndex(i);
        slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.moveToIdx(i);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        maxW: isWide ? "unset" : "container.xl",
        pb: {
            base: "20px",
            lg: "40px"
        },
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                mb: "40px",
                textAlign: "center",
                sx: lineBehindTitle ? titleWithLineStyles : undefined,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Skeleton, {
                isLoaded: !isLoading,
                minH: "300px",
                children: Boolean(products === null || products === void 0 ? void 0 : products.length) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    px: "40px",
                    w: "100%",
                    opacity: created ? "1" : "0",
                    pos: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ui/* Carousel */.lr, {
                            ref: ref2,
                            children: products === null || products === void 0 ? void 0 : products.map((item, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(ui/* CarouselSlide */.qs, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                                        product: item
                                    })
                                }, index);
                            })
                        }),
                        !hasOnlyOneSlide && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                displayArrows && /*#__PURE__*/ jsx_runtime_.jsx(ui/* CarouselArrows */.i5, {
                                    sliderInstance: slider
                                }),
                                displayNavigation && /*#__PURE__*/ jsx_runtime_.jsx(ui/* CarouselNavigation */.Pn, {
                                    carouselIndex: carouselIndex,
                                    carouselItems: dotItems,
                                    slidesPerView: 1,
                                    handleChange: handleIndexChange
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const titleWithLineStyles = {
    display: "flex",
    borderSpacing: "5px",
    "&:before, &:after": {
        borderTop: "1px solid",
        borderColor: "secondary.300",
        content: `''`,
        display: "table-cell",
        position: "relative",
        top: "0.5em",
        flex: "1",
        minW: {
            base: "unset",
            md: "50px"
        }
    },
    "&:before": {
        right: "5px"
    },
    "&:after": {
        left: "5px"
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/header-image.tsx



/* New Slice Name: Full Width Image with Navigation */ const HeaderImage = ({ primary  })=>{
    const { background_image: bgImage , display_breadcrumbs: displayBreadcrumbs , title , cta_link: ctaLink , cta_label: ctaLabel , cta_type: ctaType , subtext , content_placement: contentPlacement , content_alignment: alignment ,  } = primary;
    const { storeView  } = (0,hooks_.useCoreContext)();
    const background = {
        url: bgImage.url,
        alt: bgImage.alt
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ui/* HeadingBanner */.tG, {
        bgImage: background,
        contentPlacement: contentPlacement,
        alignment: alignment,
        displayBreadcrumbs: displayBreadcrumbs,
        title: title,
        subtext: subtext,
        ctaLabel: ctaLabel,
        ctaLink: ctaLink,
        ctaType: ctaType,
        storeView: storeView,
        minH: {
            base: "350px",
            lg: "450px"
        }
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/hero.tsx








const Hero = ({ primary , items , carouselRootProps  })=>{
    const { 0: created , 1: setCreated  } = (0,external_react_.useState)(false);
    const { 0: carouselIndex , 1: setCarouselIndex  } = (0,external_react_.useState)(0);
    const hasOnlyOneSlide = items.length <= 1;
    const { display_navigation: displayNavigation , transition_speed: speed , is_autoplay: autoplay , display_arrows: displayArrows ,  } = primary;
    const [ref, slider] = (0,ui/* useCarousel */.vr)({
        options: {
            slides: {
                perView: 1
            },
            loop: true,
            initial: 0,
            renderMode: "performance",
            slideChanged: (slider)=>setCarouselIndex(slider.track.details.rel),
            created: ()=>{
                setTimeout(()=>setCreated(true), 200);
            }
        },
        plugin: [
            (sliderInstance)=>{
                !hasOnlyOneSlide && autoplay && (0,ui/* carouselAutoPlay */.n3)(sliderInstance, speed ?? 3000);
            }, 
        ]
    });
    const dotItems = (0,external_react_.useMemo)(()=>{
        var ref;
        return slider.current ? (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slides.map((x, i)=>i).filter((i)=>i % 1 === 0) : [];
    }, [
        slider.current
    ]);
    const handleIndexChange = (i)=>{
        var ref;
        setCarouselIndex(i);
        slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.moveToIdx(i);
    };
    return Boolean(items.length > 1) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        w: "100%",
        opacity: created ? "1" : "0",
        pos: "relative",
        ...carouselRootProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Carousel */.lr, {
                ref: ref,
                children: items === null || items === void 0 ? void 0 : items.map((item, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(ui/* CarouselSlide */.qs, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeroItem, {
                            ...item
                        })
                    }, index);
                })
            }),
            displayArrows && /*#__PURE__*/ jsx_runtime_.jsx(ui/* CarouselArrows */.i5, {
                sliderInstance: slider,
                color: "white"
            }),
            displayNavigation && /*#__PURE__*/ jsx_runtime_.jsx(ui/* CarouselNavigation */.Pn, {
                carouselIndex: carouselIndex,
                carouselItems: dotItems,
                slidesPerView: 1,
                handleChange: handleIndexChange,
                pos: "absolute",
                bottom: "10px",
                left: "0",
                w: "100%"
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(HeroItem, {
        ...items[0]
    });
};
const HeroItem = (props)=>{
    const { title , title_alignment: titleAlignment , title_color: titleColor , subtext , subtext_alignment: subtextAlignment , subtext_color: subtextColor , link_text: linkText , link_url: linkUrl , link_type: linkType , main_image: mainImage , content_placement: contentPlacement , cta_alignment: ctaAlignment , cta_text_color: ctaTextColor ,  } = props;
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        className: "hero-home",
        minH: {
            base: "420px",
            lg: "520px"
        },
        w: "100%",
        h: "100%",
        pos: "relative",
        _before: {
            content: `''`,
            pos: "absolute",
            top: "0",
            left: "0",
            w: "100%",
            h: "100%",
            bgColor: "blackAlpha.300",
            zIndex: "1"
        },
        children: [
            mainImage.url && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: mainImage.url,
                alt: mainImage.alt ?? "",
                layout: "fill",
                objectFit: "cover",
                objectPosition: "64%"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                w: {
                    base: "90vw",
                    md: "80vw"
                },
                mx: "auto",
                pos: "relative",
                zIndex: "2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    h: "100%",
                    w: "100%",
                    display: "flex",
                    ...placementOptions[contentPlacement],
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        maxW: "550px",
                        p: "30px 10px",
                        textAlign: ctaAlignment,
                        sx: {
                            "> *": {
                                fontWeight: "semibold"
                            }
                        },
                        children: [
                            title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                as: "h1",
                                fontSize: {
                                    base: "3xl",
                                    md: "4xl",
                                    lg: "5xl"
                                },
                                textShadow: {
                                    base: "0 0 16px black",
                                    lg: "0 0 16px rgb(0 0 0 / 10%)"
                                },
                                mb: "20px",
                                textAlign: titleAlignment,
                                color: titleColor ?? "white",
                                children: title
                            }),
                            Boolean(subtext.length) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                fontSize: "xl",
                                lineHeight: "30px",
                                mb: "60px",
                                textTransform: "none",
                                textAlign: subtextAlignment,
                                color: subtextColor ?? "white",
                                children: external_prismic_reactjs_.RichText.render(subtext)
                            }),
                            linkUrl && linkText && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: linkUrl,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    as: "a",
                                    variant: `${linkType}-${storeView}`,
                                    fontWeight: "semibold",
                                    size: "lg",
                                    color: ctaTextColor ?? "white",
                                    children: linkText
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
const placementOptions = {
    "top-left": {
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    "top-center": {
        justifyContent: "center",
        alignItems: "flex-start"
    },
    "top-right": {
        justifyContent: "flex-end",
        alignItems: "flex-start"
    },
    "center-left": {
        justifyContent: "flex-start",
        alignItems: "center"
    },
    "center-center": {
        justifyContent: "center",
        alignItems: "center"
    },
    "center-right": {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    "bottom-left": {
        justifyContent: "flex-start",
        alignItems: "flex-end"
    },
    "bottom-center": {
        justifyContent: "center",
        alignItems: "flex-end"
    },
    "bottom-right": {
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/image-content.tsx






/* New Slice Name: Text Next to Image */ const ImageContent = ({ primary  })=>{
    var ref, ref1;
    const { image , content , title , text_before_title: textBeforeTitle , align_image_right: alignImageRight , content_alignment: contentAlignment , cta_label: ctaLabel , cta_link: ctaLink , image_width: imageWidth , cta_type: ctaType ,  } = primary;
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: react_.Container,
        flexDirection: {
            base: "column",
            md: alignImageRight ? "row-reverse" : "row"
        },
        maxW: "container.xl",
        spacing: {
            base: "40px",
            md: "24px"
        },
        alignItems: "center",
        py: "30px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                ratio: (((ref = image.dimensions) === null || ref === void 0 ? void 0 : ref.width) ?? 1) / (((ref1 = image.dimensions) === null || ref1 === void 0 ? void 0 : ref1.height) ?? 1),
                className: "image",
                pos: "relative",
                w: `${imageWidth ?? 50}%`,
                children: image.url && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image.url,
                    alt: image.alt ?? "",
                    layout: "fill",
                    objectFit: "cover",
                    objectPosition: "top"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                className: "content",
                flex: "1",
                p: {
                    base: "0",
                    md: "50px 24px"
                },
                textAlign: contentAlignment,
                children: [
                    textBeforeTitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        as: "h6",
                        mb: "20px",
                        fontSize: "lg",
                        w: "100%",
                        fontWeight: "400 !important",
                        children: textBeforeTitle
                    }),
                    title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        mb: "40px",
                        w: "100%",
                        children: title
                    }),
                    Boolean(content.length) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "lg",
                        color: "secondary.400",
                        mb: "20px",
                        lineHeight: "1.5",
                        w: "100%",
                        children: external_prismic_reactjs_.RichText.render(content)
                    }),
                    ctaLabel && ctaLink && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: ctaLink,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            as: "a",
                            variant: `${ctaType}-${storeView}`,
                            w: "auto",
                            children: ctaLabel
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/rich-text.tsx



const getSliceLayout = (layout)=>{
    return layout === "full" ? "unset" : layout === "standard" ? "85%" : "75%";
};
const RichText = ({ primary  })=>{
    const { content , content_alignment: alignment , layout , inner_padding: innerPadding , bg_color: bgColor ,  } = primary;
    const containerMaxW = getSliceLayout(layout);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        py: `${innerPadding ?? 0}px`,
        bgColor: bgColor ?? "unset",
        textAlign: alignment,
        w: "100%",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
            maxW: {
                base: "100%",
                md: containerMaxW
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                sx: contentStyles,
                children: external_prismic_reactjs_.RichText.render(content)
            })
        })
    });
};
const contentStyles = {
    w: "100%",
    "h1, h2, h3, h4": {
        fontFamily: "heading",
        fontWeight: "normal",
        lineHeight: "1.5",
        textTransform: "uppercase"
    },
    a: {
        color: "#ef4123"
    },
    "h1, h2, h3, h4, h5, h6": {
        color: "secondary.600"
    },
    h4: {
        letterSpacing: "2px",
        fontSize: "1.25rem"
    },
    p: {
        color: "secondary.400",
        lineHeight: "1.5625rem",
        fontSize: "md",
        "&:not(:last-of-type)": {
            mb: "1.85rem"
        }
    },
    ".embed": {
        width: "100%",
        maxWidth: "65%",
        margin: "0 auto",
        "> div": {
            width: "100%",
            position: "relative",
            padding: "0 0 56.25%",
            height: 0,
            iframe: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }
        }
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/image-object.tsx








/* New Slice Name: Images with Centered Text Below */ const ImageObject = ({ primary , items  })=>{
    const { text_alignment: alignment , cta_label: ctaLabel , cta_link: ctaLink , cta_type: ctaType , section_subtitle: subtitle , section_title: title , layout ,  } = primary;
    const containerMaxW = getSliceLayout(layout);
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        maxW: containerMaxW,
        mx: "auto",
        children: [
            (title || ctaLabel || Boolean(subtitle.length)) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                w: "100%",
                textAlign: alignment,
                mb: "40px",
                maxW: "container.md",
                mx: "auto",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h2",
                        size: "lg",
                        children: title
                    }),
                    Boolean(subtitle.length > 0) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        sx: contentStyles,
                        my: "15px",
                        children: external_prismic_reactjs_.RichText.render(subtitle)
                    }),
                    ctaLabel && ctaLink && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: ctaLink,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            as: "a",
                            variant: `${ctaType}-${storeView}`,
                            children: ctaLabel
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                direction: {
                    base: "column",
                    sm: "row"
                },
                justifyContent: "center",
                spacing: "20px",
                sx: {
                    "> div": {
                        w: {
                            sm: `${100 / (items.length ?? 1)}%`
                        }
                    }
                },
                children: items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Item, {
                        ...item
                    }, index))
            })
        ]
    });
};
const Item = ({ image , content , cta_type: ctaType , cta_label: ctaLabel , cta_link: ctaLink , content_alignment: contentAlignment , link_to_file: linkToFile  })=>{
    var ref, ref1, ref2, ref3;
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        textAlign: contentAlignment,
        d: "flex",
        flexDirection: "column",
        w: "100%",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                ratio: ((image === null || image === void 0 ? void 0 : (ref = image.dimensions) === null || ref === void 0 ? void 0 : ref.width) ?? 1) / ((image === null || image === void 0 ? void 0 : (ref1 = image.dimensions) === null || ref1 === void 0 ? void 0 : ref1.height) ?? 1),
                w: "100%",
                maxW: "1920px",
                mx: "auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image.url ?? shared/* IMAGE_PLACEHOLDER */.no,
                    width: ((ref2 = image.dimensions) === null || ref2 === void 0 ? void 0 : ref2.width) ?? 200,
                    height: ((ref3 = image.dimensions) === null || ref3 === void 0 ? void 0 : ref3.height) ?? 200,
                    alt: image.alt ?? "",
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                sx: contentStyles,
                my: "15px",
                flex: "1",
                mx: "auto",
                children: external_prismic_reactjs_.RichText.render(content)
            }),
            linkToFile.url ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                href: linkToFile.url,
                isExternal: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    as: "a",
                    variant: `${ctaType}-${storeView}`,
                    children: ctaLabel
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: ctaLabel && ctaLink && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: ctaLink,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            as: "a",
                            variant: `${ctaType}-${storeView}`,
                            children: ctaLabel
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/image-slider.tsx




const ImageSlider = ({ items  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        borderWidth: "1px",
        width: "100%",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            display: "flex",
            width: "100%",
            children: items.map((element)=>{
                var ref, ref1;
                const { image_slider_title: title , image_slider_description: description , image_slider_image: image ,  } = element;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    width: "100%",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: title
                        }),
                        description && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                children: description
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.url ?? shared/* IMAGE_PLACEHOLDER */.no,
                            width: ((ref = image.dimensions) === null || ref === void 0 ? void 0 : ref.width) ?? 200,
                            height: ((ref1 = image.dimensions) === null || ref1 === void 0 ? void 0 : ref1.height) ?? 200,
                            alt: image.alt ?? "",
                            layout: "responsive",
                            objectFit: "contain"
                        })
                    ]
                }, image.url);
            })
        })
    });
};

// EXTERNAL MODULE: external "instagram-gallery"
var external_instagram_gallery_ = __webpack_require__(1403);
;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/instagram-feed.tsx





const InstagramFeed = ({ primary  })=>{
    const { title , text_before_title: textBeforeTitle , token , image_count: count ,  } = primary;
    if (!token) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        w: "full",
        textAlign: "center",
        children: [
            textBeforeTitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                as: "h6",
                textTransform: "uppercase",
                mb: "5px",
                fontSize: "lg",
                lineHeight: "1.5",
                color: "secondary.400",
                children: textBeforeTitle
            }),
            title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                mb: "25px",
                color: "secondary.600",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                sx: feedStyles,
                children: /*#__PURE__*/ jsx_runtime_.jsx(shared/* ErrorBoundary */.SV, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_instagram_gallery_.InstagramGallery, {
                        accessToken: token,
                        count: count ?? 6
                    })
                })
            })
        ]
    });
};
const feedStyles = {
    ".instagram": {
        "&-gallery": {
            display: "grid",
            gridTemplateColumns: {
                base: "repeat(3, 1fr)",
                lg: "repeat(6, 1fr)"
            },
            gridGap: "24px"
        },
        "&-item": {
            "img, video": {
                aspectRatio: "1"
            }
        }
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/two-columns.tsx






/* New Slice Name: Double Image with Text */ const TwoColumns = ({ primary  })=>{
    var ref, ref1;
    const { image , link_url: linkUrl , link_label: linkLabel , content , title , text_before_title: textBeforeTitle , align_image_right: alignImageRight , content_alignment: alignment , cta_type: ctaType , image_shadow_color: imageShadowColor , bg_image: bgImage , display_default_bg: displayDefaultBg , cta_text_color: ctaTextColor ,  } = primary;
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        w: "full",
        bg: `url(${bgImage.url}) no-repeat center / cover`,
        sx: displayDefaultBg ? two_columns_bgStyles : undefined,
        pt: "55px",
        pb: "30px",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
            as: react_.Container,
            columns: {
                base: 1,
                md: 2
            },
            maxW: "container.xl",
            spacing: {
                base: "40px",
                md: "0"
            },
            sx: alignImageRight ? alignImageRightStyles : undefined,
            alignItems: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    className: "image",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                        ratio: (((ref = image.dimensions) === null || ref === void 0 ? void 0 : ref.width) ?? 1) / (((ref1 = image.dimensions) === null || ref1 === void 0 ? void 0 : ref1.height) ?? 1),
                        w: "78%",
                        mx: "auto",
                        zIndex: "1",
                        _after: {
                            content: `''`,
                            position: "absolute",
                            top: "-25px",
                            left: "-6.7%",
                            width: "100%",
                            height: "100%",
                            backgroundColor: imageShadowColor ?? "secondary.100",
                            zIndex: "-1"
                        },
                        children: image.url && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: image.url,
                            alt: image.alt ?? "",
                            layout: "fill",
                            objectFit: "cover",
                            priority: true
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    className: "content",
                    textAlign: alignment,
                    px: {
                        base: "2vw",
                        lg: "5vw"
                    },
                    children: [
                        textBeforeTitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            as: "h6",
                            textTransform: "uppercase",
                            mb: "10px",
                            fontSize: "lg",
                            w: "100%",
                            children: textBeforeTitle
                        }),
                        title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            mb: "30px",
                            w: "100%",
                            children: title
                        }),
                        Boolean(content.length) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontSize: "lg",
                            color: "secondary.400",
                            mb: "20px",
                            lineHeight: "1.5",
                            children: external_prismic_reactjs_.RichText.render(content)
                        }),
                        linkUrl && linkLabel && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: linkUrl,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: "a",
                                variant: `${ctaType}-${storeView}`,
                                fontSize: "lg",
                                color: ctaTextColor ?? undefined,
                                children: linkLabel
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const alignImageRightStyles = {
    ".image": {
        gridColumn: {
            base: undefined,
            md: "2"
        }
    },
    ".content": {
        gridRow: {
            base: undefined,
            md: "1"
        },
        gridColumn: {
            base: undefined,
            md: "1"
        }
    }
};
const bgElement = {
    content: `''`,
    left: "0",
    right: "0",
    zIndex: "-1",
    display: "block",
    pos: "absolute"
};
const two_columns_bgStyles = {
    pos: "relative",
    zIndex: "1",
    _before: {
        ...bgElement,
        top: "-160px",
        mx: "auto",
        bg: "url(./images/bg-top.webp)",
        w: "680px",
        h: "770px"
    },
    _after: {
        ...bgElement,
        top: "0",
        w: "650px",
        h: "740px",
        bg: "url(./images/bg-left.webp)"
    }
};

// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(8924);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/video.tsx






const Video = ({ primary  })=>{
    const { 0: playing , 1: setPlaying  } = (0,external_react_.useState)(false);
    const { video_url: videoUrl , content , image , title  } = primary;
    if (!videoUrl.embed_url) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
        w: "100%",
        ratio: 16 / 9,
        h: "590px",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
                    url: videoUrl.embed_url,
                    width: "100%",
                    height: "100%",
                    playing: playing
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                    bg: `url(${image.url}) no-repeat center / cover`,
                    opacity: playing ? "0" : "1",
                    onClick: ()=>setPlaying(!playing),
                    transition: "all ease-in-out 0.3s",
                    cursor: "pointer",
                    _hover: {
                        svg: {
                            fill: "circley.300",
                            opacity: "0.8"
                        }
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                        spacing: "20px",
                        color: "white",
                        children: [
                            title && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                as: "h3",
                                fontSize: {
                                    base: ". 8rem",
                                    md: "md",
                                    lg: "3xl"
                                },
                                textAlign: "center",
                                margin: {
                                    base: "0 22.5%",
                                    lg: "0 12.5%"
                                },
                                children: title
                            }),
                            Boolean(content.length) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                sx: {
                                    p: {
                                        fontSize: {
                                            base: "sm",
                                            lg: "lg"
                                        },
                                        textAlign: "center",
                                        margin: {
                                            base: "0 22.5%",
                                            lg: "0 12.5%"
                                        }
                                    }
                                },
                                children: external_prismic_reactjs_.RichText.render(content)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                as: fa_.FaPlayCircle,
                                w: {
                                    base: "50px",
                                    lg: "70px"
                                },
                                h: {
                                    base: "50px",
                                    lg: "70px"
                                },
                                fill: "white",
                                transition: "all ease-in-out 0.3s"
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/download-image-link.tsx






const DownloadImageLink = ({ primary  })=>{
    var ref, ref1, ref2, ref3;
    const { image , content , link_to_file: linkToFile  } = primary;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        maxW: "container.xl",
        children: [
            linkToFile.url ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                href: linkToFile.url,
                isExternal: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image.url ?? shared/* IMAGE_PLACEHOLDER */.no,
                    width: ((ref = image.dimensions) === null || ref === void 0 ? void 0 : ref.width) ?? 200,
                    height: ((ref1 = image.dimensions) === null || ref1 === void 0 ? void 0 : ref1.height) ?? 200,
                    alt: image.alt ?? "",
                    layout: "responsive",
                    objectFit: "contain"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: image.url ?? shared/* IMAGE_PLACEHOLDER */.no,
                width: ((ref2 = image.dimensions) === null || ref2 === void 0 ? void 0 : ref2.width) ?? 200,
                height: ((ref3 = image.dimensions) === null || ref3 === void 0 ? void 0 : ref3.height) ?? 200,
                alt: image.alt ?? "",
                layout: "responsive",
                objectFit: "contain"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                sx: contentStyles,
                children: external_prismic_reactjs_.RichText.render(content)
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ../../node_modules/next/script.js
var script = __webpack_require__(5847);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(264);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(5828);
;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/html-snippet.tsx








const ScriptComponent = ({ src  })=>{
    const id = (0,external_react_.useMemo)(()=>(0,external_uuid_.v4)(), []);
    const containerRef = (0,external_react_.useRef)(null);
    const moveScript = ()=>{
        const iframe = document.querySelector("iframe._lpSurveyEmbed");
        if (iframe) {
            var ref;
            containerRef === null || containerRef === void 0 ? void 0 : (ref = containerRef.current) === null || ref === void 0 ? void 0 : ref.appendChild(iframe);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        ref: containerRef,
        id: `script-container${id}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
            id: "script",
            type: "text/javascript",
            src: src,
            async: true,
            onLoad: moveScript
        })
    });
};
const useHtmlSnippet = ({ html  })=>{
    const getScriptTagRegExp = RegExp(/<script src="(.*)<\/script>/gi);
    const scriptsWithSrc = html === null || html === void 0 ? void 0 : html.match(getScriptTagRegExp);
    const getScriptUrlsRegex = RegExp(/src="(.*)"><\/script>/);
    const scriptUrls = scriptsWithSrc === null || scriptsWithSrc === void 0 ? void 0 : scriptsWithSrc.map((script)=>{
        var ref;
        return (ref = script.match(getScriptUrlsRegex)) === null || ref === void 0 ? void 0 : ref[1];
    });
    const finalHtml = html === null || html === void 0 ? void 0 : html.replace(getScriptTagRegExp, "");
    return {
        finalHtml,
        scriptUrls
    };
};
const HtmlSnippet = ({ primary  })=>{
    const { html , scripts  } = primary;
    const { finalHtml , scriptUrls  } = useHtmlSnippet({
        html: html ?? ""
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        w: "100%",
        children: [
            scripts && /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: external_html_react_parser_default()(scripts)
            }),
            html && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                pt: 5,
                w: "100%",
                dangerouslySetInnerHTML: {
                    __html: finalHtml ?? ""
                }
            }),
            scriptUrls === null || scriptUrls === void 0 ? void 0 : scriptUrls.map((nextScriptUrl, i)=>{
                if (!nextScriptUrl) {
                    return null;
                }
                return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ScriptComponent, {
                        src: nextScriptUrl
                    })
                }, `${nextScriptUrl}${i}`);
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/store-locator.tsx



const StoreLocator = ({ primary  })=>{
    const { enable_store_locator: enabled  } = primary;
    if (!enabled) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "text/javascript",
                        id: "googlemapsscript",
                        src: "//maps.googleapis.com/maps/api/js?key=AIzaSyCkR0_4pzkvhlmwqENprXhs3s2HKCM_WQQ&libraries=places"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        type: "text/javascript",
                        id: "storelocatorscript",
                        "data-uid": "YJo8fTa6ixxs9Xiag1LzufBv7RQqjPNK",
                        src: "//cdn.storelocatorwidgets.com/widget/widget.js"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                id: "storelocatorwidget",
                sx: locatorStyles,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.storelocatorwidgets.com",
                            children: "Loading Store Locator Software"
                        }),
                        "..."
                    ]
                })
            })
        ]
    });
};
const locatorStyles = {
    w: "100%",
    minH: "500px",
    border: "none !important"
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/faq-widget.tsx


const FaqWidget = ({ primary  })=>{
    const { enable_widget: enableWidget  } = primary;
    if (!enableWidget) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    src: "https://cdn.commoninja.com/sdk/latest/commonninja.js",
                    defer: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "commonninja_component pid-01d3f993-ab46-49b4-a2f1-a553eb1b55bd"
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/slice-resolver.tsx





















const SliceResolver = ({ slice , index , heroCarouselRootProps  })=>{
    switch(slice.slice_type){
        case "image_object":
            return /*#__PURE__*/ jsx_runtime_.jsx(ImageObject, {
                ...slice
            });
        case "image_slider":
            return /*#__PURE__*/ jsx_runtime_.jsx(ImageSlider, {
                ...slice
            });
        case "rich_text":
            return /*#__PURE__*/ jsx_runtime_.jsx(RichText, {
                ...slice
            });
        case "hero":
            return /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
                ...slice,
                carouselRootProps: heroCarouselRootProps
            });
        case "content_columns":
            return /*#__PURE__*/ jsx_runtime_.jsx(ContentColumns, {
                ...slice,
                index: index
            });
        case "two_columns":
            return /*#__PURE__*/ jsx_runtime_.jsx(TwoColumns, {
                ...slice
            });
        case "instagram_feed":
            return /*#__PURE__*/ jsx_runtime_.jsx(InstagramFeed, {
                ...slice
            });
        case "featured_products":
            return /*#__PURE__*/ jsx_runtime_.jsx(FeaturedProducts, {
                ...slice
            });
        case "header_image":
            return /*#__PURE__*/ jsx_runtime_.jsx(HeaderImage, {
                ...slice
            });
        case "divider":
            return /*#__PURE__*/ jsx_runtime_.jsx(Divider, {
                ...slice
            });
        case "image_and_content":
            return /*#__PURE__*/ jsx_runtime_.jsx(ImageContent, {
                ...slice
            });
        case "cms_navigation":
            return /*#__PURE__*/ jsx_runtime_.jsx(CmsNavigation, {
                ...slice
            });
        case "video":
            return /*#__PURE__*/ jsx_runtime_.jsx(Video, {
                ...slice
            });
        case "faqs_grid":
            return /*#__PURE__*/ jsx_runtime_.jsx(FaqsGrid, {
                ...slice
            });
        case "carousel":
            return /*#__PURE__*/ jsx_runtime_.jsx(Carousel, {
                ...slice
            });
        case "download_image_link":
            return /*#__PURE__*/ jsx_runtime_.jsx(DownloadImageLink, {
                ...slice
            });
        case "html_snippet":
            return /*#__PURE__*/ jsx_runtime_.jsx(HtmlSnippet, {
                ...slice
            });
        case "store_locator":
            return /*#__PURE__*/ jsx_runtime_.jsx(StoreLocator, {
                ...slice
            });
        case "faq_widget":
            return /*#__PURE__*/ jsx_runtime_.jsx(FaqWidget, {
                ...slice
            });
        default:
            return null;
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/slices/index.ts





















;// CONCATENATED MODULE: ../../packages/prismic/src/components/prismic-page-resolver.tsx


const PrismicPageResolver = (props)=>{
    switch(props.type){
        case "serial_number_page":
            return /*#__PURE__*/ jsx_runtime_.jsx(PrismicSerialNumberPage, {
                ...props
            });
        case "page":
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(PrismicPage, {
                ...props
            });
    }
};

;// CONCATENATED MODULE: ../../packages/prismic/src/components/index.ts









;// CONCATENATED MODULE: ../../packages/prismic/src/index.tsx





;// CONCATENATED MODULE: ../../packages/prismic/index.ts



/***/ }),

/***/ 6553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "An": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.An),
/* harmony export */   "Ar": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.Ar),
/* harmony export */   "F3": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.F3),
/* harmony export */   "Ls": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.Ls),
/* harmony export */   "SV": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.SV),
/* harmony export */   "m0": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.m0),
/* harmony export */   "no": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.no),
/* harmony export */   "or": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.or),
/* harmony export */   "rS": () => (/* reexport safe */ _src__WEBPACK_IMPORTED_MODULE_0__.rS)
/* harmony export */ });
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4774);



/***/ }),

/***/ 2885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rE": () => (/* reexport */ AffirmLabel),
  "SV": () => (/* reexport */ ErrorBoundary),
  "Ar": () => (/* reexport */ Layout),
  "or": () => (/* reexport */ Main)
});

// UNUSED EXPORTS: AffirmScript, Footer, Header, LangSwitch, LogoSvg

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/affirm"
var affirm_ = __webpack_require__(9704);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ../../packages/shared/src/components/affirm-script.tsx



const AffirmScript = ()=>{
    const { config  } = (0,affirm_.useAffirmConfig)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: (config === null || config === void 0 ? void 0 : config.api_key_public) && config.api_url && /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                children: `
              window._affirm_config = {
                public_api_key: "${config === null || config === void 0 ? void 0 : config.api_key_public}",
                script: "${config.api_url}/js/v2/affirm.js",
              };
              (function(m,g,n,d,a,e,h,c){var b=m[n]||{},k=document.createElement(e),p=document.getElementsByTagName(e)[0],l=function(a,b,c){return function(){a[b]._.push([c,arguments])}};b[d]=l(b,d,"set");var f=b[d];b[a]={};b[a]._=[];f._=[];b._=[];b[a][h]=l(b,a,h);b[c]=function(){b._.push([h,arguments])};a=0;for(c="set add save post open empty reset on off trigger ready setProduct".split(" ");a<c.length;a++)f[c[a]]=l(b,d,c[a]);a=0;for(c=["get","token","url","items"];a<c.length;a++)f[c[a]]=function(){};k.async=
              !0;k.src=g[e];p.parentNode.insertBefore(k,p);delete g[e];f(g);m[n]=b})(window,_affirm_config,"affirm","checkout","ui","script","ready","jsReady");
            `
            }, "affirm-script")
        })
    });
};
/* harmony default export */ const affirm_script = (AffirmScript);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ../../packages/shared/src/components/affirm-label.tsx





const AffirmLabel = ({ affirmPrice  })=>{
    const { config  } = (0,affirm_.useAffirmConfig)();
    const { loaded: affirmLoaded  } = (0,affirm_.useAffirmLoaded)();
    (0,external_react_.useEffect)(()=>{
        var ref, ref1, ref2;
        // @ts-expect-error
        affirmLoaded && ((ref = window.affirm) === null || ref === void 0 ? void 0 : (ref1 = ref.ui) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.refresh) === null || ref2 === void 0 ? void 0 : ref2.call(ref1));
    }, [
        affirmLoaded
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(affirm_script, {}),
            affirmLoaded && affirmPrice && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                className: "affirm-as-low-as",
                "data-page-type": "product",
                "data-amount": getProductPriceCentValue(affirmPrice),
                mb: 5
            })
        ]
    });
};
const getProductPriceCentValue = (price)=>{
    return price * 100;
};

// EXTERNAL MODULE: external "@wpro/prismic"
var prismic_ = __webpack_require__(4703);
// EXTERNAL MODULE: ../../packages/prismic/index.ts + 46 modules
var prismic = __webpack_require__(9727);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/hooks"
var hooks_ = __webpack_require__(32);
;// CONCATENATED MODULE: ../../packages/shared/src/components/footer/components/menu-desktop.tsx




const MenuDesktop = ({ menu  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        flexGrow: 1,
        pt: "40px",
        display: {
            base: "none",
            sm: "block"
        },
        pl: {
            base: "0",
            lg: "60px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
            justifyContent: "space-around",
            spacing: [
                "30px",
                "0"
            ],
            columns: {
                base: 2,
                lg: 4
            },
            textAlign: {
                base: "center",
                lg: "left"
            },
            children: menu === null || menu === void 0 ? void 0 : menu.map((menuColumn, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    mb: {
                        base: "40px",
                        lg: "0"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            fontSize: "18px",
                            textTransform: "uppercase",
                            color: isReinsman ? "reinsman.200" : isHighHorse ? "highhorse.300" : "secondary.600",
                            mb: "20px",
                            fontFamily: isHighHorse ? "highHorse" : "body",
                            children: menuColumn.primary.header
                        }),
                        menuColumn.items.map((item, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mb: "15px",
                                children: item.url && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: item.url,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                        fontSize: "15px",
                                        color: isHighHorse ? "highhorse.200" : "secondary.400",
                                        _hover: {
                                            color: "circley.300"
                                        },
                                        fontFamily: isHighHorse ? "highHorse" : "body",
                                        children: item.label
                                    })
                                })
                            }, index);
                        })
                    ]
                }, index);
            })
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/footer/components/menu-mobile.tsx




const MenuMobile = ({ menu  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Accordion, {
        allowMultiple: true,
        display: {
            base: "block",
            sm: "none"
        },
        pt: "20px",
        children: menu === null || menu === void 0 ? void 0 : menu.map((menuColumn, i)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionItem, {
                border: "none",
                alignItems: "center",
                textAlign: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionButton, {
                            _hover: {
                                bg: "transparent"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                flex: "1",
                                fontSize: "18px",
                                textTransform: "uppercase",
                                color: isHighHorse ? "highhorse.300" : isTucker ? "secondary.300" : "secondary.600",
                                mb: "20px",
                                fontFamily: isHighHorse ? "highHorse" : "body",
                                fontWeight: "400",
                                children: menuColumn.primary.header
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionPanel, {
                        pb: 4,
                        children: menuColumn.items.map((item, index)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                mb: "15px",
                                children: item.url && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: item.url,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                        fontSize: "15px",
                                        color: isHighHorse ? "highhorse.200" : isTucker ? "secondary.500" : "secondary.400",
                                        _hover: {
                                            color: "circley.300"
                                        },
                                        fontFamily: isHighHorse ? "highHorse" : "body",
                                        children: item.label
                                    })
                                })
                            }, index);
                        })
                    })
                ]
            }, i);
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/footer/components/subscribe-form.tsx




const SubscribeForm = ()=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const toast = (0,react_.useToast)();
    const handleChange = (e)=>{
        setEmail(e.target.value);
    };
    const isValidEmail = (email)=>{
        return /\S+@\S+\.\S+/.test(email);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!isValidEmail(e.target.email.value)) {
            toast({
                title: "Email is invalid",
                status: "error",
                duration: 4000,
                isClosable: true
            });
            return;
        }
        setIsLoading(true);
        const endpoint = "/api/newsletter";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: e.target.email.value
            })
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();
        if (result.success) {
            setEmail("");
            setIsLoading(false);
            toast({
                title: "Thanks for subscribing!",
                status: "success",
                duration: 4000,
                isClosable: true
            });
        }
        if (result.error) {
            setEmail("");
            setIsLoading(false);
            toast({
                title: "Error",
                status: "error",
                duration: 4000,
                isClosable: true
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: "inline-block",
        mb: "20px",
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                mt: "10px",
                display: {
                    md: "flex"
                },
                maxW: "xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                        id: "email",
                        marginEnd: "-1px",
                        color: "gray.600",
                        ml: {
                            base: "0",
                            md: "20px"
                        },
                        mr: 2,
                        border: "transparent",
                        boxShadow: "1px 2px 0 #c4c3bc, inset 0 0 0 45px #fff !important",
                        borderRadius: "5px",
                        mb: {
                            base: "15px",
                            lg: "0"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                srOnly: true,
                                children: "Enter Email Address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                h: "45px",
                                width: "100%",
                                flex: "1",
                                bg: "white",
                                placeholder: "Enter Email Address",
                                onChange: handleChange,
                                type: "text",
                                name: "email",
                                value: email,
                                _placeholder: {
                                    color: isReinsman ? "gray.200" : "auto",
                                    fontSize: isReinsman ? "0.875rem" : "auto"
                                },
                                _focus: {
                                    boxShadow: "none"
                                },
                                _hover: {
                                    border: "transparent"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        type: "submit",
                        variant: isReinsman ? "secondary" : isHighHorse ? "highhorse" : isTucker ? "tucker" : "primary",
                        w: {
                            base: "full",
                            md: "auto"
                        },
                        size: "md",
                        disabled: isLoading,
                        isLoading: isLoading,
                        d: "block",
                        minW: "none",
                        px: 4,
                        children: "Submit"
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/footer/components/index.ts




// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
;// CONCATENATED MODULE: ../../packages/shared/src/components/footer/footer.tsx







const Footer = ()=>{
    const { document  } = (0,prismic_.useDocument)({
        uid: prismic/* EntityType.Footer */.py.Footer,
        types: [
            prismic/* EntityType.Footer */.py.Footer
        ]
    });
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    const { newsletter_text: newsletterText , social_media_text: socialMediaText , facebook_url: facebookUrl , instagram_url: instagramUrl , copyright_text: copyrightText , body: menu ,  } = (document === null || document === void 0 ? void 0 : document.data) ?? {};
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "footer",
        bgColor: "primary.50",
        p: "24px",
        pt: "40px",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            maxW: "1200px",
            margin: "auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    textAlign: "center",
                    children: [
                        newsletterText && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            fontSize: "25px",
                            fontFamily: isReinsman ? "reinsman" : isHighHorse ? "highHorse" : isTucker ? "tucker" : "heading",
                            textTransform: "uppercase",
                            color: isReinsman ? "reinsman.200" : isHighHorse ? "highhorse.300" : isTucker ? "secondary.300" : "secondary.600",
                            letterSpacing: "2.5px",
                            fontWeight: isHighHorse ? "700" : "400",
                            mb: {
                                base: "25px",
                                xl: "50px"
                            },
                            display: {
                                base: "block",
                                xl: "inline-block"
                            },
                            children: newsletterText
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SubscribeForm, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    h: "2px",
                    bg: "#dadad7",
                    w: "100%",
                    pos: "absolute",
                    left: "0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MenuDesktop, {
                    menu: menu
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MenuMobile, {
                    menu: menu
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontSize: "18px",
                    color: isHighHorse ? "highhorse.300" : "secondary.600",
                    my: "20px",
                    fontFamily: isHighHorse ? "highHorse" : "body",
                    children: socialMediaText
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    spacing: "15px",
                    mb: {
                        base: "0",
                        sm: "40px"
                    },
                    flexWrap: {
                        base: "wrap",
                        md: "nowrap"
                    },
                    direction: "row",
                    justifyContent: "center",
                    children: [
                        facebookUrl && /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            href: facebookUrl,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                w: "48px",
                                h: "48px",
                                alignItems: "center",
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    as: im_.ImFacebook,
                                    fill: isReinsman ? "reinsman.400" : isHighHorse ? "highhorse.400" : isTucker ? "tucker.400" : "circley.400",
                                    w: "20px",
                                    h: "20px"
                                })
                            })
                        }),
                        instagramUrl && /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            href: instagramUrl,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                w: "48px",
                                h: "48px",
                                alignItems: "center",
                                justify: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    as: im_.ImInstagram,
                                    fill: isReinsman ? "reinsman.400" : isHighHorse ? "highhorse.400" : isTucker ? "tucker.400" : "circley.400",
                                    w: "20px",
                                    h: "20px"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    justifyContent: "center",
                    alignItems: "center",
                    py: "40px",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        fontSize: "12px",
                        children: [
                            "\xa9 ",
                            copyrightText
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/footer/index.tsx


// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ../../packages/shared/src/constants.ts
var constants = __webpack_require__(3345);
// EXTERNAL MODULE: ../../packages/shared/src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(9700);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/services/localStorage"
var localStorage_ = __webpack_require__(2777);
;// CONCATENATED MODULE: ../../packages/shared/src/components/header/components/top-bar.tsx









const TopBar = ({ topItems , isHeaderCollapsed  })=>{
    const { isLoggedIn  } = (0,hooks_.useCustomer)();
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    const cartId = localStorage_.localStorage.get(constants/* CART_TOKEN_KEY */.iD);
    const { getStoreLogoSrcProps , getStoreUrl , getStoreLogoHoverSrcProps  } = (0,hooks/* useStoreData */.GE)();
    const logoHoverStyles = {
        position: "relative",
        h: {
            base: "75%",
            lg: "100%"
        },
        "span:last-child img": {
            opacity: "0"
        },
        "&:hover": {
            "span:first-child img": {
                opacity: "0"
            },
            "span:last-child img": {
                opacity: "1"
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        bg: isReinsman ? "reinsman.200" : isHighHorse ? "highhorse.100" : isTucker ? "tucker.200" : "black",
        display: isHeaderCollapsed ? "flex" : "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                mx: "20px",
                spacing: {
                    base: 2,
                    lg: 4
                },
                w: {
                    base: "100%",
                    lg: "auto"
                },
                h: {
                    base: "38px",
                    lg: "44px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cartId ? `${getStoreUrl("default")}?proxy=${cartId}` : `${getStoreUrl("default")}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                            width: "41px",
                            sx: logoHoverStyles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoSrcProps("default"),
                                    layout: "fill",
                                    objectFit: "contain"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoHoverSrcProps("default"),
                                    layout: "fill",
                                    objectFit: "contain"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        orientation: "vertical",
                        d: {
                            base: "block",
                            lg: "block"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cartId ? `${getStoreUrl("tucker")}?proxy=${cartId}` : `${getStoreUrl("tucker")}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                            width: "78px",
                            sx: logoHoverStyles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoSrcProps("tucker"),
                                    layout: "fill",
                                    objectFit: "contain"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoHoverSrcProps("tucker"),
                                    layout: "fill",
                                    objectFit: "contain"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        orientation: "vertical",
                        d: {
                            base: "block",
                            lg: "block"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cartId ? `${getStoreUrl("reinsman")}?proxy=${cartId}` : `${getStoreUrl("reinsman")}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                            width: "78px",
                            sx: logoHoverStyles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoSrcProps("reinsman"),
                                    layout: "fill",
                                    objectFit: "contain"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoHoverSrcProps("reinsman"),
                                    layout: "fill",
                                    objectFit: "contain"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        orientation: "vertical",
                        d: {
                            base: "block",
                            lg: "block"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: cartId ? `${getStoreUrl("highhorse")}?proxy=${cartId}` : `${getStoreUrl("highhorse")}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                            width: "78px",
                            sx: logoHoverStyles,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoSrcProps("highhorse"),
                                    layout: "fill",
                                    objectFit: "contain"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    ...getStoreLogoHoverSrcProps("highhorse"),
                                    layout: "fill",
                                    objectFit: "contain"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                fontSize: [
                    "0.875rem",
                    "0.9375rem"
                ],
                display: {
                    base: "none",
                    lg: "flex"
                },
                position: "relative",
                zIndex: "1",
                justifyContent: "right",
                fontWeight: "400",
                pl: [
                    "7px",
                    "0"
                ],
                pr: "30px",
                pt: "12px",
                pb: "10px",
                textAlign: "center",
                ml: "auto",
                children: [
                    topItems === null || topItems === void 0 ? void 0 : topItems.map((item, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.url,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                fontFamily: isHighHorse ? "highHorse" : "body",
                                color: isHighHorse || isTucker ? "primary.50" : "secondary.100",
                                mx: "10px",
                                _hover: {
                                    textDecoration: "none",
                                    color: isHighHorse ? "highhorse.400" : isTucker ? "tucker.100" : "circley.300"
                                },
                                children: item.label
                            })
                        }, i);
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/customer/account/${isLoggedIn ? "dashboard" : "login"}`,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            fontFamily: isHighHorse ? "highHorse" : "body",
                            color: isHighHorse || isTucker ? "primary.50" : "secondary.100",
                            mx: "10px",
                            _hover: {
                                textDecoration: "none",
                                color: isHighHorse ? "highhorse.400" : isTucker ? "tucker.100" : "circley.300"
                            },
                            children: "My Account"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/header/components/mega-menu.tsx






const MegaMenu = ({ uid , isHeaderCollapsed  })=>{
    const { document  } = (0,prismic_.useDocument)({
        uid,
        types: [
            prismic/* EntityType.MegaMenu */.py.MegaMenu
        ]
    });
    const { column_1: col1 , column_2: col2 , column_3: col3 , column_4: col4 ,  } = (document === null || document === void 0 ? void 0 : document.data) ?? {};
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        className: "mega-menu",
        pos: "absolute",
        top: "100%",
        left: isHeaderCollapsed ? `-17.6vw` : "0",
        w: isHeaderCollapsed ? {
            base: "103vw",
            xl: "107.5vw"
        } : "100%",
        bg: "primary.100",
        opacity: ".969",
        d: "none",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
            columns: 4,
            gap: "24px",
            maxW: "container.lg",
            m: "50px auto",
            px: "12px",
            children: [
                (col1 === null || col1 === void 0 ? void 0 : col1.length) && Boolean((col1 === null || col1 === void 0 ? void 0 : col1.length) > 0) && /*#__PURE__*/ jsx_runtime_.jsx(LinkList, {
                    col: col1
                }),
                (col2 === null || col2 === void 0 ? void 0 : col2.length) && Boolean((col2 === null || col2 === void 0 ? void 0 : col2.length) > 0) && /*#__PURE__*/ jsx_runtime_.jsx(LinkList, {
                    col: col2
                }),
                (col3 === null || col3 === void 0 ? void 0 : col3.length) && Boolean((col3 === null || col3 === void 0 ? void 0 : col3.length) > 0) && /*#__PURE__*/ jsx_runtime_.jsx(LinkList, {
                    col: col3
                }),
                (col4 === null || col4 === void 0 ? void 0 : col4.length) && Boolean((col4 === null || col4 === void 0 ? void 0 : col4.length) > 0) && /*#__PURE__*/ jsx_runtime_.jsx(LinkList, {
                    col: col4
                })
            ]
        })
    });
};
const LinkList = ({ col  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        sx: {
            ".child-item": {
                "+ .main-item": {
                    mt: "35px"
                }
            }
        },
        children: col === null || col === void 0 ? void 0 : col.map((item, i)=>{
            const { storeView  } = (0,hooks_.useCoreContext)();
            const isReinsman = storeView === "reinsman";
            const isHighHorse = storeView === "highhorse";
            const isTucker = storeView === "tucker";
            const isMainNav = item.is_parent_category;
            if (!(item === null || item === void 0 ? void 0 : item.link_url)) return null;
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: item.link_url,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                    d: "block",
                    variant: isMainNav ? isReinsman ? "reinsmanParentNav" : isHighHorse ? "highHorseParentNav" : isTucker ? "tuckerParentNav" : "parentNav" : isReinsman ? "reinsmanChildNav" : isHighHorse ? "highHorseChildNav" : isTucker ? "tuckerChildNav" : "childNav",
                    mb: isMainNav ? "20px" : "5px",
                    className: isMainNav ? "main-item" : "child-item",
                    children: item.link_title
                })
            }, i);
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/header/components/navigation.tsx





const Navigation = ({ menuItems , isHeaderCollapsed  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Wrap, {
        justify: "center",
        spacing: "25px",
        display: {
            base: "none",
            lg: "block"
        },
        pos: "relative",
        px: "12px",
        pt: isReinsman ? "25px" : isHeaderCollapsed ? "25px" : "0",
        w: "100%",
        children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map((item, i)=>{
            var ref, ref1;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.WrapItem, {
                my: "0 !important",
                py: "16px",
                _hover: {
                    "> .mega-menu": {
                        d: "block"
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: item.url,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            variant: isReinsman ? "reinsmanNav" : isHighHorse ? "highHorseNav" : isTucker ? "tuckerNav" : "nav",
                            fontSize: "0.9375rem",
                            children: item.label
                        })
                    }),
                    ((ref = item.menu) === null || ref === void 0 ? void 0 : ref.uid) && /*#__PURE__*/ jsx_runtime_.jsx(MegaMenu, {
                        uid: (ref1 = item.menu) === null || ref1 === void 0 ? void 0 : ref1.uid,
                        isHeaderCollapsed: isHeaderCollapsed
                    })
                ]
            }, i);
        })
    });
};

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/shared/hooks"
var shared_hooks_ = __webpack_require__(6156);
;// CONCATENATED MODULE: ../../packages/shared/src/components/header/components/search-box.tsx









const SearchBox = ({ withSuggestions  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    const intl = (0,external_react_intl_.useIntl)();
    const { value , products , totalCount , showSuggestions , isAwaiting , goToSearchPage , handleFormSubmit , handleInputBlur , handleInputChange , handleInputFocus ,  } = (0,shared_hooks_.useSearchBox)({
        withSuggestions
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        isReinsman: isReinsman,
        isHighHorse: isHighHorse,
        isTucker: isTucker,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleFormSubmit,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "text",
                            autoComplete: "off",
                            maxLength: 128,
                            placeholder: "Enter Search",
                            value: value,
                            onFocus: handleInputFocus,
                            onBlur: handleInputBlur,
                            onChange: handleInputChange,
                            variant: "unstyled"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            "aria-label": intl.formatMessage({
                                id: "action.search"
                            }),
                            variant: "unstyled",
                            color: "highhorse.400",
                            type: "submit",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            isLoading: isAwaiting,
                            borderRadius: "full",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.Search2Icon, {})
                        })
                    ]
                }),
                showSuggestions && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            products === null || products === void 0 ? void 0 : products.map((product)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: product.getUrlPath(),
                                        passHref: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    width: "50px",
                                                    height: "50px",
                                                    alt: "",
                                                    src: product.image.thumbnail.url
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: product.name
                                                })
                                            ]
                                        })
                                    })
                                }, product.id);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "button",
                                    onClick: ()=>goToSearchPage(),
                                    children: [
                                        "See more results (",
                                        totalCount,
                                        ")"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const Container = (styled_default()).div`
  position: relative;
  z-index: 1;
  width: 240px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 1200px) {
    width: 320px;
  }

  @media (min-width: 1440px) {
    width: 395px;
  }

  form {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: ${(props)=>props.theme.radii.md};
    box-shadow: 1px 2px 0 #c4c3bc;
    background: white;

    input {
      width: 100%;
      display: block;
      color: ${(props)=>props.theme.colors.gray["700"]};
      font-size: 15px;
      font-weight: normal;
      line-height: 20px;
      height: 44px;
      padding: 5px 20px 5px 25px;
      box-sizing: border-box;
      background: none;
      border: none;
      border-radius: 0;
      outline: none;

      &::placeholder {
        color: ${(props)=>props.isReinsman ? props.theme.colors.reinsman["200"] : props.theme.colors.gray["400"]};
      }
    }

    button {
      svg {
        color: ${(props)=>props.isReinsman ? props.theme.colors.reinsman["300"] : props.isHighHorse ? props.theme.colors.highhorse["400"] : props.isTucker ? props.theme.colors.tucker["400"] : props.theme.colors.circley["300"]};
        width: 1.3em;
        height: 1.3em;
      }
    }

    & + div {
      position: absolute;
      z-index: 1;
      top: 42px;
      left: 0;
      width: 100%;
      border: 1px solid ${(props)=>props.theme.colors.gray["100"]};
      border-radius: 5px;
      box-sizing: border-box;
      background: ${(props)=>props.theme.colors.white};
      box-shadow: 0 0 5px rgba(0 0 0 10%);

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        a {
          display: flex;
          align-items: center;
          width: 100%;
          color: ${(props)=>props.theme.colors.gray["700"]};
          font-size: 13px;
          padding: 10px;
          text-decoration: none;
          box-sizing: border-box;
          border-bottom: 1px solid ${(props)=>props.theme.colors.gray["100"]};

          img {
            margin: 0 15px 0 0;
          }
        }

        li {
          &:last-child {
            padding: 10px;
          }
        }

        button {
          display: block;
          cursor: pointer;
          font-size: 13px;
          width: 100%;
          border: none;
          padding: 10px;
          box-sizing: border-box;
          background: white;
        }
      }
    }
  }
`;

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/shared"
var shared_ = __webpack_require__(2623);
;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/search-box.tsx



const search_box_SearchBox = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(search_box_Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(shared_.SearchBox, {})
    });
};
const search_box_Container = (0,react_.chakra)(react_.Box, {
    baseStyle: {
        p: "18px 10px",
        form: {
            pos: "relative"
        },
        input: {
            d: "block",
            w: "100%",
            h: "45px",
            color: "secondary.600",
            fontSize: "md",
            fontWeight: "normal",
            lineHeight: "20px",
            p: "0 46px 0 16px",
            bg: "primary.50",
            borderRadius: "5px",
            boxShadow: "1px 2px 0 var(--chakra-colors-secondary-150)",
            border: "1px solid transparent",
            _placeholder: {
                color: "secondary.200"
            },
            _focus: {
                borderColor: "secondary.600"
            }
        },
        button: {
            pos: "absolute",
            top: "calc(50% - 20px)",
            right: "8px",
            svg: {
                w: "16px",
                h: "16px",
                color: "circley.300"
            }
        }
    }
});

;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/drawer-sub-menu.tsx





const DrawerSubMenu = ({ isOpen , onClose , url , label , children  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isHighHorse = storeView === "highhorse";
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Drawer, {
        size: "full",
        isOpen: isOpen,
        onClose: onClose,
        placement: "right",
        variant: "drawerSubMenu",
        children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerContent, {
                h: "100%",
                maxH: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerBody, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            position: "sticky",
                            bg: "white",
                            top: "0",
                            left: "0",
                            right: "0",
                            zIndex: "99",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                onClick: onClose,
                                justify: "center",
                                align: "center",
                                w: "100%",
                                px: "10px",
                                pos: "relative",
                                borderBottomWidth: "2px",
                                borderColor: "secondary.100",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        position: "absolute",
                                        left: "10px",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronLeft, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: url,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            variant: "nav",
                                            py: "18px",
                                            lineHeight: "1",
                                            fontSize: "0.9375rem",
                                            fontWeight: "bold",
                                            fontFamily: isHighHorse ? "highHorse" : "body",
                                            children: label
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            children: children
                        })
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/link-item.tsx





const LinkItem = ({ url , label , hasSubMenu , handleOpen , isCentered =false , isUserMenu  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "li",
        justify: isCentered ? "center" : undefined,
        align: "center",
        w: "100%",
        px: "10px",
        pos: "relative",
        onClick: handleOpen,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: url,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                    variant: isReinsman ? "reinsmanNav" : isHighHorse ? "highHorseNav" : isTucker ? "tuckerNav" : "nav",
                    py: "18px",
                    lineHeight: "1",
                    fontSize: "0.9375rem",
                    textTransform: isUserMenu ? "capitalize" : "uppercase",
                    children: label
                })
            }),
            hasSubMenu && /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "Next",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {}),
                variant: "unstyled",
                pos: "absolute",
                right: "10px",
                minW: "unset"
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/item-sub-menu.tsx




const ItemSubMenu = ({ url , label , children  })=>{
    const { isOpen , onClose , onOpen  } = (0,react_.useDisclosure)();
    const hasChildren = Boolean((children === null || children === void 0 ? void 0 : children.length) && (children === null || children === void 0 ? void 0 : children.length) > 0 && children[0].url !== "");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                url: url,
                label: label,
                hasSubMenu: hasChildren,
                handleOpen: onOpen
            }),
            hasChildren && /*#__PURE__*/ jsx_runtime_.jsx(DrawerSubMenu, {
                isOpen: isOpen,
                onClose: onClose,
                url: url,
                label: label,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                    divider: /*#__PURE__*/ jsx_runtime_.jsx(react_.StackDivider, {
                        borderColor: "secondary.100"
                    }),
                    spacing: "0",
                    children: children === null || children === void 0 ? void 0 : children.map((elem, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                            url: elem.url,
                            label: elem.label,
                            hasSubMenu: false
                        }, i);
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/drawer-menu-item.tsx








const DrawerMenuItem = ({ item  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isHighHorse = storeView === "highhorse";
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const { menu , url , label  } = item;
    const hasSubMenu = menu === null || menu === void 0 ? void 0 : menu.uid;
    const { document  } = (0,prismic_.useDocument)({
        uid: menu === null || menu === void 0 ? void 0 : menu.uid,
        types: [
            prismic/* EntityType.MegaMenu */.py.MegaMenu
        ]
    });
    const menuTree = getMenuElements({
        column_1: document === null || document === void 0 ? void 0 : document.data.column_1,
        column_2: document === null || document === void 0 ? void 0 : document.data.column_2,
        column_3: document === null || document === void 0 ? void 0 : document.data.column_3,
        column_4: document === null || document === void 0 ? void 0 : document.data.column_4
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                url: url,
                label: label,
                hasSubMenu: Boolean(hasSubMenu),
                handleOpen: onOpen,
                isCentered: true
            }),
            hasSubMenu && /*#__PURE__*/ jsx_runtime_.jsx(DrawerSubMenu, {
                url: url,
                label: label,
                isOpen: isOpen,
                onClose: onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                    divider: /*#__PURE__*/ jsx_runtime_.jsx(react_.StackDivider, {
                        borderColor: "secondary.100"
                    }),
                    spacing: "0",
                    fontFamily: isHighHorse ? "highHorse" : "body",
                    children: menuTree.map((item, i)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(ItemSubMenu, {
                            url: item.url,
                            label: item.label,
                            children: item.children
                        }, i);
                    })
                })
            })
        ]
    });
};
const getMenuElements = ({ column_1 , column_2 , column_3 , column_4  })=>{
    const elements = [
        ...column_1 ?? [],
        ...column_2 ?? [],
        ...column_3 ?? [],
        ...column_4 ?? [], 
    ];
    const menuTree = elements.reduce((acc, obj, index)=>{
        if (obj.is_parent_category) {
            acc.push({
                url: (obj === null || obj === void 0 ? void 0 : obj.link_url) ?? "",
                label: (obj === null || obj === void 0 ? void 0 : obj.link_title) ?? "",
                children: []
            });
        } else {
            var ref;
            const lastItem = acc.length - 1;
            (ref = acc[lastItem].children) === null || ref === void 0 ? void 0 : ref.push({
                url: (obj === null || obj === void 0 ? void 0 : obj.link_url) ?? "",
                label: (obj === null || obj === void 0 ? void 0 : obj.link_title) ?? ""
            });
        }
        return acc;
    }, []);
    return menuTree;
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/mobile-category-tree.tsx




const MobileCategoryTree = ({ menuItems  })=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isHighHorse = storeView === "highhorse";
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
        divider: /*#__PURE__*/ jsx_runtime_.jsx(react_.StackDivider, {
            borderColor: "secondary.100"
        }),
        borderBottom: "1px solid",
        borderColor: "secondary.100",
        spacing: "0",
        fontFamily: isHighHorse ? "highHorse" : "body",
        children: menuItems === null || menuItems === void 0 ? void 0 : menuItems.map((item, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(DrawerMenuItem, {
                item: item
            }, i);
        })
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/core/resources/constants"
var constants_ = __webpack_require__(5390);
;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/user-menu.tsx





const UserMenu = ({ topItems  })=>{
    const path = (0,hooks_.usePath)();
    const { customer , isFetching , isSessionDefined , isLoggedIn  } = (0,hooks_.useCustomer)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
        spacing: "0",
        w: "100%",
        my: "12px",
        children: [
            isFetching || !isSessionDefined ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "span",
                children: constants_.TEXT_PLACEHOLDER
            }) : isLoggedIn ? /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                url: path.CustomerDashboard,
                label: (customer === null || customer === void 0 ? void 0 : customer.firstName) ?? "",
                hasSubMenu: false,
                isCentered: true,
                isUserMenu: true
            }) : /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                url: path.AuthLogin,
                label: "My Account",
                hasSubMenu: false,
                isCentered: true,
                isUserMenu: true
            }),
            topItems === null || topItems === void 0 ? void 0 : topItems.map((item, i)=>{
                if (item.url === "/customer/account/login") {
                    return null;
                }
                return /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                    url: item.url,
                    label: item.label,
                    hasSubMenu: false,
                    isCentered: true,
                    isUserMenu: true
                }, i);
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/drawer-menu.tsx









const DrawerMenu = ({ isOpen , onClose , onToggle , menuItems , topItems  })=>{
    const router = (0,router_.useRouter)();
    const btnRef = (0,external_react_.useRef)(null);
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    (0,external_react_.useEffect)(()=>{
        onClose();
    }, [
        router.asPath,
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        display: {
            base: "flex",
            lg: "none"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                display: {
                    base: "block",
                    md: "flex"
                },
                alignItems: "center",
                variant: "unstyled",
                onClick: onToggle,
                ref: btnRef,
                ml: {
                    base: "10px",
                    md: "25px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                        as: isOpen ? fa_.FaTimes : fa_.FaBars,
                        w: 6,
                        h: 6,
                        color: isReinsman ? "reinsman.300" : isTucker ? "tucker.400" : "circley.300",
                        mt: "3px"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        px: "10px",
                        fontSize: {
                            base: "0.625rem",
                            md: "0.9375rem"
                        },
                        display: {
                            base: "block",
                            md: "inline-block"
                        },
                        mt: {
                            base: "-6px",
                            md: "0"
                        },
                        fontFamily: isHighHorse ? "highHorse" : "body",
                        children: "Shop"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Drawer, {
                isOpen: isOpen,
                onClose: onClose,
                finalFocusRef: btnRef,
                placement: "left",
                size: "full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                    h: "calc(100vh - 100px)",
                    top: "unset !important",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {
                            p: 0,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(search_box_SearchBox, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerBody, {
                            p: 0,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MobileCategoryTree, {
                                    menuItems: menuItems
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(UserMenu, {
                                    topItems: topItems
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/drawer-menu/index.ts


;// CONCATENATED MODULE: ../../packages/shared/src/components/header/header.tsx
















const Header = ()=>{
    const intl = (0,external_react_intl_.useIntl)();
    const path = (0,hooks_.usePath)();
    const { isOpen , onClose , onToggle  } = (0,react_.useDisclosure)();
    const { count  } = (0,hooks_.useCart)();
    const { storeView  } = (0,hooks_.useCoreContext)();
    const isReinsman = storeView === "reinsman";
    const isHighHorse = storeView === "highhorse";
    const isTucker = storeView === "tucker";
    const { document  } = (0,prismic_.useDocument)({
        uid: "header",
        types: [
            prismic/* EntityType.Nav */.py.Nav
        ]
    });
    const topItems = document === null || document === void 0 ? void 0 : document.data.top_bar;
    const menuItems = document === null || document === void 0 ? void 0 : document.data.nav_bar;
    const { 0: windowScrolled , 1: setWindowScrolled  } = (0,external_react_.useState)(false);
    const isHeaderCollapsed = getIsHeaderCollapsed({
        windowScrolled
    });
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const userScrolled = window.scrollY > 45;
            setWindowScrolled(userScrolled);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        pos: "relative",
        zIndex: "3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TopBar, {
                topItems: topItems,
                isHeaderCollapsed: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                as: "header",
                bg: "primary.50",
                w: "100%",
                pos: isHeaderCollapsed ? "fixed" : "sticky",
                top: isHeaderCollapsed ? "0" : "auto",
                minH: "50px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        templateColumns: {
                            base: "1fr 1fr 1fr",
                            md: "1fr 1fr",
                            lg: "1fr"
                        },
                        alignItems: "center",
                        pt: {
                            base: "0",
                            md: "23px",
                            lg: "0"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DrawerMenu, {
                                isOpen: isOpen,
                                onClose: onClose,
                                onToggle: onToggle,
                                menuItems: menuItems,
                                topItems: topItems
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                mx: {
                                    base: "0",
                                    lg: "auto"
                                },
                                w: "100%",
                                spacing: "5%",
                                pl: "15px",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: path.Home,
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                            borderRadius: 6,
                                            display: "inline-block",
                                            pos: {
                                                base: "absolute",
                                                lg: isHeaderCollapsed ? "relative" : "absolute"
                                            },
                                            left: "0",
                                            right: "0",
                                            top: isReinsman ? {
                                                base: "10%",
                                                md: "10%"
                                            } : isHighHorse ? {
                                                base: isHeaderCollapsed ? "0" : "5%",
                                                md: isHeaderCollapsed ? "0" : "-15%",
                                                lg: "-25%"
                                            } : {
                                                base: isHeaderCollapsed ? "0" : "5%",
                                                lg: "-20%"
                                            },
                                            mx: "auto",
                                            w: {
                                                base: isHighHorse ? "54px" : isTucker ? "90px" : "142px",
                                                md: isHeaderCollapsed ? isHighHorse ? "66px" : isTucker ? "110px" : "180px" : isHighHorse ? "100px" : isTucker ? "168px" : "230px",
                                                lg: isHighHorse ? "100px" : isTucker ? "168px" : isHeaderCollapsed ? "180px" : "230px"
                                            },
                                            mb: "5px",
                                            transition: "all ease 0.3s",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: isReinsman ? "/images/logos/reinsman-logo.png" : isHighHorse ? "/images/logos/highhorse-main-logo.png" : isTucker ? "/images/logos/tucker-logo.png" : "/images/logos/circley-main-logo.png",
                                                width: isReinsman ? "230px" : isHighHorse ? "100px" : isTucker ? "168px" : "257px",
                                                height: isReinsman ? "70px" : "84px"
                                            })
                                        })
                                    }),
                                    !isHeaderCollapsed && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        bg: "primary.50",
                                        h: {
                                            base: "50px",
                                            md: "65px"
                                        }
                                    }),
                                    isHeaderCollapsed && /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                        menuItems: menuItems,
                                        isHeaderCollapsed: isHeaderCollapsed
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                        minW: {
                                            base: "50px",
                                            md: "150px"
                                        },
                                        h: {
                                            base: "43px",
                                            md: "70px"
                                        },
                                        marginLeft: "auto",
                                        fontSize: {
                                            base: "0.625rem",
                                            md: "0.9375rem"
                                        },
                                        pos: isHeaderCollapsed ? {
                                            base: "absolute",
                                            lg: "relative"
                                        } : "absolute",
                                        right: {
                                            base: "0",
                                            md: "1.5vw"
                                        },
                                        top: isHeaderCollapsed ? "5px" : {
                                            base: "5px",
                                            lg: "0"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                display: {
                                                    base: "none",
                                                    lg: isHeaderCollapsed ? "none" : "block"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SearchBox, {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                                display: {
                                                    base: "block",
                                                    lg: "none"
                                                },
                                                onClick: onToggle,
                                                cursor: "pointer",
                                                textAlign: "center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.Search2Icon, {
                                                        mr: "10px",
                                                        mb: "5px",
                                                        h: {
                                                            base: "15px",
                                                            md: "20px"
                                                        },
                                                        w: {
                                                            base: "15px",
                                                            md: "20px"
                                                        },
                                                        color: isReinsman ? "reinsman.300" : isHighHorse ? "highhorse.400" : isTucker ? "tucker.400" : "circley.300"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                        display: {
                                                            base: "block",
                                                            md: "inline-block"
                                                        },
                                                        mt: "3px",
                                                        fontFamily: isHighHorse ? "highHorse" : "body",
                                                        children: "Search"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: path.Cart,
                                                passHref: true,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                                                    pr: {
                                                        base: "10px",
                                                        md: "20px"
                                                    },
                                                    pl: {
                                                        base: "5px",
                                                        md: "20px"
                                                    },
                                                    pb: isHeaderCollapsed ? "15px" : "0",
                                                    h: {
                                                        base: "40px",
                                                        md: "28px"
                                                    },
                                                    d: "block",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                                            as: im_.ImCart,
                                                            mr: "10px",
                                                            h: "20px",
                                                            w: "20px",
                                                            color: isReinsman ? "reinsman.300" : isHighHorse ? "highhorse.400" : isTucker ? "tucker.400" : "circley.300",
                                                            display: "inline-block"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                            display: {
                                                                base: "none",
                                                                md: "inline-block"
                                                            },
                                                            _hover: {
                                                                color: isReinsman ? "reinsman.300" : isHighHorse ? "highhorse.400" : isTucker ? "tucker.400" : "circley.300"
                                                            },
                                                            fontFamily: isHighHorse ? "highHorse" : "body",
                                                            children: [
                                                                "My Cart ",
                                                                count
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                            display: {
                                                                base: "block",
                                                                md: "none"
                                                            },
                                                            fontFamily: isHighHorse ? "highHorse" : "body",
                                                            children: [
                                                                "Cart ",
                                                                count
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !isHeaderCollapsed && /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                        menuItems: menuItems,
                        isHeaderCollapsed: isHeaderCollapsed
                    })
                ]
            })
        ]
    });
};
const getIsHeaderCollapsed = (params)=>{
    const { windowScrolled  } = params;
    if (windowScrolled) {
        return true;
    }
    return false;
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/header/index.tsx


;// CONCATENATED MODULE: ../../packages/shared/src/components/error-boundary.tsx


class ErrorBoundary extends (external_react_default()).Component {
    state = {
        hasError: false
    };
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Something went wrong."
            });
        }
        return this.props.children;
    }
}

;// CONCATENATED MODULE: ../../packages/shared/src/components/lang-switch.tsx



const LangSwitch = (props)=>{
    const { intl , setLocale , locale  } = useCoreContext();
    return /*#__PURE__*/ _jsx(Box, {
        ...props,
        children: /*#__PURE__*/ _jsx(Select, {
            value: locale,
            onChange: (e)=>{
                setLocale(e.target.value);
            },
            children: intl.map((el)=>{
                return /*#__PURE__*/ _jsx("option", {
                    value: el.code,
                    children: el.title
                }, el.code);
            })
        })
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/ui"
var ui_ = __webpack_require__(7448);
;// CONCATENATED MODULE: ../../packages/shared/src/components/layout.tsx






const Layout = ({ children  })=>{
    const { loading  } = (0,shared_.useRouteLoading)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                minHeight: "85vh",
                children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {}) : children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/logo-svg.tsx


const LogoSvg = (props)=>{
    return /*#__PURE__*/ _jsxs(Box, {
        as: "svg",
        w: "200px",
        h: "46px",
        viewBox: "0 0 123.36 28.49",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M26.52,10c.36,0,.48.13.48.48v7.92h4.07c.35,0,.48.13.48.48v.7c0,.35-.13.48-.48.48H25.71c-.35,0-.49-.13-.49-.48v-9.1c0-.35.14-.48.49-.48Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M35.1,13.44c0-2.31,1.46-3.7,4-3.7s4,1.39,4,3.7v3.08c0,2.31-1.47,3.7-4,3.7s-4-1.39-4-3.7Zm6.32,0c0-1.3-.81-2-2.27-2s-2.26.71-2.26,2v3.1c0,1.31.8,2,2.26,2s2.27-.72,2.27-2Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M55,14.5c.39,0,.48.13.48.48v1.9a3,3,0,0,1-1.06,2.36,4.35,4.35,0,0,1-3,.94c-2.59,0-4-1.39-4-3.7v-3.1c0-2.28,1.46-3.68,4-3.68,2,0,3.3.79,3.85,2.37a.43.43,0,0,1-.18.58l-.12,0L54.2,13c-.34.12-.48,0-.6-.3a2.06,2.06,0,0,0-2.17-1.3c-1.47,0-2.27.71-2.27,2v3.18c0,1.31.81,2,2.27,2s2.36-.67,2.36-1.65v-.74H51.62c-.36,0-.49-.14-.49-.49V15c0-.35.13-.48.49-.48Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M59.62,13.44c0-2.31,1.46-3.7,4-3.7s4,1.39,4,3.7v3.08c0,2.31-1.47,3.7-4,3.7s-4-1.39-4-3.7Zm6.31,0c0-1.3-.81-2-2.26-2s-2.27.71-2.27,2v3.1c0,1.31.81,2,2.27,2s2.26-.72,2.26-2Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M72.33,10.24c0-.22.07-.29.29-.29h.46c.22,0,.27.07.27.29v9.48c0,.22,0,.29-.27.29h-.46c-.22,0-.29-.07-.29-.29Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M82.46,10a3.14,3.14,0,1,1,0,6.28h-3v3.49c0,.22,0,.29-.26.29h-.47c-.21,0-.29-.07-.29-.29V10.24c0-.22.08-.29.29-.29Zm-.09,5.29a2.18,2.18,0,0,0,0-4.36h-3v4.36Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M93.41,9.75a3.61,3.61,0,0,1,3.72,2.18c.08.16,0,.29-.16.37l-.44.2c-.18.07-.25.06-.36-.13a2.72,2.72,0,0,0-2.76-1.64c-1.69,0-2.61.67-2.61,1.87a1.51,1.51,0,0,0,1.27,1.54,6.77,6.77,0,0,0,1.66.32,6.85,6.85,0,0,1,2,.41,2.24,2.24,0,0,1,1.56,2.37c0,1.87-1.36,3-3.86,3a3.61,3.61,0,0,1-3.83-2.43.27.27,0,0,1,.12-.36l0,0,.44-.16a.26.26,0,0,1,.35.15v0a2.86,2.86,0,0,0,2.86,1.8c1.89,0,2.82-.66,2.82-2a1.49,1.49,0,0,0-1.17-1.53,7.16,7.16,0,0,0-1.59-.28l-1.08-.14a8.68,8.68,0,0,1-1-.27,2.72,2.72,0,0,1-.89-.47,2.44,2.44,0,0,1-.8-1.91C89.79,10.89,91.1,9.75,93.41,9.75Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M102.68,16.59a2.78,2.78,0,0,0,5.55,0V10.24c0-.22.07-.29.29-.29H109c.22,0,.29.07.29.29v6.34c0,2.27-1.34,3.64-3.81,3.64s-3.81-1.37-3.81-3.64V10.24c0-.22.07-.29.28-.29h.47c.21,0,.28.07.28.29Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M123.07,10c.22,0,.29.07.29.29v9.48c0,.22-.07.29-.29.29h-.42c-.21,0-.28-.07-.28-.29V14a19.13,19.13,0,0,1,.17-2.51h-.06a18.13,18.13,0,0,1-1.09,2.21l-2.15,3.79a.36.36,0,0,1-.33.22h-.28a.38.38,0,0,1-.34-.22l-2.18-3.83a15.89,15.89,0,0,1-1-2.18h-.06a21.35,21.35,0,0,1,.16,2.53v5.76c0,.22-.07.29-.29.29h-.39c-.22,0-.29-.07-.29-.29V10.24c0-.22.07-.29.29-.29h.36a.4.4,0,0,1,.4.23l3.5,6.22,3.48-6.16c.11-.21.17-.24.39-.24Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8.73,17.79V25a1,1,0,0,1-2.09,0V17.8a1.79,1.79,0,0,0,1,.34A1.71,1.71,0,0,0,8.73,17.79Zm8.9-2.09a1,1,0,0,0-1,1V18a1,1,0,1,0,2.09,0V16.75a1,1,0,0,0-.94-1.05ZM4.37,20.53a1.79,1.79,0,0,1-1-.34v7.25a1,1,0,0,0,2.1,0h0v-7.2A1.86,1.86,0,0,1,4.37,20.53Zm10-7a1,1,0,0,0-1,1V20.1a1.05,1.05,0,1,0,2.1,0h0V14.6a1,1,0,0,0-.94-1,.43.43,0,0,0-.16,0Zm-3.32,2.14A1.8,1.8,0,0,1,10,15.33V22.6a1.05,1.05,0,1,0,2.1,0h0V15.34a1.74,1.74,0,0,1-1.1.35Zm-9,5.57V.93A.94.94,0,0,0,1.16,0H.94A.94.94,0,0,0,0,.93V21.24a.94.94,0,0,0,.94.94h.22A.94.94,0,0,0,2.1,21.24Zm2.38-1.48H4.26a.94.94,0,0,1-.94-.94V3.35a.94.94,0,0,1,.94-.93h.22a.94.94,0,0,1,.94.93V18.84a.94.94,0,0,1-.94.94Zm3.31-2.38H7.56a.93.93,0,0,1-.93-.93h0V5.75a.93.93,0,0,1,.92-.94h.24a.94.94,0,0,1,.93.94v10.7a.93.93,0,0,1-.93.93Zm3.31-2.45h-.21A.94.94,0,0,1,10,14V8.24a1,1,0,0,1,.88-1h.28a.94.94,0,0,1,.94.94V14a.94.94,0,0,1-.93.95h0Zm3.32-2.15H14.2a.94.94,0,0,1-.94-.94V10.35a.94.94,0,0,1,.94-.93h.22a.94.94,0,0,1,.94.93v1.49a.94.94,0,0,1-.93.94Z"
            })
        ]
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/modules/auth"
var auth_ = __webpack_require__(3914);
;// CONCATENATED MODULE: ../../packages/shared/src/components/main.tsx









const Main = ({ children , layout: LayoutComponent  })=>{
    const { onError  } = (0,hooks_.useCoreContext)();
    const { isLoading , storeConfigError  } = (0,hooks_.useMain)();
    const { document: maintenancePageDocument  } = (0,prismic_.useDocument)({
        uid: prismic/* EntityType.MaintenancePage */.py.MaintenancePage,
        types: [
            prismic/* EntityType.Page */.py.Page
        ]
    });
    (0,hooks/* useSharedCart */.Ov)();
    return /*#__PURE__*/ jsx_runtime_.jsx(shared_.ErrorBoundary, {
        onError: onError,
        layout: LayoutComponent,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                 true && /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Staging - Reinsman"
                    }, "title")
                }),
                storeConfigError ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: (maintenancePageDocument === null || maintenancePageDocument === void 0 ? void 0 : maintenancePageDocument.id) ? /*#__PURE__*/ jsx_runtime_.jsx(prismic/* PrismicPage */.dj, {
                        ...maintenancePageDocument
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(shared_.Maintenance, {})
                }) : isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(LayoutComponent, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {})
                }) : children,
                /*#__PURE__*/ jsx_runtime_.jsx(auth_.LoggedOutModal, {})
            ]
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/components/index.ts











/***/ }),

/***/ 3345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LZ": () => (/* binding */ COLOR_MAP_PRIMARY),
/* harmony export */   "iD": () => (/* binding */ CART_TOKEN_KEY),
/* harmony export */   "no": () => (/* binding */ IMAGE_PLACEHOLDER)
/* harmony export */ });
/* unused harmony export STORE_VIEWS */
const IMAGE_PLACEHOLDER = "/img/image-placeholder.svg";
const STORE_VIEWS = {
    default: "default",
    tucker: "tucker",
    reinsman: "reinsman",
    highhorse: "highhorse"
};
const CART_TOKEN_KEY = "cartToken";
const COLOR_MAP_PRIMARY = {
    default: "circley.300",
    circley: "circley.300",
    tucker: "tucker.400",
    reinsman: "default.300",
    highhorse: "highhorse.100"
};


/***/ }),

/***/ 9700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dx": () => (/* reexport */ useBrandLogoUrl),
  "Ov": () => (/* reexport */ useSharedCart),
  "s2": () => (/* reexport */ useStockStatus),
  "GE": () => (/* reexport */ useStoreData)
});

// UNUSED EXPORTS: getProcessNewsletterSignupKey, getProcessNewsletterSignupService, getStockStatusKey, getStockStatusQuery, getStockStatusService, mutation, useNewsletterSubscription

// EXTERNAL MODULE: external "@wpro/magento/dist/core/hooks"
var hooks_ = __webpack_require__(32);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../packages/shared/src/hooks/useStoreData.tsx



const useStoreData = ()=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const getStoreLogoHoverSrcProps = (0,external_react_.useCallback)((store)=>{
        const storeName = store === "default" ? "circle-y" : store;
        return {
            src: `/images/logos/${storeName}-logo.png`
        };
    }, []);
    const getStoreLogoSrcProps = (0,external_react_.useCallback)((store)=>{
        const storeName = store === "default" ? "circle-y" : store;
        const notCurrentSuffix = store !== storeView ? "-gray" : "";
        return {
            src: `/images/logos/${storeName}-logo${notCurrentSuffix}.png`
        };
    }, [
        storeView
    ]);
    const currentStoreUrl = (0,external_react_.useMemo)(()=>{
        const isReinsman = storeView === "reinsman";
        const isHighHorse = storeView === "highhorse";
        const isTucker = storeView === "tucker";
        const storeUrl = isReinsman ? "https://local-reinsman-fe.vercel.app/" : isHighHorse ? "https://local-highhorse-fe.vercel.app/" : isTucker ? "https://local-tucker-fe.vercel.app/" : "https://circley.local/";
        return storeUrl;
    }, [
        storeView
    ]);
    const getStoreUrl = (0,external_react_.useCallback)((store)=>{
        const isReinsman = store === "reinsman";
        const isHighHorse = store === "highhorse";
        const isTucker = store === "tucker";
        return isReinsman ? "https://local-reinsman-fe.vercel.app/" : isHighHorse ? "https://local-highhorse-fe.vercel.app/" : isTucker ? "https://local-tucker-fe.vercel.app/" : "https://circley.local/";
    }, []);
    return {
        getStoreLogoSrcProps,
        getStoreUrl,
        getStoreLogoHoverSrcProps,
        currentStoreUrl
    };
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/services/localStorage"
var localStorage_ = __webpack_require__(2777);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/data/quote/cart"
var cart_ = __webpack_require__(1290);
// EXTERNAL MODULE: ../../packages/shared/src/constants.ts
var constants = __webpack_require__(3345);
;// CONCATENATED MODULE: ../../packages/shared/src/hooks/useSharedCart.tsx






const useSharedCart = ()=>{
    var ref;
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const cartId = (ref = router.query.proxy) === null || ref === void 0 ? void 0 : ref.toString();
    (0,external_react_.useEffect)(()=>{
        if (cartId) {
            localStorage_.localStorage.set(constants/* CART_TOKEN_KEY */.iD, cartId);
            dispatch((0,cart_.fetchCart)(cartId));
        }
    }, [
        cartId
    ]);
};

;// CONCATENATED MODULE: ../../packages/shared/src/hooks/useBrandLogoUrl.tsx
const useBrandLogoUrl = (brand, use)=>{
    const brandCode = brand === null || brand === void 0 ? void 0 : brand.replace(/\s+/g, "-").toLowerCase();
    return `/images/logos/${brandCode}-${use}.webp`;
};

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/services/magento/client"
var client_ = __webpack_require__(9251);
;// CONCATENATED MODULE: ../../packages/shared/src/hooks/useStockStatus.tsx


const getStockStatusQuery = /* GraphQL */ `
  query getStockStatusQuery($sku: String) {
    products(filter: { sku: { eq: $sku } }) {
      items {
        sku
        mp_stock_status
        mp_stock_status_info {
          image
          is_apply_child
          label
        }
      }
    }
  }
`;
const getStockStatusKey = (params)=>{
    return [
        "useStockStatus",
        (params === null || params === void 0 ? void 0 : params.sku) ?? null
    ];
};
const getStockStatusService = async (params)=>{
    const { sku  } = params;
    const query = await client_.urql.query(getStockStatusQuery, {
        sku
    }, {
        preferGetMethod: true
    }).toPromise();
    return query === null || query === void 0 ? void 0 : query.data;
};
const useStockStatus = (params)=>{
    const result = (0,external_react_query_.useQuery)(getStockStatusKey(params), async ()=>await getStockStatusService(params), {
        enabled: Boolean(params === null || params === void 0 ? void 0 : params.sku)
    });
    return result;
};

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: external "@urql/core"
var core_ = __webpack_require__(8099);
;// CONCATENATED MODULE: ../../packages/shared/src/hooks/useNewsletterSubscription.tsx





const getProcessNewsletterSignupKey = ()=>{
    return "processNewsletterSignup";
};
const getProcessNewsletterSignupService = async (args)=>{
    var ref, ref1;
    const { client , params  } = args;
    const query = await client.mutation(mutation, params).toPromise();
    if (!(query === null || query === void 0 ? void 0 : (ref = query.data) === null || ref === void 0 ? void 0 : (ref1 = ref.subscribeEmailToNewsletter) === null || ref1 === void 0 ? void 0 : ref1.status)) {
        throw new Error("Error");
    }
    return query === null || query === void 0 ? void 0 : query.data;
};
const useNewsletterSubscription = (options)=>{
    const toast = useToast();
    const intl = useIntl();
    const { graphqlClient  } = useCoreContext();
    const { mutate: subscribeToNewsletter , isLoading: mutationLoading  } = useMutation(getProcessNewsletterSignupKey(), async (variables)=>{
        return await getProcessNewsletterSignupService({
            client: graphqlClient,
            params: variables
        });
    }, {
        onSuccess: ()=>{
            var ref;
            toast({
                title: "Thanks for subscribing!",
                status: "success",
                duration: 4000
            });
            options === null || options === void 0 ? void 0 : (ref = options.onSubscriptionSuccess) === null || ref === void 0 ? void 0 : ref.call(options);
        },
        onError: (err)=>{
            toast({
                title: intl.formatMessage({
                    id: "app.whoops"
                }),
                status: "error",
                duration: 4000
            });
        }
    });
    const isValidEmail = (email)=>{
        return /\S+@\S+\.\S+/.test(email);
    };
    return {
        subscribeToNewsletter,
        mutationLoading,
        isValidEmail
    };
};
const mutation = core_.gql`
  mutation subscribeEmailToNewsletter($email: String!, $captcha: String) {
    subscribeEmailToNewsletter(email: $email, captcha: $captcha) {
      status
    }
  }
`;

;// CONCATENATED MODULE: ../../packages/shared/src/hooks/index.ts







/***/ }),

/***/ 4774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LZ": () => (/* reexport */ constants/* COLOR_MAP_PRIMARY */.LZ),
  "Ls": () => (/* reexport */ modules/* CategoryScene */.Ls),
  "SV": () => (/* reexport */ components/* ErrorBoundary */.SV),
  "F3": () => (/* reexport */ Fonts),
  "no": () => (/* reexport */ constants/* IMAGE_PLACEHOLDER */.no),
  "Ar": () => (/* reexport */ components/* Layout */.Ar),
  "or": () => (/* reexport */ components/* Main */.or),
  "An": () => (/* reexport */ NoMatchPage),
  "m0": () => (/* reexport */ modules/* ProductScene */.m0),
  "rS": () => (/* reexport */ theme)
});

// UNUSED EXPORTS: Accordion, AffirmLabel, AffirmScript, BillingScene, Button, CART_TOKEN_KEY, CartList, CartListItem, CartScene, CartTable, CartTableRow, CartTotals, CheckoutScene, Drawer, Flags, Footer, Header, Heading, LangSwitch, LayeredControls, Link, LogoSvg, Name, NoItems, Price, ProductCard, ProductList, ProductListLayout, STORE_VIEWS, TotalsTable, appTheme, getProcessNewsletterSignupKey, getProcessNewsletterSignupService, getStockStatusKey, getStockStatusQuery, getStockStatusService, mutation, translations, useBrandLogoUrl, useNewsletterSubscription, useSharedCart, useStockStatus, useStoreData

// EXTERNAL MODULE: ../../packages/shared/src/components/index.ts + 28 modules
var components = __webpack_require__(2885);
// EXTERNAL MODULE: ../../packages/shared/src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(9700);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/accordion.ts
const Accordion = {
    baseStyle: {
        container: {
            _first: {
                borderTopWidth: "0",
                borderColor: "secondary.150"
            }
        },
        button: {
            px: "0",
            py: "15px",
            fontWeight: "light",
            color: "secondary.400",
            _hover: {
                bg: "transparent"
            }
        },
        icon: {
            color: "secondary.200"
        },
        panel: {
            px: "0",
            fontSize: "md",
            color: "secondary.400"
        }
    },
    variants: {
        pdp: {
            container: {
                _last: {
                    borderBottomWidth: "0"
                }
            },
            root: {
                borderTop: "1px solid",
                borderColor: "gray.100"
            },
            button: {
                px: "0",
                py: 5,
                lineHeight: "1.2",
                fontSize: "lg",
                fontWeight: "500",
                color: "gray.800",
                _hover: {
                    bg: "transparent"
                }
            },
            icon: {
                color: "gray.100"
            },
            panel: {
                p: 0,
                mb: 8,
                fontSize: "md"
            }
        }
    }
};

// EXTERNAL MODULE: ../../packages/shared/src/constants.ts
var constants = __webpack_require__(3345);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/button.ts

const baseSolid = (store)=>{
    return {
        borderRadius: "full",
        color: "white",
        bg: `${store}.900`,
        _hover: {
            opacity: "0.8"
        }
    };
};
const baseOutline = (store)=>{
    return {
        borderRadius: "full",
        border: "2px solid",
        borderColor: `${store}.900`,
        color: `${store}.900`,
        _hover: {
            bg: `${store}.900`,
            color: "white"
        },
        _active: {
            bg: `${store}.900`,
            color: "white"
        },
        _disabled: {
            _hover: {
                color: `${store}.900`
            }
        }
    };
};
const baseUnderline = (store)=>{
    return {
        borderBottom: "2px solid",
        borderColor: `${store}.900`,
        minHeight: "10",
        transition: "color ease-in-out 0.2s",
        color: "currentColor",
        _hover: {
            color: `${store}.900`,
            textDecoration: "none"
        }
    };
};
const basePrimary = {
    color: "white",
    borderRadius: "md",
    fontWeight: "600",
    letterSpacing: "2px",
    fontSize: "15px",
    textTransform: "uppercase",
    px: "75px",
    _hover: {
        opacity: "0.7"
    }
};
const primary = (store)=>{
    return {
        ...basePrimary,
        bg: constants/* COLOR_MAP_PRIMARY */.LZ[store]
    };
};
const Button = {
    baseStyle: {
        borderRadius: "0",
        fontWeight: "semibold",
        fontFamily: "body",
        maxW: "500px",
        whiteSpace: "normal",
        lineHeight: "1.3",
        _focus: {
            boxShadow: "none"
        },
        _disabled: {
            pointerEvents: "none"
        }
    },
    variants: {
        primary: {
            bg: "circley.300",
            ...basePrimary
        },
        secondary: {
            bg: "reinsman.300",
            color: "white",
            borderRadius: "md",
            fontWeight: "600",
            letterSpacing: "2px",
            fontSize: "15px",
            height: "45px",
            textTransform: "uppercase",
            px: "75px",
            _hover: {
                bg: "reinsman.400"
            }
        },
        highhorse: {
            bg: "highhorse.400",
            color: "white",
            borderRadius: "md",
            fontWeight: "600",
            letterSpacing: "2px",
            fontSize: "15px",
            fontFamily: "Roboto",
            height: "45px",
            textTransform: "uppercase",
            px: "75px",
            _hover: {
                bg: "highhorse.50"
            }
        },
        tucker: {
            bg: "tucker.400",
            color: "white",
            borderRadius: "md",
            fontWeight: "600",
            letterSpacing: "2px",
            fontSize: "15px",
            height: "45px",
            textTransform: "uppercase",
            px: "75px",
            _hover: {
                bg: "tucker.200"
            }
        },
        "solid-default": {
            ...baseSolid("circley")
        },
        "solid-highhorse": {
            ...baseSolid("highhorse")
        },
        "solid-reinsman": {
            ...baseSolid("reinsman")
        },
        "solid-tucker": {
            ...baseSolid("tucker")
        },
        "outline-default": {
            ...baseOutline("circley")
        },
        "outline-highhorse": {
            ...baseOutline("highhorse")
        },
        "outline-reinsman": {
            ...baseOutline("reinsman")
        },
        "outline-tucker": {
            ...baseOutline("tucker")
        },
        "underline-default": {
            ...baseUnderline("circley")
        },
        "underline-highhorse": {
            ...baseUnderline("highhorse")
        },
        "underline-reinsman": {
            ...baseUnderline("reinsman")
        },
        "underline-tucker": {
            ...baseUnderline("tucker")
        },
        "primary-default": {
            ...primary("circley")
        },
        "primary-circley": {
            ...primary("circley")
        },
        "primary-highhorse": {
            ...primary("highhorse")
        },
        "primary-reinsman": {
            ...primary("reinsman")
        },
        "primary-tucker": {
            ...primary("tucker")
        }
    },
    sizes: {
        md: {
            fontSize: "sm",
            h: 10
        },
        lg: {
            fontSize: {
                base: "sm",
                lg: "18px"
            },
            h: 12
        },
        xl: {
            h: 14
        }
    },
    defaultProps: {
        variant: "outline"
    }
};

;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/drawer.ts
const MOB_DRAWER_HEADER_HEIGHT = "181px";
const Drawer = {
    variants: {
        drawerSubMenu: {
            dialog: {
                pointerEvents: "auto",
                height: `calc(100% - ${MOB_DRAWER_HEADER_HEIGHT})`,
                top: "auto !important"
            },
            dialogContainer: {
                pointerEvents: "none",
                top: "auto",
                bottom: 0,
                height: `calc(100% - ${MOB_DRAWER_HEADER_HEIGHT})`
            },
            body: {
                py: 0,
                px: 0,
                position: "relative"
            },
            overlay: {
                bg: "transparent",
                pointerEvents: "none",
                top: "auto",
                bottom: 0,
                height: `calc(100% - ${MOB_DRAWER_HEADER_HEIGHT})`
            }
        }
    }
};

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/Fonts.tsx


const Fonts = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Global, {
        styles: `
      @font-face {
        font-family: 'BreeSerif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/BreeSerif-Regular.woff2') format('woff2'),
          url('/fonts/BreeSerif-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/Muli-ExtraLight.woff2') format('woff2'),
          url('/fonts/Muli-ExtraLight.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/Muli-ExtraLightItalic.woff2') format('woff2'),
          url('/fonts/Muli-ExtraLightItalic.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/Muli-Light.woff2') format('woff2'),
          url('/fonts/Muli-Light.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/Muli-LightItalic.woff2') format('woff2'),
          url('/fonts/Muli-LightItalic.woff') format('woff');
      }
    
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Muli-Regular.woff2') format('woff2'),
          url('/fonts/Muli-Regular.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Muli-Italic.woff2') format('woff2'),
          url('/fonts/Muli-Italic.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Muli-SemiBold.woff2') format('woff2'),
           url('/fonts/Muli-SemiBold.woff') format('woff')
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Muli-SemiBoldItalic.woff2') format('woff2'),
           url('/fonts/Muli-SemiBoldItalic.woff') format('woff')
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Muli-Bold.woff2') format('woff2'),
           url('/fonts/Muli-Bold.woff') format('woff')
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Muli-BoldItalic.woff2') format('woff2'),
           url('/fonts/Muli-BoldItalic.woff') format('woff')
      }

      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Muli-ExtraBold.woff2') format('woff2'),
          url('/fonts/Muli-ExtraBold.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Muli-ExtraBoldItalic.woff2') format('woff2'),
          url('/fonts/Muli-ExtraBoldItalic.woff') format('woff');
      }

      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Muli-Black.woff2') format('woff2'),
          url('/fonts/Muli-Black.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Muli-BlackItalic.woff2') format('woff2'),
          url('/fonts/Muli-BlackItalic.woff') format('woff');
      }

      @font-face {
        font-family: 'SortsMillGoudy';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Sorts-Mil-Goudy.woff2') format('woff2'),
          url('/fonts/Sorts-Mill-Goudy.woff') format('woff');
      }
    `
    });
/* harmony default export */ const theme_Fonts = ((/* unused pure expression or super */ null && (Fonts)));

// EXTERNAL MODULE: external "@wpro/magento/dist/ui/theme/heading"
var heading_ = __webpack_require__(3352);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/heading.ts

const Heading = {
    baseStyle: {
        fontWeight: "normal",
        textTransform: "uppercase"
    },
    variants: {
        ...heading_.Heading.variants,
        primary: {
            letterSpacing: {
                base: "2px",
                md: "2.5px"
            },
            lineHeight: "1.2"
        }
    },
    defaultProps: {
        variant: "primary"
    }
};

// EXTERNAL MODULE: external "@wpro/magento/dist/ui/theme/link"
var link_ = __webpack_require__(3819);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/link.ts

const Link = {
    variants: {
        ...link_.Link.variants,
        primary: {
            borderBottom: "2px solid",
            borderColor: "circley.300",
            pb: "5px",
            transition: "color ease-in-out 0.2s",
            _hover: {
                color: "circley.300",
                textDecoration: "none"
            }
        },
        nav: {
            textTransform: "uppercase",
            letterSpacing: "0.375px",
            color: "circley.200",
            _hover: {
                textDecoration: "none",
                color: "circley.300"
            }
        },
        parentNav: {
            textTransform: "uppercase",
            fontSize: "lg",
            letterSpacing: "0.375px",
            color: "circley.300",
            fontWeight: "bold",
            _hover: {
                textDecoration: "none",
                color: "circley.300"
            }
        },
        childNav: {
            color: "secondary.400",
            fontSize: "0.9375rem",
            letterSpacing: "0.375px",
            _hover: {
                textDecoration: "none",
                color: "circley.300"
            }
        },
        reinsmanNav: {
            color: "reinsman.200",
            textTransform: "uppercase",
            letterSpacing: "0.375px",
            _hover: {
                textDecoration: "none",
                color: "turquoise.200"
            }
        },
        reinsmanChildNav: {
            color: "reinsman.200",
            fontSize: "0.9375rem",
            letterSpacing: "0.375px",
            _hover: {
                textDecoration: "none",
                color: "turquoise.200"
            }
        },
        reinsmanParentNav: {
            color: "reinsman.100",
            fontSize: "lg",
            textTransform: "capitalize",
            letterSpacing: "0.375px",
            fontWeight: "bold",
            _hover: {
                textDecoration: "none",
                color: "turquoise.200"
            }
        },
        highHorseNav: {
            fontFamily: "highHorse",
            color: "highhorse.300",
            textTransform: "uppercase",
            letterSpacing: "0.375px",
            _hover: {
                textDecoration: "none",
                color: "highhorse.400"
            }
        },
        highHorseParentNav: {
            color: "highhorse.600",
            fontSize: "lg",
            fontFamily: "highHorse",
            textTransform: "capitalize",
            letterSpacing: "0.375px",
            fontWeight: "bold",
            _hover: {
                textDecoration: "none",
                color: "highhorse.400"
            }
        },
        highHorseChildNav: {
            color: "highhorse.300",
            fontSize: "0.9375rem",
            fontFamily: "highHorse",
            letterSpacing: "0.375px",
            _hover: {
                textDecoration: "none",
                color: "highhorse.400"
            }
        },
        tuckerNav: {
            color: "tucker.300",
            textTransform: "uppercase",
            letterSpacing: "0.375px",
            _hover: {
                textDecoration: "none",
                color: "tucker.400"
            }
        },
        tuckerParentNav: {
            color: "tucker.300",
            fontSize: "lg",
            textTransform: "capitalize",
            letterSpacing: "0.375px",
            fontWeight: "bold",
            _hover: {
                textDecoration: "none",
                color: "tucker.400"
            }
        },
        tuckerChildNav: {
            color: "tucker.300",
            fontSize: "0.9375rem",
            letterSpacing: "0.375px",
            _hover: {
                textDecoration: "none",
                color: "tucker.400"
            }
        }
    }
};

// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(429);
// EXTERNAL MODULE: external "@wpro/magento/dist/ui"
var ui_ = __webpack_require__(7448);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/tabs.ts

const tabStyle = (store)=>{
    return {
        tablist: {
            justifyContent: {
                base: "space-around",
                md: "center"
            },
            gap: {
                base: 0,
                md: 12,
                lg: 16
            }
        },
        tab: {
            letterSpacing: "1px",
            lineHeight: "1.2",
            fontSize: "xl",
            fontWeight: "500",
            px: 0,
            borderBottom: "2px solid transparent",
            _selected: {
                borderColor: constants/* COLOR_MAP_PRIMARY */.LZ[store]
            }
        },
        tabpanels: {
            p: 0,
            pt: 10
        },
        tabpanel: {
            p: 0
        }
    };
};
const Tabs = {
    variants: {
        "pdp-default": {
            ...tabStyle("circley")
        },
        "pdp-circley": {
            ...tabStyle("circley")
        },
        "pdp-highhorse": {
            ...tabStyle("highhorse")
        },
        "pdp-reinsman": {
            ...tabStyle("reinsman")
        },
        "pdp-tucker": {
            ...tabStyle("tucker")
        }
    }
};

// EXTERNAL MODULE: external "@wpro/magento/dist/ui/theme/text"
var text_ = __webpack_require__(9224);
// EXTERNAL MODULE: external "@wpro/magento/dist/ui/theme/checkbox"
var checkbox_ = __webpack_require__(1516);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/container.tsx
const Container = {
    variants: {
        wide: {
            px: {
                base: "12px",
                lg: "52px"
            },
            maxW: "100%"
        }
    }
};

;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/theme.ts











const fonts = {
    body: "Muli, Helvetica, sans-serif",
    heading: "'Roboto Slab', Helvetica, sans-serif",
    highHorse: "Roboto, Muli, sans-serif",
    reinsman: "'SortsMillGoudy', Helvetica, sans-serif",
    tucker: "'BreeSerif', Helvetica, sans-serif"
};
const breakpoints = (0,theme_tools_.createBreakpoints)({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em"
});
const fontSizes = {
    md: "0.9375rem"
};
const sizes = {
    container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px"
    }
};
const colors = {
    primary: {
        50: "#f2f2ef",
        100: "#fff",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: ""
    },
    secondary: {
        50: "",
        100: "#dadad7",
        150: "#c9c9c9",
        200: "#b5b5b1",
        300: "#59463f",
        400: "#6b6b68",
        500: "#6d605b",
        600: "#434341",
        700: "",
        800: "",
        900: "#1c1918"
    },
    gray: {
        50: "#F5F4F0",
        100: "#E0E0E0",
        150: "#9D928E",
        200: "#59463f",
        300: "#ccc",
        400: "#c2c5c8",
        500: "#aaa",
        600: "#707070",
        700: "#4C4C4C",
        800: "#333",
        900: ""
    },
    turquoise: {
        50: "",
        100: "",
        200: "#1dada5",
        300: "#9ee3df",
        400: "#71c7c2",
        500: "",
        600: "",
        700: "",
        800: "",
        900: ""
    },
    default: {
        50: "",
        100: "",
        200: "#1a1a1a",
        300: "#ef4123",
        400: "#71c7c2",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "#ef4123"
    },
    circley: {
        50: "",
        100: "",
        200: "#1a1a1a",
        300: "#ef4123",
        400: "#71c7c2",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "#ef4123"
    },
    reinsman: {
        50: "",
        100: "#ca0e3d",
        200: "#59463f",
        300: "#e31921",
        400: "#be060d",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "#1dada5"
    },
    highhorse: {
        50: "#e4e1c7",
        100: "#49a69d",
        200: "#624946",
        300: "#3c1612",
        400: "#dc6145",
        500: "#575757",
        600: "#50a49c",
        700: "",
        800: "",
        900: "#dc6145"
    },
    tucker: {
        50: "",
        100: "#b2b2af",
        200: "#313b6e",
        300: "#59463f",
        400: "#853149",
        500: "#9e1c4d",
        600: "",
        700: "",
        800: "",
        900: "#853149"
    }
};
const styles = {
    global: {
        html: {
            "-webkit-font-smoothing": "unset"
        }
    }
};
const theme_components = {
    Accordion: Accordion,
    Button: Button,
    Heading: Heading,
    Link: Link,
    Text: text_.Text,
    Checkbox: checkbox_.Checkbox,
    Drawer: Drawer,
    Tabs: Tabs,
    Container: Container
};
const appTheme = {
    // This is PWAThemeInterface type
    breakpoints,
    colors,
    styles,
    fontSizes,
    components: theme_components,
    sizes,
    fonts
};
const theme = (0,ui_.extendTheme)(appTheme);

;// CONCATENATED MODULE: ../../packages/shared/src/resources/theme/index.ts








// EXTERNAL MODULE: ../../node_modules/@wpro/magento/dist/core/resources/translations/en.json
var en = __webpack_require__(205);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/translations/en.json
const translations_en_namespaceObject = JSON.parse('{"app.loading":"Loading..."}');
;// CONCATENATED MODULE: ../../packages/shared/src/resources/translations/index.ts


/**
 * Available translations
 * @type array
 */ const translations = [
    {
        code: "en",
        title: "English",
        keys: {
            ...en,
            ...translations_en_namespaceObject
        },
        translationKey: "locale.title.en"
    }, 
];

;// CONCATENATED MODULE: ../../packages/shared/src/resources/index.ts



// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
;// CONCATENATED MODULE: ../../packages/shared/src/pages/no-match-page.tsx





const NoMatchPage = ()=>{
    const intl = (0,external_react_intl_.useIntl)();
    const router = (0,router_.useRouter)();
    const title = intl.formatMessage({
        id: "notFound.title"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                title: title,
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Box, {
                height: "400px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Heading, {
                        mb: 3,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Text, {
                        children: intl.formatMessage({
                            id: "notFound.description"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                        mt: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                            onClick: async ()=>router.push("/"),
                            children: intl.formatMessage({
                                id: "action.continueShopping"
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/pages/index.ts


// EXTERNAL MODULE: ../../packages/shared/src/modules/index.ts + 30 modules
var modules = __webpack_require__(5701);
;// CONCATENATED MODULE: ../../packages/shared/src/index.ts








/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kK": () => (/* reexport */ CartListItem),
  "NH": () => (/* reexport */ CartScene),
  "k8": () => (/* reexport */ CartTableRow),
  "Di": () => (/* reexport */ TotalsTable)
});

// UNUSED EXPORTS: CartList, CartTable, CartTotals

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
// EXTERNAL MODULE: external "@wpro/magento/dist/ui"
var ui_ = __webpack_require__(7448);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/hooks"
var hooks_ = __webpack_require__(32);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/shared"
var shared_ = __webpack_require__(2623);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/cart"
var cart_ = __webpack_require__(5599);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/cart/scenes/CartScene/styled"
var styled_ = __webpack_require__(3273);
// EXTERNAL MODULE: ../../packages/shared/src/modules/index.ts + 30 modules
var modules = __webpack_require__(5701);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/cart-totals.tsx



const CartTotals = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        padding: "35px 25px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontSize: "18px",
                fontWeight: "bold",
                mb: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Order Summary"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(modules/* TotalsTable */.Di, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontSize: "sm",
                mt: "20px",
                children: "* Shipping and Tax are calculated at Checkout"
            })
        ]
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/modules/cart/components/TotalsTable/styled"
var TotalsTable_styled_ = __webpack_require__(6548);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/totals-table.tsx





const TotalsTable = ()=>{
    const { cart  } = (0,hooks_.useCart)();
    if (!(cart === null || cart === void 0 ? void 0 : cart.data)) {
        return null;
    }
    const { data  } = cart;
    const { prices , appliedGiftCards  } = data;
    const { discount , grandTotal  } = prices || {};
    const giftCardDiscount = {
        value: (appliedGiftCards === null || appliedGiftCards === void 0 ? void 0 : appliedGiftCards.reduce((total, giftCard)=>{
            return total + giftCard.applied_balance.value;
        }, 0)) ?? 0,
        currency: (appliedGiftCards === null || appliedGiftCards === void 0 ? void 0 : appliedGiftCards.length) && appliedGiftCards[0].currency
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(TotalsTable_styled_.Table, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
            children: [
                (discount === null || discount === void 0 ? void 0 : discount.value) !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                id: "quote.totals.discount"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(shared_.Price, {
                                ...discount
                            })
                        })
                    ]
                }),
                giftCardDiscount.value !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                id: "quote.totals.giftCardDiscount"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(shared_.Price, {
                                ...giftCardDiscount
                            })
                        })
                    ]
                }),
                grandTotal && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                id: "quote.totals.subtotal"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(shared_.Price, {
                                ...grandTotal
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "@emotion/styled"
var external_emotion_styled_ = __webpack_require__(1480);
var external_emotion_styled_default = /*#__PURE__*/__webpack_require__.n(external_emotion_styled_);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartList/styled.tsx

const Container = (external_emotion_styled_default()).div`
  border-bottom: 1px solid ${(props)=>props.theme.colors.gray["100"]};

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartList/index.tsx




const CartList = ()=>{
    var ref;
    const { cart  } = (0,hooks_.useCart)();
    const items = cart === null || cart === void 0 ? void 0 : (ref = cart.data) === null || ref === void 0 ? void 0 : ref.items;
    if (!items) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: items.map((cartItem)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(CartListItem, {
                    cartItem: cartItem
                }, cartItem.id);
            })
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartListItem/styled.tsx

const Li = (external_emotion_styled_default()).li`
  padding: 25px 15px;
  border-top: 1px solid ${(props)=>props.theme.colors.gray["100"]};

  .product-data {
    display: flex;
  }

  .product-actions {
    display: flex;
    margin: 20px 0 0;
  }

  .product-image {
    padding: 0 20px 0 0;

    > a {
      display: block;
      text-decoration: none;

      > div {
        width: 110px;
        height: 110px;
        background: no-repeat 50% 50% / contain;
      }
    }
  }

  .product-sku {
    font-weight: normal;
    line-height: 1;
    margin: 5px 0 0;
  }

  .product-options {
    line-height: 1;
    margin: 10px 0 0;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
  }

  .product-quantity {
    width: 100px;
    padding: 0 18px 0 0;

    input {
      width: 100px;
      height: 40px;
      color: ${(props)=>props.theme.colors.gray["500"]};
      font-size: 13px;
      font-weight: normal;
      line-height: 20px;
      padding: 10px;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid ${(props)=>props.theme.colors.gray["100"]};
      background: ${(props)=>props.theme.colors.white};
      transition: border 300ms ease, box-shadow 300ms ease;
      outline: none !important;

      &:hover,
      &:focus {
        border: 1px solid ${(props)=>props.theme.colors.gray["300"]};
        box-shadow: 0 0 4px rgba(0 0 0 20%);
      }
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      opacity: 1;
    }

    button {
      user-select: none;
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      color: ${(props)=>props.theme.colors.primary["300"]};
      font-size: 13px;
      font-weight: normal;
      line-height: 1;
      padding: 10px;
      border: none;
      background: none;
      outline: 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: opacity 300ms ease;

      &[disabled] {
        cursor: default;
        opacity: 0.6;
      }

      > div {
        position: absolute;
        right: 2px;
        top: 9px;
      }
    }
  }

  .product-remove {
    white-space: nowrap;
    display: flex;
    align-items: flex-start;

    svg {
      display: inline-block;
      width: 8px;
      height: 8px;
      fill: ${(props)=>props.theme.colors.gray["500"]};
      margin: 0 6px 0 0;
    }

    button {
      user-select: none;
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      color: ${(props)=>props.theme.colors.gray["500"]};
      font-size: 15px;
      font-weight: normal;
      line-height: 1;
      padding: 10px;
      border: none;
      background: none;
      outline: 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: opacity 300ms ease;

      &[disabled] {
        cursor: default;
        opacity: 0.6;
      }

      > div {
        position: absolute;
        right: 2px;
        top: 9px;
      }
    }
  }

  .product-subtotal {
    margin: 20px 0 0;
    min-width: 100px;
    font-size: 15px;
    font-weight: normal;
    line-height: 1;

    > .oldPrice {
      color: ${(props)=>props.theme.colors.gray["300"]};
      text-decoration: line-through;
      margin: 0 5px 0 0;
    }

    small {
      font-size: 100%;
      font-weight: normal;
      line-height: 1;
      margin: 0 0 0 7px;
    }
  }
`;

;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartListItem/index.tsx









const CartListItem = ({ cartItem  })=>{
    const { product , quantity , variantProduct  } = cartItem;
    const { removeCartItem , updateCartItemQuantity , setInputQuantity , inputQuantity , isCartLoading , isUpdateFetching , isRemoveFetching , isRemoveDisabled , isUpdateDisabled , prices , productPath , configurableOptions , customizableOptions , minQuantity ,  } = (0,hooks_.useCartItem)({
        cartItem
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Li, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-data",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "product-image",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: productPath,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            backgroundImage: `url(${product.image.thumbnail.url})`
                                        }
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "product-name",
                                children: product.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                className: "product-sku",
                                fontSize: "sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                        id: "cart.label.sku"
                                    }),
                                    " ",
                                    (variantProduct === null || variantProduct === void 0 ? void 0 : variantProduct.sku) ?? product.sku
                                ]
                            }),
                            configurableOptions && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "product-options",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                    as: "ul",
                                    alignItems: "flex-start",
                                    spacing: "12px",
                                    children: configurableOptions.map((option)=>{
                                        const { option_label: optionName , value_label: label , id ,  } = option;
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                            as: "li",
                                            alignItems: "flex-start",
                                            spacing: "5px",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    as: "span",
                                                    fontSize: "md",
                                                    children: optionName
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    as: "span",
                                                    fontSize: "sm",
                                                    color: "gray.600",
                                                    children: label
                                                })
                                            ]
                                        }, id);
                                    })
                                })
                            }),
                            customizableOptions && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "product-options",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: customizableOptions.map((option)=>{
                                        const { id , label , values  } = option;
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                label,
                                                ":",
                                                " ",
                                                values.map((val)=>val.label || val.value).join(" - ")
                                            ]
                                        }, id);
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "product-subtotal",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(shared_.Price, {
                                        ...prices.row_total
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                        children: [
                                            "(x ",
                                            quantity,
                                            ")"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-actions",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "product-quantity",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_.Disabler, {
                            isDisabled: isCartLoading,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    value: inputQuantity,
                                    min: minQuantity,
                                    onFocus: (e)=>e.target.select(),
                                    onChange: (e)=>setInputQuantity(e.target.value)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: ()=>updateCartItemQuantity(),
                                    disabled: isUpdateDisabled,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                                id: "cart.item.action.update"
                                            })
                                        }),
                                        isUpdateFetching && /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {})
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "product-remove",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            variant: "link",
                            onClick: removeCartItem,
                            disabled: isRemoveDisabled,
                            isLoading: isRemoveFetching,
                            isDisabled: isCartLoading,
                            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.CloseIcon, {}),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                id: "cart.item.action.remove"
                            })
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/core/resources/constants"
var constants_ = __webpack_require__(5390);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartTable/styled.tsx

const styled_Container = (external_emotion_styled_default()).div`
  table {
    width: 100%;
    border-bottom: 1px solid ${(props)=>props.theme.colors.gray["100"]};

    th {
      text-align: left;
      font-size: 12px;
      font-weight: normal;
      line-height: 1;
      color: ${(props)=>props.theme.colors.gray["700"]};
      text-transform: uppercase;
      padding: 12px 15px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }

      &:nth-child(2) {
        text-align: right;
      }

      &:nth-child(3) {
        text-align: center;
      }

      &:nth-child(5) {
        text-align: right;
      }
    }
  }
`;

;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartTable/index.tsx





const CartTable = ()=>{
    var ref;
    const { cart  } = (0,hooks_.useCart)();
    const items = cart === null || cart === void 0 ? void 0 : (ref = cart.data) === null || ref === void 0 ? void 0 : ref.items;
    if (!items) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(styled_Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                colSpan: 2,
                                children: "Product"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Price"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Qty"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: constants_.BLANK_SPACE
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Subtotal"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    children: items.map((cartItem)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(CartTableRow, {
                            cartItem: cartItem
                        }, cartItem.id);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartTableRow/styled.tsx

const Tr = (external_emotion_styled_default()).tr`
  td {
    color: ${(props)=>props.theme.colors.gray["700"]};
    padding: 25px 15px;
    border-top: 1px solid ${(props)=>props.theme.colors.gray["100"]};

    &:first-child {
      width: 1%;
      padding-left: 0;
    }

    &:last-child {
      width: 1%;
      padding-right: 0;
    }
  }

  .product-image {
    > a {
      display: block;
      text-decoration: none;

      > div {
        width: 110px;
        height: 110px;
        background: no-repeat 50% 50% / contain;
      }
    }
  }

  .product-sku {
    font-weight: normal;
    line-height: 1;
    margin: 5px 0 0;
  }

  .product-options {
    line-height: 1;
    margin: 10px 0 0;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
  }

  .product-price {
    min-width: 100px;
    font-size: 15px;
    font-weight: normal;
    line-height: 1;
    text-align: right;

    > .oldPrice {
      color: ${(props)=>props.theme.colors.gray["300"]};
      text-decoration: line-through;
      margin: 0 5px 0 0;
    }
  }

  .product-quantity {
    width: 90px;
    margin: 0 auto;
    transform: translateY(18px);

    input {
      width: 90px;
      height: 40px;
      color: ${(props)=>props.theme.colors.gray["500"]};
      font-size: 13px;
      font-weight: normal;
      line-height: 20px;
      padding: 10px;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid ${(props)=>props.theme.colors.gray["100"]};
      background: ${(props)=>props.theme.colors.white};
      transition: border 300ms ease, box-shadow 300ms ease;
      outline: none !important;

      &:hover,
      &:focus {
        border: 1px solid ${(props)=>props.theme.colors.gray["300"]};
        box-shadow: 0 0 4px rgba(0 0 0 20%);
      }
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      opacity: 1;
    }

    button {
      user-select: none;
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      color: ${(props)=>props.theme.colors.primary["300"]};
      font-size: 13px;
      font-weight: normal;
      line-height: 1;
      padding: 10px;
      border: none;
      background: none;
      outline: 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: opacity 300ms ease;

      &[disabled] {
        cursor: default;
        opacity: 0.6;
      }

      > div {
        position: absolute;
        right: 2px;
        top: 9px;
      }
    }
  }

  .product-remove {
    white-space: nowrap;
    display: flex;
    align-items: center;

    svg {
      display: inline-block;
      width: 8px;
      height: 8px;
      fill: ${(props)=>props.theme.colors.gray["500"]};
      margin: 0 6px 0 0;
    }

    button {
      user-select: none;
      position: relative;
      display: block;
      width: 100%;
      text-align: center;
      color: ${(props)=>props.theme.colors.gray["500"]};
      font-size: 15px;
      font-weight: normal;
      line-height: 1;
      padding: 10px;
      border: none;
      background: none;
      outline: 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: opacity 300ms ease;

      &[disabled] {
        cursor: default;
        opacity: 0.6;
      }

      > div {
        position: absolute;
        right: 2px;
        top: 9px;
      }
    }
  }

  .product-subtotal {
    min-width: 100px;
    font-size: 15px;
    font-weight: normal;
    line-height: 1;
    text-align: right;
  }
`;

;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/CartTableRow/index.tsx









const CartTableRow = ({ cartItem  })=>{
    const { product , variantProduct  } = cartItem;
    const { removeCartItem , updateCartItemQuantity , setInputQuantity , inputQuantity , isCartLoading , isUpdateFetching , isRemoveFetching , isRemoveDisabled , isUpdateDisabled , prices , productPath , configurableOptions , customizableOptions , minQuantity ,  } = (0,hooks_.useCartItem)({
        cartItem
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tr, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "product-image",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: productPath,
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    backgroundImage: `url(${product.image.thumbnail.url})`
                                }
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "product-name",
                        children: product.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        className: "product-sku",
                        fontSize: "sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                id: "cart.label.sku"
                            }),
                            " ",
                            (variantProduct === null || variantProduct === void 0 ? void 0 : variantProduct.sku) ?? product.sku
                        ]
                    }),
                    configurableOptions && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "product-options",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                            as: "ul",
                            alignItems: "flex-start",
                            spacing: "12px",
                            children: configurableOptions.map((option)=>{
                                const { option_label: optionName , value_label: label , id ,  } = option;
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    as: "li",
                                    alignItems: "flex-start",
                                    spacing: "5px",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            as: "span",
                                            fontSize: "md",
                                            children: optionName
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            as: "span",
                                            fontSize: "sm",
                                            color: "gray.600",
                                            children: label
                                        })
                                    ]
                                }, id);
                            })
                        })
                    }),
                    customizableOptions && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "product-options",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: customizableOptions.map((option)=>{
                                const { id , label , values  } = option;
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        label,
                                        ":",
                                        " ",
                                        values.map((val)=>val.label || val.value).join(" - ")
                                    ]
                                }, id);
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "product-price",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(shared_.Price, {
                        ...prices.price
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "product-quantity",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_.Disabler, {
                        isDisabled: isCartLoading,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "number",
                                value: inputQuantity,
                                min: minQuantity,
                                onFocus: (e)=>e.target.select(),
                                onChange: (e)=>setInputQuantity(e.target.value)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: ()=>updateCartItemQuantity(),
                                disabled: isUpdateDisabled,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                            id: "cart.item.action.update"
                                        })
                                    }),
                                    isUpdateFetching && /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {})
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "product-remove",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        variant: "link",
                        onClick: removeCartItem,
                        disabled: isRemoveDisabled,
                        isLoading: isRemoveFetching,
                        isDisabled: isCartLoading,
                        leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.CloseIcon, {}),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                            id: "cart.item.action.remove"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "product-subtotal",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(shared_.Price, {
                        ...prices.row_total
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/components/index.tsx







;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/scenes/cart-scene.tsx









const CartScene = ()=>{
    const intl = (0,external_react_intl_.useIntl)();
    const { count , isFirstLoad  } = (0,hooks_.useCart)();
    const { includeSuffix  } = (0,hooks_.useCoreContext)();
    const [isLargerThan1280] = (0,react_.useMediaQuery)("(min-width: 1280px)");
    const title = intl.formatMessage({
        id: "cart.title"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        maxW: "container.xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(shared_.MetaData, {
                title: title,
                includeSuffix: includeSuffix
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(shared_.Breadcrumbs, {
                pageTitle: title,
                my: 5
            }),
            isFirstLoad ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        my: 5,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {})
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Fade, {
                in: true,
                children: !count ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            my: 5,
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: intl.formatMessage({
                                id: "cart.emptyMessage"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_.CartLayout, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_.CartMain, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Heading, {
                                    my: 5,
                                    children: [
                                        title,
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                "(",
                                                count,
                                                ")"
                                            ]
                                        })
                                    ]
                                }),
                                isLargerThan1280 ? /*#__PURE__*/ jsx_runtime_.jsx(CartTable, {}) : /*#__PURE__*/ jsx_runtime_.jsx(CartList, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_.CartAside, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CartTotals, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(cart_.CartCoupon, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(cart_.CartActions, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/scenes/index.tsx


;// CONCATENATED MODULE: ../../packages/shared/src/modules/cart/index.tsx




/***/ }),

/***/ 4235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* reexport */ BillingScene),
  "$": () => (/* reexport */ CheckoutScene)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@wpro/magento/dist/ui"
var ui_ = __webpack_require__(7448);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/checkout"
var checkout_ = __webpack_require__(6773);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/hooks"
var hooks_ = __webpack_require__(32);
// EXTERNAL MODULE: ../../packages/shared/src/index.ts + 15 modules
var src = __webpack_require__(4774);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/checkout/scenes/BillingScene/index.tsx






const BillingScene = ()=>{
    const { storeView  } = (0,hooks_.useCoreContext)();
    const { paymentMethodRequired , paymentMethodLoading , displayEmailForm  } = (0,checkout_.useBillingScene)();
    return /*#__PURE__*/ jsx_runtime_.jsx(checkout_.Layout, {
        main: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                displayEmailForm && /*#__PURE__*/ jsx_runtime_.jsx(checkout_.EmailForm, {
                    mb: 12
                }),
                paymentMethodRequired && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_.Disabler, {
                    isDisabled: paymentMethodLoading,
                    mb: 12,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(checkout_.PaymentOptions, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(checkout_.PaymentMethods, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    variant: "checkout",
                    mb: 4,
                    children: "Billing Address"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(checkout_.BillingAddress, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    mt: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "WARNING:"
                            }),
                            " Cancer and Reproductive Harm",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "br",
                                display: {
                                    base: "none",
                                    sm: "inline"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                color: src/* COLOR_MAP_PRIMARY */.LZ[storeView],
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://www.p65warnings.ca.gov/",
                                children: "https://www.p65warnings.ca.gov/"
                            })
                        ]
                    })
                })
            ]
        }),
        aside: /*#__PURE__*/ jsx_runtime_.jsx(checkout_.Aside, {})
    });
};

// EXTERNAL MODULE: external "@wpro/magento/dist/modules/checkout/"
var _ = __webpack_require__(5975);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/checkout/scenes/CheckoutScene/index.tsx



const CheckoutScene = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(_.TwoStepsCheckout, {
        components: {
            ShippingScene: _.ShippingScene,
            BillingScene: BillingScene,
            SuccessScene: _.SuccessScene
        }
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/checkout/scenes/index.ts



;// CONCATENATED MODULE: ../../packages/shared/src/modules/checkout/index.ts



/***/ }),

/***/ 5701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ls": () => (/* reexport */ CategoryScene),
  "m0": () => (/* reexport */ ProductScene),
  "Di": () => (/* reexport */ cart/* TotalsTable */.Di)
});

// UNUSED EXPORTS: BillingScene, CartList, CartListItem, CartScene, CartTable, CartTableRow, CartTotals, CheckoutScene, Flags, LayeredControls, Name, NoItems, Price, ProductCard, ProductList, ProductListLayout

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ../../packages/shared/src/resources/constants.ts
const SWATCHES_ATTRIBUTES = {
    SADDLE_COLOR: "saddle_color",
    PAD_COLOR: "pad_top_color",
    HORSEWARE_COLOR: "horseware_color",
    SADDLE_SEAT_COLOR: "saddle_seat_color",
    STIRRUP_COLOR: "stirrup_color",
    TACK_COLOR: "tack_color_2"
};
const BRAND_FILTER_CODE = "manufacturer";

// EXTERNAL MODULE: external "@wpro/magento/dist/core/resources/constants"
var constants_ = __webpack_require__(5390);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/hooks"
var hooks_ = __webpack_require__(32);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/shared"
var shared_ = __webpack_require__(2623);
// EXTERNAL MODULE: external "@wpro/magento/dist/ui"
var ui_ = __webpack_require__(7448);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/auth"
var auth_ = __webpack_require__(3914);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/AddToWishlist/index.tsx







const AddToWishlist = ({ product  })=>{
    const router = (0,router_.useRouter)();
    const { handleRemoveFromWishlist , handleAddToWishlist , isAddedToWishlist , isLoading ,  } = (0,hooks_.useWishlist)(product);
    const { isLoggedIn  } = (0,hooks_.useCustomer)();
    const { 0: isLoginModalVisible , 1: setIsLoginModalVisible  } = (0,external_react_.useState)(false);
    const handleAddItem = ()=>{
        if (!isLoggedIn) {
            setIsLoginModalVisible(true);
        } else {
            handleAddToWishlist();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                onClick: isAddedToWishlist ? ()=>router.push("/customer/account/wishlist") : handleAddItem,
                pointerEvents: isLoading ? "none" : "unset",
                fontSize: "md",
                h: "23px",
                d: "flex",
                alignItems: "center",
                justifyContent: "center",
                children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {
                    size: "sm"
                }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    d: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                    children: isAddedToWishlist ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "span",
                                color: "green.400",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoCheckmarkSharp, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "span",
                                children: "View wishlist"
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            as: "span",
                            children: "Add to wishlist"
                        })
                    })
                })
            }),
            isLoginModalVisible && /*#__PURE__*/ jsx_runtime_.jsx(auth_.LoginModal, {
                isOpen: true,
                handleCloseModal: ()=>setIsLoginModalVisible(false),
                onLoginSuccess: ()=>{
                    handleAddToWishlist();
                    setIsLoginModalVisible(false);
                }
            })
        ]
    });
};

// EXTERNAL MODULE: external "react-image-gallery"
var external_react_image_gallery_ = __webpack_require__(9585);
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_);
// EXTERNAL MODULE: ../../packages/shared/src/constants.ts
var constants = __webpack_require__(3345);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/scenes/ProductScene/components/MediaGallery/index.tsx



// @ts-expect-error




const MediaGallery = ({ configurableGalleryImages , mediaGalleryItems , productName , store ="default"  })=>{
    const items = [];
    const [isTablet] = (0,react_.useMediaQuery)("(max-width: 831px)");
    const galleryRef = (0,external_react_.useRef)(null);
    mediaGalleryItems.forEach((item, index)=>{
        const { file , media_type , video_content  } = item;
        items.push({
            original: `${constants_.PRODUCT_IMAGE_URL}${file}`,
            thumbnail: `${constants_.PRODUCT_IMAGE_URL}${file}`,
            originalAlt: item.label ?? `${productName} ${index}`,
            thumbnailAlt: item.label ?? `${productName} ${index}`,
            renderItem: ()=>{
                return media_type == "image" ? /*#__PURE__*/ jsx_runtime_.jsx(ImageItem, {
                    label: item.label ?? "",
                    img: `${constants_.PRODUCT_IMAGE_URL}${file}`
                }) : /*#__PURE__*/ jsx_runtime_.jsx(VideoItem, {
                    videoTitle: video_content === null || video_content === void 0 ? void 0 : video_content.video_title,
                    videoEmbedUrl: video_content === null || video_content === void 0 ? void 0 : video_content.video_url
                });
            }
        });
    });
    if (mediaGalleryItems.length !== configurableGalleryImages.length) {
        configurableGalleryImages.forEach((item, index)=>{
            const { file , media_type , video_content  } = item;
            items.push({
                original: `${constants_.PRODUCT_IMAGE_URL}${file}`,
                thumbnail: `${constants_.PRODUCT_IMAGE_URL}${file}`,
                originalAlt: item.label ?? `${productName} ${index}`,
                thumbnailAlt: item.label ?? `${productName} ${index}`,
                renderItem: ()=>{
                    return media_type == "image" ? /*#__PURE__*/ jsx_runtime_.jsx(ImageItem, {
                        label: item.label ?? "",
                        img: `${constants_.PRODUCT_IMAGE_URL}${file}`
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(VideoItem, {
                        videoTitle: video_content === null || video_content === void 0 ? void 0 : video_content.video_title,
                        videoEmbedUrl: video_content === null || video_content === void 0 ? void 0 : video_content.video_url
                    });
                }
            });
        });
    }
    const showGallery = items.length > 1;
    const properties = {
        ref: galleryRef,
        thumbnailPosition: !isTablet ? "left" : "bottom",
        useBrowserFullscreen: false,
        showPlayButton: false,
        showFullscreenButton: false,
        showNav: false,
        items: items,
        showThumbnails: showGallery,
        showBullets: false,
        showVideo: true
    };
    const galleryStyles = {
        ".image-gallery-content": {
            height: "100%",
            bg: "#fff"
        },
        ".image-gallery-slide": {
            cursor: "default"
        },
        ".image-gallery-slide-wrapper img": {
            margin: "0 auto"
        },
        ".image-gallery-thumbnail": {
            borderWidth: "2px",
            borderRadius: "sm",
            "&:hover": {
                borderColor: "transparent"
            },
            "&.active": {
                borderColor: constants/* COLOR_MAP_PRIMARY */.LZ[store]
            }
        },
        ".image-gallery-fullscreen-button:hover": {
            color: constants/* COLOR_MAP_PRIMARY */.LZ[store]
        }
    };
    const handleFullScreenClick = (e)=>{
        var ref, ref1;
        const fullScreenElement = document.fullscreenElement;
        const imageGallery = galleryRef === null || galleryRef === void 0 ? void 0 : (ref = galleryRef.current) === null || ref === void 0 ? void 0 : (ref1 = ref.imageGallery) === null || ref1 === void 0 ? void 0 : ref1.current;
        const isFullscreen = (galleryRef === null || galleryRef === void 0 ? void 0 : galleryRef.current) === fullScreenElement || imageGallery.classList.contains("fullscreen-modal");
        if (isFullscreen) {
            var ref2;
            galleryRef === null || galleryRef === void 0 ? void 0 : (ref2 = galleryRef.current) === null || ref2 === void 0 ? void 0 : ref2.exitFullScreen();
        } else {
            var ref3;
            galleryRef === null || galleryRef === void 0 ? void 0 : (ref3 = galleryRef.current) === null || ref3 === void 0 ? void 0 : ref3.fullScreen();
        }
    };
    const ImageItem = ({ label , img  })=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            cursor: "pointer",
            onClick: (e)=>handleFullScreenClick(e),
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                src: img,
                alt: label
            })
        });
    };
    const VideoItem = ({ videoTitle , videoEmbedUrl  })=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            width: "100%",
            minHeight: {
                md: "380px",
                lg: "500px"
            },
            position: "relative",
            display: "flex",
            flexDir: "column",
            justifyContent: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                position: "relative",
                pb: "56.25%",
                height: 0,
                sx: {
                    iframe: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    src: videoEmbedUrl,
                    title: videoTitle,
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: true
                })
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        sx: galleryStyles,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_image_gallery_default()), {
            ...properties
        })
    });
};

// EXTERNAL MODULE: external "next-share"
var external_next_share_ = __webpack_require__(8797);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/scenes/ProductScene/components/SocialShare/index.tsx




const SocialShare = ({ url , productImage , store ="default"  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        mt: 3,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
            spacing: 3,
            justifyContent: "center",
            color: constants/* COLOR_MAP_PRIMARY */.LZ[store],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.EmailShareButton, {
                    url: url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.EmailIcon, {
                        size: 32,
                        round: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.PinterestShareButton, {
                    url: url,
                    media: productImage,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.PinterestIcon, {
                        size: 32,
                        round: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.TwitterShareButton, {
                    url: url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.TwitterIcon, {
                        size: 32,
                        round: true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.FacebookShareButton, {
                    url: url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_.FacebookIcon, {
                        size: 32,
                        round: true
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react-rater"
var external_react_rater_ = __webpack_require__(8405);
var external_react_rater_default = /*#__PURE__*/__webpack_require__.n(external_react_rater_);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/Reviews/components/RatingStars/index.tsx







const RatingStars = ({ store ="default" , ratingCount , isInteractive =false , onRate , ratingPercentage , reviewsCount , ...boxProps })=>{
    const StarsTotal = 5;
    const rating = ratingCount;
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        d: "flex",
        alignItems: "center",
        py: "7px",
        ...boxProps,
        sx: {
            ".react-rater": {
                "> div": {
                    mr: "2px"
                }
            },
            ".react-rater-star": {
                fontSize: "2xl",
                color: "gray.100",
                letterSpacing: "-2px",
                lineHeight: "0",
                "&.is-active, &.will-be-active": {
                    color: constants/* COLOR_MAP_PRIMARY */.LZ[storeView]
                },
                "&.is-disabled:not(.is-active)": {
                    color: "gray.100"
                }
            }
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_rater_default()), {
            total: StarsTotal,
            rating: rating,
            interactive: isInteractive,
            onRate: onRate
        })
    });
};

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/Reviews/components/ReviewList/index.tsx





const ReviewList = ({ reviewList , isLoading  })=>{
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
            direction: {
                base: "column",
                lg: "row"
            },
            spacing: {
                base: "10px",
                lg: "30px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Skeleton, {
                    w: {
                        base: "100%",
                        lg: "25%"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Skeleton, {})
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
        direction: "column",
        spacing: "24px",
        divider: /*#__PURE__*/ jsx_runtime_.jsx(react_.StackDivider, {
            borderColor: "gray.50"
        }),
        pb: {
            base: "80px",
            lg: "110px"
        },
        mb: {
            base: "80px",
            lg: "110px"
        },
        mt: "30px",
        borderBottomWidth: "1px",
        borderBottomColor: "gray.100",
        children: reviewList === null || reviewList === void 0 ? void 0 : reviewList.map((review, i)=>{
            var ref;
            const { nickname , created_at: createdAt , detail , title , rating_votes: ratingVotes ,  } = review;
            const rating = ((ref = ratingVotes[0]) === null || ref === void 0 ? void 0 : ref.value) ?? "";
            const dateNumber = new Date(createdAt);
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                direction: {
                    base: "column",
                    lg: "row"
                },
                spacing: {
                    base: "10px",
                    lg: "30px"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        className: "review__overview",
                        w: {
                            base: "100%",
                            lg: "25%"
                        },
                        flex: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                as: "h4",
                                size: "sm",
                                mb: "25px",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(RatingStars, {
                                ratingCount: rating
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        className: "review__content",
                        flex: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "review__detail",
                                children: detail
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                direction: "row",
                                divider: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    borderLeftColor: "gray.100"
                                }),
                                spacing: "16px",
                                mt: "30px",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "review__name",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: nickname
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "review__date",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedDate, {
                                            value: dateNumber,
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, i);
        })
    });
};

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/hooks/"
var _ = __webpack_require__(740);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/catalog/hooks"
var catalog_hooks_ = __webpack_require__(9808);
// EXTERNAL MODULE: external "@wpro/ui"
var external_wpro_ui_ = __webpack_require__(4317);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2951);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/Reviews/components/ReviewsForm/index.tsx











const ReviewsForm = ({ productName , store ="default"  })=>{
    const intl = (0,external_react_intl_.useIntl)();
    const { product  } = (0,catalog_hooks_.useProductByPath)();
    const productId = product === null || product === void 0 ? void 0 : product.id;
    // TODO: Enable captcha
    const { 0: captcha , 1: setCaptcha  } = (0,external_react_.useState)();
    const captchaPublicKey = "local-6Lfrc2ojAAAAALcxfELmoZqxGXQqnzLWothn7pLy";
    const { createReview , isLoading  } = (0,_.useCreateReview)({
        onSuccessShowToast: true,
        onErrorShowToast: true
    });
    const yupSchema = (0,external_react_.useMemo)(()=>reviewsFormSchema({
            intl
        }), [
        intl
    ]);
    const { register , formState: { errors  } , handleSubmit , setValue , getValues ,  } = (0,external_react_hook_form_.useForm)({
        resolver: (0,yup_.yupResolver)(yupSchema),
        mode: "onTouched",
        shouldFocusError: true,
        defaultValues: reviewFormInitialValues
    });
    const handleFormSubmit = (values)=>{
        const dataToSubmit = {
            ...values
        };
        if (!productId) return;
        createReview({
            input: {
                product_id: productId,
                nickname: dataToSubmit === null || dataToSubmit === void 0 ? void 0 : dataToSubmit.name,
                title: dataToSubmit === null || dataToSubmit === void 0 ? void 0 : dataToSubmit.title,
                detail: dataToSubmit === null || dataToSubmit === void 0 ? void 0 : dataToSubmit.reviewContent,
                rating_votes: [
                    {
                        rating_id: 7,
                        value: dataToSubmit === null || dataToSubmit === void 0 ? void 0 : dataToSubmit.ratingSelected
                    }
                ]
            }
        });
    };
    const ReviewCharacterLimit = 10000;
    const { 0: textAreaCount , 1: setTextAreaCount  } = (0,external_react_.useState)(ReviewCharacterLimit);
    const wordCount = (e)=>{
        const currentText = e.target.value;
        const characterCount = currentText.length;
        const characterLimit = ReviewCharacterLimit;
        const TextAreaCharacterRemain = characterLimit - characterCount;
        setTextAreaCount(TextAreaCharacterRemain);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Heading, {
                    as: "h4",
                    fontSize: "3xl",
                    textTransform: "none",
                    mb: 6,
                    lineHeight: "1.4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            fontSize: "lg",
                            fontFamily: "body",
                            letterSpacing: "0",
                            children: `You're reviewing:`
                        }),
                        productName
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    maxW: {
                        lg: "50%"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: handleSubmit((data)=>{
                            if (isLoading) {
                                return;
                            }
                            handleFormSubmit === null || handleFormSubmit === void 0 ? void 0 : handleFormSubmit(data);
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                className: "ratings",
                                w: "100%",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: "label",
                                        d: "block",
                                        mb: 1,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Rating:"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(RatingStars, {
                                                store: store,
                                                isInteractive: true,
                                                onRate: (rate)=>setValue("ratingSelected", rate.rating),
                                                ratingCount: getValues("ratingSelected")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "hidden",
                                                name: "ratingSelected"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_wpro_ui_.InputField, {
                                label: "Title",
                                inputProps: register("title"),
                                error: errors.title,
                                isRequired: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_wpro_ui_.InputField, {
                                label: "Name to Display",
                                inputProps: register("name"),
                                error: errors.name,
                                isRequired: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                w: "100%",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_wpro_ui_.TextareaField, {
                                    label: "Your Review",
                                    inputProps: {
                                        ...register("reviewContent"),
                                        onChange: (event)=>wordCount(event)
                                    },
                                    error: errors.reviewContent,
                                    isRequired: true,
                                    callToAction: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                        as: "span",
                                        color: "gray.500",
                                        children: [
                                            "(",
                                            textAreaCount,
                                            "/10000 characters remaining)"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                w: "100%",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    mt: 4,
                                    type: "submit",
                                    size: "lg",
                                    maxW: "none",
                                    w: {
                                        base: "100%",
                                        sm: "auto "
                                    },
                                    variant: `primary-${store}`,
                                    isLoading: isLoading,
                                    children: "Send"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/Reviews/components/review-summary.tsx






const ReviewSummary = ({ store ="default" , ratingCount , handleClick , productId , ...boxProps })=>{
    const { reviewList  } = (0,hooks_.useReviews)(productId);
    const reviewsCount = reviewList === null || reviewList === void 0 ? void 0 : reviewList.length;
    const getAverage = ()=>{
        let sum = 0;
        reviewList === null || reviewList === void 0 ? void 0 : reviewList.forEach((review)=>{
            var ref, ref1;
            sum += (review === null || review === void 0 ? void 0 : (ref = review.rating_votes) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.value) ?? 0;
        });
        return sum / ((reviewList === null || reviewList === void 0 ? void 0 : reviewList.length) ?? 0);
    };
    const averageRating = getAverage();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        display: "flex",
        alignItems: "center",
        gap: 3,
        ...boxProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(RatingStars, {
                ratingCount: averageRating,
                isInteractive: false
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                d: "flex",
                alignItems: "center",
                gap: 2,
                fontSize: "md",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        onClick: handleClick,
                        children: [
                            reviewsCount ?? 0,
                            " Reviews"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "span",
                        color: "gray.100",
                        children: "|"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                        onClick: handleClick,
                        children: "Add Your Review"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/Reviews/components/index.ts





// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/Reviews/schema.tsx

const reviewFormInitialValues = {
    title: "",
    reviewContent: "",
    name: "",
    ratingSelected: 0
};
const reviewsFormSchema = (deps)=>{
    return external_yup_.object().shape({
        title: external_yup_.string().required("Required"),
        reviewContent: external_yup_.string().required("Required"),
        name: external_yup_.string().required("Required"),
        ratingSelected: external_yup_.number().required("Required")
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/Reviews/index.ts



// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@wpro/magento/dist/gtm/ga3/index"
var index_ = __webpack_require__(8697);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/catalog"
var catalog_ = __webpack_require__(4796);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ../../packages/shared/src/hooks/index.ts + 5 modules
var hooks = __webpack_require__(9700);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/product-variants.tsx




const MAX_COLORS = 7;
const Variants = ({ options  })=>{
    if (!options || !options.length) {
        return null;
    }
    const availableSwatches = options === null || options === void 0 ? void 0 : options.filter((option)=>SWATCHES.includes(option.attribute_code));
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
        children: availableSwatches.map((swatchGroup)=>{
            const length = swatchGroup.values.length;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                templateColumns: "repeat(5, 1fr)",
                gap: 2,
                justifyContent: "left",
                children: [
                    swatchGroup.values.map((item, i)=>{
                        var ref;
                        const attrId = swatchGroup.id;
                        const swatch = (ref = item.visiture_swatch_data) === null || ref === void 0 ? void 0 : ref.value;
                        const value = item.value_index;
                        const swatchIsImage = swatch === null || swatch === void 0 ? void 0 : swatch.includes("http");
                        if (i + 1 > MAX_COLORS) {
                            return null;
                        }
                        return swatch && /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                "aria-label": "swatch",
                                children: swatchIsImage ? /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                                    ratio: 30 / 20,
                                    w: "30px",
                                    borderWidth: "1px",
                                    borderColor: "gray.200",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: swatch,
                                        alt: "swatch",
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    style: {
                                        backgroundColor: swatch
                                    },
                                    w: "30px",
                                    h: "20px",
                                    borderColor: "gray.200"
                                })
                            })
                        }, `${attrId}-${value}-${i}`);
                    }),
                    length > MAX_COLORS && /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                            children: [
                                "+ ",
                                length - MAX_COLORS,
                                " more"
                            ]
                        })
                    })
                ]
            });
        })
    });
};
const SWATCHES = [
    SWATCHES_ATTRIBUTES.SADDLE_COLOR,
    SWATCHES_ATTRIBUTES.PAD_COLOR,
    SWATCHES_ATTRIBUTES.HORSEWARE_COLOR,
    SWATCHES_ATTRIBUTES.SADDLE_SEAT_COLOR,
    SWATCHES_ATTRIBUTES.STIRRUP_COLOR,
    SWATCHES_ATTRIBUTES.TACK_COLOR, 
];

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/product-card.tsx









const ProductCard = ({ product , listPage  })=>{
    const { name , image , price , sku , typeName , getUrlPath , customAttribute , configurableOptions ,  } = product;
    const { getIsNew , getIsSale  } = (0,catalog_.useProductStatus)(product);
    const { triggerProductClick  } = (0,index_.useGa3Gtm)();
    const [brand] = (customAttribute === null || customAttribute === void 0 ? void 0 : customAttribute.manufacturer) ?? [];
    const callGTM = ()=>{
        triggerProductClick({
            sku,
            name,
            listPage
        });
    };
    const brandLogo = (0,hooks/* useBrandLogoUrl */.dx)(brand, "product");
    const isNew = getIsNew();
    const isSale = getIsSale();
    const urlPath = getUrlPath();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.LinkBox, {
        width: "100%",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: image.small.url,
                    width: 400,
                    height: 400,
                    alt: name,
                    layout: "responsive",
                    objectFit: "contain"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    textAlign: "center",
                    borderTopWidth: "1px",
                    borderTopColor: "gray.100",
                    mt: "20px",
                    pt: "15px",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            w: "30px",
                            h: "30px",
                            mb: "10px",
                            textAlign: "center",
                            mx: "auto",
                            children: brandLogo && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: brandLogo,
                                alt: brand,
                                width: "30px",
                                height: "30px"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: urlPath,
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.LinkOverlay, {
                                    onClick: callGTM,
                                    children: name
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Price, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(catalog_.ProductPrice, {
                                price: price,
                                type: typeName
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Variants, {
                            options: configurableOptions
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Flags, {
                    children: [
                        isNew && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "flag-new",
                            children: "New"
                        }),
                        isSale && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "flag-sale",
                            children: "Sale"
                        })
                    ]
                })
            ]
        })
    });
};
const Container = (styled_default()).div`
  display: block;
  width: 100%;
  padding: 30px 5px;
  background: ${(props)=>props.theme.colors.white};
  height: 100%;
  box-sizing: border-box;
`;
const Name = (0,react_.chakra)(react_.Box, {
    baseStyle: {
        margin: "10px 0",
        padding: "0 20px",
        minHeight: "2.2em",
        a: {
            textTransform: "uppercase",
            lineHeight: "1.7",
            fontSize: "15px",
            fontWeight: "medium",
            color: "secondary.600"
        }
    }
});
const Price = (styled_default()).div`
  margin: 10px 0;
  padding-bottom: 1em;
  color: ${(props)=>props.theme.colors.secondary["300"]};
  font-size: 14px;

  > .oldPrice {
    color: ${(props)=>props.theme.colors.gray["500"]};
    text-decoration: line-through;
    margin: 0 5px 0 0;
  }

  .regularPrice {
    color: ${(props)=>props.theme.colors.gray["700"]};
  }

  .startsAt {
    color: ${(props)=>props.theme.colors.gray["500"]};

    > span {
      color: ${(props)=>props.theme.colors.gray["700"]};
    }
  }
`;
const Flags = (styled_default()).div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  padding: 15px;

  > span {
    color: ${(props)=>props.theme.colors.white};
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    padding: 10px 24px;
    border-radius: 1px;
    margin: 0 5px 3px 0;
    letter-spacing: 1px;

    &.flag-sale {
      background: ${(props)=>props.theme.colors.secondary["300"]};
    }

    &.flag-new {
      background: ${(props)=>props.theme.colors.primary["300"]};
    }
  }
`;

// EXTERNAL MODULE: external "@wpro/magento/dist/modules/catalog/index"
var catalog_index_ = __webpack_require__(9547);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/ConfigurableOptions/styled.tsx

const styled_Container = (styled_default()).div`
  transition: opacity 300ms ease;
  ${(props)=>!props.hasVariants && `
    cursor: wait;
    > * {
      pointer-events: none;
    }
  `}
`;
const Setting = {
    Option: (styled_default()).div`
    margin: 0 0 15px;
  `,
    Title: (styled_default()).div`
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 5px;
  `
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/ConfigurableOptions/index.tsx










const ConfigurableOptions = (props)=>{
    const { sku , basePrice , onChange , onPriceChange , onGalleryChange , renderOptions , swatchesAttributes =[] , reloadOptions =true , defaultVariant , store ="default" ,  } = props;
    const { product  } = (0,catalog_.useProductBySku)({
        sku
    });
    const variants = (0,catalog_.getVariants)(product);
    const variantDefault = (0,catalog_.getVariantDefault)(product, defaultVariant);
    const prevVariantDefault = (0,hooks_.usePrevious)(variantDefault);
    const attrVariants = (0,catalog_.getAttributeVariants)(product);
    const hasVariants = !!(variants === null || variants === void 0 ? void 0 : variants.length);
    const { 0: currentValue , 1: setCurrentValue  } = (0,external_react_.useState)();
    const options = (0,catalog_.getConfigurableOptions)({
        product,
        currentValue,
        basePrice,
        reloadOptions
    });
    (0,external_react_.useEffect)(()=>{
        const product = variantDefault === null || variantDefault === void 0 ? void 0 : variantDefault.product;
        const prevProduct = prevVariantDefault === null || prevVariantDefault === void 0 ? void 0 : prevVariantDefault.product;
        const hasChanged = (product === null || product === void 0 ? void 0 : product.id) !== (prevProduct === null || prevProduct === void 0 ? void 0 : prevProduct.id);
        const hasNotCurrentValue = !currentValue && options.length;
        if (product && (hasChanged || hasNotCurrentValue)) {
            const initialValues = getInitialValues({
                variant: variantDefault,
                options
            });
            setCurrentValue(initialValues);
            if (onGalleryChange) {
                onGalleryChange(product.mediaGalleryItems);
            }
            if (onPriceChange) {
                onPriceChange(product.price);
            }
            onChange(variantDefault);
        }
    }, [
        currentValue,
        variantDefault,
        prevVariantDefault,
        options,
        setCurrentValue,
        onPriceChange,
        onGalleryChange,
        onChange, 
    ]);
    function handleSelectChange(e, attrCode) {
        if (!e) {
            return;
        }
        const { id , label , value , swatch , priceDiff , isDisabled , sortWeight  } = e;
        const optionsIndex = {
            ...currentValue,
            [attrCode]: {
                id,
                label,
                value,
                swatch,
                priceDiff,
                isDisabled,
                sortWeight
            }
        };
        if (reloadOptions) {
            setCurrentValue(resetNextOptions({
                optionsIndex,
                attrCode,
                options
            }));
        } else {
            setCurrentValue(optionsIndex);
        }
        const filters = (0,catalog_.getFilters)(optionsIndex);
        const variant = (0,catalog_.findVariant)(attrVariants, filters);
        const lowestPrice = (0,catalog_.findLowestPrice)(attrVariants, filters);
        const mediaGallery = getGalleryImages(attrVariants, filters);
        const hasGalleryImages = swatchesAttributes.includes(attrCode);
        if (onGalleryChange) {
            var ref, ref1;
            if (variant === null || variant === void 0 ? void 0 : (ref = variant.product) === null || ref === void 0 ? void 0 : (ref1 = ref.mediaGalleryItems) === null || ref1 === void 0 ? void 0 : ref1.length) {
                onGalleryChange(variant.product.mediaGalleryItems);
            } else if (hasGalleryImages) {
                onGalleryChange(mediaGallery);
            }
        }
        if (onPriceChange && lowestPrice) {
            onPriceChange(lowestPrice);
        }
        if (variant ?? reloadOptions) {
            onChange(variant);
        }
    }
    const optionsToRender = reloadOptions ? disableNextOptions({
        options: options,
        currentValue: currentValue ?? {}
    }) : options;
    return /*#__PURE__*/ jsx_runtime_.jsx(styled_Container, {
        hasVariants: hasVariants,
        children: optionsToRender === null || optionsToRender === void 0 ? void 0 : optionsToRender.map((option)=>{
            const { id , label , attrCode , values , isDisabled  } = option;
            const currentOptionValue = currentValue ? currentValue[attrCode] : undefined;
            if (isDisabled) {
                return;
            }
            if (renderOptions) {
                return renderOptions({
                    selected: currentOptionValue,
                    label,
                    values,
                    attrCode,
                    isDisabled: Boolean(isDisabled),
                    onChange: handleSelectChange
                });
            }
            switch(attrCode){
                case SWATCHES_ATTRIBUTES.SADDLE_COLOR:
                    {
                        const current = currentOptionValue;
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Setting.Option, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Setting.Title, {
                                    children: [
                                        label,
                                        current && `: ${current.label}`
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                        gap: 2,
                                        children: values.map((option, i)=>{
                                            const { isDisabled , swatch , value , label  } = option;
                                            const isActive = current && current.value === value;
                                            const isHex = swatch.startsWith("#");
                                            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                    variant: "unstyled",
                                                    w: "50px",
                                                    h: "50px",
                                                    maxW: "none",
                                                    type: "button",
                                                    title: label,
                                                    className: isActive ? "active" : undefined,
                                                    disabled: isDisabled && !isActive,
                                                    onClick: ()=>handleSelectChange(option, attrCode),
                                                    border: "2px solid",
                                                    borderRadius: "sm",
                                                    borderColor: isActive ? constants/* COLOR_MAP_PRIMARY */.LZ[store] : "transparent",
                                                    sx: {
                                                        "&:hover": {
                                                            borderColor: isActive ? constants/* COLOR_MAP_PRIMARY */.LZ[store] : "gray.800"
                                                        }
                                                    },
                                                    p: "2px",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                        backgroundSize: "cover",
                                                        backgroundRepeat: "none",
                                                        backgroundPosition: "center",
                                                        backgroundColor: isHex ? swatch : "",
                                                        style: {
                                                            backgroundImage: `url(${swatch})`
                                                        },
                                                        w: "100%",
                                                        h: "100%",
                                                        borderRadius: "sm"
                                                    })
                                                })
                                            }, `${attrCode}-${value}-${i}`);
                                        })
                                    })
                                })
                            ]
                        }, attrCode);
                    }
                default:
                    {
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Setting.Option, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Setting.Title, {
                                    children: label
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_.Form.ReactSelectTheme, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                            classNamePrefix: ui_.Form.reactSelectThemeClassNamePrefix,
                                            options: values,
                                            onChange: (e)=>handleSelectChange(e, attrCode),
                                            value: currentOptionValue ?? null,
                                            isDisabled: isDisabled
                                        })
                                    })
                                })
                            ]
                        }, attrCode);
                    }
            }
        })
    }, hasVariants.toString());
};
const getGalleryImages = (attrVariants, filters)=>{
    let mediaGalleryItems = [];
    const variants = (0,catalog_.filterVariants)(attrVariants, filters);
    variants.find((variant)=>{
        const { product  } = variant;
        if (!product) {
            return false;
        }
        if (product.mediaGalleryItems.length) {
            mediaGalleryItems = product.mediaGalleryItems;
            return true;
        } else {
            return false;
        }
    });
    return mediaGalleryItems;
};
const resetNextOptions = ({ attrCode , optionsIndex , options  })=>{
    let flagChange = false;
    options.forEach((option)=>{
        const { attrCode: optionAttrCode  } = option;
        if (flagChange) {
            delete optionsIndex[optionAttrCode];
        }
        if (optionAttrCode === attrCode) {
            flagChange = true;
        }
    });
    return optionsIndex;
};
const disableNextOptions = ({ options , currentValue  })=>{
    const selectedAttrCount = currentValue ? Object.keys(currentValue).length + 1 : 1;
    for(let i = selectedAttrCount; i < options.length; i++){
        options[i].isDisabled = true;
    }
    return options;
};
const getInitialValues = ({ variant , options  })=>{
    let initialValues = {};
    if ((variant === null || variant === void 0 ? void 0 : variant.product) && (variant === null || variant === void 0 ? void 0 : variant.attributes)) {
        variant.attributes.forEach((attr, i)=>{
            const attrCode = attr.code;
            const attrOptions = options.find((option)=>{
                return option.attrCode === attrCode;
            });
            const option = attrOptions === null || attrOptions === void 0 ? void 0 : attrOptions.values.find((element)=>{
                return element.id === attr.value_index;
            });
            if (!option) {
                return;
            }
            initialValues[attrCode] = option;
        });
    } else {
        initialValues = options.reduce((obj, option)=>{
            const { attrCode  } = option;
            obj[attrCode] = undefined;
            return obj;
        }, {});
    }
    return initialValues;
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/scenes/ProductScene/components/reviews.tsx



const Reviews = ({ product  })=>{
    const { reviewList , isLoading  } = (0,hooks_.useReviews)(product.id);
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ReviewList, {
                reviewList: reviewList,
                isLoading: isLoading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ReviewsForm, {
                productName: product.name,
                store: storeView
            })
        ]
    });
};

// EXTERNAL MODULE: ../../packages/shared/src/components/index.ts + 28 modules
var components = __webpack_require__(2885);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/scenes/ProductScene/index.tsx























const ProductScene = ({ product  })=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9;
    const { name , image , sku , price , relatedProducts , options , customAttributeList , typeName , descriptionHtml , mediaGalleryItems , id ,  } = product;
    const { includeSuffix , storeView  } = (0,hooks_.useCoreContext)();
    const path = (0,hooks_.usePath)();
    const router = (0,router_.useRouter)();
    const { currentStoreUrl  } = (0,hooks/* useStoreData */.GE)();
    const productAbsoluteUrl = `${currentStoreUrl}${router.asPath.replace(/^\/|\/$/g, "")}`;
    const { 0: qty , 1: setQty  } = (0,external_react_.useState)(1);
    const { addSimpleProduct , addConfigurableProduct  } = (0,hooks_.useCart)();
    const { isAddingToCart  } = (0,catalog_index_.useProductStatus)(product);
    const { addProductToCompare  } = (0,catalog_index_.useComparison)();
    const { 0: variant , 1: setVariant  } = (0,external_react_.useState)(undefined);
    const { 0: renderPrice , 1: setRenderPrice  } = (0,external_react_.useState)(price);
    const { 0: renderPriceType , 1: setRenderPriceType  } = (0,external_react_.useState)(typeName);
    const { 0: selectedRelated , 1: setSelectedRelated  } = (0,external_react_.useState)({});
    const { 0: customOptions , 1: setCustomOptions  } = (0,external_react_.useState)();
    const swatchesAttributes = Object.values(SWATCHES_ATTRIBUTES);
    const defaultSimpleSku = (ref = router.query.sku) === null || ref === void 0 ? void 0 : ref.toString();
    const isSimpleProduct = typeName === constants_.PRODUCT_TYPENAME.SIMPLE // TODO: add to ProductData
    ;
    const isConfigurableProduct = typeName === constants_.PRODUCT_TYPENAME.CONFIGURABLE // TODO: add to ProductData
    ;
    const customOptionsErrors = Boolean(Object.keys((customOptions === null || customOptions === void 0 ? void 0 : customOptions.errors) ?? {}).length);
    const productImage = (variant === null || variant === void 0 ? void 0 : variant.image.default.url) ?? image.default.url;
    const productImages = variant && variant.mediaGalleryItems.length ? variant.mediaGalleryItems.filter((el)=>!el.disabled) : mediaGalleryItems.filter((el)=>!el.disabled);
    const { 0: galleryItems , 1: setGalleryItems  } = (0,external_react_.useState)(productImages);
    const productAttributes = (variant === null || variant === void 0 ? void 0 : variant.customAttributeList) ?? customAttributeList;
    const stockStatus = (0,hooks/* useStockStatus */.s2)({
        sku: isSimpleProduct ? sku : variant === null || variant === void 0 ? void 0 : variant.sku
    });
    const stockStatusMessage = stockStatus && ((ref3 = (ref1 = stockStatus.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.products) === null || ref2 === void 0 ? void 0 : ref2.items[0]) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.mp_stock_status_info) === null || ref4 === void 0 ? void 0 : ref4.label);
    const disableAddToCart = Boolean(stockStatusMessage === "Out of Stock" || stockStatusMessage === "Call For Availability");
    function handleGalleryChange(newItems) {
        setGalleryItems(newItems);
    }
    const { 0: tabIndex , 1: setTabIndex  } = (0,external_react_.useState)(0);
    const reviewTabIndex = 2;
    const tabsRef = (0,external_react_.useRef)(null);
    const handleReviewSummaryClick = (tabIndex)=>{
        var ref;
        const top = ((ref = tabsRef.current) === null || ref === void 0 ? void 0 : ref.offsetTop) ?? 0;
        window.scroll({
            top: top - 175,
            left: 0,
            behavior: "smooth"
        });
        handleTabChange(tabIndex);
    };
    const handleTabChange = (index)=>{
        setTabIndex(index);
    };
    const addCurrentProductToCompare = ()=>{
        addProductToCompare(sku);
        router.push(path.Compare);
    };
    const getRelatedProducts = ()=>{
        const products = (relatedProducts === null || relatedProducts === void 0 ? void 0 : relatedProducts.filter((product)=>selectedRelated[product.sku]).map(({ sku  })=>({
                quantity: qty,
                sku
            }))) ?? [];
        return products;
    };
    const handleQtyChange = (qtyOption)=>{
        setQty(parseInt(qtyOption.value));
    };
    const handlePriceChange = (price)=>{
        setRenderPrice(price);
        setRenderPriceType(constants_.PRODUCT_TYPENAME.SIMPLE);
    };
    const handleConfigurableChange = (variant)=>{
        const product = (variant === null || variant === void 0 ? void 0 : variant.product) ?? undefined;
        setVariant(product);
    };
    const handleAddConfigurableToCart = ()=>{
        const configurableSku = sku;
        if (!variant) {
            return;
        }
        const cartItems = [
            {
                configurableSku,
                quantity: qty,
                sku: variant.sku,
                customizableOptions: (0,catalog_index_.getCustomizableOptions)(customOptions)
            }, 
        ];
        addConfigurableProduct({
            configurableSku,
            cartItems,
            simpleProductsItems: getRelatedProducts()
        });
    };
    const colorMapping = {
        default: "#71c7c2",
        circley: "#71c7c2",
        tucker: "#ba9867",
        reinsman: "#1dada5",
        highhorse: "#49a69d"
    };
    const handleAddSimpleToCart = ()=>{
        const cartItems = [
            {
                quantity: qty,
                sku: sku,
                customizableOptions: (0,catalog_index_.getCustomizableOptions)(customOptions)
            },
            ...getRelatedProducts(), 
        ];
        addSimpleProduct({
            sku,
            cartItems
        });
    };
    const affirmPrice = variant ? (ref5 = variant.price) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.regularPrice) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.amount) === null || ref7 === void 0 ? void 0 : ref7.value : price === null || price === void 0 ? void 0 : (ref8 = price.regularPrice) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.amount) === null || ref9 === void 0 ? void 0 : ref9.value;
    const CmsStyles = {
        "> *": {
            m: 0,
            mb: 6,
            _last: {
                mb: 0
            }
        },
        "*": {
            fontSize: "var(--chakra-fontSizes-md) !important",
            lineHeight: "1.7 !important"
        },
        "ul, ol": {
            listStyle: "disc inside",
            "ul, ol": {
                pl: 3
            }
        }
    };
    const Description = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            sx: CmsStyles,
            dangerouslySetInnerHTML: {
                __html: descriptionHtml
            }
        });
    };
    const Specs = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
            spacing: 0,
            align: "flexStart",
            sx: {
                "> div:nth-child(odd)": {
                    bg: "gray.50"
                }
            },
            children: productAttributes === null || productAttributes === void 0 ? void 0 : productAttributes.map((attr)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    py: 2,
                    px: {
                        base: 3,
                        md: 5
                    },
                    gap: 2,
                    fontSize: {
                        base: "sm",
                        md: "md"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            flex: "1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    attr.label,
                                    ":"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            flex: "1",
                            sx: CmsStyles,
                            dangerouslySetInnerHTML: {
                                __html: attr.value.join(", ")
                            }
                        })
                    ]
                }, attr.code);
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        pb: {
            base: 16,
            sm: 20,
            md: 24
        },
        pt: 8,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            maxW: "container.xl",
            px: 4,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(shared_.MetaData, {
                    type: "PDP",
                    includeSuffix: includeSuffix
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(catalog_index_.ProductNotification, {
                    showToasts: true,
                    showModal: true,
                    sku: sku,
                    productName: name,
                    productImage: productImage
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(shared_.Breadcrumbs, {
                    d: {
                        base: "none",
                        md: "block"
                    },
                    fontSize: "sm",
                    color: "secondary.400",
                    pb: 14,
                    separator: "|",
                    sx: {
                        span: {
                            color: "secondary.200"
                        }
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    d: "flex",
                    flexDirection: {
                        base: "column",
                        md: "row"
                    },
                    gap: {
                        base: 10,
                        lg: 14
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            flex: "1.45",
                            textAlign: "center",
                            children: [
                                galleryItems.length || productImages.length ? /*#__PURE__*/ jsx_runtime_.jsx(MediaGallery, {
                                    configurableGalleryImages: product.mediaGalleryItems,
                                    mediaGalleryItems: galleryItems.length ? galleryItems : productImages,
                                    productName: name,
                                    store: storeView
                                }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: `${constants_.PRODUCT_IMAGE_URL}${constants/* IMAGE_PLACEHOLDER */.no}`,
                                    alt: name,
                                    width: "500px",
                                    height: "500px"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                    d: {
                                        base: "flex",
                                        md: "inline-flex"
                                    },
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    mt: 10,
                                    ml: {
                                        md: productImages.length > 1 ? "110px" : 0
                                    },
                                    borderTop: "1px solid",
                                    borderColor: "gray.100",
                                    px: 14,
                                    pt: 5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(AddToWishlist, {
                                            product: product
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(SocialShare, {
                                            url: productAbsoluteUrl,
                                            productImage: productImage,
                                            store: storeView
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            flex: "1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    fontSize: "3xl",
                                    mb: 2,
                                    children: name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    mb: 5,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                            color: "secondary.400",
                                            children: [
                                                "Sku: ",
                                                (variant === null || variant === void 0 ? void 0 : variant.sku) ?? sku
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            ml: "auto",
                                            textAlign: [
                                                "left",
                                                "left",
                                                "right"
                                            ],
                                            color: `${colorMapping[storeView]}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                as: "strong",
                                                children: stockStatusMessage
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ReviewSummary, {
                                    my: 4,
                                    handleClick: ()=>handleReviewSummaryClick(reviewTabIndex),
                                    productId: id
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    fontSize: "2xl",
                                    fontFamily: "heading",
                                    letterSpacing: "2px",
                                    mb: "5px",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(catalog_index_.ProductPrice, {
                                        extraPrice: customOptions === null || customOptions === void 0 ? void 0 : customOptions.priceDiff,
                                        price: renderPrice,
                                        type: renderPriceType
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* AffirmLabel */.rE, {
                                    affirmPrice: affirmPrice
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                    mb: 8,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ConfigurableOptions, {
                                            sku: sku,
                                            basePrice: renderPrice,
                                            onPriceChange: handlePriceChange,
                                            onGalleryChange: handleGalleryChange,
                                            onChange: handleConfigurableChange,
                                            defaultVariant: defaultSimpleSku,
                                            swatchesAttributes: swatchesAttributes,
                                            store: storeView,
                                            reloadOptions: false
                                        }),
                                        options && /*#__PURE__*/ jsx_runtime_.jsx(catalog_index_.CustomOptions, {
                                            options: options,
                                            onChange: setCustomOptions
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    gap: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            w: "85px",
                                            sx: {
                                                ".react-select__control": {
                                                    h: 14
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_.Form.ReactSelectTheme, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                                    classNamePrefix: ui_.Form.reactSelectThemeClassNamePrefix,
                                                    options: quantityOptions,
                                                    onChange: handleQtyChange,
                                                    defaultValue: quantityOptions[0]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                            flex: "1",
                                            children: [
                                                isSimpleProduct && /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                    isLoading: isAddingToCart,
                                                    isDisabled: customOptionsErrors || disableAddToCart,
                                                    onClick: handleAddSimpleToCart,
                                                    variant: `primary-${storeView}`,
                                                    size: "xl",
                                                    px: 2,
                                                    w: "100%",
                                                    maxW: "none",
                                                    children: disableAddToCart ? stockStatusMessage : "Add To Cart"
                                                }),
                                                isConfigurableProduct && /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                    isLoading: isAddingToCart,
                                                    isDisabled: !variant || customOptionsErrors || disableAddToCart,
                                                    onClick: handleAddConfigurableToCart,
                                                    variant: `primary-${storeView}`,
                                                    size: "xl",
                                                    px: 2,
                                                    w: "100%",
                                                    maxW: "none",
                                                    children: disableAddToCart ? stockStatusMessage : "Add To Cart"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: tabsRef
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    mt: {
                        base: 12,
                        md: 16
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Accordion, {
                            display: {
                                md: "none"
                            },
                            variant: "pdp",
                            allowMultiple: true,
                            allowToggle: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionItem, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionButton, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    flex: "1",
                                                    textAlign: "left",
                                                    children: "Description"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionIcon, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionPanel, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Description, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionItem, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionButton, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    flex: "1",
                                                    textAlign: "left",
                                                    children: "Specifications"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionIcon, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionPanel, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Specs, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionItem, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionButton, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    flex: "1",
                                                    textAlign: "left",
                                                    children: "Reviews"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionIcon, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionPanel, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Reviews, {
                                                product: product
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                            display: {
                                base: "none",
                                md: "block"
                            },
                            maxW: "container.lg",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tabs, {
                                index: tabIndex,
                                variant: `pdp-${storeView}`,
                                onChange: handleTabChange,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                                children: "Description"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                                children: "Specifications"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
                                                children: "Reviews"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabPanels, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Description, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Specs, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Reviews, {
                                                    product: product
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                relatedProducts.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    mt: {
                        base: 12,
                        md: 16
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            as: "h4",
                            fontSize: "3xl",
                            textAlign: "center",
                            mb: 10,
                            children: "Goes Well With"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            display: "flex",
                            flexDirection: {
                                base: "column",
                                md: "row"
                            },
                            gap: {
                                base: 12,
                                md: 16
                            },
                            justifyContent: "center",
                            sx: {
                                "> div": {
                                    width: {
                                        base: "auto",
                                        md: "280px"
                                    },
                                    maxW: {
                                        sm: "380px",
                                        md: "280px"
                                    },
                                    mx: {
                                        base: "auto",
                                        md: 0
                                    },
                                    ".chakra-linkbox > div": {
                                        p: 0
                                    }
                                }
                            },
                            children: relatedProducts.map((product)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    flex: "0 0 auto",
                                    width: "280px",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                                        product: product,
                                        listPage: "Other"
                                    })
                                }, product.id);
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const quantityOptions = [
    {
        value: "1",
        label: "1"
    },
    {
        value: "2",
        label: "2"
    },
    {
        value: "3",
        label: "3"
    },
    {
        value: "4",
        label: "4"
    },
    {
        value: "5",
        label: "5"
    },
    {
        value: "6",
        label: "6"
    },
    {
        value: "7",
        label: "7"
    },
    {
        value: "8",
        label: "8"
    },
    {
        value: "9",
        label: "9"
    },
    {
        value: "10",
        label: "10"
    }, 
];

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/product-list.tsx







const ProductList = ({ products , isError , isFetching , isLoading , listPage , clearFiltersHandler  })=>{
    const hasItems = Boolean(products === null || products === void 0 ? void 0 : products.length);
    const showSpinner = isLoading || !hasItems && isFetching;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showSpinner ? /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: isError ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                height: "85vh",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Alert, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                        id: "app.whoops"
                    })
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: hasItems ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                    templateColumns: {
                        base: "repeat(1, minmax(0, 1fr))",
                        md: "repeat(2, minmax(0, 1fr))",
                        lg: "repeat(3, minmax(0, 1fr))",
                        xl: "repeat(4, minmax(0, 1fr))"
                    },
                    gap: 4,
                    mb: 4,
                    children: products === null || products === void 0 ? void 0 : products.map((product)=>{
                        const { id  } = product;
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCard, {
                                product: product,
                                listPage: listPage
                            })
                        }, id);
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NoItems, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                            id: "catalog.productList.emptyState"
                        }),
                        clearFiltersHandler && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            onClick: clearFiltersHandler,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_.FormattedMessage, {
                                id: "catalog.productList.action.clearFilters"
                            })
                        })
                    ]
                })
            })
        })
    });
};
const NoItems = (styled_default()).div`
  max-width: ${(props)=>props.theme.sizes.container.xl};
  margin: 30px auto;
  padding: 40px 20px;
  color: ${(props)=>props.theme.colors.gray["300"]};
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
  min-height: 300px;

  button {
    cursor: pointer;
    font-size: 18px;
    font-weight: normal;
    line-height: 1;
    color: ${(props)=>props.theme.colors.gray["700"]};
    margin: 0;
    padding: 7px;
    border: none;
    background: none;
  }
`;

// EXTERNAL MODULE: external "@wpro/magento/dist/modules/catalog/components/LayeredControls/styled"
var LayeredControls_styled_ = __webpack_require__(5393);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/catalog/components/LayeredNavMobile/components/Filter"
var Filter_ = __webpack_require__(6471);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/layered-nav-mobile/layered-nav-mobile.tsx







const LayeredNavMobile = ({ categoryId , onApplyFilters , visibleItems =6 , isDraft =true , isOpen , onClose  })=>{
    const intl = (0,external_react_intl_.useIntl)();
    const { isFetching , handleFilterChange , layeredNav , filters , setFilters , draftFiltersChanged , clearDraftFilters ,  } = (0,catalog_.useProductListPage)({
        categoryId,
        withLayeredNav: true,
        draftMode: isDraft
    });
    const { storeView  } = (0,hooks_.useCoreContext)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Drawer, {
        isOpen: isOpen,
        placement: "left",
        onClose: onClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {
                        children: intl.formatMessage({
                            id: "catalog.layeredNav.filterBy"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerBody, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            cursor: isFetching ? "wait" : "default",
                            children: (layeredNav === null || layeredNav === void 0 ? void 0 : layeredNav.appliedFilters) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                pointerEvents: isFetching ? "none" : undefined,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                    spacing: 6,
                                    align: "stretch",
                                    children: layeredNav === null || layeredNav === void 0 ? void 0 : layeredNav.filterOptions.map((item)=>{
                                        if (item.code === BRAND_FILTER_CODE) {
                                            return;
                                        }
                                        return /*#__PURE__*/ jsx_runtime_.jsx(Filter_.Filter, {
                                            isFetching: isFetching,
                                            filterOptions: item,
                                            handleFilterChange: handleFilterChange,
                                            visibleItems: visibleItems,
                                            isDraft: isDraft,
                                            onApplyFilters: onApplyFilters
                                        }, item.code);
                                    })
                                })
                            })
                        })
                    }),
                    isDraft && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerFooter, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                mr: 3,
                                variant: `outline-${storeView}`,
                                disabled: !draftFiltersChanged,
                                onClick: ()=>{
                                    clearDraftFilters();
                                    onClose();
                                },
                                children: intl.formatMessage({
                                    id: "action.cancel"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                variant: `solid-${storeView}`,
                                disabled: !draftFiltersChanged,
                                onClick: ()=>{
                                    setFilters(filters);
                                    onApplyFilters === null || onApplyFilters === void 0 ? void 0 : onApplyFilters();
                                },
                                children: intl.formatMessage({
                                    id: "action.apply"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/layered-nav-mobile/index.tsx


// EXTERNAL MODULE: external "@wpro/magento/dist/modules/catalog/hooks/useProductListPage/utils"
var utils_ = __webpack_require__(682);
// EXTERNAL MODULE: external "@wpro/magento/dist/core/resources/helpers"
var helpers_ = __webpack_require__(797);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/layered-nav/brand-filter.tsx









const BrandFilter = ()=>{
    var ref;
    const router = (0,router_.useRouter)();
    const { attributeList  } = (0,catalog_.useProductAttributeList)();
    const items = attributeList === null || attributeList === void 0 ? void 0 : attributeList[BRAND_FILTER_CODE].options;
    const { getRootProps , getRadioProps  } = (0,react_.useRadioGroup)({
        name: "brand",
        onChange: (value)=>{
            var ref;
            const queryObj = (0,utils_.pathToObj)((ref = router.query.q) === null || ref === void 0 ? void 0 : ref.toString());
            queryObj[BRAND_FILTER_CODE] = {
                op: undefined,
                value: [
                    value
                ]
            };
            const queryString = (0,utils_.objToPath)(queryObj);
            const path = `${(0,helpers_.getPathnameFromAsPath)(router.asPath)}${queryString.length ? `?q=${queryString}` : ""}`;
            router.push(path);
        }
    });
    const group = getRootProps();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Wrap, {
        align: "center",
        justify: {
            base: "center",
            md: "initial"
        },
        spacing: "20px",
        mb: 6,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                size: "xs",
                letterSpacing: "initial",
                children: "Brands:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Wrap, {
                ...group,
                children: (ref = Object.keys(items ?? {})) === null || ref === void 0 ? void 0 : ref.map((key, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(BrandItem, {
                        label: items === null || items === void 0 ? void 0 : items[key],
                        value: key,
                        getRadioProps: getRadioProps
                    }, key);
                })
            })
        ]
    });
};
const BrandItem = ({ label , value , getRadioProps  })=>{
    const radio = getRadioProps({
        value
    });
    const logoUrl = (0,hooks/* useBrandLogoUrl */.dx)(label, "filter");
    return /*#__PURE__*/ jsx_runtime_.jsx(RadioCard, {
        ...radio,
        children: logoUrl && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: logoUrl,
            alt: label,
            layout: "fill",
            objectFit: "cover"
        })
    });
};
function RadioCard(props) {
    const { getInputProps , getCheckboxProps  } = (0,react_.useRadio)(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "label",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ...input
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                ...checkbox,
                cursor: "pointer",
                borderWidth: "1px",
                borderColor: "gray.400",
                borderRadius: "0",
                transition: "all ease-in-out 0.3s",
                _hover: {
                    boxShadow: "md"
                },
                _checked: {
                    borderColor: "gray.700"
                },
                _focus: {
                    boxShadow: "outline"
                },
                px: 5,
                py: 3,
                ratio: 47 / 28,
                children: props.children
            })
        ]
    });
}

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/layered-controls.tsx














const LayeredControls = ({ categoryId , showPagination =true , showSorter =true , showTotalCount =true , showLayeredNavAction =true , isDraft =true , onChange , ...boxProps })=>{
    const { isFetching , pageInfo , currentSort , sortOptions , totalCount , handleFilterChange ,  } = (0,catalog_.useProductListPage)({
        categoryId
    });
    const { storeView  } = (0,hooks_.useCoreContext)();
    const intl = (0,external_react_intl_.useIntl)();
    const btnRef = (0,external_react_.useRef)(null);
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const renderPagination = ((pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.totalItems) ?? 0) > ((pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.pageSize) ?? 0);
    const options = (0,catalog_.getSortOptions)(sortOptions);
    const handleSortChange = (e)=>{
        handleFilterChange({
            requestVar: constants_.CATALOG_SORT.SORT_BY,
            value: e.value
        });
        onChange === null || onChange === void 0 ? void 0 : onChange();
    };
    const handlePageChange = (e)=>{
        handleFilterChange({
            requestVar: constants_.CATALOG_PAGE.PAGE,
            value: [
                e.toString()
            ]
        });
        onChange === null || onChange === void 0 ? void 0 : onChange();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        sx: {
            cursor: isFetching ? "wait" : "initial",
            "> *": {
                pointerEvents: isFetching ? "none" : "initial"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                variant: "wide",
                display: "flex",
                justifyContent: {
                    base: "space-between",
                    md: "flex-end"
                },
                alignItems: "center",
                flexWrap: "wrap",
                ...boxProps,
                children: !!totalCount && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        showLayeredNavAction && /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            display: {
                                base: "block",
                                md: "none"
                            },
                            ref: btnRef,
                            onClick: onOpen,
                            type: "button",
                            children: intl.formatMessage({
                                id: "catalog.productList.action.viewFilters"
                            })
                        }),
                        showTotalCount && /*#__PURE__*/ jsx_runtime_.jsx(LayeredControls_styled_.TotalCountContainer, {
                            children: intl.formatMessage({
                                id: "catalog.productList.totalCount"
                            }, {
                                totalCount
                            })
                        }),
                        showSorter && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            w: "160px",
                            marginLeft: "25px",
                            order: 3,
                            my: {
                                base: "15px",
                                md: "0"
                            },
                            position: "relative",
                            zIndex: "2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_.Form.ReactSelectTheme, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                                    value: (0,catalog_.getSortValue)(currentSort, options),
                                    classNamePrefix: ui_.Form.reactSelectThemeClassNamePrefix,
                                    options: options,
                                    onChange: handleSortChange
                                })
                            })
                        }),
                        showPagination && renderPagination && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            sx: {
                                "ul, li": {
                                    listStyle: "none",
                                    p: 0,
                                    m: 0
                                },
                                ".pagination": {
                                    d: "flex",
                                    gap: "2px",
                                    mt: {
                                        base: 14,
                                        md: 10
                                    },
                                    mb: {
                                        base: 10,
                                        md: 0
                                    }
                                },
                                li: {
                                    a: {
                                        px: 3,
                                        py: 1,
                                        borderRadius: "sm",
                                        fontSize: "sm",
                                        "&:hover": {
                                            bg: "gray.100"
                                        }
                                    },
                                    "&.active a": {
                                        bg: constants/* COLOR_MAP_PRIMARY */.LZ[storeView],
                                        color: "#fff",
                                        cursor: "default"
                                    }
                                }
                            },
                            children: pageInfo && /*#__PURE__*/ jsx_runtime_.jsx(shared_.Pagination, {
                                currentPage: pageInfo.currentPage,
                                pageSize: pageInfo.pageSize,
                                totalItems: pageInfo.totalItems,
                                onChange: handlePageChange
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LayeredNavMobile, {
                isOpen: isOpen,
                isDraft: isDraft,
                categoryId: categoryId,
                onClose: onClose,
                finalFocusRef: btnRef,
                onApplyFilters: ()=>{
                    onClose();
                    if (onChange) {
                        setTimeout(onChange, 500);
                    }
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                display: {
                    base: "block",
                    md: "none"
                },
                mx: "auto",
                mt: "20px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(BrandFilter, {})
            })
        ]
    });
};

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/layered-nav/filter.tsx






const Filter = ({ filterOptions , handleFilterChange , isFetching  })=>{
    const { code , items , name , selected , settings  } = filterOptions;
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(Boolean(settings === null || settings === void 0 ? void 0 : settings.collapsed));
    const isPriceFilter = code === constants_.CATALOG_FILTER.PRICE;
    const priceRange = isPriceFilter ? (0,catalog_.getPriceFilterRange)(items) : undefined;
    if (!items.length) {
        return null;
    }
    if (isPriceFilter && !priceRange) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                position: "relative",
                width: "100%",
                display: "block",
                variant: "unstyled",
                textAlign: "left",
                padding: "0 12px",
                borderRadius: "none",
                onClick: ()=>setToggle((toggle)=>!toggle),
                background: "gray.100",
                children: [
                    name,
                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronDownIcon, {
                        position: "absolute",
                        right: "12px",
                        top: "12px"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Collapse, {
                in: !toggle,
                animateOpacity: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    maxHeight: "215px",
                    overflow: "auto",
                    padding: "5px 0",
                    borderColor: "gray.100",
                    borderWidth: "1px",
                    children: priceRange ? /*#__PURE__*/ jsx_runtime_.jsx(catalog_.LayeredPriceFilter, {
                        minRange: priceRange[0],
                        maxRange: priceRange[1],
                        isFetching: isFetching,
                        onChange: (e)=>{
                            handleFilterChange({
                                requestVar: code,
                                value: [
                                    e
                                ]
                            });
                        },
                        value: selected === null || selected === void 0 ? void 0 : selected[0].value
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: items.map((item)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Checkbox, {
                                    padding: "2px 12px",
                                    isChecked: Boolean(selected === null || selected === void 0 ? void 0 : selected.find((el)=>el.value === item.value)),
                                    value: item.value,
                                    onChange: (e)=>{
                                        handleFilterChange({
                                            requestVar: item.requestVar,
                                            value: [
                                                item.value
                                            ]
                                        });
                                    },
                                    children: item.label
                                })
                            }, `f-${item.requestVar}-${item.value}`);
                        })
                    })
                })
            })
        ]
    }, code);
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/layered-nav/layered-nav.tsx






const LayeredNav = ({ categoryId , onFilterChange , ...boxProps })=>{
    const { isFetching , handleFilterChange , layeredNav , handleFilterRemove  } = (0,catalog_.useProductListPage)({
        categoryId,
        onFilterChange,
        withLayeredNav: true,
        filterElementRenderer: ({ label  })=>label
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        cursor: isFetching ? "wait" : "default",
        ...boxProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BrandFilter, {}),
            (layeredNav === null || layeredNav === void 0 ? void 0 : layeredNav.appliedFilters) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                pointerEvents: isFetching ? "none" : undefined,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                    spacing: 6,
                    align: "stretch",
                    children: layeredNav === null || layeredNav === void 0 ? void 0 : layeredNav.filterOptions.map((item)=>{
                        if (item.code === BRAND_FILTER_CODE) {
                            return;
                        }
                        return /*#__PURE__*/ jsx_runtime_.jsx(Filter, {
                            isFetching: isFetching,
                            filterOptions: item,
                            handleFilterChange: handleFilterChange
                        }, item.code);
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/layered-nav/index.tsx


;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/product-list-layout.tsx










const ProductListLayout = ({ categoryId , title , banner , loadingState , infiniteScroll =false  })=>{
    const categoryTopRef = (0,external_react_.useRef)(null);
    const { includeSuffix  } = (0,hooks_.useCoreContext)();
    const scrollTop = ()=>{
        var ref;
        window.scroll({
            top: ((ref = categoryTopRef.current) === null || ref === void 0 ? void 0 : ref.offsetTop) ?? 0,
            left: 0,
            behavior: "smooth"
        });
    };
    const { isError , isFetching , isLoading , products , layeredNav , setFilters , infiniteScrollRef , infiniteScrollHasNextPage ,  } = (0,catalog_.useProductListPage)({
        categoryId,
        enableGTM: true,
        withProducts: true,
        withLayeredNav: true,
        withInfiniteScroll: infiniteScroll
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(shared_.MetaData, {
                type: categoryId ? "PLP" : undefined,
                title: categoryId ? undefined : title,
                includeSuffix: includeSuffix
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: categoryTopRef
            }),
            banner,
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                variant: "wide",
                my: "40px",
                children: isLoading || loadingState ? /*#__PURE__*/ jsx_runtime_.jsx(ui_.PageLoading, {}) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        templateColumns: [
                            "1fr",
                            "1fr",
                            "300px 1fr"
                        ],
                        gap: "20px",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LayeredNav, {
                                display: [
                                    "none",
                                    "none",
                                    "block"
                                ],
                                categoryId: categoryId,
                                onFilterChange: scrollTop
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(LayeredControls, {
                                        categoryId: categoryId,
                                        showPagination: false
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ProductList, {
                                        listPage: categoryId ? "Category Page" : "Search Page",
                                        isError: isError,
                                        isFetching: isFetching,
                                        isLoading: isLoading,
                                        products: products,
                                        clearFiltersHandler: (layeredNav === null || layeredNav === void 0 ? void 0 : layeredNav.hasAppliedFilters) ? ()=>setFilters({}) : undefined
                                    }),
                                    infiniteScroll && infiniteScrollHasNextPage && /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {
                                            margin: "90px auto",
                                            size: "xl"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        ref: infiniteScrollRef
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LayeredControls, {
                                        categoryId: categoryId,
                                        showSorter: false,
                                        showTotalCount: false,
                                        showPagination: !infiniteScroll,
                                        showLayeredNavAction: false,
                                        onChange: scrollTop,
                                        justifyContent: "center"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../../packages/ui/index.ts + 5 modules
var ui = __webpack_require__(3877);
// EXTERNAL MODULE: external "@wpro/prismic"
var prismic_ = __webpack_require__(4703);
// EXTERNAL MODULE: ../../packages/prismic/index.ts + 46 modules
var prismic = __webpack_require__(9727);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/scenes/category-scene.tsx





const CategoryScene = ({ category  })=>{
    const { id , name , urlPath  } = category;
    const { document  } = (0,prismic_.useDocument)({
        uid: `category-${urlPath}`,
        types: [
            prismic/* EntityType.CategoryListing */.py.CategoryListing
        ]
    });
    const { banner_title: title , banner_background_image: bgImage , banner_display_breadcrumbs: displayBreadcrumbs , banner_content_placement: contentPlacement , banner_content_alignment: alignment ,  } = (document === null || document === void 0 ? void 0 : document.data) ?? {};
    return /*#__PURE__*/ jsx_runtime_.jsx(ProductListLayout, {
        title: name,
        categoryId: id,
        banner: !(bgImage === null || bgImage === void 0 ? void 0 : bgImage.url) ? undefined : /*#__PURE__*/ jsx_runtime_.jsx(ui/* HeadingBanner */.tG, {
            bgImage: {
                url: bgImage === null || bgImage === void 0 ? void 0 : bgImage.url,
                alt: ((bgImage === null || bgImage === void 0 ? void 0 : bgImage.alt) ?? title) ?? name
            },
            contentPlacement: contentPlacement ?? "center-left",
            alignment: alignment ?? "left",
            displayBreadcrumbs: displayBreadcrumbs ?? true,
            title: title,
            minH: "340px"
        })
    });
};

;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/scenes/index.ts



;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/components/index.tsx





;// CONCATENATED MODULE: ../../packages/shared/src/modules/catalog/index.ts



// EXTERNAL MODULE: ../../packages/shared/src/modules/cart/index.tsx + 13 modules
var cart = __webpack_require__(195);
// EXTERNAL MODULE: ../../packages/shared/src/modules/checkout/index.ts + 3 modules
var checkout = __webpack_require__(4235);
;// CONCATENATED MODULE: ../../packages/shared/src/modules/index.ts





/***/ }),

/***/ 3877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lr": () => (/* reexport */ Carousel),
  "i5": () => (/* reexport */ CarouselArrows),
  "Pn": () => (/* reexport */ CarouselNavigation),
  "qs": () => (/* reexport */ CarouselSlide),
  "tG": () => (/* reexport */ HeadingBanner),
  "n3": () => (/* reexport */ carouselAutoPlay),
  "vr": () => (/* reexport */ useCarousel)
});

// UNUSED EXPORTS: ImageBanner

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1161);
// EXTERNAL MODULE: external "@chakra-ui/react"
var external_chakra_ui_react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ../../packages/ui/src/components/carousel.tsx





const Carousel = /*#__PURE__*/ (0,external_react_.forwardRef)(function Carousel(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Flex, {
        ref: ref,
        className: "chakra-carousel",
        overflow: "hidden",
        position: "relative",
        userSelect: "none",
        ...props
    });
});
const CarouselSlide = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
        className: "chakra-carousel__slide",
        position: "relative",
        overflow: "hidden",
        minH: "100%",
        ...props
    });
const CarouselArrows = (props)=>{
    var ref;
    const slider = (ref = props.sliderInstance) === null || ref === void 0 ? void 0 : ref.current;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                className: "chakra-carousel__arrows arrow-left",
                left: "15px",
                onClick: ()=>{
                    var ref;
                    slider === null || slider === void 0 ? void 0 : slider.moveToIdx(// @ts-expect-error
                    (slider === null || slider === void 0 ? void 0 : slider.track.details.rel) - ((ref = slider.options.slides) === null || ref === void 0 ? void 0 : ref.perView));
                },
                ...arrowStyles,
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronLeftIcon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                className: "chakra-carousel__arrows arrow-right",
                right: "15px",
                onClick: ()=>{
                    var ref;
                    slider === null || slider === void 0 ? void 0 : slider.moveToIdx(// @ts-expect-error
                    slider.track.details.rel + ((ref = slider.options.slides) === null || ref === void 0 ? void 0 : ref.perView));
                },
                ...arrowStyles,
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronRightIcon, {})
            })
        ]
    });
};
const arrowStyles = {
    position: "absolute",
    top: "45%",
    variant: "ghost",
    size: "sm",
    px: "0",
    sx: {
        svg: {
            w: "25px",
            h: "25px"
        }
    },
    _hover: {
        opacity: "0.8",
        bg: "transparent"
    }
};
const CarouselNavigation = ({ carouselItems , handleChange , carouselIndex , slidesPerView , ...boxProps })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.HStack, {
        className: "dots",
        spacing: "6px",
        justify: "center",
        mt: "40px",
        ...boxProps,
        children: carouselItems.map((item, i)=>{
            const isActive = carouselIndex >= item && carouselIndex <= item + (slidesPerView - 1);
            return /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                w: "12px",
                h: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                background: isActive ? "turquoise.400" : "turquoise.300",
                onClick: ()=>handleChange(item)
            }, i);
        })
    });
};
const useCarousel = ({ options , plugin  })=>{
    const defaultOptions = {
        selector: ".chakra-carousel__slide"
    };
    return (0,react_.useKeenSlider)({
        ...defaultOptions,
        ...options
    }, plugin);
};
const carouselAutoPlay = (slider, speed)=>{
    let timeout;
    let mouseOver = false;
    function clearNextTimeout() {
        clearTimeout(timeout);
    }
    function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(()=>{
            slider === null || slider === void 0 ? void 0 : slider.next();
        }, speed);
    }
    slider.on("created", ()=>{
        slider.container.addEventListener("mouseover", ()=>{
            mouseOver = true;
            clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", ()=>{
            mouseOver = false;
            nextTimeout();
        });
        nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
};

// EXTERNAL MODULE: ../../node_modules/next/image.js
var next_image = __webpack_require__(6577);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ../../packages/ui/src/components/image-banner.tsx



const ImageBanner = ({ image , imageMobile , rootProps  })=>{
    if (!(image === null || image === void 0 ? void 0 : image.src) && !(imageMobile === null || imageMobile === void 0 ? void 0 : imageMobile.src)) {
        return null;
    }
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                ...rootProps,
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                display: [
                    "none",
                    "none",
                    "block"
                ],
                children: /*#__PURE__*/ _jsx(Image, {
                    src: ((image === null || image === void 0 ? void 0 : image.src) ?? (imageMobile === null || imageMobile === void 0 ? void 0 : imageMobile.src)) ?? "",
                    alt: ((image === null || image === void 0 ? void 0 : image.alt) ?? (imageMobile === null || imageMobile === void 0 ? void 0 : imageMobile.alt)) ?? "",
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ _jsx(Box, {
                ...rootProps,
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
                display: [
                    "block",
                    "block",
                    "none"
                ],
                children: /*#__PURE__*/ _jsx(Image, {
                    src: ((imageMobile === null || imageMobile === void 0 ? void 0 : imageMobile.src) ?? (image === null || image === void 0 ? void 0 : image.src)) ?? "",
                    alt: ((imageMobile === null || imageMobile === void 0 ? void 0 : imageMobile.alt) ?? (image === null || image === void 0 ? void 0 : image.alt)) ?? "",
                    layout: "fill",
                    objectFit: "cover"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__(8938);
// EXTERNAL MODULE: ../../packages/prismic/index.ts + 46 modules
var prismic = __webpack_require__(9727);
// EXTERNAL MODULE: external "@wpro/magento/dist/modules/shared"
var shared_ = __webpack_require__(2623);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ../../packages/ui/src/components/heading-banner.tsx







const HeadingBanner = ({ bgImage , contentPlacement , alignment , displayBreadcrumbs , title , subtext , ctaLabel , ctaLink , ctaType , storeView , ...BoxProps })=>{
    const hasBg = bgImage.url;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Flex, {
        w: "100%",
        pos: "relative",
        _before: {
            content: `''`,
            pos: "absolute",
            top: "0",
            left: "0",
            w: "100%",
            h: "100%",
            bgColor: "blackAlpha.300",
            zIndex: "1"
        },
        ...BoxProps,
        children: [
            hasBg && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: bgImage.url,
                alt: bgImage.alt ?? "",
                layout: "fill",
                objectFit: "cover"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Flex, {
                maxW: "container.xl",
                mx: "auto",
                pos: "relative",
                zIndex: "2",
                px: {
                    base: "15px",
                    md: "40px"
                },
                ...prismic/* placementOptions */.NV[contentPlacement],
                sx: {
                    "*": {
                        color: `${hasBg ? "white" : "secondary.600"} !important`
                    }
                },
                w: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_react_.Box, {
                    textAlign: alignment,
                    sx: {
                        "> *": {
                            mb: "20px"
                        }
                    },
                    children: [
                        displayBreadcrumbs && /*#__PURE__*/ jsx_runtime_.jsx(shared_.Breadcrumbs, {
                            my: 5,
                            pageTitle: title ?? "Page",
                            separator: "|"
                        }),
                        title && /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Heading, {
                            fontSize: "3.125rem",
                            children: title
                        }),
                        subtext && Boolean(subtext === null || subtext === void 0 ? void 0 : subtext.length) && /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Box, {
                            sx: prismic/* contentStyles */._R,
                            children: external_prismic_reactjs_.RichText.render(subtext)
                        }),
                        ctaLabel && ctaLink && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: ctaLink,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_react_.Button, {
                                as: "a",
                                variant: `${ctaType}-${storeView}`,
                                children: ctaLabel
                            })
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ../../packages/ui/src/components/index.ts




;// CONCATENATED MODULE: ../../packages/ui/src/index.ts


;// CONCATENATED MODULE: ../../packages/ui/index.ts



/***/ })

};
;