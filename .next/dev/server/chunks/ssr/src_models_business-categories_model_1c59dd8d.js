module.exports = [
"[project]/src/models/business-categories.model.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=src_models_business-categories_model_1c59dd8d.js.map