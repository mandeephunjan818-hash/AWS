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
"[project]/src/models/insurance.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/actions/insurance.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/insurance.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getInsurance() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).lean();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/insurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/insurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/insurance");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).select("heading slug").lean();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const insurance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(id).lean();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const insurance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insurance$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getInsurance,
    createInsurance,
    updateInsurance,
    deleteInsurance,
    getInsuranceNames,
    getInsuranceById,
    getInsuranceBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsurance, "00836a51711bfd6308ebaebf1946f93fbfe0068656", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInsurance, "40aa16a8947169e610ae534ef55287fd7b962c0f35", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInsurance, "60d25a5ccfc0df5f7e60fad437ffe4cf5d7b475e92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInsurance, "400c127ca3aac10d9e4d6de10883a239ba5c144283", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsuranceNames, "00e5933ebbefc73cf38f1ef18569ade59a798c2f61", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsuranceById, "401feb4faa121f33874826e395d2ad93436c411e93", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsuranceBySlug, "40c3a120346e3e63e8c5c882ad43da9f602e6ef847", null);
}),
"[project]/src/models/insuranceIndex.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const insuranceIndexSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
const InsuranceIndex = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.InsuranceIndex || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("InsuranceIndex", insuranceIndexSchema);
const __TURBOPACK__default__export__ = InsuranceIndex;
}),
"[project]/src/actions/insuranceIndex.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0017304e706e385d847bb9148d43aac8e0fdf82ce0":"getInsuranceIndex","4071a653d11ded504e207f14b0cb745b05247d65da":"updateInsuranceIndex"},"",""] */ __turbopack_context__.s([
    "getInsuranceIndex",
    ()=>getInsuranceIndex,
    "updateInsuranceIndex",
    ()=>updateInsuranceIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/insuranceIndex.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getInsuranceIndex() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const indexData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().lean();
        const serializedIndex = {
            ...indexData,
            _id: indexData?._id?.toString()
        };
        return {
            success: true,
            data: serializedIndex
        };
    } catch (error) {
        return {
            error: error.message || "An unexpected error occurred"
        };
    }
}
async function updateInsuranceIndex(data) {
    console.log("data", data);
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const index = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({}).lean();
        if (!index) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(index._id, data);
        }
        const serializedIndex = {
            ...data,
            _id: index?._id?.toString()
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/aws-backend/insurance-index");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/insurance");
        return {
            success: true,
            index: serializedIndex
        };
    } catch (error) {
        return {
            error: error.message || "An unexpected error occurred"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getInsuranceIndex,
    updateInsuranceIndex
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInsuranceIndex, "0017304e706e385d847bb9148d43aac8e0fdf82ce0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInsuranceIndex, "4071a653d11ded504e207f14b0cb745b05247d65da", null);
}),
"[project]/.next-internal/server/app/insurance/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/insurance.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/insuranceIndex.model.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/insurance.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/insuranceIndex.model.js [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/insurance/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/insurance.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/insuranceIndex.model.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0017304e706e385d847bb9148d43aac8e0fdf82ce0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInsuranceIndex"],
    "00836a51711bfd6308ebaebf1946f93fbfe0068656",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInsurance"],
    "00e5933ebbefc73cf38f1ef18569ade59a798c2f61",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInsuranceNames"],
    "400c127ca3aac10d9e4d6de10883a239ba5c144283",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteInsurance"],
    "401feb4faa121f33874826e395d2ad93436c411e93",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInsuranceById"],
    "4071a653d11ded504e207f14b0cb745b05247d65da",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInsuranceIndex"],
    "40aa16a8947169e610ae534ef55287fd7b962c0f35",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInsurance"],
    "40c3a120346e3e63e8c5c882ad43da9f602e6ef847",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInsuranceBySlug"],
    "60d25a5ccfc0df5f7e60fad437ffe4cf5d7b475e92",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInsurance"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$insurance$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/insurance/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/insurance.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/insuranceIndex.model.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insurance$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/insurance.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$insuranceIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/insuranceIndex.model.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_9bff8f96._.js.map