module.exports = [
"[project]/src/lib/db.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI || "";
if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in environment variables");
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
            minPoolSize: 5,
            maxPoolSize: 10,
            socketTimeoutMS: 5000
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>mongoose).catch((error)=>{
            cached.promise = null;
            throw error;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (error) {
        throw new Error(`Database connection failed: ${error instanceof Error ? error.message : error}`);
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}),
"[project]/src/models/newsStudy.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const newsStudySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    heading: {
        type: String,
        required: [
            true,
            "Heading is required"
        ]
    },
    image: {
        type: String,
        required: [
            true,
            "Image is required"
        ]
    },
    imageAlt: {
        type: String
    },
    shortTitle: {
        type: String,
        required: [
            true,
            "Short title is required"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Description is required"
        ]
    },
    slug: {
        type: String,
        required: [
            true,
            "Slug is required"
        ],
        unique: true,
        trim: true,
        lowercase: true
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    metaKeywords: {
        type: String
    }
}, {
    timestamps: true
});
const NewsStudy = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.NewsStudy || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("NewsStudy", newsStudySchema);
const __TURBOPACK__default__export__ = NewsStudy;
}),
"[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4004727f3dad8e090f6df4205ec0b20f2b9fb5767a":"getNewsStudyBySlug","400c051fb722a30e3a8d082bc8bf884e3ad16fa8f8":"deleteNewsStudy","4065d38590e52e9cf5135708448ecd01c1e10fbfc6":"getNewsStudyById","4073ec53a39d6fe2482eb17afd7b9e9619e2b92050":"createNewsStudy","4074b45290a1d124fce41cba8d6e87f39cac957e96":"getNewsStudies","601b5df33f9517c0ec16f5e8c2c014fc0325c19971":"getOtherPosts","609bbfbb388a37f06cccedd3b847641a2098e57c7f":"updateNewsStudy"},"",""] */ __turbopack_context__.s([
    "createNewsStudy",
    ()=>createNewsStudy,
    "deleteNewsStudy",
    ()=>deleteNewsStudy,
    "getNewsStudies",
    ()=>getNewsStudies,
    "getNewsStudyById",
    ()=>getNewsStudyById,
    "getNewsStudyBySlug",
    ()=>getNewsStudyBySlug,
    "getOtherPosts",
    ()=>getOtherPosts,
    "updateNewsStudy",
    ()=>updateNewsStudy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/newsStudy.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createNewsStudy(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/news-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/news");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/news/[slug]");
        return {
            success: true
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
        return {
            error: "An unexpected error occurred"
        };
    }
}
async function getNewsStudies(limit) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        let studies;
        if (limit) {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
                createdAt: -1
            }).limit(limit);
        } else {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
                createdAt: -1
            });
        }
        const serializedStudies = studies.map((study)=>{
            return {
                ...study,
                _id: study?._id?.toString(),
                createdAt: study?.createdAt?.toISOString(),
                updatedAt: study?.updatedAt?.toISOString()
            };
        });
        return {
            success: true,
            studies: serializedStudies
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
        return {
            error: "An unexpected error occurred"
        };
    }
}
async function deleteNewsStudy(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/news-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/news");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/news/[slug]");
        return {
            success: true
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
        return {
            error: "An unexpected error occurred"
        };
    }
}
async function updateNewsStudy(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/news-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/news");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/news/[slug]");
        return {
            success: true
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
        return {
            error: "An unexpected error occurred"
        };
    }
}
async function getNewsStudyById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!study) {
            return {
                error: "News study not found"
            };
        }
        const serializedStudy = {
            ...study,
            _id: study?._id?.toString(),
            createdAt: study?.createdAt?.toISOString(),
            updatedAt: study?.updatedAt?.toISOString()
        };
        return {
            success: true,
            study: serializedStudy
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
        return {
            error: "An unexpected error occurred"
        };
    }
}
async function getNewsStudyBySlug(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            slug: slug
        }).lean();
        if (!study) {
            return {
                error: "News study not found"
            };
        }
        const serializedStudy = {
            ...study,
            _id: study?._id?.toString(),
            createdAt: study?.createdAt?.toISOString(),
            updatedAt: study?.updatedAt?.toISOString()
        };
        return {
            success: true,
            study: serializedStudy
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
        return {
            error: "An unexpected error occurred"
        };
    }
}
async function getOtherPosts(slug, limit) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
            slug: {
                $ne: slug
            }
        }, {
            heading: 1,
            slug: 1,
            image: 1,
            imageAlt: 1,
            _id: 0
        }).limit(limit).lean();
        if (!studies) {
            return {
                error: "Studies not found"
            };
        }
        const serializedStudies = studies.map((study)=>{
            return {
                ...study,
                _id: study?._id?.toString(),
                createdAt: study?.createdAt?.toISOString(),
                updatedAt: study?.updatedAt?.toISOString()
            };
        });
        return {
            success: true,
            otherPosts: serializedStudies
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                error: error.message
            };
        }
        return {
            error: "An unexpected error occurred"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createNewsStudy,
    getNewsStudies,
    deleteNewsStudy,
    updateNewsStudy,
    getNewsStudyById,
    getNewsStudyBySlug,
    getOtherPosts
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createNewsStudy, "4073ec53a39d6fe2482eb17afd7b9e9619e2b92050", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsStudies, "4074b45290a1d124fce41cba8d6e87f39cac957e96", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNewsStudy, "400c051fb722a30e3a8d082bc8bf884e3ad16fa8f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateNewsStudy, "609bbfbb388a37f06cccedd3b847641a2098e57c7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsStudyById, "4065d38590e52e9cf5135708448ecd01c1e10fbfc6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsStudyBySlug, "4004727f3dad8e090f6df4205ec0b20f2b9fb5767a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOtherPosts, "601b5df33f9517c0ec16f5e8c2c014fc0325c19971", null);
}),
"[project]/src/models/about.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const AboutSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    image: {
        type: String,
        required: [
            true,
            "Image is required"
        ]
    },
    imageAlt: {
        type: String,
        required: [
            true,
            "Image alt is required"
        ]
    },
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    content: {
        type: String,
        required: [
            true,
            "Content is required"
        ]
    },
    points: [
        {
            text: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true
            }
        }
    ]
});
const About = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.About || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("About", AboutSchema);
const __TURBOPACK__default__export__ = About;
}),
"[project]/src/actions/about.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00e1bcdbe052233bad4f3841ebcd9ef70bea670646":"getAboutData","4052428fb163da4b3d6e026dd8ffdd9297e52921ed":"updateAboutData"},"",""] */ __turbopack_context__.s([
    "getAboutData",
    ()=>getAboutData,
    "updateAboutData",
    ()=>updateAboutData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$about$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/about.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getAboutData() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$about$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().lean();
        if (!result) {
            return {
                success: true,
                data: null
            };
        }
        let migratedResult = {
            ...result
        };
        if (result.points && result.points.length > 0) {
            const needsMigration = result.points.some((point)=>typeof point === "string");
            if (needsMigration) {
                migratedResult.points = result.points.map((point, index)=>({
                        text: typeof point === "string" ? point : point.text,
                        order: typeof point === "string" ? index : point.order
                    }));
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$about$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(result._id, {
                    points: migratedResult.points
                });
            }
        }
        const serializedResult = {
            ...migratedResult,
            _id: migratedResult._id.toString()
        };
        return {
            success: true,
            data: serializedResult
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateAboutData(data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const existingAbout = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$about$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne();
        if (existingAbout) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$about$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(existingAbout._id, data);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$about$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/about");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAboutData,
    updateAboutData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAboutData, "00e1bcdbe052233bad4f3841ebcd9ef70bea670646", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAboutData, "4052428fb163da4b3d6e026dd8ffdd9297e52921ed", null);
}),
"[project]/src/models/caseStudies.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const CaseStudySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    heading: {
        type: String,
        required: [
            true,
            "Heading is required"
        ]
    },
    image: {
        type: String,
        required: [
            true,
            "Image is required"
        ]
    },
    imageAlt: {
        type: String,
        required: [
            true,
            "Image alt is required"
        ]
    },
    date: {
        type: String,
        required: [
            true,
            "Date is required"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Description is required"
        ]
    },
    slug: {
        type: String,
        required: [
            true,
            "Slug is required"
        ],
        unique: true,
        trim: true,
        lowercase: true
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    metaKeywords: {
        type: String
    }
}, {
    timestamps: true
});
const CaseStudy = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.CaseStudy || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("CaseStudy", CaseStudySchema);
const __TURBOPACK__default__export__ = CaseStudy;
}),
"[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403dd90974a0400634b7dab0f9ac94bb9797353609":"createCaseStudy","408912264e964bf9fc61661e0aff264538bfa427a3":"getCaseStudies","40aa15106dce28bc5bf2e11235e325c7945bad8de9":"getCaseStudyById","40eb2fdbc0fdd6f58010fc0c799d1af3592a3603d5":"getCaseStudyBySlug","40fb50a850141e53de95aa8f92ef98bf29725c61f8":"deleteCaseStudy","604c1d840500bb4630d76c7cc891768f4fc3ced783":"updateCaseStudy","60bc45021c660c9ca03b81fdfef11361a260a7292d":"getOtherCaseStudies"},"",""] */ __turbopack_context__.s([
    "createCaseStudy",
    ()=>createCaseStudy,
    "deleteCaseStudy",
    ()=>deleteCaseStudy,
    "getCaseStudies",
    ()=>getCaseStudies,
    "getCaseStudyById",
    ()=>getCaseStudyById,
    "getCaseStudyBySlug",
    ()=>getCaseStudyBySlug,
    "getOtherCaseStudies",
    ()=>getOtherCaseStudies,
    "updateCaseStudy",
    ()=>updateCaseStudy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/caseStudies.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createCaseStudy(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/case-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies/[slug]");
        return {
            success: true
        };
    } catch (error) {
        if (error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function getCaseStudies(limit) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        let studies;
        if (limit) {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
                createdAt: -1
            }).limit(limit);
        } else {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
                createdAt: -1
            });
        }
        const serializedStudies = studies.map((study)=>{
            return {
                ...study,
                _id: study?._id?.toString(),
                createdAt: study?.createdAt?.toISOString(),
                updatedAt: study?.updatedAt?.toISOString()
            };
        });
        return {
            success: true,
            studies: serializedStudies
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function getCaseStudyById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!study) {
            return {
                success: false,
                error: "Case study not found"
            };
        }
        return {
            success: true,
            study: {
                ...study,
                _id: study?._id?.toString(),
                createdAt: study?.createdAt?.toISOString(),
                updatedAt: study?.updatedAt?.toISOString()
            }
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function updateCaseStudy(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/case-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies/[slug]");
        return {
            success: true
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function deleteCaseStudy(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/case-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies/[slug]");
        return {
            success: true
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        } else {
            return {
                success: false,
                error: "An unexpected error occurred"
            };
        }
    }
}
async function getCaseStudyBySlug(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        const serializedStudy = {
            ...study,
            _id: study?._id?.toString(),
            createdAt: study?.createdAt?.toISOString(),
            updatedAt: study?.updatedAt?.toISOString()
        };
        return {
            success: true,
            study: serializedStudy
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function getOtherCaseStudies(slug, limit) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
            slug: {
                $ne: slug
            }
        }, {
            heading: 1,
            slug: 1,
            image: 1,
            imageAlt: 1,
            _id: 0
        }).limit(limit).lean();
        const serializedStudies = studies.map((study)=>{
            return {
                ...study,
                _id: study?._id?.toString(),
                createdAt: study?.createdAt?.toISOString(),
                updatedAt: study?.updatedAt?.toISOString()
            };
        });
        return {
            success: true,
            otherPosts: serializedStudies
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCaseStudy,
    getCaseStudies,
    getCaseStudyById,
    updateCaseStudy,
    deleteCaseStudy,
    getCaseStudyBySlug,
    getOtherCaseStudies
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCaseStudy, "403dd90974a0400634b7dab0f9ac94bb9797353609", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCaseStudies, "408912264e964bf9fc61661e0aff264538bfa427a3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCaseStudyById, "40aa15106dce28bc5bf2e11235e325c7945bad8de9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCaseStudy, "604c1d840500bb4630d76c7cc891768f4fc3ced783", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCaseStudy, "40fb50a850141e53de95aa8f92ef98bf29725c61f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCaseStudyBySlug, "40eb2fdbc0fdd6f58010fc0c799d1af3592a3603d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOtherCaseStudies, "60bc45021c660c9ca03b81fdfef11361a260a7292d", null);
}),
"[project]/src/models/hero.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const heroSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: true
    },
    knowMoreText: {
        type: String,
        required: true,
        default: "Know More"
    },
    knowMoreLink: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
