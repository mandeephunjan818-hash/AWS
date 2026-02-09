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
"[project]/src/models/newsIndex.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const newsIndexSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    content: {
        type: String
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
});
const NewsIndex = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.NewsIndex || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("NewsIndex", newsIndexSchema);
const __TURBOPACK__default__export__ = NewsIndex;
}),
"[project]/src/actions/newsIndex.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00903952f1db2593b00136f2267f8b30dd807c8b8c":"getNewsIndex","40473ed99851b72eca00bc2f43e25ef1f4f7edbf5d":"updateNewsIndex"},"",""] */ __turbopack_context__.s([
    "getNewsIndex",
    ()=>getNewsIndex,
    "updateNewsIndex",
    ()=>updateNewsIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/newsIndex.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getNewsIndex() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const news = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().lean();
        const serializedNews = {
            ...news,
            _id: news?._id?.toString()
        };
        return {
            success: true,
            data: serializedNews
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateNewsIndex(data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const news = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({}).lean();
        if (!news) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(news._id, data);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/news-index");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/news");
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
    getNewsIndex,
    updateNewsIndex
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsIndex, "00903952f1db2593b00136f2267f8b30dd807c8b8c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateNewsIndex, "40473ed99851b72eca00bc2f43e25ef1f4f7edbf5d", null);
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
"[project]/.next-internal/server/app/news/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/newsIndex.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newsIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newsIndex.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/news/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/newsIndex.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00903952f1db2593b00136f2267f8b30dd807c8b8c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newsIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsIndex"],
    "4004727f3dad8e090f6df4205ec0b20f2b9fb5767a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsStudyBySlug"],
    "400c051fb722a30e3a8d082bc8bf884e3ad16fa8f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteNewsStudy"],
    "40473ed99851b72eca00bc2f43e25ef1f4f7edbf5d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newsIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateNewsIndex"],
    "4065d38590e52e9cf5135708448ecd01c1e10fbfc6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsStudyById"],
    "4073ec53a39d6fe2482eb17afd7b9e9619e2b92050",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNewsStudy"],
    "4074b45290a1d124fce41cba8d6e87f39cac957e96",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsStudies"],
    "601b5df33f9517c0ec16f5e8c2c014fc0325c19971",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOtherPosts"],
    "609bbfbb388a37f06cccedd3b847641a2098e57c7f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateNewsStudy"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$news$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$newsIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/news/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/newsIndex.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newsIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newsIndex.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newStudy.actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_1ca54df5._.js.map