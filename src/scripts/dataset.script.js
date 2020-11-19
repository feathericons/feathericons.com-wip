"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Feather = __importStar(require("react-feather"));
var tags_1 = __importDefault(require("./tags"));
var lodash_1 = require("lodash");
// Expands and dedupes one-off tags.
//
// Ex:
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function expandTags(tag) {
    var tags = tag.split("-");
    if (tags.length === 1) {
        return tags;
    }
    var set = new (Set.bind.apply(Set, __spread([void 0], __spread([tag, tags.join("")], tags))))();
    return __spread(set);
}
// Expands and dedupes sets of tags.
function getExpandedTags(name) {
    var set = tags_1.default[name].reduce(function (acc, each) {
        var expandedTags = expandTags(each);
        expandedTags.forEach(function (each) {
            acc.add(each);
        });
        return acc;
    }, new Set());
    return __spread(set);
}
var datasetMap = Object.keys(Feather).reduce(function (acc, each) {
    acc[each] = {
        name: {
            title: each,
            kebab: lodash_1.kebabCase(each),
        },
        tags: getExpandedTags(each),
        common: [],
    };
    return acc;
}, {});
console.log(datasetMap);
