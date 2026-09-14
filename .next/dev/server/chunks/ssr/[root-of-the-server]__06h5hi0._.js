module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen px-5 py-10 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#projects",
                    className: "inline-flex items-center gap-2 text-sm text-white/45 hover:text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 15,
                            columnNumber: 111
                        }, this),
                        " Back to projects"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-blue-300",
                            children: "Case study"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 16,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-4 text-5xl font-black tracking-[-.05em] sm:text-7xl",
                            children: project.name
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 16,
                            columnNumber: 106
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-7 max-w-3xl text-lg leading-8 text-white/50",
                            children: project.description
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 16,
                            columnNumber: 196
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 16,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-4 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-white/8 bg-white/[.025] p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-widest text-white/35",
                                    children: "Technologies"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 125
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex flex-wrap gap-2",
                                    children: project.technologies.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60",
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/app/projects/[slug]/page.tsx",
                                            lineNumber: 17,
                                            columnNumber: 278
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 204
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 17,
                            columnNumber: 54
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-white/8 bg-white/[.025] p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-widest text-white/35",
                                    children: "Key features"
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 469
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-5 space-y-3 text-sm text-white/55",
                                    children: project.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 15,
                                                    className: "mt-0.5 text-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                                    lineNumber: 17,
                                                    columnNumber: 663
                                                }, this),
                                                f
                                            ]
                                        }, f, true, {
                                            fileName: "[project]/app/projects/[slug]/page.tsx",
                                            lineNumber: 17,
                                            columnNumber: 628
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/[slug]/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 548
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 17,
                            columnNumber: 398
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 17,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-8 rounded-3xl border border-white/8 bg-white/[.025] p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Architecture & solution"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 18,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-3xl leading-8 text-white/50",
                            children: "This case-study template is data-driven and ready for project-specific architecture diagrams, screenshots, challenge/solution details and measurable outcomes."
                        }, void 0, false, {
                            fileName: "[project]/app/projects/[slug]/page.tsx",
                            lineNumber: 18,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/projects/[slug]/page.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/projects/[slug]/page.tsx",
            lineNumber: 14,
            columnNumber: 60
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/projects/[slug]/page.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "multi-vendor-ecommerce",
        name: "Multi-Vendor E-Commerce Platform",
        category: [
            "React",
            "Next.js",
            "Enterprise"
        ],
        description: "Scalable multi-role commerce experience with product discovery, checkout, dashboards and SEO-ready routing.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Redux",
            "React Hook Form",
            "Zod",
            "REST APIs",
            "RTL",
            "Tailwind CSS"
        ],
        features: [
            "App Router",
            "SSR / SSG / ISR",
            "Protected routes",
            "Admin / Vendor / Customer RBAC",
            "Search and filtering",
            "Cart and checkout",
            "SEO metadata and sitemap"
        ],
        accent: "from-blue-500/25 via-violet-500/10 to-transparent"
    },
    {
        slug: "wonder-mover",
        name: "Wonder Mover — Shipping & Logistics",
        category: [
            "React",
            "Enterprise"
        ],
        description: "Operations platform for bookings, jobs, quotations, maps and logistics workflows.",
        technologies: [
            "React.js",
            "TypeScript",
            "GraphQL",
            "Apollo Client",
            "Firebase",
            "Google Maps",
            "Mantine UI"
        ],
        features: [
            "Booking workflow",
            "Multi-step forms",
            "Distance calculation",
            "Firebase auth / Firestore",
            "GraphQL queries and mutations",
            "Context API"
        ],
        accent: "from-cyan-400/20 via-blue-500/10 to-transparent"
    },
    {
        slug: "ai-desktop-assistant",
        name: "AI Desktop Assistant",
        category: [
            "React",
            "AI"
        ],
        description: "Cross-platform conversational desktop experience powered by Gemini with a responsive chat-first interface.",
        technologies: [
            "React.js",
            "TypeScript",
            "Tauri",
            "Gemini API",
            "Context API",
            "React Query"
        ],
        features: [
            "AI conversation",
            "Markdown rendering",
            "Real-time chat",
            "Theme switching",
            "Lazy loading",
            "Efficient rendering"
        ],
        accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent"
    },
    {
        slug: "assignex",
        name: "Assignex",
        category: [
            "Next.js",
            "Enterprise"
        ],
        description: "Academic problem-solving and submission platform with progression, analytics, leaderboards and achievements.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Mantine UI",
            "REST APIs"
        ],
        features: [
            "Module unlocking",
            "Handouts",
            "File uploads",
            "Submission history",
            "Analytics",
            "Leaderboards",
            "Achievements"
        ],
        accent: "from-emerald-400/20 via-cyan-500/10 to-transparent"
    },
    {
        slug: "right-to-care",
        name: "Right to Care",
        category: [
            "React",
            "Enterprise"
        ],
        description: "Offline-first client and operations management system designed for reliable field workflows.",
        technologies: [
            "React.js",
            "Redux Toolkit",
            "RTK Query",
            "IndexedDB",
            "Service Workers"
        ],
        features: [
            "Offline storage",
            "Sync workflow",
            "Lead tracking",
            "Bookings",
            "Transport management",
            "Driver tracking",
            "Billing dashboards"
        ],
        accent: "from-amber-400/20 via-orange-500/10 to-transparent"
    },
    {
        slug: "gert-sibande",
        name: "Gert Sibande",
        category: [
            "React",
            "Enterprise"
        ],
        description: "Inventory and booking management platform with RBAC, payments, invoices and reporting.",
        technologies: [
            "React.js",
            "Redux Toolkit",
            "RTK Query",
            "HTML",
            "CSS"
        ],
        features: [
            "RBAC",
            "Booking management",
            "Payments",
            "Invoices",
            "Inventory",
            "Reporting"
        ],
        accent: "from-sky-400/20 via-indigo-500/10 to-transparent"
    },
    {
        slug: "ubuntu-social",
        name: "Ubuntu Social Media Platform",
        category: [
            "Next.js",
            "React"
        ],
        description: "Interactive social experience with real-time engagement, profiles, media and live chat.",
        technologies: [
            "Next.js",
            "Redux",
            "REST APIs",
            "Socket.io"
        ],
        features: [
            "Authentication",
            "Profiles",
            "Content sharing",
            "Media uploads",
            "Live chat",
            "Personalized feeds"
        ],
        accent: "from-pink-400/15 via-purple-500/10 to-transparent"
    },
    {
        slug: "pv-group",
        name: "PV Group — Construction Builder Portfolio",
        category: [
            "Next.js"
        ],
        description: "Visual project showcase with dynamic gallery filtering and performance-focused presentation.",
        technologies: [
            "Next.js",
            "Context API",
            "REST APIs",
            "Bootstrap 5"
        ],
        features: [
            "Project gallery",
            "Filtering",
            "Categorization",
            "Responsive UI",
            "Performance optimization"
        ],
        accent: "from-stone-300/15 via-slate-500/10 to-transparent"
    },
    {
        slug: "nike-store",
        name: "NIKE Store",
        category: [
            "React"
        ],
        description: "Early React e-commerce project built to explore product listings and global state management.",
        technologies: [
            "React.js",
            "Redux Toolkit",
            "Tailwind CSS"
        ],
        features: [
            "Product listings",
            "Dynamic state",
            "Responsive UI"
        ],
        accent: "from-red-400/15 via-orange-500/10 to-transparent"
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06h5hi0._.js.map