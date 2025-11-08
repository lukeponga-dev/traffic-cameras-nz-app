(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-favorites.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFavorites": (()=>useFavorites)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const FAVORITES_KEY = 'kiwi-traffic-watch-favorites';
function useFavorites() {
    _s();
    const [favoriteIds, setFavoriteIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFavorites.useEffect": ()=>{
            try {
                const item = window.localStorage.getItem(FAVORITES_KEY);
                if (item) {
                    setFavoriteIds(JSON.parse(item));
                }
            } catch (error) {
                console.error("Failed to parse favorites from localStorage", error);
                setFavoriteIds([]);
            }
            setIsLoaded(true);
        }
    }["useFavorites.useEffect"], []);
    const updateLocalStorage = (ids)=>{
        try {
            window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
        } catch (error) {
            console.error("Failed to set favorites in localStorage", error);
        }
    };
    const addFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[addFavorite]": (id)=>{
            setFavoriteIds({
                "useFavorites.useCallback[addFavorite]": (prevIds)=>{
                    if (prevIds.includes(id)) return prevIds;
                    const newIds = [
                        ...prevIds,
                        id
                    ];
                    updateLocalStorage(newIds);
                    return newIds;
                }
            }["useFavorites.useCallback[addFavorite]"]);
        }
    }["useFavorites.useCallback[addFavorite]"], []);
    const removeFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[removeFavorite]": (id)=>{
            setFavoriteIds({
                "useFavorites.useCallback[removeFavorite]": (prevIds)=>{
                    const newIds = prevIds.filter({
                        "useFavorites.useCallback[removeFavorite].newIds": (favId)=>favId !== id
                    }["useFavorites.useCallback[removeFavorite].newIds"]);
                    updateLocalStorage(newIds);
                    return newIds;
                }
            }["useFavorites.useCallback[removeFavorite]"]);
        }
    }["useFavorites.useCallback[removeFavorite]"], []);
    const toggleFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[toggleFavorite]": (id)=>{
            setFavoriteIds({
                "useFavorites.useCallback[toggleFavorite]": (prevIds)=>{
                    const isFav = prevIds.includes(id);
                    const newIds = isFav ? prevIds.filter({
                        "useFavorites.useCallback[toggleFavorite]": (favId)=>favId !== id
                    }["useFavorites.useCallback[toggleFavorite]"]) : [
                        ...prevIds,
                        id
                    ];
                    updateLocalStorage(newIds);
                    return newIds;
                }
            }["useFavorites.useCallback[toggleFavorite]"]);
        }
    }["useFavorites.useCallback[toggleFavorite]"], []);
    const isFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFavorites.useCallback[isFavorite]": (id)=>{
            return favoriteIds.includes(id);
        }
    }["useFavorites.useCallback[isFavorite]"], [
        favoriteIds
    ]);
    return {
        favoriteIds,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
        isLoaded
    };
}
_s(useFavorites, "S+8RF1h2gh3RyXBCaY1JNsQNFyE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/favorite-button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FavoriteButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-favorites.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FavoriteButton({ id }) {
    _s();
    const { isFavorite, toggleFavorite, isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"])();
    const isFav = isFavorite(id);
    if (!isLoaded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-5 w-5 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/favorite-button.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/favorite-button.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        onClick: (e)=>{
            e.preventDefault();
            toggleFavorite(id);
        },
        "aria-label": isFav ? "Remove from favorites" : "Add to favorites",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5 transition-all duration-300", isFav ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground hover:text-yellow-400")
        }, void 0, false, {
            fileName: "[project]/src/components/favorite-button.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/favorite-button.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(FavoriteButton, "7Hev4ufSf6N2vIrGrYkkjPmZXio=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"]
    ];
});
_c = FavoriteButton;
var _c;
__turbopack_context__.k.register(_c, "FavoriteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/camera-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CameraCard": (()=>CameraCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/milestone.js [app-client] (ecmascript) <export default as Milestone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$favorite$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/favorite-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CameraCard({ camera, isSelected }) {
    _s();
    const [isImageLoading, setIsImageLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden transition-all duration-200 cursor-pointer hover:border-primary/60", isSelected ? "border-primary shadow-md" : "border-border"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-28 h-20 aspect-video relative bg-muted overflow-hidden rounded-md shrink-0",
                        children: [
                            isImageLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "absolute inset-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/camera-card.tsx",
                                lineNumber: 24,
                                columnNumber: 44
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: camera.imageUrl,
                                alt: `Live feed from ${camera.name}`,
                                fill: true,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('object-cover transition-opacity duration-300', isImageLoading ? 'opacity-0' : 'opacity-100'),
                                sizes: "112px",
                                onLoad: ()=>setIsImageLoading(false),
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/camera-card.tsx",
                                lineNumber: 25,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/camera-card.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold leading-tight truncate",
                                children: camera.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/camera-card.tsx",
                                lineNumber: 36,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mt-1 truncate",
                                children: camera.region
                            }, void 0, false, {
                                fileName: "[project]/src/components/camera-card.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mt-2 text-xs text-muted-foreground font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/camera-card.tsx",
                                                lineNumber: 44,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: camera.direction
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/camera-card.tsx",
                                                lineNumber: 45,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/camera-card.tsx",
                                        lineNumber: 43,
                                        columnNumber: 28
                                    }, this),
                                    camera.highway && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__["Milestone"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/camera-card.tsx",
                                                lineNumber: 49,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: camera.highway
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/camera-card.tsx",
                                                lineNumber: 50,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/camera-card.tsx",
                                        lineNumber: 48,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/camera-card.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/camera-card.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$favorite$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: camera.id
                    }, void 0, false, {
                        fileName: "[project]/src/components/camera-card.tsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/camera-card.tsx",
                lineNumber: 22,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/camera-card.tsx",
            lineNumber: 21,
            columnNumber: 14
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/camera-card.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(CameraCard, "ywcYmuk2EkzyBxSa9+6gZ0unrgg=");
_c = CameraCard;
var _c;
__turbopack_context__.k.register(_c, "CameraCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = ScrollArea;
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this));
_c2 = ScrollBar;
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollArea$React.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollArea");
__turbopack_context__.k.register(_c2, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/camera-list.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CameraList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$camera$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/camera-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function CameraListSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 px-4",
        children: [
            ...Array(8)
        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "w-28 h-20 rounded-md mr-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/camera-list.tsx",
                        lineNumber: 14,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-5 w-3/4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/camera-list.tsx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/camera-list.tsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/camera-list.tsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/camera-list.tsx",
                lineNumber: 13,
                columnNumber: 18
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/camera-list.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = CameraListSkeleton;
function CameraList({ cameras, isLoading, onCameraSelect, selectedCameraId }) {
    const renderCameraList = (cameraList)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2 p-2",
            children: [
                cameraList.map((camera)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>onCameraSelect(camera),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$camera$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraCard"], {
                            camera: camera,
                            isSelected: selectedCameraId === camera.id
                        }, void 0, false, {
                            fileName: "[project]/src/components/camera-list.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this)
                    }, camera.id, false, {
                        fileName: "[project]/src/components/camera-list.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)),
                cameras.length > 0 && cameraList.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 text-muted-foreground bg-card rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No cameras found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/camera-list.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/camera-list.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                cameras.length === 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-10 text-muted-foreground bg-card rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No cameras available."
                    }, void 0, false, {
                        fileName: "[project]/src/components/camera-list.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/camera-list.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/camera-list.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
        className: "h-full",
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraListSkeleton, {}, void 0, false, {
            fileName: "[project]/src/components/camera-list.tsx",
            lineNumber: 62,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: renderCameraList(cameras)
        }, void 0, false)
    }, void 0, false, {
        fileName: "[project]/src/components/camera-list.tsx",
        lineNumber: 61,
        columnNumber: 10
    }, this);
}
_c1 = CameraList;
var _c, _c1;
__turbopack_context__.k.register(_c, "CameraListSkeleton");
__turbopack_context__.k.register(_c1, "CameraList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/cameras.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"response\":{\"camera\":[{\"description\":\"South along Hinds Highway from Lagmhor Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"714\",\"imageUrl\":\"/camera/714.jpg\",\"latitude\":-43.919632,\"longitude\":171.721055,\"name\":\"SH1 Tinwald \",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/714.jpg\",\"underMaintenance\":false},{\"description\":\"North along Hinds Highway from Lagmhor Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"831\",\"imageUrl\":\"/camera/831.jpg\",\"latitude\":-43.919508,\"longitude\":171.721221,\"name\":\"SH1 Tinwald North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2147483647,\"thumbUrl\":\"/camera/thumb/831.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from May Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH20\",\"id\":\"653\",\"imageUrl\":\"/camera/653.jpg\",\"latitude\":-36.90943,\"longitude\":174.73442,\"name\":\"SH20 May Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":20,\"thumbUrl\":\"/camera/thumb/653.jpg\",\"underMaintenance\":false},{\"description\":\"East along Nth Wstn Mwy from Carrington Rd\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH16\",\"id\":\"654\",\"imageUrl\":\"/camera/654.jpg\",\"latitude\":-36.87173,\"longitude\":174.71018,\"name\":\"SH16 Carrington Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/654.jpg\",\"underMaintenance\":false},{\"description\":\"South from Nth Wstn Mwy to Waterview Tunnel \",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH16\",\"id\":\"655\",\"imageUrl\":\"/camera/655.jpg\",\"latitude\":-36.871997,\"longitude\":174.704836,\"name\":\"SH16/20 Interchange South\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/655.jpg\",\"underMaintenance\":false},{\"description\":\"North along Nthn Mwy from McClymonts Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"818\",\"imageUrl\":\"/camera/818.jpg\",\"latitude\":-36.724252,\"longitude\":174.713939,\"name\":\"SH1 McClymonts Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/818.jpg\",\"underMaintenance\":false},{\"description\":\"North along Nthn Mwy towards Tirohanga Whanui Bridge\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"819\",\"imageUrl\":\"/camera/819.jpg\",\"latitude\":-36.728623,\"longitude\":174.7143,\"name\":\"SH1 Tirohanga Whanui Bridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/819.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy in Rosedale area\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"820\",\"imageUrl\":\"/camera/820.jpg\",\"latitude\":-36.743377,\"longitude\":174.720401,\"name\":\"SH1 Rosedale\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/820.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Constellation Dr\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"821\",\"imageUrl\":\"/camera/821.jpg\",\"latitude\":-36.750564,\"longitude\":174.726254,\"name\":\"SH1 Constellation Dr\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/821.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Sunset Rd\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"822\",\"imageUrl\":\"/camera/822.jpg\",\"latitude\":-36.753905,\"longitude\":174.728353,\"name\":\"SH1 Sunset Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/822.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 towards Puhoi Viaduct\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"824\",\"imageUrl\":\"/camera/824.jpg\",\"latitude\":-36.51967,\"longitude\":174.67121,\"name\":\"SH1 Puhoi Viaduct\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/824.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 towards Tunnels\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"825\",\"imageUrl\":\"/camera/825.jpg\",\"latitude\":-36.530387,\"longitude\":174.676896,\"name\":\"SH1 Johnstones Hill Tunnels\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/825.jpg\",\"underMaintenance\":false},{\"description\":\"South along Puhoi on-ramp to SH1\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"826\",\"imageUrl\":\"/camera/826.jpg\",\"latitude\":-36.5187,\"longitude\":174.671,\"name\":\"SH1 Puhoi On-ramp\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/826.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 towards Pukerito Rbt\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"827\",\"imageUrl\":\"/camera/827.jpg\",\"latitude\":-36.389353,\"longitude\":174.641729,\"name\":\"SH1 Pukerito Roundabout\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/827.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nth Wstn Mwy from Rosebank Rd\",\"direction\":\"Southbound\",\"group\":\"SH16\",\"highway\":\"SH16\",\"id\":\"697\",\"imageUrl\":\"/camera/697.jpg\",\"latitude\":-36.870049,\"longitude\":174.673614,\"name\":\"SH16 Rosebank Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/697.jpg\",\"underMaintenance\":false},{\"description\":\"North along the Nth Wstn Mwy Causeway \",\"direction\":\"Northbound\",\"group\":\"SH16\",\"highway\":\"SH16\",\"id\":\"686\",\"imageUrl\":\"/camera/686.jpg\",\"latitude\":-36.871594,\"longitude\":174.699344,\"name\":\"SH16/20 Interchange North\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/686.jpg\",\"underMaintenance\":false},{\"description\":\"North along Nth Wstn Mwy from Patiki Rd\",\"direction\":\"Northbound\",\"group\":\"SH16\",\"highway\":\"SH16\",\"id\":\"687\",\"imageUrl\":\"/camera/687.jpg\",\"latitude\":-36.865869,\"longitude\":174.666243,\"name\":\"SH16 Patiki Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/687.jpg\",\"underMaintenance\":false},{\"description\":\"North along the Nth Wstn Mwy Causeway\",\"direction\":\"Northbound\",\"group\":\"SH16\",\"highway\":\"SH16\",\"id\":\"688\",\"imageUrl\":\"/camera/688.jpg\",\"latitude\":-36.872107,\"longitude\":174.689738,\"name\":\"SH16 Causeway\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/688.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nth Wstn Mwy towards Patiki Rd \",\"direction\":\"Southbound\",\"group\":\"SH16\",\"highway\":\"SH16\",\"id\":\"689\",\"imageUrl\":\"/camera/689.jpg\",\"latitude\":-36.860564,\"longitude\":174.6609,\"name\":\"SH16 Whau River\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/689.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nth Wstn Mwy from Hobsonville Rd\",\"direction\":\"Southbound\",\"group\":\"SH16-North-Western\",\"highway\":\"SH16\",\"id\":\"270\",\"imageUrl\":\"/camera/270.jpg\",\"latitude\":-36.819,\"longitude\":174.614,\"name\":\"SH16/SH18 Interchange South\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/270.jpg\",\"underMaintenance\":false},{\"description\":\"North along Nth Wstn Mwy towards Kumeu\",\"direction\":\"Northbound\",\"group\":\"SH16-North-Western\",\"highway\":\"SH16\",\"id\":\"271\",\"imageUrl\":\"/camera/271.jpg\",\"latitude\":-36.813,\"longitude\":174.612,\"name\":\"SH16/SH18 Interchange North\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":13,\"thumbUrl\":\"/camera/thumb/271.jpg\",\"underMaintenance\":false},{\"description\":\"West along Nth Wstn Mwy from Bond St\",\"direction\":\"Westbound\",\"group\":\"SH16-North-Western\",\"highway\":\"SH16\",\"id\":\"130\",\"imageUrl\":\"/camera/130.jpg\",\"latitude\":-36.869,\"longitude\":174.746,\"name\":\"SH16 Bond St Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/130.jpg\",\"underMaintenance\":false},{\"description\":\"East along Nth Wstn Mwy from Gt North Rd\",\"direction\":\"Eastbound\",\"group\":\"SH16-North-Western\",\"highway\":\"SH16\",\"id\":\"140\",\"imageUrl\":\"/camera/140.jpg\",\"latitude\":-36.872,\"longitude\":174.706,\"name\":\"SH16/20 Interchange East \",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/140.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nth Wstn Mwy from Te Atatu Rd\",\"direction\":\"Southbound\",\"group\":\"SH16-North-Western\",\"highway\":\"SH16\",\"id\":\"150\",\"imageUrl\":\"/camera/150.jpg\",\"latitude\":-36.858,\"longitude\":174.653,\"name\":\"SH16 Te Atatu Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/150.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nth Wstn Mwy from Lincoln Rd\",\"direction\":\"Southbound\",\"group\":\"SH16-North-Western\",\"highway\":\"SH16\",\"id\":\"160\",\"imageUrl\":\"/camera/160.jpg\",\"latitude\":-36.849,\"longitude\":174.632,\"name\":\"SH16 Lincoln Rd South\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/160.jpg\",\"underMaintenance\":false},{\"description\":\"North along Nth Wstn Mwy from Lincoln Rd\",\"direction\":\"Northbound\",\"group\":\"SH16-North-Western\",\"highway\":\"SH16\",\"id\":\"170\",\"imageUrl\":\"/camera/170.jpg\",\"latitude\":-36.847,\"longitude\":174.63,\"name\":\"SH16 Lincoln Rd North\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/170.jpg\",\"underMaintenance\":false},{\"description\":\"East along Upper Hbr Mwy from Unsworth Heights\",\"direction\":\"Eastbound\",\"group\":\"SH18\",\"highway\":\"SH18\",\"id\":\"823\",\"imageUrl\":\"/camera/823.jpg\",\"latitude\":-36.753768,\"longitude\":174.709771,\"name\":\"SH18 Unsworth Heights\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/823.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH18 towards Paul Matthews Rd\",\"direction\":\"Westbound\",\"group\":\"SH18\",\"highway\":\"SH18\",\"id\":\"815\",\"imageUrl\":\"/camera/815.jpg\",\"latitude\":-36.750359,\"longitude\":174.722521,\"name\":\"SH1/SH18 Interchange\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/815.jpg\",\"underMaintenance\":false},{\"description\":\"West along Upper Hbr Mwy from Tauhinu Rd\",\"direction\":\"Westbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"171\",\"imageUrl\":\"/camera/171.jpg\",\"latitude\":-36.782,\"longitude\":174.678,\"name\":\"SH18 Tauhinu Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/171.jpg\",\"underMaintenance\":false},{\"description\":\"East along Upper Hbr Mwy from Albany Hwy\",\"direction\":\"Eastbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"172\",\"imageUrl\":\"/camera/172.jpg\",\"latitude\":-36.757,\"longitude\":174.703,\"name\":\"SH18 Albany Hwy\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/172.jpg\",\"underMaintenance\":false},{\"description\":\"West along Upper Hbr Mwy towards Tauhinu Rd Overbridge\",\"direction\":\"Westbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"173\",\"imageUrl\":\"/camera/173.jpg\",\"latitude\":-36.778,\"longitude\":174.681,\"name\":\"SH18 Greenhithe West\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/173.jpg\",\"underMaintenance\":false},{\"description\":\"East along Upper Hbr Mwy towards Paul Matthews Rd\",\"direction\":\"Eastbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"174\",\"imageUrl\":\"/camera/174.jpg\",\"latitude\":-36.753,\"longitude\":174.714,\"name\":\"SH18 Paul Matthews Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/174.jpg\",\"underMaintenance\":false},{\"description\":\"East along Upper Hbr Mwy from Greenhithe Rd\",\"direction\":\"Eastbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"175\",\"imageUrl\":\"/camera/175.jpg\",\"latitude\":-36.771,\"longitude\":174.686,\"name\":\"SH18 Greenhithe Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/175.jpg\",\"underMaintenance\":false},{\"description\":\"East along Upper Hbr Mwy from Schnapper Rock\",\"direction\":\"Eastbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"176\",\"imageUrl\":\"/camera/176.jpg\",\"latitude\":-36.765,\"longitude\":174.691,\"name\":\"SH18 Schnapper Rock\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/176.jpg\",\"underMaintenance\":false},{\"description\":\"East along Upper Hbr Mwy towards Upper Hbr Bridge\",\"direction\":\"Eastbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"177\",\"imageUrl\":\"/camera/177.jpg\",\"latitude\":-36.786,\"longitude\":174.662,\"name\":\"SH18 Upper Harbour Bridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/177.jpg\",\"underMaintenance\":false},{\"description\":\"West along Upper Hbr Mwy from Cuthill\",\"direction\":\"Westbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"178\",\"imageUrl\":\"/camera/178.jpg\",\"latitude\":-36.763,\"longitude\":174.7,\"name\":\"SH18 Cuthill\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/178.jpg\",\"underMaintenance\":false},{\"description\":\"East along Upper Hbr Mwy from Squadron Dr\",\"direction\":\"Eastbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"70\",\"imageUrl\":\"/camera/70.jpg\",\"latitude\":-36.791,\"longitude\":174.655,\"name\":\"SH18 Squadron Dr\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/70.jpg\",\"underMaintenance\":false},{\"description\":\"West along Upper Hbr Mwy from Trig Rd\",\"direction\":\"Westbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"221\",\"imageUrl\":\"/camera/221.jpg\",\"latitude\":-36.808,\"longitude\":174.621,\"name\":\"SH18 Trig Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/221.jpg\",\"underMaintenance\":false},{\"description\":\"West along Upper Hbr Mwy towards Trig Rd\",\"direction\":\"Westbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"222\",\"imageUrl\":\"/camera/222.jpg\",\"latitude\":-36.805,\"longitude\":174.628,\"name\":\"SH18 Waiahora Creek\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/222.jpg\",\"underMaintenance\":false},{\"description\":\"West along Brigham Creek Rd towards Whenuapai\",\"direction\":\"Westbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"223\",\"imageUrl\":\"/camera/223.jpg\",\"latitude\":-36.8,\"longitude\":174.638,\"name\":\"SH18 Brigham Creek Interchange\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/223.jpg\",\"underMaintenance\":false},{\"description\":\"West along Upper Hbr Mwy towards Brigham Creek Rd\",\"direction\":\"Westbound\",\"group\":\"SH18-Upper-Harbour\",\"highway\":\"SH18\",\"id\":\"224\",\"imageUrl\":\"/camera/224.jpg\",\"latitude\":-36.796,\"longitude\":174.645,\"name\":\"SH18 Hobsonville\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/224.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Greville Rd\",\"direction\":\"Southbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"10\",\"imageUrl\":\"/camera/10.jpg\",\"latitude\":-36.735,\"longitude\":174.717,\"name\":\"SH1 Greville Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/10.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Tristram Ave\",\"direction\":\"Southbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"20\",\"imageUrl\":\"/camera/20.jpg\",\"latitude\":-36.771763,\"longitude\":174.742792,\"name\":\"SH1 Tristram Ave\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/20.jpg\",\"underMaintenance\":false},{\"description\":\"North along Nthn Mwy from Northcote Rd\",\"direction\":\"Northbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"30\",\"imageUrl\":\"/camera/30.jpg\",\"latitude\":-36.789,\"longitude\":174.753,\"name\":\"SH1 Northcote Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/30.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Esmonde Rd\",\"direction\":\"Southbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"40\",\"imageUrl\":\"/camera/40.jpg\",\"latitude\":-36.799,\"longitude\":174.762,\"name\":\"SH1 Esmonde Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/40.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Onewa Rd\",\"direction\":\"Southbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"50\",\"imageUrl\":\"/camera/50.jpg\",\"latitude\":-36.812,\"longitude\":174.754,\"name\":\"SH1 Onewa Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/50.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Dairy Flat Service Centre\",\"direction\":\"Southbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"598\",\"imageUrl\":\"/camera/598.jpg\",\"latitude\":-36.658354,\"longitude\":174.666336,\"name\":\"SH1 Dairy Flat\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/598.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy in Okura area\",\"direction\":\"Southbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"769\",\"imageUrl\":\"/camera/769.jpg\",\"latitude\":-36.669183,\"longitude\":174.68074,\"name\":\"SH1 Okura\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/769.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Wainui Rd\",\"direction\":\"Southbound\",\"group\":\"SH1-Northern\",\"highway\":\"SH1\",\"id\":\"651\",\"imageUrl\":\"/camera/651.jpg\",\"latitude\":-36.603273,\"longitude\":174.661741,\"name\":\"SH1 Millwater\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/651.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy in Redvale area\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"723\",\"imageUrl\":\"/camera/723.jpg\",\"latitude\":-36.685718,\"longitude\":174.701202,\"name\":\"SH1 Redvale\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/723.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy towards Manukau\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"797\",\"imageUrl\":\"/camera/797.jpg\",\"latitude\":-37.014391,\"longitude\":174.907089,\"name\":\"SH1 Hill Road\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":18,\"thumbUrl\":\"/camera/thumb/797.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy and Takanini On-ramp\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"798\",\"imageUrl\":\"/camera/798.jpg\",\"latitude\":-37.03626,\"longitude\":174.909648,\"name\":\"SH1 Takanini Interchange\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":21,\"thumbUrl\":\"/camera/thumb/798.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy towards Orams Rd overbridge\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"799\",\"imageUrl\":\"/camera/799.jpg\",\"latitude\":-37.009684,\"longitude\":174.903296,\"name\":\"SH1 Orams Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":17,\"thumbUrl\":\"/camera/thumb/799.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy from Mill Rd\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"610\",\"imageUrl\":\"/camera/610.jpg\",\"latitude\":-37.192844,\"longitude\":174.981959,\"name\":\"SH1 Bombay\",\"offline\":true,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":28,\"thumbUrl\":\"/camera/thumb/610.jpg\",\"underMaintenance\":false},{\"description\":\"South along Waikato Exwy from Nikau Rd\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"611\",\"imageUrl\":\"/camera/611.jpg\",\"latitude\":-37.214557,\"longitude\":175.0003,\"name\":\"SH1 Nikau Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":29,\"thumbUrl\":\"/camera/thumb/611.jpg\",\"underMaintenance\":false},{\"description\":\"North along Waikato Exwy from SH2 Interchange\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"612\",\"imageUrl\":\"/camera/612.jpg\",\"latitude\":-37.230209,\"longitude\":175.01569,\"name\":\"SH1/SH2 Interchange\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":30,\"thumbUrl\":\"/camera/thumb/612.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy from Ararimu Rd\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"613\",\"imageUrl\":\"/camera/613.jpg\",\"latitude\":-37.143496,\"longitude\":174.969213,\"name\":\"SH1 Ramarama\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":27,\"thumbUrl\":\"/camera/thumb/613.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy at Nth Wstn Mwy link\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"60\",\"imageUrl\":\"/camera/60.jpg\",\"latitude\":-36.86,\"longitude\":174.757,\"name\":\"SH1/SH16 Central Mwy Junction\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/60.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy at Sth Wstn Mwy link\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"212\",\"imageUrl\":\"/camera/212.jpg\",\"latitude\":-36.997,\"longitude\":174.891,\"name\":\"SH1/SH20 Interchange South\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":15,\"thumbUrl\":\"/camera/thumb/212.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy at Sth Wstn Mwy link\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"214\",\"imageUrl\":\"/camera/214.jpg\",\"latitude\":-37,\"longitude\":174.892,\"name\":\"SH1/SH20 Interchange North\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":16,\"thumbUrl\":\"/camera/thumb/214.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy towards Market Rd\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"225\",\"imageUrl\":\"/camera/225.jpg\",\"latitude\":-36.878,\"longitude\":174.782,\"name\":\"SH1 Market Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/225.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy from Greenlane Interchange\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"80\",\"imageUrl\":\"/camera/80.jpg\",\"latitude\":-36.889,\"longitude\":174.796,\"name\":\"SH1 Greenlane Interchange\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/80.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy towards South Eastern Hwy\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"90\",\"imageUrl\":\"/camera/90.jpg\",\"latitude\":-36.915,\"longitude\":174.826,\"name\":\"SH1 South Eastern Hwy\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/90.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy from Redoubt Rd\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"100\",\"imageUrl\":\"/camera/100.jpg\",\"latitude\":-36.992,\"longitude\":174.888,\"name\":\"SH1 Redoubt Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":14,\"thumbUrl\":\"/camera/thumb/100.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy from Bairds Rd\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"110\",\"imageUrl\":\"/camera/110.jpg\",\"latitude\":-36.957,\"longitude\":174.861,\"name\":\"SH1 Bairds Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":13,\"thumbUrl\":\"/camera/thumb/110.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sthn Mwy towards Alfriston Rd\",\"direction\":\"Northbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"120\",\"imageUrl\":\"/camera/120.jpg\",\"latitude\":-37.021,\"longitude\":174.91,\"name\":\"SH1 Alfriston Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":19,\"thumbUrl\":\"/camera/thumb/120.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy towards Takanini\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"121\",\"imageUrl\":\"/camera/121.jpg\",\"latitude\":-37.028848,\"longitude\":174.910259,\"name\":\"SH1 Takanini\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":20,\"thumbUrl\":\"/camera/thumb/121.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy from Walter Strevens Dr\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"122\",\"imageUrl\":\"/camera/122.jpg\",\"latitude\":-37.044396,\"longitude\":174.913045,\"name\":\"SH1 Walter Strevens Dr Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":22,\"thumbUrl\":\"/camera/thumb/122.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy from Pahurehure Inlet\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"123\",\"imageUrl\":\"/camera/123.jpg\",\"latitude\":-37.054026,\"longitude\":174.919067,\"name\":\"SH1 Pahurehure Inlet\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":23,\"thumbUrl\":\"/camera/thumb/123.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy towards Papakura\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"124\",\"imageUrl\":\"/camera/124.jpg\",\"latitude\":-37.061584,\"longitude\":174.924471,\"name\":\"SH1 Papakura\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":24,\"thumbUrl\":\"/camera/thumb/124.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy from Park Estate Rd\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"125\",\"imageUrl\":\"/camera/125.jpg\",\"latitude\":-37.085,\"longitude\":174.936,\"name\":\"SH1 Park Estate Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":25,\"thumbUrl\":\"/camera/thumb/125.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sthn Mwy towards Drury Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1-Southern\",\"highway\":\"SH1\",\"id\":\"126\",\"imageUrl\":\"/camera/126.jpg\",\"latitude\":-37.094,\"longitude\":174.944,\"name\":\"SH1 Slippery Creek\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":26,\"thumbUrl\":\"/camera/thumb/126.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy after Waterview Tunnel\",\"direction\":\"Southbound\",\"group\":\"SH20\",\"highway\":\"SH20\",\"id\":\"667\",\"imageUrl\":\"/camera/667.jpg\",\"latitude\":-36.899797,\"longitude\":174.713633,\"name\":\"SH20 Owairaka \",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":23,\"thumbUrl\":\"/camera/thumb/667.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy towards Richardson Rd\",\"direction\":\"Southbound\",\"group\":\"SH20\",\"highway\":\"SH20\",\"id\":\"668\",\"imageUrl\":\"/camera/668.jpg\",\"latitude\":-36.90074,\"longitude\":174.71701,\"name\":\"SH20 Te Whitinga Footbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":22,\"thumbUrl\":\"/camera/thumb/668.jpg\",\"underMaintenance\":false},{\"description\":\"South from Nth Wstn Mwy to the Waterview Tunnel\",\"direction\":\"Southbound\",\"group\":\"SH20\",\"highway\":\"SH20\",\"id\":\"669\",\"imageUrl\":\"/camera/669.jpg\",\"latitude\":-36.87504,\"longitude\":174.70381,\"name\":\"SH20 Waterview \",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":24,\"thumbUrl\":\"/camera/thumb/669.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH20A from airport at Montgomerie Rd\",\"direction\":\"Northbound\",\"group\":\"SH20A\",\"highway\":\"SH20A\",\"id\":\"274\",\"imageUrl\":\"/camera/274.jpg\",\"latitude\":-36.982,\"longitude\":174.784,\"name\":\"SH20A George Bolt Mem Dr South\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/274.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH20A from airport at Kirkbride Rd\",\"direction\":\"Northbound\",\"group\":\"SH20A\",\"highway\":\"SH20A\",\"id\":\"275\",\"imageUrl\":\"/camera/275.jpg\",\"latitude\":-36.973,\"longitude\":174.789,\"name\":\"SH20A George Bolt Mem Dr North\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/275.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH20A towards Sth Wstn Mwy at Bader Dr\",\"direction\":\"Northbound\",\"group\":\"SH20A-South-Western\",\"highway\":\"SH20A\",\"id\":\"307\",\"imageUrl\":\"/camera/307.jpg\",\"latitude\":-36.966298,\"longitude\":174.796059,\"name\":\"SH20A Bader Dr Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/307.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH20B Puhinui Rd towards Sth Wstn Mwy\",\"direction\":\"Eastbound\",\"group\":\"SH20B\",\"highway\":\"SH20B\",\"id\":\"272\",\"imageUrl\":\"/camera/272.jpg\",\"latitude\":-36.996,\"longitude\":174.835,\"name\":\"SH20B Prices Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/272.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy & SH20A airport link\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"306\",\"imageUrl\":\"/camera/306.jpg\",\"latitude\":-36.964,\"longitude\":174.8,\"name\":\"SH20/20A Interchange \",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/306.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy towards Portage Rd Overbridge\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"288\",\"imageUrl\":\"/camera/288.jpg\",\"latitude\":-36.984608,\"longitude\":174.832329,\"name\":\"SH20 Portage Rd South\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/288.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy towards Massey Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"289\",\"imageUrl\":\"/camera/289.jpg\",\"latitude\":-36.98,\"longitude\":174.827,\"name\":\"SH20 Portage Rd North\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/289.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from Massey Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"290\",\"imageUrl\":\"/camera/290.jpg\",\"latitude\":-36.973,\"longitude\":174.817,\"name\":\"SH20 Massey Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/290.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from Bader Dr Overbridge\",\"direction\":\"Northbound\",\"group\":\"SH20-SOUTH-WESTERN\",\"highway\":\"SH20\",\"id\":\"619\",\"imageUrl\":\"/camera/619.jpg\",\"latitude\":-36.967669,\"longitude\":174.806404,\"name\":\"SH20 Bader Dr Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/619.jpg\",\"underMaintenance\":false},{\"description\":\"East along Queenstown Rd from Sth Wstn Mwy\",\"direction\":\"Eastbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"190\",\"imageUrl\":\"/camera/190.jpg\",\"latitude\":-36.921434017433,\"longitude\":174.767310105494,\"name\":\"SH20 Queenstown Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":16,\"thumbUrl\":\"/camera/thumb/190.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy from Hillsborough Rd\",\"direction\":\"Southbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"191\",\"imageUrl\":\"/camera/191.jpg\",\"latitude\":-36.917,\"longitude\":174.759,\"name\":\"SH20 Hillsborough Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":17,\"thumbUrl\":\"/camera/thumb/191.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy towards Hayr Rd Overbridge\",\"direction\":\"Southbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"192\",\"imageUrl\":\"/camera/192.jpg\",\"latitude\":-36.914,\"longitude\":174.75,\"name\":\"SH20 Hayr Rd Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":18,\"thumbUrl\":\"/camera/thumb/192.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy from Dominion Rd\",\"direction\":\"Southbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"193\",\"imageUrl\":\"/camera/193.jpg\",\"latitude\":-36.911,\"longitude\":174.74,\"name\":\"SH20 Dominion Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":19,\"thumbUrl\":\"/camera/thumb/193.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy from Maioro St\",\"direction\":\"Southbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"194\",\"imageUrl\":\"/camera/194.jpg\",\"latitude\":-36.904128,\"longitude\":174.723118,\"name\":\"SH20 Maioro St\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":21,\"thumbUrl\":\"/camera/thumb/194.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from Gloucester Park Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"201\",\"imageUrl\":\"/camera/201.jpg\",\"latitude\":-36.928,\"longitude\":174.782,\"name\":\"SH20 Gloucester Park Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":15,\"thumbUrl\":\"/camera/thumb/201.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from Onehunga Wharf\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"202\",\"imageUrl\":\"/camera/202.jpg\",\"latitude\":-36.931,\"longitude\":174.786,\"name\":\"SH20 Onehunga Wharf\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":14,\"thumbUrl\":\"/camera/thumb/202.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from Rimu Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"203\",\"imageUrl\":\"/camera/203.jpg\",\"latitude\":-36.941,\"longitude\":174.79,\"name\":\"SH20 Rimu Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":13,\"thumbUrl\":\"/camera/thumb/203.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from Hastie Ave Footbridge\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"204\",\"imageUrl\":\"/camera/204.jpg\",\"latitude\":-36.945,\"longitude\":174.793,\"name\":\"SH20 Hastie Ave Footbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/204.jpg\",\"underMaintenance\":false},{\"description\":\"Ramps for Sth Wstn Mwy at Coronation Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"205\",\"imageUrl\":\"/camera/205.jpg\",\"latitude\":-36.953,\"longitude\":174.792,\"name\":\"SH20 Coronation Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/205.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy & SH20B airport offramp\",\"direction\":\"Southbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"206\",\"imageUrl\":\"/camera/206.jpg\",\"latitude\":-36.993,\"longitude\":174.843,\"name\":\"SH20 Puhinui Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/206.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy from Cavendish Dr\",\"direction\":\"Southbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"207\",\"imageUrl\":\"/camera/207.jpg\",\"latitude\":-36.998,\"longitude\":174.852,\"name\":\"SH20 Cavendish Dr\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/207.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy towards Roscommon Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"208\",\"imageUrl\":\"/camera/208.jpg\",\"latitude\":-36.998,\"longitude\":174.865,\"name\":\"SH20 Plunket Ave Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/208.jpg\",\"underMaintenance\":false},{\"description\":\"South along Sth Wstn Mwy from Lambie Dr\",\"direction\":\"Southbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"209\",\"imageUrl\":\"/camera/209.jpg\",\"latitude\":-36.996,\"longitude\":174.874,\"name\":\"SH20 Lambie Dr\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/209.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy towards Wiri Station Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"210\",\"imageUrl\":\"/camera/210.jpg\",\"latitude\":-36.996,\"longitude\":174.881,\"name\":\"SH20 Barrowcliffe Pl Overbridge\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/210.jpg\",\"underMaintenance\":false},{\"description\":\"North along Sth Wstn Mwy from Gt South Rd\",\"direction\":\"Northbound\",\"group\":\"SH20-South-Western\",\"highway\":\"SH20\",\"id\":\"211\",\"imageUrl\":\"/camera/211.jpg\",\"latitude\":-36.996,\"longitude\":174.886,\"name\":\"SH20 Gt South Rd\",\"offline\":false,\"region\":{\"id\":\"2\",\"name\":\"Auckland\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/211.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH7 to SH65 at Springs Junction\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH7\",\"id\":\"643\",\"imageUrl\":\"/camera/643.jpg\",\"latitude\":-42.336047,\"longitude\":172.183175,\"name\":\"SH7/SH65 Springs Junction\",\"offline\":false,\"region\":{\"id\":\"12\",\"name\":\"West Coast\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/643.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH6 at Punakaiki Pancake Rocks\",\"direction\":\"Southbound\",\"group\":\"SH6\",\"highway\":\"SH6\",\"id\":\"663\",\"imageUrl\":\"/camera/663.jpg\",\"latitude\":-42.114842,\"longitude\":171.330009,\"name\":\"SH6 Punakaiki\",\"offline\":true,\"region\":{\"id\":\"12\",\"name\":\"West Coast\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/663.jpg\",\"underMaintenance\":false},{\"description\":\"South along Evans St from Newman St\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"728\",\"imageUrl\":\"/camera/728.jpg\",\"latitude\":-44.381376,\"longitude\":171.238707,\"name\":\"SH1 Ashbury North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/728.jpg\",\"underMaintenance\":false},{\"description\":\"North along Evans St from Grasmere St\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"729\",\"imageUrl\":\"/camera/729.jpg\",\"latitude\":-44.384087,\"longitude\":171.238644,\"name\":\"SH1 Ashbury South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/729.jpg\",\"underMaintenance\":false},{\"description\":\"West along West Coast Rd at Weedons Ross Junction\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH73\",\"id\":\"816\",\"imageUrl\":\"/camera/816.jpg\",\"latitude\":-43.52397,\"longitude\":172.369896,\"name\":\"SH73 West Melton West\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/816.jpg\",\"underMaintenance\":false},{\"description\":\"East along West Coast Rd at Weedons Ross Junction\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH73\",\"id\":\"817\",\"imageUrl\":\"/camera/817.jpg\",\"latitude\":-43.52407,\"longitude\":172.369776,\"name\":\"SH73 West Melton East\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/817.jpg\",\"underMaintenance\":false},{\"description\":\"South along Main South Rd from Hoskyns Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"597\",\"imageUrl\":\"/camera/597.jpg\",\"latitude\":-43.587996,\"longitude\":172.385782,\"name\":\"SH1 Rolleston\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/597.jpg\",\"underMaintenance\":false},{\"description\":\"North along Southbrook Rd from Southbrook Retail Centre\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH71\",\"id\":\"617\",\"imageUrl\":\"/camera/617.jpg\",\"latitude\":-43.32437,\"longitude\":172.59879,\"name\":\"Southbrook North\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/617.jpg\",\"underMaintenance\":false},{\"description\":\"South along Southbrook Rd from Southbrook Retail Centre\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH71\",\"id\":\"602\",\"imageUrl\":\"/camera/602.jpg\",\"latitude\":-43.324434,\"longitude\":172.598367,\"name\":\"Southbrook South\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/602.jpg\",\"underMaintenance\":false},{\"description\":\"South along Rakaia Bridge on SH1\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"628\",\"imageUrl\":\"/camera/628.jpg\",\"latitude\":-43.73792,\"longitude\":172.04519,\"name\":\"SH1 Rakaia Bridge North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/628.jpg\",\"underMaintenance\":false},{\"description\":\"North along Rakaia Bridge on SH1\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"629\",\"imageUrl\":\"/camera/629.jpg\",\"latitude\":-43.74967,\"longitude\":172.03069,\"name\":\"SH1 Rakaia Bridge South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/629.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 towards Rakaia from Rakaia Bridge\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"631\",\"imageUrl\":\"/camera/631.jpg\",\"latitude\":-43.74988,\"longitude\":172.03104,\"name\":\"SH1 Rakaia\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/631.jpg\",\"underMaintenance\":false},{\"description\":\"West towards SH7 at SH1 Waipara Junction\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"641\",\"imageUrl\":\"/camera/641.jpg\",\"latitude\":-43.06677,\"longitude\":172.757568,\"name\":\"SH1/SH7 Waipara Junction\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/641.jpg\",\"underMaintenance\":false},{\"description\":\"North along Ashley St from High St\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"310\",\"imageUrl\":\"/camera/310.jpg\",\"latitude\":-43.303137,\"longitude\":172.596572,\"name\":\"Rangiora North\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/310.jpg\",\"underMaintenance\":false},{\"description\":\"South along Ivory St from High St\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"311\",\"imageUrl\":\"/camera/311.jpg\",\"latitude\":-43.303257,\"longitude\":172.596695,\"name\":\"Rangiora South\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/311.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 from Walnut Ave\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"803\",\"imageUrl\":\"/camera/803.jpg\",\"latitude\":-43.898055,\"longitude\":171.756387,\"name\":\"SH1 Walnut Ave\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/803.jpg\",\"underMaintenance\":false},{\"description\":\"North along Northern Motorway looking over Kaiapoi Bridge\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"838\",\"imageUrl\":\"/camera/838.jpg\",\"latitude\":-43.3784165056828,\"longitude\":172.645061302609,\"name\":\"SH1 CNM at Kaiapoi Bridge\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/838.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 from Sandhill Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"839\",\"imageUrl\":\"/camera/839.jpg\",\"latitude\":-43.3392285581384,\"longitude\":172.666869700065,\"name\":\"SH1 at Sandhill Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/839.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH73 in Arthurs Pass\",\"direction\":\"Eastbound\",\"group\":\"SH73\",\"highway\":\"SH73\",\"id\":\"665\",\"imageUrl\":\"/camera/665.jpg\",\"latitude\":-42.936995,\"longitude\":171.560586,\"name\":\"SH73 Arthurs Pass\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/665.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy from Aidanfield Dr Overbridge\",\"direction\":\"Eastbound\",\"group\":\"SH76\",\"highway\":\"SH76\",\"id\":\"834\",\"imageUrl\":\"/camera/834.jpg\",\"latitude\":-43.559458,\"longitude\":172.564956,\"name\":\"SH76 Aidanfield Dr\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/834.jpg\",\"underMaintenance\":false},{\"description\":\"North along Methven Highway towards Banks St\",\"direction\":\"Northbound\",\"group\":\"SH77\",\"highway\":\"SH77\",\"id\":\"718\",\"imageUrl\":\"/camera/718.jpg\",\"latitude\":-43.634368,\"longitude\":171.647077,\"name\":\"SH77 Methven\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/718.jpg\",\"underMaintenance\":false},{\"description\":\"North along Main St from Regent St\",\"direction\":\"Northbound\",\"group\":\"SH8\",\"highway\":\"SH8\",\"id\":\"716\",\"imageUrl\":\"/camera/716.jpg\",\"latitude\":-44.098199,\"longitude\":170.828926,\"name\":\"SH8/SH79 Fairlie North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/716.jpg\",\"underMaintenance\":false},{\"description\":\"South along Main St from Regent St\",\"direction\":\"Southbound\",\"group\":\"SH8\",\"highway\":\"SH8\",\"id\":\"717\",\"imageUrl\":\"/camera/717.jpg\",\"latitude\":-44.098339,\"longitude\":170.828935,\"name\":\"SH8 Fairlie South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/717.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH82 (Hakataramea Hwy) in Waimate\",\"direction\":\"Northbound\",\"group\":\"SH82\",\"highway\":\"SH82\",\"id\":\"724\",\"imageUrl\":\"/camera/724.jpg\",\"latitude\":-44.733923,\"longitude\":171.04678,\"name\":\"SH82 Waimate\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/724.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 towards Waiouru\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"234\",\"imageUrl\":\"/camera/234.jpg\",\"latitude\":-39.488,\"longitude\":175.67,\"name\":\"SH1 Waiouru\",\"offline\":false,\"region\":{\"id\":\"8\",\"name\":\"Manawatu-Whanganui\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/234.jpg\",\"underMaintenance\":false},{\"description\":\"North along Curletts Rd from Vicki St\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH73\",\"id\":\"596\",\"imageUrl\":\"/camera/596.jpg\",\"latitude\":-43.535802,\"longitude\":172.567811,\"name\":\"SH73 Curletts Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/596.jpg\",\"underMaintenance\":false},{\"description\":\"North along Barrington St from Sthn Mwy\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"309\",\"imageUrl\":\"/camera/309.jpg\",\"latitude\":-43.547834,\"longitude\":172.609956,\"name\":\"SH76 Barrington St\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/309.jpg\",\"underMaintenance\":false},{\"description\":\"West along Main South Rd from Sockburn Roundabout\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"599\",\"imageUrl\":\"/camera/599.jpg\",\"latitude\":-43.539327,\"longitude\":172.553415,\"name\":\"Sockburn Roundabout West\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/599.jpg\",\"underMaintenance\":false},{\"description\":\"East towards Main South Rd and Blenheim Rd from Sockburn Roundabout\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"600\",\"imageUrl\":\"/camera/600.jpg\",\"latitude\":-43.539324,\"longitude\":172.553568,\"name\":\"Sockburn Roundabout East\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/600.jpg\",\"underMaintenance\":false},{\"description\":\"West along Main Rd from Augusta St\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"601\",\"imageUrl\":\"/camera/601.jpg\",\"latitude\":-43.562064,\"longitude\":172.739184,\"name\":\"Redcliffs\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/601.jpg\",\"underMaintenance\":false},{\"description\":\"North along Ensors Rd from Brougham St\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"286\",\"imageUrl\":\"/camera/286.jpg\",\"latitude\":-43.549,\"longitude\":172.66,\"name\":\"SH76 Ensors Rd\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/286.jpg\",\"underMaintenance\":false},{\"description\":\"North along Marshland Rd from Lake Tce Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"287\",\"imageUrl\":\"/camera/287.jpg\",\"latitude\":-43.495,\"longitude\":172.661,\"name\":\"Marshland Rd / Lake Terrace Rd\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/287.jpg\",\"underMaintenance\":false},{\"description\":\"South along Carmen Rd from Waterloo Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"291\",\"imageUrl\":\"/camera/291.jpg\",\"latitude\":-43.538,\"longitude\":172.528,\"name\":\"SH1 Waterloo Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":20,\"thumbUrl\":\"/camera/thumb/291.jpg\",\"underMaintenance\":false},{\"description\":\"North along Main North Rd from Dickeys Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"292\",\"imageUrl\":\"/camera/292.jpg\",\"latitude\":-43.438,\"longitude\":172.636,\"name\":\"SH1 Dickeys Rd North\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":15,\"thumbUrl\":\"/camera/thumb/292.jpg\",\"underMaintenance\":false},{\"description\":\"South along Main North Rd from Dickeys Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"293\",\"imageUrl\":\"/camera/293.jpg\",\"latitude\":-43.438,\"longitude\":172.638,\"name\":\"SH1 Dickeys Rd South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":16,\"thumbUrl\":\"/camera/thumb/293.jpg\",\"underMaintenance\":false},{\"description\":\"North along Halswell Rd from Sparks Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH75\",\"id\":\"294\",\"imageUrl\":\"/camera/294.jpg\",\"latitude\":-43.585527,\"longitude\":172.570879,\"name\":\"SH75 Sparks Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/294.jpg\",\"underMaintenance\":false},{\"description\":\"East along Brougham St from Antigua St\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"295\",\"imageUrl\":\"/camera/295.jpg\",\"latitude\":-43.547486,\"longitude\":172.627955,\"name\":\"SH76 Antigua St\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/295.jpg\",\"underMaintenance\":false},{\"description\":\"North along Marshland Rd from Prestons Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"296\",\"imageUrl\":\"/camera/296.jpg\",\"latitude\":-43.474,\"longitude\":172.659,\"name\":\"Marshland Rd / Prestons Rd North\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/296.jpg\",\"underMaintenance\":false},{\"description\":\"South along Marshland Rd from Prestons Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"297\",\"imageUrl\":\"/camera/297.jpg\",\"latitude\":-43.474,\"longitude\":172.66,\"name\":\"Marshland Rd / Prestons Rd South\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/297.jpg\",\"underMaintenance\":false},{\"description\":\"West along Brougham St from Garlands Rd\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"300\",\"imageUrl\":\"/camera/300.jpg\",\"latitude\":-43.555568,\"longitude\":172.67043,\"name\":\"SH76 Garlands Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/300.jpg\",\"underMaintenance\":false},{\"description\":\"East along Ferry Rd from Rutherford St\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH74A\",\"id\":\"301\",\"imageUrl\":\"/camera/301.jpg\",\"latitude\":-43.551595,\"longitude\":172.686952,\"name\":\"SH74A Ferry Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/301.jpg\",\"underMaintenance\":false},{\"description\":\"North along Waltham Rd from Brougham St\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"302\",\"imageUrl\":\"/camera/302.jpg\",\"latitude\":-43.547544,\"longitude\":172.646563,\"name\":\"SH76 Waltham Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/302.jpg\",\"underMaintenance\":false},{\"description\":\"East along Brougham St from Selwyn St\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"303\",\"imageUrl\":\"/camera/303.jpg\",\"latitude\":-43.547289,\"longitude\":172.621704,\"name\":\"SH76 Selwyn St\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/303.jpg\",\"underMaintenance\":false},{\"description\":\"North along Main North Rd from Styx Mill Bridge\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH74M\",\"id\":\"304\",\"imageUrl\":\"/camera/304.jpg\",\"latitude\":-43.468,\"longitude\":172.617,\"name\":\"SH74 Styx Mill Bridge North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/304.jpg\",\"underMaintenance\":false},{\"description\":\"South along Main North Rd from Styx Mill Bridge\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH74M\",\"id\":\"305\",\"imageUrl\":\"/camera/305.jpg\",\"latitude\":-43.468176,\"longitude\":172.619,\"name\":\"SH74 Styx Mill Bridge South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/305.jpg\",\"underMaintenance\":false},{\"description\":\"West along Sthn Mwy from Awatea Rd Overbridge\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"614\",\"imageUrl\":\"/camera/614.jpg\",\"latitude\":-43.564445,\"longitude\":172.553731,\"name\":\"SH76 Awatea Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":15,\"thumbUrl\":\"/camera/thumb/614.jpg\",\"underMaintenance\":false},{\"description\":\"East along Riccarton Rd from Clyde Rd\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"618\",\"imageUrl\":\"/camera/618.jpg\",\"latitude\":-43.530728,\"longitude\":172.586455,\"name\":\"Riccarton Rd / Clyde Rd\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/618.jpg\",\"underMaintenance\":false},{\"description\":\"South along Tunnel Rd from Ferry Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH74\",\"id\":\"624\",\"imageUrl\":\"/camera/624.jpg\",\"latitude\":-43.55417,\"longitude\":172.69105,\"name\":\"SH74 Tunnel Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/624.jpg\",\"underMaintenance\":false},{\"description\":\"South along Burlington St from Brougham St\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"625\",\"imageUrl\":\"/camera/625.jpg\",\"latitude\":-43.54731,\"longitude\":172.64277,\"name\":\"SH76 Burlington St\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/625.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy from Lincoln Rd\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"698\",\"imageUrl\":\"/camera/698.jpg\",\"latitude\":-43.547979,\"longitude\":172.604354,\"name\":\"SH76 Lincoln Rd East\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/698.jpg\",\"underMaintenance\":false},{\"description\":\"West along Sthn Mwy from Lincoln Rd\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"699\",\"imageUrl\":\"/camera/699.jpg\",\"latitude\":-43.547953,\"longitude\":172.604097,\"name\":\"SH76 Lincoln Rd West\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/699.jpg\",\"underMaintenance\":false},{\"description\":\"East along Yaldhurst Rd from Russley Rd\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"701\",\"imageUrl\":\"/camera/701.jpg\",\"latitude\":-43.520493,\"longitude\":172.534303,\"name\":\"SH1/SH73 Russley East\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":18,\"thumbUrl\":\"/camera/thumb/701.jpg\",\"underMaintenance\":false},{\"description\":\"North along Johns Rd at Clearwater Ave roundabout\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"702\",\"imageUrl\":\"/camera/702.jpg\",\"latitude\":-43.457944,\"longitude\":172.596773,\"name\":\"SH1 Clearwater Ave\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/702.jpg\",\"underMaintenance\":false},{\"description\":\"North along Johns Rd from Gardiners Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"703\",\"imageUrl\":\"/camera/703.jpg\",\"latitude\":-43.458966,\"longitude\":172.590128,\"name\":\"SH1 Gardiners Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/703.jpg\",\"underMaintenance\":false},{\"description\":\"North along Johns Rd from Wilkinsons Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"704\",\"imageUrl\":\"/camera/704.jpg\",\"latitude\":-43.464903,\"longitude\":172.582345,\"name\":\"SH1 Wilkinsons Rd\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/704.jpg\",\"underMaintenance\":true},{\"description\":\"North along Western Belfast Bypass from Groynes Dr overpass\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"705\",\"imageUrl\":\"/camera/705.jpg\",\"latitude\":-43.449125,\"longitude\":172.611821,\"name\":\"SH1 WBB Groynes Dr North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/705.jpg\",\"underMaintenance\":false},{\"description\":\"South along Western Belfast Bypass to Groynes Dr overpass\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"706\",\"imageUrl\":\"/camera/706.jpg\",\"latitude\":-43.449229,\"longitude\":172.61162,\"name\":\"SH1 WBB Groynes Dr South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/706.jpg\",\"underMaintenance\":false},{\"description\":\"North along the Russley Overbridge\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"709\",\"imageUrl\":\"/camera/709.jpg\",\"latitude\":-43.492518,\"longitude\":172.550329,\"name\":\"SH1 Memorial Ave North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/709.jpg\",\"underMaintenance\":false},{\"description\":\"South along the Russley Overbridge\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"710\",\"imageUrl\":\"/camera/710.jpg\",\"latitude\":-43.492761,\"longitude\":172.550215,\"name\":\"SH1 Memorial Ave South\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":13,\"thumbUrl\":\"/camera/thumb/710.jpg\",\"underMaintenance\":false},{\"description\":\"North along Russley Rd from Syd Bradley Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"711\",\"imageUrl\":\"/camera/711.jpg\",\"latitude\":-43.501626,\"longitude\":172.545168,\"name\":\"SH1 Syd Bradley Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":17,\"thumbUrl\":\"/camera/thumb/711.jpg\",\"underMaintenance\":false},{\"description\":\"South along Russley Rd at Harewood Rd roundabout\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"712\",\"imageUrl\":\"/camera/712.jpg\",\"latitude\":-43.478344,\"longitude\":172.556434,\"name\":\"SH1 Harewood Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/712.jpg\",\"underMaintenance\":false},{\"description\":\"East along Yaldhurst Rd from Avonhead Rd\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH73\",\"id\":\"644\",\"imageUrl\":\"/camera/644.jpg\",\"latitude\":-43.527555,\"longitude\":172.558273,\"name\":\"SH73 Avonhead Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/644.jpg\",\"underMaintenance\":false},{\"description\":\"South along Curletts Rd from Lunns Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH73\",\"id\":\"645\",\"imageUrl\":\"/camera/645.jpg\",\"latitude\":-43.544327,\"longitude\":172.572839,\"name\":\"SH73  Lunns Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/645.jpg\",\"underMaintenance\":false},{\"description\":\"East along Brougham St from Durham St Sth\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"690\",\"imageUrl\":\"/camera/690.jpg\",\"latitude\":-43.547588,\"longitude\":172.633567,\"name\":\"SH76 Durham St South\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/690.jpg\",\"underMaintenance\":false},{\"description\":\"West along Main South Rd from Goulding Ave\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"691\",\"imageUrl\":\"/camera/691.jpg\",\"latitude\":-43.543692,\"longitude\":172.522902,\"name\":\"SH1 Goulding Ave\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":22,\"thumbUrl\":\"/camera/thumb/691.jpg\",\"underMaintenance\":false},{\"description\":\"West along Blenheim Rd from Wharenui Rd\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"693\",\"imageUrl\":\"/camera/693.jpg\",\"latitude\":-43.538132,\"longitude\":172.587343,\"name\":\"Blenheim Rd / Wharenui Rd\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/693.jpg\",\"underMaintenance\":false},{\"description\":\"West along Main South Rd from Halswell Junction Rd\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"694\",\"imageUrl\":\"/camera/694.jpg\",\"latitude\":-43.545891,\"longitude\":172.507707,\"name\":\"SH1 Halswell Junction Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":23,\"thumbUrl\":\"/camera/thumb/694.jpg\",\"underMaintenance\":false},{\"description\":\"North along Main North Rd from Pound Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"695\",\"imageUrl\":\"/camera/695.jpg\",\"latitude\":-43.548874,\"longitude\":172.491634,\"name\":\"SH1 Pound Rd North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":24,\"thumbUrl\":\"/camera/thumb/695.jpg\",\"underMaintenance\":false},{\"description\":\"South along Main North Rd from Pound Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"696\",\"imageUrl\":\"/camera/696.jpg\",\"latitude\":-43.548975,\"longitude\":172.491297,\"name\":\"SH1 Pound Rd South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":25,\"thumbUrl\":\"/camera/thumb/696.jpg\",\"underMaintenance\":false},{\"description\":\"North along Queen Elizabeth II Dr from Innes Rd roundabout\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH74\",\"id\":\"671\",\"imageUrl\":\"/camera/671.jpg\",\"latitude\":-43.490023,\"longitude\":172.654695,\"name\":\"SH74 Innes Rd Roundabout\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/671.jpg\",\"underMaintenance\":false},{\"description\":\"South along ANZAC Dr from New Brighton Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH74\",\"id\":\"672\",\"imageUrl\":\"/camera/672.jpg\",\"latitude\":-43.500042,\"longitude\":172.700719,\"name\":\"SH74 New Brighton Rd Roundabout\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/672.jpg\",\"underMaintenance\":false},{\"description\":\"North along Travis Rd from Frosts Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH74\",\"id\":\"673\",\"imageUrl\":\"/camera/673.jpg\",\"latitude\":-43.493159,\"longitude\":172.701538,\"name\":\"SH74 Travis Rd Roundabout\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/673.jpg\",\"underMaintenance\":false},{\"description\":\"South along Dyers Rd from Metro Pl\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH74\",\"id\":\"674\",\"imageUrl\":\"/camera/674.jpg\",\"latitude\":-43.5353,\"longitude\":172.706061,\"name\":\"SH74 Metro Pl\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/674.jpg\",\"underMaintenance\":false},{\"description\":\"West along Garlands Rd from Rutherford St\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH74A\",\"id\":\"675\",\"imageUrl\":\"/camera/675.jpg\",\"latitude\":-43.556704,\"longitude\":172.681932,\"name\":\"SH74A Rutherford St\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/675.jpg\",\"underMaintenance\":false},{\"description\":\"South along Dyers Rd from Bridge St roundabout\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH74\",\"id\":\"676\",\"imageUrl\":\"/camera/676.jpg\",\"latitude\":-43.5253,\"longitude\":172.720372,\"name\":\"SH74 Bridge St Roundabout\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/676.jpg\",\"underMaintenance\":false},{\"description\":\"North along Halswell Rd from Nicholls Rd\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH75\",\"id\":\"678\",\"imageUrl\":\"/camera/678.jpg\",\"latitude\":-43.579301,\"longitude\":172.566663,\"name\":\"SH75 Nicholls Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/678.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy from Wrights Rd\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"679\",\"imageUrl\":\"/camera/679.jpg\",\"latitude\":-43.547106,\"longitude\":172.597799,\"name\":\"SH76 Wrights Rd East\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":13,\"thumbUrl\":\"/camera/thumb/679.jpg\",\"underMaintenance\":false},{\"description\":\"West along Sthn Mwy from Wrights Rd\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH76\",\"id\":\"680\",\"imageUrl\":\"/camera/680.jpg\",\"latitude\":-43.547106,\"longitude\":172.597799,\"name\":\"SH76 Wrights Rd West\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/680.jpg\",\"underMaintenance\":false},{\"description\":\"South along Lincoln Rd from Nairn St\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"681\",\"imageUrl\":\"/camera/681.jpg\",\"latitude\":-43.548018,\"longitude\":172.604038,\"name\":\"Lincoln Rd / Nairn St South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/681.jpg\",\"underMaintenance\":false},{\"description\":\"North along Lincoln Rd from Nairn St\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"682\",\"imageUrl\":\"/camera/682.jpg\",\"latitude\":-43.548018,\"longitude\":172.604038,\"name\":\"Lincoln Rd / Nairn St North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/682.jpg\",\"underMaintenance\":false},{\"description\":\"South along Russley Rd from Memorial Ave (Northbound traffic)\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"683\",\"imageUrl\":\"/camera/683.jpg\",\"latitude\":-43.492364,\"longitude\":172.549602,\"name\":\"SH1 Memorial Ave West\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":16,\"thumbUrl\":\"/camera/thumb/683.jpg\",\"underMaintenance\":false},{\"description\":\"West along Memorial Ave towards Christchurch Airport\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"684\",\"imageUrl\":\"/camera/684.jpg\",\"latitude\":-43.493365,\"longitude\":172.550462,\"name\":\"SH1 Memorial Ave\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":14,\"thumbUrl\":\"/camera/thumb/684.jpg\",\"underMaintenance\":false},{\"description\":\"South along Russley Rd from Memorial Ave\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"685\",\"imageUrl\":\"/camera/685.jpg\",\"latitude\":-43.493453,\"longitude\":172.550199,\"name\":\"SH1 Memorial Ave East\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":15,\"thumbUrl\":\"/camera/thumb/685.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 from Chaneys Off-ramp towards Northern Corridor Off-ramp\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"\",\"id\":\"777\",\"imageUrl\":\"/camera/777.jpg\",\"latitude\":-43.423207,\"longitude\":172.649206,\"name\":\"SH1 Chaneys Rd Off-ramp\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/777.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH74 towards Belfast Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"\",\"id\":\"778\",\"imageUrl\":\"/camera/778.jpg\",\"latitude\":-43.439177,\"longitude\":172.647344,\"name\":\"SH74 Railway Bridge\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/778.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH74 towards Belfast Rd Overbridge\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"\",\"id\":\"779\",\"imageUrl\":\"/camera/779.jpg\",\"latitude\":-43.447802,\"longitude\":172.646467,\"name\":\"SH74 Factory Rd \",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/779.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH74 towards Styx River Bridge\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"\",\"id\":\"780\",\"imageUrl\":\"/camera/780.jpg\",\"latitude\":-43.467919,\"longitude\":172.631653,\"name\":\"SH74 Radcliffe Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/780.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH74 towards Queen Elizabeth II Dr roundabout\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"\",\"id\":\"781\",\"imageUrl\":\"/camera/781.jpg\",\"latitude\":-43.47498,\"longitude\":172.630646,\"name\":\"SH74 Prestons Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/781.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH74 Queen Elizabeth II Dr northbound off-ramp\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"\",\"id\":\"782\",\"imageUrl\":\"/camera/782.jpg\",\"latitude\":-43.486765,\"longitude\":172.62878,\"name\":\"SH74 QEII Dr Roundabout South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/782.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH74 Queen Elizabeth II Dr southbound off-ramp\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"\",\"id\":\"783\",\"imageUrl\":\"/camera/783.jpg\",\"latitude\":-43.485345,\"longitude\":172.630821,\"name\":\"SH74 QEII Dr Roundabout North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/783.jpg\",\"underMaintenance\":false},{\"description\":\"South along Nthn Mwy from Tram Rd\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"754\",\"imageUrl\":\"/camera/754.jpg\",\"latitude\":-43.4078979574561,\"longitude\":172.645192836497,\"name\":\"SH1 Tram Rd South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/754.jpg\",\"underMaintenance\":false},{\"description\":\"West along Tram Rd over Nthn Mwy\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"755\",\"imageUrl\":\"/camera/755.jpg\",\"latitude\":-43.408127,\"longitude\":172.645199,\"name\":\"SH1 Tram Rd West\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/755.jpg\",\"underMaintenance\":false},{\"description\":\"East across Springs Rd roundabout\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH76H\",\"id\":\"756\",\"imageUrl\":\"/camera/756.jpg\",\"latitude\":-43.561593,\"longitude\":172.528445,\"name\":\"SH76 Springs Rd East\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/756.jpg\",\"underMaintenance\":false},{\"description\":\"South along Springs Rd from Springs Rd roundabout\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH76H\",\"id\":\"757\",\"imageUrl\":\"/camera/757.jpg\",\"latitude\":-43.561735,\"longitude\":172.528362,\"name\":\"SH76 Springs Rd South\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/757.jpg\",\"underMaintenance\":false},{\"description\":\"West along Halswell Juction Rd from Springs Rd roundabout\",\"direction\":\"Westbound\",\"group\":\"NA\",\"highway\":\"SH76H\",\"id\":\"758\",\"imageUrl\":\"/camera/758.jpg\",\"latitude\":-43.561461,\"longitude\":172.528378,\"name\":\"SH76 Springs Rd West\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/758.jpg\",\"underMaintenance\":false},{\"description\":\"SH75\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH75\",\"id\":\"726\",\"imageUrl\":\"/camera/726.jpg\",\"latitude\":-43.562436,\"longitude\":172.579745,\"name\":\"SH75 Augustine Dr North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/726.jpg\",\"underMaintenance\":false},{\"description\":\"SH75\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH75\",\"id\":\"727\",\"imageUrl\":\"/camera/727.jpg\",\"latitude\":-43.562605,\"longitude\":172.579515,\"name\":\"SH75 Augustine Dr South\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/727.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 from Weedons Rd Overbridge\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"\",\"id\":\"767\",\"imageUrl\":\"/camera/767.jpg\",\"latitude\":-43.582268,\"longitude\":172.409294,\"name\":\"SH1 Weedons Rd Interchange\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/767.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 towards SH76 interchange\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"\",\"id\":\"768\",\"imageUrl\":\"/camera/768.jpg\",\"latitude\":-43.565623,\"longitude\":172.447958,\"name\":\"SH1/SH76 Interchange\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/768.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 towards Weedons Ross Rd\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"\",\"id\":\"762\",\"imageUrl\":\"/camera/762.jpg\",\"latitude\":-43.5747,\"longitude\":172.427058,\"name\":\"SH1 Berketts Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/762.jpg\",\"underMaintenance\":false},{\"description\":\"North over Waimakariri Bridge, Nthn Mwy\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"268\",\"imageUrl\":\"/camera/268.jpg\",\"latitude\":-43.415,\"longitude\":172.647,\"name\":\"SH1 Waimakariri Bridge\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/268.jpg\",\"underMaintenance\":false},{\"description\":\"West along Main South Rd from Carmen Rd\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"260\",\"imageUrl\":\"/camera/260.jpg\",\"latitude\":-43.54336,\"longitude\":172.52569,\"name\":\"SH1 Main South Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":21,\"thumbUrl\":\"/camera/thumb/260.jpg\",\"underMaintenance\":false},{\"description\":\"North along Main North Rd from Johns Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1J\",\"id\":\"265\",\"imageUrl\":\"/camera/265.jpg\",\"latitude\":-43.451,\"longitude\":172.629,\"name\":\"SH1 Belfast North\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/265.jpg\",\"underMaintenance\":false},{\"description\":\"West along Johns Rd from Main North Rd\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"SH1J\",\"id\":\"266\",\"imageUrl\":\"/camera/266.jpg\",\"latitude\":-43.451118,\"longitude\":172.628069,\"name\":\"SH1 Belfast West\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/266.jpg\",\"underMaintenance\":false},{\"description\":\"West along Yaldhurst Rd from Curletts Rd\",\"direction\":\"Westbound\",\"group\":\"SH73\",\"highway\":\"SH73\",\"id\":\"261\",\"imageUrl\":\"/camera/261.jpg\",\"latitude\":-43.53074,\"longitude\":172.56812,\"name\":\"SH73 Yaldhurst Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/261.jpg\",\"underMaintenance\":false},{\"description\":\"South along Curletts Rd from Blenheim Rd\",\"direction\":\"Southbound\",\"group\":\"SH73\",\"highway\":\"SH73\",\"id\":\"258\",\"imageUrl\":\"/camera/258.jpg\",\"latitude\":-43.53931,\"longitude\":172.56838,\"name\":\"SH73 Blenheim Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/258.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy at Curletts Rd Interchange\",\"direction\":\"Eastbound\",\"group\":\"SH73\",\"highway\":\"SH73\",\"id\":\"283\",\"imageUrl\":\"/camera/283.jpg\",\"latitude\":-43.54808,\"longitude\":172.57778,\"name\":\"SH73/SH76 Interchange\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/283.jpg\",\"underMaintenance\":false},{\"description\":\"South along ANZAC Dr from Pages Rd\",\"direction\":\"Southbound\",\"group\":\"SH74\",\"highway\":\"SH74\",\"id\":\"256\",\"imageUrl\":\"/camera/256.jpg\",\"latitude\":-43.51132,\"longitude\":172.71618,\"name\":\"SH74 Pages Rd\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/256.jpg\",\"underMaintenance\":false},{\"description\":\"North along Main North Rd from Queen Elizabeth II Dr\",\"direction\":\"Northbound\",\"group\":\"SH74\",\"highway\":\"SH74M\",\"id\":\"263\",\"imageUrl\":\"/camera/263.jpg\",\"latitude\":-43.48457,\"longitude\":172.61631,\"name\":\"SH74 Queen Elizabeth II Dr\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/263.jpg\",\"underMaintenance\":false},{\"description\":\"South along Dyers Rd from Linwood Ave\",\"direction\":\"Northbound\",\"group\":\"SH74\",\"highway\":\"SH74\",\"id\":\"267\",\"imageUrl\":\"/camera/267.jpg\",\"latitude\":-43.546425,\"longitude\":172.695535,\"name\":\"SH74 Linwood Ave\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/267.jpg\",\"underMaintenance\":false},{\"description\":\"West along Brougham St from Colombo St\",\"direction\":\"Westbound\",\"group\":\"SH76\",\"highway\":\"SH76\",\"id\":\"259\",\"imageUrl\":\"/camera/259.jpg\",\"latitude\":-43.547498,\"longitude\":172.636663,\"name\":\"SH76 Colombo St\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/259.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy towards Springs Rd Overbridge\",\"direction\":\"Eastbound\",\"group\":\"SH76\",\"highway\":\"\",\"id\":\"763\",\"imageUrl\":\"/camera/763.jpg\",\"latitude\":-43.565319,\"longitude\":172.518967,\"name\":\"SH76 Marshs Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/763.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy towards Shands Rd Overbridge\",\"direction\":\"Eastbound\",\"group\":\"SH76\",\"highway\":\"\",\"id\":\"764\",\"imageUrl\":\"/camera/764.jpg\",\"latitude\":-43.563769,\"longitude\":172.481386,\"name\":\"SH76 Trents Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/764.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy towards Trents Rd Overbridge\",\"direction\":\"Eastbound\",\"group\":\"SH76\",\"highway\":\"\",\"id\":\"766\",\"imageUrl\":\"/camera/766.jpg\",\"latitude\":-43.567772,\"longitude\":172.464054,\"name\":\"SH76 Waterholes Rd\",\"offline\":true,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/766.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy from Halswell Junction Rd Overbridge\",\"direction\":\"Eastbound\",\"group\":\"SH76\",\"highway\":\"\",\"id\":\"759\",\"imageUrl\":\"/camera/759.jpg\",\"latitude\":-43.564249,\"longitude\":172.534649,\"name\":\"SH76 Halswell Junction Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/759.jpg\",\"underMaintenance\":false},{\"description\":\"East along Sthn Mwy across Springs Rd Overbridge\",\"direction\":\"Eastbound\",\"group\":\"SH76\",\"highway\":\"SH1\",\"id\":\"760\",\"imageUrl\":\"/camera/760.jpg\",\"latitude\":-43.564229,\"longitude\":172.526089,\"name\":\"SH76 Springs Rd\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/760.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 Andersons Bay Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"253\",\"imageUrl\":\"/camera/253.jpg\",\"latitude\":-45.888,\"longitude\":170.5,\"name\":\"SH1 Dunedin\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/253.jpg\",\"underMaintenance\":false},{\"description\":\"West along Caversham Mwy from Andersons Bay Rd\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"254\",\"imageUrl\":\"/camera/254.jpg\",\"latitude\":-45.88869,\"longitude\":170.49952,\"name\":\"SH1 Caversham Mwy\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/254.jpg\",\"underMaintenance\":false},{\"description\":\"East along Dunedin Sthn Mwy from Mornington Rd\",\"direction\":\"Eastbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"255\",\"imageUrl\":\"/camera/255.jpg\",\"latitude\":-45.896579,\"longitude\":170.462609,\"name\":\"SH1 Dunedin Southern Mwy\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/255.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 Cambridge Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"235\",\"imageUrl\":\"/camera/235.jpg\",\"latitude\":-37.800758,\"longitude\":175.319009,\"name\":\"SH1 Cobham Dr Roundabout\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/235.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 Cambridge Rd\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"236\",\"imageUrl\":\"/camera/236.jpg\",\"latitude\":-37.801197,\"longitude\":175.322985,\"name\":\"SH1/SH26 Hillcrest Roundabout\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/236.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH1 Cambridge Rd\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"238\",\"imageUrl\":\"/camera/238.jpg\",\"latitude\":-37.801002,\"longitude\":175.322447,\"name\":\"SH1/SH26 Hillcrest Roundabout\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":13,\"thumbUrl\":\"/camera/thumb/238.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH1 Cobham Dr\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"239\",\"imageUrl\":\"/camera/239.jpg\",\"latitude\":-37.800974,\"longitude\":175.318981,\"name\":\"SH1 Cobham Dr Roundabout\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/239.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH1 Cambridge Rd\",\"direction\":\"Eastbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"240\",\"imageUrl\":\"/camera/240.jpg\",\"latitude\":-37.800828,\"longitude\":175.319329,\"name\":\"SH1 Cobham Dr Roundabout\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/240.jpg\",\"underMaintenance\":false},{\"description\":\"North along Ohaupo Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"241\",\"imageUrl\":\"/camera/241.jpg\",\"latitude\":-37.808001,\"longitude\":175.280243,\"name\":\"SH1/SH3 Ohaupo Rd Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/241.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH1 Lorne St\",\"direction\":\"Eastbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"242\",\"imageUrl\":\"/camera/242.jpg\",\"latitude\":-37.808221,\"longitude\":175.280014,\"name\":\"SH1/SH3 Ohaupo Rd Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/242.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH3 Ohaupo Rd\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"243\",\"imageUrl\":\"/camera/243.jpg\",\"latitude\":-37.80829,\"longitude\":175.280354,\"name\":\"SH1/SH3 Ohaupo Rd Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/243.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH1 Kahikatea Dr\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"244\",\"imageUrl\":\"/camera/244.jpg\",\"latitude\":-37.808111,\"longitude\":175.28051,\"name\":\"SH1/SH3 Ohaupo Rd Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/244.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 Lincoln St\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"245\",\"imageUrl\":\"/camera/245.jpg\",\"latitude\":-37.788923,\"longitude\":175.259582,\"name\":\"SH1/SH23 Massey St Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/245.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH23 Massey St\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"246\",\"imageUrl\":\"/camera/246.jpg\",\"latitude\":-37.789,\"longitude\":175.259,\"name\":\"SH1/SH23 Massey St Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/246.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 Greenwood St\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"247\",\"imageUrl\":\"/camera/247.jpg\",\"latitude\":-37.789285,\"longitude\":175.259745,\"name\":\"SH1/SH23 Massey St Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/247.jpg\",\"underMaintenance\":false},{\"description\":\"East over Hall St Overbridge\",\"direction\":\"Eastbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"248\",\"imageUrl\":\"/camera/248.jpg\",\"latitude\":-37.788938,\"longitude\":175.260011,\"name\":\"SH1/SH23 Massey St Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/248.jpg\",\"underMaintenance\":false},{\"description\":\"North along Te Rapa Rd\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"ART\",\"id\":\"249\",\"imageUrl\":\"/camera/249.jpg\",\"latitude\":-37.749758,\"longitude\":175.236791,\"name\":\"Te Rapa Rd/Wairere Dr Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/249.jpg\",\"underMaintenance\":false},{\"description\":\"West along Wairere Dr\",\"direction\":\"Westbound\",\"group\":\"SH1\",\"highway\":\"ART\",\"id\":\"250\",\"imageUrl\":\"/camera/250.jpg\",\"latitude\":-37.750182,\"longitude\":175.236555,\"name\":\"Te Rapa Rd/Wairere Dr Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/250.jpg\",\"underMaintenance\":false},{\"description\":\"South along Te Rapa Rd\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"ART\",\"id\":\"251\",\"imageUrl\":\"/camera/251.jpg\",\"latitude\":-37.750212,\"longitude\":175.237207,\"name\":\"Te Rapa Rd/Wairere Dr Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/251.jpg\",\"underMaintenance\":false},{\"description\":\"East along Wairere Dr\",\"direction\":\"Eastbound\",\"group\":\"SH1\",\"highway\":\"ART\",\"id\":\"252\",\"imageUrl\":\"/camera/252.jpg\",\"latitude\":-37.749885,\"longitude\":175.237228,\"name\":\"Te Rapa Rd/Wairere Dr Intersection\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/252.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH26 Morrinsville Rd\",\"direction\":\"Eastbound\",\"group\":\"SH26\",\"highway\":\"SH1\",\"id\":\"237\",\"imageUrl\":\"/camera/237.jpg\",\"latitude\":-37.800933,\"longitude\":175.322773,\"name\":\"SH1/SH26 Hillcrest Roundabout\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/237.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH2/SH50 across Taradale Rd roundabout\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH2\",\"id\":\"739\",\"imageUrl\":\"/camera/739.jpg\",\"latitude\":-39.511299,\"longitude\":176.876677,\"name\":\"SH2/SH50/SH51 Taradale Rd Roundabout\",\"offline\":false,\"region\":{\"id\":\"6\",\"name\":\"Hawkes Bay\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/739.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH2 from Watchman Rd roundabout\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH2\",\"id\":\"740\",\"imageUrl\":\"/camera/740.jpg\",\"latitude\":-39.474114,\"longitude\":176.877272,\"name\":\"SH2 Watchman Rd Roundabout\",\"offline\":false,\"region\":{\"id\":\"6\",\"name\":\"Hawkes Bay\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/740.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH2 at Meeanee Rd interchange\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH2\",\"id\":\"741\",\"imageUrl\":\"/camera/741.jpg\",\"latitude\":-39.53946,\"longitude\":176.86055,\"name\":\"SH2 Meeanee Rd Interchange\",\"offline\":false,\"region\":{\"id\":\"6\",\"name\":\"Hawkes Bay\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/741.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH50 (towards City Centre) from Prebensen Dr roundabout\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH2\",\"id\":\"742\",\"imageUrl\":\"/camera/742.jpg\",\"latitude\":-39.496227,\"longitude\":176.873477,\"name\":\"SH2/SH50 Prebensen Dr Roundabout\",\"offline\":true,\"region\":{\"id\":\"6\",\"name\":\"Hawkes Bay\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/742.jpg\",\"underMaintenance\":false},{\"description\":\"South along Williams St from Kaiapoi Bridge\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"ART\",\"id\":\"713\",\"imageUrl\":\"/camera/713.jpg\",\"latitude\":-43.3827,\"longitude\":172.657059,\"name\":\"Williams St / Kaiapoi Bridge\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/713.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 towards junction with SH62\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"646\",\"imageUrl\":\"/camera/646.jpg\",\"latitude\":-41.458547,\"longitude\":173.963118,\"name\":\"SH1 Spring Creek\",\"offline\":true,\"region\":{\"id\":\"10\",\"name\":\"Nelson/Marlborough\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/646.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH6 by Springlands Shopping Centre\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH6\",\"id\":\"650\",\"imageUrl\":\"/camera/650.jpg\",\"latitude\":-41.509186,\"longitude\":173.935201,\"name\":\"SH6 Blenheim\",\"offline\":false,\"region\":{\"id\":\"10\",\"name\":\"Nelson/Marlborough\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/650.jpg\",\"underMaintenance\":false},{\"description\":\"North towards Picton\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"657\",\"imageUrl\":\"/camera/657.jpg\",\"latitude\":-41.301216,\"longitude\":173.996527,\"name\":\"SH1 Picton North\",\"offline\":false,\"region\":{\"id\":\"10\",\"name\":\"Nelson/Marlborough\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/657.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 towards Picton at SH6 roundabout\",\"direction\":\"Northbound\",\"group\":\"NA\",\"highway\":\"SH1\",\"id\":\"658\",\"imageUrl\":\"/camera/658.jpg\",\"latitude\":-41.508696,\"longitude\":173.959086,\"name\":\"SH1 Blenheim North\",\"offline\":false,\"region\":{\"id\":\"10\",\"name\":\"Nelson/Marlborough\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/658.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH7 (Broadway) towards Reefton\",\"direction\":\"Westbound\",\"group\":\"SH7\",\"highway\":\"SH7\",\"id\":\"661\",\"imageUrl\":\"/camera/661.jpg\",\"latitude\":-42.119841,\"longitude\":171.871253,\"name\":\"SH7 Reefton\",\"offline\":false,\"region\":{\"id\":\"12\",\"name\":\"West Coast\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/661.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH63 in St Arnaud\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH63\",\"id\":\"647\",\"imageUrl\":\"/camera/647.jpg\",\"latitude\":-41.801028,\"longitude\":172.849793,\"name\":\"SH63 St Arnaud\",\"offline\":false,\"region\":{\"id\":\"10\",\"name\":\"Nelson/Marlborough\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/647.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH6 in Murchison\",\"direction\":\"Eastbound\",\"group\":\"NA\",\"highway\":\"SH6\",\"id\":\"648\",\"imageUrl\":\"/camera/648.jpg\",\"latitude\":-41.800115,\"longitude\":172.322831,\"name\":\"SH6 Murchison\",\"offline\":false,\"region\":{\"id\":\"10\",\"name\":\"Nelson/Marlborough\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/648.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH6 Kawarau Rd from SH6A Frankton Roundabout\",\"direction\":\"Southbound\",\"group\":\"NA\",\"highway\":\"SH6\",\"id\":\"627\",\"imageUrl\":\"/camera/627.jpg\",\"latitude\":-45.01584,\"longitude\":168.731767,\"name\":\"SH6/SH6A Frankton Roundabout\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/627.jpg\",\"underMaintenance\":false},{\"description\":\"South along Gowland St from Albany St\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"746\",\"imageUrl\":\"/camera/746.jpg\",\"latitude\":-45.866842,\"longitude\":170.510978,\"name\":\"SH1 Albany St South\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/746.jpg\",\"underMaintenance\":false},{\"description\":\"North along Cumberland St from St Andrew St\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"747\",\"imageUrl\":\"/camera/747.jpg\",\"latitude\":-45.87245,\"longitude\":170.507747,\"name\":\"SH1 St Andrew St\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/747.jpg\",\"underMaintenance\":false},{\"description\":\"North along Queens Gardens\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"748\",\"imageUrl\":\"/camera/748.jpg\",\"latitude\":-45.878315,\"longitude\":170.504628,\"name\":\"SH1 Queens Gardens\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/748.jpg\",\"underMaintenance\":false},{\"description\":\"North along Great King St from Albany St\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"749\",\"imageUrl\":\"/camera/749.jpg\",\"latitude\":-45.866536,\"longitude\":170.50947,\"name\":\"SH1 Albany St North\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/749.jpg\",\"underMaintenance\":false},{\"description\":\"South along Queens Gardens from Burlington St\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"750\",\"imageUrl\":\"/camera/750.jpg\",\"latitude\":-45.877053,\"longitude\":170.504596,\"name\":\"SH1 Burlington St\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/750.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH6 over Kawarau River Bridge\",\"direction\":\"Southbound\",\"group\":\"SH6\",\"highway\":\"SH6\",\"id\":\"623\",\"imageUrl\":\"/camera/623.jpg\",\"latitude\":-45.02751,\"longitude\":168.734043,\"name\":\"SH6 Frankton\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/623.jpg\",\"underMaintenance\":false},{\"description\":\"East along Stanley St from Ballarat St\",\"direction\":\"Eastbound\",\"group\":\"SH6A\",\"highway\":\"SH6A\",\"id\":\"621\",\"imageUrl\":\"/camera/621.jpg\",\"latitude\":-45.031031,\"longitude\":168.662605,\"name\":\"SH6A Queenstown Sth\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/621.jpg\",\"underMaintenance\":false},{\"description\":\"East along Stanley St from Shotover St\",\"direction\":\"Eastbound\",\"group\":\"SH6A\",\"highway\":\"SH6A\",\"id\":\"622\",\"imageUrl\":\"/camera/622.jpg\",\"latitude\":-45.030105,\"longitude\":168.661541,\"name\":\"SH6A Queenstown Nth\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/622.jpg\",\"underMaintenance\":false},{\"description\":\"West across both Rakaia Gorge Bridges\",\"direction\":\"Westbound\",\"group\":\"SH77\",\"id\":\"840\",\"imageUrl\":\"/camera/840.jpg\",\"latitude\":-43.518198,\"longitude\":171.659349,\"name\":\"SH77 Rakaia Gorge\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":2147483647,\"thumbUrl\":\"/camera/thumb/840.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH79 to Route 72 Junction\",\"direction\":\"Eastbound\",\"group\":\"SH79\",\"highway\":\"SH79\",\"id\":\"733\",\"imageUrl\":\"/camera/733.jpg\",\"latitude\":-44.043279,\"longitude\":171.271456,\"name\":\"SH79 Orari East\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/733.jpg\",\"underMaintenance\":false},{\"description\":\"West along Upper Orari Bridge\",\"direction\":\"Westbound\",\"group\":\"SH79\",\"highway\":\"SH79\",\"id\":\"734\",\"imageUrl\":\"/camera/734.jpg\",\"latitude\":-44.043811,\"longitude\":171.270721,\"name\":\"SH79 Orari Bridge\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/734.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH8 towards Burkes Pass township\",\"direction\":\"Eastbound\",\"group\":\"SH8\",\"highway\":\"SH8\",\"id\":\"735\",\"imageUrl\":\"/camera/735.jpg\",\"latitude\":-44.089907,\"longitude\":170.601734,\"name\":\"SH8 Burkes Pass\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/735.jpg\",\"underMaintenance\":false},{\"description\":\"North over Lake Ruataniwha Spill way Bridge towards Twizel\",\"direction\":\"Eastbound\",\"group\":\"SH8\",\"highway\":\"SH8\",\"id\":\"736\",\"imageUrl\":\"/camera/736.jpg\",\"latitude\":-44.290432,\"longitude\":170.08438,\"name\":\"SH8 Twizel North\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/736.jpg\",\"underMaintenance\":false},{\"description\":\"South from Lake Ruataniwha Spillway Bridge away from Twizel\",\"direction\":\"Westbound\",\"group\":\"SH8\",\"highway\":\"SH8\",\"id\":\"737\",\"imageUrl\":\"/camera/737.jpg\",\"latitude\":-44.290538,\"longitude\":170.084533,\"name\":\"SH8 Twizel South\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/737.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH8 towards Lindis Pass Summit Lookout\",\"direction\":\"Southbound\",\"group\":\"SH8\",\"highway\":\"SH8\",\"id\":\"725\",\"imageUrl\":\"/camera/725.jpg\",\"latitude\":-44.58633,\"longitude\":169.646311,\"name\":\"SH8 Lindis Pass\",\"offline\":false,\"region\":{\"id\":\"13\",\"name\":\"Otago\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/725.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH80 towards SH80/SH8 Pukaki Junction\",\"direction\":\"Southbound\",\"group\":\"SH80\",\"highway\":\"SH80\",\"id\":\"730\",\"imageUrl\":\"/camera/730.jpg\",\"latitude\":-44.187724,\"longitude\":170.124617,\"name\":\"SH80 Pukaki Junction\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/730.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH80 from SH80/SH8 Pukaki Junction\",\"direction\":\"Northbound\",\"group\":\"SH80\",\"highway\":\"SH88\",\"id\":\"731\",\"imageUrl\":\"/camera/731.jpg\",\"latitude\":-44.187562,\"longitude\":170.12378,\"name\":\"SH80 Aoraki Mt Cook Hwy\",\"offline\":false,\"region\":{\"id\":\"11\",\"name\":\"Canterbury\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/731.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 Desert Rd at Summit\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"608\",\"imageUrl\":\"/camera/608.jpg\",\"latitude\":-39.294802,\"longitude\":175.741135,\"name\":\"SH1 Desert Rd\",\"offline\":true,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/608.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 Desert Road at Waihohonu Bridge\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"638\",\"imageUrl\":\"/camera/638.jpg\",\"latitude\":-39.217695,\"longitude\":175.735945,\"name\":\"SH1 Waihohonu Bridge\",\"offline\":false,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/638.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 at Peter's Hill\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"639\",\"imageUrl\":\"/camera/639.jpg\",\"latitude\":-39.530931,\"longitude\":175.68276,\"name\":\"SH1 South of Waiouru\",\"offline\":true,\"region\":{\"id\":\"8\",\"name\":\"Manawatu-Whanganui\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/639.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH29 Kaimai Ranges\",\"direction\":\"Westbound\",\"group\":\"SH29\",\"highway\":\"SH29\",\"id\":\"603\",\"imageUrl\":\"/camera/603.jpg\",\"latitude\":-37.836873,\"longitude\":175.977909,\"name\":\"SH29 Kaimai Eastern\",\"offline\":false,\"region\":{\"id\":\"4\",\"name\":\"Bay Of Plenty\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/603.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH29 Kaimai Ranges\",\"direction\":\"Eastbound\",\"group\":\"SH29\",\"highway\":\"SH29\",\"id\":\"604\",\"imageUrl\":\"/camera/604.jpg\",\"latitude\":-37.882206,\"longitude\":175.905293,\"name\":\"SH29 Kaimai Western\",\"offline\":false,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/604.jpg\",\"underMaintenance\":false},{\"description\":\"West along SH29 Kaimai Ranges (Summit)\",\"direction\":\"Westbound\",\"group\":\"SH29\",\"highway\":\"SH29\",\"id\":\"605\",\"imageUrl\":\"/camera/605.jpg\",\"latitude\":-37.866012,\"longitude\":175.942052,\"name\":\"SH29 Eastern Summit\",\"offline\":false,\"region\":{\"id\":\"4\",\"name\":\"Bay Of Plenty\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/605.jpg\",\"underMaintenance\":false},{\"description\":\"East along SH29 Kaimai Ranges (Summit)\",\"direction\":\"Eastbound\",\"group\":\"SH29\",\"highway\":\"SH29\",\"id\":\"606\",\"imageUrl\":\"/camera/606.jpg\",\"latitude\":-37.87864,\"longitude\":175.926655,\"name\":\"SH29 Western Summit\",\"offline\":false,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/606.jpg\",\"underMaintenance\":false},{\"description\":\"SH29 Kaimai Summit\",\"direction\":\"Eastbound\",\"group\":\"SH29\",\"highway\":\"SH29\",\"id\":\"751\",\"imageUrl\":\"/camera/751.jpg\",\"latitude\":-37.87017398,\"longitude\":175.9336401,\"name\":\"Kaimai Summit\",\"offline\":false,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/751.jpg\",\"underMaintenance\":false},{\"description\":\"SH29 Kaimai Lookout Eastbound\",\"direction\":\"Eastbound\",\"group\":\"SH29\",\"highway\":\"SH29\",\"id\":\"752\",\"imageUrl\":\"/camera/752.jpg\",\"latitude\":-37.879389,\"longitude\":175.927361,\"name\":\"Kaimai Lookout Eastbound\",\"offline\":false,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/752.jpg\",\"underMaintenance\":false},{\"description\":\"SH29 Kaimai Lookout Westbound\",\"direction\":\"Westbound\",\"group\":\"SH29\",\"highway\":\"SH29\",\"id\":\"753\",\"imageUrl\":\"/camera/753.jpg\",\"latitude\":-37.879389,\"longitude\":175.927361,\"name\":\"Kaimai Lookout Westbound\",\"offline\":false,\"region\":{\"id\":\"3\",\"name\":\"Waikato\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/753.jpg\",\"underMaintenance\":false},{\"description\":\"SH4 Makatote Viaduct\",\"direction\":\"Southbound\",\"group\":\"SH4\",\"highway\":\"\",\"id\":\"784\",\"imageUrl\":\"/camera/784.jpg\",\"latitude\":-39.26403,\"longitude\":175.392607,\"name\":\"SH4 Makatote Viaduct\",\"offline\":true,\"region\":{\"id\":\"8\",\"name\":\"Manawatu-Whanganui\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/784.jpg\",\"underMaintenance\":false},{\"description\":\"Looking south, north of the Mill Road/Main Highway roundabout.\",\"direction\":\"Southbound\",\"group\":\"Old SH1\",\"highway\":\"Old SH1\",\"id\":\"812\",\"imageUrl\":\"/camera/812.jpg\",\"latitude\":-40.75959,\"longitude\":175.15858,\"name\":\"Otaki Main Highway\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/812.jpg\",\"underMaintenance\":false},{\"description\":\"Looking north, north Waitohu Stream bridge. \",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"813\",\"imageUrl\":\"/camera/813.jpg\",\"latitude\":-40.74893,\"longitude\":175.16644,\"name\":\"SH1 Waitohu Stream\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/813.jpg\",\"underMaintenance\":false},{\"description\":\"Looking south, south of Lawlors Road.\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"814\",\"imageUrl\":\"/camera/814.jpg\",\"latitude\":-40.743007,\"longitude\":175.171708,\"name\":\"SH1 Lawlors Rd\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/814.jpg\",\"underMaintenance\":false},{\"description\":\"North from south of the railway overpass bridge.\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"804\",\"imageUrl\":\"/camera/804.jpg\",\"latitude\":-40.82047,\"longitude\":175.10235,\"name\":\"SH1 Makahuri\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/804.jpg\",\"underMaintenance\":false},{\"description\":\"South adjacent to the bend of Gear Road.\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"Sh1\",\"id\":\"805\",\"imageUrl\":\"/camera/805.jpg\",\"latitude\":-40.80976,\"longitude\":175.11629,\"name\":\"SH1 Gear Rd Emergency Access\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/805.jpg\",\"underMaintenance\":false},{\"description\":\"South towards the School Road Overbirdge.\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"806\",\"imageUrl\":\"/camera/806.jpg\",\"latitude\":-40.78968,\"longitude\":175.13189,\"name\":\"SH1 Jim Winiata Way\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/806.jpg\",\"underMaintenance\":false},{\"description\":\"North towards Otaki Offramp.\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"807\",\"imageUrl\":\"/camera/807.jpg\",\"latitude\":-40.78129,\"longitude\":175.13856,\"name\":\"SH1 Old Hautere Rd \",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/807.jpg\",\"underMaintenance\":false},{\"description\":\"South from the Otaki Gorge Road overpass bridge.\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"808\",\"imageUrl\":\"/camera/808.jpg\",\"latitude\":-40.77493,\"longitude\":175.14481,\"name\":\"SH1 Otaki Gorge Rd\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/808.jpg\",\"underMaintenance\":false},{\"description\":\"North from Otaki Rail station.  \",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"809\",\"imageUrl\":\"/camera/809.jpg\",\"latitude\":-40.76431,\"longitude\":175.15459,\"name\":\"SH1 Otaki Rail Station\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/809.jpg\",\"underMaintenance\":false},{\"description\":\"South from Rahui Road overpass bridge .\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"810\",\"imageUrl\":\"/camera/810.jpg\",\"latitude\":-40.76149,\"longitude\":175.15986,\"name\":\"SH1 Rahui Rd\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/810.jpg\",\"underMaintenance\":false},{\"description\":\"North from County Road.\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"811\",\"imageUrl\":\"/camera/811.jpg\",\"latitude\":-40.75829,\"longitude\":175.16166,\"name\":\"SH1 County Rd\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/811.jpg\",\"underMaintenance\":false},{\"description\":\"South view from north of Terrace Tunnel SH1\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"828\",\"imageUrl\":\"/camera/828.jpg\",\"latitude\":-41.283374,\"longitude\":174.773778,\"name\":\"SH1 Clifton Terrace\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":2147483647,\"thumbUrl\":\"/camera/thumb/828.jpg\",\"underMaintenance\":false},{\"description\":\"South along Transmission Gully Mwy from Mackays Crossing Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"787\",\"imageUrl\":\"/camera/787.jpg\",\"latitude\":-40.971228,\"longitude\":174.983048,\"name\":\"SH1 Mackays Crossing\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/787.jpg\",\"underMaintenance\":false},{\"description\":\"South along Transmission Gully Mwy from Paekakariki Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"789\",\"imageUrl\":\"/camera/789.jpg\",\"latitude\":-40.982679,\"longitude\":174.970742,\"name\":\"SH1 Paekakariki \",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/789.jpg\",\"underMaintenance\":false},{\"description\":\"South along Transmission Gully Mwy from SH58  Pauatahanui Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"790\",\"imageUrl\":\"/camera/790.jpg\",\"latitude\":-41.11331,\"longitude\":174.918456,\"name\":\"SH1 Pauatahanui South\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/790.jpg\",\"underMaintenance\":false},{\"description\":\"North along Transmission Gully Mwy from SH58  Pauatahanui Interchange\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"791\",\"imageUrl\":\"/camera/791.jpg\",\"latitude\":-41.112172,\"longitude\":174.917842,\"name\":\"SH1 Pauatahanui North\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/791.jpg\",\"underMaintenance\":false},{\"description\":\"South along Transmission Gully Mwy from Waitangirua Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"792\",\"imageUrl\":\"/camera/792.jpg\",\"latitude\":-41.132137,\"longitude\":174.901206,\"name\":\"SH1 Waitangirua South\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":5,\"thumbUrl\":\"/camera/thumb/792.jpg\",\"underMaintenance\":false},{\"description\":\"North along Transmission Gully Mwy from Waitangirua Interchange\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"793\",\"imageUrl\":\"/camera/793.jpg\",\"latitude\":-41.131795,\"longitude\":174.90002,\"name\":\"SH1 Waitangirua North\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":6,\"thumbUrl\":\"/camera/thumb/793.jpg\",\"underMaintenance\":false},{\"description\":\"South along Transmission Gully Mwy from Kenepuru Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"794\",\"imageUrl\":\"/camera/794.jpg\",\"latitude\":-41.151869,\"longitude\":174.844891,\"name\":\"SH1 Kenepuru \",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":7,\"thumbUrl\":\"/camera/thumb/794.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 from Churton Park Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"795\",\"imageUrl\":\"/camera/795.jpg\",\"latitude\":-41.205749,\"longitude\":174.818448,\"name\":\"SH1 Churton Park South\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":10,\"thumbUrl\":\"/camera/thumb/795.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 from Churton Park Interchange\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"796\",\"imageUrl\":\"/camera/796.jpg\",\"latitude\":-41.204499,\"longitude\":174.821357,\"name\":\"SH1 Churton Park North\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":9,\"thumbUrl\":\"/camera/thumb/796.jpg\",\"underMaintenance\":false},{\"description\":\"South along Urban Mwy from SH1/SH2 Interchange\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"282\",\"imageUrl\":\"/camera/282.jpg\",\"latitude\":-41.248069,\"longitude\":174.813576,\"name\":\"SH1/SH2 Interchange\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/282.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 at Otaki\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"233\",\"imageUrl\":\"/camera/233.jpg\",\"latitude\":-40.762458,\"longitude\":175.155501,\"name\":\"SH1 Otaki\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/233.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 from Johnsonville Off-ramp\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"226\",\"imageUrl\":\"/camera/226.jpg\",\"latitude\":-41.227951,\"longitude\":174.808116,\"name\":\"SH1 Johnsonville\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/226.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 from Newlands Rd\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"227\",\"imageUrl\":\"/camera/227.jpg\",\"latitude\":-41.231877,\"longitude\":174.809546,\"name\":\"SH1 Newlands\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":12,\"thumbUrl\":\"/camera/thumb/227.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH1 in the Ngauranga Gorge\",\"direction\":\"Southbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"228\",\"imageUrl\":\"/camera/228.jpg\",\"latitude\":-41.241,\"longitude\":174.809,\"name\":\"SH1 Ngauranga Gorge\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":11,\"thumbUrl\":\"/camera/thumb/228.jpg\",\"underMaintenance\":false},{\"description\":\"North along Urban Mwy from Tinakori Rd On-ramp\",\"direction\":\"Northbound\",\"group\":\"SH1\",\"highway\":\"SH1\",\"id\":\"230\",\"imageUrl\":\"/camera/230.jpg\",\"latitude\":-41.276291,\"longitude\":174.773064,\"name\":\"SH1 Tinakori Rd On-ramp\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":13,\"thumbUrl\":\"/camera/thumb/230.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH2 from Petone Off-ramp\",\"direction\":\"Southbound\",\"group\":\"SH2\",\"highway\":\"SH2\",\"id\":\"232\",\"imageUrl\":\"/camera/232.jpg\",\"latitude\":-41.224,\"longitude\":174.86,\"name\":\"SH2 Petone\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/232.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH1 north of Tawa Interchange\",\"direction\":\"Northbound\",\"group\":\"SH2\",\"highway\":\"SH1\",\"id\":\"277\",\"imageUrl\":\"/camera/277.jpg\",\"latitude\":-41.177675,\"longitude\":174.829953,\"name\":\"SH1 Tawa\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":8,\"thumbUrl\":\"/camera/thumb/277.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH2 at Melling Interchange\",\"direction\":\"Southbound\",\"group\":\"SH2\",\"highway\":\"SH2\",\"id\":\"278\",\"imageUrl\":\"/camera/278.jpg\",\"latitude\":-41.203,\"longitude\":174.907,\"name\":\"SH2 Melling\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/278.jpg\",\"underMaintenance\":false},{\"description\":\"Looking south along SH2 toward Belmont\",\"direction\":\"Southbound\",\"group\":\"SH2\",\"highway\":\"SH2\",\"id\":\"722\",\"imageUrl\":\"/camera/722.jpg\",\"latitude\":-41.189939,\"longitude\":174.929934,\"name\":\"SH2 Kennedy Good Bridge\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/722.jpg\",\"underMaintenance\":false},{\"description\":\"Looking north along SH59 toward Paekakariki\",\"direction\":\"Northbound\",\"group\":\"SH59\",\"highway\":\"SH59\",\"id\":\"719\",\"imageUrl\":\"/camera/719.jpg\",\"latitude\":-41.0287516,\"longitude\":174.8993504,\"name\":\"SH59 Pukerua Bay\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/719.jpg\",\"underMaintenance\":false},{\"description\":\"Looking north along SH59 toward Pukerua Bay\",\"direction\":\"Northbound\",\"group\":\"SH59\",\"highway\":\"SH59\",\"id\":\"720\",\"imageUrl\":\"/camera/720.jpg\",\"latitude\":-41.057605,\"longitude\":174.87605,\"name\":\"SH59 Airlie Road\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/720.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH59 at Paekakariki\",\"direction\":\"Southbound\",\"group\":\"SH59\",\"highway\":\"SH59\",\"id\":\"279\",\"imageUrl\":\"/camera/279.jpg\",\"latitude\":-40.999745,\"longitude\":174.939671,\"name\":\"SH59 Paekakariki\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/279.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH59 from Plimmerton Roundabout\",\"direction\":\"Northbound\",\"group\":\"SH59\",\"highway\":\"SH59\",\"id\":\"280\",\"imageUrl\":\"/camera/280.jpg\",\"latitude\":-41.083,\"longitude\":174.869,\"name\":\"SH59 Plimmerton\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":4,\"thumbUrl\":\"/camera/thumb/280.jpg\",\"underMaintenance\":false},{\"description\":\"South along SH59 from Paremata Roundabout\",\"direction\":\"Southbound\",\"group\":\"SH59\",\"highway\":\"SH59\",\"id\":\"637\",\"imageUrl\":\"/camera/637.jpg\",\"latitude\":-41.105628,\"longitude\":174.868586,\"name\":\"SH59 Paremata\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/637.jpg\",\"underMaintenance\":false},{\"description\":\"South along Eastern Hutt Rd\",\"direction\":\"Southbound\",\"group\":\"Wellington Local Roads\",\"id\":\"801\",\"imageUrl\":\"/camera/801.jpg\",\"latitude\":-41.160856,\"longitude\":174.981161,\"name\":\"Stokes Valley Roundabout SB\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/801.jpg\",\"underMaintenance\":false},{\"description\":\"East along Stokes Valley Rd\",\"direction\":\"Eastbound\",\"group\":\"Wellington Local Roads\",\"id\":\"802\",\"imageUrl\":\"/camera/802.jpg\",\"latitude\":-41.160891,\"longitude\":174.981314,\"name\":\"Stokes Valley Roundabout EB\",\"offline\":false,\"region\":{\"id\":\"9\",\"name\":\"Wellington\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/802.jpg\",\"underMaintenance\":false},{\"description\":\"Looking North-Bound from Haast Junction to Haast River Bridge\",\"direction\":\"Northbound\",\"group\":\"SH6\",\"highway\":\"SH6\",\"id\":\"745\",\"imageUrl\":\"/camera/745.jpg\",\"latitude\":-43.859501,\"longitude\":169.044762,\"name\":\"SH6 Haast Bridge\",\"offline\":false,\"region\":{\"id\":\"12\",\"name\":\"West Coast\"},\"sortOrder\":2,\"thumbUrl\":\"/camera/thumb/745.jpg\",\"underMaintenance\":false},{\"description\":\"North towards SH6 from Pleasant Flat Campsitein Haast River Valley\",\"direction\":\"Northbound\",\"group\":\"SH6\",\"highway\":\"SH6\",\"id\":\"738\",\"imageUrl\":\"/camera/738.jpg\",\"latitude\":-44.011678,\"longitude\":169.381761,\"name\":\"SH6 Pleasant Flat\",\"offline\":true,\"region\":{\"id\":\"12\",\"name\":\"West Coast\"},\"sortOrder\":3,\"thumbUrl\":\"/camera/thumb/738.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH6 in Franz Josef township\",\"direction\":\"Northbound\",\"group\":\"SH6\",\"highway\":\"SH6\",\"id\":\"664\",\"imageUrl\":\"/camera/664.jpg\",\"latitude\":-43.388934,\"longitude\":170.181985,\"name\":\"SH6 Franz Josef\",\"offline\":true,\"region\":{\"id\":\"12\",\"name\":\"West Coast\"},\"sortOrder\":0,\"thumbUrl\":\"/camera/thumb/664.jpg\",\"underMaintenance\":false},{\"description\":\"North along SH6 into Fox Glacier township\",\"direction\":\"Northbound\",\"group\":\"SH6\",\"highway\":\"SH6\",\"id\":\"662\",\"imageUrl\":\"/camera/662.jpg\",\"latitude\":-43.466945,\"longitude\":170.017262,\"name\":\"SH6 Fox Glacier\",\"offline\":false,\"region\":{\"id\":\"12\",\"name\":\"West Coast\"},\"sortOrder\":1,\"thumbUrl\":\"/camera/thumb/662.jpg\",\"underMaintenance\":false}]}}"));}}),
"[project]/src/lib/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllCameras": (()=>getAllCameras),
    "getCameraById": (()=>getCameraById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$cameras$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/cameras.json (json)");
;
let cameraCache = null;
function processCameraData(data) {
    if (!data || !data.response || !Array.isArray(data.response.camera)) {
        console.error("Invalid data structure in cameras.json");
        return [];
    }
    return data.response.camera.map((cam)=>{
        const isOffline = cam.offline === 'true' || cam.offline === true;
        const isUnderMaintenance = cam.underMaintenance === 'true' || cam.underMaintenance === true;
        return {
            id: cam.id,
            name: cam.name,
            region: cam.region.name,
            latitude: parseFloat(cam.latitude),
            longitude: parseFloat(cam.longitude),
            direction: cam.direction,
            status: isOffline || isUnderMaintenance ? 'Under Maintenance' : 'Active',
            imageUrl: `https://trafficnz.info${cam.imageUrl}`,
            description: cam.description,
            highway: cam.highway
        };
    });
}
async function getAllCameras() {
    if (cameraCache) {
        return cameraCache;
    }
    try {
        cameraCache = processCameraData(__TURBOPACK__imported__module__$5b$project$5d2f$cameras$2e$json__$28$json$29$__["default"]);
        return cameraCache;
    } catch (error) {
        console.error("Failed to process local camera data, returning empty array:", error);
        return [];
    }
}
async function getCameraById(id) {
    const cameras = await getAllCameras();
    return cameras.find((camera)=>camera.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, this);
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsMobile": (()=>useIsMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sheet": (()=>Sheet),
    "SheetClose": (()=>SheetClose),
    "SheetContent": (()=>SheetContent),
    "SheetDescription": (()=>SheetDescription),
    "SheetFooter": (()=>SheetFooter),
    "SheetHeader": (()=>SheetHeader),
    "SheetOverlay": (()=>SheetOverlay),
    "SheetPortal": (()=>SheetPortal),
    "SheetTitle": (()=>SheetTitle),
    "SheetTrigger": (()=>SheetTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, this));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 70,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this);
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this);
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, this));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar),
    "SidebarContent": (()=>SidebarContent),
    "SidebarHeader": (()=>SidebarHeader),
    "SidebarProvider": (()=>SidebarProvider),
    "SidebarTrigger": (()=>SidebarTrigger),
    "useSidebar": (()=>useSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useSidebar() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
_s(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const SidebarProvider = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s1(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, children, ...props }, ref)=>{
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [_open, _setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    // On mobile, default to closed
    const open = openProp ?? (isMobile ? _open && defaultOpen : _open);
    const setOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[setOpen]": (value)=>{
            if (setOpenProp) {
                setOpenProp(value);
            } else {
                _setOpen(value);
            }
        }
    }["SidebarProvider.useCallback[setOpen]"], [
        setOpenProp
    ]);
    // Close sidebar on mobile when resizing from desktop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarProvider.useEffect": ()=>{
            if (!isMobile) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        }
    }["SidebarProvider.useEffect"], [
        isMobile,
        setOpen
    ]);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SidebarProvider.useMemo[contextValue]": ()=>({
                open,
                setOpen,
                isMobile
            })
    }["SidebarProvider.useMemo[contextValue]"], [
        open,
        setOpen,
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/sidebar-wrapper", className),
            ref: ref,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 87,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 86,
        columnNumber: 7
    }, this);
}, "cBcBOtbSGLnVcLAiKqn2QCR+AqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
})), "cBcBOtbSGLnVcLAiKqn2QCR+AqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = SidebarProvider;
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = _s2(({ side = "left", className, children, ...props }, ref)=>{
    _s2();
    const { isMobile, open, setOpen } = useSidebar();
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            open: open,
            onOpenChange: setOpen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                side: side,
                className: "w-full max-w-md bg-background/80 backdrop-blur-sm p-0 text-foreground border-border/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "sr-only",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: "Camera List"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sidebar.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                children: "A list of available traffic cameras. You can search, filter, and select a camera to view its details on the map."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sidebar.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sidebar.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sidebar.tsx",
                lineNumber: 120,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 119,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group peer z-20 hidden md:flex absolute top-0 h-full transition-transform duration-300 ease-in-out", "w-[400px] flex-col", side === "left" ? "left-0" : "right-0", open ? 'translate-x-0' : side === 'left' ? '-translate-x-[400px]' : 'translate-x-[400px]', className),
        "data-state": open ? 'open' : 'closed',
        "data-side": side,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-sidebar": "sidebar",
            className: "flex h-full w-full flex-col bg-transparent",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/sidebar.tsx",
            lineNumber: 148,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 135,
        columnNumber: 7
    }, this);
}, "XC8xqYvPD+Pdfo9ZLRJGBIOp3Ew=", false, function() {
    return [
        useSidebar
    ];
})), "XC8xqYvPD+Pdfo9ZLRJGBIOp3Ew=", false, function() {
    return [
        useSidebar
    ];
});
_c3 = Sidebar;
Sidebar.displayName = "Sidebar";
const SidebarTrigger = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = _s3(({ className, asChild = false, onClick, ...props }, ref)=>{
    _s3();
    const { open, setOpen } = useSidebar();
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        ref: ref,
        "data-sidebar": "trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        onClick: (event)=>{
            onClick?.(event);
            setOpen(!open);
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}, "Um7yN0bE4gIzEu/pka2rdYB87SM=", false, function() {
    return [
        useSidebar
    ];
})), "Um7yN0bE4gIzEu/pka2rdYB87SM=", false, function() {
    return [
        useSidebar
    ];
});
_c5 = SidebarTrigger;
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-3 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
});
_c7 = SidebarHeader;
SidebarHeader.displayName = "SidebarHeader";
const SidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-0 flex-1 flex-col overflow-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sidebar.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
});
_c9 = SidebarContent;
SidebarContent.displayName = "SidebarContent";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "SidebarProvider$React.forwardRef");
__turbopack_context__.k.register(_c1, "SidebarProvider");
__turbopack_context__.k.register(_c2, "Sidebar$React.forwardRef");
__turbopack_context__.k.register(_c3, "Sidebar");
__turbopack_context__.k.register(_c4, "SidebarTrigger$React.forwardRef");
__turbopack_context__.k.register(_c5, "SidebarTrigger");
__turbopack_context__.k.register(_c6, "SidebarHeader$React.forwardRef");
__turbopack_context__.k.register(_c7, "SidebarHeader");
__turbopack_context__.k.register(_c8, "SidebarContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "SidebarContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tooltip": (()=>Tooltip),
    "TooltipContent": (()=>TooltipContent),
    "TooltipProvider": (()=>TooltipProvider),
    "TooltipTrigger": (()=>TooltipTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$traffic$2d$cone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrafficCone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/traffic-cone.js [app-client] (ecmascript) <export default as TrafficCone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LocateFixed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/locate-fixed.js [app-client] (ecmascript) <export default as LocateFixed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header({ cameraCount, searchTerm, onSearchChange, onMyLocationClick, isTracking }) {
    _s();
    const { open, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4 h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "md:hidden",
                                    children: [
                                        open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 42,
                                            columnNumber: 32
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 42,
                                            columnNumber: 40
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Toggle Sidebar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 43,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 40,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$traffic$2d$cone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrafficCone$3e$__["TrafficCone"], {
                                className: "h-6 w-6 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold tracking-tight hidden sm:block",
                                children: "Kiwi Traffic Watch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 flex-1 justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full max-w-lg"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header.tsx",
                                    lineNumber: 54,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "search",
                                    placeholder: "Search cameras...",
                                    className: "pl-9 h-9 text-base w-full bg-muted rounded-lg border-transparent",
                                    value: searchTerm,
                                    onChange: (e)=>onSearchChange(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header.tsx",
                                    lineNumber: 55,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 53,
                            columnNumber: 18
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-secondary rounded-lg border h-9 px-3 flex items-center gap-2 text-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: cameraCount > 0 ? cameraCount : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 60
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 67,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground hidden sm:inline-block",
                                        children: "Cameras"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: onMyLocationClick,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2d$fixed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LocateFixed$3e$__["LocateFixed"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isTracking && "text-primary")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sr-only",
                                                            children: isTracking ? "Disable live location" : "Enable live location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header.tsx",
                                                lineNumber: 72,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: isTracking ? "Disable live location" : "Enable live location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header.tsx",
                                                lineNumber: 78,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    asChild: true,
                                                    variant: "ghost",
                                                    size: "icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/favorites",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/header.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sr-only",
                                                                children: "Favorite Cameras"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header.tsx",
                                                lineNumber: 83,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Favorite Cameras"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header.tsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 70,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "hidden md:inline-flex",
                                    children: [
                                        open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 98,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 98,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Toggle Camera List"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 99,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/header.tsx",
                                    lineNumber: 97,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 96,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Header, "HDLGBZobjBBur+N9T01RKX+vQgg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/map-styles.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "darkMapStyle": (()=>darkMapStyle)
});
const darkMapStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#242f3e"
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#242f3e"
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#746855"
            }
        ]
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#d59563"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#d59563"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#263c3f"
            }
        ]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#6b9a76"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                color: "#38414e"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#212a37"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#9ca5b3"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#746855"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#1f2835"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#f3d19c"
            }
        ]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
            {
                color: "#2f3948"
            }
        ]
    },
    {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#d59563"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#17263c"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#515c6d"
            }
        ]
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#17263c"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/map-display.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MapDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/milestone.js [app-client] (ecmascript) <export default as Milestone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$map$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/map-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$favorite$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/favorite-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
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
const NZ_CENTER = {
    lat: -41.28664,
    lng: 174.77557
};
const INITIAL_ZOOM = 5;
function Directions({ destination }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const routesLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"])('routes');
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [directionsService, setDirectionsService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [directionsRenderer, setDirectionsRenderer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [routes, setRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Init directions service and renderer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Directions.useEffect": ()=>{
            if (!routesLibrary || !map) return;
            setDirectionsService(new routesLibrary.DirectionsService());
            const renderer = new routesLibrary.DirectionsRenderer({
                map,
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: 'hsl(var(--primary))',
                    strokeOpacity: 0.8,
                    strokeWeight: 6
                }
            });
            setDirectionsRenderer(renderer);
            return ({
                "Directions.useEffect": ()=>{
                    renderer.setMap(null);
                }
            })["Directions.useEffect"];
        }
    }["Directions.useEffect"], [
        routesLibrary,
        map
    ]);
    // Render routes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Directions.useEffect": ()=>{
            if (!directionsRenderer) return;
            directionsRenderer.setDirections({
                routes
            });
        }
    }["Directions.useEffect"], [
        routes,
        directionsRenderer
    ]);
    const calculateRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Directions.useCallback[calculateRoute]": (origin, dest)=>{
            if (directionsService && directionsRenderer) {
                directionsRenderer.setMap(map);
                const request = {
                    origin: origin,
                    destination: dest,
                    travelMode: google.maps.TravelMode.DRIVING
                };
                directionsService.route(request, {
                    "Directions.useCallback[calculateRoute]": (result, status)=>{
                        if (status === google.maps.DirectionsStatus.OK && result) {
                            setRoutes(result.routes);
                        } else {
                            setRoutes([]);
                            toast({
                                variant: 'destructive',
                                title: 'Could not find a route',
                                description: 'Please check your destination and try again.'
                            });
                        }
                    }
                }["Directions.useCallback[calculateRoute]"]);
            }
        }
    }["Directions.useCallback[calculateRoute]"], [
        directionsService,
        directionsRenderer,
        toast,
        map
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Directions.useEffect": ()=>{
            if (!destination) {
                setRoutes([]);
                if (directionsRenderer) {
                    directionsRenderer.setMap(null);
                }
                return;
            }
            ;
            let destLocation;
            if ('geometry' in destination && destination.geometry?.location) {
                destLocation = destination.geometry.location;
            } else if ('latitude' in destination) {
                destLocation = {
                    lat: destination.latitude,
                    lng: destination.longitude
                };
            } else {
                return;
            }
            if (!navigator.geolocation) {
                toast({
                    variant: 'destructive',
                    title: 'Geolocation not supported',
                    description: "Your browser doesn't support geolocation."
                });
                return;
            }
            navigator.geolocation.getCurrentPosition({
                "Directions.useEffect": (position)=>{
                    const newPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    calculateRoute(newPos, destLocation);
                }
            }["Directions.useEffect"], {
                "Directions.useEffect": ()=>{
                    toast({
                        variant: 'destructive',
                        title: 'Geolocation failed',
                        description: 'Could not get your location. Please ensure you have granted permission.'
                    });
                }
            }["Directions.useEffect"]);
            return ({
                "Directions.useEffect": ()=>{
                    if (directionsRenderer) {
                        directionsRenderer.setMap(null);
                    }
                }
            })["Directions.useEffect"];
        }
    }["Directions.useEffect"], [
        destination,
        calculateRoute,
        toast,
        directionsRenderer
    ]);
    return null;
}
_s(Directions, "2hv0AJaEndaDgmM5ISvd8Yx40o8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Directions;
function MapDisplay({ cameras, destination, selectedCamera, onCameraSelect, userLocation, center }) {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const { isMobile, open: sidebarOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const handleMarkerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapDisplay.useCallback[handleMarkerClick]": (camera)=>{
            onCameraSelect(camera);
        }
    }["MapDisplay.useCallback[handleMarkerClick]"], [
        onCameraSelect
    ]);
    const handleCloseInfoWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapDisplay.useCallback[handleCloseInfoWindow]": ()=>{
            onCameraSelect(null);
        }
    }["MapDisplay.useCallback[handleCloseInfoWindow]"], [
        onCameraSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapDisplay.useEffect": ()=>{
            if (center && map) {
                map.panTo(center);
                if (userLocation && center.lat === userLocation.lat && center.lng === userLocation.lng) {
                    map.setZoom(14);
                }
            }
        }
    }["MapDisplay.useEffect"], [
        center,
        map,
        userLocation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapDisplay.useEffect": ()=>{
            if (selectedCamera && map) {
                map.panTo({
                    lat: selectedCamera.latitude,
                    lng: selectedCamera.longitude
                });
            }
        }
    }["MapDisplay.useEffect"], [
        selectedCamera,
        map
    ]);
    const mapPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapDisplay.useMemo[mapPadding]": ()=>{
            const basePadding = {
                top: 80,
                right: 20,
                bottom: 20,
                left: 20
            };
            if (isMobile) return basePadding;
            if (sidebarOpen) return {
                ...basePadding,
                left: 420
            };
            return basePadding;
        }
    }["MapDisplay.useMemo[mapPadding]"], [
        isMobile,
        sidebarOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-muted relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
            defaultCenter: NZ_CENTER,
            defaultZoom: INITIAL_ZOOM,
            gestureHandling: 'greedy',
            disableDefaultUI: true,
            mapId: "kiwi-traffic-map-dark",
            styles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$map$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darkMapStyle"],
            onDragstart: handleCloseInfoWindow,
            padding: mapPadding,
            children: [
                cameras.map((camera)=>{
                    const isSelected = selectedCamera?.id === camera.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                        position: {
                            lat: camera.latitude,
                            lng: camera.longitude
                        },
                        onClick: ()=>handleMarkerClick(camera),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1.5 rounded-full border-2 shadow-lg transition-colors", isSelected ? "bg-primary border-primary-foreground/80" : "bg-background border-border"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isSelected ? "text-primary-foreground" : "text-foreground")
                            }, void 0, false, {
                                fileName: "[project]/src/components/map-display.tsx",
                                lineNumber: 213,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/map-display.tsx",
                            lineNumber: 207,
                            columnNumber: 29
                        }, this)
                    }, camera.id, false, {
                        fileName: "[project]/src/components/map-display.tsx",
                        lineNumber: 202,
                        columnNumber: 25
                    }, this);
                }),
                userLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                    position: userLocation,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 w-6 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            className: "h-3 w-3 text-primary-foreground"
                        }, void 0, false, {
                            fileName: "[project]/src/components/map-display.tsx",
                            lineNumber: 225,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/map-display.tsx",
                        lineNumber: 224,
                        columnNumber: 26
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/map-display.tsx",
                    lineNumber: 223,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Directions, {
                    destination: destination
                }, void 0, false, {
                    fileName: "[project]/src/components/map-display.tsx",
                    lineNumber: 231,
                    columnNumber: 17
                }, this),
                selectedCamera && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoWindow"], {
                    position: {
                        lat: selectedCamera.latitude,
                        lng: selectedCamera.longitude
                    },
                    onCloseClick: handleCloseInfoWindow,
                    minWidth: 320,
                    headerDisabled: true,
                    pixelOffset: [
                        0,
                        -50
                    ],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-1 bg-background text-foreground rounded-lg font-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-video relative mb-2 rounded-md overflow-hidden bg-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        className: "absolute inset-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/map-display.tsx",
                                        lineNumber: 243,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedCamera.imageUrl,
                                        alt: `Live feed from ${selectedCamera.name}`,
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "320px",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/map-display.tsx",
                                        lineNumber: 244,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1 right-1 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$favorite$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            id: selectedCamera.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/map-display.tsx",
                                            lineNumber: 253,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/map-display.tsx",
                                        lineNumber: 252,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/map-display.tsx",
                                lineNumber: 242,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-base mb-1 px-1 truncate",
                                children: selectedCamera.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/map-display.tsx",
                                lineNumber: 256,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-sm text-muted-foreground mb-3 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/map-display.tsx",
                                                lineNumber: 259,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: selectedCamera.direction
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/map-display.tsx",
                                                lineNumber: 260,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/map-display.tsx",
                                        lineNumber: 258,
                                        columnNumber: 33
                                    }, this),
                                    selectedCamera.highway && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$milestone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Milestone$3e$__["Milestone"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/map-display.tsx",
                                                lineNumber: 264,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: selectedCamera.highway
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/map-display.tsx",
                                                lineNumber: 265,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/map-display.tsx",
                                        lineNumber: 263,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/map-display.tsx",
                                lineNumber: 257,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "sm",
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/cameras/${selectedCamera.id}`,
                                    children: [
                                        "View Full Details",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "ml-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/map-display.tsx",
                                            lineNumber: 272,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/map-display.tsx",
                                    lineNumber: 270,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/map-display.tsx",
                                lineNumber: 269,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/map-display.tsx",
                        lineNumber: 241,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/map-display.tsx",
                    lineNumber: 234,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/map-display.tsx",
            lineNumber: 189,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/map-display.tsx",
        lineNumber: 188,
        columnNumber: 9
    }, this);
}
_s1(MapDisplay, "CZNbz7BNR/SJba/GEhty3L/GUqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c1 = MapDisplay;
var _c, _c1;
__turbopack_context__.k.register(_c, "Directions");
__turbopack_context__.k.register(_c1, "MapDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 64,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, this));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$camera$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/camera-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map-display.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [cameras, setCameras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [selectedCamera, setSelectedCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userLocation, setUserLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [center, setCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTracking, setIsTracking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const watchIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchCameras = {
                "Home.useEffect.fetchCameras": async ()=>{
                    setLoading(true);
                    const cams = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCameras"])();
                    setCameras(cams);
                    setLoading(false);
                }
            }["Home.useEffect.fetchCameras"];
            fetchCameras();
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!isTracking) {
                if (watchIdRef.current) {
                    navigator.geolocation.clearWatch(watchIdRef.current);
                    watchIdRef.current = null;
                }
                return;
            }
            if (!navigator.geolocation) {
                toast({
                    variant: 'destructive',
                    title: 'Geolocation not supported',
                    description: "Your browser doesn't support geolocation."
                });
                setIsTracking(false);
                return;
            }
            watchIdRef.current = navigator.geolocation.watchPosition({
                "Home.useEffect": (position)=>{
                    const newPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setUserLocation(newPos);
                    setCenter(newPos);
                    if (!isTracking) {
                        toast({
                            title: "Live location enabled",
                            description: "Your position will be updated automatically."
                        });
                    }
                }
            }["Home.useEffect"], {
                "Home.useEffect": ()=>{
                    toast({
                        variant: 'destructive',
                        title: 'Geolocation failed',
                        description: 'Could not get your location. Please ensure you have granted permission.'
                    });
                    setIsTracking(false);
                }
            }["Home.useEffect"], {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });
            return ({
                "Home.useEffect": ()=>{
                    if (watchIdRef.current) {
                        navigator.geolocation.clearWatch(watchIdRef.current);
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        isTracking,
        toast
    ]);
    const regions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[regions]": ()=>{
            if (!cameras.length) return [];
            const uniqueRegions = [
                ...new Set(cameras.map({
                    "Home.useMemo[regions]": (c)=>c.region
                }["Home.useMemo[regions]"]).filter(Boolean))
            ];
            return [
                'All',
                ...uniqueRegions.sort()
            ];
        }
    }["Home.useMemo[regions]"], [
        cameras
    ]);
    const filteredCameras = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[filteredCameras]": ()=>{
            if (!cameras.length) return [];
            let cams = cameras;
            if (selectedRegion !== 'All') {
                cams = cams.filter({
                    "Home.useMemo[filteredCameras]": (c)=>c.region === selectedRegion
                }["Home.useMemo[filteredCameras]"]);
            }
            if (searchTerm) {
                const lowerCaseSearch = searchTerm.toLowerCase();
                cams = cams.filter({
                    "Home.useMemo[filteredCameras]": (camera)=>camera.name.toLowerCase().includes(lowerCaseSearch) || camera.region.toLowerCase().includes(lowerCaseSearch) || camera.highway?.toLowerCase().includes(lowerCaseSearch) || camera.description?.toLowerCase().includes(lowerCaseSearch)
                }["Home.useMemo[filteredCameras]"]);
            }
            return cams;
        }
    }["Home.useMemo[filteredCameras]"], [
        cameras,
        searchTerm,
        selectedRegion
    ]);
    const handleCameraSelect = (camera)=>{
        setSelectedCamera(camera);
        if (camera) {
            setCenter({
                lat: camera.latitude,
                lng: camera.longitude
            });
        }
    };
    const handleMyLocationClick = ()=>{
        setIsTracking((prev)=>{
            const newIsTracking = !prev;
            if (!newIsTracking && watchIdRef.current) {
                navigator.geolocation.clearWatch(watchIdRef.current);
                watchIdRef.current = null;
                toast({
                    title: "Live location disabled"
                });
            }
            return newIsTracking;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex flex-col bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                    cameraCount: filteredCameras.length,
                    searchTerm: searchTerm,
                    onSearchChange: setSearchTerm,
                    onMyLocationClick: handleMyLocationClick,
                    isTracking: isTracking
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold tracking-tight",
                                            children: "Cameras"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 158,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid w-full items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "region-filter",
                                                    children: "Region"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: selectedRegion,
                                                    onValueChange: setSelectedRegion,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            id: "region-filter",
                                                            className: "w-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Select a region"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            children: regions.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: r,
                                                                    children: r
                                                                }, r, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 45
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$camera$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        cameras: filteredCameras,
                                        isLoading: loading,
                                        onCameraSelect: handleCameraSelect,
                                        selectedCameraId: selectedCamera?.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 28
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 156,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            cameras: filteredCameras,
                            destination: null,
                            onCameraSelect: handleCameraSelect,
                            selectedCamera: selectedCamera,
                            userLocation: userLocation,
                            center: center
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 182,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 147,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, this);
}
_s(Home, "s/QtZSgDfN9ZLVYqRTL1Vunrvgo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c3acfc7e._.js.map