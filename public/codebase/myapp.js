/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/myapp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webix-jet/dist/es6/jet.js":
/*!************************************************!*\
  !*** ./node_modules/webix-jet/dist/es6/jet.js ***!
  \************************************************/
/*! exports provided: plugins, JetApp, JetView, HashRouter, StoreRouter, UrlRouter, EmptyRouter, SubRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetApp", function() { return JetApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetView", function() { return JetView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRouter", function() { return StoreRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return UrlRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyRouter", function() { return EmptyRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubRouter", function() { return SubRouter; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JetBase = function () {
    function JetBase(webix) {
        _classCallCheck(this, JetBase);

        this.webixJet = true;
        this.webix = webix;
        this._events = [];
        this._subs = {};
        this._data = {};
    }

    JetBase.prototype.getRoot = function getRoot() {
        return this._root;
    };

    JetBase.prototype.destructor = function destructor() {
        this._detachEvents();
        this._destroySubs();
        this._events = this._container = this.app = this._parent = this._root = null;
    };

    JetBase.prototype.setParam = function setParam(id, value, url) {
        if (this._data[id] !== value) {
            this._data[id] = value;
            this._segment.update(id, value, 0);
            if (url) {
                this.show(null);
            }
        }
    };

    JetBase.prototype.getParam = function getParam(id, parent) {
        var value = this._data[id];
        if (typeof value !== "undefined" || !parent) {
            return value;
        }
        var view = this.getParentView();
        if (view) {
            return view.getParam(id, parent);
        }
    };

    JetBase.prototype.getUrl = function getUrl() {
        return this._segment.suburl();
    };

    JetBase.prototype.getUrlString = function getUrlString() {
        return this._segment.toString();
    };

    JetBase.prototype.getParentView = function getParentView() {
        return this._parent;
    };

    JetBase.prototype.$$ = function $$(id) {
        if (typeof id === "string") {
            var root = this.getRoot();
            return root.queryView(function (obj) {
                return (obj.config.id === id || obj.config.localId === id) && obj.$scope === root.$scope;
            }, "self");
        } else {
            return id;
        }
    };

    JetBase.prototype.on = function on(obj, name, code) {
        var id = obj.attachEvent(name, code);
        this._events.push({ obj: obj, id: id });
        return id;
    };

    JetBase.prototype.contains = function contains(view) {
        for (var key in this._subs) {
            var kid = this._subs[key].view;
            if (kid === view || kid.contains(view)) {
                return true;
            }
        }
        return false;
    };

    JetBase.prototype.getSubView = function getSubView(name) {
        var sub = this.getSubViewInfo(name);
        if (sub) {
            return sub.subview.view;
        }
    };

    JetBase.prototype.getSubViewInfo = function getSubViewInfo(name) {
        var sub = this._subs[name || "default"];
        if (sub) {
            return { subview: sub, parent: this };
        }
        if (name === "_top") {
            this._subs[name] = { url: "", id: null, popup: true };
            return this.getSubViewInfo(name);
        }
        // when called from a child view, searches for nearest parent with subview
        if (this._parent) {
            return this._parent.getSubViewInfo(name);
        }
        return null;
    };

    JetBase.prototype._detachEvents = function _detachEvents() {
        var events = this._events;
        for (var i = events.length - 1; i >= 0; i--) {
            events[i].obj.detachEvent(events[i].id);
        }
    };

    JetBase.prototype._destroySubs = function _destroySubs() {
        // destroy sub views
        for (var key in this._subs) {
            var subView = this._subs[key].view;
            // it possible that subview was not loaded with any content yet
            // so check on null
            if (subView) {
                subView.destructor();
            }
        }
        // reset to prevent memory leaks
        this._subs = {};
    };

    JetBase.prototype._init_url_data = function _init_url_data() {
        var url = this._segment.current();
        this._data = {};
        this.webix.extend(this._data, url.params, true);
    };

    JetBase.prototype._getDefaultSub = function _getDefaultSub() {
        if (this._subs.default) {
            return this._subs.default;
        }
        for (var key in this._subs) {
            var sub = this._subs[key];
            if (!sub.branch && sub.view && key !== "_top") {
                var child = sub.view._getDefaultSub();
                if (child) {
                    return child;
                }
            }
        }
    };

    JetBase.prototype._routed_view = function _routed_view() {
        var parent = this.getParentView();
        if (!parent) {
            return true;
        }
        var sub = parent._getDefaultSub();
        if (!sub && sub !== this) {
            return false;
        }
        return parent._routed_view();
    };

    return JetBase;
}();

function parse(url) {
    // remove starting /
    if (url[0] === "/") {
        url = url.substr(1);
    }
    // split url by "/"
    var parts = url.split("/");
    var chunks = [];
    // for each page in url
    for (var i = 0; i < parts.length; i++) {
        var test = parts[i];
        var result = {};
        // detect params
        // support old 			some:a=b:c=d
        // and new notation		some?a=b&c=d
        var pos = test.indexOf(":");
        if (pos === -1) {
            pos = test.indexOf("?");
        }
        if (pos !== -1) {
            var params = test.substr(pos + 1).split(/[\:\?\&]/g);
            // create hash of named params
            for (var _iterator = params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var param = _ref;

                var dchunk = param.split("=");
                result[dchunk[0]] = decodeURIComponent(dchunk[1]);
            }
        }
        // store parsed values
        chunks[i] = {
            page: pos > -1 ? test.substr(0, pos) : test,
            params: result,
            isNew: true
        };
    }
    // return array of page objects
    return chunks;
}
function url2str(stack) {
    var url = [];
    for (var _iterator2 = stack, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var chunk = _ref2;

        url.push("/" + chunk.page);
        var params = obj2str(chunk.params);
        if (params) {
            url.push("?" + params);
        }
    }
    return url.join("");
}
function obj2str(obj) {
    var str = [];
    for (var key in obj) {
        if (str.length) {
            str.push("&");
        }
        str.push(key + "=" + encodeURIComponent(obj[key]));
    }
    return str.join("");
}

var Route = function () {
    function Route(route, index) {
        _classCallCheck(this, Route);

        this._next = 1;
        if (typeof route === "string") {
            this.route = {
                url: parse(route),
                path: route
            };
        } else {
            this.route = route;
        }
        this.index = index;
    }

    Route.prototype.current = function current() {
        return this.route.url[this.index];
    };

    Route.prototype.next = function next() {
        return this.route.url[this.index + this._next];
    };

    Route.prototype.suburl = function suburl() {
        return this.route.url.slice(this.index);
    };

    Route.prototype.shift = function shift() {
        return new Route(this.route, this.index + this._next);
    };

    Route.prototype.refresh = function refresh() {
        var url = this.route.url;
        for (var i = this.index + 1; i < url.length; i++) {
            url[i].isNew = true;
        }
    };

    Route.prototype.toString = function toString() {
        var str = url2str(this.suburl());
        return str ? str.substr(1) : "";
    };

    Route.prototype._join = function _join(path, kids) {
        var url = this.route.url;
        if (path === null) {
            // change of parameters, route elements are not affected
            return url;
        }
        var old = this.route.url;
        url = old.slice(0, this.index + (kids ? this._next : 0));
        if (path) {
            url = url.concat(parse(path));
            for (var i = 0; i < url.length; i++) {
                if (old[i]) {
                    url[i].view = old[i].view;
                }
                if (old[i] && url[i].page === old[i].page) {
                    url[i].isNew = false;
                }
            }
        }
        return url;
    };

    Route.prototype.append = function append(path) {
        var url = this._join(path, true);
        this.route.path = url2str(url);
        this.route.url = url;
        return this.route.path;
    };

    Route.prototype.show = function show(path, view, kids) {
        var _this = this;

        var url = this._join(path, kids);
        return new Promise(function (res, rej) {
            var redirect = url2str(url);
            var obj = {
                url: url,
                redirect: redirect,
                confirm: Promise.resolve()
            };
            var app = view ? view.app : null;
            // when creating a new route, it possible that it will not have any content
            // guard is not necessary in such case
            if (app) {
                var result = app.callEvent("app:guard", [obj.redirect, view, obj]);
                if (!result) {
                    rej();
                    return;
                }
            }
            obj.confirm.catch(function () {
                return obj.redirect = null;
            }).then(function () {
                if (obj.redirect === null) {
                    rej();
                    return;
                }
                if (obj.redirect !== redirect) {
                    app.show(obj.redirect);
                    rej();
                    return;
                }
                _this.route.path = redirect;
                _this.route.url = url;
                res();
            });
        });
    };

    Route.prototype.size = function size(n) {
        this._next = n;
    };

    Route.prototype.split = function split() {
        var route = {
            url: this.route.url.slice(this.index + 1),
            path: ""
        };
        if (route.url.length) {
            route.path = url2str(route.url);
        }
        return new Route(route, 0);
    };

    Route.prototype.update = function update(name, value, index) {
        var chunk = this.route.url[this.index + (index || 0)];
        if (!chunk) {
            this.route.url.push({ page: "", params: {} });
            return this.update(name, value, index);
        }
        if (name === "") {
            chunk.page = value;
        } else {
            chunk.params[name] = value;
        }
        this.route.path = url2str(this.route.url);
    };

    return Route;
}();

var JetView = function (_JetBase) {
    _inherits(JetView, _JetBase);

    function JetView(app, config) {
        _classCallCheck(this, JetView);

        var _this2 = _possibleConstructorReturn(this, _JetBase.call(this, app.webix));

        _this2.app = app;
        //this.$config = config;
        _this2._children = [];
        return _this2;
    }

    JetView.prototype.ui = function ui(_ui, config) {
        config = config || {};
        var container = config.container || _ui.container;
        var jetview = this.app.createView(_ui);
        this._children.push(jetview);
        jetview.render(container, this._segment, this);
        if ((typeof _ui === "undefined" ? "undefined" : _typeof(_ui)) !== "object" || _ui instanceof JetBase) {
            // raw webix UI
            return jetview;
        } else {
            return jetview.getRoot();
        }
    };

    JetView.prototype.show = function show(path, config) {
        config = config || {};
        // convert parameters object to url
        if ((typeof path === "undefined" ? "undefined" : _typeof(path)) === "object") {
            for (var key in path) {
                this.setParam(key, path[key]);
            }
            path = null;
        } else {
            // deligate to app in case of root prefix
            if (path.substr(0, 1) === "/") {
                return this.app.show(path);
            }
            // local path, do nothing
            if (path.indexOf("./") === 0) {
                path = path.substr(2);
            }
            // parent path, call parent view
            if (path.indexOf("../") === 0) {
                var parent = this.getParentView();
                if (parent) {
                    return parent.show(path.substr(3), config);
                } else {
                    return this.app.show("/" + path.substr(3));
                }
            }
            var sub = this.getSubViewInfo(config.target);
            if (sub) {
                if (sub.parent !== this) {
                    return sub.parent.show(path, config);
                } else if (config.target && config.target !== "default") {
                    return this._renderFrameLock(config.target, sub.subview, path);
                }
            } else {
                if (path) {
                    return this.app.show("/" + path);
                }
            }
        }
        return this._show(this._segment, path, this);
    };

    JetView.prototype._show = function _show(segment, path, view) {
        var _this3 = this;

        return segment.show(path, view, true).then(function () {
            _this3._init_url_data();
            return _this3._urlChange();
        }).then(function () {
            if (segment.route.linkRouter) {
                _this3.app.getRouter().set(segment.route.path, { silent: true });
                _this3.app.callEvent("app:route", [segment.route.path]);
            }
        });
    };

    JetView.prototype.init = function init(_$view, _$) {
        // stub
    };

    JetView.prototype.ready = function ready(_$view, _$url) {
        // stub
    };

    JetView.prototype.config = function config() {
        this.app.webix.message("View:Config is not implemented");
    };

    JetView.prototype.urlChange = function urlChange(_$view, _$url) {
        // stub
    };

    JetView.prototype.destroy = function destroy() {
        // stub
    };

    JetView.prototype.destructor = function destructor() {
        this.destroy();
        this._destroyKids();
        // destroy actual UI
        this._root.destructor();
        _JetBase.prototype.destructor.call(this);
    };

    JetView.prototype.use = function use(plugin, config) {
        plugin(this.app, this, config);
    };

    JetView.prototype.refresh = function refresh() {
        var url = this.getUrl();
        this.destroy();
        this._destroyKids();
        this._destroySubs();
        this._detachEvents();
        if (this._container.tagName) {
            this._root.destructor();
        }
        this._segment.refresh();
        return this._render(this._segment);
    };

    JetView.prototype.render = function render(root, url, parent) {
        var _this4 = this;

        if (typeof url === "string") {
            url = new Route(url, 0);
        }
        this._segment = url;
        this._parent = parent;
        this._init_url_data();
        root = root || document.body;
        var _container = typeof root === "string" ? this.webix.toNode(root) : root;
        if (this._container !== _container) {
            this._container = _container;
            return this._render(url);
        } else {
            return this._urlChange().then(function () {
                return _this4.getRoot();
            });
        }
    };

    JetView.prototype._render = function _render(url) {
        var _this5 = this;

        var config = this.config();
        if (config.then) {
            return config.then(function (cfg) {
                return _this5._render_final(cfg, url);
            });
        } else {
            return this._render_final(config, url);
        }
    };

    JetView.prototype._render_final = function _render_final(config, url) {
        var _this6 = this;

        // get previous view in the same slot
        var slot = null;
        var container = null;
        var show = false;
        if (!this._container.tagName) {
            slot = this._container;
            if (slot.popup) {
                container = document.body;
                show = true;
            } else {
                container = this.webix.$$(slot.id);
            }
        } else {
            container = this._container;
        }
        // view already destroyed
        if (!this.app || !container) {
            return Promise.reject(null);
        }
        var response = void 0;
        var current = this._segment.current();
        // using wrapper object, so ui can be changed from app:render event
        var result = { ui: {} };
        this.app.copyConfig(config, result.ui, this._subs);
        this.app.callEvent("app:render", [this, url, result]);
        result.ui.$scope = this;
        /* destroy old HTML attached views before creating new one */
        if (!slot && current.isNew && current.view) {
            current.view.destructor();
        }
        try {
            // special handling for adding inside of multiview - preserve old id
            if (slot && !show) {
                var oldui = container;
                var parent = oldui.getParentView();
                if (parent && parent.name === "multiview" && !result.ui.id) {
                    result.ui.id = oldui.config.id;
                }
            }
            this._root = this.app.webix.ui(result.ui, container);
            var asWin = this._root;
            // check for url added to ignore this.ui calls
            if (show && asWin.setPosition && !asWin.isVisible()) {
                asWin.show();
            }
            // check, if we are replacing some older view
            if (slot) {
                if (slot.view && slot.view !== this && slot.view !== this.app) {
                    slot.view.destructor();
                }
                slot.id = this._root.config.id;
                if (this.getParentView() || !this.app.app) slot.view = this;else {
                    // when we have subapp, set whole app as a view
                    // so on destruction, the whole app will be destroyed
                    slot.view = this.app;
                }
            }
            if (current.isNew) {
                current.view = this;
                current.isNew = false;
            }
            response = Promise.resolve(this._init(this._root, url)).then(function () {
                return _this6._urlChange().then(function () {
                    _this6._initUrl = null;
                    return _this6.ready(_this6._root, url.suburl());
                });
            });
        } catch (e) {
            response = Promise.reject(e);
        }
        return response.catch(function (err) {
            return _this6._initError(_this6, err);
        });
    };

    JetView.prototype._init = function _init(view, url) {
        return this.init(view, url.suburl());
    };

    JetView.prototype._urlChange = function _urlChange() {
        var _this7 = this;

        this.app.callEvent("app:urlchange", [this, this._segment]);
        var waits = [];
        for (var key in this._subs) {
            var frame = this._subs[key];
            var wait = this._renderFrameLock(key, frame, null);
            if (wait) {
                waits.push(wait);
            }
        }
        return Promise.all(waits).then(function () {
            return _this7.urlChange(_this7._root, _this7._segment.suburl());
        });
    };

    JetView.prototype._renderFrameLock = function _renderFrameLock(key, frame, path) {
        // if subview is not occupied by some rendering yet
        if (!frame.lock) {
            // retreive and store rendering end promise
            var lock = this._renderFrame(key, frame, path);
            if (lock) {
                // clear lock after frame rendering
                // as promise.finally is not supported by  Webix lesser than 6.2
                // using a more verbose notation
                frame.lock = lock.then(function () {
                    return frame.lock = null;
                }, function () {
                    return frame.lock = null;
                });
            }
        }
        // return rendering end promise
        return frame.lock;
    };

    JetView.prototype._renderFrame = function _renderFrame(key, frame, path) {
        var _this8 = this;

        //default route
        if (key === "default") {
            if (this._segment.next()) {
                // we have a next segment in url, render it
                return this._createSubView(frame, this._segment.shift());
            } else if (frame.view && frame.popup) {
                // there is no next segment, delete the existing sub-view
                frame.view.destructor();
                frame.view = null;
            }
        }
        //if new path provided, set it to the frame
        if (path !== null) {
            frame.url = path;
        }
        // in case of routed sub-view
        if (frame.route) {
            // we have a new path for sub-view
            if (path !== null) {
                return frame.route.show(path, frame.view).then(function () {
                    return _this8._createSubView(frame, frame.route);
                });
            }
            // do not trigger onChange for isolated sub-views
            if (frame.branch) {
                return;
            }
        }
        var view = frame.view;
        // if view doesn't exists yet, init it
        if (!view && frame.url) {
            if (typeof frame.url === "string") {
                // string, so we have isolated subview url
                frame.route = new Route(frame.url, 0);
                return this._createSubView(frame, frame.route);
            } else {
                // object, so we have an embeded subview
                if (typeof frame.url === "function" && !(view instanceof frame.url)) {
                    view = new frame.url(this.app, "");
                }
                if (!view) {
                    view = frame.url;
                }
            }
        }
        // trigger onChange for already existed view
        if (view) {
            return view.render(frame, frame.route || this._segment, this);
        }
    };

    JetView.prototype._initError = function _initError(view, err) {
        /*
            if view is destroyed, ignore any view related errors
        */
        if (this.app) {
            this.app.error("app:error:initview", [err, view]);
        }
        return true;
    };

    JetView.prototype._createSubView = function _createSubView(sub, suburl) {
        var _this9 = this;

        return this.app.createFromURL(suburl.current(), sub.view).then(function (view) {
            return view.render(sub, suburl, _this9);
        });
    };

    JetView.prototype._destroyKids = function _destroyKids() {
        // destroy child views
        var uis = this._children;
        for (var i = uis.length - 1; i >= 0; i--) {
            if (uis[i] && uis[i].destructor) {
                uis[i].destructor();
            }
        }
        // reset vars for better GC processing
        this._children = [];
    };

    return JetView;
}(JetBase);

// wrapper for raw objects and Jet 1.x structs


var JetViewRaw = function (_JetView) {
    _inherits(JetViewRaw, _JetView);

    function JetViewRaw(app, config) {
        _classCallCheck(this, JetViewRaw);

        var _this10 = _possibleConstructorReturn(this, _JetView.call(this, app, config));

        _this10._ui = config.ui;
        return _this10;
    }

    JetViewRaw.prototype.config = function config() {
        return this._ui;
    };

    return JetViewRaw;
}(JetView);

var SubRouter = function () {
    function SubRouter(cb, config, app) {
        _classCallCheck(this, SubRouter);

        this.path = "";
        this.app = app;
    }

    SubRouter.prototype.set = function set(path, config) {
        this.path = path;
        var a = this.app;
        a.app.getRouter().set(a._segment.append(this.path), { silent: true });
    };

    SubRouter.prototype.get = function get() {
        return this.path;
    };

    return SubRouter;
}();

var _once = true;

var JetAppBase = function (_JetBase2) {
    _inherits(JetAppBase, _JetBase2);

    function JetAppBase(config) {
        _classCallCheck(this, JetAppBase);

        var webix = (config || {}).webix || window.webix;

        // init config
        var _this11 = _possibleConstructorReturn(this, _JetBase2.call(this, webix));

        _this11.config = _this11.webix.extend({
            name: "App",
            version: "1.0",
            start: "/home"
        }, config, true);
        _this11.app = _this11.config.app;
        _this11.ready = Promise.resolve();
        _this11._services = {};
        _this11.webix.extend(_this11, _this11.webix.EventSystem);
        return _this11;
    }

    JetAppBase.prototype.getUrl = function getUrl() {
        return this._subSegment.suburl();
    };

    JetAppBase.prototype.getUrlString = function getUrlString() {
        return this._subSegment.toString();
    };

    JetAppBase.prototype.getService = function getService(name) {
        var obj = this._services[name];
        if (typeof obj === "function") {
            obj = this._services[name] = obj(this);
        }
        return obj;
    };

    JetAppBase.prototype.setService = function setService(name, handler) {
        this._services[name] = handler;
    };

    JetAppBase.prototype.destructor = function destructor() {
        this.getSubView().destructor();
        _JetBase2.prototype.destructor.call(this);
    };
    // copy object and collect extra handlers


    JetAppBase.prototype.copyConfig = function copyConfig(obj, target, config) {
        // raw ui config
        if (obj instanceof JetBase || typeof obj === "function" && obj.prototype instanceof JetBase) {
            obj = { $subview: obj };
        }
        // subview placeholder
        if (typeof obj.$subview != "undefined") {
            return this.addSubView(obj, target, config);
        }
        // process sub-properties
        target = target || (obj instanceof Array ? [] : {});
        for (var method in obj) {
            var point = obj[method];
            // view class
            if (typeof point === "function" && point.prototype instanceof JetBase) {
                point = { $subview: point };
            }
            if (point && (typeof point === "undefined" ? "undefined" : _typeof(point)) === "object" && !(point instanceof this.webix.DataCollection) && !(point instanceof RegExp)) {
                if (point instanceof Date) {
                    target[method] = new Date(point);
                } else {
                    var copy = this.copyConfig(point, point instanceof Array ? [] : {}, config);
                    if (copy !== null) {
                        target[method] = copy;
                    }
                }
            } else {
                target[method] = point;
            }
        }
        return target;
    };

    JetAppBase.prototype.getRouter = function getRouter() {
        return this.$router;
    };

    JetAppBase.prototype.clickHandler = function clickHandler(e) {
        if (e) {
            var target = e.target || e.srcElement;
            if (target && target.getAttribute) {
                var trigger = target.getAttribute("trigger");
                if (trigger) {
                    this._forView(target, function (view) {
                        return view.app.trigger(trigger);
                    });
                }
                var route = target.getAttribute("route");
                if (route) {
                    this._forView(target, function (view) {
                        return view.show(route);
                    });
                }
            }
        }
    };

    JetAppBase.prototype.getRoot = function getRoot() {
        return this.getSubView().getRoot();
    };

    JetAppBase.prototype.refresh = function refresh() {
        var _this12 = this;

        if (!this._subSegment) {
            return Promise.resolve(null);
        }
        return this.getSubView().refresh().then(function (view) {
            _this12.callEvent("app:route", [_this12.getUrl()]);
            return view;
        });
    };

    JetAppBase.prototype.loadView = function loadView(url) {
        var _this13 = this;

        var views = this.config.views;
        var result = null;
        if (url === "") {
            return Promise.resolve(this._loadError("", new Error("Webix Jet: Empty url segment")));
        }
        try {
            if (views) {
                if (typeof views === "function") {
                    // custom loading strategy
                    result = views(url);
                } else {
                    // predefined hash
                    result = views[url];
                }
                if (typeof result === "string") {
                    url = result;
                    result = null;
                }
            }
            if (!result) {
                if (url === "_blank") {
                    result = {};
                } else {
                    result = this._loadViewDynamic(url);
                }
            }
        } catch (e) {
            result = this._loadError(url, e);
        }
        // custom handler can return view or its promise
        if (!result.then) {
            result = Promise.resolve(result);
        }
        // set error handler
        result = result.then(function (module) {
            return module.__esModule ? module.default : module;
        }).catch(function (err) {
            return _this13._loadError(url, err);
        });
        return result;
    };

    JetAppBase.prototype._forView = function _forView(target, handler) {
        var view = this.webix.$$(target);
        if (view) {
            handler(view.$scope);
        }
    };

    JetAppBase.prototype._loadViewDynamic = function _loadViewDynamic(url) {
        return null;
    };

    JetAppBase.prototype.createFromURL = function createFromURL(chunk, now) {
        var _this14 = this;

        var view = void 0;
        if (chunk.isNew || !chunk.view) {
            view = this.loadView(chunk.page).then(function (ui) {
                return _this14.createView(ui, name);
            });
        } else {
            view = Promise.resolve(chunk.view);
        }
        return view;
    };

    JetAppBase.prototype.createView = function createView(ui, name) {
        var obj = void 0;
        if (typeof ui === "function") {
            if (ui.prototype instanceof JetAppBase) {
                // UI class
                return new ui({ app: this, name: name, router: SubRouter });
            } else if (ui.prototype instanceof JetBase) {
                // UI class
                return new ui(this, { name: name });
            } else {
                // UI factory functions
                ui = ui(this);
            }
        }
        if (ui instanceof JetBase) {
            obj = ui;
        } else {
            // UI object
            obj = new JetViewRaw(this, { name: name, ui: ui });
        }
        return obj;
    };
    // show view path


    JetAppBase.prototype.show = function show(url) {
        return this.render(this._container, url || this.config.start);
    };
    // event helpers


    JetAppBase.prototype.trigger = function trigger(name) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        this.apply(name, rest);
    };

    JetAppBase.prototype.apply = function apply(name, data) {
        this.callEvent(name, data);
    };

    JetAppBase.prototype.action = function action(name) {
        return this.webix.bind(function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            this.apply(name, rest);
        }, this);
    };

    JetAppBase.prototype.on = function on(name, handler) {
        this.attachEvent(name, handler);
    };

    JetAppBase.prototype.use = function use(plugin, config) {
        plugin(this, null, config);
    };

    JetAppBase.prototype.error = function error(name, er) {
        this.callEvent(name, er);
        this.callEvent("app:error", er);
        /* tslint:disable */
        if (this.config.debug) {
            for (var i = 0; i < er.length; i++) {
                console.error(er[i]);
                if (er[i] instanceof Error) {
                    var text = er[i].message;
                    if (text.indexOf("Module build failed") === 0) {
                        text = text.replace(/\x1b\[[0-9;]*m/g, "");
                        document.body.innerHTML = "<pre style='font-size:16px; background-color: #ec6873; color: #000; padding:10px;'>" + text + "</pre>";
                    } else {
                        text += "<br><br>Check console for more details";
                        this.webix.message({ type: "error", text: text, expire: -1 });
                    }
                }
            }
            debugger;
        }
        /* tslint:enable */
    };
    // renders top view


    JetAppBase.prototype.render = function render(root, url, parent) {
        var _this15 = this;

        this._container = typeof root === "string" ? this.webix.toNode(root) : root || document.body;
        var firstInit = !this.$router;
        var path = null;
        if (firstInit) {
            if (_once) {
                this.webix.attachEvent("onClick", function (e) {
                    return _this15.clickHandler(e);
                });
                _once = false;
            }
            if (typeof url === "string") {
                url = new Route(url, 0);
            }
            this._subSegment = this._first_start(url);
            this._subSegment.route.linkRouter = true;
        } else {
            if (typeof url === "string") {
                path = url;
            } else {
                if (this.app) {
                    path = url.split().route.path || this.config.start;
                } else {
                    path = url.toString();
                }
            }
        }
        var top = this.getSubView();
        var segment = this._subSegment;
        var ready = segment.show(path, top).then(function () {
            return _this15.createFromURL(segment.current(), top);
        }).then(function (view) {
            return view.render(root, segment);
        }).then(function (base) {
            _this15.$router.set(segment.route.path, { silent: true });
            _this15.callEvent("app:route", [_this15.getUrl()]);
            return base;
        });
        this.ready = this.ready.then(function () {
            return ready;
        });
        return ready;
    };

    JetAppBase.prototype.getSubView = function getSubView() {
        if (this._subSegment) {
            var view = this._subSegment.current().view;
            if (view) return view;
        }
        return new JetView(this, {});
    };

    JetAppBase.prototype._first_start = function _first_start(route) {
        var _this16 = this;

        this._segment = route;
        var cb = function cb(a) {
            return setTimeout(function () {
                _this16.show(a);
            }, 1);
        };
        this.$router = new this.config.router(cb, this.config, this);
        // start animation for top-level app
        if (this._container === document.body && this.config.animation !== false) {
            var node = this._container;
            this.webix.html.addCss(node, "webixappstart");
            setTimeout(function () {
                _this16.webix.html.removeCss(node, "webixappstart");
                _this16.webix.html.addCss(node, "webixapp");
            }, 10);
        }
        if (!route) {
            // if no url defined, check router first
            var urlString = this.$router.get();
            if (!urlString) {
                urlString = this.config.start;
                this.$router.set(urlString, { silent: true });
            }
            route = new Route(urlString, 0);
        } else if (this.app) {
            route.current().view = this;
            if (route.next()) {
                route = route.split();
            } else {
                route = new Route(this.config.start, 0);
            }
        }
        return route;
    };
    // error during view resolving


    JetAppBase.prototype._loadError = function _loadError(url, err) {
        this.error("app:error:resolve", [err, url]);
        return { template: " " };
    };

    JetAppBase.prototype.addSubView = function addSubView(obj, target, config) {
        var url = obj.$subview !== true ? obj.$subview : null;
        var name = obj.name || (url ? this.webix.uid() : "default");
        target.id = obj.id || "s" + this.webix.uid();
        var view = config[name] = {
            id: target.id,
            url: url,
            branch: obj.branch,
            popup: obj.popup
        };
        return view.popup ? null : target;
    };

    return JetAppBase;
}(JetBase);

var HashRouter = function () {
    function HashRouter(cb, config) {
        var _this17 = this;

        _classCallCheck(this, HashRouter);

        this.config = config || {};
        this._detectPrefix();
        this.cb = cb;
        window.onpopstate = function () {
            return _this17.cb(_this17.get());
        };
    }

    HashRouter.prototype.set = function set(path, config) {
        var _this18 = this;

        if (this.config.routes) {
            var compare = path.split("?", 2);
            for (var key in this.config.routes) {
                if (this.config.routes[key] === compare[0]) {
                    path = key + (compare.length > 1 ? "?" + compare[1] : "");
                    break;
                }
            }
        }
        if (this.get() !== path) {
            window.history.pushState(null, null, this.prefix + this.sufix + path);
        }
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this18.cb(path);
            }, 1);
        }
    };

    HashRouter.prototype.get = function get() {
        var path = this._getRaw().replace(this.prefix, "").replace(this.sufix, "");
        path = path !== "/" ? path : "";
        if (this.config.routes) {
            var compare = path.split("?", 2);
            var key = this.config.routes[compare[0]];
            if (key) {
                path = key + (compare.length > 1 ? "?" + compare[1] : "");
            }
        }
        return path;
    };

    HashRouter.prototype._detectPrefix = function _detectPrefix() {
        // use "#!" for backward compatibility
        var sufix = this.config.routerPrefix;
        this.sufix = "#" + (typeof sufix === "undefined" ? "!" : sufix);
        this.prefix = document.location.href.split("#", 2)[0];
    };

    HashRouter.prototype._getRaw = function _getRaw() {
        return document.location.href;
    };

    return HashRouter;
}();

var isPatched = false;
function patch(w) {
    if (isPatched || !w) {
        return;
    }
    isPatched = true;
    // custom promise for IE8
    var win = window;
    if (!win.Promise) {
        win.Promise = w.promise;
    }
    var version = w.version.split(".");
    // will be fixed in webix 5.3
    if (version[0] * 10 + version[1] * 1 < 53) {
        w.ui.freeze = function (handler) {
            // disabled because webix jet 5.0 can't handle resize of scrollview correctly
            // w.ui.$freeze = true;
            var res = handler();
            if (res && res.then) {
                res.then(function (some) {
                    w.ui.$freeze = false;
                    w.ui.resize();
                    return some;
                });
            } else {
                w.ui.$freeze = false;
                w.ui.resize();
            }
            return res;
        };
    }
    // adding views as classes
    var baseAdd = w.ui.baselayout.prototype.addView;
    var baseRemove = w.ui.baselayout.prototype.removeView;
    var config = {
        addView: function addView(view, index) {
            var _this19 = this;

            // trigger logic only for widgets inside of jet-view
            // ignore case when addView used with already initialized widget
            if (this.$scope && this.$scope.webixJet && !view.queryView) {
                var _ret = function () {
                    var jview = _this19.$scope;
                    var subs = {};
                    view = jview.app.copyConfig(view, {}, subs);
                    baseAdd.apply(_this19, [view, index]);

                    var _loop = function _loop(key) {
                        jview._renderFrame(key, subs[key], null).then(function () {
                            jview._subs[key] = subs[key];
                        });
                    };

                    for (var key in subs) {
                        _loop(key);
                    }
                    return {
                        v: view.id
                    };
                }();

                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            } else {
                return baseAdd.apply(this, arguments);
            }
        },
        removeView: function removeView() {
            baseRemove.apply(this, arguments);
            if (this.$scope && this.$scope.webixJet) {
                var subs = this.$scope._subs;
                // check all sub-views, destroy and clean the removed one
                for (var key in subs) {
                    var test = subs[key];
                    if (!w.$$(test.id)) {
                        test.view.destructor();
                        delete subs[key];
                    }
                }
            }
        }
    };
    w.extend(w.ui.layout.prototype, config, true);
    w.extend(w.ui.baselayout.prototype, config, true);
    // wrapper for using Jet Apps as views
    w.protoUI({
        name: "jetapp",
        $init: function $init(cfg) {
            this.$app = new this.app(cfg);
            var id = w.uid().toString();
            cfg.body = { id: id };
            this.$ready.push(function () {
                this.$app.render({ id: id });
            });
            for (var key in this.$app) {
                var origin = this.$app[key];
                if (typeof origin === "function" && !this[key]) {
                    this[key] = origin.bind(this.$app);
                }
            }
        }
    }, w.ui.proxy);
}

var JetApp = function (_JetAppBase) {
    _inherits(JetApp, _JetAppBase);

    function JetApp(config) {
        _classCallCheck(this, JetApp);

        config.router = config.router || HashRouter;

        var _this20 = _possibleConstructorReturn(this, _JetAppBase.call(this, config));

        patch(_this20.webix);
        return _this20;
    }

    JetApp.prototype._loadViewDynamic = function _loadViewDynamic(url) {
        url = url.replace(/\./g, "/");
        return __webpack_require__("./sources/views sync recursive ^\\.\\/.*$")("./" + url);
    };

    return JetApp;
}(JetAppBase);

