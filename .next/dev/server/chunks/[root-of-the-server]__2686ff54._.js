module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/models/business-categories.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const businessCategoriesSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
    content: {
        type: String
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
});
const BusinessCategories = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.BusinessCategories || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("BusinessCategories", businessCategoriesSchema);
const __TURBOPACK__default__export__ = BusinessCategories;
}),
"[project]/src/actions/businessCategory.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00da4beafdc91462f771dfe445b65bf273929501db":"getBusinessCategory","4016f00f33481989e7a5820f7acb9c44c58a1d9439":"getBusinessCategoryBySlug","40309f282a0890d266747af63e1b3886bf1508a49d":"getBusinessCategoryById","405a8d4ba2d98fd99c5b6d7c25e37b1efd1e1ace85":"deleteBusinessCategory","40f92fb5c888253464cd44f0d0d052d5c35faca777":"createBusinessCategory","60a9ea665e420dcf4381e395e4077dd3de7c8bbbbc":"updateBusinessCategory"},"",""] */ __turbopack_context__.s([
    "createBusinessCategory",
    ()=>createBusinessCategory,
    "deleteBusinessCategory",
    ()=>deleteBusinessCategory,
    "getBusinessCategory",
    ()=>getBusinessCategory,
    "getBusinessCategoryById",
    ()=>getBusinessCategoryById,
    "getBusinessCategoryBySlug",
    ()=>getBusinessCategoryBySlug,
    "updateBusinessCategory",
    ()=>updateBusinessCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$categories$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/business-categories.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getBusinessCategory() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const businessCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$categories$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean();
        return {
            success: true,
            data: businessCategory
        };
    } catch  {
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function createBusinessCategory(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$categories$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function updateBusinessCategory(id, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$categories$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function deleteBusinessCategory(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$categories$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function getBusinessCategoryById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$categories$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        return {
            success: true,
            data
        };
    } catch  {
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
async function getBusinessCategoryBySlug(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$categories$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        if (!category) {
            return {
                success: false,
                error: "Category not found"
            };
        }
        const serializedCategory = {
            ...category,
            _id: category._id.toString()
        };
        return {
            success: true,
            data: serializedCategory
        };
    } catch (error) {
        return {
            success: false,
            error: "An unexpected error occurred"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBusinessCategory,
    createBusinessCategory,
    updateBusinessCategory,
    deleteBusinessCategory,
    getBusinessCategoryById,
    getBusinessCategoryBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessCategory, "00da4beafdc91462f771dfe445b65bf273929501db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createBusinessCategory, "40f92fb5c888253464cd44f0d0d052d5c35faca777", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBusinessCategory, "60a9ea665e420dcf4381e395e4077dd3de7c8bbbbc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBusinessCategory, "405a8d4ba2d98fd99c5b6d7c25e37b1efd1e1ace85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessCategoryById, "40309f282a0890d266747af63e1b3886bf1508a49d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessCategoryBySlug, "4016f00f33481989e7a5820f7acb9c44c58a1d9439", null);
}),
"[project]/src/models/business-funding.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const businessFundingSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
    content: {
        type: String
    },
    shortContent: {
        type: String,
        required: [
            true,
            "Short content is required"
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
    },
    pdf: {
        type: String
    },
    pdfAlt: {
        type: String
    },
    category: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "BusinessCategories"
    }
});
const BusinessFunding = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.BusinessFunding || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("BusinessFunding", businessFundingSchema);
const __TURBOPACK__default__export__ = BusinessFunding;
}),
"[project]/src/actions/businessFunding.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000de60b0a39fcfffad3126f8c906da45ce01c1fc6":"getBusinessFunding","4050577b5adb8ba734a08826a6e4542ad67a565d91":"getBusinessFundingById","40a26ebc1fe34852d4494e9c9c3f162a39c8b4f3f9":"createBusinessFunding","40b180ae5c452474d24969bbd2445f53a67582f7d5":"getBusinessFundingByCategory","40b94a21667868bb70a373e995cc440f0dd6b199e0":"deleteBusinessFunding","40c160fe3e27b79fdbac1dcdc89be36b18d6af5f6a":"getBusinessFundingBySlug","60e65aa388f19af8f31412111334fcd3aaa72eac8d":"updateBusinessFunding"},"",""] */ __turbopack_context__.s([
    "createBusinessFunding",
    ()=>createBusinessFunding,
    "deleteBusinessFunding",
    ()=>deleteBusinessFunding,
    "getBusinessFunding",
    ()=>getBusinessFunding,
    "getBusinessFundingByCategory",
    ()=>getBusinessFundingByCategory,
    "getBusinessFundingById",
    ()=>getBusinessFundingById,
    "getBusinessFundingBySlug",
    ()=>getBusinessFundingBySlug,
    "updateBusinessFunding",
    ()=>updateBusinessFunding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/business-funding.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getBusinessFunding() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).populate("category").lean();
        const serializedBusinessFunding = businessFunding.map((item)=>{
            return {
                ...item,
                _id: item?._id?.toString(),
                category: item?.category ? item.category._id.toString() : "",
                categoryName: item?.category ? item.category.heading : ""
            };
        });
        return {
            success: true,
            data: serializedBusinessFunding
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getBusinessFundingById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).populate("category").lean();
        if (!businessFunding) {
            return {
                success: false,
                error: "Business Funding not found"
            };
        }
        const serializedBusinessFunding = {
            ...businessFunding,
            _id: businessFunding?._id?.toString(),
            category: businessFunding?.category ? businessFunding.category._id.toString() : "",
            categoryName: businessFunding?.category ? businessFunding.category.heading : ""
        };
        return {
            success: true,
            data: serializedBusinessFunding
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createBusinessFunding(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/business-funding");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        return {
            success: true,
            data: businessFunding
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateBusinessFunding(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/business-funding");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        return {
            success: true,
            data: businessFunding
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteBusinessFunding(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/business-funding");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        return {
            success: true,
            data: businessFunding
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getBusinessFundingBySlug(slug) {
    try {
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getBusinessFundingByCategory(categorySlug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // First get the category by slug
        const { default: BusinessCategories } = await __turbopack_context__.A("[project]/src/models/business-categories.model.js [app-route] (ecmascript, async loader)");
        const category = await BusinessCategories.findOne({
            slug: categorySlug
        }).lean();
        if (!category) {
            return {
                success: false,
                error: "Category not found"
            };
        }
        // Then find all business fundings with that category ID
        const businessFundings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            category: category._id
        }).lean();
        const serializedBusinessFundings = businessFundings.map((item)=>{
            return {
                ...item,
                _id: item?._id?.toString(),
                category: item?.category?.toString()
            };
        });
        return {
            success: true,
            data: serializedBusinessFundings
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBusinessFunding,
    getBusinessFundingById,
    createBusinessFunding,
    updateBusinessFunding,
    deleteBusinessFunding,
    getBusinessFundingBySlug,
    getBusinessFundingByCategory
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFunding, "000de60b0a39fcfffad3126f8c906da45ce01c1fc6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFundingById, "4050577b5adb8ba734a08826a6e4542ad67a565d91", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createBusinessFunding, "40a26ebc1fe34852d4494e9c9c3f162a39c8b4f3f9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBusinessFunding, "60e65aa388f19af8f31412111334fcd3aaa72eac8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBusinessFunding, "40b94a21667868bb70a373e995cc440f0dd6b199e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFundingBySlug, "40c160fe3e27b79fdbac1dcdc89be36b18d6af5f6a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFundingByCategory, "40b180ae5c452474d24969bbd2445f53a67582f7d5", null);
}),
"[project]/src/models/caseStudies.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/actions/caseStudy.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/caseStudies.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function createCaseStudy(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/case-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies/[slug]");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        let studies;
        if (limit) {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
                createdAt: -1
            }).limit(limit);
        } else {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/case-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies/[slug]");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/case-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies/[slug]");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudies$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCaseStudy,
    getCaseStudies,
    getCaseStudyById,
    updateCaseStudy,
    deleteCaseStudy,
    getCaseStudyBySlug,
    getOtherCaseStudies
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createCaseStudy, "403dd90974a0400634b7dab0f9ac94bb9797353609", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCaseStudies, "408912264e964bf9fc61661e0aff264538bfa427a3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCaseStudyById, "40aa15106dce28bc5bf2e11235e325c7945bad8de9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCaseStudy, "604c1d840500bb4630d76c7cc891768f4fc3ced783", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCaseStudy, "40fb50a850141e53de95aa8f92ef98bf29725c61f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCaseStudyBySlug, "40eb2fdbc0fdd6f58010fc0c799d1af3592a3603d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getOtherCaseStudies, "60bc45021c660c9ca03b81fdfef11361a260a7292d", null);
}),
"[project]/src/models/commercialFinance.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const commercialFinanceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    heading: {
        type: String,
        required: [
            true,
            "Heading is required"
        ]
    },
    content: {
        type: String,
        required: [
            true,
            "Content is required"
        ]
    },
    shortContent: {
        type: String,
        required: [
            true,
            "Short content is required"
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
});
const CommercialFinance = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.CommercialFinance || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("CommercialFinance", commercialFinanceSchema);
const __TURBOPACK__default__export__ = CommercialFinance;
}),
"[project]/src/actions/commercialFinance.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00a1d73e18a9ff3a4146d35d78ce8658dacc16b3b6":"getCommercialFinances","40293c439f079349046b4bd9d60d69d15637bc9bc4":"createCommercialFinance","4070c887665075e049b59772668f5519db99b8ff64":"deleteCommercialFinance","40805f3c5ab41f9e8aedb8ab78a70f57f0b963ae08":"getCommercialFinanceById","40e56b0355fc60152d367263f0f51a3aa1f8e7147b":"getEachCommercialFinance","60b362792503df794bf4cdee06759bbcc6d1350e35":"updateCommercialFinance"},"",""] */ __turbopack_context__.s([
    "createCommercialFinance",
    ()=>createCommercialFinance,
    "deleteCommercialFinance",
    ()=>deleteCommercialFinance,
    "getCommercialFinanceById",
    ()=>getCommercialFinanceById,
    "getCommercialFinances",
    ()=>getCommercialFinances,
    "getEachCommercialFinance",
    ()=>getEachCommercialFinance,
    "updateCommercialFinance",
    ()=>updateCommercialFinance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$commercialFinance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/commercialFinance.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getCommercialFinances() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const finances = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$commercialFinance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean();
        const serializedFinances = finances.map((finance)=>{
            return {
                ...finance,
                _id: finance?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedFinances
        };
    } catch (error) {
        return {
            success: false,
            error: error.message || "An unexpected error occurred"
        };
    }
}
async function createCommercialFinance(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$commercialFinance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/commercial-finance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])(`/`, "layout");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message || "An unexpected error occurred"
        };
    }
}
async function updateCommercialFinance(id, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$commercialFinance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/commercial-finance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])(`/`, "layout");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message || "An unexpected error occurred"
        };
    }
}
async function deleteCommercialFinance(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$commercialFinance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/commercial-finance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])(`/`, "layout");
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message || "An unexpected error occurred"
        };
    }
}
async function getCommercialFinanceById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const finance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$commercialFinance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!finance) {
            return {
                success: false,
                error: "Commercial finance not found"
            };
        }
        const serializedFinance = {
            ...finance,
            _id: finance?._id?.toString()
        };
        return {
            success: true,
            finance: serializedFinance
        };
    } catch (error) {
        return {
            success: false,
            error: error.message || "An unexpected error occurred"
        };
    }
}
async function getEachCommercialFinance(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const finance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$commercialFinance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        if (!finance) {
            return {
                success: false,
                error: "Commercial finance not found"
            };
        }
        const serializedFinance = {
            ...finance,
            _id: finance?._id?.toString()
        };
        return {
            success: true,
            finance: serializedFinance
        };
    } catch (error) {
        return {
            success: false,
            error: error.message || "An unexpected error occurred"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCommercialFinances,
    createCommercialFinance,
    updateCommercialFinance,
    deleteCommercialFinance,
    getCommercialFinanceById,
    getEachCommercialFinance
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCommercialFinances, "00a1d73e18a9ff3a4146d35d78ce8658dacc16b3b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createCommercialFinance, "40293c439f079349046b4bd9d60d69d15637bc9bc4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCommercialFinance, "60b362792503df794bf4cdee06759bbcc6d1350e35", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCommercialFinance, "4070c887665075e049b59772668f5519db99b8ff64", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getCommercialFinanceById, "40805f3c5ab41f9e8aedb8ab78a70f57f0b963ae08", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getEachCommercialFinance, "40e56b0355fc60152d367263f0f51a3aa1f8e7147b", null);
}),
"[project]/src/models/insurance.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const InsuranceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
    content: {
        type: String
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
});
const Insurance = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Insurance || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Insurance", InsuranceSchema);
const __TURBOPACK__default__export__ = Insurance;
}),
"[project]/src/actions/insurance.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00836a51711bfd6308ebaebf1946f93fbfe0068656":"getInsurance","00e5933ebbefc73cf38f1ef18569ade59a798c2f61":"getInsuranceNames","400c127ca3aac10d9e4d6de10883a239ba5c144283":"deleteInsurance","401feb4faa121f33874826e395d2ad93436c411e93":"getInsuranceById","40aa16a8947169e610ae534ef55287fd7b962c0f35":"createInsurance","40c3a120346e3e63e8c5c882ad43da9f602e6ef847":"getInsuranceBySlug","60d25a5ccfc0df5f7e60fad437ffe4cf5d7b475e92":"updateInsurance"},"",""] */ __turbopack_context__.s([
    "createInsurance",
    ()=>createInsurance,
    "deleteInsurance",
    ()=>deleteInsurance,
    "getInsurance",
    ()=>getInsurance,
    "getInsuranceById",
    ()=>getInsuranceById,
    "getInsuranceBySlug",
    ()=>getInsuranceBySlug,
    "getInsuranceNames",
    ()=>getInsuranceNames,
    "updateInsurance",
    ()=>updateInsurance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/insurance.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getInsurance() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean();
        const serializedData = data.map((item)=>{
            return {
                ...item,
                _id: item?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedData
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createInsurance(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/insurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function updateInsurance(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/insurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function deleteInsurance(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/insurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function getInsuranceNames() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).select("heading slug").lean();
        const serializedData = data.map((item)=>{
            return {
                ...item,
                _id: item?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedData
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getInsuranceById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const insurance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!insurance) {
            return {
                success: false,
                error: "Insurance not found"
            };
        }
        const serializedInsurance = {
            ...insurance,
            _id: insurance?._id?.toString()
        };
        return {
            success: true,
            data: serializedInsurance
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getInsuranceBySlug(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const insurance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        if (!insurance) {
            return {
                success: false,
                error: "Insurance not found"
            };
        }
        const serializedInsurance = {
            ...insurance,
            _id: insurance?._id?.toString()
        };
        return {
            success: true,
            data: serializedInsurance
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getInsurance,
    createInsurance,
    updateInsurance,
    deleteInsurance,
    getInsuranceNames,
    getInsuranceById,
    getInsuranceBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsurance, "00836a51711bfd6308ebaebf1946f93fbfe0068656", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createInsurance, "40aa16a8947169e610ae534ef55287fd7b962c0f35", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInsurance, "60d25a5ccfc0df5f7e60fad437ffe4cf5d7b475e92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInsurance, "400c127ca3aac10d9e4d6de10883a239ba5c144283", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsuranceNames, "00e5933ebbefc73cf38f1ef18569ade59a798c2f61", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsuranceById, "401feb4faa121f33874826e395d2ad93436c411e93", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsuranceBySlug, "40c3a120346e3e63e8c5c882ad43da9f602e6ef847", null);
}),
"[project]/src/models/mortgage.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const mortgageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
    content: {
        type: String
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
});
const Mortgage = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.Mortgage || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("Mortgage", mortgageSchema);
const __TURBOPACK__default__export__ = Mortgage;
}),
"[project]/src/actions/mortgage.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"008359c2f7ec1cae25383f519bc1d39ce471fccf59":"getMortage","00a29c1470676605ec9eb2ad675794cb4f4f258ed7":"getMortgageNames","401f2202c3418ff77dbdcfe213b837bfc21f89ba57":"createMortgage","403978b7b41f968c349251411a63bd6e04a0bea32d":"getMortgageBySlug","40ab0ce5e4f615ef23f7162ca4f799cfd768f33d34":"deleteMortgage","40c301d4c53385cb8a612c8cb40f6ad722d46d253c":"getMortgageById","6054a3931ae5aedad9f0dec47ec18c7b341c91bdfc":"updateMortgage"},"",""] */ __turbopack_context__.s([
    "createMortgage",
    ()=>createMortgage,
    "deleteMortgage",
    ()=>deleteMortgage,
    "getMortage",
    ()=>getMortage,
    "getMortgageById",
    ()=>getMortgageById,
    "getMortgageBySlug",
    ()=>getMortgageBySlug,
    "getMortgageNames",
    ()=>getMortgageNames,
    "updateMortgage",
    ()=>updateMortgage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/mortgage.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getMortage() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const mortgages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean();
        const serializedMortgages = mortgages.map((mortgage)=>{
            return {
                ...mortgage,
                _id: mortgage?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedMortgages
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createMortgage(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/mortgage");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/submortgage");
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
async function updateMortgage(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/mortgage");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/submortgage");
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
async function deleteMortgage(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/mortgage");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/submortgage");
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
async function getMortgageById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const mortgage = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!mortgage) {
            return {
                success: false,
                error: "Mortgage not found"
            };
        }
        const serializedMortgage = {
            ...mortgage,
            _id: mortgage?._id?.toString()
        };
        return {
            success: true,
            data: serializedMortgage
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getMortgageNames() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const mortgages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).select("slug heading").lean();
        const serializedMortgages = mortgages.map((mortgage)=>{
            return {
                ...mortgage,
                _id: mortgage?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedMortgages
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getMortgageBySlug(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const mortgage = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$mortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        if (!mortgage) {
            return {
                success: false,
                error: "Mortgage not found"
            };
        }
        const serializedMortgage = {
            ...mortgage,
            _id: mortgage?._id?.toString()
        };
        return {
            success: true,
            data: serializedMortgage
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getMortage,
    createMortgage,
    updateMortgage,
    deleteMortgage,
    getMortgageById,
    getMortgageNames,
    getMortgageBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getMortage, "008359c2f7ec1cae25383f519bc1d39ce471fccf59", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createMortgage, "401f2202c3418ff77dbdcfe213b837bfc21f89ba57", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateMortgage, "6054a3931ae5aedad9f0dec47ec18c7b341c91bdfc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteMortgage, "40ab0ce5e4f615ef23f7162ca4f799cfd768f33d34", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getMortgageById, "40c301d4c53385cb8a612c8cb40f6ad722d46d253c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getMortgageNames, "00a29c1470676605ec9eb2ad675794cb4f4f258ed7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getMortgageBySlug, "403978b7b41f968c349251411a63bd6e04a0bea32d", null);
}),
"[project]/src/models/newsStudy.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/actions/newStudy.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/newsStudy.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function createNewsStudy(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/news-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/news");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/news/[slug]");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        let studies;
        if (limit) {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
                createdAt: -1
            }).limit(limit);
        } else {
            studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean().sort({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/news-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/news");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/news/[slug]");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/news-study");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/news");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/news/[slug]");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const study = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const studies = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$newsStudy$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createNewsStudy,
    getNewsStudies,
    deleteNewsStudy,
    updateNewsStudy,
    getNewsStudyById,
    getNewsStudyBySlug,
    getOtherPosts
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createNewsStudy, "4073ec53a39d6fe2482eb17afd7b9e9619e2b92050", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsStudies, "4074b45290a1d124fce41cba8d6e87f39cac957e96", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNewsStudy, "400c051fb722a30e3a8d082bc8bf884e3ad16fa8f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateNewsStudy, "609bbfbb388a37f06cccedd3b847641a2098e57c7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsStudyById, "4065d38590e52e9cf5135708448ecd01c1e10fbfc6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsStudyBySlug, "4004727f3dad8e090f6df4205ec0b20f2b9fb5767a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getOtherPosts, "601b5df33f9517c0ec16f5e8c2c014fc0325c19971", null);
}),
"[project]/src/models/subInsurance.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const subInsuranceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
    content: {
        type: String
    },
    shortContent: {
        type: String,
        required: [
            true,
            "Short content is required"
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
    },
    pdf: {
        type: String
    },
    pdfAlt: {
        type: String
    },
    category: {
        type: String
    }
});
const SubInsurance = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.SubInsurance || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("SubInsurance", subInsuranceSchema);
const __TURBOPACK__default__export__ = SubInsurance;
}),
"[project]/src/actions/subInsurance.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0078c586a988561a2b554943c42a84bee5d418ab84":"getSubInsurance","401f93d71a0432f06760e319a1e1b5965889a7853a":"getSubInsuranceById","40430e1175202e97f2167a4500e796b9cb451b9462":"deleteSubInsurance","404d679fe56e18871b8c2d5d84c375f500ac93c7c9":"createSubInsurance","4051a806dd853eae4a9bffc6741ffaeab8caae94b6":"getSubInsuranceBySlug","409ce643ea7341c581a83815e470455559a857be45":"getEachSubInsurance","60e3f6ab0db3515c88598fd4b5b1eadbe67f0b78d8":"updateSubInsurance"},"",""] */ __turbopack_context__.s([
    "createSubInsurance",
    ()=>createSubInsurance,
    "deleteSubInsurance",
    ()=>deleteSubInsurance,
    "getEachSubInsurance",
    ()=>getEachSubInsurance,
    "getSubInsurance",
    ()=>getSubInsurance,
    "getSubInsuranceById",
    ()=>getSubInsuranceById,
    "getSubInsuranceBySlug",
    ()=>getSubInsuranceBySlug,
    "updateSubInsurance",
    ()=>updateSubInsurance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/subInsurance.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getSubInsurance() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().lean();
        const serializedData = data.map((item)=>{
            return {
                ...item,
                _id: item?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedData
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createSubInsurance(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/subinsurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function updateSubInsurance(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/subinsurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function deleteSubInsurance(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/subinsurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function getSubInsuranceById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const subInsurance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!subInsurance) {
            return {
                success: false,
                error: "SubInsurance not found"
            };
        }
        const serializedSubInsurance = {
            ...subInsurance,
            _id: subInsurance?._id?.toString()
        };
        return {
            success: true,
            data: serializedSubInsurance
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getSubInsuranceBySlug(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const subInsurance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            category: slug
        }).lean();
        if (!subInsurance) {
            return {
                success: false,
                error: "SubInsurance not found"
            };
        }
        const serializedSubInsurance = subInsurance.map((item)=>{
            return {
                ...item,
                _id: item?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedSubInsurance
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getEachSubInsurance(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const subInsurance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subInsurance$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        if (!subInsurance) {
            return {
                success: false,
                error: "SubInsurance not found"
            };
        }
        const serializedSubInsurance = {
            ...subInsurance,
            _id: subInsurance?._id?.toString()
        };
        return {
            success: true,
            data: serializedSubInsurance
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSubInsurance,
    createSubInsurance,
    updateSubInsurance,
    deleteSubInsurance,
    getSubInsuranceById,
    getSubInsuranceBySlug,
    getEachSubInsurance
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubInsurance, "0078c586a988561a2b554943c42a84bee5d418ab84", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createSubInsurance, "404d679fe56e18871b8c2d5d84c375f500ac93c7c9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSubInsurance, "60e3f6ab0db3515c88598fd4b5b1eadbe67f0b78d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSubInsurance, "40430e1175202e97f2167a4500e796b9cb451b9462", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubInsuranceById, "401f93d71a0432f06760e319a1e1b5965889a7853a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubInsuranceBySlug, "4051a806dd853eae4a9bffc6741ffaeab8caae94b6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getEachSubInsurance, "409ce643ea7341c581a83815e470455559a857be45", null);
}),
"[project]/src/models/subMortgage.model.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const subMortgageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
    content: {
        type: String
    },
    shortContent: {
        type: String,
        required: [
            true,
            "Short content is required"
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
    },
    pdfInput: {
        type: String
    },
    pdfAlt: {
        type: String
    },
    category: {
        type: String,
        required: [
            true,
            "Category is required"
        ]
    }
}, {
    timestamps: true
});
const SubMortgage = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.SubMortgage || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("SubMortgage", subMortgageSchema);
const __TURBOPACK__default__export__ = SubMortgage;
}),
"[project]/src/actions/subMortgage.actions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00ca99bf73b5067cd23287030bc47704e4e9225ce3":"getSubMortgage","4086aeb03c0824e4eb399f6d9defc8ece2093ce7be":"getEachSubMortgage","40c46badccc9041fa7e2303c453377da7a01e89677":"createSubMortgage","40c91f4f13bf592e754b7a79ed1d57b6bfed013165":"getSubMortgageBySlug","40d5616ffaee21f336130774bd6b187f7fb0d9c56a":"getSubMortgageById","40f200ba83765342e4cd761a78850b178df53d6c17":"deleteSubMortgage","607499bb0957c82de3081cd223805dc9ec933ca138":"updateSubMortgage"},"",""] */ __turbopack_context__.s([
    "createSubMortgage",
    ()=>createSubMortgage,
    "deleteSubMortgage",
    ()=>deleteSubMortgage,
    "getEachSubMortgage",
    ()=>getEachSubMortgage,
    "getSubMortgage",
    ()=>getSubMortgage,
    "getSubMortgageById",
    ()=>getSubMortgageById,
    "getSubMortgageBySlug",
    ()=>getSubMortgageBySlug,
    "updateSubMortgage",
    ()=>updateSubMortgage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/subMortgage.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
async function getSubMortgage() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const subMortgages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).lean();
        const serializedSubMortgages = subMortgages.map((subMortgage)=>{
            return {
                ...subMortgage,
                _id: subMortgage?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedSubMortgages
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createSubMortgage(formData) {
    console.log("data coming", formData);
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const datacreated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(formData);
        console.log("data created", datacreated);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend", "layout");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function updateSubMortgage(id, data) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend", "layout");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function deleteSubMortgage(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend", "layout");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
async function getSubMortgageById(id) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const subMortgage = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
        if (!subMortgage) {
            return {
                success: false,
                error: "SubMortgage not found"
            };
        }
        const serializedSubMortgage = {
            ...subMortgage,
            _id: subMortgage?._id?.toString()
        };
        return {
            success: true,
            data: serializedSubMortgage
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getSubMortgageBySlug(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const subMortgage = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            category: slug
        }).lean();
        if (!subMortgage) {
            return {
                success: false,
                error: "SubMortgage not found"
            };
        }
        const serializedSubMortgage = subMortgage.map((subMortgage)=>{
            return {
                ...subMortgage,
                _id: subMortgage?._id?.toString()
            };
        });
        return {
            success: true,
            data: serializedSubMortgage
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getEachSubMortgage(slug) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const subMortgage = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$subMortgage$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            slug
        }).lean();
        if (!subMortgage) {
            return {
                success: false,
                error: "SubMortgage not found"
            };
        }
        const serializedSubMortgage = {
            ...subMortgage,
            _id: subMortgage?._id?.toString()
        };
        return {
            success: true,
            data: serializedSubMortgage
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSubMortgage,
    createSubMortgage,
    updateSubMortgage,
    deleteSubMortgage,
    getSubMortgageById,
    getSubMortgageBySlug,
    getEachSubMortgage
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubMortgage, "00ca99bf73b5067cd23287030bc47704e4e9225ce3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createSubMortgage, "40c46badccc9041fa7e2303c453377da7a01e89677", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSubMortgage, "607499bb0957c82de3081cd223805dc9ec933ca138", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSubMortgage, "40f200ba83765342e4cd761a78850b178df53d6c17", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubMortgageById, "40d5616ffaee21f336130774bd6b187f7fb0d9c56a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubMortgageBySlug, "40c91f4f13bf592e754b7a79ed1d57b6bfed013165", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getEachSubMortgage, "4086aeb03c0824e4eb399f6d9defc8ece2093ce7be", null);
}),
"[project]/src/app/sitemap_index.xml/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessCategory$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/businessCategory.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/businessFunding.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/caseStudy.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$commercialFinance$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/commercialFinance.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/insurance.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$mortgage$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/mortgage.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/newStudy.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$subInsurance$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/subInsurance.actions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$subMortgage$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/subMortgage.actions.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function GET() {
    try {
        const BussinessCatagory = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessCategory$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBusinessCategory"])();
        const BussinessFunding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBusinessFunding"])();
        const CaseStudy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCaseStudies"])();
        const CommercialFinanace = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$commercialFinance$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCommercialFinances"])();
        const Insurance = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getInsurance"])();
        const Mortagage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$mortgage$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMortage"])();
        const NewsStudy = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$newStudy$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewsStudies"])();
        const SubInsurance = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$subInsurance$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSubInsurance"])();
        const SubMortgage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$subMortgage$2e$actions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSubMortgage"])();
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://aws-privatefinance.co.uk/</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/mortgages</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/commercial-finance</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/insurance</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/business-finance</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/news</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/case-studies</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/about-us</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/contact-us</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
${Array.isArray(Mortagage?.data) && Mortagage?.data.map((Mortagage)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/mortgages/${Mortagage.slug}</loc>
    <lastmod>${Mortagage.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
  `).join('')}
${Array.isArray(CaseStudy?.studies) && CaseStudy?.studies.map((CaseStudy)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/case-studies/${CaseStudy.slug}</loc>
    <lastmod>${CaseStudy.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
  `).join('')}
${Array.isArray(NewsStudy?.studies) && NewsStudy.studies?.map((NewsStudy)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/news/${NewsStudy.slug}</loc>
    <lastmod>${NewsStudy.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
  `).join('')}
<url>
  <loc>https://aws-privatefinance.co.uk/stamp-duty-calculator</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/AWS-Financial-Services-The-How-to-All-you-need-to-know-to-own-a-property.pdf</loc>
  <lastmod>2026-02-06T06:03:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/About-AWS-Financial-Services.pdf</loc>
  <lastmod>2026-02-06T06:03:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
${Array.isArray(SubMortgage?.data) && SubMortgage.data?.map((SubMortgage)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/mortgages/${SubMortgage.category}/${SubMortgage.slug}</loc>
    <lastmod>${SubMortgage.updatedAt ? new Date(SubMortgage.updatedAt).toISOString().replace(/\.\d{3}Z$/, '+00:00') : ''}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
<url>
  <loc>https://aws-privatefinance.co.uk/services</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/your-rights</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
${Array.isArray(CommercialFinanace?.data) && CommercialFinanace.data?.map((CommercialFinanace)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/commercial-finance/${CommercialFinanace.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.64</priority>
  </url>
  `).join('')}
${Array.isArray(Insurance.data) && Insurance.data?.map((Insurance)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/insurance/${Insurance.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.64</priority>
  </url>
  `).join('')}
  ${Array.isArray(SubInsurance?.data) && SubInsurance.data?.map((SubInsurance)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/insurance/${SubInsurance.category}/${SubInsurance.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.51</priority>
  </url>
  `).join('')}
  ${Array.isArray(BussinessCatagory?.data) && BussinessCatagory.data?.map((BussinessCatagory)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/business-finance/${BussinessCatagory.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
${Array.isArray(BussinessFunding?.data) && BussinessFunding.data?.map((BussinessFunding)=>`
  <url>
    <loc>https://aws-privatefinance.co.uk/business-finance/${BussinessFunding.cate === "67f7a130bb68239130acb53a" ? "healthcare-finance" : "business-funding"}/${BussinessFunding.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.64</priority>
  </url>
  `).join('')}
</urlset>`;
        return new Response(sitemap, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
            }
        });
    } catch (error) {
        console.error('Sitemap generation error:', error);
        // Return error in XML format
        const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<error>
  <message>Failed to generate sitemap [ ${error}  ] </message>
  <timestamp>${new Date().toISOString()}</timestamp>
</error>`;
        return new Response(errorSitemap, {
            status: 500,
            headers: {
                'Content-Type': 'application/xml'
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2686ff54._.js.map