const Hero = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Hero || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Hero", heroSchema);
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/src/actions/heroSection.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0027c83403450b86eb5811e92eafc80f86c04dce5e":"getHeroBanners","0050b42dbb275b03f455faf095dd55d2e6b8c0417e":"getAllHeroBanners","40b74ac4fb476fe6f578c03afc748b8f13914a1a77":"toggleHeroBannerStatus","40be03c32ef43a7a8dd8b0333f5d63b389ba643ea0":"getHeroBannerById","40be9054ee13345f5d90b2806194a59a0014614396":"updateHeroBannersOrder","40c143b162ea2a8e647dbcafbf3a164b29dc21cb89":"deleteHeroBanner","40f56e68ae528297cb45baab30b32a8e55ce5f3211":"createHeroBanner","607be220fbf47eb37a54b71d674aaff010ef23f5bb":"updateHeroBanner"},"",""] */ __turbopack_context__.s([
    "createHeroBanner",
    ()=>createHeroBanner,
    "deleteHeroBanner",
    ()=>deleteHeroBanner,
    "getAllHeroBanners",
    ()=>getAllHeroBanners,
    "getHeroBannerById",
    ()=>getHeroBannerById,
    "getHeroBanners",
    ()=>getHeroBanners,
    "toggleHeroBannerStatus",
    ()=>toggleHeroBannerStatus,
    "updateHeroBanner",
    ()=>updateHeroBanner,
    "updateHeroBannersOrder",
    ()=>updateHeroBannersOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/hero.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getHeroBanners() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
            isActive: true
        }).sort({
            order: 1
        }).lean();
        const serializedResult = result.map((banner)=>({
                ...banner,
                _id: banner._id.toString()
            }));
        return {
            success: true,
            data: serializedResult
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getAllHeroBanners() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find().sort({
            order: 1
        }).lean();
        const serializedResult = result.map((banner)=>({
                ...banner,
                _id: banner._id.toString()
            }));
        return {
            success: true,
            data: serializedResult
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getHeroBannerById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!result) {
            return {
                success: false,
                error: "Hero banner not found"
            };
        }
        const serializedResult = {
            ...result,
            _id: result._id.toString()
        };
        return {
            success: true,
            data: serializedResult
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createHeroBanner(data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/hero");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateHeroBanner(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/hero");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteHeroBanner(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/hero");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function toggleHeroBannerStatus(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const banner = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(id);
        if (!banner) {
            return {
                success: false,
                error: "Hero banner not found"
            };
        }
        banner.isActive = !banner.isActive;
        await banner.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/hero");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateHeroBannersOrder(banners) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const updatePromises = banners.map((banner, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$hero$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(banner._id, {
                order: index
            }));
        await Promise.all(updatePromises);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/hero");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getHeroBanners,
    getAllHeroBanners,
    getHeroBannerById,
    createHeroBanner,
    updateHeroBanner,
    deleteHeroBanner,
    toggleHeroBannerStatus,
    updateHeroBannersOrder
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHeroBanners, "0027c83403450b86eb5811e92eafc80f86c04dce5e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllHeroBanners, "0050b42dbb275b03f455faf095dd55d2e6b8c0417e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getHeroBannerById, "40be03c32ef43a7a8dd8b0333f5d63b389ba643ea0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createHeroBanner, "40f56e68ae528297cb45baab30b32a8e55ce5f3211", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHeroBanner, "607be220fbf47eb37a54b71d674aaff010ef23f5bb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteHeroBanner, "40c143b162ea2a8e647dbcafbf3a164b29dc21cb89", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleHeroBannerStatus, "40b74ac4fb476fe6f578c03afc748b8f13914a1a77", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHeroBannersOrder, "40be9054ee13345f5d90b2806194a59a0014614396", null);
}),
"[project]/src/models/product.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const productSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    services: [
        {
            image: {
                type: String,
                required: true
            },
            imageAlt: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            order: {
                type: Number,
                required: true,
                default: 0
            }
        }
    ]
});
const Product = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Product || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Product", productSchema);
const __TURBOPACK__default__export__ = Product;
}),
"[project]/src/actions/product.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00de726e297dfb1eb18dec5a5b9015083fb3f7397b":"getProductData","40e001250ad1984676c750e4edc7a49d972b62066f":"updateProductData"},"",""] */ __turbopack_context__.s([
    "getProductData",
    ()=>getProductData,
    "updateProductData",
    ()=>updateProductData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$product$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/product.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getProductData() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$product$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().lean();
        if (!result) {
            return {
                success: true,
                data: null
            };
        }
        let migratedResult = {
            ...result
        };
        if (result.services && result.services.length > 0) {
            const needsMigration = result.services.some((service)=>typeof service.order === "undefined");
            if (needsMigration) {
                migratedResult.services = result.services.map((service, index)=>({
                        ...service,
                        order: service.order !== undefined ? service.order : index
                    }));
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$product$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(result._id, {
                    services: migratedResult.services
                });
            }
            migratedResult.services.sort((a, b)=>a.order - b.order);
        }
        const serializedResult = {
            ...migratedResult,
            _id: migratedResult._id.toString()
        };
        return {
            success: true,
            data: serializedResult
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateProductData(data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const existingProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$product$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne();
        if (existingProduct) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$product$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(existingProduct._id, data);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$product$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/products");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProductData,
    updateProductData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductData, "00de726e297dfb1eb18dec5a5b9015083fb3f7397b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductData, "40e001250ad1984676c750e4edc7a49d972b62066f", null);
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"404874274d5b9fee7780d06882eeb5f906a185a195":"sendContactEmail","40d5ae722d6dad85335cb3aaa3af210327f8120726":"sendEmail"},"",""] */ __turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail,
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function sendEmail(formData) {
    try {
        const { captchaValue, ...rest } = formData;
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`, {
            method: "POST"
        });
        const data = await response.json();
        if (!data.success) {
            return {
                success: false,
                message: "Captcha verification failed."
            };
        }
        await resend.emails.send({
            from: process.env.Email_from,
            to: process.env.Email_to,
            subject: "New Enquiry from Website",
            html: ` 
        <h2>New Enquiry Details:</h2>
        <p><strong>Name:</strong> ${rest.firstName} ${rest.lastName}</p>
        <p><strong>Phone:</strong> ${rest.phone}</p>
        <p><strong>Email:</strong> ${rest.email}</p>
        <p><strong>Service Interest:</strong> ${rest.service}</p>
        <p><strong>Loan Amount:</strong> ${rest.loanAmount}</p>
        <p><strong>Property Value:</strong> ${rest.propertyValue}</p>
      `
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            error: "Failed to send email"
        };
    }
}
async function sendContactEmail(formData) {
    try {
        const { captchaValue, ...rest } = formData;
        // ✅ Step 1: Verify captcha
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`, {
            method: "POST"
        });
        const data = await response.json();
        if (!data.success) {
            return {
                success: false,
                message: "Captcha verification failed."
            };
        }
        await resend.emails.send({
            from: process.env.Email_from,
            to: process.env.Email_to,
            subject: `New Contact Message: ${rest.subject}`,
            html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${rest.firstName}</p>
        <p><strong>Phone:</strong> ${rest.phone}</p>
        <p><strong>Email:</strong> ${rest.email}</p>
        <p><strong>Subject:</strong> ${rest.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${rest.message}</p> 
      `
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Error sending contact email:", error);
        return {
            success: false,
            error: "Failed to send email"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendEmail,
    sendContactEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendEmail, "40d5ae722d6dad85335cb3aaa3af210327f8120726", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendContactEmail, "404874274d5b9fee7780d06882eeb5f906a185a195", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/about.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/actions/heroSection.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/actions/product.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$about$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/about.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/heroSection.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/about.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/actions/heroSection.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/actions/product.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0027c83403450b86eb5811e92eafc80f86c04dce5e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeroBanners"],
    "0050b42dbb275b03f455faf095dd55d2e6b8c0417e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllHeroBanners"],
    "00de726e297dfb1eb18dec5a5b9015083fb3f7397b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductData"],
    "00e1bcdbe052233bad4f3841ebcd9ef70bea670646",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$about$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutData"],
    "4004727f3dad8e090f6df4205ec0b20f2b9fb5767a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsStudyBySlug"],
    "400c051fb722a30e3a8d082bc8bf884e3ad16fa8f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteNewsStudy"],
    "403dd90974a0400634b7dab0f9ac94bb9797353609",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCaseStudy"],
    "4052428fb163da4b3d6e026dd8ffdd9297e52921ed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$about$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutData"],
    "4065d38590e52e9cf5135708448ecd01c1e10fbfc6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsStudyById"],
    "4073ec53a39d6fe2482eb17afd7b9e9619e2b92050",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNewsStudy"],
    "4074b45290a1d124fce41cba8d6e87f39cac957e96",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsStudies"],
    "408912264e964bf9fc61661e0aff264538bfa427a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCaseStudies"],
    "40aa15106dce28bc5bf2e11235e325c7945bad8de9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCaseStudyById"],
    "40b74ac4fb476fe6f578c03afc748b8f13914a1a77",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleHeroBannerStatus"],
    "40be03c32ef43a7a8dd8b0333f5d63b389ba643ea0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeroBannerById"],
    "40be9054ee13345f5d90b2806194a59a0014614396",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHeroBannersOrder"],
    "40c143b162ea2a8e647dbcafbf3a164b29dc21cb89",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteHeroBanner"],
    "40d5ae722d6dad85335cb3aaa3af210327f8120726",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"],
    "40e001250ad1984676c750e4edc7a49d972b62066f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductData"],
    "40eb2fdbc0fdd6f58010fc0c799d1af3592a3603d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCaseStudyBySlug"],
    "40f56e68ae528297cb45baab30b32a8e55ce5f3211",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHeroBanner"],
    "40fb50a850141e53de95aa8f92ef98bf29725c61f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCaseStudy"],
    "601b5df33f9517c0ec16f5e8c2c014fc0325c19971",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOtherPosts"],
    "604c1d840500bb4630d76c7cc891768f4fc3ced783",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCaseStudy"],
    "607be220fbf47eb37a54b71d674aaff010ef23f5bb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateHeroBanner"],
    "609bbfbb388a37f06cccedd3b847641a2098e57c7f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateNewsStudy"],
    "60bc45021c660c9ca03b81fdfef11361a260a7292d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOtherCaseStudies"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$about$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/about.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/actions/heroSection.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/actions/product.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$about$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/about.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$heroSection$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/heroSection.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7afc9fab._.js.map