var StoreRouter = function () {
    function StoreRouter(cb, config, app) {
        _classCallCheck(this, StoreRouter);

        this.storage = config.storage || app.webix.storage.session;
        this.name = config.storeName || config.id + ":route";
        this.cb = cb;
    }

    StoreRouter.prototype.set = function set(path, config) {
        var _this21 = this;

        this.storage.put(this.name, path);
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this21.cb(path);
            }, 1);
        }
    };

    StoreRouter.prototype.get = function get() {
        return this.storage.get(this.name);
    };

    return StoreRouter;
}();

var UrlRouter = function (_HashRouter) {
    _inherits(UrlRouter, _HashRouter);

    function UrlRouter() {
        _classCallCheck(this, UrlRouter);

        return _possibleConstructorReturn(this, _HashRouter.apply(this, arguments));
    }

    UrlRouter.prototype._detectPrefix = function _detectPrefix() {
        this.prefix = "";
        this.sufix = this.config.routerPrefix || "";
    };

    UrlRouter.prototype._getRaw = function _getRaw() {
        return document.location.pathname;
    };

    return UrlRouter;
}(HashRouter);

var EmptyRouter = function () {
    function EmptyRouter(cb, _$config) {
        _classCallCheck(this, EmptyRouter);

        this.path = "";
        this.cb = cb;
    }

    EmptyRouter.prototype.set = function set(path, config) {
        var _this23 = this;

        this.path = path;
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this23.cb(path);
            }, 1);
        }
    };

    EmptyRouter.prototype.get = function get() {
        return this.path;
    };

    return EmptyRouter;
}();

function UnloadGuard(app, view, config) {
    view.on(app, "app:guard", function (_$url, point, promise) {
        if (point === view || point.contains(view)) {
            var res = config();
            if (res === false) {
                promise.confirm = Promise.reject(res);
            } else {
                promise.confirm = promise.confirm.then(function () {
                    return res;
                });
            }
        }
    });
}

//     (c) 2012-2018 Airbnb, Inc.

// var has = require('has');
function has(store, key) {
    return Object.prototype.hasOwnProperty.call(store, key);
}
// var forEach = require('for-each');
function forEach(obj, handler, context) {
    for (var key in obj) {
        if (has(obj, key)) {
            handler.call(context || obj, obj[key], key, obj);
        }
    }
}
// var trim = require('string.prototype.trim');
function trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
// var warning = require('warning');
function warn(message) {
    message = 'Warning: ' + message;
    if (typeof console !== 'undefined') {
        console.error(message);
    }

    try {
        throw new Error(message);
    } catch (x) {}
}

var replace = String.prototype.replace;
var split = String.prototype.split;

// #### Pluralization methods
// The string that separates the different phrase possibilities.
var delimiter = '||||';

var russianPluralGroups = function russianPluralGroups(n) {
    var end = n % 10;
    if (n !== 11 && end === 1) {
        return 0;
    }
    if (2 <= end && end <= 4 && !(n >= 12 && n <= 14)) {
        return 1;
    }
    return 2;
};

// Mapping from pluralization group plural logic.
var pluralTypes = {
    arabic: function arabic(n) {
        // http://www.arabeyes.org/Plural_Forms
        if (n < 3) {
            return n;
        }
        var lastTwo = n % 100;
        if (lastTwo >= 3 && lastTwo <= 10) return 3;
        return lastTwo >= 11 ? 4 : 5;
    },
    bosnian_serbian: russianPluralGroups,
    chinese: function chinese() {
        return 0;
    },
    croatian: russianPluralGroups,
    french: function french(n) {
        return n > 1 ? 1 : 0;
    },
    german: function german(n) {
        return n !== 1 ? 1 : 0;
    },
    russian: russianPluralGroups,
    lithuanian: function lithuanian(n) {
        if (n % 10 === 1 && n % 100 !== 11) {
            return 0;
        }
        return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
    },
    czech: function czech(n) {
        if (n === 1) {
            return 0;
        }
        return n >= 2 && n <= 4 ? 1 : 2;
    },
    polish: function polish(n) {
        if (n === 1) {
            return 0;
        }
        var end = n % 10;
        return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    icelandic: function icelandic(n) {
        return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
    },
    slovenian: function slovenian(n) {
        var lastTwo = n % 100;
        if (lastTwo === 1) {
            return 0;
        }
        if (lastTwo === 2) {
            return 1;
        }
        if (lastTwo === 3 || lastTwo === 4) {
            return 2;
        }
        return 3;
    }
};

// Mapping from pluralization group to individual language codes/locales.
// Will look up based on exact match, if not found and it's a locale will parse the locale
// for language code, and if that does not exist will default to 'en'
var pluralTypeToLanguages = {
    arabic: ['ar'],
    bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
    chinese: ['id', 'id-ID', 'ja', 'ko', 'ko-KR', 'lo', 'ms', 'th', 'th-TH', 'zh'],
    croatian: ['hr', 'hr-HR'],
    german: ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hi-IN', 'hu', 'hu-HU', 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
    french: ['fr', 'tl', 'pt-br'],
    russian: ['ru', 'ru-RU'],
    lithuanian: ['lt'],
    czech: ['cs', 'cs-CZ', 'sk'],
    polish: ['pl'],
    icelandic: ['is'],
    slovenian: ['sl-SL']
};

function langToTypeMap(mapping) {
    var ret = {};
    forEach(mapping, function (langs, type) {
        forEach(langs, function (lang) {
            ret[lang] = type;
        });
    });
    return ret;
}

function pluralTypeName(locale) {
    var langToPluralType = langToTypeMap(pluralTypeToLanguages);
    return langToPluralType[locale] || langToPluralType[split.call(locale, /-/, 1)[0]] || langToPluralType.en;
}

function pluralTypeIndex(locale, count) {
    return pluralTypes[pluralTypeName(locale)](count);
}

function escape(token) {
    return token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function constructTokenRegex(opts) {
    var prefix = opts && opts.prefix || '%{';
    var suffix = opts && opts.suffix || '}';

    if (prefix === delimiter || suffix === delimiter) {
        throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
    }

    return new RegExp(escape(prefix) + '(.*?)' + escape(suffix), 'g');
}

var dollarRegex = /\$/g;
var dollarBillsYall = '$$';
var defaultTokenRegex = /%\{(.*?)\}/g;

// ### transformPhrase(phrase, substitutions, locale)
//
// Takes a phrase string and transforms it by choosing the correct
// plural form and interpolating it.
//
//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
//     // "Hello, Spike!"
//
// The correct plural form is selected if substitutions.smart_count
// is set. You can pass in a number instead of an Object as `substitutions`
// as a shortcut for `smart_count`.
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
//     // "1 new message"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
//     // "2 new messages"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
//     // "5 new messages"
//
// You should pass in a third argument, the locale, to specify the correct plural type.
// It defaults to `'en'` with 2 plural forms.
function transformPhrase(phrase, substitutions, locale, tokenRegex) {
    if (typeof phrase !== 'string') {
        throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
    }

    if (substitutions == null) {
        return phrase;
    }

    var result = phrase;
    var interpolationRegex = tokenRegex || defaultTokenRegex;

    // allow number as a pluralization shortcut
    var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;

    // Select plural form: based on a phrase text that contains `n`
    // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
    // choose the correct plural form. This is only done if `count` is set.
    if (options.smart_count != null && result) {
        var texts = split.call(result, delimiter);
        result = trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
    }

    // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
    result = replace.call(result, interpolationRegex, function (expression, argument) {
        if (!has(options, argument) || options[argument] == null) {
            return expression;
        }
        // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
        return replace.call(options[argument], dollarRegex, dollarBillsYall);
    });

    return result;
}

// ### Polyglot class constructor
function Polyglot(options) {
    var opts = options || {};
    this.phrases = {};
    this.extend(opts.phrases || {});
    this.currentLocale = opts.locale || 'en';
    var allowMissing = opts.allowMissing ? transformPhrase : null;
    this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
    this.warn = opts.warn || warn;
    this.tokenRegex = constructTokenRegex(opts.interpolation);
}

// ### polyglot.locale([locale])
//
// Get or set locale. Internally, Polyglot only uses locale for pluralization.
Polyglot.prototype.locale = function (newLocale) {
    if (newLocale) this.currentLocale = newLocale;
    return this.currentLocale;
};

// ### polyglot.extend(phrases)
//
// Use `extend` to tell Polyglot how to translate a given key.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The key can be any string.  Feel free to call `extend` multiple times;
// it will override any phrases with the same key, but leave existing phrases
// untouched.
//
// It is also possible to pass nested phrase objects, which get flattened
// into an object with the nested keys concatenated using dot notation.
//
//     polyglot.extend({
//       "nav": {
//         "hello": "Hello",
//         "hello_name": "Hello, %{name}",
//         "sidebar": {
//           "welcome": "Welcome"
//         }
//       }
//     });
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}',
//     //   'nav.sidebar.welcome': 'Welcome'
//     // }
//
// `extend` accepts an optional second argument, `prefix`, which can be used
// to prefix every key in the phrases object with some string, using dot
// notation.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     }, "nav");
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}'
//     // }
//
// This feature is used internally to support nested phrase objects.
Polyglot.prototype.extend = function (morePhrases, prefix) {
    forEach(morePhrases, function (phrase, key) {
        var prefixedKey = prefix ? prefix + '.' + key : key;
        if ((typeof phrase === "undefined" ? "undefined" : _typeof(phrase)) === 'object') {
            this.extend(phrase, prefixedKey);
        } else {
            this.phrases[prefixedKey] = phrase;
        }
    }, this);
};

// ### polyglot.unset(phrases)
// Use `unset` to selectively remove keys from a polyglot instance.
//
//     polyglot.unset("some_key");
//     polyglot.unset({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The unset method can take either a string (for the key), or an object hash with
// the keys that you would like to unset.
Polyglot.prototype.unset = function (morePhrases, prefix) {
    if (typeof morePhrases === 'string') {
        delete this.phrases[morePhrases];
    } else {
        forEach(morePhrases, function (phrase, key) {
            var prefixedKey = prefix ? prefix + '.' + key : key;
            if ((typeof phrase === "undefined" ? "undefined" : _typeof(phrase)) === 'object') {
                this.unset(phrase, prefixedKey);
            } else {
                delete this.phrases[prefixedKey];
            }
        }, this);
    }
};

// ### polyglot.clear()
//
// Clears all phrases. Useful for special cases, such as freeing
// up memory if you have lots of phrases but no longer need to
// perform any translation. Also used internally by `replace`.
Polyglot.prototype.clear = function () {
    this.phrases = {};
};

// ### polyglot.replace(phrases)
//
// Completely replace the existing phrases with a new set of phrases.
// Normally, just use `extend` to add more phrases, but under certain
// circumstances, you may want to make sure no old phrases are lying around.
Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
};

// ### polyglot.t(key, options)
//
// The most-used method. Provide a key, and `t` will return the
// phrase.
//
//     polyglot.t("hello");
//     => "Hello"
//
// The phrase value is provided first by a call to `polyglot.extend()` or
// `polyglot.replace()`.
//
// Pass in an object as the second argument to perform interpolation.
//
//     polyglot.t("hello_name", {name: "Spike"});
//     => "Hello, Spike"
//
// If you like, you can provide a default value in case the phrase is missing.
// Use the special option key "_" to specify a default.
//
//     polyglot.t("i_like_to_write_in_language", {
//       _: "I like to write in %{language}.",
//       language: "JavaScript"
//     });
//     => "I like to write in JavaScript."
//
Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    var opts = options == null ? {} : options;
    if (typeof this.phrases[key] === 'string') {
        phrase = this.phrases[key];
    } else if (typeof opts._ === 'string') {
        phrase = opts._;
    } else if (this.onMissingKey) {
        var onMissingKey = this.onMissingKey;
        result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex);
    } else {
        this.warn('Missing translation for key: "' + key + '"');
        result = key;
    }
    if (typeof phrase === 'string') {
        result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex);
    }
    return result;
};

// ### polyglot.has(key)
//
// Check if polyglot has a translation for given key
Polyglot.prototype.has = function (key) {
    return has(this.phrases, key);
};

// export transformPhrase
Polyglot.transformPhrase = function transform(phrase, substitutions, locale) {
    return transformPhrase(phrase, substitutions, locale);
};

var webixPolyglot = Polyglot;

function Locale(app, _view, config) {
    config = config || {};
    var storage = config.storage;
    var lang = storage ? storage.get("lang") || "en" : config.lang || "en";
    function setLangData(name, data, silent) {
        if (data.__esModule) {
            data = data.default;
        }
        var pconfig = { phrases: data };
        if (config.polyglot) {
            app.webix.extend(pconfig, config.polyglot);
        }
        var poly = service.polyglot = new webixPolyglot(pconfig);
        poly.locale(name);
        service._ = app.webix.bind(poly.t, poly);
        lang = name;
        if (storage) {
            storage.put("lang", lang);
        }
        if (config.webix) {
            var locName = config.webix[name];
            if (locName) {
                app.webix.i18n.setLocale(locName);
            }
        }
        if (!silent) {
            return app.refresh();
        }
        return Promise.resolve();
    }
    function getLang() {
        return lang;
    }
    function setLang(name, silent) {
        // ignore setLang if loading by path is disabled
        if (config.path === false) {
            return;
        }
        var path = (config.path ? config.path + "/" : "") + name;
        var data = __webpack_require__("./sources/locales sync recursive ^\\.\\/.*$")("./" + path);
        setLangData(name, data, silent);
    }
    var service = {
        getLang: getLang, setLang: setLang, setLangData: setLangData, _: null, polyglot: null
    };
    app.setService("locale", service);
    setLang(lang, true);
}

function show(view, config, value) {
    if (config.urls) {
        value = config.urls[value] || value;
    } else if (config.param) {
        var _value;

        value = (_value = {}, _value[config.param] = value, _value);
    }
    view.show(value);
}
function Menu(app, view, config) {
    var frame = view.getSubViewInfo().parent;
    var ui = view.$$(config.id || config);
    var silent = false;
    ui.attachEvent("onchange", function () {
        if (!silent) {
            show(frame, config, this.getValue());
        }
    });
    ui.attachEvent("onafterselect", function () {
        if (!silent) {
            var id = null;
            if (ui.setValue) {
                id = this.getValue();
            } else if (ui.getSelectedId) {
                id = ui.getSelectedId();
            }
            show(frame, config, id);
        }
    });
    view.on(app, "app:route", function () {
        var name = "";
        if (config.param) {
            name = view.getParam(config.param, true);
        } else {
            var segment = frame.getUrl()[1];
            if (segment) {
                name = segment.page;
            }
        }
        if (name) {
            silent = true;
            if (ui.setValue && ui.getValue() !== name) {
                ui.setValue(name);
            } else if (ui.select && ui.exists(name) && ui.getSelectedId() !== name) {
                ui.select(name);
            }
            silent = false;
        }
    });
}

var baseicons = {
    good: "check",
    error: "warning",
    saving: "refresh fa-spin"
};
var basetext = {
    good: "Ok",
    error: "Error",
    saving: "Connecting..."
};
function Status(app, view, config) {
    var status = "good";
    var count = 0;
    var iserror = false;
    var expireDelay = config.expire;
    if (!expireDelay && expireDelay !== false) {
        expireDelay = 2000;
    }
    var texts = config.texts || basetext;
    var icons = config.icons || baseicons;
    if (typeof config === "string") {
        config = { target: config };
    }
    function refresh(content) {
        var area = view.$$(config.target);
        if (area) {
            if (!content) {
                content = "<div class='status_" + status + "'><span class='webix_icon fa-" + icons[status] + "'></span> " + texts[status] + "</div>";
            }
            area.setHTML(content);
        }
    }
    function success() {
        count--;
        setStatus("good");
    }
    function fail(err) {
        count--;
        setStatus("error", err);
    }
    function start(promise) {
        count++;
        setStatus("saving");
        if (promise && promise.then) {
            promise.then(success, fail);
        }
    }
    function getStatus() {
        return status;
    }
    function hideStatus() {
        if (count === 0) {
            refresh(" ");
        }
    }
    function setStatus(mode, err) {
        if (count < 0) {
            count = 0;
        }
        if (mode === "saving") {
            status = "saving";
            refresh();
        } else {
            iserror = mode === "error";
            if (count === 0) {
                status = iserror ? "error" : "good";
                if (iserror) {
                    app.error("app:error:server", [err.responseText || err]);
                } else {
                    if (expireDelay) {
                        setTimeout(hideStatus, expireDelay);
                    }
                }
                refresh();
            }
        }
    }
    function track(data) {
        var dp = app.webix.dp(data);
        if (dp) {
            view.on(dp, "onAfterDataSend", start);
            view.on(dp, "onAfterSaveError", function (_id, _obj, response) {
                return fail(response);
            });
            view.on(dp, "onAfterSave", success);
        }
    }
    app.setService("status", {
        getStatus: getStatus,
        setStatus: setStatus,
        track: track
    });
    if (config.remote) {
        view.on(app.webix, "onRemoteCall", start);
    }
    if (config.ajax) {
        view.on(app.webix, "onBeforeAjax", function (_mode, _url, _data, _request, _headers, _files, promise) {
            start(promise);
        });
    }
    if (config.data) {
        track(config.data);
    }
}

function Theme(app, _view, config) {
    config = config || {};
    var storage = config.storage;
    var theme = storage ? storage.get("theme") || "flat-default" : config.theme || "flat-default";
    var service = {
        getTheme: function getTheme() {
            return theme;
        },
        setTheme: function setTheme(name, silent) {
            var parts = name.split("-");
            var links = document.getElementsByTagName("link");
            for (var i = 0; i < links.length; i++) {
                var lname = links[i].getAttribute("title");
                if (lname) {
                    if (lname === name || lname === parts[0]) {
                        links[i].disabled = false;
                    } else {
                        links[i].disabled = true;
                    }
                }
            }
            app.webix.skin.set(parts[0]);
            // remove old css
            app.webix.html.removeCss(document.body, "theme-" + theme);
            // add new css
            app.webix.html.addCss(document.body, "theme-" + name);
            theme = name;
            if (storage) {
                storage.put("theme", name);
            }
            if (!silent) {
                app.refresh();
            }
        }
    };
    app.setService("theme", service);
    service.setTheme(theme, true);
}

function copyParams(data, url, route) {
    for (var i = 0; i < route.length; i++) {
        data[route[i]] = url[i + 1] ? url[i + 1].page : "";
    }
}
function UrlParam(app, view, config) {
    var route = config.route || config;
    var data = {};
    view.on(app, "app:urlchange", function (subview, segment) {
        if (view === subview) {
            copyParams(data, segment.suburl(), route);
            segment.size(route.length + 1);
        }
    });
    var os = view.setParam;
    var og = view.getParam;
    view.setParam = function (name, value, show) {
        var index = route.indexOf(name);
        if (index >= 0) {
            data[name] = value;
            this._segment.update("", value, index + 1);
            if (show) {
                return view.show(null);
            }
        } else {
            return os.call(this, name, value, show);
        }
    };
    view.getParam = function (key, mode) {
        var val = data[key];
        if (typeof val !== "undefined") {
            return val;
        }
        return og.call(this, key, mode);
    };
    copyParams(data, view.getUrl(), route);
}

function User(app, _view, config) {
    config = config || {};
    var login = config.login || "/login";
    var logout = config.logout || "/logout";
    var afterLogin = config.afterLogin || app.config.start;
    var afterLogout = config.afterLogout || "/login";
    var ping = config.ping || 5 * 60 * 1000;
    var model = config.model;
    var user = config.user;
    var service = {
        getUser: function getUser() {
            return user;
        },
        getStatus: function getStatus(server) {
            if (!server) {
                return user !== null;
            }
            return model.status().catch(function () {
                return null;
            }).then(function (data) {
                user = data;
            });
        },
        login: function login(name, pass) {
            return model.login(name, pass).then(function (data) {
                user = data;
                if (!data) {
                    throw new Error("Access denied");
                }
                app.callEvent("app:user:login", [user]);
                app.show(afterLogin);
            });
        },
        logout: function logout() {
            user = null;
            return model.logout().then(function (res) {
                app.callEvent("app:user:logout", []);
                return res;
            });
        }
    };
    function canNavigate(url, obj) {
        if (url === logout) {
            service.logout();
            obj.redirect = afterLogout;
        } else if (url !== login && !service.getStatus()) {
            obj.redirect = login;
        }
    }
    app.setService("user", service);
    app.attachEvent("app:guard", function (url, _$root, obj) {
        if (config.public && config.public(url)) {
            return true;
        }
        if (typeof user === "undefined") {
            obj.confirm = service.getStatus(true).then(function () {
                return canNavigate(url, obj);
            });
        }
        return canNavigate(url, obj);
    });
    if (ping) {
        setInterval(function () {
            return service.getStatus(true);
        }, ping);
    }
}

/*
MIT License
Copyright (c) 2019 XB Software
*/
var webix = window.webix;
if (webix) {
    patch(webix);
}
var plugins = {
    UnloadGuard: UnloadGuard, Locale: Locale, Menu: Menu, Theme: Theme, User: User, Status: Status, UrlParam: UrlParam
};
var w = window;
if (!w.Promise) {
    w.Promise = w.webix.promise;
}


//# sourceMappingURL=jet.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./sources/authorization.js":
/*!**********************************!*\
  !*** ./sources/authorization.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logoutUrl = 'http://localhost:3000/logout';
var loginUrl = 'http://localhost:3000/login';
var registerUrl = 'http://localhost:3000/register';

var Authorization = function () {
	function Authorization() {
		_classCallCheck(this, Authorization);
	}

	Authorization.prototype.register = function register(obj) {
		return webix.ajax().post(registerUrl, obj);
	};

	Authorization.prototype.login = function login(obj) {
		return webix.ajax().post(loginUrl, obj);
	};

	Authorization.prototype.logout = function logout(date) {
		return webix.ajax().post(logoutUrl, date);
	};

	return Authorization;
}();

/* harmony default export */ __webpack_exports__["default"] = (Authorization);

/***/ }),

/***/ "./sources/consts.js":
/*!***************************!*\
  !*** ./sources/consts.js ***!
  \***************************/
/*! exports provided: DUMMYCOVER, SUCCESS_SQL, SUCCESS_MONGO, URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUMMYCOVER", function() { return DUMMYCOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_SQL", function() { return SUCCESS_SQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_MONGO", function() { return SUCCESS_MONGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
var DUMMYCOVER = 'https://i.pinimg.com/originals/ad/fd/58/adfd5873be3841f0660e6aaa00cde18e.jpg';
var SUCCESS_SQL = 2;
var SUCCESS_MONGO = 200;
var URL = 'http://localhost:3000';



/***/ }),

/***/ "./sources/locales sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./sources/locales sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./sources/locales sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/models/books.js":
/*!*********************************!*\
  !*** ./sources/models/books.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BooksModel = function () {
	function BooksModel() {
		_classCallCheck(this, BooksModel);

		this._data = [];
		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/books/';
	}

	BooksModel.prototype.getDataFromServer = function getDataFromServer(id) {
		var userId = { userId: id };
		return webix.ajax().get(this._url, userId);
	};

	BooksModel.prototype.getBook = function getBook(bookId) {
		return webix.ajax().get('' + this._url + bookId);
	};

	BooksModel.prototype.addItem = function addItem(data, func) {
		return webix.ajax().post(this._url, data, func);
	};

	BooksModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	BooksModel.prototype.removeItem = function removeItem(id) {
		return webix.ajax().del('' + this._url + id);
	};

	BooksModel.prototype.search = function search(req) {
		return webix.ajax().get(this._url + 'search/' + req);
	};

	return BooksModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new BooksModel());

/***/ }),

/***/ "./sources/models/files.js":
/*!*********************************!*\
  !*** ./sources/models/files.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var FilesModel = function () {
	function FilesModel() {
		_classCallCheck(this, FilesModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/files/';
	}

	FilesModel.prototype.getDataFromServer = function getDataFromServer() {
		return webix.ajax().get(this._url);
	};

	FilesModel.prototype.getItems = function getItems(id) {
		return webix.ajax().get('' + this._url + id);
	};

	FilesModel.prototype.addItem = function addItem(data) {
		return webix.ajax().post(this._url, data);
	};

	FilesModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	FilesModel.prototype.downloadItem = function downloadItem(id) {
		return webix.ajax().response('blob').get(this._url + 'download/' + id);
	};

	FilesModel.prototype.removeItem = function removeItem(id) {
		return webix.ajax().del('' + this._url + id);
	};

	return FilesModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new FilesModel());

/***/ }),

/***/ "./sources/models/likes.js":
/*!*********************************!*\
  !*** ./sources/models/likes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LikesModel = function () {
	function LikesModel() {
		_classCallCheck(this, LikesModel);

		this._data = [];
		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/likes/';
	}

	LikesModel.prototype.getLikes = function getLikes(id) {
		return webix.ajax().get('' + this._url + id);
	};

	LikesModel.prototype.addLike = function addLike(userId, bookId) {
		var data = {
			userId: userId,
			bookId: bookId
		};

		return webix.ajax().post(this._url, data);
	};

	LikesModel.prototype.removeLike = function removeLike(userId, bookId) {
		var data = {
			userId: userId,
			bookId: bookId
		};

		return webix.ajax().del(this._url, data);
	};

	return LikesModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new LikesModel());

/***/ }),

/***/ "./sources/models/orders.js":
/*!**********************************!*\
  !*** ./sources/models/orders.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var OrdersModel = function () {
	function OrdersModel() {
		_classCallCheck(this, OrdersModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/orders/';
	}

	OrdersModel.prototype.getItems = function getItems(userId) {
		return webix.ajax().get('' + this._url + userId);
	};

	OrdersModel.prototype.addItem = function addItem(order) {
		return webix.ajax().post(this._url, order);
	};

	OrdersModel.prototype.removeUserOrders = function removeUserOrders(ordersToRemove, userId) {
		webix.ajax().put(this._url, { remove: ordersToRemove, userId: userId });
	};

	OrdersModel.prototype.removeItem = function removeItem(id) {
		return webix.ajax().del('' + this._url + id);
	};

	return OrdersModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new OrdersModel());

/***/ }),

/***/ "./sources/models/users.js":
/*!*********************************!*\
  !*** ./sources/models/users.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var UsersModel = function () {
	function UsersModel() {
		_classCallCheck(this, UsersModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/users/';
	}

	UsersModel.prototype.getDataFromServer = function getDataFromServer() {
		return webix.ajax().get(this._url);
	};

	UsersModel.prototype.getReaders = function getReaders() {
		return webix.ajax().get(this._url + '/readers');
	};

	UsersModel.prototype.getItem = function getItem(id) {
		return webix.ajax().get('' + this._url + id);
	};

	UsersModel.prototype.addItem = function addItem(data) {
		return webix.ajax().post(this._url, data);
	};

	UsersModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	return UsersModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new UsersModel());

/***/ }),

/***/ "./sources/myapp.js":
/*!**************************!*\
  !*** ./sources/myapp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./sources/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MyApp = function (_JetApp) {
	_inherits(MyApp, _JetApp);

	function MyApp(config) {
		_classCallCheck(this, MyApp);

		var defaults = {
			id: "webix-jet-app",
			version: "1.1.0",
			router:  false ? undefined : webix_jet__WEBPACK_IMPORTED_MODULE_1__["HashRouter"],
			debug: !false,
			start: '/login'
		};

		return _possibleConstructorReturn(this, _JetApp.call(this, _extends({}, defaults, config)));
	}

	return MyApp;
}(webix_jet__WEBPACK_IMPORTED_MODULE_1__["JetApp"]);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);


if (true) {
	webix.ready(function () {
		var app = new MyApp();
		app.attachEvent('app:guard', function (url, view, nav) {
			if (url.indexOf('id') !== -1) {
				var urlParts = url.split('/');
				var targetPart = void 0;

				urlParts.forEach(function (el) {
					if (el.indexOf('id') != -1) {
						targetPart = el;
					}
				});

				var i = targetPart.indexOf('id');
				var role = targetPart.split('.')[0];
				var id = targetPart.slice(i + 3);

				webix.ajax().get('http://localhost:3000/check').then(function (res) {
					var response = res.json();

					if (!response || response.role != role || response.id != id) {
						app.show('/login');
					}
				}, function (error) {
					if (error.status == 401) {
						app.show('/login');
					}
				});
			}
		});

		app.render();
	});
}

global.log = function () {
	try {
		return console.log.apply(console, arguments);
	} catch (_error) {}
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./sources/scripts.js":
/*!****************************!*\
  !*** ./sources/scripts.js ***!
  \****************************/
/*! exports provided: toggleElement, addItem, updateItem, combineUserNamesInArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleElement", function() { return toggleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineUserNamesInArr", function() { return combineUserNamesInArr; });
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


var addItem = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Model, data, successAction) {
		var newData;
		return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return Model.addItem(data);

					case 2:
						_context.next = 4;
						return Model.getDataFromServer();

					case 4:
						newData = _context.sent;

						successAction(newData);

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function addItem(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();

var updateItem = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(Model, data, successAction) {
		var newData;
		return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return Model.updateItem(data);

					case 2:
						_context2.next = 4;
						return Model.getDataFromServer();

					case 4:
						newData = _context2.sent;

						successAction(newData);

					case 6:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function updateItem(_x4, _x5, _x6) {
		return _ref2.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function toggleElement(condition, element) {
	if (condition) {
		element.show();
	} else {
		element.hide();
	}
}

function combineUserNamesInArr(jsonObj) {
	var usersArr = jsonObj.json();

	usersArr = usersArr.map(function (el) {
		el['full_name'] = el.user_name + ' ' + el.user_surname;
		return el;
	});

	return usersArr;
}

webix.protoUI({
	name: 'activeList',
	defaults: {
		autoheight: true,
		borderless: true,
		type: {
			height: 30
		}
	}
}, webix.ui.list);



/***/ }),

/***/ "./sources/styles/app.css":
/*!********************************!*\
  !*** ./sources/styles/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./sources/views sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./sources/views sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin": "./sources/views/admin/index.js",
	"./admin/": "./sources/views/admin/index.js",
	"./admin/index": "./sources/views/admin/index.js",
	"./admin/index.js": "./sources/views/admin/index.js",
	"./admin/userForm": "./sources/views/admin/userForm.js",
	"./admin/userForm.js": "./sources/views/admin/userForm.js",
	"./common/library": "./sources/views/common/library.js",
	"./common/library.js": "./sources/views/common/library.js",
	"./librarian": "./sources/views/librarian/index.js",
	"./librarian/": "./sources/views/librarian/index.js",
	"./librarian/bookCard": "./sources/views/librarian/bookCard.js",
	"./librarian/bookCard.js": "./sources/views/librarian/bookCard.js",
	"./librarian/index": "./sources/views/librarian/index.js",
	"./librarian/index.js": "./sources/views/librarian/index.js",
	"./librarian/library": "./sources/views/librarian/library.js",
	"./librarian/library.js": "./sources/views/librarian/library.js",
	"./librarian/ordersForm": "./sources/views/librarian/ordersForm.js",
	"./librarian/ordersForm.js": "./sources/views/librarian/ordersForm.js",
	"./librarian/users": "./sources/views/librarian/users.js",
	"./librarian/users.js": "./sources/views/librarian/users.js",
	"./login": "./sources/views/login.js",
	"./login.js": "./sources/views/login.js",
	"./reader": "./sources/views/reader/index.js",
	"./reader/": "./sources/views/reader/index.js",
	"./reader/bookCard": "./sources/views/reader/bookCard.js",
	"./reader/bookCard.js": "./sources/views/reader/bookCard.js",
	"./reader/index": "./sources/views/reader/index.js",
	"./reader/index.js": "./sources/views/reader/index.js",
	"./reader/library": "./sources/views/reader/library.js",
	"./reader/library.js": "./sources/views/reader/library.js",
	"./reader/main": "./sources/views/reader/main.js",
	"./reader/main.js": "./sources/views/reader/main.js",
	"./reader/settings": "./sources/views/reader/settings.js",
	"./reader/settings.js": "./sources/views/reader/settings.js",
	"./reader/tops": "./sources/views/reader/tops.js",
	"./reader/tops.js": "./sources/views/reader/tops.js",
	"./register": "./sources/views/register.js",
	"./register.js": "./sources/views/register.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sources/views sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/views/admin/index.js":
/*!**************************************!*\
  !*** ./sources/views/admin/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization */ "./sources/authorization.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userForm */ "./sources/views/admin/userForm.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TopView = function (_JetView) {
	_inherits(TopView, _JetView);

	function TopView() {
		_classCallCheck(this, TopView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	TopView.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header',
			template: 'Users list'
		};

		var logout = {
			view: 'button',
			localId: 'logoutBtn',
			value: 'Logout',
			width: 100,
			type: 'form'
		};

		var dtable = {
			view: 'datatable',
			id: 'usersList',
			columns: [{
				id: 'id',
				hidden: 1
			}, {
				id: 'full_name',
				header: 'Name',
				fillspace: 1
			}, {
				id: 'role_name',
				header: 'Role',
				width: 100
			}, {
				id: 'phone_numbers',
				header: 'Phone number',
				width: 150
			}, {
				id: 'email',
				header: 'Email',
				fillspace: 1
			}, {
				id: 'edit',
				header: 'Edit',
				width: 50,
				template: '{common.editIcon()}'
			}],
			onClick: {
				'wxi-pencil': function wxiPencil(e, id) {
					_this2._userForm.showWindow(id);
				}
			}
		};

		var addUserBtn = {
			view: 'button',
			value: 'Add user',
			type: 'form',
			width: 100,
			click: function click() {
				_this2.addUser();
			}
		};

		var ui = {
			rows: [{
				type: 'clean',
				cols: [header, logout]
			}, dtable, {
				cols: [{}, addUserBtn, {}]
			}]
		};
		return ui;
	};

	TopView.prototype.init = function init() {
		var _this3 = this;

		_models_users__WEBPACK_IMPORTED_MODULE_2__["default"].getDataFromServer().then(function (dbData) {
			var usersArr = Object(_scripts__WEBPACK_IMPORTED_MODULE_4__["combineUserNamesInArr"])(dbData);
			_this3.usersData = usersArr;
			$$('usersList').parse(usersArr);
		});

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this3.app;
			var format = webix.Date.dateToStr('%Y-%m-%d');
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function (response) {
				if (response) {
					app.show('/login');
				}
			});
		});

		this._userForm = this.ui(_userForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
	};

	TopView.prototype.addUser = function addUser() {
		this._userForm.showWindow();
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

/***/ }),

