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
"[project]/src/models/business-funding.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/actions/businessFunding.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/business-funding.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getBusinessFunding() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).populate("category").lean();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(id).populate("category").lean();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/business-funding");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/business-funding");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const businessFunding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/business-funding");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            slug: slug
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        // First get the category by slug
        const { default: BusinessCategories } = await __turbopack_context__.A("[project]/src/models/business-categories.model.js [app-rsc] (ecmascript, async loader)");
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
        const businessFundings = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$business$2d$funding$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBusinessFunding,
    getBusinessFundingById,
    createBusinessFunding,
    updateBusinessFunding,
    deleteBusinessFunding,
    getBusinessFundingBySlug,
    getBusinessFundingByCategory
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFunding, "000de60b0a39fcfffad3126f8c906da45ce01c1fc6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFundingById, "4050577b5adb8ba734a08826a6e4542ad67a565d91", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBusinessFunding, "40a26ebc1fe34852d4494e9c9c3f162a39c8b4f3f9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBusinessFunding, "60e65aa388f19af8f31412111334fcd3aaa72eac8d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBusinessFunding, "40b94a21667868bb70a373e995cc440f0dd6b199e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFundingBySlug, "40c160fe3e27b79fdbac1dcdc89be36b18d6af5f6a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessFundingByCategory, "40b180ae5c452474d24969bbd2445f53a67582f7d5", null);
}),
"[project]/.next-internal/server/app/business-finance/[category]/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/businessFunding.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/businessFunding.actions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/business-finance/[category]/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/businessFunding.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000de60b0a39fcfffad3126f8c906da45ce01c1fc6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessFunding"],
    "4050577b5adb8ba734a08826a6e4542ad67a565d91",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessFundingById"],
    "40a26ebc1fe34852d4494e9c9c3f162a39c8b4f3f9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBusinessFunding"],
    "40b180ae5c452474d24969bbd2445f53a67582f7d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessFundingByCategory"],
    "40b94a21667868bb70a373e995cc440f0dd6b199e0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBusinessFunding"],
    "40c160fe3e27b79fdbac1dcdc89be36b18d6af5f6a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessFundingBySlug"],
    "60e65aa388f19af8f31412111334fcd3aaa72eac8d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBusinessFunding"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$business$2d$finance$2f5b$category$5d2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/business-finance/[category]/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/businessFunding.actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$businessFunding$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/businessFunding.actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_224b3d67._.js.map