(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/about.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Count({ to, suffix = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Count.useEffect": ()=>{
            if (!inView) return;
            let n = 0;
            const id = setInterval({
                "Count.useEffect.id": ()=>{
                    n += Math.max(1, Math.ceil(to / 35));
                    if (n >= to) {
                        n = to;
                        clearInterval(id);
                    }
                    setValue(n);
                }
            }["Count.useEffect.id"], 30);
            return ({
                "Count.useEffect": ()=>clearInterval(id)
            })["Count.useEffect"];
        }
    }["Count.useEffect"], [
        inView,
        to
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            value,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/about.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(Count, "ccRVuevRVr4t05Tyz82g80RZM8E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Count;
function About() {
    const stats = [
        [
            5,
            "+",
            "Years Experience"
        ],
        [
            10,
            "+",
            "Projects"
        ],
        [
            25,
            "+",
            "Websites Built"
        ],
        [
            30,
            "%",
            "Load-time improvement"
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-white/35",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 18,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "More than just writing frontend code."
                        }, void 0, false, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 18,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-2xl text-lg leading-8 text-white/55",
                                    children: "I'm a frontend engineer with 5+ years of experience building scalable web applications using React.js, Next.js, TypeScript and modern frontend architectures. I specialize in scalable frontend architecture, responsive UI development, performance optimization, API integration, state management, enterprise applications and AI-powered applications."
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-2xl text-lg leading-8 text-white/55",
                                    children: "I enjoy transforming complex business requirements into simple, intuitive user experiences."
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 20,
                                    columnNumber: 429
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 20,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: stats.map(([to, suffix, label], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                    delay: i * .06,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        whileHover: {
                                            y: -4
                                        },
                                        className: "rounded-2xl border border-white/8 bg-white/[.025] p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-black sm:text-4xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Count, {
                                                    to: to,
                                                    suffix: suffix
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 274
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/about.tsx",
                                                lineNumber: 21,
                                                columnNumber: 225
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-xs leading-5 text-white/40",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/about.tsx",
                                                lineNumber: 21,
                                                columnNumber: 333
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/about.tsx",
                                        lineNumber: 21,
                                        columnNumber: 124
                                    }, this)
                                }, label, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 21,
                                    columnNumber: 88
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 21,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/about.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/about.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = About;
var _c, _c1;
__turbopack_context__.k.register(_c, "Count");
__turbopack_context__.k.register(_c1, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ai-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AISection",
    ()=>AISection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const lines = [
    "> Initialize AI Assistant...",
    "✓ Context loaded",
    "✓ API connected",
    "✓ Model ready",
    "",
    "Ask me anything..."
];
function AISection() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AISection.useEffect": ()=>{
            const id = setInterval({
                "AISection.useEffect.id": ()=>setVisible({
                        "AISection.useEffect.id": (v)=>Math.min(v + 1, lines.length)
                    }["AISection.useEffect.id"])
            }["AISection.useEffect.id"], 700);
            return ({
                "AISection.useEffect": ()=>clearInterval(id)
            })["AISection.useEffect"];
        }
    }["AISection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-violet-300/70",
                            children: "AI / GenAI"
                        }, void 0, false, {
                            fileName: "[project]/components/ai-section.tsx",
                            lineNumber: 11,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "Building with AI."
                        }, void 0, false, {
                            fileName: "[project]/components/ai-section.tsx",
                            lineNumber: 11,
                            columnNumber: 200
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-2xl text-lg leading-8 text-white/50",
                            children: "I explore how Generative AI can enhance modern frontend applications and developer workflows."
                        }, void 0, false, {
                            fileName: "[project]/components/ai-section.tsx",
                            lineNumber: 11,
                            columnNumber: 293
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ai-section.tsx",
                    lineNumber: 11,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-3xl border border-violet-400/15 bg-[#090b10] shadow-[0_0_90px_rgba(155,124,255,.08)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 border-b border-white/8 px-5 py-4 text-xs text-white/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-section.tsx",
                                            lineNumber: 11,
                                            columnNumber: 744
                                        }, this),
                                        " ai-assistant"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ai-section.tsx",
                                    lineNumber: 11,
                                    columnNumber: 647
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-h-72 p-6 font-mono text-sm leading-8 text-white/65",
                                    children: lines.slice(0, visible).map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: l.startsWith("✓") ? "text-emerald-300" : "",
                                            children: l
                                        }, i, false, {
                                            fileName: "[project]/components/ai-section.tsx",
                                            lineNumber: 11,
                                            columnNumber: 892
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-section.tsx",
                                    lineNumber: 11,
                                    columnNumber: 784
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ai-section.tsx",
                            lineNumber: 11,
                            columnNumber: 521
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3",
                            children: [
                                "OpenAI API",
                                "Gemini API",
                                "Prompt Engineering",
                                "AI-assisted Development"
                            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                    delay: i * .05,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[.025] p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                size: 18,
                                                className: "text-violet-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai-section.tsx",
                                                lineNumber: 11,
                                                columnNumber: 1227
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: x
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai-section.tsx",
                                                lineNumber: 11,
                                                columnNumber: 1271
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ai-section.tsx",
                                        lineNumber: 11,
                                        columnNumber: 1132
                                    }, this)
                                }, x, false, {
                                    fileName: "[project]/components/ai-section.tsx",
                                    lineNumber: 11,
                                    columnNumber: 1102
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ai-section.tsx",
                            lineNumber: 11,
                            columnNumber: 984
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ai-section.tsx",
                    lineNumber: 11,
                    columnNumber: 461
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ai-section.tsx",
            lineNumber: 11,
            columnNumber: 74
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ai-section.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_s(AISection, "MkSWy8pe3KQaa9C+hnpASlcOOYw=");
_c = AISection;
var _c;
__turbopack_context__.k.register(_c, "AISection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/architecture.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Architecture",
    ()=>Architecture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
"use client";
;
;
;
const nodes = [
    "UI",
    "React / Next.js",
    "State Management",
    "REST API",
    "GraphQL",
    "Firebase"
];
function Architecture() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-white/35",
                            children: "How I build"
                        }, void 0, false, {
                            fileName: "[project]/components/architecture.tsx",
                            lineNumber: 8,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "Architecture that stays understandable."
                        }, void 0, false, {
                            fileName: "[project]/components/architecture.tsx",
                            lineNumber: 8,
                            columnNumber: 196
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/architecture.tsx",
                    lineNumber: 8,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-8 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl border border-white/8 bg-white/[.02] p-6 sm:p-8",
                                children: nodes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                whileInView: {
                                                    scale: [
                                                        0.9,
                                                        1
                                                    ]
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "z-10 flex w-full items-center justify-center rounded-xl border border-white/10 bg-[#0d1118] py-4 text-sm font-semibold",
                                                children: n
                                            }, void 0, false, {
                                                fileName: "[project]/components/architecture.tsx",
                                                lineNumber: 8,
                                                columnNumber: 533
                                            }, this),
                                            i < nodes.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                                initial: {
                                                    height: 0
                                                },
                                                whileInView: {
                                                    height: 20
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "absolute left-1/2 top-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-400/60 to-violet-400/30"
                                            }, void 0, false, {
                                                fileName: "[project]/components/architecture.tsx",
                                                lineNumber: 8,
                                                columnNumber: 776
                                            }, this)
                                        ]
                                    }, n, true, {
                                        fileName: "[project]/components/architecture.tsx",
                                        lineNumber: 8,
                                        columnNumber: 475
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/architecture.tsx",
                                lineNumber: 8,
                                columnNumber: 377
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/architecture.tsx",
                            lineNumber: 8,
                            columnNumber: 369
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: [
                                "Reusable components",
                                "Scalable architecture",
                                "Performance",
                                "Accessibility",
                                "Testing",
                                "Clean API integration"
                            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                    delay: i * .04,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/8 p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold",
                                                children: x
                                            }, void 0, false, {
                                                fileName: "[project]/components/architecture.tsx",
                                                lineNumber: 8,
                                                columnNumber: 1262
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-6 text-white/40",
                                                children: "Designed as a practical engineering constraint, not an afterthought."
                                            }, void 0, false, {
                                                fileName: "[project]/components/architecture.tsx",
                                                lineNumber: 8,
                                                columnNumber: 1298
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/architecture.tsx",
                                        lineNumber: 8,
                                        columnNumber: 1207
                                    }, this)
                                }, x, false, {
                                    fileName: "[project]/components/architecture.tsx",
                                    lineNumber: 8,
                                    columnNumber: 1177
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/architecture.tsx",
                            lineNumber: 8,
                            columnNumber: 1005
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/architecture.tsx",
                    lineNumber: 8,
                    columnNumber: 320
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/architecture.tsx",
            lineNumber: 8,
            columnNumber: 74
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/architecture.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Architecture;
var _c;
__turbopack_context__.k.register(_c, "Architecture");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Contact() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactSchema"])
    });
    const onSubmit = async (values)=>{
        setStatus("");
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        });
        const data = await res.json();
        if (!res.ok) return setStatus(data.error ?? "Something went wrong.");
        setStatus(data.message);
        reset();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-white/35",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 22,
                            columnNumber: 130
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "Have an idea? Let's build it."
                        }, void 0, false, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 22,
                            columnNumber: 205
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-2xl text-lg leading-8 text-white/50",
                            children: "I'm currently open to frontend engineering opportunities and interesting product collaborations."
                        }, void 0, false, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 22,
                            columnNumber: 315
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/contact.tsx",
                    lineNumber: 22,
                    columnNumber: 122
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-8 lg:grid-cols-[.7fr_1.3fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:dev.avinandan.2@gmail.com",
                                    className: "flex items-center gap-4 rounded-2xl border border-white/8 p-5 hover:bg-white/[.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 716
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "dev.avinandan.2@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 733
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 22,
                                    columnNumber: 578
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/avinandans",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "flex items-center gap-4 rounded-2xl border border-white/8 p-5 hover:bg-white/[.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 963
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "github.com/avinandans"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 982
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 22,
                                    columnNumber: 795
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://linkedin.com/in/avinandan-singha-84630a197",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "flex items-center gap-4 rounded-2xl border border-white/8 p-5 hover:bg-white/[.03]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 1229
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 1250
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 22,
                                    columnNumber: 1040
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 22,
                            columnNumber: 551
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "rounded-3xl border border-white/8 bg-white/[.025] p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-5 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Name",
                                            error: errors.name?.message,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register("name"),
                                                className: "field",
                                                placeholder: "Your name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 22,
                                                columnNumber: 1506
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 1457
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                            label: "Email",
                                            error: errors.email?.message,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ...register("email"),
                                                className: "field",
                                                placeholder: "you@example.com"
                                            }, void 0, false, {
                                                fileName: "[project]/components/contact.tsx",
                                                lineNumber: 22,
                                                columnNumber: 1638
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 1587
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 22,
                                    columnNumber: 1414
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Message",
                                    error: errors.message?.message,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ...register("message"),
                                        className: "field min-h-40 resize-y",
                                        placeholder: "Tell me about your project or opportunity..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 22,
                                        columnNumber: 1787
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 22,
                                    columnNumber: 1732
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex flex-wrap items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: isSubmitting,
                                            className: "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black disabled:opacity-50",
                                            children: [
                                                isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "animate-spin",
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 2171
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 2219
                                                }, this),
                                                " Start a Conversation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 1999
                                        }, this),
                                        status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/55",
                                            children: status
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 22,
                                            columnNumber: 2286
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 22,
                                    columnNumber: 1927
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 22,
                            columnNumber: 1301
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/contact.tsx",
                    lineNumber: 22,
                    columnNumber: 491
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/contact.tsx",
            lineNumber: 22,
            columnNumber: 87
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/contact.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_s(Contact, "dhS/FVY2+iZ8VVXvD+onmWxffvg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = Contact;
function Field({ label, error, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "mb-5 block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-2 block text-xs uppercase tracking-wider text-white/40",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/contact.tsx",
                lineNumber: 24,
                columnNumber: 145
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 block text-xs text-red-300",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/contact.tsx",
                lineNumber: 24,
                columnNumber: 255
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/contact.tsx",
        lineNumber: 24,
        columnNumber: 115
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "Contact");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experience",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/experience.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Experience() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-white/35",
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/components/experience.tsx",
                            lineNumber: 11,
                            columnNumber: 48
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "A track record of shipping."
                        }, void 0, false, {
                            fileName: "[project]/components/experience.tsx",
                            lineNumber: 11,
                            columnNumber: 126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/experience.tsx",
                    lineNumber: 11,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 ml-2 border-l border-white/10 pl-7 sm:ml-8 sm:pl-10",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$experience$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * .06,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative pb-10 last:pb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-[#07080b] bg-blue-300 shadow-[0_0_20px_rgba(103,168,255,.8)] sm:-left-[47px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/experience.tsx",
                                        lineNumber: 12,
                                        columnNumber: 196
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen(open === i ? -1 : i),
                                        className: "flex w-full items-start justify-between gap-5 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-wider text-blue-300",
                                                        children: item.period
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experience.tsx",
                                                        lineNumber: 12,
                                                        columnNumber: 484
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-2 text-xl font-bold",
                                                        children: item.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/experience.tsx",
                                                        lineNumber: 12,
                                                        columnNumber: 563
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-white/45",
                                                        children: [
                                                            item.company,
                                                            " · ",
                                                            item.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/experience.tsx",
                                                        lineNumber: 12,
                                                        columnNumber: 618
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/experience.tsx",
                                                lineNumber: 12,
                                                columnNumber: 479
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 19,
                                                className: `mt-1 shrink-0 text-white/35 transition ${open === i ? "rotate-180" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/experience.tsx",
                                                lineNumber: 12,
                                                columnNumber: 694
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/experience.tsx",
                                        lineNumber: 12,
                                        columnNumber: 358
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        initial: false,
                                        animate: {
                                            height: open === i ? "auto" : 0,
                                            opacity: open === i ? 1 : 0
                                        },
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-5 max-w-3xl space-y-3 text-sm leading-6 text-white/55",
                                            children: item.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "— ",
                                                        h
                                                    ]
                                                }, h, true, {
                                                    fileName: "[project]/components/experience.tsx",
                                                    lineNumber: 12,
                                                    columnNumber: 1045
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/experience.tsx",
                                            lineNumber: 12,
                                            columnNumber: 946
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/experience.tsx",
                                        lineNumber: 12,
                                        columnNumber: 815
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/experience.tsx",
                                lineNumber: 12,
                                columnNumber: 154
                            }, this)
                        }, item.company, false, {
                            fileName: "[project]/components/experience.tsx",
                            lineNumber: 12,
                            columnNumber: 111
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/experience.tsx",
                    lineNumber: 12,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/experience.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/experience.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_s(Experience, "kwOYwiAlGcf16u2JaFl+OYF7OQ8=");
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/motion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
"use client";
;
;
function Reveal({ children, delay = 0, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: 28,
            filter: "blur(8px)"
        },
        whileInView: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
        },
        viewport: {
            once: true,
            amount: 0.18
        },
        transition: {
            duration: 0.65,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const links = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact"
];
function Navigation() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const onScroll = {
                "Navigation.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["Navigation.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 z-50 w-full transition-all ${scrolled ? "border-b border-white/10 bg-black/65 backdrop-blur-xl" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8",
                "aria-label": "Main navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: "text-sm font-black tracking-[.22em]",
                        children: "AVINANDAN"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-7 md:flex",
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${link.toLowerCase()}`,
                                className: "text-sm text-white/60 transition hover:text-white",
                                children: link
                            }, link, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 24,
                                columnNumber: 32
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: "hidden items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold md:flex",
                        children: [
                            "Let's Talk ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 27,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-full border border-white/10 p-2 md:hidden",
                        onClick: ()=>setOpen(!open),
                        "aria-label": open ? "Close menu" : "Open menu",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 30,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 30,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navigation.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "border-t border-white/10 bg-black/90 px-5 pb-5 backdrop-blur-xl md:hidden",
                    children: links.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].a, {
                            initial: {
                                opacity: 0,
                                x: -12
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: i * .04
                            },
                            onClick: ()=>setOpen(false),
                            href: `#${link.toLowerCase()}`,
                            className: "block border-b border-white/5 py-4 text-white/75",
                            children: link
                        }, link, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 36,
                            columnNumber: 37
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Navigation, "jAm7jTHG65/J2yarYImCswCRH6E=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/performance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Performance",
    ()=>Performance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
"use client";
;
;
;
const metrics = [
    "Code Splitting",
    "Lazy Loading",
    "SSR / SSG / ISR",
    "Image Optimization",
    "API Caching",
    "Component Optimization",
    "Bundle Optimization"
];
function Performance() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-white/35",
                            children: "Performance"
                        }, void 0, false, {
                            fileName: "[project]/components/performance.tsx",
                            lineNumber: 8,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "Performance is a feature."
                        }, void 0, false, {
                            fileName: "[project]/components/performance.tsx",
                            lineNumber: 8,
                            columnNumber: 196
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 max-w-2xl text-lg leading-8 text-white/50",
                            children: "Documented experience reducing page load time by around 30% through code splitting and lazy loading."
                        }, void 0, false, {
                            fileName: "[project]/components/performance.tsx",
                            lineNumber: 8,
                            columnNumber: 297
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/performance.tsx",
                    lineNumber: 8,
                    columnNumber: 109
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid min-h-72 place-items-center rounded-3xl border border-white/8 bg-white/[.025]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: .8
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            className: "text-7xl font-black text-gradient",
                                            children: "30%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/performance.tsx",
                                            lineNumber: 8,
                                            columnNumber: 669
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-white/40",
                                            children: "page-load improvement"
                                        }, void 0, false, {
                                            fileName: "[project]/components/performance.tsx",
                                            lineNumber: 8,
                                            columnNumber: 844
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/performance.tsx",
                                    lineNumber: 8,
                                    columnNumber: 640
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/performance.tsx",
                                lineNumber: 8,
                                columnNumber: 540
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/performance.tsx",
                            lineNumber: 8,
                            columnNumber: 532
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2",
                            children: metrics.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                    delay: i * .04,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/8 bg-white/[.025] p-5 text-sm text-white/65",
                                        children: [
                                            "✓ ",
                                            x
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/performance.tsx",
                                        lineNumber: 8,
                                        columnNumber: 1025
                                    }, this)
                                }, x, false, {
                                    fileName: "[project]/components/performance.tsx",
                                    lineNumber: 8,
                                    columnNumber: 995
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/performance.tsx",
                            lineNumber: 8,
                            columnNumber: 932
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/performance.tsx",
                    lineNumber: 8,
                    columnNumber: 472
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/performance.tsx",
            lineNumber: 8,
            columnNumber: 74
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/performance.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = Performance;
var _c;
__turbopack_context__.k.register(_c, "Performance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const filters = [
    "All",
    "React",
    "Next.js",
    "AI",
    "Enterprise"
];
function Projects() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const visible = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>filter === "All" || p.category.includes(filter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-white/35",
                            children: "Selected work"
                        }, void 0, false, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 13,
                            columnNumber: 131
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "Products built to solve real problems."
                        }, void 0, false, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 13,
                            columnNumber: 212
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 13,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-9 flex flex-wrap gap-2",
                    children: filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(f),
                            className: `rounded-full border px-4 py-2 text-xs font-semibold transition ${filter === f ? "border-white/30 bg-white text-black" : "border-white/10 bg-white/[.02] text-white/50 hover:text-white"}`,
                            children: f
                        }, f, false, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 14,
                            columnNumber: 66
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 14,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid gap-4 lg:grid-cols-2",
                    children: visible.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * .04,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: p
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 15,
                                columnNumber: 113
                            }, this)
                        }, p.slug, false, {
                            fileName: "[project]/components/projects.tsx",
                            lineNumber: 15,
                            columnNumber: 76
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/projects.tsx",
            lineNumber: 13,
            columnNumber: 88
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/projects.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(Projects, "aTTAYHvTVp56ZKAOh1/oGfK1+4g=");
_c = Projects;
function ProjectCard({ project: p }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].article, {
        whileHover: {
            y: -6
        },
        className: "group overflow-hidden rounded-3xl border border-white/8 bg-[#0c1016]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative min-h-64 overflow-hidden bg-gradient-to-br ${p.accent} p-5`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.13),transparent_20%)]"
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 22,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                        whileHover: {
                            scale: 1.03
                        },
                        className: "relative mx-auto mt-5 max-w-md rounded-2xl border border-white/10 bg-black/35 p-4 shadow-2xl backdrop-blur",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "h-2 w-2 rounded-full bg-white/30"
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 24,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "h-2 w-2 rounded-full bg-white/20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 24,
                                        columnNumber: 94
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "h-2 w-2 rounded-full bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 24,
                                        columnNumber: 144
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 24,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 rounded bg-white/[.07]",
                                        style: {
                                            width: `${92 - x * 15}%`
                                        }
                                    }, x, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 25,
                                        columnNumber: 54
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 25,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid grid-cols-3 gap-2",
                                children: [
                                    1,
                                    2,
                                    3
                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-14 rounded-lg border border-white/5 bg-white/[.03]"
                                    }, x, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 26,
                                        columnNumber: 72
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 26,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold",
                                        children: p.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 29,
                                        columnNumber: 87
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-xl text-sm leading-6 text-white/45",
                                        children: p.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 29,
                                        columnNumber: 134
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 29,
                                columnNumber: 82
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                className: "shrink-0 text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 29,
                                columnNumber: 220
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 29,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex flex-wrap gap-2",
                        children: p.technologies.slice(0, 6).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-white/8 px-2.5 py-1 text-[11px] text-white/45",
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 29,
                                columnNumber: 444
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 29,
                        columnNumber: 364
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-5 grid gap-2 text-xs text-white/45 sm:grid-cols-2",
                        children: p.features.slice(0, 4).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "✓ ",
                                    f
                                ]
                            }, f, true, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 29,
                                columnNumber: 663
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 29,
                        columnNumber: 561
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/projects/${p.slug}`,
                        className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white",
                        children: [
                            "View case study ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 29,
                                columnNumber: 841
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 29,
                        columnNumber: 692
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projects.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_c1 = ProjectCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Projects");
__turbopack_context__.k.register(_c1, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skills",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/skills.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "border-t border-white/8 px-5 py-28 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm uppercase tracking-[.25em] text-white/35",
                            children: "Skills"
                        }, void 0, false, {
                            fileName: "[project]/components/skills.tsx",
                            lineNumber: 7,
                            columnNumber: 129
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl",
                            children: "A practical modern stack."
                        }, void 0, false, {
                            fileName: "[project]/components/skills.tsx",
                            lineNumber: 7,
                            columnNumber: 203
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/skills.tsx",
                    lineNumber: 7,
                    columnNumber: 121
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$skills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGroups"].map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * .04,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                whileHover: {
                                    y: -5
                                },
                                className: "h-full rounded-3xl border border-white/8 bg-white/[.025] p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold",
                                        children: g.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/skills.tsx",
                                        lineNumber: 7,
                                        columnNumber: 550
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-wrap gap-2",
                                        children: g.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                                whileHover: {
                                                    scale: 1.04
                                                },
                                                className: "rounded-full border border-white/8 bg-black/15 px-3 py-1.5 text-xs text-white/55",
                                                children: item
                                            }, item, false, {
                                                fileName: "[project]/components/skills.tsx",
                                                lineNumber: 7,
                                                columnNumber: 654
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/skills.tsx",
                                        lineNumber: 7,
                                        columnNumber: 590
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/skills.tsx",
                                lineNumber: 7,
                                columnNumber: 442
                            }, this)
                        }, g.title, false, {
                            fileName: "[project]/components/skills.tsx",
                            lineNumber: 7,
                            columnNumber: 404
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/skills.tsx",
                    lineNumber: 7,
                    columnNumber: 313
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/skills.tsx",
            lineNumber: 7,
            columnNumber: 86
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/skills.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/experience.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experience",
    ()=>experience
]);
const experience = [
    {
        role: "Software Development Engineer - 2",
        company: "Manufac Analytics PVT. LTD.",
        location: "Gurugram, India",
        period: "July 2025 – March 2026",
        highlights: [
            "Built responsive and accessible UIs using React.js, Next.js and TypeScript.",
            "Developed reusable components and integrated RESTful APIs.",
            "Focused on cross-browser compatibility and frontend performance.",
            "Contributed to CI/CD workflows and code reviews while mentoring junior developers."
        ]
    },
    {
        role: "Sr. Software Developer",
        company: "Diamond Information Systems",
        location: "Johannesburg, South Africa",
        period: "August 2024 – March 2025",
        highlights: [
            "Led responsive applications using React.js, Next.js and Redux Toolkit.",
            "Improved user engagement by 25% through product-focused frontend delivery.",
            "Reduced page load time by 30% using code splitting and lazy loading."
        ]
    },
    {
        role: "Lead Projects — UI Development & Designing",
        company: "Notebrains",
        location: "Kolkata, West Bengal, India",
        period: "January 2022 – August 2024",
        highlights: [
            "Led a team of 4 developers across 3+ React applications.",
            "Built a social platform with real-time chat using Socket.io.",
            "Implemented RBAC and streamlined Redux Toolkit / RTK Query workflows, cutting API redundancy by 40%."
        ]
    },
    {
        role: "HTML Developer / Web Designer",
        company: "Mridaya IT Services",
        location: "Barjora, Bankura, West Bengal, India",
        period: "March 2019 – December 2021",
        highlights: [
            "Developed 25+ static and dynamic websites using HTML, CSS, Bootstrap and jQuery.",
            "Converted 10+ PSD designs into pixel-perfect, mobile-first web pages."
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/skills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skillGroups",
    ()=>skillGroups
]);
const skillGroups = [
    {
        title: "Frontend",
        items: [
            "React.js",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Redux Toolkit",
            "TanStack Query",
            "GraphQL"
        ]
    },
    {
        title: "UI / Styling",
        items: [
            "Tailwind CSS",
            "MUI",
            "Mantine",
            "Shadcn",
            "Ant Design",
            "Bootstrap"
        ]
    },
    {
        title: "Backend / Services",
        items: [
            "Node.js",
            "Express.js",
            "Firebase",
            "MongoDB",
            "PostgreSQL",
            "AWS",
            "Azure"
        ]
    },
    {
        title: "AI",
        items: [
            "OpenAI API",
            "Gemini API",
            "Prompt Engineering",
            "Generative AI",
            "AI-assisted Development"
        ]
    },
    {
        title: "Testing",
        items: [
            "Jest",
            "React Testing Library"
        ]
    },
    {
        title: "Tools",
        items: [
            "Git",
            "GitHub",
            "Figma",
            "Vercel",
            "Netlify"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/validations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactSchema",
    ()=>contactSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Name is too short").max(80),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email("Enter a valid email"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Message should be at least 10 characters").max(2000)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0_rud2k._.js.map