/***/ "./sources/views/admin/userForm.js":
/*!*****************************************!*\
  !*** ./sources/views/admin/userForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UserForm = function (_JetView) {
	_inherits(UserForm, _JetView);

	function UserForm() {
		_classCallCheck(this, UserForm);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	UserForm.prototype.config = function config() {
		var _this2 = this;

		return {
			view: 'window',
			localId: 'userWindow',
			head: 'Edit user',
			width: 600,
			position: 'center',
			body: {
				rows: [{
					view: 'form',
					localId: 'userForm',
					elements: [{ view: 'text', name: 'id', localId: 'id', hidden: true }, { view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' }, { view: 'combo', label: 'Role', name: 'role_id', labelWidth: 90, labelAlign: 'right', options: [{ id: 1, value: 'reader' }, { id: 2, value: 'labrarian' }, { id: 3, value: 'admin' }] }, { view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' }, { view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Password', name: 'account_password', localId: 'initial_password', labelWidth: 90, labelAlign: 'right' }],
					rules: {
						'role_id': webix.rules.isNotEmpty,
						'email': webix.rules.isNotEmpty,
						'account_password': webix.rules.isNotEmpty
					}
				}, {
					margin: 20,
					paddingY: 10,
					cols: [{}, {
						view: 'button', value: 'Save', type: 'form', localId: 'saveBtn', width: 100,
						click: function click() {
							_this2.saveForm();
						}
					}, {
						view: 'button', value: 'Cancel', width: 100,
						click: function click() {
							_this2.hideWindow();
						}
					}, {}]
				}]
			}
		};
	};

	UserForm.prototype.init = function init() {
		this.form = this.$$('userForm');
		this.window = this.$$('userWindow');
	};

	UserForm.prototype.successAction = function successAction(newData) {
		this.webix.message('Success');
		var usersArr = Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["combineUserNamesInArr"])(newData);
		$$('usersList').parse(usersArr);
		this.hideWindow();
	};

	UserForm.prototype.showWindow = function showWindow(id) {
		var _this3 = this;

		this.isNew = id ? false : true;

		if (this.isNew) {
			this.window.getHead().setHTML('Add user');
			this.window.getHead().refresh();
		} else {
			_models_users__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(id).then(function (dbData) {
				var user = dbData.json();
				user = _this3.convertUserBithDate(user);
				_this3.form.setValues(user);
			});
		}

		var initialPassword = this.$$('initial_password');
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(this.isNew, initialPassword);

		this.getRoot().show();
	};

	UserForm.prototype.convertUserBithDate = function convertUserBithDate(data) {
		var format = webix.Date.dateToStr('%Y-%m-%d');
		data['birth_date'] = format(new Date(data.birth_date));

		return data;
	};

	UserForm.prototype.saveForm = function saveForm() {
		var data = this.form.getValues();

		if (this.form.validate()) {
			if (this.isNew) {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["addItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, this.successAction.bind(this));
			} else {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, this.successAction.bind(this));
			}
		}
	};

	UserForm.prototype.hideWindow = function hideWindow() {
		this.form.clearValidation();
		this.form.clear();
		this.getRoot().hide();
	};

	return UserForm;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (UserForm);

/***/ }),

/***/ "./sources/views/common/library.js":
/*!*****************************************!*\
  !*** ./sources/views/common/library.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
/* harmony import */ var _models_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/files */ "./sources/models/files.js");


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Library = function (_JetView) {
	_inherits(Library, _JetView);

	function Library(app, libraryConfig, bookCard) {
		_classCallCheck(this, Library);

		var _this = _possibleConstructorReturn(this, _JetView.call(this, app));

		_this.libraryConfig = libraryConfig;
		_this.bookCard = bookCard;
		return _this;
	}

	Library.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header',
			template: '<i class="fas fa-book"></i> List of books',
			css: 'center page_header'
		};

		var dtable = {
			view: 'datatable',
			id: 'dtLibrary',
			select: true,
			columns: [{
				id: 'id',
				hidden: true
			}, {
				id: 'bookTitle',
				sort: 'text',
				fillspace: 1,
				header: ['Title', { content: 'textFilter' }]
			}, {
				id: 'authorName',
				sort: 'text',
				fillspace: 1,
				header: ['Author', { content: 'textFilter' }]
			}, {
				id: 'genres',
				sort: 'text',
				width: 80,
				css: 'center',
				header: ['Genres', { content: 'selectFilter' }]
			}, {
				id: 'countryOfPublication',
				sort: 'text',
				width: 80,
				css: 'center',
				header: ['Country', { content: 'selectFilter' }]
			}, {
				id: 'yearOfPublication',
				sort: 'date',
				width: 80,
				css: 'center',
				format: webix.Date.dateToStr('%Y'),
				header: ['Year', { content: "dateRangeFilter" }]
			}, {
				id: 'availableCopies',
				width: 80,
				css: 'center',
				header: 'Available'
			}, {
				id: 'ebook',
				header: ['eBook', { content: "selectFilter" }],
				width: 70,
				template: function template(obj) {
					return obj.ebook === 'yes' ? '<i class="fas fa-check"></i>' : '';
				}
			}, {
				id: 'viewCol',
				header: 'View',
				css: 'center',
				width: 50,
				template: '<i class="fas fa-eye"></i>'
			}, {
				id: 'editCol',
				header: 'Edit',
				css: 'center',
				width: 50,
				template: '<i class="fas fa-edit"></i>'
			}, {
				id: 'removeCol',
				header: 'Remove',
				css: 'center',
				width: 70,
				template: '<i class="fas fa-trash"></i>'
			}],
			scheme: {
				$init: function $init(obj) {
					obj.yearOfPublication = obj.yearOfPublication ? new Date(obj.yearOfPublication) : '';
				}
			},
			onClick: {
				'fa-eye': function faEye(e, id) {
					_this2._bookCard.showPopup(id);
				},
				'fa-edit': function faEdit(e, id) {
					_this2._bookCard.showPopup(id);
				},
				'fa-trash': function faTrash(e, id) {
					_this2.removeBook(id);
				}
			}
		};

		var search = {
			view: 'search',
			id: 'librarySeach',
			placeholder: 'Search',
			on: {
				onEnter: function onEnter() {
					return _this2.search();
				},
				onSearchIconClick: function onSearchIconClick() {
					return _this2.search();
				}
			}
		};

		var savePDF = {
			view: 'button',
			type: 'form',
			label: 'Save as PDF',
			width: 125,
			click: function click() {
				webix.toPDF($$('dtLibrary'), {
					columns: {
						'bookTitle': true,
						'authorName': true,
						'genres': true,
						'countryOfPublication': true,
						'yearOfPublication': true
					},
					filename: 'Books list'
				});
			}
		};

		var saveDOCX = {
			view: 'button',
			type: 'form',
			label: 'Save as DOCX',
			width: 125,
			click: function click() {
				return _this2.saveDOCX();
			}
		};

		return {
			rows: [header, search, dtable, {
				margin: 20,
				cols: [{}, savePDF, saveDOCX, {}]
			}]
		};
	};

	Library.prototype.init = function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							this.grid = $$('dtLibrary');

							_context.t0 = this.libraryConfig.role;
							_context.next = _context.t0 === 'reader' ? 4 : _context.t0 === 'librarian' ? 7 : 9;
							break;

						case 4:
							this.grid.getColumnConfig('editCol').hidden = true;
							this.grid.getColumnConfig('removeCol').hidden = true;
							return _context.abrupt('break', 9);

						case 7:
							this.grid.getColumnConfig('viewCol').hidden = true;
							return _context.abrupt('break', 9);

						case 9:
							this.grid.refreshColumns();
							_context.next = 12;
							return this.getData();

						case 12:
							_context.next = 14;
							return this.getFiles();

						case 14:
							this.checkFiles();
							this.grid.parse(this.booksArr);
							this._bookCard = this.ui(this.bookCard);

						case 17:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function init() {
			return _ref.apply(this, arguments);
		}

		return init;
	}();

	Library.prototype.getData = function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
			var userId, dbData;
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							userId = this.getParam("id", true);
							_context2.next = 3;
							return _models_books__WEBPACK_IMPORTED_MODULE_2__["default"].getDataFromServer(userId);

						case 3:
							dbData = _context2.sent;

							this.booksArr = dbData.json();

						case 5:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function getData() {
			return _ref2.apply(this, arguments);
		}

		return getData;
	}();

	Library.prototype.getFiles = function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
			var dbData;
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return _models_files__WEBPACK_IMPORTED_MODULE_3__["default"].getDataFromServer();

						case 2:
							dbData = _context3.sent;

							this.filesArr = dbData.json();

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		function getFiles() {
			return _ref3.apply(this, arguments);
		}

		return getFiles;
	}();

	Library.prototype.checkFiles = function checkFiles() {
		var _this3 = this;

		this.booksArr.forEach(function (book, i) {
			var isFiles = _this3.filesArr.find(function (el) {
				return el.bookId === book.id;
			});

			if (isFiles) {
				_this3.booksArr[i].ebook = 'yes';
			} else {
				_this3.booksArr[i].ebook = 'no';
			}
		});
	};

	Library.prototype.removeBook = function removeBook(id) {
		var _this4 = this;

		_models_books__WEBPACK_IMPORTED_MODULE_2__["default"].removeItem(id).then(function () {
			_this4.grid.remove(id);
		});
	};

	Library.prototype.addBook = function addBook() {
		this._bookCard.showPopup();
	};

	Library.prototype.search = function search() {
		var _this5 = this;

		var searchInput = $$('librarySeach');
		var value = searchInput.getValue();
		_models_books__WEBPACK_IMPORTED_MODULE_2__["default"].search(value).then(function (res) {
			_this5.grid.clearAll();
			_this5.grid.parse(res.json());
		});
		searchInput.setValue('');
	};

	Library.prototype.saveDOCX = function saveDOCX() {
		var dtData = $$('dtLibrary').serialize();
		var docData = '';
		var dateFormat = webix.Date.dateToStr('%Y');

		dtData.forEach(function (el) {
			for (var key in el) {
				switch (key) {
					case 'bookTitle':
						docData += 'Title: ' + el[key] + ';\n';
						break;
					case 'authorName':
						docData += 'Author: ' + el[key] + ';\n';
						break;
					case 'genres':
						docData += 'Genre: ' + el[key] + ';\n';
						break;
					case 'countryOfPublication':
						docData += 'Country of publication: ' + el[key] + ';\n';
						break;
					case 'availableCopies':
						docData += 'Available copies: ' + el[key] + ';\n';
						break;
					case 'publishingHouse':
						docData += 'Publishing house: ' + el[key] + ';\n';
						break;
					case 'numberOfPages':
						docData += 'Number of pages: ' + el[key] + ';\n';
						break;
					case 'yearOfPublication':
						docData += 'Year of publication: ' + dateFormat(el[key]) + ';\n';
						break;
				}
			}
			docData += '\n\n';
		});

		var link = document.createElement('a');
		link.download = 'data.doc';

		var blob = new Blob([docData], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
		var reader = new FileReader();

		reader.readAsDataURL(blob);
		reader.onload = function () {
			link.href = reader.result;
			link.click();
		};
	};

	return Library;
}(webix_jet__WEBPACK_IMPORTED_MODULE_1__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),

/***/ "./sources/views/librarian/bookCard.js":
/*!*********************************************!*\
  !*** ./sources/views/librarian/bookCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts */ "./sources/consts.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
/* harmony import */ var _models_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/files */ "./sources/models/files.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var BookCard = function (_JetView) {
	_inherits(BookCard, _JetView);

	function BookCard() {
		_classCallCheck(this, BookCard);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	BookCard.prototype.config = function config() {
		var _this2 = this;

		var bookCover = {
			localId: 'bookCover',
			width: 120,
			height: 180,
			css: 'book_cover',
			template: function template(url) {
				return '<div style="background-image: url(' + url + ')" ></div>';
			}
		};

		var bookCard = {
			localId: 'bookCardLibrarian',
			view: 'form',
			borderless: true,
			elements: [{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'bookTitle' }, { view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'authorName' }, { view: 'combo', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', options: ['', 'Fiction', 'Fantasy', 'Thriller', 'Horror', 'Mystery', 'Historical', 'Westerns', 'Family', 'Dark comedy'] }, { view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'countryOfPublication' }, { view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishingHouse' }, { view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'availableCopies' }, { view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'numberOfPages' }, { view: 'datepicker', label: 'Year of publication', labelWidth: 130, width: 310, labelAlign: 'right', type: 'year', format: '%Y', name: 'yearOfPublication' }, { view: 'text', label: 'Cover photo', labelWidth: 130, width: 310, labelAlign: 'right', name: 'coverPhoto' }]
		};

		var addTextFile = {
			view: 'uploader',
			label: '<i class="fas fa-file-upload"></i> Upload text file',
			localId: 'bookFiles',
			type: 'htmlbutton',
			autosend: false,
			width: 150,
			formData: function formData() {
				return {
					userId: _this2.userId,
					bookId: _this2.bookId
				};
			},
			accept: 'text/plain, application/pdf, .doc, .docx',
			upload: 'http://localhost:3000/files/upload/text',
			link: 'filesList'
		};

		var filesList = {
			view: 'list',
			type: 'uploader',
			id: 'filesList',
			autoheight: true,
			borderless: true
		};

		var addAudioFile = {
			view: 'uploader',
			label: '<i class="fas fa-music"></i> Upload audio',
			localId: 'audioFiles',
			type: 'htmlbutton',
			autosend: false,
			width: 150,
			formData: function formData() {
				return {
					userId: _this2.userId,
					bookId: _this2.bookId
				};
			},
			accept: '.mp3',
			upload: 'http://localhost:3000/files/upload/audio',
			link: 'audioList'
		};

		var audioList = {
			view: 'list',
			type: 'uploader',
			id: 'audioList',
			autoheight: true,
			borderless: true
		};

		var availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			autoheight: true,
			template: '#name# <span class="list_button"><i class = "fas fa-times"></i></span>',
			onClick: {
				'fa-times': function faTimes(ev, id) {
					_this2.removeFile(_this2.$$('availableTextFiles'), id);
					return false;
				}
			}
		};

		var availableAudioFiles = {
			view: 'activeList',
			localId: 'availableAudioFiles',
			autoheight: true,
			template: '#name# <span class="list_button"><i class = "fas fa-times"></i></span>',
			onClick: {
				'fa-times': function faTimes(ev, id) {
					_this2.removeFile(_this2.$$('availableAudioFiles'), id);
					return false;
				}
			}
		};

		var saveBtn = {
			view: 'button',
			type: 'form',
			label: 'Save',
			width: 80,
			click: function click() {
				_this2.saveForm();
			}
		};

		return {
			view: 'popup',
			position: 'center',
			maxHeight: 550,
			body: {
				view: 'scrollview',
				body: {
					rows: [bookCover, bookCard, {
						view: 'template',
						template: 'Files',
						autoheight: true,
						css: 'center'
					}, { height: 2 }, availableTextFiles, availableAudioFiles, filesList, audioList, { height: 15 }, {
						localId: 'addingFilesButtons',
						margin: 10,
						cols: [{}, addTextFile, addAudioFile, {}]
					}, { height: 1 }, {
						paddingY: 10,
						paddingX: 15,
						margin: 10,
						borderless: true,
						cols: [{}, saveBtn, {}]
					}]
				}
			}
		};
	};

	BookCard.prototype.init = function init() {
		this.form = this.$$('bookCardLibrarian');
		this.dtLibrary = $$('dtLibrary');
	};

	BookCard.prototype.showPopup = function showPopup(id) {
		var _this3 = this;

		this.clearForm();
		this.isNew = id ? false : true;
		this.bookId = id || '';
		this.userId = this.getParam('id', true);

		Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["toggleElement"])(!this.isNew, this.$$('bookCover'));
		Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["toggleElement"])(!this.isNew, this.$$('addingFilesButtons'));

		if (!this.isNew) {
			_models_books__WEBPACK_IMPORTED_MODULE_1__["default"].getBook(id).then(function (bookData) {
				var book = bookData.json();

				var filesArr = book.files;
				var textFiles = [];
				var audioFiles = [];

				filesArr.forEach(function (file) {
					switch (file.dataType) {
						case 'text':
							textFiles.push(file);
							break;
						case 'audio':
							audioFiles.push(file);
							break;
					}
				});

				_this3.form.setValues(book);
				_this3.$$('bookCover').setValues(book.coverPhoto || _consts__WEBPACK_IMPORTED_MODULE_2__["DUMMYCOVER"]);
				_this3.$$('availableTextFiles').parse(textFiles);
				_this3.$$('availableAudioFiles').parse(audioFiles);
			});
		}

		this.getRoot().show();
	};

	BookCard.prototype.successAction = function successAction(newData) {
		this.webix.message('Success');
		this.dtLibrary.parse(newData.json());
		this.hideWindow();
	};

	BookCard.prototype.saveForm = function saveForm() {
		var _this4 = this;

		var data = this.form.getValues();

		if (this.form.validate()) {
			if (this.isNew) {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["addItem"])(_models_books__WEBPACK_IMPORTED_MODULE_1__["default"], data, this.successAction.bind(this));
			} else {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["updateItem"])(_models_books__WEBPACK_IMPORTED_MODULE_1__["default"], data, this.successAction.bind(this));
			}

			this.$$('bookFiles').send(function (response) {
				if (response) {
					_this4.webix.message(response.message);
				}
			});

			this.$$('audioFiles').send(function (response) {
				if (response) {
					_this4.webix.message(response.message);
				}
			});
		}
	};

	BookCard.prototype.removeFile = function removeFile(targetList, id) {
		_models_files__WEBPACK_IMPORTED_MODULE_4__["default"].removeItem(id).then(function () {
			targetList.remove(id);
		});
	};

	BookCard.prototype.hideWindow = function hideWindow() {
		this.clearForm();
		this.getRoot().hide();
	};

	BookCard.prototype.clearForm = function clearForm() {
		this.form.clearValidation();
		this.form.clear();
		this.$$('bookFiles').files.clearAll();
		this.$$('audioFiles').files.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
	};

	return BookCard;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCard);

/***/ }),

/***/ "./sources/views/librarian/index.js":
/*!******************************************!*\
  !*** ./sources/views/librarian/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TopView = function (_JetView) {
	_inherits(TopView, _JetView);

	function TopView() {
		_classCallCheck(this, TopView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	TopView.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header', template: this.app.config.name, css: 'webix_header app_header'
		};

		var menu = {
			view: 'menu',
			css: 'app_menu',
			width: 180,
			layout: 'y',
			select: true,
			template: '<span class="webix_icon #icon#"></span> #value# ',
			value: 'main',
			data: [{ value: 'Library', id: 'library', icon: 'fas fa-book-reader' }, { value: 'Users', id: 'users', icon: 'fas fa-cog' }],
			on: {
				onMenuItemClick: function onMenuItemClick(id) {
					var userId = _this2.getParam('id', true);
					_this2.app.show('librarian.index?id=' + userId + '/librarian.' + id);
				}
			}
		};

		var logout = {
			view: 'button',
			localId: 'logoutBtn',
			value: 'Logout',
			type: 'form'
		};

		var ui = {
			type: 'clean', paddingX: 5, css: 'app_layout',
			cols: [{ paddingX: 5, paddingY: 10, rows: [{ css: 'webix_shadow_medium', rows: [header, menu, logout] }] }, { view: 'resizer', width: 5 }, {
				type: 'wide', paddingY: 10, paddingX: 5, rows: [{ $subview: true }]
			}]
		};

		return ui;
	};

	TopView.prototype.init = function init() {
		var _this3 = this;

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this3.app;
			var format = webix.Date.dateToStr("%Y-%m-%d");
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function () {
				app.show('/login');
			});
		});
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

/***/ }),

/***/ "./sources/views/librarian/library.js":
/*!********************************************!*\
  !*** ./sources/views/librarian/library.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _common_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/library */ "./sources/views/common/library.js");
/* harmony import */ var _bookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookCard */ "./sources/views/librarian/bookCard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var libLibrary = function (_JetView) {
	_inherits(libLibrary, _JetView);

	function libLibrary() {
		_classCallCheck(this, libLibrary);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	libLibrary.prototype.config = function config() {

		var libraryConfig = {
			role: 'librarian'
		};

		var addBookBtn = {
			view: 'button',
			value: 'Add book',
			type: 'form',
			width: 100,
			click: function click() {
				library.addBook();
			}
		};

		var library = new _common_library__WEBPACK_IMPORTED_MODULE_1__["default"](this.app, libraryConfig, _bookCard__WEBPACK_IMPORTED_MODULE_2__["default"]);

		return {
			rows: [library, {
				cols: [{}, addBookBtn, {}]
			}]
		};
	};

	return libLibrary;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (libLibrary);

/***/ }),

/***/ "./sources/views/librarian/ordersForm.js":
/*!***********************************************!*\
  !*** ./sources/views/librarian/ordersForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/orders */ "./sources/models/orders.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var OrdersForm = function (_JetView) {
	_inherits(OrdersForm, _JetView);

	function OrdersForm() {
		_classCallCheck(this, OrdersForm);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	OrdersForm.prototype.config = function config() {
		var _this2 = this;

		return {
			view: 'window',
			localId: 'userOrdersWindow',
			width: 600,
			head: 'Ordered books',
			position: 'center',
			move: true,
			body: {
				view: 'form',
				padding: 0,
				elements: [{
					view: 'template',
					localId: 'userName',
					css: 'page_header center',
					height: 45,
					borderless: true
				}, {
					view: 'multicombo',
					localId: 'ordersList',
					name: 'ordersList',
					suggest: []
				}, {
					margin: 20,
					paddingY: 10,
					cols: [{}, {
						view: 'button',
						type: 'form',
						label: 'Save',
						width: 80,
						click: function click() {
							_this2.saveForm();
						}
					}, {
						view: 'button',
						type: 'form',
						label: 'Cancel',
						width: 80,
						click: function click() {
							_this2.$$('userOrdersWindow').hide();
						}
					}, {}]
				}]
			}
		};
	};

	OrdersForm.prototype.showPopup = function showPopup(id, userName) {
		var _this3 = this;

		this.userId = id.row;
		this.popup = this.$$('userOrdersWindow');
		this.ordersList = this.$$('ordersList');
		this.$$('userName').setHTML(userName);

		_models_orders__WEBPACK_IMPORTED_MODULE_1__["default"].getItems(this.userId).then(function (results) {
			var orders = results.json();
			_this3.incomingOrders = [].concat(orders);

			orders.forEach(function (el) {
				el.value = el.book.bookTitle + ' - ' + el.book.authorName;
			});

			_this3.ordersList.define('suggest', orders);
			_this3.ordersList.setValue(orders);
			_this3.ordersList.refresh();
		});
		this.getRoot().show();
	};

	OrdersForm.prototype.saveForm = function saveForm() {
		var values = this.ordersList.getValue();
		var outcomingOrders = values.split(',');

		if (this.incomingOrders.length !== outcomingOrders.length) {
			var ordersToRemove = [];

			this.incomingOrders.forEach(function (el) {
				if (outcomingOrders.indexOf(el.id) === -1) {
					ordersToRemove.push(el.id);
				}
			});

			_models_orders__WEBPACK_IMPORTED_MODULE_1__["default"].removeUserOrders(ordersToRemove, this.userId);
		}

		this.$$('userOrdersWindow').hide();
	};

	return OrdersForm;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (OrdersForm);

/***/ }),

/***/ "./sources/views/librarian/users.js":
/*!******************************************!*\
  !*** ./sources/views/librarian/users.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _ordersForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordersForm */ "./sources/views/librarian/ordersForm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var UsersView = function (_JetView) {
	_inherits(UsersView, _JetView);

	function UsersView() {
		_classCallCheck(this, UsersView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	UsersView.prototype.config = function config() {
		var _this2 = this;

		var dtable = {
			view: 'datatable',
			id: 'usersListLibrarian',
			columns: [{
				id: 'id',
				hidden: 1
			}, {
				id: 'full_name',
				header: ['Name', { content: 'textFilter' }],
				minWidth: 180,
				fillspace: 1.5
			}, {
				id: 'orders',
				header: 'Orders',
				width: 70,
				template: '<i class="fas fa-folder-open"></i>'
			}],
			onClick: {
				'fa-folder-open': function faFolderOpen(e, id) {
					_this2.showUserOrders(id);
				}
			}
		};

		var ui = {
			rows: [dtable]
		};
		return ui;
	};

	UsersView.prototype.init = function init() {
		var _this3 = this;

		_models_users__WEBPACK_IMPORTED_MODULE_1__["default"].getReaders().then(function (dbData) {
			var usersArr = dbData.json();
			usersArr = usersArr.map(function (el) {
				el.full_name = el.user_name + ' ' + el.user_surname;
				return el;
			});
			_this3.usersData = usersArr;
			$$('usersListLibrarian').parse(usersArr);
		});

		this.editOrders = this.ui(_ordersForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
	};

	UsersView.prototype.showUserOrders = function showUserOrders(id) {
		var selectedItem = $$('usersListLibrarian').getItem(id);
		var userName = selectedItem.user_name + ' ' + selectedItem.user_surname;
		this.editOrders.showPopup(id, userName);
	};

	return UsersView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (UsersView);

/***/ }),

/***/ "./sources/views/login.js":
/*!********************************!*\
  !*** ./sources/views/login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LoginPage = function (_JetView) {
	_inherits(LoginPage, _JetView);

	function LoginPage() {
		_classCallCheck(this, LoginPage);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	LoginPage.prototype.config = function config() {
		var _this2 = this;

		var loginForm = {
			view: 'form',
			localId: 'loginForm',
			width: 300,
			elements: [{ view: 'text', label: 'Username', name: 'username' }, { view: 'text', type: 'password', label: 'Password', name: 'password' }, {
				margin: 5, cols: [{ view: 'button', localId: 'loginBtn', value: 'Login', type: 'form' }, { view: 'button', value: 'Cancel' }]
			}]
		};

		var link = {
			view: 'button',
			value: 'Create an account',
			click: function click() {
				_this2.show('/register');
			}
		};

		return {
			cols: [{}, {
				rows: [{}, loginForm, link, {}]
			}, {}]
		};
	};

	LoginPage.prototype.init = function init() {
		var _this3 = this;

		this.$$('loginBtn').attachEvent('onItemClick', function () {
			var values = _this3.$$('loginForm').getValues();
			var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

			authorization.login(values).then(function (response) {
				if (response) {
					var userData = response.json().user;
					var id = userData.id;

					switch (userData.role_name) {
						case 'admin':
							_this3.show('admin.index?id=' + id);
							break;
						case 'librarian':
							_this3.show('librarian.index?id=' + id + '/librarian.library');
							break;
						case 'reader':
							_this3.show('reader.index?id=' + id + '/reader.main');
							break;
					}
				} else {
					webix.message(response);
				}
			});
		});
	};

	return LoginPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./sources/views/reader/bookCard.js":
/*!******************************************!*\
  !*** ./sources/views/reader/bookCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_likes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/likes */ "./sources/models/likes.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../consts */ "./sources/consts.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
/* harmony import */ var _models_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/files */ "./sources/models/files.js");
/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/orders */ "./sources/models/orders.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var BookCard = function (_JetView) {
	_inherits(BookCard, _JetView);

	function BookCard() {
		_classCallCheck(this, BookCard);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	BookCard.prototype.config = function config() {
		var _this2 = this;

		var bookCover = {
			localId: 'bookCover',
			width: 120,
			height: 180,
			css: 'book_cover',
			template: function template(url) {
				return '<div style="background-image: url(' + url + ')" ></div>';
			}
		};

		var bookCard = {
			localId: 'bookCardReader',
			view: 'form',
			elements: [{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'bookTitle', readonly: true }, { view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'authorName', readonly: true }, { view: 'text', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', readonly: true }, { view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'countryOfPublication', readonly: true }, { view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishingHouse', readonly: true }, { view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'availableCopies', readonly: true }, { view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'numberOfPages', readonly: true }]
		};

		var availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			template: '#name#<span class="list_button"><i class = "fas fa-download"></i></span>',
			on: {
				onItemClick: function onItemClick(id) {
					var bookName = _this2.$$('availableTextFiles').getItem(id).name;

					_models_files__WEBPACK_IMPORTED_MODULE_5__["default"].downloadItem(id).then(function (res) {
						webix.html.download(res, bookName);
					});
				}
			}
		};

		var availableAudioFiles = {
			view: 'activeList',
			localId: 'availableAudioFiles',
			type: {
				height: 100
			},
			template: "#name#<audio controls src='http://localhost:3000/audio/#id#'></audio>"
		};

		var orderBook = {
			view: 'button',
			localId: 'orderBook',
			type: 'htmlbutton',
			label: '<i class="far fa-hand-paper"></i> Order',
			width: 100,
			click: function click() {
				_this2.orderBook();
			}
		};

		var downloadBook = {
			view: 'button',
			localId: 'downloadBook',
			type: 'icon',
			icon: 'fas fa-download',
			width: 60,
			click: function click() {
				_this2.orderBook();
			}
		};

		var likeBook = {
			view: 'button',
			localId: 'likeButton',
			css: 'like_button',
			type: 'icon',
			icon: 'far fa-heart',
			width: 45,
			click: function click() {
				_this2.likeBook();
			}
		};

		return {
			view: 'popup',
			position: 'center',
			maxHeight: 550,
			body: {
				view: 'scrollview',
				body: {
					rows: [bookCover, bookCard, availableTextFiles, availableAudioFiles, {
						paddingY: 10,
						paddingX: 15,
						margin: 10,
						cols: [orderBook, downloadBook, {}, likeBook]
					}]
				}
			}
		};
	};

	BookCard.prototype.showPopup = function showPopup(id) {
		var _this3 = this;

		this.likeButton = this.$$('likeButton');
		this.form = this.$$('bookCardReader');
		this.filesList = this.$$('availableTextFiles');
		this.audiosList = this.$$('availableAudioFiles');
		this.orderBtn = this.$$('orderBook');
		this.userId = this.getParam('id', true);
		this.bookCover = this.$$('bookCover');

		_models_books__WEBPACK_IMPORTED_MODULE_4__["default"].getBook(id).then(function (bookData) {
			var book = bookData.json();

			_this3.book = book;
			_this3.bookId = book.id;

			_this3.clearForm();

			_this3.form.setValues(book);
			_this3.bookCover.setValues(book.coverPhoto || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
			_this3.likeButton.define('badge', book.count_likes || '0');

			var filesArr = book.files;
			var textFiles = [];
			var audioFiles = [];

			filesArr.forEach(function (file) {
				switch (file.dataType) {
					case 'text':
						textFiles.push(file);
						break;
					case 'audio':
						audioFiles.push(file);
						break;
				}
			});
			_this3.filesList.parse(textFiles);
			_this3.audiosList.parse(audioFiles);

			Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(textFiles.length, _this3.$$('downloadBook'));
			Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.availableCopies, _this3.$$('orderBook'));

			_this3.toggleLike(book.userId == _this3.userId);
			_this3.toggleOrder(book.orderDate);

			_this3.getRoot().show();
		});
	};

	BookCard.prototype.orderBook = function orderBook() {
		var _this4 = this;

		var order = {
			userId: this.userId,
			bookId: this.bookId,
			orderDate: new Date()
		};

		_models_orders__WEBPACK_IMPORTED_MODULE_6__["default"].addItem(order).then(function () {
			_this4.setOrderedVal();
		});
	};

	BookCard.prototype.setOrderedVal = function setOrderedVal() {
		this.orderBtn.define('label', 'Ordered');
		this.orderBtn.refresh();
		this.orderBtn.disable();
	};

	BookCard.prototype.unsetOrderedVal = function unsetOrderedVal() {
		this.orderBtn.define('label', '<i class="far fa-hand-paper"></i> Order');
		this.orderBtn.refresh();
		this.orderBtn.enable();
	};

	BookCard.prototype.toggleOrder = function toggleOrder(ordered) {
		if (ordered) {
			this.setOrderedVal();
		} else {
			this.unsetOrderedVal();
		}
	};

	BookCard.prototype.likeBook = function likeBook() {
		var _this5 = this;

		if (this.book.userId == this.userId) {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].removeLike(this.userId, this.bookId).then(function () {
				_this5.unsetLike();
			});
		} else {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].addLike(this.userId, this.bookId).then(function () {
				_this5.setLike();
			});
		}
	};

	BookCard.prototype.toggleLike = function toggleLike(condition) {
		if (condition) {
			this.setLike();
		} else {
			this.unsetLike();
		}
	};

	BookCard.prototype.setLike = function setLike() {
		this.likeButton.define('icon', 'fas fa-heart');
		this.likeButton.refresh();
	};

	BookCard.prototype.unsetLike = function unsetLike() {
		this.likeButton.define('icon', 'far fa-heart');
		this.likeButton.refresh();
	};

	BookCard.prototype.clearForm = function clearForm() {
		this.form.clear();
		this.filesList.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
	};

	return BookCard;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCard);

/***/ }),

/***/ "./sources/views/reader/index.js":
/*!***************************************!*\
  !*** ./sources/views/reader/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TopView = function (_JetView) {
	_inherits(TopView, _JetView);

	function TopView() {
		_classCallCheck(this, TopView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	TopView.prototype.config = function config() {
		var _this2 = this;

		var header = {
			type: 'header', template: this.app.config.name, css: 'webix_header app_header'
		};

		var menu = {
			view: 'menu',
			css: 'app_menu',
			width: 180, layout: 'y', select: true,
			template: '<span class="webix_icon #icon#"></span> #value# ',
			value: 'main',
			data: [{ value: 'My books', id: 'main', icon: 'fas fa-bookmark' }, { value: 'Library', id: 'library', icon: 'fas fa-book-reader' }, { value: 'Tops', id: 'tops', icon: 'fas fa-list' }, { value: 'Settings', id: 'settings', icon: 'fas fa-cog' }],
			on: {
				onMenuItemClick: function onMenuItemClick(id) {
					var userId = _this2.getParam("id", true);
					_this2.app.show('reader.index?id=' + userId + '/reader.' + id);
				}
			}
		};

		var logout = {
			view: 'button',
			localId: 'logoutBtn',
			value: 'Logout',
			type: 'form'
		};

		var ui = {
			type: 'clean', paddingX: 5, css: 'app_layout',
			cols: [{ paddingX: 5, paddingY: 10, rows: [{ css: 'webix_shadow_medium', rows: [header, menu, logout] }] }, { view: 'resizer', width: 5 }, {
				type: 'wide', paddingY: 10, paddingX: 5, rows: [{ $subview: true }]
			}]
		};

		return ui;
	};

	TopView.prototype.init = function init() {
		var _this3 = this;

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this3.app;
			var format = webix.Date.dateToStr('%Y-%m-%d');
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function () {
				app.show('/login');
			});
		});
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

/***/ }),

