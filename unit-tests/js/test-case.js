exports.TestCase
    = class {
        constructor(fnName, fn, isTestPassedCallback) {
            this.fnName = fnName;
            this.fn = fn;
            this.isTestPassedCallback = isTestPassedCallback;
        }
    };