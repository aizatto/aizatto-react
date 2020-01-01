"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function And(props) {
    var children = props.children.filter(function (a) { return a; });
    var length = children.length;
    var newChildren = [];
    for (var i = 0; i < length; i++) {
        newChildren.push(children[i]);
        if (i < length - 2) {
            newChildren.push(', ');
        }
        else if (i === length - 2) {
            newChildren.push(', and ');
        }
    }
    return react_1.default.createElement(react_1.default.Fragment, null, newChildren);
}
exports.And = And;
//# sourceMappingURL=And.js.map