/***/ "./sources/views/reader/library.js":
/*!*****************************************!*\
  !*** ./sources/views/reader/library.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _common_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/library */ "./sources/views/common/library.js");
/* harmony import */ var _bookCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookCard */ "./sources/views/reader/bookCard.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var readerLibrary = function (_JetView) {
	_inherits(readerLibrary, _JetView);

	function readerLibrary() {
		_classCallCheck(this, readerLibrary);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	readerLibrary.prototype.config = function config() {
		var libraryConfig = {
			role: 'reader'
		};

		return {
			rows: [new _common_library__WEBPACK_IMPORTED_MODULE_1__["default"](this.app, libraryConfig, _bookCard__WEBPACK_IMPORTED_MODULE_2__["default"])]
		};
	};

	return readerLibrary;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (readerLibrary);

/***/ }),

/***/ "./sources/views/reader/main.js":
/*!**************************************!*\
  !*** ./sources/views/reader/main.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/orders */ "./sources/models/orders.js");


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MainView = function (_JetView) {
	_inherits(MainView, _JetView);

	function MainView() {
		_classCallCheck(this, MainView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	MainView.prototype.config = function config() {
		var _this2 = this;

		var testResults = {
			view: 'datatable',
			localId: 'ordersList',
			select: true,
			columns: [{
				id: 'id',
				hidden: true
			}, {
				id: 'bookTitle',
				header: 'Book',
				fillspace: 1
			}, {
				id: 'authorName',
				header: 'Author',
				fillspace: 1
			}, {
				id: 'removeCol',
				header: 'Remove',
				css: 'center',
				width: 70,
				template: '<i class="fas fa-trash"></i>'
			}],
			onClick: {
				'fa-trash': function faTrash(e, id) {
					_this2.removeBook(id);
				}
			}
		};

		var button = {
			view: 'button',
			id: 'addGroup',
			value: 'Add',
			type: 'form',
			inputWidth: 100,
			click: function click() {}
		};

		return {
			rows: [testResults, button]
		};
	};

	MainView.prototype.init = function init() {
		this.grid = this.$$('ordersList');
		this.userId = this.getParam("id", true);
		this.parseBooks();
	};

	MainView.prototype.parseBooks = function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
			var _this3 = this;

			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _models_orders__WEBPACK_IMPORTED_MODULE_2__["default"].getItems(this.userId).then(function (dbData) {
								var ordersArr = dbData.json();

								ordersArr.forEach(function (el) {
									el.bookTitle = el.book.bookTitle;
									el.authorName = el.book.authorName;
								});

								_this3.grid.clearAll();
								_this3.$$('ordersList').parse(ordersArr);
							});

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function parseBooks() {
			return _ref.apply(this, arguments);
		}

		return parseBooks;
	}();

	MainView.prototype.removeBook = function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
			return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return _models_orders__WEBPACK_IMPORTED_MODULE_2__["default"].removeItem(id);

						case 2:
							_context2.next = 4;
							return this.parseBooks();

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		function removeBook(_x) {
			return _ref2.apply(this, arguments);
		}

		return removeBook;
	}();

	return MainView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_1__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (MainView);

/***/ }),

/***/ "./sources/views/reader/settings.js":
/*!******************************************!*\
  !*** ./sources/views/reader/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/users */ "./sources/models/users.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Settings = function (_JetView) {
	_inherits(Settings, _JetView);

	function Settings() {
		_classCallCheck(this, Settings);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	Settings.prototype.config = function config() {
		var _this2 = this;

		var button = {
			view: 'button',
			id: 'saveChanges',
			value: 'Save',
			type: 'form',
			inputWidth: 100,
			click: function click() {
				_this2.saveForm();
			}
		};

		var userData = {
			view: 'form',
			localId: 'userDataForm',
			elements: [{ view: 'text', name: 'id', localId: 'user_id', hidden: true }, { view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' }, { view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' }, { view: 'checkbox', labelRight: 'I agree to receive emails', name: 'accept_newsletters', labelWidth: 87 }, button]
		};

		return {
			rows: [userData]
		};
	};

	Settings.prototype.init = function init() {
		var _this3 = this;

		var id = this.getParam('id', true);

		_models_users__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(id).then(function (data) {
			var userData = data.json();
			userData.birth_date = new Date(userData.birth_date);
			_this3.$$('userDataForm').setValues(userData);
		});
	};

	Settings.prototype.successAction = function successAction() {
		webix.message('New data saved');
	};

	Settings.prototype.saveForm = function saveForm() {
		var data = this.$$('userDataForm').getValues();
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, this.successAction);
	};

	return Settings;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./sources/views/reader/tops.js":
/*!**************************************!*\
  !*** ./sources/views/reader/tops.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var bookTops = function (_JetView) {
	_inherits(bookTops, _JetView);

	function bookTops() {
		_classCallCheck(this, bookTops);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	bookTops.prototype.config = function config() {
		var _this2 = this;

		return {
			cols: [{
				view: 'list',
				width: 250,
				select: true,
				data: [{
					id: 'showOldestBooks',
					value: 'Oldest books'
				}, {
					id: 'showNewestBooks',
					value: 'Newest books'
				}, {
					id: 'showMostPagesBooks',
					value: 'Most pages books'
				}, {
					id: 'showBooksWithLongNames',
					value: 'Books with longest names'
				}, {
					id: 'showAuthorsWithMostBooks',
					value: 'Authors with most books'
				}],
				on: {
					onItemClick: function onItemClick(id) {
						switch (id) {
							case 'showOldestBooks':
								_this2.showOldestBooks();
								break;
							case 'showNewestBooks':
								_this2.showNewestBooks();
								break;
							case 'showMostPagesBooks':
								_this2.showMostPagesBooks();
								break;
							case 'showBooksWithLongNames':
								_this2.showBooksWithLongNames();
								break;
							case 'showAuthorsWithMostBooks':
								_this2.showAuthorsWithMostBooks();
								break;
						}
					}
				}
			}, {
				id: 'booksTop',
				view: 'datatable',
				hidden: true
			}]
		};
	};

	bookTops.prototype.init = function init() {
		var _this3 = this;

		this.grid = $$('booksTop');
		_models_books__WEBPACK_IMPORTED_MODULE_1__["default"].getDataFromServer().then(function (dbData) {
			var booksArr = dbData.json();
			booksArr = booksArr.map(function (el) {
				el.year_of_publication = new Date(el.year_of_publication);
				return el;
			});
			_this3.booksArr = booksArr;
		});

		this.defaultConfig = [{
			id: 'book_title',
			sort: 'text',
			fillspace: 1,
			header: 'Title'
		}, {
			id: 'author_name',
			sort: 'text',
			fillspace: 1,
			header: 'Author'
		}, {
			id: 'genres',
			sort: 'text',
			width: 80,
			css: 'center',
			header: 'Genres'
		}, {
			id: 'country_of_publication',
			sort: 'text',
			width: 80,
			css: 'center',
			header: 'Country'
		}, {
			id: 'year_of_publication',
			sort: 'date',
			width: 80,
			css: 'center',
			format: webix.Date.dateToStr("%Y"),
			header: 'Year'
		}, {
			id: 'number_of_pages',
			header: 'Pages',
			width: 60
		}];
	};

	bookTops.prototype.showOldestBooks = function showOldestBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return a.year_of_publication - b.year_of_publication;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showNewestBooks = function showNewestBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.year_of_publication - a.year_of_publication;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showMostPagesBooks = function showMostPagesBooks() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.number_of_pages - a.number_of_pages;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showBooksWithLongNames = function showBooksWithLongNames() {
		var data = [].concat(this.booksArr);
		data.sort(function (a, b) {
			return b.book_title.length - a.book_title.length;
		});
		this.showResults(data, this.defaultConfig);
	};

	bookTops.prototype.showAuthorsWithMostBooks = function showAuthorsWithMostBooks() {
		var authors = [];
		this.booksArr.forEach(function (el) {
			var index = authors.findIndex(function (author) {
				return author.name == el.author_name;
			});
			if (index === -1) {
				authors.push({ name: el.author_name, booksCount: 1 });
			} else {
				authors[index].booksCount++;
			}
		});

		authors = authors.sort(function (a, b) {
			return b.booksCount - a.booksCount;
		});

		var columns = [{
			id: 'name',
			header: 'Name',
			fillspace: 1
		}, {
			id: 'booksCount',
			header: 'Books count',
			fillspace: 1
		}];
		this.showResults(authors, columns);
	};

	bookTops.prototype.showResults = function showResults(data, columns) {
		this.grid.define('columns', columns);
		this.grid.refreshColumns();
		data = data.slice(0, 10);
		this.grid.clearAll();
		this.grid.parse(data);
		this.grid.show();
	};

	return bookTops;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (bookTops);

/***/ }),

