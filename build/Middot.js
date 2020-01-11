"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function Middot(props) {
    var propsChildren = react_1.default.Children.toArray(props.children);
    var length = propsChildren.length;
    var children = [];
    for (var i = 0; i < length; i++) {
        var child = propsChildren[i];
        children.push(child);
        if (i < length - 1) {
            children.push(react_1.default.createElement("span", { key: i }, " \u00B7 "));
        }
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
}
exports.Middot = Middot;
;
//# sourceMappingURL=Middot.js.map