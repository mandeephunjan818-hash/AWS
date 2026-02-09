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
"[project]/src/models/caseStudyIndex.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const caseStudyIndexSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
const CaseStudyIndex = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.CaseStudyIndex || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("CaseStudyIndex", caseStudyIndexSchema);
const __TURBOPACK__default__export__ = CaseStudyIndex;
}),
"[project]/src/actions/caseStudyIndex.actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00686b0c291f152771957fd857caf4931ee63bffb0":"getCaseStudyIndex","40d162d626033200286985665e9b681ff1a74f3459":"updateCaseStudyIndex"},"",""] */ __turbopack_context__.s([
    "getCaseStudyIndex",
    ()=>getCaseStudyIndex,
    "updateCaseStudyIndex",
    ()=>updateCaseStudyIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudyIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/caseStudyIndex.model.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getCaseStudyIndex() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudyIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne().lean();
        const serializedResult = {
            ...result,
            _id: result?._id?.toString()
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
async function updateCaseStudyIndex(data) {
    console.log("updateCaseStudyIndex");
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const index = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudyIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({}).lean();
        if (!index) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudyIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create(data);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$caseStudyIndex$2e$model$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(index._id, data);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/case-studies");
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
    getCaseStudyIndex,
    updateCaseStudyIndex
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCaseStudyIndex, "00686b0c291f152771957fd857caf4931ee63bffb0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCaseStudyIndex, "40d162d626033200286985665e9b681ff1a74f3459", null);
}),
"[project]/.next-internal/server/app/case-studies/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/caseStudyIndex.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudyIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/caseStudyIndex.actions.js [app-rsc] (ecmascript)");
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
"[project]/.next-internal/server/app/case-studies/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/caseStudyIndex.actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00686b0c291f152771957fd857caf4931ee63bffb0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudyIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCaseStudyIndex"],
    "403dd90974a0400634b7dab0f9ac94bb9797353609",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCaseStudy"],
    "408912264e964bf9fc61661e0aff264538bfa427a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCaseStudies"],
    "40aa15106dce28bc5bf2e11235e325c7945bad8de9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCaseStudyById"],
    "40d162d626033200286985665e9b681ff1a74f3459",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudyIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCaseStudyIndex"],
    "40eb2fdbc0fdd6f58010fc0c799d1af3592a3603d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCaseStudyBySlug"],
    "40fb50a850141e53de95aa8f92ef98bf29725c61f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCaseStudy"],
    "604c1d840500bb4630d76c7cc891768f4fc3ced783",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCaseStudy"],
    "60bc45021c660c9ca03b81fdfef11361a260a7292d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOtherCaseStudies"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$case$2d$studies$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$caseStudyIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/case-studies/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/caseStudyIndex.actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudy$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/caseStudy.actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$caseStudyIndex$2e$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/caseStudyIndex.actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_511894b5._.js.map