/***/ "./sources/views/register.js":
/*!***********************************!*\
  !*** ./sources/views/register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RegisterPage = function (_JetView) {
	_inherits(RegisterPage, _JetView);

	function RegisterPage() {
		_classCallCheck(this, RegisterPage);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	RegisterPage.prototype.config = function config() {

		function passwordRule(value) {
			var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
			if (re.test(value)) {
				return true;
			} else {
				webix.message('Password mast contain at least 5 simbols, including UPPER/lowercase and number(s)');
				return false;
			}
		}

		function emailRule(value) {
			if (webix.rules.isEmail(value)) {
				return true;
			} else {
				webix.message('Enter correct email');
				return false;
			}
		}

		var registerForm = {
			view: 'form',
			localId: 'registerForm',
			width: 300,
			elements: [{ view: 'text', label: 'Uername', name: 'username' }, { view: 'text', type: 'password', label: 'Password', name: 'password' }, {
				margin: 5, cols: [{
					view: 'button', localId: 'registerBtn', value: 'Register', type: 'form'
				}]
			}],
			rules: {
				username: emailRule,
				password: passwordRule
			}
		};

		return {
			cols: [{}, {
				rows: [{}, registerForm, {}]
			}, {}]
		};
	};

	RegisterPage.prototype.init = function init() {
		var _this2 = this;

		var form = this.$$('registerForm');

		this.$$('registerBtn').attachEvent('onItemClick', function () {
			var values = form.getValues();

			if (form.validate()) {
				var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

				authorization.register(values).then(function (response) {
					var status = response.json().status;
					var id = response.json().id;
					if (status === 2) {
						_this2.show('reader.index?id=' + id + '/reader.main');
					} else {
						if (response.json().reason === 'userExist') {
							_this2.show('/login');
						}
						webix.message(response.json().data);
					}
				});
			}
		});
	};

	return RegisterPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViaXgtamV0L2Rpc3QvZXM2L2pldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvY29uc3RzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvYm9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvb3JkZXJzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbXlhcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9vcmRlcnNGb3JtLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL3VzZXJzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImciLCJGdW5jdGlvbiIsImhhZFJ1bnRpbWUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiaW5kZXhPZiIsIm9sZFJ1bnRpbWUiLCJ1bmRlZmluZWQiLCJlIiwiZ2xvYmFsIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiaW5Nb2R1bGUiLCJydW50aW1lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJldHVybiIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0Iiwia2V5IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiSmV0QmFzZSIsIndlYml4Iiwid2ViaXhKZXQiLCJfZXZlbnRzIiwiX3N1YnMiLCJfZGF0YSIsImdldFJvb3QiLCJfcm9vdCIsImRlc3RydWN0b3IiLCJfZGV0YWNoRXZlbnRzIiwiX2Rlc3Ryb3lTdWJzIiwiX2NvbnRhaW5lciIsImFwcCIsIl9wYXJlbnQiLCJzZXRQYXJhbSIsImlkIiwidXJsIiwiX3NlZ21lbnQiLCJ1cGRhdGUiLCJzaG93IiwiZ2V0UGFyYW0iLCJwYXJlbnQiLCJ2aWV3IiwiZ2V0UGFyZW50VmlldyIsImdldFVybCIsInN1YnVybCIsImdldFVybFN0cmluZyIsIiQkIiwicm9vdCIsInF1ZXJ5VmlldyIsImNvbmZpZyIsImxvY2FsSWQiLCIkc2NvcGUiLCJvbiIsImNvZGUiLCJhdHRhY2hFdmVudCIsImNvbnRhaW5zIiwia2lkIiwiZ2V0U3ViVmlldyIsInN1YiIsImdldFN1YlZpZXdJbmZvIiwic3VidmlldyIsInBvcHVwIiwiZXZlbnRzIiwiZGV0YWNoRXZlbnQiLCJzdWJWaWV3IiwiX2luaXRfdXJsX2RhdGEiLCJjdXJyZW50IiwiZXh0ZW5kIiwicGFyYW1zIiwiX2dldERlZmF1bHRTdWIiLCJkZWZhdWx0IiwiYnJhbmNoIiwiY2hpbGQiLCJfcm91dGVkX3ZpZXciLCJwYXJzZSIsInN1YnN0ciIsInBhcnRzIiwic3BsaXQiLCJjaHVua3MiLCJ0ZXN0IiwicG9zIiwicGFyYW0iLCJkY2h1bmsiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwiaXNOZXciLCJ1cmwyc3RyIiwic3RhY2siLCJjaHVuayIsIm9iajJzdHIiLCJqb2luIiwic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJyb3V0ZSIsImluZGV4IiwiX25leHQiLCJwYXRoIiwic2hpZnQiLCJyZWZyZXNoIiwiX2pvaW4iLCJraWRzIiwib2xkIiwiY29uY2F0IiwiYXBwZW5kIiwicmVzIiwicmVqIiwicmVkaXJlY3QiLCJjb25maXJtIiwiY2FsbEV2ZW50IiwiY2F0Y2giLCJzaXplIiwibiIsIkpldFZpZXciLCJfY2hpbGRyZW4iLCJ1aSIsImNvbnRhaW5lciIsImpldHZpZXciLCJjcmVhdGVWaWV3IiwicmVuZGVyIiwidGFyZ2V0IiwiX3JlbmRlckZyYW1lTG9jayIsIl9zaG93Iiwic2VnbWVudCIsIl91cmxDaGFuZ2UiLCJsaW5rUm91dGVyIiwiZ2V0Um91dGVyIiwic2V0Iiwic2lsZW50IiwiaW5pdCIsIl8kdmlldyIsIl8kIiwicmVhZHkiLCJfJHVybCIsIm1lc3NhZ2UiLCJ1cmxDaGFuZ2UiLCJkZXN0cm95IiwiX2Rlc3Ryb3lLaWRzIiwidXNlIiwicGx1Z2luIiwidGFnTmFtZSIsIl9yZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ0b05vZGUiLCJfcmVuZGVyX2ZpbmFsIiwiY2ZnIiwic2xvdCIsInJlc3BvbnNlIiwiY29weUNvbmZpZyIsIm9sZHVpIiwiYXNXaW4iLCJzZXRQb3NpdGlvbiIsImlzVmlzaWJsZSIsIl9pbml0IiwiX2luaXRVcmwiLCJfaW5pdEVycm9yIiwid2FpdHMiLCJmcmFtZSIsIndhaXQiLCJhbGwiLCJsb2NrIiwiX3JlbmRlckZyYW1lIiwiX2NyZWF0ZVN1YlZpZXciLCJlcnJvciIsImNyZWF0ZUZyb21VUkwiLCJ1aXMiLCJKZXRWaWV3UmF3IiwiX3VpIiwiU3ViUm91dGVyIiwiY2IiLCJhIiwiZ2V0IiwiX29uY2UiLCJKZXRBcHBCYXNlIiwid2luZG93IiwidmVyc2lvbiIsInN0YXJ0IiwiX3NlcnZpY2VzIiwiRXZlbnRTeXN0ZW0iLCJfc3ViU2VnbWVudCIsImdldFNlcnZpY2UiLCJzZXRTZXJ2aWNlIiwiaGFuZGxlciIsIiRzdWJ2aWV3IiwiYWRkU3ViVmlldyIsIkFycmF5IiwicG9pbnQiLCJEYXRhQ29sbGVjdGlvbiIsIlJlZ0V4cCIsIkRhdGUiLCJjb3B5IiwiJHJvdXRlciIsImNsaWNrSGFuZGxlciIsInNyY0VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0cmlnZ2VyIiwiX2ZvclZpZXciLCJsb2FkVmlldyIsInZpZXdzIiwiX2xvYWRFcnJvciIsIl9sb2FkVmlld0R5bmFtaWMiLCJfX2VzTW9kdWxlIiwibm93Iiwicm91dGVyIiwicmVzdCIsImFwcGx5IiwiZGF0YSIsImFjdGlvbiIsImJpbmQiLCJlciIsImRlYnVnIiwiY29uc29sZSIsInRleHQiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiZXhwaXJlIiwiZmlyc3RJbml0IiwiX2ZpcnN0X3N0YXJ0IiwidG9wIiwiYmFzZSIsInNldFRpbWVvdXQiLCJhbmltYXRpb24iLCJub2RlIiwiaHRtbCIsImFkZENzcyIsInJlbW92ZUNzcyIsInVybFN0cmluZyIsInRlbXBsYXRlIiwidWlkIiwiSGFzaFJvdXRlciIsIl9kZXRlY3RQcmVmaXgiLCJvbnBvcHN0YXRlIiwicm91dGVzIiwiY29tcGFyZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwcmVmaXgiLCJzdWZpeCIsIl9nZXRSYXciLCJyb3V0ZXJQcmVmaXgiLCJsb2NhdGlvbiIsImhyZWYiLCJpc1BhdGNoZWQiLCJwYXRjaCIsInciLCJ3aW4iLCJwcm9taXNlIiwiZnJlZXplIiwic29tZSIsIiRmcmVlemUiLCJyZXNpemUiLCJiYXNlQWRkIiwiYmFzZWxheW91dCIsImFkZFZpZXciLCJiYXNlUmVtb3ZlIiwicmVtb3ZlVmlldyIsImp2aWV3Iiwic3VicyIsImFyZ3VtZW50cyIsImxheW91dCIsInByb3RvVUkiLCIkaW5pdCIsIiRhcHAiLCIkcmVhZHkiLCJvcmlnaW4iLCJwcm94eSIsIkpldEFwcCIsIlN0b3JlUm91dGVyIiwic3RvcmFnZSIsInNlc3Npb24iLCJzdG9yZU5hbWUiLCJwdXQiLCJVcmxSb3V0ZXIiLCJwYXRobmFtZSIsIkVtcHR5Um91dGVyIiwiXyRjb25maWciLCJVbmxvYWRHdWFyZCIsImhhcyIsInN0b3JlIiwidHJpbSIsIndhcm4iLCJ4IiwiU3RyaW5nIiwiZGVsaW1pdGVyIiwicnVzc2lhblBsdXJhbEdyb3VwcyIsImVuZCIsInBsdXJhbFR5cGVzIiwiYXJhYmljIiwibGFzdFR3byIsImJvc25pYW5fc2VyYmlhbiIsImNoaW5lc2UiLCJjcm9hdGlhbiIsImZyZW5jaCIsImdlcm1hbiIsInJ1c3NpYW4iLCJsaXRodWFuaWFuIiwiY3plY2giLCJwb2xpc2giLCJpY2VsYW5kaWMiLCJzbG92ZW5pYW4iLCJwbHVyYWxUeXBlVG9MYW5ndWFnZXMiLCJsYW5nVG9UeXBlTWFwIiwibWFwcGluZyIsInJldCIsImxhbmdzIiwibGFuZyIsInBsdXJhbFR5cGVOYW1lIiwibG9jYWxlIiwibGFuZ1RvUGx1cmFsVHlwZSIsImVuIiwicGx1cmFsVHlwZUluZGV4IiwiY291bnQiLCJlc2NhcGUiLCJ0b2tlbiIsImNvbnN0cnVjdFRva2VuUmVnZXgiLCJvcHRzIiwic3VmZml4IiwiUmFuZ2VFcnJvciIsImRvbGxhclJlZ2V4IiwiZG9sbGFyQmlsbHNZYWxsIiwiZGVmYXVsdFRva2VuUmVnZXgiLCJ0cmFuc2Zvcm1QaHJhc2UiLCJwaHJhc2UiLCJzdWJzdGl0dXRpb25zIiwidG9rZW5SZWdleCIsImludGVycG9sYXRpb25SZWdleCIsIm9wdGlvbnMiLCJzbWFydF9jb3VudCIsInRleHRzIiwiZXhwcmVzc2lvbiIsImFyZ3VtZW50IiwiUG9seWdsb3QiLCJwaHJhc2VzIiwiY3VycmVudExvY2FsZSIsImFsbG93TWlzc2luZyIsIm9uTWlzc2luZ0tleSIsImludGVycG9sYXRpb24iLCJuZXdMb2NhbGUiLCJtb3JlUGhyYXNlcyIsInByZWZpeGVkS2V5IiwidW5zZXQiLCJjbGVhciIsIm5ld1BocmFzZXMiLCJ0IiwiXyIsInRyYW5zZm9ybSIsIndlYml4UG9seWdsb3QiLCJMb2NhbGUiLCJfdmlldyIsInNldExhbmdEYXRhIiwicGNvbmZpZyIsInBvbHlnbG90IiwicG9seSIsInNlcnZpY2UiLCJsb2NOYW1lIiwiaTE4biIsInNldExvY2FsZSIsImdldExhbmciLCJzZXRMYW5nIiwidXJscyIsIk1lbnUiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiZ2V0U2VsZWN0ZWRJZCIsInNlbGVjdCIsImV4aXN0cyIsImJhc2VpY29ucyIsImdvb2QiLCJzYXZpbmciLCJiYXNldGV4dCIsIlN0YXR1cyIsInN0YXR1cyIsImlzZXJyb3IiLCJleHBpcmVEZWxheSIsImljb25zIiwiY29udGVudCIsImFyZWEiLCJzZXRIVE1MIiwic3VjY2VzcyIsInNldFN0YXR1cyIsImZhaWwiLCJnZXRTdGF0dXMiLCJoaWRlU3RhdHVzIiwibW9kZSIsInJlc3BvbnNlVGV4dCIsInRyYWNrIiwiZHAiLCJfaWQiLCJfb2JqIiwicmVtb3RlIiwiYWpheCIsIl9tb2RlIiwiX3VybCIsIl9yZXF1ZXN0IiwiX2hlYWRlcnMiLCJfZmlsZXMiLCJUaGVtZSIsInRoZW1lIiwiZ2V0VGhlbWUiLCJzZXRUaGVtZSIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsbmFtZSIsImRpc2FibGVkIiwic2tpbiIsImNvcHlQYXJhbXMiLCJVcmxQYXJhbSIsIm9zIiwib2ciLCJ2YWwiLCJVc2VyIiwibG9naW4iLCJsb2dvdXQiLCJhZnRlckxvZ2luIiwiYWZ0ZXJMb2dvdXQiLCJwaW5nIiwibW9kZWwiLCJ1c2VyIiwiZ2V0VXNlciIsInNlcnZlciIsInBhc3MiLCJjYW5OYXZpZ2F0ZSIsIl8kcm9vdCIsInB1YmxpYyIsInNldEludGVydmFsIiwicGx1Z2lucyIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJsIiwibG9nb3V0VXJsIiwibG9naW5VcmwiLCJyZWdpc3RlclVybCIsIkF1dGhvcml6YXRpb24iLCJyZWdpc3RlciIsInBvc3QiLCJkYXRlIiwiRFVNTVlDT1ZFUiIsIlNVQ0NFU1NfU1FMIiwiU1VDQ0VTU19NT05HTyIsIlVSTCIsIkJvb2tzTW9kZWwiLCJnZXREYXRhRnJvbVNlcnZlciIsInVzZXJJZCIsImdldEJvb2siLCJib29rSWQiLCJhZGRJdGVtIiwiZnVuYyIsInVwZGF0ZUl0ZW0iLCJyZW1vdmVJdGVtIiwiZGVsIiwic2VhcmNoIiwicmVxIiwiRmlsZXNNb2RlbCIsImdldEl0ZW1zIiwiZG93bmxvYWRJdGVtIiwiTGlrZXNNb2RlbCIsImdldExpa2VzIiwiYWRkTGlrZSIsInJlbW92ZUxpa2UiLCJPcmRlcnNNb2RlbCIsIm9yZGVyIiwicmVtb3ZlVXNlck9yZGVycyIsIm9yZGVyc1RvUmVtb3ZlIiwicmVtb3ZlIiwiVXNlcnNNb2RlbCIsImdldFJlYWRlcnMiLCJnZXRJdGVtIiwiTXlBcHAiLCJkZWZhdWx0cyIsIkFQUE5BTUUiLCJWRVJTSU9OIiwiQlVJTERfQVNfTU9EVUxFIiwiUFJPRFVDVElPTiIsIm5hdiIsInVybFBhcnRzIiwidGFyZ2V0UGFydCIsImVsIiwicm9sZSIsImpzb24iLCJsb2ciLCJfZXJyb3IiLCJNb2RlbCIsInN1Y2Nlc3NBY3Rpb24iLCJuZXdEYXRhIiwidG9nZ2xlRWxlbWVudCIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJoaWRlIiwiY29tYmluZVVzZXJOYW1lc0luQXJyIiwianNvbk9iaiIsInVzZXJzQXJyIiwibWFwIiwidXNlcl9uYW1lIiwidXNlcl9zdXJuYW1lIiwiYXV0b2hlaWdodCIsImJvcmRlcmxlc3MiLCJoZWlnaHQiLCJsaXN0IiwiVG9wVmlldyIsImhlYWRlciIsIndpZHRoIiwiZHRhYmxlIiwiY29sdW1ucyIsImhpZGRlbiIsImZpbGxzcGFjZSIsIm9uQ2xpY2siLCJfdXNlckZvcm0iLCJzaG93V2luZG93IiwiYWRkVXNlckJ0biIsImNsaWNrIiwiYWRkVXNlciIsInJvd3MiLCJjb2xzIiwidXNlcnNNb2RlbCIsImRiRGF0YSIsInVzZXJzRGF0YSIsImF1dGhvcml6YXRpb24iLCJmb3JtYXQiLCJkYXRlVG9TdHIiLCJjdXJyZW50RGF0ZSIsIlVzZXJGb3JtIiwiaGVhZCIsInBvc2l0aW9uIiwiZWxlbWVudHMiLCJsYWJlbCIsImxhYmVsV2lkdGgiLCJsYWJlbEFsaWduIiwicnVsZXMiLCJpc05vdEVtcHR5IiwibWFyZ2luIiwicGFkZGluZ1kiLCJzYXZlRm9ybSIsImhpZGVXaW5kb3ciLCJmb3JtIiwiZ2V0SGVhZCIsImNvbnZlcnRVc2VyQml0aERhdGUiLCJzZXRWYWx1ZXMiLCJpbml0aWFsUGFzc3dvcmQiLCJiaXJ0aF9kYXRlIiwiZ2V0VmFsdWVzIiwidmFsaWRhdGUiLCJjbGVhclZhbGlkYXRpb24iLCJMaWJyYXJ5IiwibGlicmFyeUNvbmZpZyIsImJvb2tDYXJkIiwiY3NzIiwic29ydCIsImVib29rIiwic2NoZW1lIiwieWVhck9mUHVibGljYXRpb24iLCJfYm9va0NhcmQiLCJzaG93UG9wdXAiLCJyZW1vdmVCb29rIiwicGxhY2Vob2xkZXIiLCJvbkVudGVyIiwib25TZWFyY2hJY29uQ2xpY2siLCJzYXZlUERGIiwidG9QREYiLCJmaWxlbmFtZSIsInNhdmVET0NYIiwiZ3JpZCIsImdldENvbHVtbkNvbmZpZyIsInJlZnJlc2hDb2x1bW5zIiwiZ2V0RGF0YSIsImdldEZpbGVzIiwiY2hlY2tGaWxlcyIsImJvb2tzQXJyIiwiYm9va3NNb2RlbCIsImZpbGVzTW9kZWwiLCJmaWxlc0FyciIsImJvb2siLCJpc0ZpbGVzIiwiZmluZCIsImFkZEJvb2siLCJzZWFyY2hJbnB1dCIsImNsZWFyQWxsIiwiZHREYXRhIiwic2VyaWFsaXplIiwiZG9jRGF0YSIsImRhdGVGb3JtYXQiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsImRvd25sb2FkIiwiYmxvYiIsIkJsb2IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsIkJvb2tDYXJkIiwiYm9va0NvdmVyIiwiYWRkVGV4dEZpbGUiLCJhdXRvc2VuZCIsImZvcm1EYXRhIiwiYWNjZXB0IiwidXBsb2FkIiwiZmlsZXNMaXN0IiwiYWRkQXVkaW9GaWxlIiwiYXVkaW9MaXN0IiwiYXZhaWxhYmxlVGV4dEZpbGVzIiwiZXYiLCJyZW1vdmVGaWxlIiwiYXZhaWxhYmxlQXVkaW9GaWxlcyIsInNhdmVCdG4iLCJtYXhIZWlnaHQiLCJwYWRkaW5nWCIsImR0TGlicmFyeSIsImNsZWFyRm9ybSIsImJvb2tEYXRhIiwiZmlsZXMiLCJ0ZXh0RmlsZXMiLCJhdWRpb0ZpbGVzIiwiZmlsZSIsImRhdGFUeXBlIiwiY292ZXJQaG90byIsInNlbmQiLCJ0YXJnZXRMaXN0IiwibWVudSIsImljb24iLCJvbk1lbnVJdGVtQ2xpY2siLCJsaWJMaWJyYXJ5IiwiYWRkQm9va0J0biIsImxpYnJhcnkiLCJPcmRlcnNGb3JtIiwibW92ZSIsInBhZGRpbmciLCJzdWdnZXN0IiwidXNlck5hbWUiLCJyb3ciLCJvcmRlcnNMaXN0Iiwib3JkZXJzTW9kZWwiLCJyZXN1bHRzIiwib3JkZXJzIiwiaW5jb21pbmdPcmRlcnMiLCJib29rVGl0bGUiLCJhdXRob3JOYW1lIiwiZGVmaW5lIiwib3V0Y29taW5nT3JkZXJzIiwiVXNlcnNWaWV3IiwibWluV2lkdGgiLCJzaG93VXNlck9yZGVycyIsImZ1bGxfbmFtZSIsImVkaXRPcmRlcnMiLCJzZWxlY3RlZEl0ZW0iLCJMb2dpblBhZ2UiLCJsb2dpbkZvcm0iLCJ1c2VyRGF0YSIsInJvbGVfbmFtZSIsInJlYWRvbmx5Iiwib25JdGVtQ2xpY2siLCJib29rTmFtZSIsIm9yZGVyQm9vayIsImRvd25sb2FkQm9vayIsImxpa2VCb29rIiwibGlrZUJ1dHRvbiIsImF1ZGlvc0xpc3QiLCJvcmRlckJ0biIsImNvdW50X2xpa2VzIiwiYXZhaWxhYmxlQ29waWVzIiwidG9nZ2xlTGlrZSIsInRvZ2dsZU9yZGVyIiwib3JkZXJEYXRlIiwic2V0T3JkZXJlZFZhbCIsImRpc2FibGUiLCJ1bnNldE9yZGVyZWRWYWwiLCJlbmFibGUiLCJvcmRlcmVkIiwibGlrZXNNb2RlbCIsInVuc2V0TGlrZSIsInNldExpa2UiLCJyZWFkZXJMaWJyYXJ5IiwiTWFpblZpZXciLCJ0ZXN0UmVzdWx0cyIsImJ1dHRvbiIsImlucHV0V2lkdGgiLCJwYXJzZUJvb2tzIiwib3JkZXJzQXJyIiwiU2V0dGluZ3MiLCJsYWJlbFJpZ2h0IiwiYm9va1RvcHMiLCJzaG93T2xkZXN0Qm9va3MiLCJzaG93TmV3ZXN0Qm9va3MiLCJzaG93TW9zdFBhZ2VzQm9va3MiLCJzaG93Qm9va3NXaXRoTG9uZ05hbWVzIiwic2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzIiwieWVhcl9vZl9wdWJsaWNhdGlvbiIsImRlZmF1bHRDb25maWciLCJiIiwic2hvd1Jlc3VsdHMiLCJudW1iZXJfb2ZfcGFnZXMiLCJib29rX3RpdGxlIiwiYXV0aG9ycyIsImZpbmRJbmRleCIsImF1dGhvciIsImF1dGhvcl9uYW1lIiwiYm9va3NDb3VudCIsIlJlZ2lzdGVyUGFnZSIsInBhc3N3b3JkUnVsZSIsInJlIiwiZW1haWxSdWxlIiwiaXNFbWFpbCIsInJlZ2lzdGVyRm9ybSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJy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QUwsQ0FBUSxjQUFSLENBQWI7O0FBRUEsT0FBS0EsRUFBTCxDQUFRLGFBQVIsRUFBdUJRLFdBQXZCLENBQW1DLGFBQW5DLEVBQWtELFlBQU07QUFDdkQsT0FBTTdILFNBQVNpbUIsS0FBS00sU0FBTCxFQUFmOztBQUVBLE9BQUdOLEtBQUtPLFFBQUwsRUFBSCxFQUFvQjtBQUNuQixRQUFNeEIsZ0JBQWdCLElBQUlwRixzREFBSixFQUF0Qjs7QUFFQW9GLGtCQUFjbkYsUUFBZCxDQUF1QjdmLE1BQXZCLEVBQStCd0IsSUFBL0IsQ0FBb0MsVUFBQ21NLFFBQUQsRUFBYztBQUNqRCxTQUFNZ08sU0FBU2hPLFNBQVMrVSxJQUFULEdBQWdCL0csTUFBL0I7QUFDQSxTQUFNbFYsS0FBS2tILFNBQVMrVSxJQUFULEdBQWdCamMsRUFBM0I7QUFDQSxTQUFJa1YsV0FBVyxDQUFmLEVBQWtCO0FBQ2pCLGFBQUs5VSxJQUFMLHNCQUE2QkosRUFBN0I7QUFDQSxNQUZELE1BR0s7QUFDSixVQUFHa0gsU0FBUytVLElBQVQsR0FBZ0JrTyxNQUFoQixLQUEyQixXQUE5QixFQUEyQztBQUMxQyxjQUFLL3BCLElBQUwsQ0FBVSxRQUFWO0FBQ0E7QUFDRGxCLFlBQU1rSCxPQUFOLENBQWNjLFNBQVMrVSxJQUFULEdBQWdCcFIsSUFBOUI7QUFDQTtBQUNELEtBWkQ7QUFhQTtBQUNELEdBcEJEO0FBcUJBLEU7OztFQXBGd0M5RixpRDs7QUFBckI0a0IsMkUiLCJmaWxlIjoibXlhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2VzL215YXBwLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJjbGFzcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHdlYml4KSB7XHJcbiAgICAgICAgdGhpcy53ZWJpeEpldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53ZWJpeCA9IHdlYml4O1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb290O1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuYXBwID0gdGhpcy5fcGFyZW50ID0gdGhpcy5fcm9vdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbShpZCwgdmFsdWUsIHVybCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kYXRhW2lkXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVtpZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoaWQsIHZhbHVlLCAwKTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UGFyYW0oaWQsIHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZGF0YVtpZF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCAhcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmdldFBhcmFtKGlkLCBwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGFyZW50VmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG4gICAgJCQoaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3QucXVlcnlWaWV3KChvYmogPT4gKG9iai5jb25maWcuaWQgPT09IGlkIHx8IG9iai5jb25maWcubG9jYWxJZCA9PT0gaWQpICYmXHJcbiAgICAgICAgICAgICAgICAob2JqLiRzY29wZSA9PT0gcm9vdC4kc2NvcGUpKSwgXCJzZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uKG9iaiwgbmFtZSwgY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gb2JqLmF0dGFjaEV2ZW50KG5hbWUsIGNvZGUpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKHsgb2JqLCBpZCB9KTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICBjb250YWlucyh2aWV3KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBraWQgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgaWYgKGtpZCA9PT0gdmlldyB8fCBraWQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ViLnN1YnZpZXcudmlldztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3SW5mbyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1tuYW1lIHx8IFwiZGVmYXVsdFwiXTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1YnZpZXc6IHN1YiwgcGFyZW50OiB0aGlzIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzW25hbWVdID0geyB1cmw6IFwiXCIsIGlkOiBudWxsLCBwb3B1cDogdHJ1ZSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBhIGNoaWxkIHZpZXcsIHNlYXJjaGVzIGZvciBuZWFyZXN0IHBhcmVudCB3aXRoIHN1YnZpZXdcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgX2RldGFjaEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGV2ZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBldmVudHNbaV0ub2JqLmRldGFjaEV2ZW50KGV2ZW50c1tpXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lTdWJzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgc3ViIHZpZXdzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJWaWV3ID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIC8vIGl0IHBvc3NpYmxlIHRoYXQgc3VidmlldyB3YXMgbm90IGxvYWRlZCB3aXRoIGFueSBjb250ZW50IHlldFxyXG4gICAgICAgICAgICAvLyBzbyBjaGVjayBvbiBudWxsXHJcbiAgICAgICAgICAgIGlmIChzdWJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJWaWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgIH1cclxuICAgIF9pbml0X3VybF9kYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLl9kYXRhLCB1cmwucGFyYW1zLCB0cnVlKTtcclxuICAgIH1cclxuICAgIF9nZXREZWZhdWx0U3ViKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnMuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghc3ViLmJyYW5jaCAmJiBzdWIudmlldyAmJiBrZXkgIT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHN1Yi52aWV3Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcm91dGVkX3ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YiA9IHBhcmVudC5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgIGlmICghc3ViICYmIHN1YiAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnQuX3JvdXRlZF92aWV3KCk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gcGFyc2UodXJsKSB7XHJcbiAgICAvLyByZW1vdmUgc3RhcnRpbmcgL1xyXG4gICAgaWYgKHVybFswXSA9PT0gXCIvXCIpIHtcclxuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgLy8gc3BsaXQgdXJsIGJ5IFwiL1wiXHJcbiAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgIC8vIGZvciBlYWNoIHBhZ2UgaW4gdXJsXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGVzdCA9IHBhcnRzW2ldO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIC8vIGRldGVjdCBwYXJhbXNcclxuICAgICAgICAvLyBzdXBwb3J0IG9sZCBcdFx0XHRzb21lOmE9YjpjPWRcclxuICAgICAgICAvLyBhbmQgbmV3IG5vdGF0aW9uXHRcdHNvbWU/YT1iJmM9ZFxyXG4gICAgICAgIGxldCBwb3MgPSB0ZXN0LmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRlc3QuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRlc3Quc3Vic3RyKHBvcyArIDEpLnNwbGl0KC9bXFw6XFw/XFwmXS9nKTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGhhc2ggb2YgbmFtZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkY2h1bmsgPSBwYXJhbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbZGNodW5rWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChkY2h1bmtbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN0b3JlIHBhcnNlZCB2YWx1ZXNcclxuICAgICAgICBjaHVua3NbaV0gPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IChwb3MgPiAtMSA/IHRlc3Quc3Vic3RyKDAsIHBvcykgOiB0ZXN0KSxcclxuICAgICAgICAgICAgcGFyYW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgIGlzTmV3OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBwYWdlIG9iamVjdHNcclxuICAgIHJldHVybiBjaHVua3M7XHJcbn1cclxuZnVuY3Rpb24gdXJsMnN0cihzdGFjaykge1xyXG4gICAgY29uc3QgdXJsID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIHN0YWNrKSB7XHJcbiAgICAgICAgdXJsLnB1c2goXCIvXCIgKyBjaHVuay5wYWdlKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBvYmoyc3RyKGNodW5rLnBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICB1cmwucHVzaChcIj9cIiArIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybC5qb2luKFwiXCIpO1xyXG59XHJcbmZ1bmN0aW9uIG9iajJzdHIob2JqKSB7XHJcbiAgICBjb25zdCBzdHIgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ci5wdXNoKFwiJlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyLnB1c2goa2V5ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbihcIlwiKTtcclxufVxuXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZSwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnNlKHJvdXRlKSxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHJvdXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIGN1cnJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIHRoaXMuX25leHRdO1xyXG4gICAgfVxyXG4gICAgc3VidXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUodGhpcy5yb3V0ZSwgdGhpcy5pbmRleCArIHRoaXMuX25leHQpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIDE7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSB1cmwyc3RyKHRoaXMuc3VidXJsKCkpO1xyXG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIuc3Vic3RyKDEpIDogXCJcIjtcclxuICAgIH1cclxuICAgIF9qb2luKHBhdGgsIGtpZHMpIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgaWYgKHBhdGggPT09IG51bGwpIHsgLy8gY2hhbmdlIG9mIHBhcmFtZXRlcnMsIHJvdXRlIGVsZW1lbnRzIGFyZSBub3QgYWZmZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgdXJsID0gb2xkLnNsaWNlKDAsIHRoaXMuaW5kZXggKyAoa2lkcyA/IHRoaXMuX25leHQgOiAwKSk7XHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLmNvbmNhdChwYXJzZShwYXRoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLnZpZXcgPSBvbGRbaV0udmlldztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0gJiYgdXJsW2ldLnBhZ2UgPT09IG9sZFtpXS5wYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIGFwcGVuZChwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUucGF0aDtcclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgdmlldywga2lkcykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwga2lkcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtOiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSB2aWV3ID8gdmlldy5hcHAgOiBudWxsO1xyXG4gICAgICAgICAgICAvLyB3aGVuIGNyZWF0aW5nIGEgbmV3IHJvdXRlLCBpdCBwb3NzaWJsZSB0aGF0IGl0IHdpbGwgbm90IGhhdmUgYW55IGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gZ3VhcmQgaXMgbm90IG5lY2Vzc2FyeSBpbiBzdWNoIGNhc2VcclxuICAgICAgICAgICAgaWYgKGFwcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXBwLmNhbGxFdmVudChcImFwcDpndWFyZFwiLCBbb2JqLnJlZGlyZWN0LCB2aWV3LCBvYmpdKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtLmNhdGNoKCgpID0+IG9iai5yZWRpcmVjdCA9IG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgIT09IHJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNob3cob2JqLnJlZGlyZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSByZWRpcmVjdDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2l6ZShuKSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IG47XHJcbiAgICB9XHJcbiAgICBzcGxpdCgpIHtcclxuICAgICAgICBjb25zdCByb3V0ZSA9IHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4ICsgMSksXHJcbiAgICAgICAgICAgIHBhdGg6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyb3V0ZS51cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLnBhdGggPSB1cmwyc3RyKHJvdXRlLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUocm91dGUsIDApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIChpbmRleCB8fCAwKV07XHJcbiAgICAgICAgaWYgKCFjaHVuaykge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlLnVybC5wdXNoKHsgcGFnZTogXCJcIiwgcGFyYW1zOiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhZ2UgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhcmFtc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHRoaXMucm91dGUudXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBKZXRWaWV3IGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcC53ZWJpeCk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgLy90aGlzLiRjb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIHVpKHVpLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciB8fCB1aS5jb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgamV0dmlldyA9IHRoaXMuYXBwLmNyZWF0ZVZpZXcodWkpO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goamV0dmlldyk7XHJcbiAgICAgICAgamV0dmlldy5yZW5kZXIoY29udGFpbmVyLCB0aGlzLl9zZWdtZW50LCB0aGlzKTtcclxuICAgICAgICBpZiAodHlwZW9mIHVpICE9PSBcIm9iamVjdFwiIHx8ICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIC8vIHJhdyB3ZWJpeCBVSVxyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3LmdldFJvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICAvLyBjb252ZXJ0IHBhcmFtZXRlcnMgb2JqZWN0IHRvIHVybFxyXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtKGtleSwgcGF0aFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGlnYXRlIHRvIGFwcCBpbiBjYXNlIG9mIHJvb3QgcHJlZml4XHJcbiAgICAgICAgICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxvY2FsIHBhdGgsIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGFyZW50IHBhdGgsIGNhbGwgcGFyZW50IHZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4uL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaG93KHBhdGguc3Vic3RyKDMpLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoLnN1YnN0cigzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhjb25maWcudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Yi5wYXJlbnQgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViLnBhcmVudC5zaG93KHBhdGgsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25maWcudGFyZ2V0ICYmIGNvbmZpZy50YXJnZXQgIT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZyYW1lTG9jayhjb25maWcudGFyZ2V0LCBzdWIuc3VidmlldywgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3codGhpcy5fc2VnbWVudCwgcGF0aCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBfc2hvdyhzZWdtZW50LCBwYXRoLCB2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQuc2hvdyhwYXRoLCB2aWV3LCB0cnVlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmdldFJvdXRlcigpLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFtzZWdtZW50LnJvdXRlLnBhdGhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdChfJHZpZXcsIF8kKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgcmVhZHkoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmFwcC53ZWJpeC5tZXNzYWdlKFwiVmlldzpDb25maWcgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdXJsQ2hhbmdlKF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICAvLyBkZXN0cm95IGFjdHVhbCBVSVxyXG4gICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLmFwcCwgdGhpcywgY29uZmlnKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50LnJlZnJlc2goKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHRoaXMuX3NlZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID8gdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOiByb290O1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IF9jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4gdGhpcy5nZXRSb290KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXIodXJsKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcoKTtcclxuICAgICAgICBpZiAoY29uZmlnLnRoZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy50aGVuKGNmZyA9PiB0aGlzLl9yZW5kZXJfZmluYWwoY2ZnLCB1cmwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpIHtcclxuICAgICAgICAvLyBnZXQgcHJldmlvdXMgdmlldyBpbiB0aGUgc2FtZSBzbG90XHJcbiAgICAgICAgbGV0IHNsb3QgPSBudWxsO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzaG93ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICBzbG90ID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICBpZiAoc2xvdC5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy53ZWJpeC4kJChzbG90LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB2aWV3IGFscmVhZHkgZGVzdHJveWVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmFwcCB8fCAhY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICAvLyB1c2luZyB3cmFwcGVyIG9iamVjdCwgc28gdWkgY2FuIGJlIGNoYW5nZWQgZnJvbSBhcHA6cmVuZGVyIGV2ZW50XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyB1aToge30gfTtcclxuICAgICAgICB0aGlzLmFwcC5jb3B5Q29uZmlnKGNvbmZpZywgcmVzdWx0LnVpLCB0aGlzLl9zdWJzKTtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cmVuZGVyXCIsIFt0aGlzLCB1cmwsIHJlc3VsdF0pO1xyXG4gICAgICAgIHJlc3VsdC51aS4kc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIC8qIGRlc3Ryb3kgb2xkIEhUTUwgYXR0YWNoZWQgdmlld3MgYmVmb3JlIGNyZWF0aW5nIG5ldyBvbmUgKi9cclxuICAgICAgICBpZiAoIXNsb3QgJiYgY3VycmVudC5pc05ldyAmJiBjdXJyZW50LnZpZXcpIHtcclxuICAgICAgICAgICAgY3VycmVudC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBmb3IgYWRkaW5nIGluc2lkZSBvZiBtdWx0aXZpZXcgLSBwcmVzZXJ2ZSBvbGQgaWRcclxuICAgICAgICAgICAgaWYgKHNsb3QgJiYgIXNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZHVpID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gb2xkdWkuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubmFtZSA9PT0gXCJtdWx0aXZpZXdcIiAmJiAhcmVzdWx0LnVpLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVpLmlkID0gb2xkdWkuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLmFwcC53ZWJpeC51aShyZXN1bHQudWksIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzV2luID0gdGhpcy5fcm9vdDtcclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHVybCBhZGRlZCB0byBpZ25vcmUgdGhpcy51aSBjYWxsc1xyXG4gICAgICAgICAgICBpZiAoc2hvdyAmJiBhc1dpbi5zZXRQb3NpdGlvbiAmJiAhYXNXaW4uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIGFzV2luLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjaGVjaywgaWYgd2UgYXJlIHJlcGxhY2luZyBzb21lIG9sZGVyIHZpZXdcclxuICAgICAgICAgICAgaWYgKHNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbG90LnZpZXcgJiYgc2xvdC52aWV3ICE9PSB0aGlzICYmIHNsb3QudmlldyAhPT0gdGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xvdC5pZCA9IHRoaXMuX3Jvb3QuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGFyZW50VmlldygpIHx8ICF0aGlzLmFwcC5hcHApXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgaGF2ZSBzdWJhcHAsIHNldCB3aG9sZSBhcHAgYXMgYSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gb24gZGVzdHJ1Y3Rpb24sIHRoZSB3aG9sZSBhcHAgd2lsbCBiZSBkZXN0cm95ZWRcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzLmFwcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc05ldykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9pbml0KHRoaXMuX3Jvb3QsIHVybCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRVcmwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KHRoaXMuX3Jvb3QsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5jYXRjaChlcnIgPT4gdGhpcy5faW5pdEVycm9yKHRoaXMsIGVycikpO1xyXG4gICAgfVxyXG4gICAgX2luaXQodmlldywgdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCh2aWV3LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgfVxyXG4gICAgX3VybENoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6dXJsY2hhbmdlXCIsIFt0aGlzLCB0aGlzLl9zZWdtZW50XSk7XHJcbiAgICAgICAgY29uc3Qgd2FpdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBjb25zdCB3YWl0ID0gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIG51bGwpO1xyXG4gICAgICAgICAgICBpZiAod2FpdCkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHMucHVzaCh3YWl0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwod2FpdHMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxDaGFuZ2UodGhpcy5fcm9vdCwgdGhpcy5fc2VnbWVudC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvLyBpZiBzdWJ2aWV3IGlzIG5vdCBvY2N1cGllZCBieSBzb21lIHJlbmRlcmluZyB5ZXRcclxuICAgICAgICBpZiAoIWZyYW1lLmxvY2spIHtcclxuICAgICAgICAgICAgLy8gcmV0cmVpdmUgYW5kIHN0b3JlIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5fcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBsb2NrIGFmdGVyIGZyYW1lIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgLy8gYXMgcHJvbWlzZS5maW5hbGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgIFdlYml4IGxlc3NlciB0aGFuIDYuMlxyXG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgYSBtb3JlIHZlcmJvc2Ugbm90YXRpb25cclxuICAgICAgICAgICAgICAgIGZyYW1lLmxvY2sgPSBsb2NrLnRoZW4oKCkgPT4gZnJhbWUubG9jayA9IG51bGwsICgpID0+IGZyYW1lLmxvY2sgPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgcmV0dXJuIGZyYW1lLmxvY2s7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vZGVmYXVsdCByb3V0ZVxyXG4gICAgICAgIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWdtZW50Lm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5leHQgc2VnbWVudCBpbiB1cmwsIHJlbmRlciBpdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIHRoaXMuX3NlZ21lbnQuc2hpZnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWUudmlldyAmJiBmcmFtZS5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gbmV4dCBzZWdtZW50LCBkZWxldGUgdGhlIGV4aXN0aW5nIHN1Yi12aWV3XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgbmV3IHBhdGggcHJvdmlkZWQsIHNldCBpdCB0byB0aGUgZnJhbWVcclxuICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmcmFtZS51cmwgPSBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbiBjYXNlIG9mIHJvdXRlZCBzdWItdmlld1xyXG4gICAgICAgIGlmIChmcmFtZS5yb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV3IHBhdGggZm9yIHN1Yi12aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWUucm91dGUuc2hvdyhwYXRoLCBmcmFtZS52aWV3KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gbm90IHRyaWdnZXIgb25DaGFuZ2UgZm9yIGlzb2xhdGVkIHN1Yi12aWV3c1xyXG4gICAgICAgICAgICBpZiAoZnJhbWUuYnJhbmNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpZXcgPSBmcmFtZS52aWV3O1xyXG4gICAgICAgIC8vIGlmIHZpZXcgZG9lc24ndCBleGlzdHMgeWV0LCBpbml0IGl0XHJcbiAgICAgICAgaWYgKCF2aWV3ICYmIGZyYW1lLnVybCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nLCBzbyB3ZSBoYXZlIGlzb2xhdGVkIHN1YnZpZXcgdXJsXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5yb3V0ZSA9IG5ldyBSb3V0ZShmcmFtZS51cmwsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG9iamVjdCwgc28gd2UgaGF2ZSBhbiBlbWJlZGVkIHN1YnZpZXdcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcImZ1bmN0aW9uXCIgJiYgISh2aWV3IGluc3RhbmNlb2YgZnJhbWUudXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBuZXcgZnJhbWUudXJsKHRoaXMuYXBwLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBmcmFtZS51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHJpZ2dlciBvbkNoYW5nZSBmb3IgYWxyZWFkeSBleGlzdGVkIHZpZXdcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoZnJhbWUsIChmcmFtZS5yb3V0ZSB8fCB0aGlzLl9zZWdtZW50KSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2luaXRFcnJvcih2aWV3LCBlcnIpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBpZiB2aWV3IGlzIGRlc3Ryb3llZCwgaWdub3JlIGFueSB2aWV3IHJlbGF0ZWQgZXJyb3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAuZXJyb3IoXCJhcHA6ZXJyb3I6aW5pdHZpZXdcIiwgW2Vyciwgdmlld10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTdWJWaWV3KHN1Yiwgc3VidXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmNyZWF0ZUZyb21VUkwoc3VidXJsLmN1cnJlbnQoKSwgc3ViLnZpZXcpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihzdWIsIHN1YnVybCwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveUtpZHMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBjaGlsZCB2aWV3c1xyXG4gICAgICAgIGNvbnN0IHVpcyA9IHRoaXMuX2NoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB1aXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHVpc1tpXSAmJiB1aXNbaV0uZGVzdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdWlzW2ldLmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB2YXJzIGZvciBiZXR0ZXIgR0MgcHJvY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbn1cblxuLy8gd3JhcHBlciBmb3IgcmF3IG9iamVjdHMgYW5kIEpldCAxLnggc3RydWN0c1xyXG5jbGFzcyBKZXRWaWV3UmF3IGV4dGVuZHMgSmV0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl91aSA9IGNvbmZpZy51aTtcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3ViUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBjb25zdCBhID0gdGhpcy5hcHA7XHJcbiAgICAgICAgYS5hcHAuZ2V0Um91dGVyKCkuc2V0KGEuX3NlZ21lbnQuYXBwZW5kKHRoaXMucGF0aCksIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxubGV0IF9vbmNlID0gdHJ1ZTtcclxuY2xhc3MgSmV0QXBwQmFzZSBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViaXggPSAoY29uZmlnIHx8IHt9KS53ZWJpeCB8fCB3aW5kb3cud2ViaXg7XHJcbiAgICAgICAgc3VwZXIod2ViaXgpO1xyXG4gICAgICAgIC8vIGluaXQgY29uZmlnXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLndlYml4LmV4dGVuZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwXCIsXHJcbiAgICAgICAgICAgIHZlcnNpb246IFwiMS4wXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBcIi9ob21lXCJcclxuICAgICAgICB9LCBjb25maWcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5jb25maWcuYXBwO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMsIHRoaXMud2ViaXguRXZlbnRTeXN0ZW0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTZXJ2aWNlKG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IG9iaih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHNldFNlcnZpY2UobmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzW25hbWVdID0gaGFuZGxlcjtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJWaWV3KCkuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIC8vIGNvcHkgb2JqZWN0IGFuZCBjb2xsZWN0IGV4dHJhIGhhbmRsZXJzXHJcbiAgICBjb3B5Q29uZmlnKG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICAvLyByYXcgdWkgY29uZmlnXHJcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEpldEJhc2UgfHxcclxuICAgICAgICAgICAgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiBvYmoucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgb2JqID0geyAkc3Vidmlldzogb2JqIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1YnZpZXcgcGxhY2Vob2xkZXJcclxuICAgICAgICBpZiAodHlwZW9mIG9iai4kc3VidmlldyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHByb2Nlc3Mgc3ViLXByb3BlcnRpZXNcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgKG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2QgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG9ialttZXRob2RdO1xyXG4gICAgICAgICAgICAvLyB2aWV3IGNsYXNzXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgPT09IFwiZnVuY3Rpb25cIiAmJiBwb2ludC5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludCA9IHsgJHN1YnZpZXc6IHBvaW50IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvaW50ICYmIHR5cGVvZiBwb2ludCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgIShwb2ludCBpbnN0YW5jZW9mIHRoaXMud2ViaXguRGF0YUNvbGxlY3Rpb24pICYmICEocG9pbnQgaW5zdGFuY2VvZiBSZWdFeHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBuZXcgRGF0ZShwb2ludCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb3B5Q29uZmlnKHBvaW50LCAocG9pbnQgaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBnZXRSb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlcjtcclxuICAgIH1cclxuICAgIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmlnZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LmFwcC50cmlnZ2VyKHRyaWdnZXIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvdXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5zaG93KHJvdXRlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5nZXRSb290KCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkucmVmcmVzaCgpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZFZpZXcodXJsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLmNvbmZpZy52aWV3cztcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAodXJsID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fbG9hZEVycm9yKFwiXCIsIG5ldyBFcnJvcihcIldlYml4IEpldDogRW1wdHkgdXJsIHNlZ21lbnRcIikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHZpZXdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpZXdzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b20gbG9hZGluZyBzdHJhdGVneVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmVkZWZpbmVkIGhhc2hcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3c1t1cmxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gXCJfYmxhbmtcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZFZpZXdEeW5hbWljKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZEVycm9yKHVybCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGN1c3RvbSBoYW5kbGVyIGNhbiByZXR1cm4gdmlldyBvciBpdHMgcHJvbWlzZVxyXG4gICAgICAgIGlmICghcmVzdWx0LnRoZW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0XHJcbiAgICAgICAgICAgIC50aGVuKG1vZHVsZSA9PiBtb2R1bGUuX19lc01vZHVsZSA/IG1vZHVsZS5kZWZhdWx0IDogbW9kdWxlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuX2xvYWRFcnJvcih1cmwsIGVycikpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBfZm9yVmlldyh0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy53ZWJpeC4kJCh0YXJnZXQpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIodmlldy4kc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVGcm9tVVJMKGNodW5rLCBub3cpIHtcclxuICAgICAgICBsZXQgdmlldztcclxuICAgICAgICBpZiAoY2h1bmsuaXNOZXcgfHwgIWNodW5rLnZpZXcpIHtcclxuICAgICAgICAgICAgdmlldyA9IHRoaXMubG9hZFZpZXcoY2h1bmsucGFnZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHVpID0+IHRoaXMuY3JlYXRlVmlldyh1aSwgbmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmlldyA9IFByb21pc2UucmVzb2x2ZShjaHVuay52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVWaWV3KHVpLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuICAgICAgICBpZiAodHlwZW9mIHVpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEFwcEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHsgYXBwOiB0aGlzLCBuYW1lLCByb3V0ZXI6IFN1YlJvdXRlciB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh0aGlzLCB7IG5hbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBmYWN0b3J5IGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICAgICAgdWkgPSB1aSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHVpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVUkgb2JqZWN0XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyBKZXRWaWV3UmF3KHRoaXMsIHsgbmFtZSwgdWkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBzaG93IHZpZXcgcGF0aFxyXG4gICAgc2hvdyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5fY29udGFpbmVyLCAodXJsIHx8IHRoaXMuY29uZmlnLnN0YXJ0KSk7XHJcbiAgICB9XHJcbiAgICAvLyBldmVudCBoZWxwZXJzXHJcbiAgICB0cmlnZ2VyKG5hbWUsIC4uLnJlc3QpIHtcclxuICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgfVxyXG4gICAgYXBwbHkobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJpeC5iaW5kKGZ1bmN0aW9uICguLi5yZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbihuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudChuYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLCBudWxsLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IobmFtZSwgZXIpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBlcik7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6ZXJyb3JcIiwgZXIpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyW2ldIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGVyW2ldLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihcIk1vZHVsZSBidWlsZCBmYWlsZWRcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFx4MWJcXFtbMC05O10qbS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHByZSBzdHlsZT0nZm9udC1zaXplOjE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNlYzY4NzM7IGNvbG9yOiAjMDAwOyBwYWRkaW5nOjEwcHg7Jz4ke3RleHR9PC9wcmU+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCI8YnI+PGJyPkNoZWNrIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlsc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndlYml4Lm1lc3NhZ2UoeyB0eXBlOiBcImVycm9yXCIsIHRleHQ6IHRleHQsIGV4cGlyZTogLTEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICB9XHJcbiAgICAvLyByZW5kZXJzIHRvcCB2aWV3XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID9cclxuICAgICAgICAgICAgdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOlxyXG4gICAgICAgICAgICAocm9vdCB8fCBkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICBjb25zdCBmaXJzdEluaXQgPSAhdGhpcy4kcm91dGVyO1xyXG4gICAgICAgIGxldCBwYXRoID0gbnVsbDtcclxuICAgICAgICBpZiAoZmlyc3RJbml0KSB7XHJcbiAgICAgICAgICAgIGlmIChfb25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5hdHRhY2hFdmVudChcIm9uQ2xpY2tcIiwgZSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgICAgICAgICBfb25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50ID0gdGhpcy5fZmlyc3Rfc3RhcnQodXJsKTtcclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudC5yb3V0ZS5saW5rUm91dGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC5zcGxpdCgpLnJvdXRlLnBhdGggfHwgdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRTdWJWaWV3KCk7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuX3N1YlNlZ21lbnQ7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSBzZWdtZW50LnNob3cocGF0aCwgdG9wKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmNyZWF0ZUZyb21VUkwoc2VnbWVudC5jdXJyZW50KCksIHRvcCkpXHJcbiAgICAgICAgICAgIC50aGVuKHZpZXcgPT4gdmlldy5yZW5kZXIocm9vdCwgc2VnbWVudCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJhc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0aGlzLnJlYWR5LnRoZW4oKCkgPT4gcmVhZHkpO1xyXG4gICAgICAgIHJldHVybiByZWFkeTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuX3N1YlNlZ21lbnQuY3VycmVudCgpLnZpZXc7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSmV0Vmlldyh0aGlzLCB7fSk7XHJcbiAgICB9XHJcbiAgICBfZmlyc3Rfc3RhcnQocm91dGUpIHtcclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gcm91dGU7XHJcbiAgICAgICAgY29uc3QgY2IgPSAoYSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhhKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIgPSBuZXcgKHRoaXMuY29uZmlnLnJvdXRlcikoY2IsIHRoaXMuY29uZmlnLCB0aGlzKTtcclxuICAgICAgICAvLyBzdGFydCBhbmltYXRpb24gZm9yIHRvcC1sZXZlbCBhcHBcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5ICYmIHRoaXMuY29uZmlnLmFuaW1hdGlvbiAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLnJlbW92ZUNzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBcIik7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyBpZiBubyB1cmwgZGVmaW5lZCwgY2hlY2sgcm91dGVyIGZpcnN0XHJcbiAgICAgICAgICAgIGxldCB1cmxTdHJpbmcgPSB0aGlzLiRyb3V0ZXIuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmICghdXJsU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxTdHJpbmcgPSB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQodXJsU3RyaW5nLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh1cmxTdHJpbmcsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICByb3V0ZS5jdXJyZW50KCkudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUuc3BsaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHRoaXMuY29uZmlnLnN0YXJ0LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICB9XHJcbiAgICAvLyBlcnJvciBkdXJpbmcgdmlldyByZXNvbHZpbmdcclxuICAgIF9sb2FkRXJyb3IodXJsLCBlcnIpIHtcclxuICAgICAgICB0aGlzLmVycm9yKFwiYXBwOmVycm9yOnJlc29sdmVcIiwgW2VyciwgdXJsXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdGVtcGxhdGU6IFwiIFwiIH07XHJcbiAgICB9XHJcbiAgICBhZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBvYmouJHN1YnZpZXcgIT09IHRydWUgPyBvYmouJHN1YnZpZXcgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYmoubmFtZSB8fCAodXJsID8gdGhpcy53ZWJpeC51aWQoKSA6IFwiZGVmYXVsdFwiKTtcclxuICAgICAgICB0YXJnZXQuaWQgPSBvYmouaWQgfHwgXCJzXCIgKyB0aGlzLndlYml4LnVpZCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBjb25maWdbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgIGlkOiB0YXJnZXQuaWQsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgYnJhbmNoOiBvYmouYnJhbmNoLFxyXG4gICAgICAgICAgICBwb3B1cDogb2JqLnBvcHVwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdmlldy5wb3B1cCA/IG51bGwgOiB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSGFzaFJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgdGhpcy5fZGV0ZWN0UHJlZml4KCk7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4gdGhpcy5jYih0aGlzLmdldCgpKTtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzW2tleV0gPT09IGNvbXBhcmVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldCgpICE9PSBwYXRoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLnByZWZpeCArIHRoaXMuc3VmaXggKyBwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLl9nZXRSYXcoKS5yZXBsYWNlKHRoaXMucHJlZml4LCBcIlwiKS5yZXBsYWNlKHRoaXMuc3VmaXgsIFwiXCIpO1xyXG4gICAgICAgIHBhdGggPSBwYXRoICE9PSBcIi9cIiA/IHBhdGggOiBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZy5yb3V0ZXNbY29tcGFyZVswXV07XHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIC8vIHVzZSBcIiMhXCIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBjb25zdCBzdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeDtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gXCIjXCIgKyAoKHR5cGVvZiBzdWZpeCA9PT0gXCJ1bmRlZmluZWRcIikgPyBcIiFcIiA6IHN1Zml4KTtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIsIDIpWzBdO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxuXG5sZXQgaXNQYXRjaGVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHBhdGNoKHcpIHtcclxuICAgIGlmIChpc1BhdGNoZWQgfHwgIXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpc1BhdGNoZWQgPSB0cnVlO1xyXG4gICAgLy8gY3VzdG9tIHByb21pc2UgZm9yIElFOFxyXG4gICAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gICAgaWYgKCF3aW4uUHJvbWlzZSkge1xyXG4gICAgICAgIHdpbi5Qcm9taXNlID0gdy5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmVyc2lvbiA9IHcudmVyc2lvbi5zcGxpdChcIi5cIik7XHJcbiAgICAvLyB3aWxsIGJlIGZpeGVkIGluIHdlYml4IDUuM1xyXG4gICAgaWYgKHZlcnNpb25bMF0gKiAxMCArIHZlcnNpb25bMV0gKiAxIDwgNTMpIHtcclxuICAgICAgICB3LnVpLmZyZWV6ZSA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkIGJlY2F1c2Ugd2ViaXggamV0IDUuMCBjYW4ndCBoYW5kbGUgcmVzaXplIG9mIHNjcm9sbHZpZXcgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIHcudWkuJGZyZWV6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKHNvbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb21lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gYWRkaW5nIHZpZXdzIGFzIGNsYXNzZXNcclxuICAgIGNvbnN0IGJhc2VBZGQgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLmFkZFZpZXc7XHJcbiAgICBjb25zdCBiYXNlUmVtb3ZlID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5yZW1vdmVWaWV3O1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIGFkZFZpZXcodmlldywgaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBsb2dpYyBvbmx5IGZvciB3aWRnZXRzIGluc2lkZSBvZiBqZXQtdmlld1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZSB3aGVuIGFkZFZpZXcgdXNlZCB3aXRoIGFscmVhZHkgaW5pdGlhbGl6ZWQgd2lkZ2V0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCAmJiAhdmlldy5xdWVyeVZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGp2aWV3ID0gdGhpcy4kc2NvcGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0ge307XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0ganZpZXcuYXBwLmNvcHlDb25maWcodmlldywge30sIHN1YnMpO1xyXG4gICAgICAgICAgICAgICAgYmFzZUFkZC5hcHBseSh0aGlzLCBbdmlldywgaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdmlldy5fcmVuZGVyRnJhbWUoa2V5LCBzdWJzW2tleV0sIG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdmlldy5fc3Vic1trZXldID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZUFkZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVWaWV3KCkge1xyXG4gICAgICAgICAgICBiYXNlUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHRoaXMuJHNjb3BlLl9zdWJzO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWxsIHN1Yi12aWV3cywgZGVzdHJveSBhbmQgY2xlYW4gdGhlIHJlbW92ZWQgb25lXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXcuJCQodGVzdC5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdy5leHRlbmQody51aS5sYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgdy5leHRlbmQody51aS5iYXNlbGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIC8vIHdyYXBwZXIgZm9yIHVzaW5nIEpldCBBcHBzIGFzIHZpZXdzXHJcbiAgICB3LnByb3RvVUkoe1xyXG4gICAgICAgIG5hbWU6IFwiamV0YXBwXCIsXHJcbiAgICAgICAgJGluaXQoY2ZnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcCA9IG5ldyB0aGlzLmFwcChjZmcpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHcudWlkKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2ZnLmJvZHkgPSB7IGlkIH07XHJcbiAgICAgICAgICAgIHRoaXMuJHJlYWR5LnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnJlbmRlcih7IGlkIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGFwcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuJGFwcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW4gPT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gb3JpZ2luLmJpbmQodGhpcy4kYXBwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHcudWkucHJveHkpO1xyXG59XG5cbmNsYXNzIEpldEFwcCBleHRlbmRzIEpldEFwcEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLnJvdXRlciA9IGNvbmZpZy5yb3V0ZXIgfHwgSGFzaFJvdXRlcjtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHBhdGNoKHRoaXMud2ViaXgpO1xyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuL2csIFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gcmVxdWlyZShcImpldC12aWV3cy9cIiArIHVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3RvcmVSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gY29uZmlnLnN0b3JhZ2UgfHwgYXBwLndlYml4LnN0b3JhZ2Uuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLm5hbWUgPSAoY29uZmlnLnN0b3JlTmFtZSB8fCBjb25maWcuaWQgKyBcIjpyb3V0ZVwiKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnB1dCh0aGlzLm5hbWUsIHBhdGgpO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgVXJsUm91dGVyIGV4dGVuZHMgSGFzaFJvdXRlciB7XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4IHx8IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBFbXB0eVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgXyRjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVW5sb2FkR3VhcmQoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKF8kdXJsLCBwb2ludCwgcHJvbWlzZSkge1xyXG4gICAgICAgIGlmIChwb2ludCA9PT0gdmlldyB8fCBwb2ludC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBjb25maWcoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IFByb21pc2UucmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBwcm9taXNlLmNvbmZpcm0udGhlbigoKSA9PiByZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuLy8gICAgIChjKSAyMDEyLTIwMTggQWlyYm5iLCBJbmMuXG5cbi8vIHZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbmZ1bmN0aW9uIGhhcyhzdG9yZSwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RvcmUsIGtleSk7XG59XG4vLyB2YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaGFuZGxlciwgY29udGV4dCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcyhvYmosIGtleSkpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCgoY29udGV4dCB8fCBvYmopLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuLy8gdmFyIHRyaW0gPSByZXF1aXJlKCdzdHJpbmcucHJvdG90eXBlLnRyaW0nKTtcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbn1cbi8vIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIG1lc3NhZ2U7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyB9IGNhdGNoICh4KSB7fVxufVxuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBzcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQ7XG5cbi8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4vLyBUaGUgc3RyaW5nIHRoYXQgc2VwYXJhdGVzIHRoZSBkaWZmZXJlbnQgcGhyYXNlIHBvc3NpYmlsaXRpZXMuXG52YXIgZGVsaW1pdGVyID0gJ3x8fHwnO1xuXG52YXIgcnVzc2lhblBsdXJhbEdyb3VwcyA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciBlbmQgPSBuICUgMTA7XG4gIGlmIChuICE9PSAxMSAmJiBlbmQgPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgIShuID49IDEyICYmIG4gPD0gMTQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDI7XG59O1xuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG52YXIgcGx1cmFsVHlwZXMgPSB7XG4gIGFyYWJpYzogZnVuY3Rpb24gKG4pIHtcbiAgICAvLyBodHRwOi8vd3d3LmFyYWJleWVzLm9yZy9QbHVyYWxfRm9ybXNcbiAgICBpZiAobiA8IDMpIHsgcmV0dXJuIG47IH1cbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPj0gMyAmJiBsYXN0VHdvIDw9IDEwKSByZXR1cm4gMztcbiAgICByZXR1cm4gbGFzdFR3byA+PSAxMSA/IDQgOiA1O1xuICB9LFxuICBib3NuaWFuX3NlcmJpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGNoaW5lc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gIGNyb2F0aWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBmcmVuY2g6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuID4gMSA/IDEgOiAwOyB9LFxuICBnZXJtYW46IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuICE9PSAxID8gMSA6IDA7IH0sXG4gIHJ1c3NpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGxpdGh1YW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gJSAxMCA9PT0gMSAmJiBuICUgMTAwICE9PSAxMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gOSAmJiAobiAlIDEwMCA8IDExIHx8IG4gJSAxMDAgPiAxOSkgPyAxIDogMjtcbiAgfSxcbiAgY3plY2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gKG4gPj0gMiAmJiBuIDw9IDQpID8gMSA6IDI7XG4gIH0sXG4gIHBvbGlzaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHZhciBlbmQgPSBuICUgMTA7XG4gICAgcmV0dXJuIDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjtcbiAgfSxcbiAgaWNlbGFuZGljOiBmdW5jdGlvbiAobikgeyByZXR1cm4gKG4gJSAxMCAhPT0gMSB8fCBuICUgMTAwID09PSAxMSkgPyAxIDogMDsgfSxcbiAgc2xvdmVuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA9PT0gMSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDMgfHwgbGFzdFR3byA9PT0gNCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIHJldHVybiAzO1xuICB9XG59O1xuXG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHRvIGluZGl2aWR1YWwgbGFuZ3VhZ2UgY29kZXMvbG9jYWxlcy5cbi8vIFdpbGwgbG9vayB1cCBiYXNlZCBvbiBleGFjdCBtYXRjaCwgaWYgbm90IGZvdW5kIGFuZCBpdCdzIGEgbG9jYWxlIHdpbGwgcGFyc2UgdGhlIGxvY2FsZVxuLy8gZm9yIGxhbmd1YWdlIGNvZGUsIGFuZCBpZiB0aGF0IGRvZXMgbm90IGV4aXN0IHdpbGwgZGVmYXVsdCB0byAnZW4nXG52YXIgcGx1cmFsVHlwZVRvTGFuZ3VhZ2VzID0ge1xuICBhcmFiaWM6IFsnYXInXSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBbJ2JzLUxhdG4tQkEnLCAnYnMtQ3lybC1CQScsICdzcmwtUlMnLCAnc3ItUlMnXSxcbiAgY2hpbmVzZTogWydpZCcsICdpZC1JRCcsICdqYScsICdrbycsICdrby1LUicsICdsbycsICdtcycsICd0aCcsICd0aC1USCcsICd6aCddLFxuICBjcm9hdGlhbjogWydocicsICdoci1IUiddLFxuICBnZXJtYW46IFsnZmEnLCAnZGEnLCAnZGUnLCAnZW4nLCAnZXMnLCAnZmknLCAnZWwnLCAnaGUnLCAnaGktSU4nLCAnaHUnLCAnaHUtSFUnLCAnaXQnLCAnbmwnLCAnbm8nLCAncHQnLCAnc3YnLCAndHInXSxcbiAgZnJlbmNoOiBbJ2ZyJywgJ3RsJywgJ3B0LWJyJ10sXG4gIHJ1c3NpYW46IFsncnUnLCAncnUtUlUnXSxcbiAgbGl0aHVhbmlhbjogWydsdCddLFxuICBjemVjaDogWydjcycsICdjcy1DWicsICdzayddLFxuICBwb2xpc2g6IFsncGwnXSxcbiAgaWNlbGFuZGljOiBbJ2lzJ10sXG4gIHNsb3ZlbmlhbjogWydzbC1TTCddXG59O1xuXG5mdW5jdGlvbiBsYW5nVG9UeXBlTWFwKG1hcHBpbmcpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3JFYWNoKG1hcHBpbmcsIGZ1bmN0aW9uIChsYW5ncywgdHlwZSkge1xuICAgIGZvckVhY2gobGFuZ3MsIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICByZXRbbGFuZ10gPSB0eXBlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZU5hbWUobG9jYWxlKSB7XG4gIHZhciBsYW5nVG9QbHVyYWxUeXBlID0gbGFuZ1RvVHlwZU1hcChwbHVyYWxUeXBlVG9MYW5ndWFnZXMpO1xuICByZXR1cm4gbGFuZ1RvUGx1cmFsVHlwZVtsb2NhbGVdXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZVtzcGxpdC5jYWxsKGxvY2FsZSwgLy0vLCAxKVswXV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlLmVuO1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlSW5kZXgobG9jYWxlLCBjb3VudCkge1xuICByZXR1cm4gcGx1cmFsVHlwZXNbcGx1cmFsVHlwZU5hbWUobG9jYWxlKV0oY291bnQpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGUodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cykge1xuICB2YXIgcHJlZml4ID0gKG9wdHMgJiYgb3B0cy5wcmVmaXgpIHx8ICcleyc7XG4gIHZhciBzdWZmaXggPSAob3B0cyAmJiBvcHRzLnN1ZmZpeCkgfHwgJ30nO1xuXG4gIGlmIChwcmVmaXggPT09IGRlbGltaXRlciB8fCBzdWZmaXggPT09IGRlbGltaXRlcikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIicgKyBkZWxpbWl0ZXIgKyAnXCIgdG9rZW4gaXMgcmVzZXJ2ZWQgZm9yIHBsdXJhbGl6YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKGVzY2FwZShwcmVmaXgpICsgJyguKj8pJyArIGVzY2FwZShzdWZmaXgpLCAnZycpO1xufVxuXG52YXIgZG9sbGFyUmVnZXggPSAvXFwkL2c7XG52YXIgZG9sbGFyQmlsbHNZYWxsID0gJyQkJztcbnZhciBkZWZhdWx0VG9rZW5SZWdleCA9IC8lXFx7KC4qPylcXH0vZztcblxuLy8gIyMjIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSlcbi8vXG4vLyBUYWtlcyBhIHBocmFzZSBzdHJpbmcgYW5kIHRyYW5zZm9ybXMgaXQgYnkgY2hvb3NpbmcgdGhlIGNvcnJlY3Rcbi8vIHBsdXJhbCBmb3JtIGFuZCBpbnRlcnBvbGF0aW5nIGl0LlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJ0hlbGxvLCAle25hbWV9IScsIHtuYW1lOiAnU3Bpa2UnfSk7XG4vLyAgICAgLy8gXCJIZWxsbywgU3Bpa2UhXCJcbi8vXG4vLyBUaGUgY29ycmVjdCBwbHVyYWwgZm9ybSBpcyBzZWxlY3RlZCBpZiBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50XG4vLyBpcyBzZXQuIFlvdSBjYW4gcGFzcyBpbiBhIG51bWJlciBpbnN0ZWFkIG9mIGFuIE9iamVjdCBhcyBgc3Vic3RpdHV0aW9uc2Bcbi8vIGFzIGEgc2hvcnRjdXQgZm9yIGBzbWFydF9jb3VudGAuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMX0sICdlbicpO1xuLy8gICAgIC8vIFwiMSBuZXcgbWVzc2FnZVwiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMn0sICdlbicpO1xuLy8gICAgIC8vIFwiMiBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCA1LCAnZW4nKTtcbi8vICAgICAvLyBcIjUgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyBZb3Ugc2hvdWxkIHBhc3MgaW4gYSB0aGlyZCBhcmd1bWVudCwgdGhlIGxvY2FsZSwgdG8gc3BlY2lmeSB0aGUgY29ycmVjdCBwbHVyYWwgdHlwZS5cbi8vIEl0IGRlZmF1bHRzIHRvIGAnZW4nYCB3aXRoIDIgcGx1cmFsIGZvcm1zLlxuZnVuY3Rpb24gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlLCB0b2tlblJlZ2V4KSB7XG4gIGlmICh0eXBlb2YgcGhyYXNlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BvbHlnbG90LnRyYW5zZm9ybVBocmFzZSBleHBlY3RzIGFyZ3VtZW50ICMxIHRvIGJlIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHN1YnN0aXR1dGlvbnMgPT0gbnVsbCkge1xuICAgIHJldHVybiBwaHJhc2U7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gcGhyYXNlO1xuICB2YXIgaW50ZXJwb2xhdGlvblJlZ2V4ID0gdG9rZW5SZWdleCB8fCBkZWZhdWx0VG9rZW5SZWdleDtcblxuICAvLyBhbGxvdyBudW1iZXIgYXMgYSBwbHVyYWxpemF0aW9uIHNob3J0Y3V0XG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHN1YnN0aXR1dGlvbnMgPT09ICdudW1iZXInID8geyBzbWFydF9jb3VudDogc3Vic3RpdHV0aW9ucyB9IDogc3Vic3RpdHV0aW9ucztcblxuICAvLyBTZWxlY3QgcGx1cmFsIGZvcm06IGJhc2VkIG9uIGEgcGhyYXNlIHRleHQgdGhhdCBjb250YWlucyBgbmBcbiAgLy8gcGx1cmFsIGZvcm1zIHNlcGFyYXRlZCBieSBgZGVsaW1pdGVyYCwgYSBgbG9jYWxlYCwgYW5kIGEgYHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRgLFxuICAvLyBjaG9vc2UgdGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0uIFRoaXMgaXMgb25seSBkb25lIGlmIGBjb3VudGAgaXMgc2V0LlxuICBpZiAob3B0aW9ucy5zbWFydF9jb3VudCAhPSBudWxsICYmIHJlc3VsdCkge1xuICAgIHZhciB0ZXh0cyA9IHNwbGl0LmNhbGwocmVzdWx0LCBkZWxpbWl0ZXIpO1xuICAgIHJlc3VsdCA9IHRyaW0odGV4dHNbcGx1cmFsVHlwZUluZGV4KGxvY2FsZSB8fCAnZW4nLCBvcHRpb25zLnNtYXJ0X2NvdW50KV0gfHwgdGV4dHNbMF0pO1xuICB9XG5cbiAgLy8gSW50ZXJwb2xhdGU6IENyZWF0ZXMgYSBgUmVnRXhwYCBvYmplY3QgZm9yIGVhY2ggaW50ZXJwb2xhdGlvbiBwbGFjZWhvbGRlci5cbiAgcmVzdWx0ID0gcmVwbGFjZS5jYWxsKHJlc3VsdCwgaW50ZXJwb2xhdGlvblJlZ2V4LCBmdW5jdGlvbiAoZXhwcmVzc2lvbiwgYXJndW1lbnQpIHtcbiAgICBpZiAoIWhhcyhvcHRpb25zLCBhcmd1bWVudCkgfHwgb3B0aW9uc1thcmd1bWVudF0gPT0gbnVsbCkgeyByZXR1cm4gZXhwcmVzc2lvbjsgfVxuICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLlxuICAgIHJldHVybiByZXBsYWNlLmNhbGwob3B0aW9uc1thcmd1bWVudF0sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAjIyMgUG9seWdsb3QgY2xhc3MgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFBvbHlnbG90KG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbiAgdGhpcy5leHRlbmQob3B0cy5waHJhc2VzIHx8IHt9KTtcbiAgdGhpcy5jdXJyZW50TG9jYWxlID0gb3B0cy5sb2NhbGUgfHwgJ2VuJztcbiAgdmFyIGFsbG93TWlzc2luZyA9IG9wdHMuYWxsb3dNaXNzaW5nID8gdHJhbnNmb3JtUGhyYXNlIDogbnVsbDtcbiAgdGhpcy5vbk1pc3NpbmdLZXkgPSB0eXBlb2Ygb3B0cy5vbk1pc3NpbmdLZXkgPT09ICdmdW5jdGlvbicgPyBvcHRzLm9uTWlzc2luZ0tleSA6IGFsbG93TWlzc2luZztcbiAgdGhpcy53YXJuID0gb3B0cy53YXJuIHx8IHdhcm47XG4gIHRoaXMudG9rZW5SZWdleCA9IGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cy5pbnRlcnBvbGF0aW9uKTtcbn1cblxuLy8gIyMjIHBvbHlnbG90LmxvY2FsZShbbG9jYWxlXSlcbi8vXG4vLyBHZXQgb3Igc2V0IGxvY2FsZS4gSW50ZXJuYWxseSwgUG9seWdsb3Qgb25seSB1c2VzIGxvY2FsZSBmb3IgcGx1cmFsaXphdGlvbi5cblBvbHlnbG90LnByb3RvdHlwZS5sb2NhbGUgPSBmdW5jdGlvbiAobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHRoaXMuY3VycmVudExvY2FsZSA9IG5ld0xvY2FsZTtcbiAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5leHRlbmQocGhyYXNlcylcbi8vXG4vLyBVc2UgYGV4dGVuZGAgdG8gdGVsbCBQb2x5Z2xvdCBob3cgdG8gdHJhbnNsYXRlIGEgZ2l2ZW4ga2V5LlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIGtleSBjYW4gYmUgYW55IHN0cmluZy4gIEZlZWwgZnJlZSB0byBjYWxsIGBleHRlbmRgIG11bHRpcGxlIHRpbWVzO1xuLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbi8vIHVudG91Y2hlZC5cbi8vXG4vLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4vLyBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZSBuZXN0ZWQga2V5cyBjb25jYXRlbmF0ZWQgdXNpbmcgZG90IG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJuYXZcIjoge1xuLy8gICAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbi8vICAgICAgICAgXCJzaWRlYmFyXCI6IHtcbi8vICAgICAgICAgICBcIndlbGNvbWVcIjogXCJXZWxjb21lXCJcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfScsXG4vLyAgICAgLy8gICAnbmF2LnNpZGViYXIud2VsY29tZSc6ICdXZWxjb21lJ1xuLy8gICAgIC8vIH1cbi8vXG4vLyBgZXh0ZW5kYCBhY2NlcHRzIGFuIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCwgYHByZWZpeGAsIHdoaWNoIGNhbiBiZSB1c2VkXG4vLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3Rcbi8vIG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSwgXCJuYXZcIik7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9J1xuLy8gICAgIC8vIH1cbi8vXG4vLyBUaGlzIGZlYXR1cmUgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIHN1cHBvcnQgbmVzdGVkIHBocmFzZSBvYmplY3RzLlxuUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZXh0ZW5kKHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldID0gcGhyYXNlO1xuICAgIH1cbiAgfSwgdGhpcyk7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QudW5zZXQocGhyYXNlcylcbi8vIFVzZSBgdW5zZXRgIHRvIHNlbGVjdGl2ZWx5IHJlbW92ZSBrZXlzIGZyb20gYSBwb2x5Z2xvdCBpbnN0YW5jZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudW5zZXQoXCJzb21lX2tleVwiKTtcbi8vICAgICBwb2x5Z2xvdC51bnNldCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUgdW5zZXQgbWV0aG9kIGNhbiB0YWtlIGVpdGhlciBhIHN0cmluZyAoZm9yIHRoZSBrZXkpLCBvciBhbiBvYmplY3QgaGFzaCB3aXRoXG4vLyB0aGUga2V5cyB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIHVuc2V0LlxuUG9seWdsb3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBtb3JlUGhyYXNlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBkZWxldGUgdGhpcy5waHJhc2VzW21vcmVQaHJhc2VzXTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLnVuc2V0KHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV07XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5jbGVhcigpXG4vL1xuLy8gQ2xlYXJzIGFsbCBwaHJhc2VzLiBVc2VmdWwgZm9yIHNwZWNpYWwgY2FzZXMsIHN1Y2ggYXMgZnJlZWluZ1xuLy8gdXAgbWVtb3J5IGlmIHlvdSBoYXZlIGxvdHMgb2YgcGhyYXNlcyBidXQgbm8gbG9uZ2VyIG5lZWQgdG9cbi8vIHBlcmZvcm0gYW55IHRyYW5zbGF0aW9uLiBBbHNvIHVzZWQgaW50ZXJuYWxseSBieSBgcmVwbGFjZWAuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbi8vXG4vLyBDb21wbGV0ZWx5IHJlcGxhY2UgdGhlIGV4aXN0aW5nIHBocmFzZXMgd2l0aCBhIG5ldyBzZXQgb2YgcGhyYXNlcy5cbi8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuLy8gY2lyY3Vtc3RhbmNlcywgeW91IG1heSB3YW50IHRvIG1ha2Ugc3VyZSBubyBvbGQgcGhyYXNlcyBhcmUgbHlpbmcgYXJvdW5kLlxuUG9seWdsb3QucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3UGhyYXNlcykge1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMuZXh0ZW5kKG5ld1BocmFzZXMpO1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QudChrZXksIG9wdGlvbnMpXG4vL1xuLy8gVGhlIG1vc3QtdXNlZCBtZXRob2QuIFByb3ZpZGUgYSBrZXksIGFuZCBgdGAgd2lsbCByZXR1cm4gdGhlXG4vLyBwaHJhc2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb1wiKTtcbi8vICAgICA9PiBcIkhlbGxvXCJcbi8vXG4vLyBUaGUgcGhyYXNlIHZhbHVlIGlzIHByb3ZpZGVkIGZpcnN0IGJ5IGEgY2FsbCB0byBgcG9seWdsb3QuZXh0ZW5kKClgIG9yXG4vLyBgcG9seWdsb3QucmVwbGFjZSgpYC5cbi8vXG4vLyBQYXNzIGluIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHBlcmZvcm0gaW50ZXJwb2xhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvX25hbWVcIiwge25hbWU6IFwiU3Bpa2VcIn0pO1xuLy8gICAgID0+IFwiSGVsbG8sIFNwaWtlXCJcbi8vXG4vLyBJZiB5b3UgbGlrZSwgeW91IGNhbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBpbiBjYXNlIHRoZSBwaHJhc2UgaXMgbWlzc2luZy5cbi8vIFVzZSB0aGUgc3BlY2lhbCBvcHRpb24ga2V5IFwiX1wiIHRvIHNwZWNpZnkgYSBkZWZhdWx0LlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaV9saWtlX3RvX3dyaXRlX2luX2xhbmd1YWdlXCIsIHtcbi8vICAgICAgIF86IFwiSSBsaWtlIHRvIHdyaXRlIGluICV7bGFuZ3VhZ2V9LlwiLFxuLy8gICAgICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiXG4vLyAgICAgfSk7XG4vLyAgICAgPT4gXCJJIGxpa2UgdG8gd3JpdGUgaW4gSmF2YVNjcmlwdC5cIlxuLy9cblBvbHlnbG90LnByb3RvdHlwZS50ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICB2YXIgcGhyYXNlLCByZXN1bHQ7XG4gIHZhciBvcHRzID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICBpZiAodHlwZW9mIHRoaXMucGhyYXNlc1trZXldID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IHRoaXMucGhyYXNlc1trZXldO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLl8gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gb3B0cy5fO1xuICB9IGVsc2UgaWYgKHRoaXMub25NaXNzaW5nS2V5KSB7XG4gICAgdmFyIG9uTWlzc2luZ0tleSA9IHRoaXMub25NaXNzaW5nS2V5O1xuICAgIHJlc3VsdCA9IG9uTWlzc2luZ0tleShrZXksIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhcm4oJ01pc3NpbmcgdHJhbnNsYXRpb24gZm9yIGtleTogXCInICsga2V5ICsgJ1wiJyk7XG4gICAgcmVzdWx0ID0ga2V5O1xuICB9XG4gIGlmICh0eXBlb2YgcGhyYXNlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QuaGFzKGtleSlcbi8vXG4vLyBDaGVjayBpZiBwb2x5Z2xvdCBoYXMgYSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5XG5Qb2x5Z2xvdC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gaGFzKHRoaXMucGhyYXNlcywga2V5KTtcbn07XG5cbi8vIGV4cG9ydCB0cmFuc2Zvcm1QaHJhc2VcblBvbHlnbG90LnRyYW5zZm9ybVBocmFzZSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSkge1xuICByZXR1cm4gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKTtcbn07XG5cbnZhciB3ZWJpeFBvbHlnbG90ID0gUG9seWdsb3Q7XG5cbmZ1bmN0aW9uIExvY2FsZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCBsYW5nID0gc3RvcmFnZSA/IChzdG9yYWdlLmdldChcImxhbmdcIikgfHwgXCJlblwiKSA6IChjb25maWcubGFuZyB8fCBcImVuXCIpO1xyXG4gICAgZnVuY3Rpb24gc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KSB7XHJcbiAgICAgICAgaWYgKGRhdGEuX19lc01vZHVsZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwY29uZmlnID0geyBwaHJhc2VzOiBkYXRhIH07XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wb2x5Z2xvdCkge1xyXG4gICAgICAgICAgICBhcHAud2ViaXguZXh0ZW5kKHBjb25maWcsIGNvbmZpZy5wb2x5Z2xvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbHkgPSBzZXJ2aWNlLnBvbHlnbG90ID0gbmV3IHdlYml4UG9seWdsb3QocGNvbmZpZyk7XHJcbiAgICAgICAgcG9seS5sb2NhbGUobmFtZSk7XHJcbiAgICAgICAgc2VydmljZS5fID0gYXBwLndlYml4LmJpbmQocG9seS50LCBwb2x5KTtcclxuICAgICAgICBsYW5nID0gbmFtZTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlLnB1dChcImxhbmdcIiwgbGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcud2ViaXgpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jTmFtZSA9IGNvbmZpZy53ZWJpeFtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGxvY05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGFwcC53ZWJpeC5pMThuLnNldExvY2FsZShsb2NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TGFuZygpIHsgcmV0dXJuIGxhbmc7IH1cclxuICAgIGZ1bmN0aW9uIHNldExhbmcobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgLy8gaWdub3JlIHNldExhbmcgaWYgbG9hZGluZyBieSBwYXRoIGlzIGRpc2FibGVkXHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhdGggPSAoY29uZmlnLnBhdGggPyBjb25maWcucGF0aCArIFwiL1wiIDogXCJcIikgKyBuYW1lO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiamV0LWxvY2FsZXMvXCIgKyBwYXRoKTtcclxuICAgICAgICBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRMYW5nLCBzZXRMYW5nLCBzZXRMYW5nRGF0YSwgXzogbnVsbCwgcG9seWdsb3Q6IG51bGxcclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcImxvY2FsZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNldExhbmcobGFuZywgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gc2hvdyh2aWV3LCBjb25maWcsIHZhbHVlKSB7XHJcbiAgICBpZiAoY29uZmlnLnVybHMpIHtcclxuICAgICAgICB2YWx1ZSA9IGNvbmZpZy51cmxzW3ZhbHVlXSB8fCB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgIHZhbHVlID0geyBbY29uZmlnLnBhcmFtXTogdmFsdWUgfTtcclxuICAgIH1cclxuICAgIHZpZXcuc2hvdyh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gTWVudShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3QgZnJhbWUgPSB2aWV3LmdldFN1YlZpZXdJbmZvKCkucGFyZW50O1xyXG4gICAgY29uc3QgdWkgPSB2aWV3LiQkKGNvbmZpZy5pZCB8fCBjb25maWcpO1xyXG4gICAgbGV0IHNpbGVudCA9IGZhbHNlO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCB0aGlzLmdldFZhbHVlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmFmdGVyc2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLmdldFNlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdWkuZ2V0U2VsZWN0ZWRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6cm91dGVgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICAgICAgbmFtZSA9IHZpZXcuZ2V0UGFyYW0oY29uZmlnLnBhcmFtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmcmFtZS5nZXRVcmwoKVsxXTtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBzZWdtZW50LnBhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgc2lsZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlICYmIHVpLmdldFZhbHVlKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNldFZhbHVlKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnNlbGVjdCAmJiB1aS5leGlzdHMobmFtZSkgJiYgdWkuZ2V0U2VsZWN0ZWRJZCgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZWxlY3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2lsZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuY29uc3QgYmFzZWljb25zID0ge1xyXG4gICAgZ29vZDogXCJjaGVja1wiLFxyXG4gICAgZXJyb3I6IFwid2FybmluZ1wiLFxyXG4gICAgc2F2aW5nOiBcInJlZnJlc2ggZmEtc3BpblwiXHJcbn07XHJcbmNvbnN0IGJhc2V0ZXh0ID0ge1xyXG4gICAgZ29vZDogXCJPa1wiLFxyXG4gICAgZXJyb3I6IFwiRXJyb3JcIixcclxuICAgIHNhdmluZzogXCJDb25uZWN0aW5nLi4uXCJcclxufTtcclxuZnVuY3Rpb24gU3RhdHVzKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gXCJnb29kXCI7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IGlzZXJyb3IgPSBmYWxzZTtcclxuICAgIGxldCBleHBpcmVEZWxheSA9IGNvbmZpZy5leHBpcmU7XHJcbiAgICBpZiAoIWV4cGlyZURlbGF5ICYmIGV4cGlyZURlbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGV4cGlyZURlbGF5ID0gMjAwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHRleHRzID0gY29uZmlnLnRleHRzIHx8IGJhc2V0ZXh0O1xyXG4gICAgY29uc3QgaWNvbnMgPSBjb25maWcuaWNvbnMgfHwgYmFzZWljb25zO1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBjb25maWcgPSB7IHRhcmdldDogY29uZmlnIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBhcmVhID0gdmlldy4kJChjb25maWcudGFyZ2V0KTtcclxuICAgICAgICBpZiAoYXJlYSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PHNwYW4gY2xhc3M9J3dlYml4X2ljb24gZmEtXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zW3N0YXR1c10gKyBcIic+PC9zcGFuPiBcIiArIHRleHRzW3N0YXR1c10gKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZWEuc2V0SFRNTChjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZ29vZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJlcnJvclwiLCBlcnIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RhcnQocHJvbWlzZSkge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgc2V0U3RhdHVzKFwic2F2aW5nXCIpO1xyXG4gICAgICAgIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikge1xyXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oc3VjY2VzcywgZmFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaWRlU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZWZyZXNoKFwiIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobW9kZSwgZXJyKSB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInNhdmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFwic2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlzZXJyb3IgPSAobW9kZSA9PT0gXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBpc2Vycm9yID8gXCJlcnJvclwiIDogXCJnb29kXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5lcnJvcihcImFwcDplcnJvcjpzZXJ2ZXJcIiwgW2Vyci5yZXNwb25zZVRleHQgfHwgZXJyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlRGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlU3RhdHVzLCBleHBpcmVEZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJhY2soZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRwID0gYXBwLndlYml4LmRwKGRhdGEpO1xyXG4gICAgICAgIGlmIChkcCkge1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJEYXRhU2VuZFwiLCBzdGFydCk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVFcnJvclwiLCAoX2lkLCBfb2JqLCByZXNwb25zZSkgPT4gZmFpbChyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlXCIsIHN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwic3RhdHVzXCIsIHtcclxuICAgICAgICBnZXRTdGF0dXMsXHJcbiAgICAgICAgc2V0U3RhdHVzLFxyXG4gICAgICAgIHRyYWNrXHJcbiAgICB9KTtcclxuICAgIGlmIChjb25maWcucmVtb3RlKSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25SZW1vdGVDYWxsXCIsIHN0YXJ0KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuYWpheCkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uQmVmb3JlQWpheFwiLCAoX21vZGUsIF91cmwsIF9kYXRhLCBfcmVxdWVzdCwgX2hlYWRlcnMsIF9maWxlcywgcHJvbWlzZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuZGF0YSkge1xyXG4gICAgICAgIHRyYWNrKGNvbmZpZy5kYXRhKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBUaGVtZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCB0aGVtZSA9IHN0b3JhZ2UgP1xyXG4gICAgICAgIChzdG9yYWdlLmdldChcInRoZW1lXCIpIHx8IFwiZmxhdC1kZWZhdWx0XCIpXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICAoY29uZmlnLnRoZW1lIHx8IFwiZmxhdC1kZWZhdWx0XCIpO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRUaGVtZSgpIHsgcmV0dXJuIHRoZW1lOyB9LFxyXG4gICAgICAgIHNldFRoZW1lKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG5hbWUgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsbmFtZSA9PT0gbmFtZSB8fCBsbmFtZSA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXBwLndlYml4LnNraW4uc2V0KHBhcnRzWzBdKTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwucmVtb3ZlQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyB0aGVtZSk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLmFkZENzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgIHRoZW1lID0gbmFtZTtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwidGhlbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ0aGVtZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNlcnZpY2Uuc2V0VGhlbWUodGhlbWUsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIGNvcHlQYXJhbXMoZGF0YSwgdXJsLCByb3V0ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRhdGFbcm91dGVbaV1dID0gdXJsW2kgKyAxXSA/IHVybFtpICsgMV0ucGFnZSA6IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gVXJsUGFyYW0oYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlIHx8IGNvbmZpZztcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIHZpZXcub24oYXBwLCBcImFwcDp1cmxjaGFuZ2VcIiwgZnVuY3Rpb24gKHN1YnZpZXcsIHNlZ21lbnQpIHtcclxuICAgICAgICBpZiAodmlldyA9PT0gc3Vidmlldykge1xyXG4gICAgICAgICAgICBjb3B5UGFyYW1zKGRhdGEsIHNlZ21lbnQuc3VidXJsKCksIHJvdXRlKTtcclxuICAgICAgICAgICAgc2VnbWVudC5zaXplKHJvdXRlLmxlbmd0aCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb3MgPSB2aWV3LnNldFBhcmFtO1xyXG4gICAgY29uc3Qgb2cgPSB2aWV3LmdldFBhcmFtO1xyXG4gICAgdmlldy5zZXRQYXJhbSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgc2hvdykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm91dGUuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKFwiXCIsIHZhbHVlLCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9zLmNhbGwodGhpcywgbmFtZSwgdmFsdWUsIHNob3cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2aWV3LmdldFBhcmFtID0gZnVuY3Rpb24gKGtleSwgbW9kZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2cuY2FsbCh0aGlzLCBrZXksIG1vZGUpO1xyXG4gICAgfTtcclxuICAgIGNvcHlQYXJhbXMoZGF0YSwgdmlldy5nZXRVcmwoKSwgcm91dGUpO1xyXG59XG5cbmZ1bmN0aW9uIFVzZXIoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBsb2dpbiA9IGNvbmZpZy5sb2dpbiB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgbG9nb3V0ID0gY29uZmlnLmxvZ291dCB8fCBcIi9sb2dvdXRcIjtcclxuICAgIGNvbnN0IGFmdGVyTG9naW4gPSBjb25maWcuYWZ0ZXJMb2dpbiB8fCBhcHAuY29uZmlnLnN0YXJ0O1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dvdXQgPSBjb25maWcuYWZ0ZXJMb2dvdXQgfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IHBpbmcgPSBjb25maWcucGluZyB8fCA1ICogNjAgKiAxMDAwO1xyXG4gICAgY29uc3QgbW9kZWwgPSBjb25maWcubW9kZWw7XHJcbiAgICBsZXQgdXNlciA9IGNvbmZpZy51c2VyO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXR1cyhzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyICE9PSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5zdGF0dXMoKS5jYXRjaCgoKSA9PiBudWxsKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW4obmFtZSwgcGFzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9naW4obmFtZSwgcGFzcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dpblwiLCBbdXNlcl0pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnNob3coYWZ0ZXJMb2dpbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICB1c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ291dCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dvdXRcIiwgW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGNhbk5hdmlnYXRlKHVybCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gbG9nb3V0KSB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGFmdGVyTG9nb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1cmwgIT09IGxvZ2luICYmICFzZXJ2aWNlLmdldFN0YXR1cygpKSB7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGxvZ2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidXNlclwiLCBzZXJ2aWNlKTtcclxuICAgIGFwcC5hdHRhY2hFdmVudChgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKHVybCwgXyRyb290LCBvYmopIHtcclxuICAgICAgICBpZiAoY29uZmlnLnB1YmxpYyAmJiBjb25maWcucHVibGljKHVybCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBvYmouY29uZmlybSA9IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLnRoZW4oKCkgPT4gY2FuTmF2aWdhdGUodXJsLCBvYmopKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbk5hdmlnYXRlKHVybCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBpbmcpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKSwgcGluZyk7XHJcbiAgICB9XHJcbn1cblxuLypcclxuTUlUIExpY2Vuc2VcclxuQ29weXJpZ2h0IChjKSAyMDE5IFhCIFNvZnR3YXJlXHJcbiovXHJcbmxldCB3ZWJpeCA9IHdpbmRvdy53ZWJpeDtcclxuaWYgKHdlYml4KSB7XHJcbiAgICBwYXRjaCh3ZWJpeCk7XHJcbn1cclxuY29uc3QgcGx1Z2lucyA9IHtcclxuICAgIFVubG9hZEd1YXJkLCBMb2NhbGUsIE1lbnUsIFRoZW1lLCBVc2VyLCBTdGF0dXMsIFVybFBhcmFtXHJcbn07XHJcbmNvbnN0IHcgPSB3aW5kb3c7XHJcbmlmICghdy5Qcm9taXNlKSB7XHJcbiAgICB3LlByb21pc2UgPSB3LndlYml4LnByb21pc2U7XHJcbn1cblxuZXhwb3J0IHsgcGx1Z2lucywgSmV0QXBwLCBKZXRWaWV3LCBIYXNoUm91dGVyLCBTdG9yZVJvdXRlciwgVXJsUm91dGVyLCBFbXB0eVJvdXRlciwgU3ViUm91dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qZXQuanMubWFwXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJjb25zdCBsb2dvdXRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ291dCc7XHJcbmNvbnN0IGxvZ2luVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbic7XHJcbmNvbnN0IHJlZ2lzdGVyVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemF0aW9uIHtcclxuXHRyZWdpc3RlcihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChyZWdpc3RlclVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ2luVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9nb3V0KGRhdGUpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChsb2dvdXRVcmwsIGRhdGUpO1xyXG5cdH1cclxufSIsImNvbnN0IERVTU1ZQ09WRVIgPSAnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2FkL2ZkLzU4L2FkZmQ1ODczYmUzODQxZjA2NjBlNmFhYTAwY2RlMThlLmpwZyc7XHJcbmNvbnN0IFNVQ0NFU1NfU1FMID0gMjtcclxuY29uc3QgU1VDQ0VTU19NT05HTyA9IDIwMDtcclxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQge0RVTU1ZQ09WRVIsIFNVQ0NFU1NfU1FMLCBTVUNDRVNTX01PTkdPLCBVUkx9OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvbG9jYWxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBCb29rc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBbXTtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vYm9va3MvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKGlkKSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSB7dXNlcklkOiBpZH07XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwsIHVzZXJJZCk7XHJcblx0fVxyXG5cclxuXHRnZXRCb29rKGJvb2tJZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7Ym9va0lkfWApO1xyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhLCBmdW5jKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhLCBmdW5jKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKGAke3RoaXMuX3VybH0ke2lkfWApO1xyXG5cdH1cclxuXHJcblx0c2VhcmNoKHJlcSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfXNlYXJjaC8ke3JlcX1gKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBCb29rc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIEZpbGVzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9maWxlcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRkb3dubG9hZEl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucmVzcG9uc2UoJ2Jsb2InKS5nZXQoYCR7dGhpcy5fdXJsfWRvd25sb2FkLyR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKGAke3RoaXMuX3VybH0ke2lkfWApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZpbGVzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgTGlrZXNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gW107XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L2xpa2VzL2A7XHJcblx0fVxyXG5cclxuXHRnZXRMaWtlcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHJcblx0fVxyXG5cclxuXHRhZGRMaWtlKHVzZXJJZCwgYm9va0lkKSB7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0Ym9va0lkOiBib29rSWRcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVMaWtlKHVzZXJJZCwgYm9va0lkKSB7XHJcblx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHR1c2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0Ym9va0lkOiBib29rSWRcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5kZWwodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMaWtlc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIE9yZGVyc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vb3JkZXJzL2A7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW1zKHVzZXJJZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7dXNlcklkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKG9yZGVyKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBvcmRlcik7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVVc2VyT3JkZXJzKG9yZGVyc1RvUmVtb3ZlLCB1c2VySWQpIHtcclxuXHRcdHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCB7cmVtb3ZlOiBvcmRlcnNUb1JlbW92ZSwgdXNlcklkOiB1c2VySWR9KTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKGAke3RoaXMuX3VybH0ke2lkfWApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9yZGVyc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIFVzZXJzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS91c2Vycy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHJcblx0Z2V0UmVhZGVycygpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0vcmVhZGVyc2ApO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2Vyc01vZGVsKCk7IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0IHtKZXRBcHAsIEVtcHR5Um91dGVyLCBIYXNoUm91dGVyIH0gZnJvbSAnd2ViaXgtamV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgSmV0QXBwe1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZyl7XHJcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcclxuXHRcdFx0aWQgXHRcdDogQVBQTkFNRSxcclxuXHRcdFx0dmVyc2lvbiA6IFZFUlNJT04sXHJcblx0XHRcdHJvdXRlciBcdDogQlVJTERfQVNfTU9EVUxFID8gRW1wdHlSb3V0ZXIgOiBIYXNoUm91dGVyLFxyXG5cdFx0XHRkZWJ1ZyBcdDogIVBST0RVQ1RJT04sXHJcblx0XHRcdHN0YXJ0IFx0OiAnL2xvZ2luJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRzdXBlcih7IC4uLmRlZmF1bHRzLCAuLi5jb25maWcgfSk7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUJVSUxEX0FTX01PRFVMRSl7XHJcblx0d2ViaXgucmVhZHkoKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBwID0gbmV3IE15QXBwKCk7XHJcblx0XHRhcHAuYXR0YWNoRXZlbnQoJ2FwcDpndWFyZCcsICh1cmwsIHZpZXcsIG5hdikgPT4ge1xyXG5cdFx0XHRpZih1cmwuaW5kZXhPZignaWQnKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRjb25zdCB1cmxQYXJ0cyA9IHVybC5zcGxpdCgnLycpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXRQYXJ0O1xyXG5cclxuXHRcdFx0XHR1cmxQYXJ0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYoZWwuaW5kZXhPZignaWQnKSAhPSAtMSkge1xyXG5cdFx0XHRcdFx0XHR0YXJnZXRQYXJ0ID0gZWw7XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRjb25zdCBpID0gdGFyZ2V0UGFydC5pbmRleE9mKCdpZCcpO1xyXG5cdFx0XHRcdGNvbnN0IHJvbGUgPSB0YXJnZXRQYXJ0LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0Y29uc3QgaWQgPSB0YXJnZXRQYXJ0LnNsaWNlKGkrMyk7XHJcbiBcclxuXHRcdFx0XHR3ZWJpeC5hamF4KCkuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hlY2snKS50aGVuKFxyXG5cdFx0XHRcdFx0KHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IHJlcy5qc29uKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnJvbGUgIT0gcm9sZSB8fCByZXNwb25zZS5pZCAhPSBpZCkge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YXBwLnJlbmRlcigpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5nbG9iYWwubG9nID0gZnVuY3Rpb24gKCkge1xyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcclxuXHR9IGNhdGNoIChfZXJyb3IpIHsgfVxyXG59OyIsImZ1bmN0aW9uIHRvZ2dsZUVsZW1lbnQgKGNvbmRpdGlvbiwgZWxlbWVudCkge1xyXG5cdGlmIChjb25kaXRpb24pIHtcclxuXHRcdGVsZW1lbnQuc2hvdygpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGVsZW1lbnQuaGlkZSgpO1xyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkSXRlbSAoTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pIHtcclxuXHRhd2FpdCBNb2RlbC5hZGRJdGVtKGRhdGEpO1xyXG5cdGNvbnN0IG5ld0RhdGEgPSBhd2FpdCBNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpO1xyXG5cdHN1Y2Nlc3NBY3Rpb24obmV3RGF0YSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUl0ZW0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSB7XHJcblx0YXdhaXQgTW9kZWwudXBkYXRlSXRlbShkYXRhKTtcclxuXHRjb25zdCBuZXdEYXRhID0gYXdhaXQgTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKTtcclxuXHRzdWNjZXNzQWN0aW9uKG5ld0RhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21iaW5lVXNlck5hbWVzSW5BcnIoanNvbk9iaikge1xyXG5cdGxldCB1c2Vyc0FyciA9IGpzb25PYmouanNvbigpO1xyXG5cclxuXHR1c2Vyc0FyciA9IHVzZXJzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdGVsWydmdWxsX25hbWUnXSA9IGAke2VsLnVzZXJfbmFtZX0gJHtlbC51c2VyX3N1cm5hbWV9YDtcclxuXHRcdHJldHVybiBlbDtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHVzZXJzQXJyO1xyXG59XHJcblxyXG53ZWJpeC5wcm90b1VJKHtcclxuXHRuYW1lOiAnYWN0aXZlTGlzdCcsXHJcblx0ZGVmYXVsdHM6IHtcclxuXHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0dHlwZToge1xyXG5cdFx0XHRoZWlnaHQ6IDMwXHJcblx0XHR9XHJcblx0fVxyXG59LCB3ZWJpeC51aS5saXN0KTtcclxuXHJcbmV4cG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgY29tYmluZVVzZXJOYW1lc0luQXJyfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWRtaW5cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi91c2VyRm9ybVwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qc1wiLFxuXHRcIi4vYWRtaW4vdXNlckZvcm0uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanNcIixcblx0XCIuL2NvbW1vbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9jb21tb24vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vYm9va0NhcmQuanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL29yZGVyc0Zvcm1cIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL29yZGVyc0Zvcm0uanNcIixcblx0XCIuL2xpYnJhcmlhbi9vcmRlcnNGb3JtLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9vcmRlcnNGb3JtLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vdXNlcnNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL3VzZXJzLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vdXNlcnMuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL3VzZXJzLmpzXCIsXG5cdFwiLi9sb2dpblwiOiBcIi4vc291cmNlcy92aWV3cy9sb2dpbi5qc1wiLFxuXHRcIi4vbG9naW4uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbG9naW4uanNcIixcblx0XCIuL3JlYWRlclwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9cIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvYm9va0NhcmRcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9yZWFkZXIvYm9va0NhcmQuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qc1wiLFxuXHRcIi4vcmVhZGVyL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanNcIixcblx0XCIuL3JlYWRlci9tYWluXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzXCIsXG5cdFwiLi9yZWFkZXIvbWFpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qc1wiLFxuXHRcIi4vcmVhZGVyL3NldHRpbmdzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qc1wiLFxuXHRcIi4vcmVhZGVyL3NldHRpbmdzLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qc1wiLFxuXHRcIi4vcmVhZGVyL3RvcHNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanNcIixcblx0XCIuL3JlYWRlci90b3BzLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzXCIsXG5cdFwiLi9yZWdpc3RlclwiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiLFxuXHRcIi4vcmVnaXN0ZXIuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL3ZpZXdzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IFVzZXJGb3JtIGZyb20gJy4vdXNlckZvcm0nO1xyXG5pbXBvcnQge2NvbWJpbmVVc2VyTmFtZXNJbkFycn0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIFxyXG5cdFx0XHR0ZW1wbGF0ZTogJ1VzZXJzIGxpc3QnXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGR0YWJsZSA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGlkOiAndXNlcnNMaXN0JyxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Z1bGxfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdOYW1lJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyb2xlX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUm9sZScsXHJcblx0XHRcdFx0XHR3aWR0aDogMTAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3Bob25lX251bWJlcnMnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUGhvbmUgbnVtYmVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxNTBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZW1haWwnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRW1haWwnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXQnLCBcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VkaXQnLCBcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAne2NvbW1vbi5lZGl0SWNvbigpfSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnd3hpLXBlbmNpbCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fdXNlckZvcm0uc2hvd1dpbmRvdyhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZFVzZXJCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCB1c2VyJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYWRkVXNlcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHRyb3dzOltcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0dHlwZTogJ2NsZWFuJyxcclxuXHRcdFx0XHRcdGNvbHM6IFtoZWFkZXIsIGxvZ291dF0gXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkdGFibGUsXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSwgYWRkVXNlckJ0biwge31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHVzZXJzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlcnNBcnIgPSBjb21iaW5lVXNlck5hbWVzSW5BcnIoZGJEYXRhKTtcclxuXHRcdFx0dGhpcy51c2Vyc0RhdGEgPSB1c2Vyc0FycjtcclxuXHRcdFx0JCQoJ3VzZXJzTGlzdCcpLnBhcnNlKHVzZXJzQXJyKTtcclxuXHRcdH0pO1x0XHRcclxuXHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cignJVktJW0tJWQnKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuX3VzZXJGb3JtID0gdGhpcy51aShVc2VyRm9ybSk7XHJcblx0fVxyXG5cclxuXHRhZGRVc2VyKCkge1xyXG5cdFx0dGhpcy5fdXNlckZvcm0uc2hvd1dpbmRvdygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQge3RvZ2dsZUVsZW1lbnQsIGFkZEl0ZW0sIHVwZGF0ZUl0ZW0sIGNvbWJpbmVVc2VyTmFtZXNJbkFycn0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJXaW5kb3cnLFxyXG5cdFx0XHRoZWFkOiAnRWRpdCB1c2VyJyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyRm9ybScsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICdpZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0ZpcnN0IG5hbWUnLCBuYW1lOiAndXNlcl9uYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdMYXN0IG5hbWUnLCBuYW1lOiAndXNlcl9zdXJuYW1lJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnUm9sZScsIG5hbWU6ICdyb2xlX2lkJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG9wdGlvbnM6IFtcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMSwgdmFsdWU6ICdyZWFkZXInfSxcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMiwgdmFsdWU6ICdsYWJyYXJpYW4nfSxcclxuXHRcdFx0XHRcdFx0XHRcdHtpZDogMywgdmFsdWU6ICdhZG1pbid9XHJcblx0XHRcdFx0XHRcdFx0XSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3Nwb3J0IElEJywgbmFtZTogJ3Bhc3Nwb3J0X0lEJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdCaXJ0aCBkYXRlJywgbmFtZTogJ2JpcnRoX2RhdGUnLCBsb2NhbElkOiAnYmlydGhfZGF0ZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQWRkcmVzcycsIG5hbWU6ICdhZGRyZXNzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQaG9uZScsIG5hbWU6ICdwaG9uZV9udW1iZXJzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdFbWFpbCcsIG5hbWU6ICdlbWFpbCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAnYWNjb3VudF9wYXNzd29yZCcsIGxvY2FsSWQ6ICdpbml0aWFsX3Bhc3N3b3JkJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdFx0XHQncm9sZV9pZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J2VtYWlsJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnYWNjb3VudF9wYXNzd29yZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdTYXZlJywgdHlwZTogJ2Zvcm0nLCBsb2NhbElkOiAnc2F2ZUJ0bicsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ3VzZXJGb3JtJyk7XHJcblx0XHR0aGlzLndpbmRvdyA9IHRoaXMuJCQoJ3VzZXJXaW5kb3cnKTtcclxuXHR9XHJcblxyXG5cdHN1Y2Nlc3NBY3Rpb24obmV3RGF0YSkge1xyXG5cdFx0dGhpcy53ZWJpeC5tZXNzYWdlKCdTdWNjZXNzJyk7XHJcblx0XHRjb25zdCB1c2Vyc0FyciA9IGNvbWJpbmVVc2VyTmFtZXNJbkFycihuZXdEYXRhKTtcclxuXHRcdCQkKCd1c2Vyc0xpc3QnKS5wYXJzZSh1c2Vyc0Fycik7XHJcblx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHR9XHJcblxyXG5cdHNob3dXaW5kb3coaWQpIHtcclxuXHRcdHRoaXMuaXNOZXcgPSBpZCA/IGZhbHNlIDogdHJ1ZTtcdFxyXG5cclxuXHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnNldEhUTUwoJ0FkZCB1c2VyJyk7XHJcblx0XHRcdHRoaXMud2luZG93LmdldEhlYWQoKS5yZWZyZXNoKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dXNlcnNNb2RlbC5nZXRJdGVtKGlkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0XHRsZXQgdXNlciA9IGRiRGF0YS5qc29uKCk7XHJcblx0XHRcdFx0dXNlciA9IHRoaXMuY29udmVydFVzZXJCaXRoRGF0ZSh1c2VyKTtcclxuXHRcdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKHVzZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpbml0aWFsUGFzc3dvcmQgPSB0aGlzLiQkKCdpbml0aWFsX3Bhc3N3b3JkJyk7XHJcblx0XHR0b2dnbGVFbGVtZW50KHRoaXMuaXNOZXcsIGluaXRpYWxQYXNzd29yZCk7XHJcblx0XHRcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRjb252ZXJ0VXNlckJpdGhEYXRlKGRhdGEpIHtcclxuXHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKCclWS0lbS0lZCcpO1xyXG5cdFx0ZGF0YVsnYmlydGhfZGF0ZSddID0gZm9ybWF0KG5ldyBEYXRlKGRhdGEuYmlydGhfZGF0ZSkpO1xyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5mb3JtLmdldFZhbHVlcygpO1x0XHJcblx0XHRcclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbi5iaW5kKHRoaXMpKTtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0odXNlcnNNb2RlbCwgZGF0YSwgdGhpcy5zdWNjZXNzQWN0aW9uLmJpbmQodGhpcykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHJcblx0aGlkZVdpbmRvdygpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25zdHJ1Y3RvcihhcHAsIGxpYnJhcnlDb25maWcsIGJvb2tDYXJkKSB7XHJcblx0XHRzdXBlcihhcHApO1xyXG5cdFx0dGhpcy5saWJyYXJ5Q29uZmlnID0gbGlicmFyeUNvbmZpZztcclxuXHRcdHRoaXMuYm9va0NhcmQgPSBib29rQ2FyZDtcclxuXHR9XHJcblxyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTogJ2hlYWRlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtYm9va1wiPjwvaT4gTGlzdCBvZiBib29rcycsXHJcblx0XHRcdGNzczogJ2NlbnRlciBwYWdlX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICdkdExpYnJhcnknLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYm9va1RpdGxlJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydUaXRsZScsIHtjb250ZW50OiAndGV4dEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JOYW1lJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydBdXRob3InLCB7Y29udGVudDogJ3RleHRGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZ2VucmVzJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnR2VucmVzJywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnY291bnRyeU9mUHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydDb3VudHJ5Jywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAneWVhck9mUHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0c29ydDogJ2RhdGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGZvcm1hdDogd2ViaXguRGF0ZS5kYXRlVG9TdHIoJyVZJyksXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnWWVhcicsIHtjb250ZW50OlwiZGF0ZVJhbmdlRmlsdGVyXCJ9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdmFpbGFibGVDb3BpZXMnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0F2YWlsYWJsZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWJvb2snLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ2VCb29rJywge2NvbnRlbnQ6XCJzZWxlY3RGaWx0ZXJcIn1dLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IChvYmopID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9iai5lYm9vaz09PSd5ZXMnID8gJzxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPicgOiAnJ1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAndmlld0NvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdWaWV3JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXRDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRzY2hlbWU6IHtcclxuXHRcdFx0XHQkaW5pdDogZnVuY3Rpb24gKG9iaikge1xyXG5cdFx0XHRcdFx0b2JqLnllYXJPZlB1YmxpY2F0aW9uID0gb2JqLnllYXJPZlB1YmxpY2F0aW9uID8gbmV3IERhdGUob2JqLnllYXJPZlB1YmxpY2F0aW9uKSA6ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS1leWUnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cChpZCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZmEtZWRpdCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fYm9va0NhcmQuc2hvd1BvcHVwKGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS10cmFzaCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVCb29rKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoID0ge1xyXG5cdFx0XHR2aWV3OiAnc2VhcmNoJyxcclxuXHRcdFx0aWQ6ICdsaWJyYXJ5U2VhY2gnLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25FbnRlcjogKCkgPT4gdGhpcy5zZWFyY2goKSxcclxuXHRcdFx0XHRvblNlYXJjaEljb25DbGljazogKCkgPT4gdGhpcy5zZWFyY2goKVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNhdmVQREYgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdGxhYmVsOiAnU2F2ZSBhcyBQREYnLFxyXG5cdFx0XHR3aWR0aDogMTI1LFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHdlYml4LnRvUERGKCQkKCdkdExpYnJhcnknKSwge1xyXG5cdFx0XHRcdFx0Y29sdW1uczoge1xyXG5cdFx0XHRcdFx0XHQnYm9va1RpdGxlJzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0J2F1dGhvck5hbWUnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHQnZ2VucmVzJzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0J2NvdW50cnlPZlB1YmxpY2F0aW9uJzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0J3llYXJPZlB1YmxpY2F0aW9uJzogdHJ1ZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZpbGVuYW1lOiAnQm9va3MgbGlzdCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzYXZlRE9DWCA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0bGFiZWw6ICdTYXZlIGFzIERPQ1gnLFxyXG5cdFx0XHR3aWR0aDogMTI1LFxyXG5cdFx0XHRjbGljazogKCkgPT4gdGhpcy5zYXZlRE9DWCgpXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRoZWFkZXIsIHNlYXJjaCwgZHRhYmxlLCBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0c2F2ZVBERixcclxuXHRcdFx0XHRcdFx0c2F2ZURPQ1gsXHJcblx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0YXN5bmMgaW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9ICQkKCdkdExpYnJhcnknKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMubGlicmFyeUNvbmZpZy5yb2xlKSB7XHJcblx0XHRcdGNhc2UgJ3JlYWRlcic6IFxyXG5cdFx0XHRcdHRoaXMuZ3JpZC5nZXRDb2x1bW5Db25maWcoJ2VkaXRDb2wnKS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZ3JpZC5nZXRDb2x1bW5Db25maWcoJ3JlbW92ZUNvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xpYnJhcmlhbic6XHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygndmlld0NvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHR0aGlzLmdyaWQucmVmcmVzaENvbHVtbnMoKTtcclxuXHRcdGF3YWl0IHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0YXdhaXQgdGhpcy5nZXRGaWxlcygpO1xyXG5cdFx0dGhpcy5jaGVja0ZpbGVzKCk7XHJcblx0XHR0aGlzLmdyaWQucGFyc2UodGhpcy5ib29rc0Fycik7XHJcblx0XHR0aGlzLl9ib29rQ2FyZCA9IHRoaXMudWkodGhpcy5ib29rQ2FyZCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXREYXRhKCkge1x0XHRcclxuXHRcdGNvbnN0IHVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdGNvbnN0IGRiRGF0YSA9IGF3YWl0IGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIodXNlcklkKTtcclxuXHRcdHRoaXMuYm9va3NBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0RmlsZXMoKSB7XHJcblx0XHRjb25zdCBkYkRhdGEgPSBhd2FpdCBmaWxlc01vZGVsLmdldERhdGFGcm9tU2VydmVyKCk7XHJcblx0XHR0aGlzLmZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcdFx0XHRcdFx0XHRcclxuXHR9XHJcblxyXG5cdGNoZWNrRmlsZXMoKSB7XHJcblx0XHR0aGlzLmJvb2tzQXJyLmZvckVhY2goKGJvb2ssIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgaXNGaWxlcyA9IHRoaXMuZmlsZXNBcnIuZmluZCgoZWwpID0+IGVsLmJvb2tJZCA9PT0gYm9vay5pZCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihpc0ZpbGVzKSB7XHJcblx0XHRcdFx0dGhpcy5ib29rc0FycltpXS5lYm9vayA9ICd5ZXMnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuYm9va3NBcnJbaV0uZWJvb2sgPSAnbm8nO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUJvb2soaWQpIHtcclxuXHRcdGJvb2tzTW9kZWwucmVtb3ZlSXRlbShpZCkudGhlbigoKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZC5yZW1vdmUoaWQpO1xyXG5cdFx0fSk7XHRcdFxyXG5cdH1cclxuXHJcblx0YWRkQm9vaygpIHtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cCgpO1xyXG5cdH1cclxuXHJcblx0c2VhcmNoKCkge1xyXG5cdFx0Y29uc3Qgc2VhcmNoSW5wdXQgPSAkJCgnbGlicmFyeVNlYWNoJyk7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0LmdldFZhbHVlKCk7XHJcblx0XHRib29rc01vZGVsLnNlYXJjaCh2YWx1ZSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZC5jbGVhckFsbCgpO1xyXG5cdFx0XHR0aGlzLmdyaWQucGFyc2UocmVzLmpzb24oKSk7XHJcblx0XHR9KTtcclxuXHRcdHNlYXJjaElucHV0LnNldFZhbHVlKCcnKTtcclxuXHR9XHJcblxyXG5cdHNhdmVET0NYKCkge1xyXG5cdFx0Y29uc3QgZHREYXRhID0gJCQoJ2R0TGlicmFyeScpLnNlcmlhbGl6ZSgpO1xyXG5cdFx0bGV0IGRvY0RhdGEgPSAnJztcclxuXHRcdGNvbnN0IGRhdGVGb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cignJVknKTtcclxuXHJcblx0XHRkdERhdGEuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGVsKSB7XHJcblx0XHRcdFx0c3dpdGNoKGtleSl7XHJcblx0XHRcdFx0XHRjYXNlICdib29rVGl0bGUnOiBkb2NEYXRhICs9IGBUaXRsZTogJHtlbFtrZXldfTtcXG5gO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2F1dGhvck5hbWUnOiBkb2NEYXRhICs9IGBBdXRob3I6ICR7ZWxba2V5XX07XFxuYDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdnZW5yZXMnOiBkb2NEYXRhICs9IGBHZW5yZTogJHtlbFtrZXldfTtcXG5gO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2NvdW50cnlPZlB1YmxpY2F0aW9uJzogZG9jRGF0YSArPSBgQ291bnRyeSBvZiBwdWJsaWNhdGlvbjogJHtlbFtrZXldfTtcXG5gO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2F2YWlsYWJsZUNvcGllcyc6IGRvY0RhdGEgKz0gYEF2YWlsYWJsZSBjb3BpZXM6ICR7ZWxba2V5XX07XFxuYDtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdwdWJsaXNoaW5nSG91c2UnOiBkb2NEYXRhICs9IGBQdWJsaXNoaW5nIGhvdXNlOiAke2VsW2tleV19O1xcbmA7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbnVtYmVyT2ZQYWdlcyc6IGRvY0RhdGEgKz0gYE51bWJlciBvZiBwYWdlczogJHtlbFtrZXldfTtcXG5gO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3llYXJPZlB1YmxpY2F0aW9uJzogZG9jRGF0YSArPSBgWWVhciBvZiBwdWJsaWNhdGlvbjogJHtkYXRlRm9ybWF0KGVsW2tleV0pfTtcXG5gO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZG9jRGF0YSArPSAnXFxuXFxuJ1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRcdGxpbmsuZG93bmxvYWQgPSAnZGF0YS5kb2MnO1xyXG5cclxuXHRcdGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZG9jRGF0YV0sIHt0eXBlOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnfSk7XHJcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cdFx0XHJcblx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuXHRcdHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGluay5ocmVmID0gcmVhZGVyLnJlc3VsdDtcclxuXHRcdFx0bGluay5jbGljaygpO1xyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcbmltcG9ydCB7RFVNTVlDT1ZFUn0gZnJvbSAnLi4vLi4vY29uc3RzJztcclxuaW1wb3J0IHt0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcbmltcG9ydCBmaWxlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9maWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rQ2FyZCBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRjb25zdCBib29rQ292ZXIgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ292ZXInLFxyXG5cdFx0XHR3aWR0aDogMTIwLFxyXG5cdFx0XHRoZWlnaHQ6IDE4MCxcclxuXHRcdFx0Y3NzOiAnYm9va19jb3ZlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAodXJsKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSlcIiA+PC9kaXY+YDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBib29rQ2FyZCA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDYXJkTGlicmFyaWFuJyxcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1RpdGxlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYm9va1RpdGxlJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F1dGhvcicsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2F1dGhvck5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ0dlbnJlcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2dlbnJlcycsIG9wdGlvbnM6IFtcclxuXHRcdFx0XHRcdCcnLCAnRmljdGlvbicsICdGYW50YXN5JywgJ1RocmlsbGVyJywgJ0hvcnJvcicsICdNeXN0ZXJ5JywgJ0hpc3RvcmljYWwnLCAnV2VzdGVybnMnLCAnRmFtaWx5JywgJ0RhcmsgY29tZWR5J1xyXG5cdFx0XHRcdF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0NvdW50cnknLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdjb3VudHJ5T2ZQdWJsaWNhdGlvbicgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQdWJsaXNoaW5nIGhvdXNlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAncHVibGlzaGluZ0hvdXNlJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVDb3BpZXMnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFnZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdudW1iZXJPZlBhZ2VzJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2RhdGVwaWNrZXInLCBsYWJlbDogJ1llYXIgb2YgcHVibGljYXRpb24nLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIHR5cGU6ICd5ZWFyJywgZm9ybWF0OiAnJVknLCBuYW1lOiAneWVhck9mUHVibGljYXRpb24nIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQ292ZXIgcGhvdG8nLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdjb3ZlclBob3RvJyB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVGV4dEZpbGUgPSB7XHJcblx0XHRcdHZpZXc6ICd1cGxvYWRlcicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS11cGxvYWRcIj48L2k+IFVwbG9hZCB0ZXh0IGZpbGUnLFxyXG5cdFx0XHRsb2NhbElkOiAnYm9va0ZpbGVzJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRhdXRvc2VuZDogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGZvcm1EYXRhOiAoKSA9PiAoe1xyXG5cdFx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0Ym9va0lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0YWNjZXB0OiAndGV4dC9wbGFpbiwgYXBwbGljYXRpb24vcGRmLCAuZG9jLCAuZG9jeCcsXHJcblx0XHRcdHVwbG9hZDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9maWxlcy91cGxvYWQvdGV4dCcsXHJcblx0XHRcdGxpbms6ICdmaWxlc0xpc3QnXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGZpbGVzTGlzdCA9IHtcclxuXHRcdFx0dmlldzogJ2xpc3QnLFxyXG5cdFx0XHR0eXBlOiAndXBsb2FkZXInLFxyXG5cdFx0XHRpZDogJ2ZpbGVzTGlzdCcsXHJcblx0XHRcdGF1dG9oZWlnaHQ6dHJ1ZSwgXHJcblx0XHRcdGJvcmRlcmxlc3M6dHJ1ZVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRBdWRpb0ZpbGUgPSB7XHJcblx0XHRcdHZpZXc6ICd1cGxvYWRlcicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXMgZmEtbXVzaWNcIj48L2k+IFVwbG9hZCBhdWRpbycsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdWRpb0ZpbGVzJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRhdXRvc2VuZDogZmFsc2UsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGZvcm1EYXRhOiAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRib29rSWQ6IHRoaXMuYm9va0lkXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWNjZXB0OiAnLm1wMycsXHJcblx0XHRcdHVwbG9hZDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9maWxlcy91cGxvYWQvYXVkaW8nLFxyXG5cdFx0XHRsaW5rOiAnYXVkaW9MaXN0J1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdWRpb0xpc3QgPSB7XHJcblx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0dHlwZTogJ3VwbG9hZGVyJyxcclxuXHRcdFx0aWQ6ICdhdWRpb0xpc3QnLFxyXG5cdFx0XHRhdXRvaGVpZ2h0OnRydWUsIFxyXG5cdFx0XHRib3JkZXJsZXNzOnRydWVcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlVGV4dEZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiAnYWN0aXZlTGlzdCcsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdmFpbGFibGVUZXh0RmlsZXMnLFxyXG5cdFx0XHRhdXRvaGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZTogJyNuYW1lIyA8c3BhbiBjbGFzcz1cImxpc3RfYnV0dG9uXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10aW1lc1wiPjwvaT48L3NwYW4+JyxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS10aW1lcyc6IChldiwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRmlsZSh0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKSwgaWQpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiAnYWN0aXZlTGlzdCcsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdmFpbGFibGVBdWRpb0ZpbGVzJyxcclxuXHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6ICcjbmFtZSMgPHNwYW4gY2xhc3M9XCJsaXN0X2J1dHRvblwiPjxpIGNsYXNzID0gXCJmYXMgZmEtdGltZXNcIj48L2k+PC9zcGFuPicsXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtdGltZXMnOiAoZXYsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUZpbGUodGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLCBpZCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNhdmVCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdGxhYmVsOiAnU2F2ZScsXHJcblx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3BvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDU1MCxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHZpZXc6ICdzY3JvbGx2aWV3JyxcclxuXHRcdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdGJvb2tDb3ZlciwgXHJcblx0XHRcdFx0XHRcdGJvb2tDYXJkLFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ3RlbXBsYXRlJyxcclxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZTogJ0ZpbGVzJyxcclxuXHRcdFx0XHRcdFx0XHRhdXRvaGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNzczogJ2NlbnRlcidcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e2hlaWdodDogMn0sXHJcblx0XHRcdFx0XHRcdGF2YWlsYWJsZVRleHRGaWxlcyxcclxuXHRcdFx0XHRcdFx0YXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdFx0ZmlsZXNMaXN0LFxyXG5cdFx0XHRcdFx0XHRhdWRpb0xpc3QsXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDE1fSxcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHRsb2NhbElkOiAnYWRkaW5nRmlsZXNCdXR0b25zJyxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFsge30sIGFkZFRleHRGaWxlLCBhZGRBdWRpb0ZpbGUsIHt9IF0gXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDF9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdYOiAxNSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y29sczogW3t9LCBzYXZlQnRuLCB7fV1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ2Jvb2tDYXJkTGlicmFyaWFuJyk7XHJcblx0XHR0aGlzLmR0TGlicmFyeSA9ICQkKCdkdExpYnJhcnknKTtcclxuXHR9XHJcblxyXG5cdHNob3dQb3B1cChpZCkge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuaXNOZXcgPSBpZCA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdHRoaXMuYm9va0lkID0gaWQgfHwgJyc7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oJ2lkJywgdHJ1ZSk7XHJcblxyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYm9va0NvdmVyJykpO1xyXG5cdFx0dG9nZ2xlRWxlbWVudCghdGhpcy5pc05ldywgdGhpcy4kJCgnYWRkaW5nRmlsZXNCdXR0b25zJykpO1xyXG5cclxuXHRcdGlmKCF0aGlzLmlzTmV3KSB7XHJcblx0XHRcdGJvb2tzTW9kZWwuZ2V0Qm9vayhpZCkudGhlbigoYm9va0RhdGEpID0+IHtcclxuXHRcdFx0XHRjb25zdCBib29rID0gYm9va0RhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBmaWxlc0FyciA9IGJvb2suZmlsZXM7XHJcblx0XHRcdFx0Y29uc3QgdGV4dEZpbGVzID0gW107XHJcblx0XHRcdFx0Y29uc3QgYXVkaW9GaWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRmaWxlc0Fyci5mb3JFYWNoKChmaWxlKSA9PiB7XHJcblx0XHRcdFx0XHRzd2l0Y2goZmlsZS5kYXRhVHlwZSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0ZXh0JzpcclxuXHRcdFx0XHRcdFx0XHR0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYXVkaW8nOlxyXG5cdFx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdFx0XHR0aGlzLiQkKCdib29rQ292ZXInKS5zZXRWYWx1ZXMoYm9vay5jb3ZlclBob3RvIHx8IERVTU1ZQ09WRVIpO1xyXG5cdFx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLnBhcnNlKHRleHRGaWxlcyk7XHJcblx0XHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0XHR9KTtcdFx0XHRcdFx0XHRcclxuXHRcdH1cdFx0XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1x0XHJcblx0fVxyXG5cclxuXHRzdWNjZXNzQWN0aW9uIChuZXdEYXRhKSB7XHJcblx0XHR0aGlzLndlYml4Lm1lc3NhZ2UoJ1N1Y2Nlc3MnKTtcclxuXHRcdHRoaXMuZHRMaWJyYXJ5LnBhcnNlKG5ld0RhdGEuanNvbigpKTtcclxuXHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5mb3JtLmdldFZhbHVlcygpO1xyXG5cclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKGJvb2tzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbi5iaW5kKHRoaXMpKTtcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0oYm9va3NNb2RlbCwgZGF0YSwgdGhpcy5zdWNjZXNzQWN0aW9uLmJpbmQodGhpcykpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiQkKCdib29rRmlsZXMnKS5zZW5kKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKXtcclxuXHRcdFx0XHRcdHRoaXMud2ViaXgubWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy4kJCgnYXVkaW9GaWxlcycpLnNlbmQoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2Upe1xyXG5cdFx0XHRcdFx0dGhpcy53ZWJpeC5tZXNzYWdlKHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHJcblx0cmVtb3ZlRmlsZSh0YXJnZXRMaXN0LCBpZCkge1xyXG5cdFx0ZmlsZXNNb2RlbC5yZW1vdmVJdGVtKGlkKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGFyZ2V0TGlzdC5yZW1vdmUoaWQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSAoKXtcclxuXHRcdHRoaXMuZm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuZmlsZXMuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5maWxlcy5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIFxyXG5cdFx0XHRsYXlvdXQ6J3knLCBcclxuXHRcdFx0c2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnbWFpbicsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J0xpYnJhcnknLCBpZDonbGlicmFyeScsICBpY29uOidmYXMgZmEtYm9vay1yZWFkZXInIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonVXNlcnMnLCBpZDondXNlcnMnLCAgaWNvbjonZmFzIGZhLWNvZycgfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbjp7XHJcblx0XHRcdFx0b25NZW51SXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oJ2lkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmFwcC5zaG93KGBsaWJyYXJpYW4uaW5kZXg/aWQ9JHt1c2VySWR9L2xpYnJhcmlhbi4ke2lkfWApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0dHlwZTonY2xlYW4nLCBwYWRkaW5nWDo1LCBjc3M6J2FwcF9sYXlvdXQnLCBcclxuXHRcdFx0Y29sczpbXHJcblx0XHRcdFx0eyBwYWRkaW5nWDo1LCBwYWRkaW5nWToxMCwgcm93czogWyB7Y3NzOid3ZWJpeF9zaGFkb3dfbWVkaXVtJywgcm93czpbaGVhZGVyLCBtZW51LCBsb2dvdXRdfSBdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdyZXNpemVyJywgd2lkdGg6IDUgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0eXBlOiAnd2lkZScsIHBhZGRpbmdZOiAxMCwgcGFkZGluZ1g6IDUsIHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0eyAkc3VidmlldzogdHJ1ZSB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJVktJW0tJWRcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vY29tbW9uL2xpYnJhcnknO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi9ib29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaWJMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1x0XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeUNvbmZpZyA9IHtcclxuXHRcdFx0cm9sZTogJ2xpYnJhcmlhbidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQm9va0J0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQWRkIGJvb2snLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0bGlicmFyeS5hZGRCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KHRoaXMuYXBwLCBsaWJyYXJ5Q29uZmlnLCBCb29rQ2FyZCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRsaWJyYXJ5LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFt7fSxhZGRCb29rQnRuLHt9XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgb3JkZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcnNGb3JtIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3dpbmRvdycsXHJcblx0XHRcdGxvY2FsSWQ6ICd1c2VyT3JkZXJzV2luZG93JyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0aGVhZDogJ09yZGVyZWQgYm9va3MnLFxyXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdG1vdmU6IHRydWUsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnZm9ybScsXHRcclxuXHRcdFx0XHRwYWRkaW5nOiAwLFx0XHRcdFxyXG5cdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd1c2VyTmFtZScsXHJcblx0XHRcdFx0XHRcdGNzczogJ3BhZ2VfaGVhZGVyIGNlbnRlcicsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogNDUsXHJcblx0XHRcdFx0XHRcdGJvcmRlcmxlc3M6IHRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdtdWx0aWNvbWJvJyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ29yZGVyc0xpc3QnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnb3JkZXJzTGlzdCcsXHJcblx0XHRcdFx0XHRcdHN1Z2dlc3Q6IFtdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnU2F2ZScsXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnQ2FuY2VsJyxcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJCQoJ3VzZXJPcmRlcnNXaW5kb3cnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVx0XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRzaG93UG9wdXAoaWQsIHVzZXJOYW1lKSB7XHJcblx0XHR0aGlzLnVzZXJJZCA9IGlkLnJvdztcclxuXHRcdHRoaXMucG9wdXAgPSB0aGlzLiQkKCd1c2VyT3JkZXJzV2luZG93Jyk7XHJcblx0XHR0aGlzLm9yZGVyc0xpc3QgPSB0aGlzLiQkKCdvcmRlcnNMaXN0Jyk7XHJcblx0XHR0aGlzLiQkKCd1c2VyTmFtZScpLnNldEhUTUwodXNlck5hbWUpO1xyXG5cclxuXHRcdG9yZGVyc01vZGVsLmdldEl0ZW1zKHRoaXMudXNlcklkKS50aGVuKChyZXN1bHRzKSA9PiB7XHJcblx0XHRcdGNvbnN0IG9yZGVycyA9IHJlc3VsdHMuanNvbigpO1xyXG5cdFx0XHR0aGlzLmluY29taW5nT3JkZXJzID0gWy4uLm9yZGVyc107XHJcblxyXG5cdFx0XHRvcmRlcnMuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC52YWx1ZSA9IGAke2VsLmJvb2suYm9va1RpdGxlfSAtICR7ZWwuYm9vay5hdXRob3JOYW1lfWA7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5vcmRlcnNMaXN0LmRlZmluZSgnc3VnZ2VzdCcsIG9yZGVycyk7XHJcblx0XHRcdHRoaXMub3JkZXJzTGlzdC5zZXRWYWx1ZShvcmRlcnMpO1xyXG5cdFx0XHR0aGlzLm9yZGVyc0xpc3QucmVmcmVzaCgpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSgpIHtcclxuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMub3JkZXJzTGlzdC5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3Qgb3V0Y29taW5nT3JkZXJzID0gdmFsdWVzLnNwbGl0KCcsJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuaW5jb21pbmdPcmRlcnMubGVuZ3RoICE9PSBvdXRjb21pbmdPcmRlcnMubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IG9yZGVyc1RvUmVtb3ZlID0gW107XHJcblxyXG5cdFx0XHR0aGlzLmluY29taW5nT3JkZXJzLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdFx0aWYob3V0Y29taW5nT3JkZXJzLmluZGV4T2YoZWwuaWQpID09PSAtMSkge1xyXG5cdFx0XHRcdFx0b3JkZXJzVG9SZW1vdmUucHVzaChlbC5pZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG9yZGVyc01vZGVsLnJlbW92ZVVzZXJPcmRlcnMob3JkZXJzVG9SZW1vdmUsIHRoaXMudXNlcklkKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy4kJCgndXNlck9yZGVyc1dpbmRvdycpLmhpZGUoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IE9yZGVyc0Zvcm0gZnJvbSAnLi9vcmRlcnNGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzVmlldyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGR0YWJsZSA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGlkOiAndXNlcnNMaXN0TGlicmFyaWFuJyxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Z1bGxfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnTmFtZScsIHtjb250ZW50OiAndGV4dEZpbHRlcid9XSxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxODAsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEuNVxyXG5cdFx0XHRcdH0sXHRcdFx0XHRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ29yZGVycycsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdPcmRlcnMnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1mb2xkZXItb3BlblwiPjwvaT4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLWZvbGRlci1vcGVuJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dVc2VyT3JkZXJzKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRkdGFibGVcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR1c2Vyc01vZGVsLmdldFJlYWRlcnMoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IHVzZXJzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0dXNlcnNBcnIgPSB1c2Vyc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwuZnVsbF9uYW1lID0gZWwudXNlcl9uYW1lICsgJyAnICsgZWwudXNlcl9zdXJuYW1lO1x0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy51c2Vyc0RhdGEgPSB1c2Vyc0FycjtcclxuXHRcdFx0JCQoJ3VzZXJzTGlzdExpYnJhcmlhbicpLnBhcnNlKHVzZXJzQXJyKTtcclxuXHRcdH0pO1x0XHRcclxuXHJcblx0XHR0aGlzLmVkaXRPcmRlcnMgPSB0aGlzLnVpKE9yZGVyc0Zvcm0pO1xyXG5cdH1cclxuXHJcblx0c2hvd1VzZXJPcmRlcnMoaWQpIHtcclxuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbSA9ICQkKCd1c2Vyc0xpc3RMaWJyYXJpYW4nKS5nZXRJdGVtKGlkKTtcclxuXHRcdGNvbnN0IHVzZXJOYW1lID0gYCR7c2VsZWN0ZWRJdGVtLnVzZXJfbmFtZX0gJHtzZWxlY3RlZEl0ZW0udXNlcl9zdXJuYW1lfWA7XHJcblx0XHR0aGlzLmVkaXRPcmRlcnMuc2hvd1BvcHVwKGlkLCB1c2VyTmFtZSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5Gb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdsb2dpbkZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1VzZXJuYW1lJywgbmFtZTogJ3VzZXJuYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCB0eXBlOiAncGFzc3dvcmQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1hcmdpbjogNSwgY29sczogW1xyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCBsb2NhbElkOiAnbG9naW5CdG4nLCB2YWx1ZTogJ0xvZ2luJywgdHlwZTogJ2Zvcm0nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJyB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpbmsgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0NyZWF0ZSBhbiBhY2NvdW50JyxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNob3coJy9yZWdpc3RlcicpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1x0XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRsb2dpbkZvcm0sXHJcblx0XHRcdFx0XHRcdGxpbmssXHJcblx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ2xvZ2luQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdsb2dpbkZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ2luKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcdFxyXG5cdFx0XHRcdGlmIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlckRhdGEgPSByZXNwb25zZS5qc29uKCkudXNlcjtcclxuXHRcdFx0XHRcdGNvbnN0IGlkID0gdXNlckRhdGEuaWQ7XHJcblxyXG5cdFx0XHRcdFx0c3dpdGNoICh1c2VyRGF0YS5yb2xlX25hbWUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnYWRtaW4nOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYGFkbWluLmluZGV4P2lkPSR7aWR9YCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2xpYnJhcmlhbic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgbGlicmFyaWFuLmluZGV4P2lkPSR7aWR9L2xpYnJhcmlhbi5saWJyYXJ5YCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3JlYWRlcic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7aWR9L3JlYWRlci5tYWluYCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBsaWtlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9saWtlcyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudH0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQge0RVTU1ZQ09WRVJ9IGZyb20gJy4uLy4uL2NvbnN0cyc7IFxyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5pbXBvcnQgb3JkZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL29yZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rQ2FyZCBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRjb25zdCBib29rQ292ZXIgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ292ZXInLFxyXG5cdFx0XHR3aWR0aDogMTIwLFxyXG5cdFx0XHRoZWlnaHQ6IDE4MCxcclxuXHRcdFx0Y3NzOiAnYm9va19jb3ZlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAodXJsKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSlcIiA+PC9kaXY+YDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBib29rQ2FyZCA9IHtcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tDYXJkUmVhZGVyJyxcdFx0XHRcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1RpdGxlJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYm9va1RpdGxlJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JOYW1lJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdHZW5yZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdnZW5yZXMnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0NvdW50cnknLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdjb3VudHJ5T2ZQdWJsaWNhdGlvbicsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdIb3VzZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQXZhaWxhYmxlIGNvcGllcycsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2F2YWlsYWJsZUNvcGllcycsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFnZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdudW1iZXJPZlBhZ2VzJywgcmVhZG9ubHk6IHRydWUgfVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZVRleHRGaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlVGV4dEZpbGVzJyxcclxuXHRcdFx0dGVtcGxhdGU6ICcjbmFtZSM8c3BhbiBjbGFzcz1cImxpc3RfYnV0dG9uXCI+PGkgY2xhc3MgPSBcImZhcyBmYS1kb3dubG9hZFwiPjwvaT48L3NwYW4+JyxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHRvbkl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBib29rTmFtZSA9IHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmdldEl0ZW0oaWQpLm5hbWU7XHJcblxyXG5cdFx0XHRcdFx0ZmlsZXNNb2RlbC5kb3dubG9hZEl0ZW0oaWQpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR3ZWJpeC5odG1sLmRvd25sb2FkKHJlcywgYm9va05hbWUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZUF1ZGlvRmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnLFxyXG5cdFx0XHR0eXBlOntcclxuXHRcdFx0XHRoZWlnaHQ6MTAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHRlbXBsYXRlOiBcIiNuYW1lIzxhdWRpbyBjb250cm9scyBzcmM9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdWRpby8jaWQjJz48L2F1ZGlvPlwiXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG9yZGVyQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdvcmRlckJvb2snLFxyXG5cdFx0XHR0eXBlOiAnaHRtbGJ1dHRvbicsXHJcblx0XHRcdGxhYmVsOiAnPGkgY2xhc3M9XCJmYXIgZmEtaGFuZC1wYXBlclwiPjwvaT4gT3JkZXInLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLm9yZGVyQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGRvd25sb2FkQm9vayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdkb3dubG9hZEJvb2snLFxyXG5cdFx0XHR0eXBlOiAnaWNvbicsXHJcblx0XHRcdGljb246ICdmYXMgZmEtZG93bmxvYWQnLFxyXG5cdFx0XHR3aWR0aDogNjAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMub3JkZXJCb29rKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGlrZUJvb2sgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnbGlrZUJ1dHRvbicsXHJcblx0XHRcdGNzczogJ2xpa2VfYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2ljb24nLCBcclxuXHRcdFx0aWNvbjogJ2ZhciBmYS1oZWFydCcsXHJcblx0XHRcdHdpZHRoOiA0NSxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5saWtlQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOidjZW50ZXInLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDU1MCxcclxuXHRcdFx0Ym9keTp7XHJcblx0XHRcdFx0dmlldzogJ3Njcm9sbHZpZXcnLFxyXG5cdFx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0Ym9va0NvdmVyLCBib29rQ2FyZCwgYXZhaWxhYmxlVGV4dEZpbGVzLCBhdmFpbGFibGVBdWRpb0ZpbGVzLFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdYOiAxNSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQm9vaywgZG93bmxvYWRCb29rLCB7fSwgbGlrZUJvb2tcclxuXHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF0gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRzaG93UG9wdXAoaWQpIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbiA9IHRoaXMuJCQoJ2xpa2VCdXR0b24nKTtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ2Jvb2tDYXJkUmVhZGVyJyk7XHJcblx0XHR0aGlzLmZpbGVzTGlzdCA9IHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpO1xyXG5cdFx0dGhpcy5hdWRpb3NMaXN0ID0gdGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpO1xyXG5cdFx0dGhpcy5vcmRlckJ0biA9IHRoaXMuJCQoJ29yZGVyQm9vaycpO1xyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmdldFBhcmFtKCdpZCcsIHRydWUpO1xyXG5cdFx0dGhpcy5ib29rQ292ZXIgPSB0aGlzLiQkKCdib29rQ292ZXInKTtcclxuXHJcblx0XHRib29rc01vZGVsLmdldEJvb2soaWQpLnRoZW4oKGJvb2tEYXRhKSA9PiB7XHJcblx0XHRcdGNvbnN0IGJvb2sgPSBib29rRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHR0aGlzLmJvb2sgPSBib29rO1xyXG5cdFx0XHR0aGlzLmJvb2tJZCA9IGJvb2suaWQ7XHJcblxyXG5cdFx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdFx0dGhpcy5ib29rQ292ZXIuc2V0VmFsdWVzKGJvb2suY292ZXJQaG90byB8fCBEVU1NWUNPVkVSKTtcclxuXHRcdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnYmFkZ2UnLCBib29rLmNvdW50X2xpa2VzIHx8ICcwJyk7XHJcblxyXG5cdFx0XHRjb25zdCBmaWxlc0FyciA9IGJvb2suZmlsZXM7XHJcblx0XHRcdGNvbnN0IHRleHRGaWxlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhdWRpb0ZpbGVzID0gW107XHJcblxyXG5cdFx0XHRmaWxlc0Fyci5mb3JFYWNoKChmaWxlKSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoKGZpbGUuZGF0YVR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOiBcclxuXHRcdFx0XHRcdFx0dGV4dEZpbGVzLnB1c2goZmlsZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnYXVkaW8nOiBcclxuXHRcdFx0XHRcdFx0YXVkaW9GaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmZpbGVzTGlzdC5wYXJzZSh0ZXh0RmlsZXMpO1xyXG5cdFx0XHR0aGlzLmF1ZGlvc0xpc3QucGFyc2UoYXVkaW9GaWxlcyk7XHJcblxyXG5cdFx0XHR0b2dnbGVFbGVtZW50KHRleHRGaWxlcy5sZW5ndGgsIHRoaXMuJCQoJ2Rvd25sb2FkQm9vaycpKTtcclxuXHRcdFx0dG9nZ2xlRWxlbWVudChib29rLmF2YWlsYWJsZUNvcGllcywgdGhpcy4kJCgnb3JkZXJCb29rJykpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50b2dnbGVMaWtlKGJvb2sudXNlcklkID09IHRoaXMudXNlcklkKTtcclxuXHRcdFx0dGhpcy50b2dnbGVPcmRlcihib29rLm9yZGVyRGF0ZSk7XHJcblx0XHJcblx0XHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b3JkZXJCb29rKCkge1xyXG5cdFx0Y29uc3Qgb3JkZXIgPSB7XHJcblx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXHJcblx0XHRcdGJvb2tJZDogdGhpcy5ib29rSWQsXHJcblx0XHRcdG9yZGVyRGF0ZTogbmV3IERhdGUoKVxyXG5cdFx0fTtcclxuXHJcblx0XHRvcmRlcnNNb2RlbC5hZGRJdGVtKG9yZGVyKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRPcmRlcmVkVmFsKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnT3JkZXJlZCcpOyBcclxuXHRcdHRoaXMub3JkZXJCdG4ucmVmcmVzaCgpO1xyXG5cdFx0dGhpcy5vcmRlckJ0bi5kaXNhYmxlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnPGkgY2xhc3M9XCJmYXIgZmEtaGFuZC1wYXBlclwiPjwvaT4gT3JkZXInKTsgIFxyXG5cdFx0dGhpcy5vcmRlckJ0bi5yZWZyZXNoKCk7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlT3JkZXIob3JkZXJlZCkge1xyXG5cdFx0aWYob3JkZXJlZCkge1xyXG5cdFx0XHR0aGlzLnNldE9yZGVyZWRWYWwoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0T3JkZXJlZFZhbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGlrZUJvb2soKSB7XHJcblx0XHRpZih0aGlzLmJvb2sudXNlcklkID09IHRoaXMudXNlcklkKSB7XHJcblx0XHRcdGxpa2VzTW9kZWwucmVtb3ZlTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxpa2VzTW9kZWwuYWRkTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFxyXG5cdH1cdFxyXG5cclxuXHR0b2dnbGVMaWtlKGNvbmRpdGlvbikge1xyXG5cdFx0aWYoY29uZGl0aW9uKSB7XHJcblx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXMgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldExpa2UoKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdpY29uJywgJ2ZhciBmYS1oZWFydCcpO1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSgpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCB0ZW1wbGF0ZTp0aGlzLmFwcC5jb25maWcubmFtZSwgY3NzOid3ZWJpeF9oZWFkZXIgYXBwX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbWVudSA9IHtcclxuXHRcdFx0dmlldzonbWVudScsIFxyXG5cdFx0XHRjc3M6J2FwcF9tZW51JyxcclxuXHRcdFx0d2lkdGg6MTgwLCBsYXlvdXQ6J3knLCBzZWxlY3Q6dHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwid2ViaXhfaWNvbiAjaWNvbiNcIj48L3NwYW4+ICN2YWx1ZSMgJyxcclxuXHRcdFx0dmFsdWU6ICdtYWluJyxcclxuXHRcdFx0ZGF0YTpbXHJcblx0XHRcdFx0eyB2YWx1ZTonTXkgYm9va3MnLCBpZDonbWFpbicsIGljb246J2ZhcyBmYS1ib29rbWFyaycgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidMaWJyYXJ5JywgaWQ6J2xpYnJhcnknLCAgaWNvbjonZmFzIGZhLWJvb2stcmVhZGVyJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1RvcHMnLCBpZDondG9wcycsICBpY29uOidmYXMgZmEtbGlzdCcgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidTZXR0aW5ncycsIGlkOidzZXR0aW5ncycsICBpY29uOidmYXMgZmEtY29nJyB9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbjp7XHJcblx0XHRcdFx0b25NZW51SXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYHJlYWRlci5pbmRleD9pZD0ke3VzZXJJZH0vcmVhZGVyLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoJyVZLSVtLSVkJyk7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vY29tbW9uL2xpYnJhcnknO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi9ib29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkZXJMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgbGlicmFyeUNvbmZpZyA9IHtcclxuXHRcdFx0cm9sZTogJ3JlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdG5ldyBMaWJyYXJ5KHRoaXMuYXBwLCBsaWJyYXJ5Q29uZmlnLCBCb29rQ2FyZClcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IG9yZGVyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9vcmRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IHRlc3RSZXN1bHRzID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyc0xpc3QnLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHRcdFx0XHRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tUaXRsZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdCb29rJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JOYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0F1dGhvcicsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtdHJhc2gnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQm9vayhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnYWRkR3JvdXAnLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCcsXHJcblx0XHRcdHR5cGU6J2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0cm93czogW3Rlc3RSZXN1bHRzLCBidXR0b25dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9IHRoaXMuJCQoJ29yZGVyc0xpc3QnKTtcclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0dGhpcy5wYXJzZUJvb2tzKCk7XHRcdFxyXG5cdH1cclxuXHJcblx0YXN5bmMgcGFyc2VCb29rcygpIHtcclxuXHRcdGF3YWl0IG9yZGVyc01vZGVsLmdldEl0ZW1zKHRoaXMudXNlcklkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3Qgb3JkZXJzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHJcblx0XHRcdG9yZGVyc0Fyci5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLmJvb2tUaXRsZSA9IGVsLmJvb2suYm9va1RpdGxlO1xyXG5cdFx0XHRcdGVsLmF1dGhvck5hbWUgPSBlbC5ib29rLmF1dGhvck5hbWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5ncmlkLmNsZWFyQWxsKCk7XHJcblx0XHRcdHRoaXMuJCQoJ29yZGVyc0xpc3QnKS5wYXJzZShvcmRlcnNBcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW1vdmVCb29rKGlkKSB7XHJcblx0XHRhd2FpdCBvcmRlcnNNb2RlbC5yZW1vdmVJdGVtKGlkKTtcclxuXHRcdGF3YWl0IHRoaXMucGFyc2VCb29rcygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQge3VwZGF0ZUl0ZW19IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnc2F2ZUNoYW5nZXMnLFxyXG5cdFx0XHR2YWx1ZTogJ1NhdmUnLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdGlucHV0V2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdXNlckRhdGEgPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJEYXRhRm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICd1c2VyX2lkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRmlyc3QgbmFtZScsbmFtZTogJ3VzZXJfbmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdMYXN0IG5hbWUnLG5hbWU6ICd1c2VyX3N1cm5hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3BvcnQgSUQnLG5hbWU6ICdwYXNzcG9ydF9JRCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdCaXJ0aCBkYXRlJyxuYW1lOiAnYmlydGhfZGF0ZScsIGxvY2FsSWQ6ICdiaXJ0aF9kYXRlJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0FkZHJlc3MnLG5hbWU6ICdhZGRyZXNzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bob25lJyxuYW1lOiAncGhvbmVfbnVtYmVycycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdFbWFpbCcsbmFtZTogJ2VtYWlsJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2NoZWNrYm94JywgbGFiZWxSaWdodDogJ0kgYWdyZWUgdG8gcmVjZWl2ZSBlbWFpbHMnLCBuYW1lOiAnYWNjZXB0X25ld3NsZXR0ZXJzJywgbGFiZWxXaWR0aDogODcgfSxcclxuXHRcdFx0XHRidXR0b25cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbdXNlckRhdGFdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGlkID0gdGhpcy5nZXRQYXJhbSgnaWQnLCB0cnVlKTtcclxuXHJcblx0XHR1c2Vyc01vZGVsLmdldEl0ZW0oaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlckRhdGEgPSBkYXRhLmpzb24oKTtcclxuXHRcdFx0dXNlckRhdGEuYmlydGhfZGF0ZSA9IG5ldyBEYXRlKHVzZXJEYXRhLmJpcnRoX2RhdGUpO1xyXG5cdFx0XHR0aGlzLiQkKCd1c2VyRGF0YUZvcm0nKS5zZXRWYWx1ZXModXNlckRhdGEpO1xyXG5cdFx0fSk7XHRcclxuXHR9XHJcblx0XHJcblx0c3VjY2Vzc0FjdGlvbigpIHtcclxuXHRcdHdlYml4Lm1lc3NhZ2UoJ05ldyBkYXRhIHNhdmVkJyk7XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSAoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy4kJCgndXNlckRhdGFGb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHR1cGRhdGVJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbik7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gXCJ3ZWJpeC1qZXRcIjtcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvb2tUb3BzIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdFx0XHR3aWR0aDogMjUwLFxyXG5cdFx0XHRcdFx0c2VsZWN0OiB0cnVlLFxyXG5cdFx0XHRcdFx0ZGF0YTogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93T2xkZXN0Qm9va3MnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnT2xkZXN0IGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93TmV3ZXN0Qm9va3MnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnTmV3ZXN0IGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93TW9zdFBhZ2VzQm9va3MnLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiAnTW9zdCBwYWdlcyBib29rcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd0Jvb2tzV2l0aExvbmdOYW1lcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdCb29rcyB3aXRoIGxvbmdlc3QgbmFtZXMnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dBdXRob3JzV2l0aE1vc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdBdXRob3JzIHdpdGggbW9zdCBib29rcydcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdG9uOiB7XHJcblx0XHRcdFx0XHRcdG9uSXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2goaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dPbGRlc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd09sZGVzdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd05ld2VzdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TmV3ZXN0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93TW9zdFBhZ2VzQm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dNb3N0UGFnZXNCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dCb29rc1dpdGhMb25nTmFtZXMnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dCb29rc1dpdGhMb25nTmFtZXMoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dBdXRob3JzV2l0aE1vc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYm9va3NUb3AnLFxyXG5cdFx0XHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5ncmlkID0gJCQoJ2Jvb2tzVG9wJyk7XHJcblx0XHRib29rc01vZGVsLmdldERhdGFGcm9tU2VydmVyKCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGxldCBib29rc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblx0XHRcdGJvb2tzQXJyID0gYm9va3NBcnIubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLnllYXJfb2ZfcHVibGljYXRpb24gPSBuZXcgRGF0ZShlbC55ZWFyX29mX3B1YmxpY2F0aW9uKTtcclxuXHRcdFx0XHRyZXR1cm4gZWw7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmJvb2tzQXJyID0gYm9va3NBcnI7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmRlZmF1bHRDb25maWcgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2Jvb2tfdGl0bGUnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0aGVhZGVyOiAnVGl0bGUnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2F1dGhvcl9uYW1lJyxcclxuXHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdGhlYWRlcjogJ0F1dGhvcidcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnZ2VucmVzJyxcclxuXHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0aGVhZGVyOiAnR2VucmVzJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdjb3VudHJ5X29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0aGVhZGVyOiAnQ291bnRyeSdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAneWVhcl9vZl9wdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0c29ydDogJ2RhdGUnLFxyXG5cdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdGZvcm1hdDogd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWVwiKSxcclxuXHRcdFx0XHRoZWFkZXI6ICdZZWFyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdudW1iZXJfb2ZfcGFnZXMnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1BhZ2VzJyxcclxuXHRcdFx0XHR3aWR0aDogNjBcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHNob3dPbGRlc3RCb29rcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdHJldHVybiBhLnllYXJfb2ZfcHVibGljYXRpb24gLSBiLnllYXJfb2ZfcHVibGljYXRpb247XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dOZXdlc3RCb29rcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiBiLnllYXJfb2ZfcHVibGljYXRpb24gLSBhLnllYXJfb2ZfcHVibGljYXRpb24pO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd01vc3RQYWdlc0Jvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+ICBiLm51bWJlcl9vZl9wYWdlcyAtIGEubnVtYmVyX29mX3BhZ2VzKTtcclxuXHRcdHRoaXMuc2hvd1Jlc3VsdHMoZGF0YSwgdGhpcy5kZWZhdWx0Q29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHNob3dCb29rc1dpdGhMb25nTmFtZXMoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gYi5ib29rX3RpdGxlLmxlbmd0aCAtIGEuYm9va190aXRsZS5sZW5ndGgpO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzKCkge1xyXG5cdFx0bGV0IGF1dGhvcnMgPSBbXTtcclxuXHRcdHRoaXMuYm9va3NBcnIuZm9yRWFjaCgoZWwpID0+IHtcclxuXHRcdFx0Y29uc3QgaW5kZXggPSBhdXRob3JzLmZpbmRJbmRleChhdXRob3IgPT4gYXV0aG9yLm5hbWUgPT0gZWwuYXV0aG9yX25hbWUpO1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRcdFx0YXV0aG9ycy5wdXNoKHtuYW1lOiBlbC5hdXRob3JfbmFtZSwgYm9va3NDb3VudDogMX0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGF1dGhvcnNbaW5kZXhdLmJvb2tzQ291bnQrKztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YXV0aG9ycyA9IGF1dGhvcnMuc29ydCgoYSwgYikgPT4gYi5ib29rc0NvdW50IC0gYS5ib29rc0NvdW50KTtcclxuXHJcblx0XHRjb25zdCBjb2x1bW5zID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICduYW1lJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdOYW1lJyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYm9va3NDb3VudCcsXHJcblx0XHRcdFx0aGVhZGVyOiAnQm9va3MgY291bnQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhhdXRob3JzLCBjb2x1bW5zKTtcclxuXHR9XHJcblxyXG5cdHNob3dSZXN1bHRzKGRhdGEsIGNvbHVtbnMpIHtcclxuXHRcdHRoaXMuZ3JpZC5kZWZpbmUoJ2NvbHVtbnMnLCBjb2x1bW5zKTtcclxuXHRcdHRoaXMuZ3JpZC5yZWZyZXNoQ29sdW1ucygpO1xyXG5cdFx0ZGF0YSA9IGRhdGEuc2xpY2UoMCwgMTApO1xyXG5cdFx0dGhpcy5ncmlkLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLmdyaWQucGFyc2UoZGF0YSk7XHJcblx0XHR0aGlzLmdyaWQuc2hvdygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RlclBhZ2UgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGZ1bmN0aW9uIHBhc3N3b3JkUnVsZSh2YWx1ZSkge1xyXG5cdFx0XHRjb25zdCByZSA9IC8oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pLns1LH0vO1xyXG5cdFx0XHRpZiAocmUudGVzdCh2YWx1ZSkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0d2ViaXgubWVzc2FnZSgnUGFzc3dvcmQgbWFzdCBjb250YWluIGF0IGxlYXN0IDUgc2ltYm9scywgaW5jbHVkaW5nIFVQUEVSL2xvd2VyY2FzZSBhbmQgbnVtYmVyKHMpJyk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZW1haWxSdWxlKHZhbHVlKSB7XHJcblx0XHRcdGlmKHdlYml4LnJ1bGVzLmlzRW1haWwodmFsdWUpKXtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR3ZWJpeC5tZXNzYWdlKCdFbnRlciBjb3JyZWN0IGVtYWlsJyk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJGb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdyZWdpc3RlckZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Vlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdyZWdpc3RlckJ0bicsIHZhbHVlOiAnUmVnaXN0ZXInLCB0eXBlOiAnZm9ybSdcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHR1c2VybmFtZTogZW1haWxSdWxlLFxyXG5cdFx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZFJ1bGVcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRm9ybSxcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdGNvbnN0IGZvcm0gPSB0aGlzLiQkKCdyZWdpc3RlckZvcm0nKTtcclxuXHJcblx0XHR0aGlzLiQkKCdyZWdpc3RlckJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWVzID0gZm9ybS5nZXRWYWx1ZXMoKTtcclxuXHJcblx0XHRcdGlmKGZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdFx0XHRhdXRob3JpemF0aW9uLnJlZ2lzdGVyKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHN0YXR1cyA9IHJlc3BvbnNlLmpzb24oKS5zdGF0dXM7XHJcblx0XHRcdFx0XHRjb25zdCBpZCA9IHJlc3BvbnNlLmpzb24oKS5pZDtcclxuXHRcdFx0XHRcdGlmIChzdGF0dXMgPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93KGByZWFkZXIuaW5kZXg/aWQ9JHtpZH0vcmVhZGVyLm1haW5gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZihyZXNwb25zZS5qc29uKCkucmVhc29uID09PSAndXNlckV4aXN0Jykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZS5qc29uKCkuZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=