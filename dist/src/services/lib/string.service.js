"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringServices {
    constructor(str) {
        this.str = str;
    }
    apply() {
        return this.str;
    }
    uppercaseFirst() {
        this.str = `${this.str.charAt(0).toUpperCase()}${this.str.slice(1)}`;
        return this;
    }
    lowercaseFirst() {
        this.str = `${this.str.charAt(0).toLowerCase()}${this.str.slice(1)}`;
        return this;
    }
    firstSplit(split = "") {
        this.str = this.str.split(split).shift();
        return this;
    }
    lastSplit(split = "") {
        this.str = this.str.split(split).pop();
        return this;
    }
    formKebabToPascal() {
        this.str = new StringServices(this.str)
            .uppercaseFirst()
            .apply()
            .replace(/-(\w)/g, (match, group) => group.toUpperCase());
        return this;
    }
}
exports.default = StringServices;
//# sourceMappingURL=string.service.js.map