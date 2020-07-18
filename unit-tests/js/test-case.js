exports.TestCase
	= class {
		constructor(fnName, fn, fnInput, isTestPassedCallback) {
			this.fnName = fnName;
			this.fn = fn;
			this.fnInput = fnInput;
			this.isTestPassedCallback = isTestPassedCallback;
		}
	};