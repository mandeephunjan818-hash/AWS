module.exports = [
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
"[project]/.next-internal/server/app/contact-us/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/contact-us/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "404874274d5b9fee7780d06882eeb5f906a185a195",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendContactEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$contact$2d$us$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/contact-us/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$sendEmail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/sendEmail.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__024c37f5._.js.map