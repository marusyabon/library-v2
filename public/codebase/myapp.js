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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./sources/styles/app.css");
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

/***/ }),

/***/ "./sources/scripts.js":
/*!****************************!*\
  !*** ./sources/scripts.js ***!
  \****************************/
/*! exports provided: toggleElement, addItem, updateItem, convertDatesInArray, combineUserNamesInArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleElement", function() { return toggleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDatesInArray", function() { return convertDatesInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineUserNamesInArr", function() { return combineUserNamesInArr; });
function toggleElement(condition, element) {
	if (condition) {
		element.show();
	} else {
		element.hide();
	}
}

function addItem(Model, data, successAction) {
	Model.addItem(data).then(function () {
		Model.getDataFromServer().then(function (data) {
			successAction(data);
		});
	});
}

function updateItem(Model, data, successAction) {
	Model.updateItem(data).then(function () {
		Model.getDataFromServer().then(function (data) {
			successAction(data);
		});
	});
}

function convertDatesInArray(jsonObj) {
	var dataArr = jsonObj.json();

	dataArr = dataArr.map(function (el) {
		var date = el.yearOfPublication;
		el.yearOfPublication = date ? new Date(date) : '';
		return el;
	});

	return dataArr;
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
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");


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

		return {
			rows: [header, search, dtable]
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

							this.booksArr = Object(_scripts__WEBPACK_IMPORTED_MODULE_4__["convertDatesInArray"])(dbData);

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

	BookCard.prototype.saveForm = function saveForm() {
		var _this4 = this;

		var data = this.form.getValues();

		var successAction = function successAction(newData) {
			_this4.webix.message('Success');
			var booksArr = Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["convertDatesInArray"])(newData);
			$$('dtLibrary').parse(booksArr);
			_this4.hideWindow();
		};

		if (this.form.validate()) {
			if (this.isNew) {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["addItem"])(_models_books__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
			} else {
				Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["updateItem"])(_models_books__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
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
		this.orderBtn = this.$$('orderBook');
		this.userId = this.getParam('id', true);

		_models_books__WEBPACK_IMPORTED_MODULE_4__["default"].getBook(id).then(function (bookData) {
			var book = bookData.json();

			_this3.book = book;
			_this3.bookId = book.id;

			_this3.clearForm();

			_this3.form.setValues(book);
			_this3.$$('bookCover').setValues(book.coverPhoto || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
			_this3.form.setValues(book);
			_this3.$$('bookCover').setValues(book.coverPhoto || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
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
			_this3.$$('availableTextFiles').parse(textFiles);
			_this3.$$('availableAudioFiles').parse(audioFiles);

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
			elements: [{ view: 'text', name: 'id', localId: 'user_id', hidden: true }, { view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' }, { view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' }, button]
		};

		return {
			rows: [userData]
		};
	};

	Settings.prototype.init = function init() {
		var _this3 = this;

		var id = this.getParam('id', true);

		_models_users__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(id).then(function (data) {
			var userData = data.json()[0];
			userData.birthDate = new Date(userData.birthDate);
			_this3.$$('userDataForm').setValues(userData);
		});
	};

	Settings.prototype.saveForm = function saveForm() {
		var data = this.$$('userDataForm').getValues();
		var successAction = this.webix.message('New data saved');
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(_models_users__WEBPACK_IMPORTED_MODULE_1__["default"], data, successAction);
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

		var registerForm = {
			view: 'form',
			localId: 'registerForm',
			width: 300,
			elements: [{ view: 'text', label: 'Uername', name: 'username' }, { view: 'text', type: 'password', label: 'Password', name: 'password' }, {
				margin: 5, cols: [{
					view: 'button', localId: 'registerBtn', value: 'Register', type: 'form'
				}]
			}]
		};

		return {
			cols: [{}, {
				rows: [{}, registerForm, {}]
			}, {}]
		};
	};

	RegisterPage.prototype.init = function init() {
		var _this2 = this;

		this.$$('registerBtn').attachEvent('onItemClick', function () {
			var values = _this2.$$('registerForm').getValues();
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
		});
	};

	return RegisterPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViaXgtamV0L2Rpc3QvZXM2L2pldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2Jvb2tzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xpa2VzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL29yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3Mgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vb3JkZXJzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJnIiwiRnVuY3Rpb24iLCJoYWRSdW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImluZGV4T2YiLCJvbGRSdW50aW1lIiwidW5kZWZpbmVkIiwiZSIsImdsb2JhbCIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImluTW9kdWxlIiwicnVudGltZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJvYmoiLCJhcmciLCJ0eXBlIiwiY2FsbCIsImVyciIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImNvbnN0cnVjdG9yIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ2YWx1ZSIsIlByb21pc2UiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIkpldEJhc2UiLCJ3ZWJpeCIsIndlYml4SmV0IiwiX2V2ZW50cyIsIl9zdWJzIiwiX2RhdGEiLCJnZXRSb290IiwiX3Jvb3QiLCJkZXN0cnVjdG9yIiwiX2RldGFjaEV2ZW50cyIsIl9kZXN0cm95U3VicyIsIl9jb250YWluZXIiLCJhcHAiLCJfcGFyZW50Iiwic2V0UGFyYW0iLCJpZCIsInVybCIsIl9zZWdtZW50IiwidXBkYXRlIiwic2hvdyIsImdldFBhcmFtIiwicGFyZW50IiwidmlldyIsImdldFBhcmVudFZpZXciLCJnZXRVcmwiLCJzdWJ1cmwiLCJnZXRVcmxTdHJpbmciLCIkJCIsInJvb3QiLCJxdWVyeVZpZXciLCJjb25maWciLCJsb2NhbElkIiwiJHNjb3BlIiwib24iLCJjb2RlIiwiYXR0YWNoRXZlbnQiLCJjb250YWlucyIsImtpZCIsImdldFN1YlZpZXciLCJzdWIiLCJnZXRTdWJWaWV3SW5mbyIsInN1YnZpZXciLCJwb3B1cCIsImV2ZW50cyIsImRldGFjaEV2ZW50Iiwic3ViVmlldyIsIl9pbml0X3VybF9kYXRhIiwiY3VycmVudCIsImV4dGVuZCIsInBhcmFtcyIsIl9nZXREZWZhdWx0U3ViIiwiZGVmYXVsdCIsImJyYW5jaCIsImNoaWxkIiwiX3JvdXRlZF92aWV3IiwicGFyc2UiLCJzdWJzdHIiLCJwYXJ0cyIsInNwbGl0IiwiY2h1bmtzIiwidGVzdCIsInBvcyIsInBhcmFtIiwiZGNodW5rIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFnZSIsImlzTmV3IiwidXJsMnN0ciIsInN0YWNrIiwiY2h1bmsiLCJvYmoyc3RyIiwiam9pbiIsInN0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsIlJvdXRlIiwicm91dGUiLCJpbmRleCIsIl9uZXh0IiwicGF0aCIsInNoaWZ0IiwicmVmcmVzaCIsIl9qb2luIiwia2lkcyIsIm9sZCIsImNvbmNhdCIsImFwcGVuZCIsInJlcyIsInJlaiIsInJlZGlyZWN0IiwiY29uZmlybSIsImNhbGxFdmVudCIsImNhdGNoIiwic2l6ZSIsIm4iLCJKZXRWaWV3IiwiX2NoaWxkcmVuIiwidWkiLCJjb250YWluZXIiLCJqZXR2aWV3IiwiY3JlYXRlVmlldyIsInJlbmRlciIsInRhcmdldCIsIl9yZW5kZXJGcmFtZUxvY2siLCJfc2hvdyIsInNlZ21lbnQiLCJfdXJsQ2hhbmdlIiwibGlua1JvdXRlciIsImdldFJvdXRlciIsInNldCIsInNpbGVudCIsImluaXQiLCJfJHZpZXciLCJfJCIsInJlYWR5IiwiXyR1cmwiLCJtZXNzYWdlIiwidXJsQ2hhbmdlIiwiZGVzdHJveSIsIl9kZXN0cm95S2lkcyIsInVzZSIsInBsdWdpbiIsInRhZ05hbWUiLCJfcmVuZGVyIiwiZG9jdW1lbnQiLCJib2R5IiwidG9Ob2RlIiwiX3JlbmRlcl9maW5hbCIsImNmZyIsInNsb3QiLCJyZXNwb25zZSIsImNvcHlDb25maWciLCJvbGR1aSIsImFzV2luIiwic2V0UG9zaXRpb24iLCJpc1Zpc2libGUiLCJfaW5pdCIsIl9pbml0VXJsIiwiX2luaXRFcnJvciIsIndhaXRzIiwiZnJhbWUiLCJ3YWl0IiwiYWxsIiwibG9jayIsIl9yZW5kZXJGcmFtZSIsIl9jcmVhdGVTdWJWaWV3IiwiZXJyb3IiLCJjcmVhdGVGcm9tVVJMIiwidWlzIiwiSmV0Vmlld1JhdyIsIl91aSIsIlN1YlJvdXRlciIsImNiIiwiYSIsImdldCIsIl9vbmNlIiwiSmV0QXBwQmFzZSIsIndpbmRvdyIsInZlcnNpb24iLCJzdGFydCIsIl9zZXJ2aWNlcyIsIkV2ZW50U3lzdGVtIiwiX3N1YlNlZ21lbnQiLCJnZXRTZXJ2aWNlIiwic2V0U2VydmljZSIsImhhbmRsZXIiLCIkc3VidmlldyIsImFkZFN1YlZpZXciLCJBcnJheSIsInBvaW50IiwiRGF0YUNvbGxlY3Rpb24iLCJSZWdFeHAiLCJEYXRlIiwiY29weSIsIiRyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJzcmNFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidHJpZ2dlciIsIl9mb3JWaWV3IiwibG9hZFZpZXciLCJ2aWV3cyIsIl9sb2FkRXJyb3IiLCJfbG9hZFZpZXdEeW5hbWljIiwiX19lc01vZHVsZSIsIm5vdyIsInJvdXRlciIsInJlc3QiLCJhcHBseSIsImRhdGEiLCJhY3Rpb24iLCJiaW5kIiwiZXIiLCJkZWJ1ZyIsImNvbnNvbGUiLCJ0ZXh0IiwicmVwbGFjZSIsImlubmVySFRNTCIsImV4cGlyZSIsImZpcnN0SW5pdCIsIl9maXJzdF9zdGFydCIsInRvcCIsImJhc2UiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwibm9kZSIsImh0bWwiLCJhZGRDc3MiLCJyZW1vdmVDc3MiLCJ1cmxTdHJpbmciLCJ0ZW1wbGF0ZSIsInVpZCIsIkhhc2hSb3V0ZXIiLCJfZGV0ZWN0UHJlZml4Iiwib25wb3BzdGF0ZSIsInJvdXRlcyIsImNvbXBhcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicHJlZml4Iiwic3VmaXgiLCJfZ2V0UmF3Iiwicm91dGVyUHJlZml4IiwibG9jYXRpb24iLCJocmVmIiwiaXNQYXRjaGVkIiwicGF0Y2giLCJ3Iiwid2luIiwicHJvbWlzZSIsImZyZWV6ZSIsInNvbWUiLCIkZnJlZXplIiwicmVzaXplIiwiYmFzZUFkZCIsImJhc2VsYXlvdXQiLCJhZGRWaWV3IiwiYmFzZVJlbW92ZSIsInJlbW92ZVZpZXciLCJqdmlldyIsInN1YnMiLCJhcmd1bWVudHMiLCJsYXlvdXQiLCJwcm90b1VJIiwiJGluaXQiLCIkYXBwIiwiJHJlYWR5Iiwib3JpZ2luIiwicHJveHkiLCJKZXRBcHAiLCJTdG9yZVJvdXRlciIsInN0b3JhZ2UiLCJzZXNzaW9uIiwic3RvcmVOYW1lIiwicHV0IiwiVXJsUm91dGVyIiwicGF0aG5hbWUiLCJFbXB0eVJvdXRlciIsIl8kY29uZmlnIiwiVW5sb2FkR3VhcmQiLCJoYXMiLCJzdG9yZSIsInRyaW0iLCJ3YXJuIiwieCIsIlN0cmluZyIsImRlbGltaXRlciIsInJ1c3NpYW5QbHVyYWxHcm91cHMiLCJlbmQiLCJwbHVyYWxUeXBlcyIsImFyYWJpYyIsImxhc3RUd28iLCJib3NuaWFuX3NlcmJpYW4iLCJjaGluZXNlIiwiY3JvYXRpYW4iLCJmcmVuY2giLCJnZXJtYW4iLCJydXNzaWFuIiwibGl0aHVhbmlhbiIsImN6ZWNoIiwicG9saXNoIiwiaWNlbGFuZGljIiwic2xvdmVuaWFuIiwicGx1cmFsVHlwZVRvTGFuZ3VhZ2VzIiwibGFuZ1RvVHlwZU1hcCIsIm1hcHBpbmciLCJyZXQiLCJsYW5ncyIsImxhbmciLCJwbHVyYWxUeXBlTmFtZSIsImxvY2FsZSIsImxhbmdUb1BsdXJhbFR5cGUiLCJlbiIsInBsdXJhbFR5cGVJbmRleCIsImNvdW50IiwiZXNjYXBlIiwidG9rZW4iLCJjb25zdHJ1Y3RUb2tlblJlZ2V4Iiwib3B0cyIsInN1ZmZpeCIsIlJhbmdlRXJyb3IiLCJkb2xsYXJSZWdleCIsImRvbGxhckJpbGxzWWFsbCIsImRlZmF1bHRUb2tlblJlZ2V4IiwidHJhbnNmb3JtUGhyYXNlIiwicGhyYXNlIiwic3Vic3RpdHV0aW9ucyIsInRva2VuUmVnZXgiLCJpbnRlcnBvbGF0aW9uUmVnZXgiLCJvcHRpb25zIiwic21hcnRfY291bnQiLCJ0ZXh0cyIsImV4cHJlc3Npb24iLCJhcmd1bWVudCIsIlBvbHlnbG90IiwicGhyYXNlcyIsImN1cnJlbnRMb2NhbGUiLCJhbGxvd01pc3NpbmciLCJvbk1pc3NpbmdLZXkiLCJpbnRlcnBvbGF0aW9uIiwibmV3TG9jYWxlIiwibW9yZVBocmFzZXMiLCJwcmVmaXhlZEtleSIsInVuc2V0IiwiY2xlYXIiLCJuZXdQaHJhc2VzIiwidCIsIl8iLCJ0cmFuc2Zvcm0iLCJ3ZWJpeFBvbHlnbG90IiwiTG9jYWxlIiwiX3ZpZXciLCJzZXRMYW5nRGF0YSIsInBjb25maWciLCJwb2x5Z2xvdCIsInBvbHkiLCJzZXJ2aWNlIiwibG9jTmFtZSIsImkxOG4iLCJzZXRMb2NhbGUiLCJnZXRMYW5nIiwic2V0TGFuZyIsInVybHMiLCJNZW51IiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImdldFNlbGVjdGVkSWQiLCJzZWxlY3QiLCJleGlzdHMiLCJiYXNlaWNvbnMiLCJnb29kIiwic2F2aW5nIiwiYmFzZXRleHQiLCJTdGF0dXMiLCJzdGF0dXMiLCJpc2Vycm9yIiwiZXhwaXJlRGVsYXkiLCJpY29ucyIsImNvbnRlbnQiLCJhcmVhIiwic2V0SFRNTCIsInN1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJmYWlsIiwiZ2V0U3RhdHVzIiwiaGlkZVN0YXR1cyIsIm1vZGUiLCJyZXNwb25zZVRleHQiLCJ0cmFjayIsImRwIiwiX2lkIiwiX29iaiIsInJlbW90ZSIsImFqYXgiLCJfbW9kZSIsIl91cmwiLCJfcmVxdWVzdCIsIl9oZWFkZXJzIiwiX2ZpbGVzIiwiVGhlbWUiLCJ0aGVtZSIsImdldFRoZW1lIiwic2V0VGhlbWUiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibG5hbWUiLCJkaXNhYmxlZCIsInNraW4iLCJjb3B5UGFyYW1zIiwiVXJsUGFyYW0iLCJvcyIsIm9nIiwidmFsIiwiVXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWZ0ZXJMb2dpbiIsImFmdGVyTG9nb3V0IiwicGluZyIsIm1vZGVsIiwidXNlciIsImdldFVzZXIiLCJzZXJ2ZXIiLCJwYXNzIiwiY2FuTmF2aWdhdGUiLCJfJHJvb3QiLCJwdWJsaWMiLCJzZXRJbnRlcnZhbCIsInBsdWdpbnMiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwibCIsImxvZ291dFVybCIsImxvZ2luVXJsIiwicmVnaXN0ZXJVcmwiLCJBdXRob3JpemF0aW9uIiwicmVnaXN0ZXIiLCJwb3N0IiwiZGF0ZSIsIkRVTU1ZQ09WRVIiLCJTVUNDRVNTX1NRTCIsIlNVQ0NFU1NfTU9OR08iLCJVUkwiLCJCb29rc01vZGVsIiwiZ2V0RGF0YUZyb21TZXJ2ZXIiLCJ1c2VySWQiLCJnZXRCb29rIiwiYm9va0lkIiwiYWRkSXRlbSIsImZ1bmMiLCJ1cGRhdGVJdGVtIiwicmVtb3ZlSXRlbSIsImRlbCIsInNlYXJjaCIsInJlcSIsIkZpbGVzTW9kZWwiLCJnZXRJdGVtcyIsImRvd25sb2FkSXRlbSIsIkxpa2VzTW9kZWwiLCJnZXRMaWtlcyIsImFkZExpa2UiLCJyZW1vdmVMaWtlIiwiT3JkZXJzTW9kZWwiLCJvcmRlciIsInJlbW92ZVVzZXJPcmRlcnMiLCJvcmRlcnNUb1JlbW92ZSIsInJlbW92ZSIsIlVzZXJzTW9kZWwiLCJnZXRSZWFkZXJzIiwiZ2V0SXRlbSIsIk15QXBwIiwiZGVmYXVsdHMiLCJBUFBOQU1FIiwiVkVSU0lPTiIsIkJVSUxEX0FTX01PRFVMRSIsIlBST0RVQ1RJT04iLCJuYXYiLCJ1cmxQYXJ0cyIsInRhcmdldFBhcnQiLCJlbCIsInJvbGUiLCJqc29uIiwidG9nZ2xlRWxlbWVudCIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJoaWRlIiwiTW9kZWwiLCJzdWNjZXNzQWN0aW9uIiwiY29udmVydERhdGVzSW5BcnJheSIsImpzb25PYmoiLCJkYXRhQXJyIiwibWFwIiwieWVhck9mUHVibGljYXRpb24iLCJjb21iaW5lVXNlck5hbWVzSW5BcnIiLCJ1c2Vyc0FyciIsInVzZXJfbmFtZSIsInVzZXJfc3VybmFtZSIsImF1dG9oZWlnaHQiLCJib3JkZXJsZXNzIiwiaGVpZ2h0IiwibGlzdCIsIlRvcFZpZXciLCJoZWFkZXIiLCJ3aWR0aCIsImR0YWJsZSIsImNvbHVtbnMiLCJoaWRkZW4iLCJmaWxsc3BhY2UiLCJvbkNsaWNrIiwiX3VzZXJGb3JtIiwic2hvd1dpbmRvdyIsImFkZFVzZXJCdG4iLCJjbGljayIsImFkZFVzZXIiLCJyb3dzIiwiY29scyIsInVzZXJzTW9kZWwiLCJkYkRhdGEiLCJ1c2Vyc0RhdGEiLCJhdXRob3JpemF0aW9uIiwiZm9ybWF0IiwiZGF0ZVRvU3RyIiwiY3VycmVudERhdGUiLCJVc2VyRm9ybSIsImhlYWQiLCJwb3NpdGlvbiIsImVsZW1lbnRzIiwibGFiZWwiLCJsYWJlbFdpZHRoIiwibGFiZWxBbGlnbiIsInJ1bGVzIiwiaXNOb3RFbXB0eSIsIm1hcmdpbiIsInBhZGRpbmdZIiwic2F2ZUZvcm0iLCJoaWRlV2luZG93IiwiZm9ybSIsIm5ld0RhdGEiLCJnZXRIZWFkIiwiY29udmVydFVzZXJCaXRoRGF0ZSIsInNldFZhbHVlcyIsImluaXRpYWxQYXNzd29yZCIsImJpcnRoX2RhdGUiLCJnZXRWYWx1ZXMiLCJ2YWxpZGF0ZSIsImNsZWFyVmFsaWRhdGlvbiIsIkxpYnJhcnkiLCJsaWJyYXJ5Q29uZmlnIiwiYm9va0NhcmQiLCJjc3MiLCJzb3J0IiwiZWJvb2siLCJfYm9va0NhcmQiLCJzaG93UG9wdXAiLCJyZW1vdmVCb29rIiwicGxhY2Vob2xkZXIiLCJvbkVudGVyIiwib25TZWFyY2hJY29uQ2xpY2siLCJncmlkIiwiZ2V0Q29sdW1uQ29uZmlnIiwicmVmcmVzaENvbHVtbnMiLCJnZXREYXRhIiwiZ2V0RmlsZXMiLCJjaGVja0ZpbGVzIiwiYm9va3NBcnIiLCJib29rc01vZGVsIiwiZmlsZXNNb2RlbCIsImZpbGVzQXJyIiwiYm9vayIsImlzRmlsZXMiLCJmaW5kIiwiYWRkQm9vayIsInNlYXJjaElucHV0IiwiY2xlYXJBbGwiLCJCb29rQ2FyZCIsImJvb2tDb3ZlciIsImFkZFRleHRGaWxlIiwiYXV0b3NlbmQiLCJmb3JtRGF0YSIsImFjY2VwdCIsInVwbG9hZCIsImxpbmsiLCJmaWxlc0xpc3QiLCJhZGRBdWRpb0ZpbGUiLCJhdWRpb0xpc3QiLCJhdmFpbGFibGVUZXh0RmlsZXMiLCJldiIsInJlbW92ZUZpbGUiLCJhdmFpbGFibGVBdWRpb0ZpbGVzIiwic2F2ZUJ0biIsIm1heEhlaWdodCIsInBhZGRpbmdYIiwiY2xlYXJGb3JtIiwiYm9va0RhdGEiLCJmaWxlcyIsInRleHRGaWxlcyIsImF1ZGlvRmlsZXMiLCJmaWxlIiwiZGF0YVR5cGUiLCJjb3ZlclBob3RvIiwic2VuZCIsInRhcmdldExpc3QiLCJtZW51IiwiaWNvbiIsIm9uTWVudUl0ZW1DbGljayIsImxpYkxpYnJhcnkiLCJhZGRCb29rQnRuIiwibGlicmFyeSIsIk9yZGVyc0Zvcm0iLCJtb3ZlIiwicGFkZGluZyIsInN1Z2dlc3QiLCJ1c2VyTmFtZSIsInJvdyIsIm9yZGVyc0xpc3QiLCJvcmRlcnNNb2RlbCIsInJlc3VsdHMiLCJvcmRlcnMiLCJpbmNvbWluZ09yZGVycyIsImJvb2tUaXRsZSIsImF1dGhvck5hbWUiLCJkZWZpbmUiLCJvdXRjb21pbmdPcmRlcnMiLCJVc2Vyc1ZpZXciLCJtaW5XaWR0aCIsInNob3dVc2VyT3JkZXJzIiwiZnVsbF9uYW1lIiwiZWRpdE9yZGVycyIsInNlbGVjdGVkSXRlbSIsIkxvZ2luUGFnZSIsImxvZ2luRm9ybSIsInVzZXJEYXRhIiwicm9sZV9uYW1lIiwicmVhZG9ubHkiLCJvbkl0ZW1DbGljayIsImJvb2tOYW1lIiwiZG93bmxvYWQiLCJvcmRlckJvb2siLCJkb3dubG9hZEJvb2siLCJsaWtlQm9vayIsImxpa2VCdXR0b24iLCJvcmRlckJ0biIsImNvdW50X2xpa2VzIiwiYXZhaWxhYmxlQ29waWVzIiwidG9nZ2xlTGlrZSIsInRvZ2dsZU9yZGVyIiwib3JkZXJEYXRlIiwic2V0T3JkZXJlZFZhbCIsImRpc2FibGUiLCJ1bnNldE9yZGVyZWRWYWwiLCJlbmFibGUiLCJvcmRlcmVkIiwibGlrZXNNb2RlbCIsInVuc2V0TGlrZSIsInNldExpa2UiLCJyZWFkZXJMaWJyYXJ5IiwiTWFpblZpZXciLCJ0ZXN0UmVzdWx0cyIsImJ1dHRvbiIsImlucHV0V2lkdGgiLCJwYXJzZUJvb2tzIiwib3JkZXJzQXJyIiwiU2V0dGluZ3MiLCJiaXJ0aERhdGUiLCJib29rVG9wcyIsInNob3dPbGRlc3RCb29rcyIsInNob3dOZXdlc3RCb29rcyIsInNob3dNb3N0UGFnZXNCb29rcyIsInNob3dCb29rc1dpdGhMb25nTmFtZXMiLCJzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MiLCJ5ZWFyX29mX3B1YmxpY2F0aW9uIiwiZGVmYXVsdENvbmZpZyIsImIiLCJzaG93UmVzdWx0cyIsIm51bWJlcl9vZl9wYWdlcyIsImJvb2tfdGl0bGUiLCJhdXRob3JzIiwiZmluZEluZGV4IiwiYXV0aG9yIiwiYXV0aG9yX25hbWUiLCJib29rc0NvdW50IiwiUmVnaXN0ZXJQYWdlIiwicmVnaXN0ZXJGb3JtIiwicmVhc29uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNB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T0FBTXhCLGdCQUFnQixJQUFJcEYsc0RBQUosRUFBdEI7O0FBRUFvRixpQkFBY25GLFFBQWQsQ0FBdUI3ZixNQUF2QixFQUErQndCLElBQS9CLENBQW9DLFVBQUNtTSxRQUFELEVBQWM7QUFDakQsUUFBTWdPLFNBQVNoTyxTQUFTK1UsSUFBVCxHQUFnQi9HLE1BQS9CO0FBQ0EsUUFBTWxWLEtBQUtrSCxTQUFTK1UsSUFBVCxHQUFnQmpjLEVBQTNCO0FBQ0EsUUFBSWtWLFdBQVcsQ0FBZixFQUFrQjtBQUNqQixZQUFLOVUsSUFBTCxzQkFBNkJKLEVBQTdCO0FBQ0EsS0FGRCxNQUdLO0FBQ0osU0FBR2tILFNBQVMrVSxJQUFULEdBQWdCME0sTUFBaEIsS0FBMkIsV0FBOUIsRUFBMkM7QUFDMUMsYUFBS3ZvQixJQUFMLENBQVUsUUFBVjtBQUNBO0FBQ0RsQixXQUFNa0gsT0FBTixDQUFjYyxTQUFTK1UsSUFBVCxHQUFnQnBSLElBQTlCO0FBQ0E7QUFDRCxJQVpEO0FBYUEsR0FqQkQ7QUFrQkEsRTs7O0VBdER3QzlGLGlEOztBQUFyQjBqQiwyRSIsImZpbGUiOiJteWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NvZGViYXNlL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZXMvbXlhcHAuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsImNsYXNzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iod2ViaXgpIHtcclxuICAgICAgICB0aGlzLndlYml4SmV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndlYml4ID0gd2ViaXg7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fY29udGFpbmVyID0gdGhpcy5hcHAgPSB0aGlzLl9wYXJlbnQgPSB0aGlzLl9yb290ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFBhcmFtKGlkLCB2YWx1ZSwgdXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWRdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShpZCwgdmFsdWUsIDApO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQYXJhbShpZCwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhW2lkXTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8ICFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0UGFyYW0oaWQsIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXJlbnRWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAkJChpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdC5xdWVyeVZpZXcoKG9iaiA9PiAob2JqLmNvbmZpZy5pZCA9PT0gaWQgfHwgb2JqLmNvbmZpZy5sb2NhbElkID09PSBpZCkgJiZcclxuICAgICAgICAgICAgICAgIChvYmouJHNjb3BlID09PSByb290LiRzY29wZSkpLCBcInNlbGZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24ob2JqLCBuYW1lLCBjb2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBvYmouYXR0YWNoRXZlbnQobmFtZSwgY29kZSk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goeyBvYmosIGlkIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zKHZpZXcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpZCA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICBpZiAoa2lkID09PSB2aWV3IHx8IGtpZC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWIuc3Vidmlldy52aWV3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN1YlZpZXdJbmZvKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW25hbWUgfHwgXCJkZWZhdWx0XCJdO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3Vidmlldzogc3ViLCBwYXJlbnQ6IHRoaXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNbbmFtZV0gPSB7IHVybDogXCJcIiwgaWQ6IG51bGwsIHBvcHVwOiB0cnVlIH07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIGEgY2hpbGQgdmlldywgc2VhcmNoZXMgZm9yIG5lYXJlc3QgcGFyZW50IHdpdGggc3Vidmlld1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBfZGV0YWNoRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcclxuICAgICAgICBmb3IgKGxldCBpID0gZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tpXS5vYmouZGV0YWNoRXZlbnQoZXZlbnRzW2ldLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveVN1YnMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBzdWIgdmlld3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlZpZXcgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgLy8gaXQgcG9zc2libGUgdGhhdCBzdWJ2aWV3IHdhcyBub3QgbG9hZGVkIHdpdGggYW55IGNvbnRlbnQgeWV0XHJcbiAgICAgICAgICAgIC8vIHNvIGNoZWNrIG9uIG51bGxcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHN1YlZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgfVxyXG4gICAgX2luaXRfdXJsX2RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMuX2RhdGEsIHVybC5wYXJhbXMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgX2dldERlZmF1bHRTdWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YnMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vicy5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFzdWIuYnJhbmNoICYmIHN1Yi52aWV3ICYmIGtleSAhPT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gc3ViLnZpZXcuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yb3V0ZWRfdmlldygpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ViID0gcGFyZW50Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgaWYgKCFzdWIgJiYgc3ViICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fcm91dGVkX3ZpZXcoKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBwYXJzZSh1cmwpIHtcclxuICAgIC8vIHJlbW92ZSBzdGFydGluZyAvXHJcbiAgICBpZiAodXJsWzBdID09PSBcIi9cIikge1xyXG4gICAgICAgIHVybCA9IHVybC5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGxpdCB1cmwgYnkgXCIvXCJcclxuICAgIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgLy8gZm9yIGVhY2ggcGFnZSBpbiB1cmxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gcGFydHNbaV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgLy8gZGV0ZWN0IHBhcmFtc1xyXG4gICAgICAgIC8vIHN1cHBvcnQgb2xkIFx0XHRcdHNvbWU6YT1iOmM9ZFxyXG4gICAgICAgIC8vIGFuZCBuZXcgbm90YXRpb25cdFx0c29tZT9hPWImYz1kXHJcbiAgICAgICAgbGV0IHBvcyA9IHRlc3QuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gdGVzdC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGVzdC5zdWJzdHIocG9zICsgMSkuc3BsaXQoL1tcXDpcXD9cXCZdL2cpO1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgaGFzaCBvZiBuYW1lZCBwYXJhbXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRjaHVuayA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtkY2h1bmtbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGRjaHVua1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3RvcmUgcGFyc2VkIHZhbHVlc1xyXG4gICAgICAgIGNodW5rc1tpXSA9IHtcclxuICAgICAgICAgICAgcGFnZTogKHBvcyA+IC0xID8gdGVzdC5zdWJzdHIoMCwgcG9zKSA6IHRlc3QpLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHJlc3VsdCxcclxuICAgICAgICAgICAgaXNOZXc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFycmF5IG9mIHBhZ2Ugb2JqZWN0c1xyXG4gICAgcmV0dXJuIGNodW5rcztcclxufVxyXG5mdW5jdGlvbiB1cmwyc3RyKHN0YWNrKSB7XHJcbiAgICBjb25zdCB1cmwgPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2Ygc3RhY2spIHtcclxuICAgICAgICB1cmwucHVzaChcIi9cIiArIGNodW5rLnBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG9iajJzdHIoY2h1bmsucGFyYW1zKTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHVybC5wdXNoKFwiP1wiICsgcGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsLmpvaW4oXCJcIik7XHJcbn1cclxuZnVuY3Rpb24gb2JqMnN0cihvYmopIHtcclxuICAgIGNvbnN0IHN0ciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCImXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG59XG5cbmNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogcGFyc2Uocm91dGUpLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcm91dGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgY3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgdGhpcy5fbmV4dF07XHJcbiAgICB9XHJcbiAgICBzdWJ1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZSh0aGlzLnJvdXRlLCB0aGlzLmluZGV4ICsgdGhpcy5fbmV4dCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHVybDJzdHIodGhpcy5zdWJ1cmwoKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ci5zdWJzdHIoMSkgOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2pvaW4ocGF0aCwga2lkcykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgeyAvLyBjaGFuZ2Ugb2YgcGFyYW1ldGVycywgcm91dGUgZWxlbWVudHMgYXJlIG5vdCBhZmZlY3RlZFxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICB1cmwgPSBvbGQuc2xpY2UoMCwgdGhpcy5pbmRleCArIChraWRzID8gdGhpcy5fbmV4dCA6IDApKTtcclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KHBhcnNlKHBhdGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0udmlldyA9IG9sZFtpXS52aWV3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSAmJiB1cmxbaV0ucGFnZSA9PT0gb2xkW2ldLnBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKHBhdGgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoO1xyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCB2aWV3LCBraWRzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCBraWRzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHZpZXcgPyB2aWV3LmFwcCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBuZXcgcm91dGUsIGl0IHBvc3NpYmxlIHRoYXQgaXQgd2lsbCBub3QgaGF2ZSBhbnkgY29udGVudFxyXG4gICAgICAgICAgICAvLyBndWFyZCBpcyBub3QgbmVjZXNzYXJ5IGluIHN1Y2ggY2FzZVxyXG4gICAgICAgICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcHAuY2FsbEV2ZW50KFwiYXBwOmd1YXJkXCIsIFtvYmoucmVkaXJlY3QsIHZpZXcsIG9ial0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0uY2F0Y2goKCkgPT4gb2JqLnJlZGlyZWN0ID0gbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCAhPT0gcmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuc2hvdyhvYmoucmVkaXJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUucGF0aCA9IHJlZGlyZWN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaXplKG4pIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gbjtcclxuICAgIH1cclxuICAgIHNwbGl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXggKyAxKSxcclxuICAgICAgICAgICAgcGF0aDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJvdXRlLnVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm91dGUucGF0aCA9IHVybDJzdHIocm91dGUudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZShyb3V0ZSwgMCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgKGluZGV4IHx8IDApXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUudXJsLnB1c2goeyBwYWdlOiBcIlwiLCBwYXJhbXM6IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2h1bmsucGFnZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2h1bmsucGFyYW1zW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodGhpcy5yb3V0ZS51cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEpldFZpZXcgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLndlYml4KTtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAvL3RoaXMuJGNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgdWkodWksIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maWcuY29udGFpbmVyIHx8IHVpLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBqZXR2aWV3ID0gdGhpcy5hcHAuY3JlYXRlVmlldyh1aSk7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChqZXR2aWV3KTtcclxuICAgICAgICBqZXR2aWV3LnJlbmRlcihjb250YWluZXIsIHRoaXMuX3NlZ21lbnQsIHRoaXMpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgIT09IFwib2JqZWN0XCIgfHwgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgLy8gcmF3IHdlYml4IFVJXHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXcuZ2V0Um9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIC8vIGNvbnZlcnQgcGFyYW1ldGVycyBvYmplY3QgdG8gdXJsXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW0oa2V5LCBwYXRoW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsaWdhdGUgdG8gYXBwIGluIGNhc2Ugb2Ygcm9vdCBwcmVmaXhcclxuICAgICAgICAgICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3cocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbG9jYWwgcGF0aCwgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwYXJlbnQgcGF0aCwgY2FsbCBwYXJlbnQgdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnNob3cocGF0aC5zdWJzdHIoMyksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGguc3Vic3RyKDMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViLnBhcmVudCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWIucGFyZW50LnNob3cocGF0aCwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy50YXJnZXQgJiYgY29uZmlnLnRhcmdldCAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGNvbmZpZy50YXJnZXQsIHN1Yi5zdWJ2aWV3LCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvdyh0aGlzLl9zZWdtZW50LCBwYXRoLCB0aGlzKTtcclxuICAgIH1cclxuICAgIF9zaG93KHNlZ21lbnQsIHBhdGgsIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5zaG93KHBhdGgsIHZpZXcsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQucm91dGUubGlua1JvdXRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZ2V0Um91dGVyKCkuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3NlZ21lbnQucm91dGUucGF0aF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KF8kdmlldywgXyQpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICByZWFkeShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLndlYml4Lm1lc3NhZ2UoXCJWaWV3OkNvbmZpZyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbiAgICB1cmxDaGFuZ2UoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgYWN0dWFsIFVJXHJcbiAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMuYXBwLCB0aGlzLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQucmVmcmVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodGhpcy5fc2VnbWVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc3QgX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLndlYml4LnRvTm9kZShyb290KSA6IHJvb3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfY29udGFpbmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB0aGlzLmdldFJvb3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcih1cmwpIHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIGlmIChjb25maWcudGhlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnRoZW4oY2ZnID0+IHRoaXMuX3JlbmRlcl9maW5hbChjZmcsIHVybCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcl9maW5hbChjb25maWcsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcl9maW5hbChjb25maWcsIHVybCkge1xyXG4gICAgICAgIC8vIGdldCBwcmV2aW91cyB2aWV3IGluIHRoZSBzYW1lIHNsb3RcclxuICAgICAgICBsZXQgc2xvdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHNsb3QgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChzbG90LnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLndlYml4LiQkKHNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZpZXcgYWxyZWFkeSBkZXN0cm95ZWRcclxuICAgICAgICBpZiAoIXRoaXMuYXBwIHx8ICFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIC8vIHVzaW5nIHdyYXBwZXIgb2JqZWN0LCBzbyB1aSBjYW4gYmUgY2hhbmdlZCBmcm9tIGFwcDpyZW5kZXIgZXZlbnRcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IHVpOiB7fSB9O1xyXG4gICAgICAgIHRoaXMuYXBwLmNvcHlDb25maWcoY29uZmlnLCByZXN1bHQudWksIHRoaXMuX3N1YnMpO1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyZW5kZXJcIiwgW3RoaXMsIHVybCwgcmVzdWx0XSk7XHJcbiAgICAgICAgcmVzdWx0LnVpLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgLyogZGVzdHJveSBvbGQgSFRNTCBhdHRhY2hlZCB2aWV3cyBiZWZvcmUgY3JlYXRpbmcgbmV3IG9uZSAqL1xyXG4gICAgICAgIGlmICghc2xvdCAmJiBjdXJyZW50LmlzTmV3ICYmIGN1cnJlbnQudmlldykge1xyXG4gICAgICAgICAgICBjdXJyZW50LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciBhZGRpbmcgaW5zaWRlIG9mIG11bHRpdmlldyAtIHByZXNlcnZlIG9sZCBpZFxyXG4gICAgICAgICAgICBpZiAoc2xvdCAmJiAhc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkdWkgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBvbGR1aS5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5uYW1lID09PSBcIm11bHRpdmlld1wiICYmICFyZXN1bHQudWkuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudWkuaWQgPSBvbGR1aS5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuYXBwLndlYml4LnVpKHJlc3VsdC51aSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgYXNXaW4gPSB0aGlzLl9yb290O1xyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgdXJsIGFkZGVkIHRvIGlnbm9yZSB0aGlzLnVpIGNhbGxzXHJcbiAgICAgICAgICAgIGlmIChzaG93ICYmIGFzV2luLnNldFBvc2l0aW9uICYmICFhc1dpbi5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXNXaW4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrLCBpZiB3ZSBhcmUgcmVwbGFjaW5nIHNvbWUgb2xkZXIgdmlld1xyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QudmlldyAmJiBzbG90LnZpZXcgIT09IHRoaXMgJiYgc2xvdC52aWV3ICE9PSB0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90LmlkID0gdGhpcy5fcm9vdC5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnRWaWV3KCkgfHwgIXRoaXMuYXBwLmFwcClcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBoYXZlIHN1YmFwcCwgc2V0IHdob2xlIGFwcCBhcyBhIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBvbiBkZXN0cnVjdGlvbiwgdGhlIHdob2xlIGFwcCB3aWxsIGJlIGRlc3Ryb3llZFxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXMuYXBwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2luaXQodGhpcy5fcm9vdCwgdXJsKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFVybCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkodGhpcy5fcm9vdCwgdXJsLnN1YnVybCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhdGNoKGVyciA9PiB0aGlzLl9pbml0RXJyb3IodGhpcywgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBfaW5pdCh2aWV3LCB1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0KHZpZXcsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICB9XHJcbiAgICBfdXJsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDp1cmxjaGFuZ2VcIiwgW3RoaXMsIHRoaXMuX3NlZ21lbnRdKTtcclxuICAgICAgICBjb25zdCB3YWl0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHdhaXQgPSB0aGlzLl9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0cy5wdXNoKHdhaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3YWl0cykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybENoYW5nZSh0aGlzLl9yb290LCB0aGlzLl9zZWdtZW50LnN1YnVybCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vIGlmIHN1YnZpZXcgaXMgbm90IG9jY3VwaWVkIGJ5IHNvbWUgcmVuZGVyaW5nIHlldFxyXG4gICAgICAgIGlmICghZnJhbWUubG9jaykge1xyXG4gICAgICAgICAgICAvLyByZXRyZWl2ZSBhbmQgc3RvcmUgcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLl9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGxvY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGxvY2sgYWZ0ZXIgZnJhbWUgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhcyBwcm9taXNlLmZpbmFsbHkgaXMgbm90IHN1cHBvcnRlZCBieSAgV2ViaXggbGVzc2VyIHRoYW4gNi4yXHJcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBhIG1vcmUgdmVyYm9zZSBub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgZnJhbWUubG9jayA9IGxvY2sudGhlbigoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCwgKCkgPT4gZnJhbWUubG9jayA9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICByZXR1cm4gZnJhbWUubG9jaztcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy9kZWZhdWx0IHJvdXRlXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlZ21lbnQubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV4dCBzZWdtZW50IGluIHVybCwgcmVuZGVyIGl0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgdGhpcy5fc2VnbWVudC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmcmFtZS52aWV3ICYmIGZyYW1lLnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBuZXh0IHNlZ21lbnQsIGRlbGV0ZSB0aGUgZXhpc3Rpbmcgc3ViLXZpZXdcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiBuZXcgcGF0aCBwcm92aWRlZCwgc2V0IGl0IHRvIHRoZSBmcmFtZVxyXG4gICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZyYW1lLnVybCA9IHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluIGNhc2Ugb2Ygcm91dGVkIHN1Yi12aWV3XHJcbiAgICAgICAgaWYgKGZyYW1lLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXcgcGF0aCBmb3Igc3ViLXZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5yb3V0ZS5zaG93KHBhdGgsIGZyYW1lLnZpZXcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBub3QgdHJpZ2dlciBvbkNoYW5nZSBmb3IgaXNvbGF0ZWQgc3ViLXZpZXdzXHJcbiAgICAgICAgICAgIGlmIChmcmFtZS5icmFuY2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlldyA9IGZyYW1lLnZpZXc7XHJcbiAgICAgICAgLy8gaWYgdmlldyBkb2Vzbid0IGV4aXN0cyB5ZXQsIGluaXQgaXRcclxuICAgICAgICBpZiAoIXZpZXcgJiYgZnJhbWUudXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcsIHNvIHdlIGhhdmUgaXNvbGF0ZWQgc3VidmlldyB1cmxcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJvdXRlID0gbmV3IFJvdXRlKGZyYW1lLnVybCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0LCBzbyB3ZSBoYXZlIGFuIGVtYmVkZWQgc3Vidmlld1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwiZnVuY3Rpb25cIiAmJiAhKHZpZXcgaW5zdGFuY2VvZiBmcmFtZS51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IG5ldyBmcmFtZS51cmwodGhpcy5hcHAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IGZyYW1lLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBhbHJlYWR5IGV4aXN0ZWQgdmlld1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihmcmFtZSwgKGZyYW1lLnJvdXRlIHx8IHRoaXMuX3NlZ21lbnQpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaW5pdEVycm9yKHZpZXcsIGVycikge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIHZpZXcgaXMgZGVzdHJveWVkLCBpZ25vcmUgYW55IHZpZXcgcmVsYXRlZCBlcnJvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5lcnJvcihcImFwcDplcnJvcjppbml0dmlld1wiLCBbZXJyLCB2aWV3XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN1YlZpZXcoc3ViLCBzdWJ1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAuY3JlYXRlRnJvbVVSTChzdWJ1cmwuY3VycmVudCgpLCBzdWIudmlldykudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKHN1Yiwgc3VidXJsLCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9kZXN0cm95S2lkcygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IGNoaWxkIHZpZXdzXHJcbiAgICAgICAgY29uc3QgdWlzID0gdGhpcy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHVpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodWlzW2ldICYmIHVpc1tpXS5kZXN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB1aXNbaV0uZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHZhcnMgZm9yIGJldHRlciBHQyBwcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxuXG4vLyB3cmFwcGVyIGZvciByYXcgb2JqZWN0cyBhbmQgSmV0IDEueCBzdHJ1Y3RzXHJcbmNsYXNzIEpldFZpZXdSYXcgZXh0ZW5kcyBKZXRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX3VpID0gY29uZmlnLnVpO1xyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdWJSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmFwcDtcclxuICAgICAgICBhLmFwcC5nZXRSb3V0ZXIoKS5zZXQoYS5fc2VnbWVudC5hcHBlbmQodGhpcy5wYXRoKSwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5sZXQgX29uY2UgPSB0cnVlO1xyXG5jbGFzcyBKZXRBcHBCYXNlIGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25zdCB3ZWJpeCA9IChjb25maWcgfHwge30pLndlYml4IHx8IHdpbmRvdy53ZWJpeDtcclxuICAgICAgICBzdXBlcih3ZWJpeCk7XHJcbiAgICAgICAgLy8gaW5pdCBjb25maWdcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMud2ViaXguZXh0ZW5kKHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcHBcIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCIxLjBcIixcclxuICAgICAgICAgICAgc3RhcnQ6IFwiL2hvbWVcIlxyXG4gICAgICAgIH0sIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLmNvbmZpZy5hcHA7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcywgdGhpcy53ZWJpeC5FdmVudFN5c3RlbSk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFNlcnZpY2UobmFtZSkge1xyXG4gICAgICAgIGxldCBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdID0gb2JqKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgc2V0U2VydmljZShuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXNbbmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdldFN1YlZpZXcoKS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgLy8gY29weSBvYmplY3QgYW5kIGNvbGxlY3QgZXh0cmEgaGFuZGxlcnNcclxuICAgIGNvcHlDb25maWcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIC8vIHJhdyB1aSBjb25maWdcclxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgSmV0QmFzZSB8fFxyXG4gICAgICAgICAgICAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICBvYmogPSB7ICRzdWJ2aWV3OiBvYmogfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VidmlldyBwbGFjZWhvbGRlclxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLiRzdWJ2aWV3ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJvY2VzcyBzdWItcHJvcGVydGllc1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCAob2JqIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBpbiBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gb2JqW21ldGhvZF07XHJcbiAgICAgICAgICAgIC8vIHZpZXcgY2xhc3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gXCJmdW5jdGlvblwiICYmIHBvaW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ID0geyAkc3VidmlldzogcG9pbnQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQgJiYgdHlwZW9mIHBvaW50ID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICAhKHBvaW50IGluc3RhbmNlb2YgdGhpcy53ZWJpeC5EYXRhQ29sbGVjdGlvbikgJiYgIShwb2ludCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb2ludCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IG5ldyBEYXRlKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvcHlDb25maWcocG9pbnQsIChwb2ludCBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGdldFJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcm91dGVyO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuYXBwLnRyaWdnZXIodHJpZ2dlcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwicm91dGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LnNob3cocm91dGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLmdldFJvb3QoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5yZWZyZXNoKCkudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVmlldyh1cmwpIHtcclxuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMuY29uZmlnLnZpZXdzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGlmICh1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkRXJyb3IoXCJcIiwgbmV3IEVycm9yKFwiV2ViaXggSmV0OiBFbXB0eSB1cmwgc2VnbWVudFwiKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodmlld3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygdmlld3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBsb2FkaW5nIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3ModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZWRlZmluZWQgaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzW3VybF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBcIl9ibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkVmlld0R5bmFtaWModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkRXJyb3IodXJsLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGhhbmRsZXIgY2FuIHJldHVybiB2aWV3IG9yIGl0cyBwcm9taXNlXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudGhlbikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGVycm9yIGhhbmRsZXJcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRcclxuICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IG1vZHVsZS5fX2VzTW9kdWxlID8gbW9kdWxlLmRlZmF1bHQgOiBtb2R1bGUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5fbG9hZEVycm9yKHVybCwgZXJyKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIF9mb3JWaWV3KHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLndlYml4LiQkKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgaGFuZGxlcih2aWV3LiRzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUZyb21VUkwoY2h1bmssIG5vdykge1xyXG4gICAgICAgIGxldCB2aWV3O1xyXG4gICAgICAgIGlmIChjaHVuay5pc05ldyB8fCAhY2h1bmsudmlldykge1xyXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5sb2FkVmlldyhjaHVuay5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odWkgPT4gdGhpcy5jcmVhdGVWaWV3KHVpLCBuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3ID0gUHJvbWlzZS5yZXNvbHZlKGNodW5rLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlldztcclxuICAgIH1cclxuICAgIGNyZWF0ZVZpZXcodWksIG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QXBwQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkoeyBhcHA6IHRoaXMsIG5hbWUsIHJvdXRlcjogU3ViUm91dGVyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHRoaXMsIHsgbmFtZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGZhY3RvcnkgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgICAgICB1aSA9IHVpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgb2JqID0gdWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBVSSBvYmplY3RcclxuICAgICAgICAgICAgb2JqID0gbmV3IEpldFZpZXdSYXcodGhpcywgeyBuYW1lLCB1aSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIC8vIHNob3cgdmlldyBwYXRoXHJcbiAgICBzaG93KHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLl9jb250YWluZXIsICh1cmwgfHwgdGhpcy5jb25maWcuc3RhcnQpKTtcclxuICAgIH1cclxuICAgIC8vIGV2ZW50IGhlbHBlcnNcclxuICAgIHRyaWdnZXIobmFtZSwgLi4ucmVzdCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICB9XHJcbiAgICBhcHBseShuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYml4LmJpbmQoZnVuY3Rpb24gKC4uLnJlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50KG5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMsIG51bGwsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihuYW1lLCBlcikge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGVyKTtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDplcnJvclwiLCBlcik7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGVidWcpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcltpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJbaV0gaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZXJbaV0ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKFwiTW9kdWxlIGJ1aWxkIGZhaWxlZFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHgxYlxcW1swLTk7XSptL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlIHN0eWxlPSdmb250LXNpemU6MTZweDsgYmFja2dyb3VuZC1jb2xvcjogI2VjNjg3MzsgY29sb3I6ICMwMDA7IHBhZGRpbmc6MTBweDsnPiR7dGV4dH08L3ByZT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIjxicj48YnI+Q2hlY2sgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ViaXgubWVzc2FnZSh7IHR5cGU6IFwiZXJyb3JcIiwgdGV4dDogdGV4dCwgZXhwaXJlOiAtMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgIH1cclxuICAgIC8vIHJlbmRlcnMgdG9wIHZpZXdcclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgICAgICB0aGlzLndlYml4LnRvTm9kZShyb290KSA6XHJcbiAgICAgICAgICAgIChyb290IHx8IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW5pdCA9ICF0aGlzLiRyb3V0ZXI7XHJcbiAgICAgICAgbGV0IHBhdGggPSBudWxsO1xyXG4gICAgICAgIGlmIChmaXJzdEluaXQpIHtcclxuICAgICAgICAgICAgaWYgKF9vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4LmF0dGFjaEV2ZW50KFwib25DbGlja1wiLCBlID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICAgICAgICAgIF9vbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQgPSB0aGlzLl9maXJzdF9zdGFydCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnNwbGl0KCkucm91dGUucGF0aCB8fCB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFN1YlZpZXcoKTtcclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5fc3ViU2VnbWVudDtcclxuICAgICAgICBjb25zdCByZWFkeSA9IHNlZ21lbnQuc2hvdyhwYXRoLCB0b3ApXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuY3JlYXRlRnJvbVVSTChzZWdtZW50LmN1cnJlbnQoKSwgdG9wKSlcclxuICAgICAgICAgICAgLnRoZW4odmlldyA9PiB2aWV3LnJlbmRlcihyb290LCBzZWdtZW50KSlcclxuICAgICAgICAgICAgLnRoZW4oYmFzZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRoaXMucmVhZHkudGhlbigoKSA9PiByZWFkeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlYWR5O1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5fc3ViU2VnbWVudC5jdXJyZW50KCkudmlldztcclxuICAgICAgICAgICAgaWYgKHZpZXcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKZXRWaWV3KHRoaXMsIHt9KTtcclxuICAgIH1cclxuICAgIF9maXJzdF9zdGFydChyb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSByb3V0ZTtcclxuICAgICAgICBjb25zdCBjYiA9IChhKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KGEpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlciA9IG5ldyAodGhpcy5jb25maWcucm91dGVyKShjYiwgdGhpcy5jb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8vIHN0YXJ0IGFuaW1hdGlvbiBmb3IgdG9wLWxldmVsIGFwcFxyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgJiYgdGhpcy5jb25maWcuYW5pbWF0aW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwucmVtb3ZlQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcFwiKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vIHVybCBkZWZpbmVkLCBjaGVjayByb3V0ZXIgZmlyc3RcclxuICAgICAgICAgICAgbGV0IHVybFN0cmluZyA9IHRoaXMuJHJvdXRlci5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKCF1cmxTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHVybFN0cmluZyA9IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldCh1cmxTdHJpbmcsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHVybFN0cmluZywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLmN1cnJlbnQoKS52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHJvdXRlLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5zcGxpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodGhpcy5jb25maWcuc3RhcnQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgIH1cclxuICAgIC8vIGVycm9yIGR1cmluZyB2aWV3IHJlc29sdmluZ1xyXG4gICAgX2xvYWRFcnJvcih1cmwsIGVycikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJhcHA6ZXJyb3I6cmVzb2x2ZVwiLCBbZXJyLCB1cmxdKTtcclxuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZTogXCIgXCIgfTtcclxuICAgIH1cclxuICAgIGFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG9iai4kc3VidmlldyAhPT0gdHJ1ZSA/IG9iai4kc3VidmlldyA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG9iai5uYW1lIHx8ICh1cmwgPyB0aGlzLndlYml4LnVpZCgpIDogXCJkZWZhdWx0XCIpO1xyXG4gICAgICAgIHRhcmdldC5pZCA9IG9iai5pZCB8fCBcInNcIiArIHRoaXMud2ViaXgudWlkKCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGNvbmZpZ1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRhcmdldC5pZCxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBicmFuY2g6IG9iai5icmFuY2gsXHJcbiAgICAgICAgICAgIHBvcHVwOiBvYmoucG9wdXBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB2aWV3LnBvcHVwID8gbnVsbCA6IHRhcmdldDtcclxuICAgIH1cclxufVxuXG5jbGFzcyBIYXNoUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9kZXRlY3RQcmVmaXgoKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLmNiKHRoaXMuZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXNba2V5XSA9PT0gY29tcGFyZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCkgIT09IHBhdGgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHRoaXMucHJlZml4ICsgdGhpcy5zdWZpeCArIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2dldFJhdygpLnJlcGxhY2UodGhpcy5wcmVmaXgsIFwiXCIpLnJlcGxhY2UodGhpcy5zdWZpeCwgXCJcIik7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggIT09IFwiL1wiID8gcGF0aCA6IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnLnJvdXRlc1tjb21wYXJlWzBdXTtcclxuICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgLy8gdXNlIFwiIyFcIiBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGNvbnN0IHN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4O1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSBcIiNcIiArICgodHlwZW9mIHN1Zml4ID09PSBcInVuZGVmaW5lZFwiKSA/IFwiIVwiIDogc3VmaXgpO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIiwgMilbMF07XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG59XG5cbmxldCBpc1BhdGNoZWQgPSBmYWxzZTtcclxuZnVuY3Rpb24gcGF0Y2godykge1xyXG4gICAgaWYgKGlzUGF0Y2hlZCB8fCAhdykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlzUGF0Y2hlZCA9IHRydWU7XHJcbiAgICAvLyBjdXN0b20gcHJvbWlzZSBmb3IgSUU4XHJcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgICBpZiAoIXdpbi5Qcm9taXNlKSB7XHJcbiAgICAgICAgd2luLlByb21pc2UgPSB3LnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2ZXJzaW9uID0gdy52ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuICAgIC8vIHdpbGwgYmUgZml4ZWQgaW4gd2ViaXggNS4zXHJcbiAgICBpZiAodmVyc2lvblswXSAqIDEwICsgdmVyc2lvblsxXSAqIDEgPCA1Mykge1xyXG4gICAgICAgIHcudWkuZnJlZXplID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQgYmVjYXVzZSB3ZWJpeCBqZXQgNS4wIGNhbid0IGhhbmRsZSByZXNpemUgb2Ygc2Nyb2xsdmlldyBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gdy51aS4kZnJlZXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gaGFuZGxlcigpO1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudGhlbihmdW5jdGlvbiAoc29tZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBhZGRpbmcgdmlld3MgYXMgY2xhc3Nlc1xyXG4gICAgY29uc3QgYmFzZUFkZCA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUuYWRkVmlldztcclxuICAgIGNvbnN0IGJhc2VSZW1vdmUgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLnJlbW92ZVZpZXc7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgYWRkVmlldyh2aWV3LCBpbmRleCkge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGxvZ2ljIG9ubHkgZm9yIHdpZGdldHMgaW5zaWRlIG9mIGpldC12aWV3XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBjYXNlIHdoZW4gYWRkVmlldyB1c2VkIHdpdGggYWxyZWFkeSBpbml0aWFsaXplZCB3aWRnZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0ICYmICF2aWV3LnF1ZXJ5Vmlldykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganZpZXcgPSB0aGlzLiRzY29wZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBqdmlldy5hcHAuY29weUNvbmZpZyh2aWV3LCB7fSwgc3Vicyk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQWRkLmFwcGx5KHRoaXMsIFt2aWV3LCBpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9yZW5kZXJGcmFtZShrZXksIHN1YnNba2V5XSwgbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9zdWJzW2tleV0gPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlQWRkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVZpZXcoKSB7XHJcbiAgICAgICAgICAgIGJhc2VSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gdGhpcy4kc2NvcGUuX3N1YnM7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbGwgc3ViLXZpZXdzLCBkZXN0cm95IGFuZCBjbGVhbiB0aGUgcmVtb3ZlZCBvbmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdy4kJCh0ZXN0LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3LmV4dGVuZCh3LnVpLmxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICB3LmV4dGVuZCh3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgLy8gd3JhcHBlciBmb3IgdXNpbmcgSmV0IEFwcHMgYXMgdmlld3NcclxuICAgIHcucHJvdG9VSSh7XHJcbiAgICAgICAgbmFtZTogXCJqZXRhcHBcIixcclxuICAgICAgICAkaW5pdChjZmcpIHtcclxuICAgICAgICAgICAgdGhpcy4kYXBwID0gbmV3IHRoaXMuYXBwKGNmZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdy51aWQoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjZmcuYm9keSA9IHsgaWQgfTtcclxuICAgICAgICAgICAgdGhpcy4kcmVhZHkucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAucmVuZGVyKHsgaWQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kYXBwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gdGhpcy4kYXBwW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gXCJmdW5jdGlvblwiICYmICF0aGlzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcmlnaW4uYmluZCh0aGlzLiRhcHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdy51aS5wcm94eSk7XHJcbn1cblxuY2xhc3MgSmV0QXBwIGV4dGVuZHMgSmV0QXBwQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcucm91dGVyID0gY29uZmlnLnJvdXRlciB8fCBIYXNoUm91dGVyO1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgcGF0Y2godGhpcy53ZWJpeCk7XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC4vZywgXCIvXCIpO1xyXG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiamV0LXZpZXdzL1wiICsgdXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdG9yZVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZSB8fCBhcHAud2ViaXguc3RvcmFnZS5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IChjb25maWcuc3RvcmVOYW1lIHx8IGNvbmZpZy5pZCArIFwiOnJvdXRlXCIpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UucHV0KHRoaXMubmFtZSwgcGF0aCk7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5uYW1lKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBVcmxSb3V0ZXIgZXh0ZW5kcyBIYXNoUm91dGVyIHtcclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXggfHwgXCJcIjtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEVtcHR5Um91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBfJGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBVbmxvYWRHdWFyZChhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAoXyR1cmwsIHBvaW50LCBwcm9taXNlKSB7XHJcbiAgICAgICAgaWYgKHBvaW50ID09PSB2aWV3IHx8IHBvaW50LmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGNvbmZpZygpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gUHJvbWlzZS5yZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IHByb21pc2UuY29uZmlybS50aGVuKCgpID0+IHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG4vLyAgICAgKGMpIDIwMTItMjAxOCBBaXJibmIsIEluYy5cblxuLy8gdmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuZnVuY3Rpb24gaGFzKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdG9yZSwga2V5KTtcbn1cbi8vIHZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKTtcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzKG9iaiwga2V5KSkge1xuICAgICAgaGFuZGxlci5jYWxsKChjb250ZXh0IHx8IG9iaiksIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG4vLyB2YXIgdHJpbSA9IHJlcXVpcmUoJ3N0cmluZy5wcm90b3R5cGUudHJpbScpO1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xufVxuLy8gdmFyIHdhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgbWVzc2FnZTtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IH0gY2F0Y2ggKHgpIHt9XG59XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcblxuLy8gIyMjIyBQbHVyYWxpemF0aW9uIG1ldGhvZHNcbi8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbnZhciBkZWxpbWl0ZXIgPSAnfHx8fCc7XG5cbnZhciBydXNzaWFuUGx1cmFsR3JvdXBzID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgaWYgKG4gIT09IDExICYmIGVuZCA9PT0gMSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmICgyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAhKG4gPj0gMTIgJiYgbiA8PSAxNCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMjtcbn07XG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHBsdXJhbCBsb2dpYy5cbnZhciBwbHVyYWxUeXBlcyA9IHtcbiAgYXJhYmljOiBmdW5jdGlvbiAobikge1xuICAgIC8vIGh0dHA6Ly93d3cuYXJhYmV5ZXMub3JnL1BsdXJhbF9Gb3Jtc1xuICAgIGlmIChuIDwgMykgeyByZXR1cm4gbjsgfVxuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA+PSAzICYmIGxhc3RUd28gPD0gMTApIHJldHVybiAzO1xuICAgIHJldHVybiBsYXN0VHdvID49IDExID8gNCA6IDU7XG4gIH0sXG4gIGJvc25pYW5fc2VyYmlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgY2hpbmVzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgY3JvYXRpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGZyZW5jaDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gPiAxID8gMSA6IDA7IH0sXG4gIGdlcm1hbjogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gIT09IDEgPyAxIDogMDsgfSxcbiAgcnVzc2lhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgbGl0aHVhbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA5ICYmIChuICUgMTAwIDwgMTEgfHwgbiAlIDEwMCA+IDE5KSA/IDEgOiAyO1xuICB9LFxuICBjemVjaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiAobiA+PSAyICYmIG4gPD0gNCkgPyAxIDogMjtcbiAgfSxcbiAgcG9saXNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgICByZXR1cm4gMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyO1xuICB9LFxuICBpY2VsYW5kaWM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiAobiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExKSA/IDEgOiAwOyB9LFxuICBzbG92ZW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID09PSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMyB8fCBsYXN0VHdvID09PSA0KSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgcmV0dXJuIDM7XG4gIH1cbn07XG5cblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgdG8gaW5kaXZpZHVhbCBsYW5ndWFnZSBjb2Rlcy9sb2NhbGVzLlxuLy8gV2lsbCBsb29rIHVwIGJhc2VkIG9uIGV4YWN0IG1hdGNoLCBpZiBub3QgZm91bmQgYW5kIGl0J3MgYSBsb2NhbGUgd2lsbCBwYXJzZSB0aGUgbG9jYWxlXG4vLyBmb3IgbGFuZ3VhZ2UgY29kZSwgYW5kIGlmIHRoYXQgZG9lcyBub3QgZXhpc3Qgd2lsbCBkZWZhdWx0IHRvICdlbidcbnZhciBwbHVyYWxUeXBlVG9MYW5ndWFnZXMgPSB7XG4gIGFyYWJpYzogWydhciddLFxuICBib3NuaWFuX3NlcmJpYW46IFsnYnMtTGF0bi1CQScsICdicy1DeXJsLUJBJywgJ3NybC1SUycsICdzci1SUyddLFxuICBjaGluZXNlOiBbJ2lkJywgJ2lkLUlEJywgJ2phJywgJ2tvJywgJ2tvLUtSJywgJ2xvJywgJ21zJywgJ3RoJywgJ3RoLVRIJywgJ3poJ10sXG4gIGNyb2F0aWFuOiBbJ2hyJywgJ2hyLUhSJ10sXG4gIGdlcm1hbjogWydmYScsICdkYScsICdkZScsICdlbicsICdlcycsICdmaScsICdlbCcsICdoZScsICdoaS1JTicsICdodScsICdodS1IVScsICdpdCcsICdubCcsICdubycsICdwdCcsICdzdicsICd0ciddLFxuICBmcmVuY2g6IFsnZnInLCAndGwnLCAncHQtYnInXSxcbiAgcnVzc2lhbjogWydydScsICdydS1SVSddLFxuICBsaXRodWFuaWFuOiBbJ2x0J10sXG4gIGN6ZWNoOiBbJ2NzJywgJ2NzLUNaJywgJ3NrJ10sXG4gIHBvbGlzaDogWydwbCddLFxuICBpY2VsYW5kaWM6IFsnaXMnXSxcbiAgc2xvdmVuaWFuOiBbJ3NsLVNMJ11cbn07XG5cbmZ1bmN0aW9uIGxhbmdUb1R5cGVNYXAobWFwcGluZykge1xuICB2YXIgcmV0ID0ge307XG4gIGZvckVhY2gobWFwcGluZywgZnVuY3Rpb24gKGxhbmdzLCB0eXBlKSB7XG4gICAgZm9yRWFjaChsYW5ncywgZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgIHJldFtsYW5nXSA9IHR5cGU7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlTmFtZShsb2NhbGUpIHtcbiAgdmFyIGxhbmdUb1BsdXJhbFR5cGUgPSBsYW5nVG9UeXBlTWFwKHBsdXJhbFR5cGVUb0xhbmd1YWdlcyk7XG4gIHJldHVybiBsYW5nVG9QbHVyYWxUeXBlW2xvY2FsZV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlW3NwbGl0LmNhbGwobG9jYWxlLCAvLS8sIDEpWzBdXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGUuZW47XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVJbmRleChsb2NhbGUsIGNvdW50KSB7XG4gIHJldHVybiBwbHVyYWxUeXBlc1twbHVyYWxUeXBlTmFtZShsb2NhbGUpXShjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZSh0b2tlbikge1xuICByZXR1cm4gdG9rZW4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0VG9rZW5SZWdleChvcHRzKSB7XG4gIHZhciBwcmVmaXggPSAob3B0cyAmJiBvcHRzLnByZWZpeCkgfHwgJyV7JztcbiAgdmFyIHN1ZmZpeCA9IChvcHRzICYmIG9wdHMuc3VmZml4KSB8fCAnfSc7XG5cbiAgaWYgKHByZWZpeCA9PT0gZGVsaW1pdGVyIHx8IHN1ZmZpeCA9PT0gZGVsaW1pdGVyKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wiJyArIGRlbGltaXRlciArICdcIiB0b2tlbiBpcyByZXNlcnZlZCBmb3IgcGx1cmFsaXphdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoZXNjYXBlKHByZWZpeCkgKyAnKC4qPyknICsgZXNjYXBlKHN1ZmZpeCksICdnJyk7XG59XG5cbnZhciBkb2xsYXJSZWdleCA9IC9cXCQvZztcbnZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQnO1xudmFyIGRlZmF1bHRUb2tlblJlZ2V4ID0gLyVcXHsoLio/KVxcfS9nO1xuXG4vLyAjIyMgdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKVxuLy9cbi8vIFRha2VzIGEgcGhyYXNlIHN0cmluZyBhbmQgdHJhbnNmb3JtcyBpdCBieSBjaG9vc2luZyB0aGUgY29ycmVjdFxuLy8gcGx1cmFsIGZvcm0gYW5kIGludGVycG9sYXRpbmcgaXQuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnSGVsbG8sICV7bmFtZX0hJywge25hbWU6ICdTcGlrZSd9KTtcbi8vICAgICAvLyBcIkhlbGxvLCBTcGlrZSFcIlxuLy9cbi8vIFRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtIGlzIHNlbGVjdGVkIGlmIHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRcbi8vIGlzIHNldC4gWW91IGNhbiBwYXNzIGluIGEgbnVtYmVyIGluc3RlYWQgb2YgYW4gT2JqZWN0IGFzIGBzdWJzdGl0dXRpb25zYFxuLy8gYXMgYSBzaG9ydGN1dCBmb3IgYHNtYXJ0X2NvdW50YC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAxfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIxIG5ldyBtZXNzYWdlXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAyfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIyIG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIDUsICdlbicpO1xuLy8gICAgIC8vIFwiNSBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vIFlvdSBzaG91bGQgcGFzcyBpbiBhIHRoaXJkIGFyZ3VtZW50LCB0aGUgbG9jYWxlLCB0byBzcGVjaWZ5IHRoZSBjb3JyZWN0IHBsdXJhbCB0eXBlLlxuLy8gSXQgZGVmYXVsdHMgdG8gYCdlbidgIHdpdGggMiBwbHVyYWwgZm9ybXMuXG5mdW5jdGlvbiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUsIHRva2VuUmVnZXgpIHtcbiAgaWYgKHR5cGVvZiBwaHJhc2UgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlIGV4cGVjdHMgYXJndW1lbnQgIzEgdG8gYmUgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoc3Vic3RpdHV0aW9ucyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHBocmFzZTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBwaHJhc2U7XG4gIHZhciBpbnRlcnBvbGF0aW9uUmVnZXggPSB0b2tlblJlZ2V4IHx8IGRlZmF1bHRUb2tlblJlZ2V4O1xuXG4gIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc3Vic3RpdHV0aW9ucyA9PT0gJ251bWJlcicgPyB7IHNtYXJ0X2NvdW50OiBzdWJzdGl0dXRpb25zIH0gOiBzdWJzdGl0dXRpb25zO1xuXG4gIC8vIFNlbGVjdCBwbHVyYWwgZm9ybTogYmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYFxuICAvLyBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkIGJ5IGBkZWxpbWl0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudGAsXG4gIC8vIGNob29zZSB0aGUgY29ycmVjdCBwbHVyYWwgZm9ybS4gVGhpcyBpcyBvbmx5IGRvbmUgaWYgYGNvdW50YCBpcyBzZXQuXG4gIGlmIChvcHRpb25zLnNtYXJ0X2NvdW50ICE9IG51bGwgJiYgcmVzdWx0KSB7XG4gICAgdmFyIHRleHRzID0gc3BsaXQuY2FsbChyZXN1bHQsIGRlbGltaXRlcik7XG4gICAgcmVzdWx0ID0gdHJpbSh0ZXh0c1twbHVyYWxUeXBlSW5kZXgobG9jYWxlIHx8ICdlbicsIG9wdGlvbnMuc21hcnRfY291bnQpXSB8fCB0ZXh0c1swXSk7XG4gIH1cblxuICAvLyBJbnRlcnBvbGF0ZTogQ3JlYXRlcyBhIGBSZWdFeHBgIG9iamVjdCBmb3IgZWFjaCBpbnRlcnBvbGF0aW9uIHBsYWNlaG9sZGVyLlxuICByZXN1bHQgPSByZXBsYWNlLmNhbGwocmVzdWx0LCBpbnRlcnBvbGF0aW9uUmVnZXgsIGZ1bmN0aW9uIChleHByZXNzaW9uLCBhcmd1bWVudCkge1xuICAgIGlmICghaGFzKG9wdGlvbnMsIGFyZ3VtZW50KSB8fCBvcHRpb25zW2FyZ3VtZW50XSA9PSBudWxsKSB7IHJldHVybiBleHByZXNzaW9uOyB9XG4gICAgLy8gRW5zdXJlIHJlcGxhY2VtZW50IHZhbHVlIGlzIGVzY2FwZWQgdG8gcHJldmVudCBzcGVjaWFsICQtcHJlZml4ZWQgcmVnZXggcmVwbGFjZSB0b2tlbnMuXG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ3VtZW50XSwgZG9sbGFyUmVnZXgsIGRvbGxhckJpbGxzWWFsbCk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vICMjIyBQb2x5Z2xvdCBjbGFzcyBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gUG9seWdsb3Qob3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xuICB0aGlzLmV4dGVuZChvcHRzLnBocmFzZXMgfHwge30pO1xuICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuICB2YXIgYWxsb3dNaXNzaW5nID0gb3B0cy5hbGxvd01pc3NpbmcgPyB0cmFuc2Zvcm1QaHJhc2UgOiBudWxsO1xuICB0aGlzLm9uTWlzc2luZ0tleSA9IHR5cGVvZiBvcHRzLm9uTWlzc2luZ0tleSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMub25NaXNzaW5nS2V5IDogYWxsb3dNaXNzaW5nO1xuICB0aGlzLndhcm4gPSBvcHRzLndhcm4gfHwgd2FybjtcbiAgdGhpcy50b2tlblJlZ2V4ID0gY29uc3RydWN0VG9rZW5SZWdleChvcHRzLmludGVycG9sYXRpb24pO1xufVxuXG4vLyAjIyMgcG9seWdsb3QubG9jYWxlKFtsb2NhbGVdKVxuLy9cbi8vIEdldCBvciBzZXQgbG9jYWxlLiBJbnRlcm5hbGx5LCBQb2x5Z2xvdCBvbmx5IHVzZXMgbG9jYWxlIGZvciBwbHVyYWxpemF0aW9uLlxuUG9seWdsb3QucHJvdG90eXBlLmxvY2FsZSA9IGZ1bmN0aW9uIChuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkgdGhpcy5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LmV4dGVuZChwaHJhc2VzKVxuLy9cbi8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUga2V5IGNhbiBiZSBhbnkgc3RyaW5nLiAgRmVlbCBmcmVlIHRvIGNhbGwgYGV4dGVuZGAgbXVsdGlwbGUgdGltZXM7XG4vLyBpdCB3aWxsIG92ZXJyaWRlIGFueSBwaHJhc2VzIHdpdGggdGhlIHNhbWUga2V5LCBidXQgbGVhdmUgZXhpc3RpbmcgcGhyYXNlc1xuLy8gdW50b3VjaGVkLlxuLy9cbi8vIEl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyBuZXN0ZWQgcGhyYXNlIG9iamVjdHMsIHdoaWNoIGdldCBmbGF0dGVuZWRcbi8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcIm5hdlwiOiB7XG4vLyAgICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiLFxuLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuLy8gICAgICAgICAgIFwid2VsY29tZVwiOiBcIldlbGNvbWVcIlxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9Jyxcbi8vICAgICAvLyAgICduYXYuc2lkZWJhci53ZWxjb21lJzogJ1dlbGNvbWUnXG4vLyAgICAgLy8gfVxuLy9cbi8vIGBleHRlbmRgIGFjY2VwdHMgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50LCBgcHJlZml4YCwgd2hpY2ggY2FuIGJlIHVzZWRcbi8vIHRvIHByZWZpeCBldmVyeSBrZXkgaW4gdGhlIHBocmFzZXMgb2JqZWN0IHdpdGggc29tZSBzdHJpbmcsIHVzaW5nIGRvdFxuLy8gbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9LCBcIm5hdlwiKTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nXG4vLyAgICAgLy8gfVxuLy9cbi8vIFRoaXMgZmVhdHVyZSBpcyB1c2VkIGludGVybmFsbHkgdG8gc3VwcG9ydCBuZXN0ZWQgcGhyYXNlIG9iamVjdHMuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5leHRlbmQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV0gPSBwaHJhc2U7XG4gICAgfVxuICB9LCB0aGlzKTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC51bnNldChwaHJhc2VzKVxuLy8gVXNlIGB1bnNldGAgdG8gc2VsZWN0aXZlbHkgcmVtb3ZlIGtleXMgZnJvbSBhIHBvbHlnbG90IGluc3RhbmNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC51bnNldChcInNvbWVfa2V5XCIpO1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSB1bnNldCBtZXRob2QgY2FuIHRha2UgZWl0aGVyIGEgc3RyaW5nIChmb3IgdGhlIGtleSksIG9yIGFuIG9iamVjdCBoYXNoIHdpdGhcbi8vIHRoZSBrZXlzIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gdW5zZXQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG1vcmVQaHJhc2VzID09PSAnc3RyaW5nJykge1xuICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbbW9yZVBocmFzZXNdO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMudW5zZXQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufTtcblxuLy8gIyMjIHBvbHlnbG90LmNsZWFyKClcbi8vXG4vLyBDbGVhcnMgYWxsIHBocmFzZXMuIFVzZWZ1bCBmb3Igc3BlY2lhbCBjYXNlcywgc3VjaCBhcyBmcmVlaW5nXG4vLyB1cCBtZW1vcnkgaWYgeW91IGhhdmUgbG90cyBvZiBwaHJhc2VzIGJ1dCBubyBsb25nZXIgbmVlZCB0b1xuLy8gcGVyZm9ybSBhbnkgdHJhbnNsYXRpb24uIEFsc28gdXNlZCBpbnRlcm5hbGx5IGJ5IGByZXBsYWNlYC5cblBvbHlnbG90LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5waHJhc2VzID0ge307XG59O1xuXG4vLyAjIyMgcG9seWdsb3QucmVwbGFjZShwaHJhc2VzKVxuLy9cbi8vIENvbXBsZXRlbHkgcmVwbGFjZSB0aGUgZXhpc3RpbmcgcGhyYXNlcyB3aXRoIGEgbmV3IHNldCBvZiBwaHJhc2VzLlxuLy8gTm9ybWFsbHksIGp1c3QgdXNlIGBleHRlbmRgIHRvIGFkZCBtb3JlIHBocmFzZXMsIGJ1dCB1bmRlciBjZXJ0YWluXG4vLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdQaHJhc2VzKSB7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5leHRlbmQobmV3UGhyYXNlcyk7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC50KGtleSwgb3B0aW9ucylcbi8vXG4vLyBUaGUgbW9zdC11c2VkIG1ldGhvZC4gUHJvdmlkZSBhIGtleSwgYW5kIGB0YCB3aWxsIHJldHVybiB0aGVcbi8vIHBocmFzZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvXCIpO1xuLy8gICAgID0+IFwiSGVsbG9cIlxuLy9cbi8vIFRoZSBwaHJhc2UgdmFsdWUgaXMgcHJvdmlkZWQgZmlyc3QgYnkgYSBjYWxsIHRvIGBwb2x5Z2xvdC5leHRlbmQoKWAgb3Jcbi8vIGBwb2x5Z2xvdC5yZXBsYWNlKClgLlxuLy9cbi8vIFBhc3MgaW4gYW4gb2JqZWN0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gcGVyZm9ybSBpbnRlcnBvbGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9fbmFtZVwiLCB7bmFtZTogXCJTcGlrZVwifSk7XG4vLyAgICAgPT4gXCJIZWxsbywgU3Bpa2VcIlxuLy9cbi8vIElmIHlvdSBsaWtlLCB5b3UgY2FuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIGluIGNhc2UgdGhlIHBocmFzZSBpcyBtaXNzaW5nLlxuLy8gVXNlIHRoZSBzcGVjaWFsIG9wdGlvbiBrZXkgXCJfXCIgdG8gc3BlY2lmeSBhIGRlZmF1bHQuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJpX2xpa2VfdG9fd3JpdGVfaW5fbGFuZ3VhZ2VcIiwge1xuLy8gICAgICAgXzogXCJJIGxpa2UgdG8gd3JpdGUgaW4gJXtsYW5ndWFnZX0uXCIsXG4vLyAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCJcbi8vICAgICB9KTtcbi8vICAgICA9PiBcIkkgbGlrZSB0byB3cml0ZSBpbiBKYXZhU2NyaXB0LlwiXG4vL1xuUG9seWdsb3QucHJvdG90eXBlLnQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG4gIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgdmFyIG9wdHMgPSBvcHRpb25zID09IG51bGwgPyB7fSA6IG9wdGlvbnM7XG4gIGlmICh0eXBlb2YgdGhpcy5waHJhc2VzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gdGhpcy5waHJhc2VzW2tleV07XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMuXyA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSBvcHRzLl87XG4gIH0gZWxzZSBpZiAodGhpcy5vbk1pc3NpbmdLZXkpIHtcbiAgICB2YXIgb25NaXNzaW5nS2V5ID0gdGhpcy5vbk1pc3NpbmdLZXk7XG4gICAgcmVzdWx0ID0gb25NaXNzaW5nS2V5KGtleSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2FybignTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiBcIicgKyBrZXkgKyAnXCInKTtcbiAgICByZXN1bHQgPSBrZXk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC5oYXMoa2V5KVxuLy9cbi8vIENoZWNrIGlmIHBvbHlnbG90IGhhcyBhIHRyYW5zbGF0aW9uIGZvciBnaXZlbiBrZXlcblBvbHlnbG90LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBoYXModGhpcy5waHJhc2VzLCBrZXkpO1xufTtcblxuLy8gZXhwb3J0IHRyYW5zZm9ybVBocmFzZVxuUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlID0gZnVuY3Rpb24gdHJhbnNmb3JtKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpO1xufTtcblxudmFyIHdlYml4UG9seWdsb3QgPSBQb2x5Z2xvdDtcblxuZnVuY3Rpb24gTG9jYWxlKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IGxhbmcgPSBzdG9yYWdlID8gKHN0b3JhZ2UuZ2V0KFwibGFuZ1wiKSB8fCBcImVuXCIpIDogKGNvbmZpZy5sYW5nIHx8IFwiZW5cIik7XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpIHtcclxuICAgICAgICBpZiAoZGF0YS5fX2VzTW9kdWxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBjb25maWcgPSB7IHBocmFzZXM6IGRhdGEgfTtcclxuICAgICAgICBpZiAoY29uZmlnLnBvbHlnbG90KSB7XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5leHRlbmQocGNvbmZpZywgY29uZmlnLnBvbHlnbG90KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHNlcnZpY2UucG9seWdsb3QgPSBuZXcgd2ViaXhQb2x5Z2xvdChwY29uZmlnKTtcclxuICAgICAgICBwb2x5LmxvY2FsZShuYW1lKTtcclxuICAgICAgICBzZXJ2aWNlLl8gPSBhcHAud2ViaXguYmluZChwb2x5LnQsIHBvbHkpO1xyXG4gICAgICAgIGxhbmcgPSBuYW1lO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwibGFuZ1wiLCBsYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy53ZWJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NOYW1lID0gY29uZmlnLndlYml4W25hbWVdO1xyXG4gICAgICAgICAgICBpZiAobG9jTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYXBwLndlYml4LmkxOG4uc2V0TG9jYWxlKGxvY05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMYW5nKCkgeyByZXR1cm4gbGFuZzsgfVxyXG4gICAgZnVuY3Rpb24gc2V0TGFuZyhuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAvLyBpZ25vcmUgc2V0TGFuZyBpZiBsb2FkaW5nIGJ5IHBhdGggaXMgZGlzYWJsZWRcclxuICAgICAgICBpZiAoY29uZmlnLnBhdGggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IChjb25maWcucGF0aCA/IGNvbmZpZy5wYXRoICsgXCIvXCIgOiBcIlwiKSArIG5hbWU7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCJqZXQtbG9jYWxlcy9cIiArIHBhdGgpO1xyXG4gICAgICAgIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldExhbmcsIHNldExhbmcsIHNldExhbmdEYXRhLCBfOiBudWxsLCBwb2x5Z2xvdDogbnVsbFxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwibG9jYWxlXCIsIHNlcnZpY2UpO1xyXG4gICAgc2V0TGFuZyhsYW5nLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBzaG93KHZpZXcsIGNvbmZpZywgdmFsdWUpIHtcclxuICAgIGlmIChjb25maWcudXJscykge1xyXG4gICAgICAgIHZhbHVlID0gY29uZmlnLnVybHNbdmFsdWVdIHx8IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgdmFsdWUgPSB7IFtjb25maWcucGFyYW1dOiB2YWx1ZSB9O1xyXG4gICAgfVxyXG4gICAgdmlldy5zaG93KHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBNZW51KGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCBmcmFtZSA9IHZpZXcuZ2V0U3ViVmlld0luZm8oKS5wYXJlbnQ7XHJcbiAgICBjb25zdCB1aSA9IHZpZXcuJCQoY29uZmlnLmlkIHx8IGNvbmZpZyk7XHJcbiAgICBsZXQgc2lsZW50ID0gZmFsc2U7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIHRoaXMuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uYWZ0ZXJzZWxlY3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuZ2V0U2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB1aS5nZXRTZWxlY3RlZElkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpyb3V0ZWAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgICAgICBuYW1lID0gdmlldy5nZXRQYXJhbShjb25maWcucGFyYW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VnbWVudCA9IGZyYW1lLmdldFVybCgpWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHNlZ21lbnQucGFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBzaWxlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUgJiYgdWkuZ2V0VmFsdWUoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0VmFsdWUobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuc2VsZWN0ICYmIHVpLmV4aXN0cyhuYW1lKSAmJiB1aS5nZXRTZWxlY3RlZElkKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNlbGVjdChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaWxlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG5jb25zdCBiYXNlaWNvbnMgPSB7XHJcbiAgICBnb29kOiBcImNoZWNrXCIsXHJcbiAgICBlcnJvcjogXCJ3YXJuaW5nXCIsXHJcbiAgICBzYXZpbmc6IFwicmVmcmVzaCBmYS1zcGluXCJcclxufTtcclxuY29uc3QgYmFzZXRleHQgPSB7XHJcbiAgICBnb29kOiBcIk9rXCIsXHJcbiAgICBlcnJvcjogXCJFcnJvclwiLFxyXG4gICAgc2F2aW5nOiBcIkNvbm5lY3RpbmcuLi5cIlxyXG59O1xyXG5mdW5jdGlvbiBTdGF0dXMoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGxldCBzdGF0dXMgPSBcImdvb2RcIjtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgaXNlcnJvciA9IGZhbHNlO1xyXG4gICAgbGV0IGV4cGlyZURlbGF5ID0gY29uZmlnLmV4cGlyZTtcclxuICAgIGlmICghZXhwaXJlRGVsYXkgJiYgZXhwaXJlRGVsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgZXhwaXJlRGVsYXkgPSAyMDAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dHMgPSBjb25maWcudGV4dHMgfHwgYmFzZXRleHQ7XHJcbiAgICBjb25zdCBpY29ucyA9IGNvbmZpZy5pY29ucyB8fCBiYXNlaWNvbnM7XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbmZpZyA9IHsgdGFyZ2V0OiBjb25maWcgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2goY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSB2aWV3LiQkKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgIGlmIChhcmVhKSB7XHJcbiAgICAgICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiPGRpdiBjbGFzcz0nc3RhdHVzX1wiICtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJz48c3BhbiBjbGFzcz0nd2ViaXhfaWNvbiBmYS1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbc3RhdHVzXSArIFwiJz48L3NwYW4+IFwiICsgdGV4dHNbc3RhdHVzXSArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlYS5zZXRIVE1MKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJnb29kXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmFpbChlcnIpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIsIGVycik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdGFydChwcm9taXNlKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgICBzZXRTdGF0dXMoXCJzYXZpbmdcIik7XHJcbiAgICAgICAgaWYgKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbihzdWNjZXNzLCBmYWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2goXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhtb2RlLCBlcnIpIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwic2F2aW5nXCIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gXCJzYXZpbmdcIjtcclxuICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNlcnJvciA9IChtb2RlID09PSBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGlzZXJyb3IgPyBcImVycm9yXCIgOiBcImdvb2RcIjtcclxuICAgICAgICAgICAgICAgIGlmIChpc2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmVycm9yKFwiYXBwOmVycm9yOnNlcnZlclwiLCBbZXJyLnJlc3BvbnNlVGV4dCB8fCBlcnJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmVEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVTdGF0dXMsIGV4cGlyZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFjayhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZHAgPSBhcHAud2ViaXguZHAoZGF0YSk7XHJcbiAgICAgICAgaWYgKGRwKSB7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlckRhdGFTZW5kXCIsIHN0YXJ0KTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZUVycm9yXCIsIChfaWQsIF9vYmosIHJlc3BvbnNlKSA9PiBmYWlsKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVcIiwgc3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJzdGF0dXNcIiwge1xyXG4gICAgICAgIGdldFN0YXR1cyxcclxuICAgICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgdHJhY2tcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbmZpZy5yZW1vdGUpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvblJlbW90ZUNhbGxcIiwgc3RhcnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5hamF4KSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25CZWZvcmVBamF4XCIsIChfbW9kZSwgX3VybCwgX2RhdGEsIF9yZXF1ZXN0LCBfaGVhZGVycywgX2ZpbGVzLCBwcm9taXNlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0KHByb21pc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5kYXRhKSB7XHJcbiAgICAgICAgdHJhY2soY29uZmlnLmRhdGEpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFRoZW1lKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IHRoZW1lID0gc3RvcmFnZSA/XHJcbiAgICAgICAgKHN0b3JhZ2UuZ2V0KFwidGhlbWVcIikgfHwgXCJmbGF0LWRlZmF1bHRcIilcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIChjb25maWcudGhlbWUgfHwgXCJmbGF0LWRlZmF1bHRcIik7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFRoZW1lKCkgeyByZXR1cm4gdGhlbWU7IH0sXHJcbiAgICAgICAgc2V0VGhlbWUobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsbmFtZSA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxuYW1lID09PSBuYW1lIHx8IGxuYW1lID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHAud2ViaXguc2tpbi5zZXQocGFydHNbMF0pO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5yZW1vdmVDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIHRoZW1lKTtcclxuICAgICAgICAgICAgLy8gYWRkIG5ldyBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwuYWRkQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgdGhlbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJ0aGVtZVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcInRoZW1lXCIsIHNlcnZpY2UpO1xyXG4gICAgc2VydmljZS5zZXRUaGVtZSh0aGVtZSwgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gY29weVBhcmFtcyhkYXRhLCB1cmwsIHJvdXRlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YVtyb3V0ZVtpXV0gPSB1cmxbaSArIDFdID8gdXJsW2kgKyAxXS5wYWdlIDogXCJcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBVcmxQYXJhbShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3Qgcm91dGUgPSBjb25maWcucm91dGUgfHwgY29uZmlnO1xyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgdmlldy5vbihhcHAsIFwiYXBwOnVybGNoYW5nZVwiLCBmdW5jdGlvbiAoc3Vidmlldywgc2VnbWVudCkge1xyXG4gICAgICAgIGlmICh2aWV3ID09PSBzdWJ2aWV3KSB7XHJcbiAgICAgICAgICAgIGNvcHlQYXJhbXMoZGF0YSwgc2VnbWVudC5zdWJ1cmwoKSwgcm91dGUpO1xyXG4gICAgICAgICAgICBzZWdtZW50LnNpemUocm91dGUubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvcyA9IHZpZXcuc2V0UGFyYW07XHJcbiAgICBjb25zdCBvZyA9IHZpZXcuZ2V0UGFyYW07XHJcbiAgICB2aWV3LnNldFBhcmFtID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBzaG93KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3V0ZS5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoXCJcIiwgdmFsdWUsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb3MuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSwgc2hvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZpZXcuZ2V0UGFyYW0gPSBmdW5jdGlvbiAoa2V5LCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZy5jYWxsKHRoaXMsIGtleSwgbW9kZSk7XHJcbiAgICB9O1xyXG4gICAgY29weVBhcmFtcyhkYXRhLCB2aWV3LmdldFVybCgpLCByb3V0ZSk7XHJcbn1cblxuZnVuY3Rpb24gVXNlcihhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGxvZ2luID0gY29uZmlnLmxvZ2luIHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBsb2dvdXQgPSBjb25maWcubG9nb3V0IHx8IFwiL2xvZ291dFwiO1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dpbiA9IGNvbmZpZy5hZnRlckxvZ2luIHx8IGFwcC5jb25maWcuc3RhcnQ7XHJcbiAgICBjb25zdCBhZnRlckxvZ291dCA9IGNvbmZpZy5hZnRlckxvZ291dCB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgcGluZyA9IGNvbmZpZy5waW5nIHx8IDUgKiA2MCAqIDEwMDA7XHJcbiAgICBjb25zdCBtb2RlbCA9IGNvbmZpZy5tb2RlbDtcclxuICAgIGxldCB1c2VyID0gY29uZmlnLnVzZXI7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3RhdHVzKHNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIXNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnN0YXR1cygpLmNhdGNoKCgpID0+IG51bGwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbihuYW1lLCBwYXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dpbihuYW1lLCBwYXNzKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ2luXCIsIFt1c2VyXSk7XHJcbiAgICAgICAgICAgICAgICBhcHAuc2hvdyhhZnRlckxvZ2luKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9nb3V0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ291dFwiLCBbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gY2FuTmF2aWdhdGUodXJsLCBvYmopIHtcclxuICAgICAgICBpZiAodXJsID09PSBsb2dvdXQpIHtcclxuICAgICAgICAgICAgc2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gYWZ0ZXJMb2dvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHVybCAhPT0gbG9naW4gJiYgIXNlcnZpY2UuZ2V0U3RhdHVzKCkpIHtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gbG9naW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ1c2VyXCIsIHNlcnZpY2UpO1xyXG4gICAgYXBwLmF0dGFjaEV2ZW50KGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAodXJsLCBfJHJvb3QsIG9iaikge1xyXG4gICAgICAgIGlmIChjb25maWcucHVibGljICYmIGNvbmZpZy5wdWJsaWModXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtID0gc2VydmljZS5nZXRTdGF0dXModHJ1ZSkudGhlbigoKSA9PiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FuTmF2aWdhdGUodXJsLCBvYmopO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocGluZykge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLCBwaW5nKTtcclxuICAgIH1cclxufVxuXG4vKlxyXG5NSVQgTGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTkgWEIgU29mdHdhcmVcclxuKi9cclxubGV0IHdlYml4ID0gd2luZG93LndlYml4O1xyXG5pZiAod2ViaXgpIHtcclxuICAgIHBhdGNoKHdlYml4KTtcclxufVxyXG5jb25zdCBwbHVnaW5zID0ge1xyXG4gICAgVW5sb2FkR3VhcmQsIExvY2FsZSwgTWVudSwgVGhlbWUsIFVzZXIsIFN0YXR1cywgVXJsUGFyYW1cclxufTtcclxuY29uc3QgdyA9IHdpbmRvdztcclxuaWYgKCF3LlByb21pc2UpIHtcclxuICAgIHcuUHJvbWlzZSA9IHcud2ViaXgucHJvbWlzZTtcclxufVxuXG5leHBvcnQgeyBwbHVnaW5zLCBKZXRBcHAsIEpldFZpZXcsIEhhc2hSb3V0ZXIsIFN0b3JlUm91dGVyLCBVcmxSb3V0ZXIsIEVtcHR5Um91dGVyLCBTdWJSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpldC5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImNvbnN0IGxvZ291dFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9nb3V0JztcclxuY29uc3QgbG9naW5VcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJztcclxuY29uc3QgcmVnaXN0ZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6YXRpb24ge1xyXG5cdHJlZ2lzdGVyKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHJlZ2lzdGVyVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9naW4ob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9naW5VcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dvdXQoZGF0ZSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ291dFVybCwgZGF0ZSk7XHJcblx0fVxyXG59IiwiY29uc3QgRFVNTVlDT1ZFUiA9ICdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYWQvZmQvNTgvYWRmZDU4NzNiZTM4NDFmMDY2MGU2YWFhMDBjZGUxOGUuanBnJztcclxuY29uc3QgU1VDQ0VTU19TUUwgPSAyO1xyXG5jb25zdCBTVUNDRVNTX01PTkdPID0gMjAwO1xyXG5jb25zdCBVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuXHJcbmV4cG9ydCB7RFVNTVlDT1ZFUiwgU1VDQ0VTU19TUUwsIFNVQ0NFU1NfTU9OR08sIFVSTH07IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc291cmNlcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIEJvb2tzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9ib29rcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoaWQpIHtcclxuXHRcdGNvbnN0IHVzZXJJZCA9IHt1c2VySWQ6IGlkfTtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCwgdXNlcklkKTtcclxuXHR9XHJcblxyXG5cdGdldEJvb2soYm9va0lkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtib29rSWR9YCk7XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEsIGZ1bmMpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEsIGZ1bmMpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5kZWwoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHJcblx0fVxyXG5cclxuXHRzZWFyY2gocmVxKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9c2VhcmNoLyR7cmVxfWApO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEJvb2tzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgRmlsZXNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L2ZpbGVzL2A7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcigpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW1zKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdGRvd25sb2FkSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5yZXNwb25zZSgnYmxvYicpLmdldChgJHt0aGlzLl91cmx9ZG93bmxvYWQvJHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5kZWwoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmlsZXNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBMaWtlc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBbXTtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vbGlrZXMvYDtcclxuXHR9XHJcblxyXG5cdGdldExpa2VzKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcclxuXHR9XHJcblxyXG5cdGFkZExpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUxpa2UodXNlcklkLCBib29rSWQpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdHVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRib29rSWQ6IGJvb2tJZFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmRlbCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExpa2VzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgT3JkZXJzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9vcmRlcnMvYDtcclxuXHR9XHJcblx0XHJcblx0Z2V0SXRlbXModXNlcklkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHt1c2VySWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0ob3JkZXIpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIG9yZGVyKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZVVzZXJPcmRlcnMob3JkZXJzVG9SZW1vdmUsIHVzZXJJZCkge1xyXG5cdFx0d2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIHtyZW1vdmU6IG9yZGVyc1RvUmVtb3ZlLCB1c2VySWQ6IHVzZXJJZH0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5kZWwoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgT3JkZXJzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgVXNlcnNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L3VzZXJzL2A7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhRnJvbVNlcnZlcigpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KHRoaXMuX3VybCk7XHJcblx0fVxyXG5cclxuXHRnZXRSZWFkZXJzKCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfS9yZWFkZXJzYCk7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJzTW9kZWwoKTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQge0pldEFwcCwgRW1wdHlSb3V0ZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBKZXRBcHB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcclxuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xyXG5cdFx0XHRpZCBcdFx0OiBBUFBOQU1FLFxyXG5cdFx0XHR2ZXJzaW9uIDogVkVSU0lPTixcclxuXHRcdFx0cm91dGVyIFx0OiBCVUlMRF9BU19NT0RVTEUgPyBFbXB0eVJvdXRlciA6IEhhc2hSb3V0ZXIsXHJcblx0XHRcdGRlYnVnIFx0OiAhUFJPRFVDVElPTixcclxuXHRcdFx0c3RhcnQgXHQ6ICcvbG9naW4nXHJcblx0XHR9O1xyXG5cclxuXHRcdHN1cGVyKHsgLi4uZGVmYXVsdHMsIC4uLmNvbmZpZyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbmlmICghQlVJTERfQVNfTU9EVUxFKXtcclxuXHR3ZWJpeC5yZWFkeSgoKSA9PiB7XHJcblx0XHRjb25zdCBhcHAgPSBuZXcgTXlBcHAoKTtcclxuXHRcdGFwcC5hdHRhY2hFdmVudCgnYXBwOmd1YXJkJywgKHVybCwgdmlldywgbmF2KSA9PiB7XHJcblx0XHRcdGlmKHVybC5pbmRleE9mKCdpZCcpICE9PSAtMSkge1xyXG5cdFx0XHRcdGNvbnN0IHVybFBhcnRzID0gdXJsLnNwbGl0KCcvJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldFBhcnQ7XHJcblxyXG5cdFx0XHRcdHVybFBhcnRzLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdFx0XHRpZihlbC5pbmRleE9mKCdpZCcpICE9IC0xKSB7XHJcblx0XHRcdFx0XHRcdHRhcmdldFBhcnQgPSBlbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGkgPSB0YXJnZXRQYXJ0LmluZGV4T2YoJ2lkJyk7XHJcblx0XHRcdFx0Y29uc3Qgcm9sZSA9IHRhcmdldFBhcnQuc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRjb25zdCBpZCA9IHRhcmdldFBhcnQuc2xpY2UoaSszKTtcclxuIFxyXG5cdFx0XHRcdHdlYml4LmFqYXgoKS5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGVjaycpLnRoZW4oXHJcblx0XHRcdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2Uucm9sZSAhPSByb2xlIHx8IHJlc3BvbnNlLmlkICE9IGlkKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhcHAucmVuZGVyKCk7XHJcblx0fSk7XHJcbn0iLCJmdW5jdGlvbiB0b2dnbGVFbGVtZW50IChjb25kaXRpb24sIGVsZW1lbnQpIHtcclxuXHRpZiAoY29uZGl0aW9uKSB7XHJcblx0XHRlbGVtZW50LnNob3coKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRlbGVtZW50LmhpZGUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEl0ZW0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSB7XHJcblx0TW9kZWwuYWRkSXRlbShkYXRhKS50aGVuKCgpID0+IHtcclxuXHRcdE1vZGVsLmdldERhdGFGcm9tU2VydmVyKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRzdWNjZXNzQWN0aW9uKGRhdGEpO1xyXG5cdFx0fSk7XHRcdFx0XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUl0ZW0gKE1vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKSB7XHJcblx0TW9kZWwudXBkYXRlSXRlbShkYXRhKS50aGVuKCgpID0+IHtcclxuXHRcdE1vZGVsLmdldERhdGFGcm9tU2VydmVyKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRzdWNjZXNzQWN0aW9uKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnREYXRlc0luQXJyYXkoanNvbk9iaikge1xyXG5cdGxldCBkYXRhQXJyID0ganNvbk9iai5qc29uKCk7XHJcblxyXG5cdGRhdGFBcnIgPSBkYXRhQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdGxldCBkYXRlID0gZWwueWVhck9mUHVibGljYXRpb247XHJcblx0XHRlbC55ZWFyT2ZQdWJsaWNhdGlvbiA9IGRhdGUgPyBuZXcgRGF0ZShkYXRlKSA6ICcnO1xyXG5cdFx0cmV0dXJuIGVsO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gZGF0YUFycjtcdFx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbWJpbmVVc2VyTmFtZXNJbkFycihqc29uT2JqKSB7XHJcblx0bGV0IHVzZXJzQXJyID0ganNvbk9iai5qc29uKCk7XHJcblxyXG5cdHVzZXJzQXJyID0gdXNlcnNBcnIubWFwKChlbCkgPT4ge1xyXG5cdFx0ZWxbJ2Z1bGxfbmFtZSddID0gZWwudXNlcl9uYW1lICsgJyAnICsgZWwudXNlcl9zdXJuYW1lO1xyXG5cdFx0cmV0dXJuIGVsO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gdXNlcnNBcnI7XHJcbn1cclxuXHJcbndlYml4LnByb3RvVUkoe1xyXG5cdG5hbWU6ICdhY3RpdmVMaXN0JyxcclxuXHRkZWZhdWx0czoge1xyXG5cdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHR0eXBlOiB7XHJcblx0XHRcdGhlaWdodDogMzBcclxuXHRcdH1cclxuXHR9XHJcbn0sIHdlYml4LnVpLmxpc3QpO1xyXG5cclxuZXhwb3J0IHt0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtLCBjb252ZXJ0RGF0ZXNJbkFycmF5LCBjb21iaW5lVXNlck5hbWVzSW5BcnJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZG1pblwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL3VzZXJGb3JtXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzXCIsXG5cdFwiLi9hZG1pbi91c2VyRm9ybS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qc1wiLFxuXHRcIi4vY29tbW9uL2xpYnJhcnlcIjogXCIuL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanNcIixcblx0XCIuL2NvbW1vbi9saWJyYXJ5LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW5cIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2Jvb2tDYXJkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2luZGV4LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9pbmRleC5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2xpYnJhcnlcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanNcIixcblx0XCIuL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9saWJyYXJ5LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vb3JkZXJzRm9ybVwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vb3JkZXJzRm9ybS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL29yZGVyc0Zvcm0uanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL29yZGVyc0Zvcm0uanNcIixcblx0XCIuL2xpYnJhcmlhbi91c2Vyc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vdXNlcnMuanNcIixcblx0XCIuL2xpYnJhcmlhbi91c2Vycy5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vdXNlcnMuanNcIixcblx0XCIuL2xvZ2luXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9sb2dpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9sb2dpbi5qc1wiLFxuXHRcIi4vcmVhZGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZFwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9ib29rQ2FyZC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvYm9va0NhcmQuanNcIixcblx0XCIuL3JlYWRlci9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanNcIixcblx0XCIuL3JlYWRlci9saWJyYXJ5XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9saWJyYXJ5LmpzXCIsXG5cdFwiLi9yZWFkZXIvbGlicmFyeS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qc1wiLFxuXHRcIi4vcmVhZGVyL21haW5cIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL21haW4uanNcIixcblx0XCIuL3JlYWRlci9tYWluLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzXCIsXG5cdFwiLi9yZWFkZXIvc2V0dGluZ3NcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzXCIsXG5cdFwiLi9yZWFkZXIvc2V0dGluZ3MuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzXCIsXG5cdFwiLi9yZWFkZXIvdG9wc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvdG9wcy5qc1wiLFxuXHRcIi4vcmVhZGVyL3RvcHMuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanNcIixcblx0XCIuL3JlZ2lzdGVyXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCIsXG5cdFwiLi9yZWdpc3Rlci5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvdmlld3Mgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSAnLi91c2VyRm9ybSc7XHJcbmltcG9ydCB7Y29tYmluZVVzZXJOYW1lc0luQXJyfSBmcm9tICcuLi8uLi9zY3JpcHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgXHJcblx0XHRcdHRlbXBsYXRlOiAnVXNlcnMgbGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICd1c2Vyc0xpc3QnLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZnVsbF9uYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JvbGVfbmFtZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSb2xlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncGhvbmVfbnVtYmVycycsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQaG9uZSBudW1iZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE1MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlbWFpbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFbWFpbCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWRpdCcsIFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsIFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLmVkaXRJY29uKCl9J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCd3eGktcGVuY2lsJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl91c2VyRm9ybS5zaG93V2luZG93KGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVXNlckJ0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQWRkIHVzZXInLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hZGRVc2VyKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHJvd3M6W1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHR0eXBlOiAnY2xlYW4nLFxyXG5cdFx0XHRcdFx0Y29sczogW2hlYWRlciwgbG9nb3V0XSBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGR0YWJsZSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHt9LCBhZGRVc2VyQnRuLCB7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dXNlcnNNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2Vyc0FyciA9IGNvbWJpbmVVc2VyTmFtZXNJbkFycihkYkRhdGEpO1xyXG5cdFx0XHR0aGlzLnVzZXJzRGF0YSA9IHVzZXJzQXJyO1xyXG5cdFx0XHQkJCgndXNlcnNMaXN0JykucGFyc2UodXNlcnNBcnIpO1xyXG5cdFx0fSk7XHRcdFxyXG5cclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdGNvbnN0IGZvcm1hdCA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKCclWS0lbS0lZCcpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KHtjdXJyZW50RGF0ZX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5fdXNlckZvcm0gPSB0aGlzLnVpKFVzZXJGb3JtKTtcclxuXHR9XHJcblxyXG5cdGFkZFVzZXIoKSB7XHJcblx0XHR0aGlzLl91c2VyRm9ybS5zaG93V2luZG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgY29tYmluZVVzZXJOYW1lc0luQXJyfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICd3aW5kb3cnLFxyXG5cdFx0XHRsb2NhbElkOiAndXNlcldpbmRvdycsXHJcblx0XHRcdGhlYWQ6ICdFZGl0IHVzZXInLFxyXG5cdFx0XHR3aWR0aDogNjAwLFxyXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ3VzZXJGb3JtJyxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2lkJywgbG9jYWxJZDogJ2lkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRmlyc3QgbmFtZScsIG5hbWU6ICd1c2VyX25hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0xhc3QgbmFtZScsIG5hbWU6ICd1c2VyX3N1cm5hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdSb2xlJywgbmFtZTogJ3JvbGVfaWQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgb3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAxLCB2YWx1ZTogJ3JlYWRlcid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAyLCB2YWx1ZTogJ2xhYnJhcmlhbid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e2lkOiAzLCB2YWx1ZTogJ2FkbWluJ31cclxuXHRcdFx0XHRcdFx0XHRdIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3BvcnQgSUQnLCBuYW1lOiAncGFzc3BvcnRfSUQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ2RhdGVwaWNrZXInLCBsYWJlbDogJ0JpcnRoIGRhdGUnLCBuYW1lOiAnYmlydGhfZGF0ZScsIGxvY2FsSWQ6ICdiaXJ0aF9kYXRlJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBZGRyZXNzJywgbmFtZTogJ2FkZHJlc3MnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bob25lJywgbmFtZTogJ3Bob25lX251bWJlcnMnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0VtYWlsJywgbmFtZTogJ2VtYWlsJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCcgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdhY2NvdW50X3Bhc3N3b3JkJywgbG9jYWxJZDogJ2luaXRpYWxfcGFzc3dvcmQnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdCdyb2xlX2lkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnZW1haWwnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdCdhY2NvdW50X3Bhc3N3b3JkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ1NhdmUnLCB0eXBlOiAnZm9ybScsIGxvY2FsSWQ6ICdzYXZlQnRuJywgd2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ0NhbmNlbCcsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtID0gdGhpcy4kJCgndXNlckZvcm0nKTtcclxuXHRcdHRoaXMud2luZG93ID0gdGhpcy4kJCgndXNlcldpbmRvdycpO1xyXG5cdH1cclxuXHJcblx0c3VjY2Vzc0FjdGlvbihuZXdEYXRhKSB7XHJcblx0XHR0aGlzLndlYml4Lm1lc3NhZ2UoJ1N1Y2Nlc3MnKTtcclxuXHRcdGNvbnN0IHVzZXJzQXJyID0gY29tYmluZVVzZXJOYW1lc0luQXJyKG5ld0RhdGEpO1xyXG5cdFx0JCQoJ3VzZXJzTGlzdCcpLnBhcnNlKHVzZXJzQXJyKTtcclxuXHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdH1cclxuXHJcblx0c2hvd1dpbmRvdyhpZCkge1xyXG5cdFx0dGhpcy5pc05ldyA9IGlkID8gZmFsc2UgOiB0cnVlO1x0XHJcblxyXG5cdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHR0aGlzLndpbmRvdy5nZXRIZWFkKCkuc2V0SFRNTCgnQWRkIHVzZXInKTtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR1c2Vyc01vZGVsLmdldEl0ZW0oaWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRcdGxldCB1c2VyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0XHR1c2VyID0gdGhpcy5jb252ZXJ0VXNlckJpdGhEYXRlKHVzZXIpO1xyXG5cdFx0XHRcdHRoaXMuZm9ybS5zZXRWYWx1ZXModXNlcik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluaXRpYWxQYXNzd29yZCA9IHRoaXMuJCQoJ2luaXRpYWxfcGFzc3dvcmQnKTtcclxuXHRcdHRvZ2dsZUVsZW1lbnQodGhpcy5pc05ldywgaW5pdGlhbFBhc3N3b3JkKTtcclxuXHRcdFxyXG5cclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHR9XHJcblxyXG5cdGNvbnZlcnRVc2VyQml0aERhdGUoZGF0YSkge1xyXG5cdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoJyVZLSVtLSVkJyk7XHJcblx0XHRkYXRhWydiaXJ0aF9kYXRlJ10gPSBmb3JtYXQobmV3IERhdGUoZGF0YS5iaXJ0aF9kYXRlKSk7XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZ2V0VmFsdWVzKCk7XHRcclxuXHRcdFxyXG5cdFx0aWYodGhpcy5mb3JtLnZhbGlkYXRlKCkpIHtcclxuXHRcdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHRcdGFkZEl0ZW0odXNlcnNNb2RlbCwgZGF0YSwgdGhpcy5zdWNjZXNzQWN0aW9uLmJpbmQodGhpcykpO1x0XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCB0aGlzLnN1Y2Nlc3NBY3Rpb24uYmluZCh0aGlzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5oaWRlKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5pbXBvcnQge2NvbnZlcnREYXRlc0luQXJyYXl9IGZyb20gJy4uLy4uL3NjcmlwdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbnN0cnVjdG9yKGFwcCwgbGlicmFyeUNvbmZpZywgYm9va0NhcmQpIHtcclxuXHRcdHN1cGVyKGFwcCk7XHJcblx0XHR0aGlzLmxpYnJhcnlDb25maWcgPSBsaWJyYXJ5Q29uZmlnO1xyXG5cdFx0dGhpcy5ib29rQ2FyZCA9IGJvb2tDYXJkO1xyXG5cdH1cclxuXHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOiAnaGVhZGVyJyxcclxuXHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1ib29rXCI+PC9pPiBMaXN0IG9mIGJvb2tzJyxcclxuXHRcdFx0Y3NzOiAnY2VudGVyIHBhZ2VfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBkdGFibGUgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ2R0TGlicmFyeScsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdib29rVGl0bGUnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ1RpdGxlJywge2NvbnRlbnQ6ICd0ZXh0RmlsdGVyJ31dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F1dGhvck5hbWUnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0F1dGhvcicsIHtjb250ZW50OiAndGV4dEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdnZW5yZXMnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydHZW5yZXMnLCB7Y29udGVudDogJ3NlbGVjdEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdjb3VudHJ5T2ZQdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ0NvdW50cnknLCB7Y29udGVudDogJ3NlbGVjdEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd5ZWFyT2ZQdWJsaWNhdGlvbicsXHJcblx0XHRcdFx0XHRzb3J0OiAnZGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cignJVknKSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydZZWFyJywge2NvbnRlbnQ6XCJkYXRlUmFuZ2VGaWx0ZXJcIn1dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2F2YWlsYWJsZUNvcGllcycsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQXZhaWxhYmxlJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdlYm9vaycsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnZUJvb2snLCB7Y29udGVudDpcInNlbGVjdEZpbHRlclwifV0sXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogKG9iaikgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqLmVib29rPT09J3llcycgPyAnPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+JyA6ICcnXHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd2aWV3Q29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1ZpZXcnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWRpdENvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdFZGl0JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyZW1vdmVDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUmVtb3ZlJyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPidcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtZXllJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoaWQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2ZhLWVkaXQnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2Jvb2tDYXJkLnNob3dQb3B1cChpZCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZmEtdHJhc2gnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQm9vayhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHNlYXJjaCA9IHtcclxuXHRcdFx0dmlldzogJ3NlYXJjaCcsXHJcblx0XHRcdGlkOiAnbGlicmFyeVNlYWNoJyxcclxuXHRcdFx0cGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxyXG5cdFx0XHRvbjoge1xyXG5cdFx0XHRcdG9uRW50ZXI6ICgpID0+IHRoaXMuc2VhcmNoKCksXHJcblx0XHRcdFx0b25TZWFyY2hJY29uQ2xpY2s6ICgpID0+IHRoaXMuc2VhcmNoKClcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbaGVhZGVyLCBzZWFyY2gsIGR0YWJsZV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRhc3luYyBpbml0KCkge1xyXG5cdFx0dGhpcy5ncmlkID0gJCQoJ2R0TGlicmFyeScpO1xyXG5cclxuXHRcdHN3aXRjaCAodGhpcy5saWJyYXJ5Q29uZmlnLnJvbGUpIHtcclxuXHRcdFx0Y2FzZSAncmVhZGVyJzogXHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygnZWRpdENvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygncmVtb3ZlQ29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbGlicmFyaWFuJzpcclxuXHRcdFx0XHR0aGlzLmdyaWQuZ2V0Q29sdW1uQ29uZmlnKCd2aWV3Q29sJykuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMuZ3JpZC5yZWZyZXNoQ29sdW1ucygpO1xyXG5cdFx0YXdhaXQgdGhpcy5nZXREYXRhKCk7XHJcblx0XHRhd2FpdCB0aGlzLmdldEZpbGVzKCk7XHJcblx0XHR0aGlzLmNoZWNrRmlsZXMoKTtcclxuXHRcdHRoaXMuZ3JpZC5wYXJzZSh0aGlzLmJvb2tzQXJyKTtcclxuXHRcdHRoaXMuX2Jvb2tDYXJkID0gdGhpcy51aSh0aGlzLmJvb2tDYXJkKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldERhdGEoKSB7XHRcdFxyXG5cdFx0Y29uc3QgdXNlcklkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0Y29uc3QgZGJEYXRhID0gYXdhaXQgYm9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcih1c2VySWQpO1xyXG5cdFx0dGhpcy5ib29rc0FyciA9IGNvbnZlcnREYXRlc0luQXJyYXkoZGJEYXRhKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGdldEZpbGVzKCkge1xyXG5cdFx0Y29uc3QgZGJEYXRhID0gYXdhaXQgZmlsZXNNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpO1xyXG5cdFx0dGhpcy5maWxlc0FyciA9IGRiRGF0YS5qc29uKCk7XHRcdFx0XHRcdFx0XHJcblx0fVxyXG5cclxuXHRjaGVja0ZpbGVzKCkge1xyXG5cdFx0dGhpcy5ib29rc0Fyci5mb3JFYWNoKChib29rLCBpKSA9PiB7XHJcblx0XHRcdGNvbnN0IGlzRmlsZXMgPSB0aGlzLmZpbGVzQXJyLmZpbmQoKGVsKSA9PiBlbC5ib29rSWQgPT09IGJvb2suaWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoaXNGaWxlcykge1xyXG5cdFx0XHRcdHRoaXMuYm9va3NBcnJbaV0uZWJvb2sgPSAneWVzJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmJvb2tzQXJyW2ldLmVib29rID0gJ25vJztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVCb29rKGlkKSB7XHJcblx0XHRib29rc01vZGVsLnJlbW92ZUl0ZW0oaWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmdyaWQucmVtb3ZlKGlkKTtcclxuXHRcdH0pO1x0XHRcclxuXHR9XHJcblxyXG5cdGFkZEJvb2soKSB7XHJcblx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoKTtcclxuXHR9XHJcblxyXG5cdHNlYXJjaCgpIHtcclxuXHRcdGNvbnN0IHNlYXJjaElucHV0ID0gJCQoJ2xpYnJhcnlTZWFjaCcpO1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dC5nZXRWYWx1ZSgpO1xyXG5cdFx0Ym9va3NNb2RlbC5zZWFyY2godmFsdWUpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHR0aGlzLmdyaWQuY2xlYXJBbGwoKTtcclxuXHRcdFx0dGhpcy5ncmlkLnBhcnNlKHJlcy5qc29uKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRzZWFyY2hJbnB1dC5zZXRWYWx1ZSgnJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQge0RVTU1ZQ09WRVJ9IGZyb20gJy4uLy4uL2NvbnN0cyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgY29udmVydERhdGVzSW5BcnJheX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0NhcmQgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0Y29uc3QgYm9va0NvdmVyID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NvdmVyJyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0aGVpZ2h0OiAxODAsXHJcblx0XHRcdGNzczogJ2Jvb2tfY292ZXInLFxyXG5cdFx0XHR0ZW1wbGF0ZTogKHVybCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pXCIgPjwvZGl2PmA7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYm9va0NhcmQgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ2FyZExpYnJhcmlhbicsXHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdUaXRsZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2Jvb2tUaXRsZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JOYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdHZW5yZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdnZW5yZXMnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHQnJywgJ0ZpY3Rpb24nLCAnRmFudGFzeScsICdUaHJpbGxlcicsICdIb3Jyb3InLCAnTXlzdGVyeScsICdIaXN0b3JpY2FsJywgJ1dlc3Rlcm5zJywgJ0ZhbWlseScsICdEYXJrIGNvbWVkeSdcclxuXHRcdFx0XHRdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeU9mUHVibGljYXRpb24nIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdIb3VzZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdmFpbGFibGUgY29waWVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXZhaWxhYmxlQ29waWVzJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1BhZ2VzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnbnVtYmVyT2ZQYWdlcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdZZWFyIG9mIHB1YmxpY2F0aW9uJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCB0eXBlOiAneWVhcicsIGZvcm1hdDogJyVZJywgbmFtZTogJ3llYXJPZlB1YmxpY2F0aW9uJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0NvdmVyIHBob3RvJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY292ZXJQaG90bycgfVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZFRleHRGaWxlID0ge1xyXG5cdFx0XHR2aWV3OiAndXBsb2FkZXInLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9pPiBVcGxvYWQgdGV4dCBmaWxlJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tGaWxlcycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0YXV0b3NlbmQ6IGZhbHNlLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRmb3JtRGF0YTogKCkgPT4gKHtcclxuXHRcdFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdGJvb2tJZDogdGhpcy5ib29rSWRcclxuXHRcdFx0fSksXHJcblx0XHRcdGFjY2VwdDogJ3RleHQvcGxhaW4sIGFwcGxpY2F0aW9uL3BkZiwgLmRvYywgLmRvY3gnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL3RleHQnLFxyXG5cdFx0XHRsaW5rOiAnZmlsZXNMaXN0J1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBmaWxlc0xpc3QgPSB7XHJcblx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0dHlwZTogJ3VwbG9hZGVyJyxcclxuXHRcdFx0aWQ6ICdmaWxlc0xpc3QnLFxyXG5cdFx0XHRhdXRvaGVpZ2h0OnRydWUsIFxyXG5cdFx0XHRib3JkZXJsZXNzOnRydWVcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQXVkaW9GaWxlID0ge1xyXG5cdFx0XHR2aWV3OiAndXBsb2FkZXInLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFzIGZhLW11c2ljXCI+PC9pPiBVcGxvYWQgYXVkaW8nLFxyXG5cdFx0XHRsb2NhbElkOiAnYXVkaW9GaWxlcycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0YXV0b3NlbmQ6IGZhbHNlLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRmb3JtRGF0YTogKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdFx0Ym9va0lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjY2VwdDogJy5tcDMnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL2F1ZGlvJyxcclxuXHRcdFx0bGluazogJ2F1ZGlvTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXVkaW9MaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnYXVkaW9MaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZVRleHRGaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlVGV4dEZpbGVzJyxcclxuXHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6ICcjbmFtZSMgPHNwYW4gY2xhc3M9XCJsaXN0X2J1dHRvblwiPjxpIGNsYXNzID0gXCJmYXMgZmEtdGltZXNcIj48L2k+PC9zcGFuPicsXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtdGltZXMnOiAoZXYsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUZpbGUodGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJyksIGlkKTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXZhaWxhYmxlQXVkaW9GaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlQXVkaW9GaWxlcycsXHJcblx0XHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRcdHRlbXBsYXRlOiAnI25hbWUjIDxzcGFuIGNsYXNzPVwibGlzdF9idXR0b25cIj48aSBjbGFzcyA9IFwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvc3Bhbj4nLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLXRpbWVzJzogKGV2LCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVGaWxlKHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKSwgaWQpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBzYXZlQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRsYWJlbDogJ1NhdmUnLFxyXG5cdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICdwb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0bWF4SGVpZ2h0OiA1NTAsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnc2Nyb2xsdmlldycsXHJcblx0XHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHRib29rQ292ZXIsIFxyXG5cdFx0XHRcdFx0XHRib29rQ2FyZCxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHZpZXc6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6ICdGaWxlcycsXHJcblx0XHRcdFx0XHRcdFx0YXV0b2hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtoZWlnaHQ6IDJ9LFxyXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVUZXh0RmlsZXMsXHJcblx0XHRcdFx0XHRcdGF2YWlsYWJsZUF1ZGlvRmlsZXMsXHJcblx0XHRcdFx0XHRcdGZpbGVzTGlzdCxcclxuXHRcdFx0XHRcdFx0YXVkaW9MaXN0LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxNX0sXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxJZDogJ2FkZGluZ0ZpbGVzQnV0dG9ucycsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbIHt9LCBhZGRUZXh0RmlsZSwgYWRkQXVkaW9GaWxlLCB7fSBdIFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAxfSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNvbHM6IFt7fSwgc2F2ZUJ0biwge31dXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCdib29rQ2FyZExpYnJhcmlhbicpO1xyXG5cdH1cclxuXHJcblx0c2hvd1BvcHVwKGlkKSB7XHJcblx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0dGhpcy5pc05ldyA9IGlkID8gZmFsc2UgOiB0cnVlO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBpZCB8fCAnJztcclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5nZXRQYXJhbSgnaWQnLCB0cnVlKTtcclxuXHJcblx0XHR0b2dnbGVFbGVtZW50KCF0aGlzLmlzTmV3LCB0aGlzLiQkKCdib29rQ292ZXInKSk7XHJcblx0XHR0b2dnbGVFbGVtZW50KCF0aGlzLmlzTmV3LCB0aGlzLiQkKCdhZGRpbmdGaWxlc0J1dHRvbnMnKSk7XHJcblxyXG5cdFx0aWYoIXRoaXMuaXNOZXcpIHtcclxuXHRcdFx0Ym9va3NNb2RlbC5nZXRCb29rKGlkKS50aGVuKChib29rRGF0YSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGJvb2sgPSBib29rRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGZpbGVzQXJyID0gYm9vay5maWxlcztcclxuXHRcdFx0XHRjb25zdCB0ZXh0RmlsZXMgPSBbXTtcclxuXHRcdFx0XHRjb25zdCBhdWRpb0ZpbGVzID0gW107XHJcblxyXG5cdFx0XHRcdGZpbGVzQXJyLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0XHRcdHN3aXRjaChmaWxlLmRhdGFUeXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHRcdHRleHRGaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdhdWRpbyc6XHJcblx0XHRcdFx0XHRcdFx0YXVkaW9GaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1xyXG5cdFx0XHRcdHRoaXMuJCQoJ2Jvb2tDb3ZlcicpLnNldFZhbHVlcyhib29rLmNvdmVyUGhvdG8gfHwgRFVNTVlDT1ZFUik7XHJcblx0XHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykucGFyc2UoYXVkaW9GaWxlcyk7XHJcblx0XHRcdH0pO1x0XHRcdFx0XHRcdFxyXG5cdFx0fVx0XHRcclxuXHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHRcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZm9ybS5nZXRWYWx1ZXMoKTtcclxuXHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gKG5ld0RhdGEpID0+IHtcclxuXHRcdFx0dGhpcy53ZWJpeC5tZXNzYWdlKCdTdWNjZXNzJyk7XHJcblx0XHRcdGNvbnN0IGJvb2tzQXJyID0gY29udmVydERhdGVzSW5BcnJheShuZXdEYXRhKTtcclxuXHRcdFx0JCQoJ2R0TGlicmFyeScpLnBhcnNlKGJvb2tzQXJyKTtcclxuXHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKGJvb2tzTW9kZWwsIGRhdGEsIHN1Y2Nlc3NBY3Rpb24pO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlSXRlbShib29rc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuc2VuZCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSl7XHJcblx0XHRcdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5zZW5kKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKXtcclxuXHRcdFx0XHRcdHRoaXMud2ViaXgubWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdHJlbW92ZUZpbGUodGFyZ2V0TGlzdCwgaWQpIHtcclxuXHRcdGZpbGVzTW9kZWwucmVtb3ZlSXRlbShpZCkudGhlbigoKSA9PiB7XHJcblx0XHRcdHRhcmdldExpc3QucmVtb3ZlKGlkKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aGlkZVdpbmRvdygpIHtcclxuXHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5oaWRlKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhckZvcm0gKCl7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXJWYWxpZGF0aW9uKCk7XHJcblx0XHR0aGlzLmZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMuJCQoJ2Jvb2tGaWxlcycpLmZpbGVzLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdWRpb0ZpbGVzJykuZmlsZXMuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCB0ZW1wbGF0ZTp0aGlzLmFwcC5jb25maWcubmFtZSwgY3NzOid3ZWJpeF9oZWFkZXIgYXBwX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbWVudSA9IHtcclxuXHRcdFx0dmlldzonbWVudScsIFxyXG5cdFx0XHRjc3M6J2FwcF9tZW51JyxcclxuXHRcdFx0d2lkdGg6MTgwLCBcclxuXHRcdFx0bGF5b3V0Oid5JywgXHJcblx0XHRcdHNlbGVjdDp0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ3ZWJpeF9pY29uICNpY29uI1wiPjwvc3Bhbj4gI3ZhbHVlIyAnLFxyXG5cdFx0XHR2YWx1ZTogJ21haW4nLFxyXG5cdFx0XHRkYXRhOltcclxuXHRcdFx0XHR7IHZhbHVlOidMaWJyYXJ5JywgaWQ6J2xpYnJhcnknLCAgaWNvbjonZmFzIGZhLWJvb2stcmVhZGVyJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1VzZXJzJywgaWQ6J3VzZXJzJywgIGljb246J2ZhcyBmYS1jb2cnIH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b246e1xyXG5cdFx0XHRcdG9uTWVudUl0ZW1DbGljazogKGlkKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VySWQgPSB0aGlzLmdldFBhcmFtKCdpZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5hcHAuc2hvdyhgbGlicmFyaWFuLmluZGV4P2lkPSR7dXNlcklkfS9saWJyYXJpYW4uJHtpZH1gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHR5cGU6J2NsZWFuJywgcGFkZGluZ1g6NSwgY3NzOidhcHBfbGF5b3V0JywgXHJcblx0XHRcdGNvbHM6W1xyXG5cdFx0XHRcdHsgcGFkZGluZ1g6NSwgcGFkZGluZ1k6MTAsIHJvd3M6IFsge2Nzczond2ViaXhfc2hhZG93X21lZGl1bScsIHJvd3M6W2hlYWRlciwgbWVudSwgbG9nb3V0XX0gXX0sXHJcblx0XHRcdFx0eyB2aWV3OiAncmVzaXplcicsIHdpZHRoOiA1IH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dHlwZTogJ3dpZGUnLCBwYWRkaW5nWTogMTAsIHBhZGRpbmdYOiA1LCByb3dzOiBbXHJcblx0XHRcdFx0XHRcdHsgJHN1YnZpZXc6IHRydWUgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KHtjdXJyZW50RGF0ZX0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBMaWJyYXJ5IGZyb20gJy4uL2NvbW1vbi9saWJyYXJ5JztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJy4vYm9va0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGliTGlicmFyeSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcdFxyXG5cclxuXHRcdGNvbnN0IGxpYnJhcnlDb25maWcgPSB7XHJcblx0XHRcdHJvbGU6ICdsaWJyYXJpYW4nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZEJvb2tCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCBib29rJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdGxpYnJhcnkuYWRkQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpYnJhcnkgPSBuZXcgTGlicmFyeSh0aGlzLmFwcCwgbGlicmFyeUNvbmZpZywgQm9va0NhcmQpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0bGlicmFyeSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbe30sYWRkQm9va0J0bix7fV1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IG9yZGVyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9vcmRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJzRm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICd3aW5kb3cnLFxyXG5cdFx0XHRsb2NhbElkOiAndXNlck9yZGVyc1dpbmRvdycsXHJcblx0XHRcdHdpZHRoOiA2MDAsXHJcblx0XHRcdGhlYWQ6ICdPcmRlcmVkIGJvb2tzJyxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRtb3ZlOiB0cnVlLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0dmlldzogJ2Zvcm0nLFx0XHJcblx0XHRcdFx0cGFkZGluZzogMCxcdFx0XHRcclxuXHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAndGVtcGxhdGUnLFxyXG5cdFx0XHRcdFx0XHRsb2NhbElkOiAndXNlck5hbWUnLFxyXG5cdFx0XHRcdFx0XHRjc3M6ICdwYWdlX2hlYWRlciBjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ1LFxyXG5cdFx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnbXVsdGljb21ibycsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICdvcmRlcnNMaXN0JyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ29yZGVyc0xpc3QnLFxyXG5cdFx0XHRcdFx0XHRzdWdnZXN0OiBbXVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ1NhdmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0NhbmNlbCcsXHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLiQkKCd1c2VyT3JkZXJzV2luZG93JykuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0c2hvd1BvcHVwKGlkLCB1c2VyTmFtZSkge1xyXG5cdFx0dGhpcy51c2VySWQgPSBpZC5yb3c7XHJcblx0XHR0aGlzLnBvcHVwID0gdGhpcy4kJCgndXNlck9yZGVyc1dpbmRvdycpO1xyXG5cdFx0dGhpcy5vcmRlcnNMaXN0ID0gdGhpcy4kJCgnb3JkZXJzTGlzdCcpO1xyXG5cdFx0dGhpcy4kJCgndXNlck5hbWUnKS5zZXRIVE1MKHVzZXJOYW1lKTtcclxuXHJcblx0XHRvcmRlcnNNb2RlbC5nZXRJdGVtcyh0aGlzLnVzZXJJZCkudGhlbigocmVzdWx0cykgPT4ge1xyXG5cdFx0XHRjb25zdCBvcmRlcnMgPSByZXN1bHRzLmpzb24oKTtcclxuXHRcdFx0dGhpcy5pbmNvbWluZ09yZGVycyA9IFsuLi5vcmRlcnNdO1xyXG5cclxuXHRcdFx0b3JkZXJzLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwudmFsdWUgPSBgJHtlbC5ib29rLmJvb2tUaXRsZX0gLSAke2VsLmJvb2suYXV0aG9yTmFtZX1gO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMub3JkZXJzTGlzdC5kZWZpbmUoJ3N1Z2dlc3QnLCBvcmRlcnMpO1xyXG5cdFx0XHR0aGlzLm9yZGVyc0xpc3Quc2V0VmFsdWUob3JkZXJzKTtcclxuXHRcdFx0dGhpcy5vcmRlcnNMaXN0LnJlZnJlc2goKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLm9yZGVyc0xpc3QuZ2V0VmFsdWUoKTtcclxuXHRcdGNvbnN0IG91dGNvbWluZ09yZGVycyA9IHZhbHVlcy5zcGxpdCgnLCcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmluY29taW5nT3JkZXJzLmxlbmd0aCAhPT0gb3V0Y29taW5nT3JkZXJzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBvcmRlcnNUb1JlbW92ZSA9IFtdO1xyXG5cclxuXHRcdFx0dGhpcy5pbmNvbWluZ09yZGVycy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdGlmKG91dGNvbWluZ09yZGVycy5pbmRleE9mKGVsLmlkKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdG9yZGVyc1RvUmVtb3ZlLnB1c2goZWwuaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRvcmRlcnNNb2RlbC5yZW1vdmVVc2VyT3JkZXJzKG9yZGVyc1RvUmVtb3ZlLCB0aGlzLnVzZXJJZCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuJCQoJ3VzZXJPcmRlcnNXaW5kb3cnKS5oaWRlKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB1c2Vyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy91c2Vycyc7XHJcbmltcG9ydCBPcmRlcnNGb3JtIGZyb20gJy4vb3JkZXJzRm9ybSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2Vyc1ZpZXcgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRjb25zdCBkdGFibGUgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ3VzZXJzTGlzdExpYnJhcmlhbicsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdmdWxsX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ05hbWUnLCB7Y29udGVudDogJ3RleHRGaWx0ZXInfV0sXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTgwLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLjVcclxuXHRcdFx0XHR9LFx0XHRcdFx0XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdvcmRlcnMnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnT3JkZXJzJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtZm9sZGVyLW9wZW5cIj48L2k+J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS1mb2xkZXItb3Blbic6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93VXNlck9yZGVycyhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0ZHRhYmxlXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dXNlcnNNb2RlbC5nZXRSZWFkZXJzKCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGxldCB1c2Vyc0FyciA9IGRiRGF0YS5qc29uKCk7XHJcblx0XHRcdHVzZXJzQXJyID0gdXNlcnNBcnIubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLmZ1bGxfbmFtZSA9IGVsLnVzZXJfbmFtZSArICcgJyArIGVsLnVzZXJfc3VybmFtZTtcdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMudXNlcnNEYXRhID0gdXNlcnNBcnI7XHJcblx0XHRcdCQkKCd1c2Vyc0xpc3RMaWJyYXJpYW4nKS5wYXJzZSh1c2Vyc0Fycik7XHJcblx0XHR9KTtcdFx0XHJcblxyXG5cdFx0dGhpcy5lZGl0T3JkZXJzID0gdGhpcy51aShPcmRlcnNGb3JtKTtcclxuXHR9XHJcblxyXG5cdHNob3dVc2VyT3JkZXJzKGlkKSB7XHJcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW0gPSAkJCgndXNlcnNMaXN0TGlicmFyaWFuJykuZ2V0SXRlbShpZCk7XHJcblx0XHRjb25zdCB1c2VyTmFtZSA9IGAke3NlbGVjdGVkSXRlbS51c2VyX25hbWV9ICR7c2VsZWN0ZWRJdGVtLnVzZXJfc3VybmFtZX1gO1xyXG5cdFx0dGhpcy5lZGl0T3JkZXJzLnNob3dQb3B1cChpZCwgdXNlck5hbWUpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luRm9ybSA9IHtcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRsb2NhbElkOiAnbG9naW5Gb3JtJyxcclxuXHRcdFx0d2lkdGg6IDMwMCxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdVc2VybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ2xvZ2luQnRuJywgdmFsdWU6ICdMb2dpbicsIHR5cGU6ICdmb3JtJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ0NhbmNlbCcgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaW5rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdDcmVhdGUgYW4gYWNjb3VudCcsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaG93KCcvcmVnaXN0ZXInKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcdFxyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0bG9naW5Gb3JtLFxyXG5cdFx0XHRcdFx0XHRsaW5rLFxyXG5cdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e31cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLiQkKCdsb2dpbkJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy4kJCgnbG9naW5Gb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dpbih2YWx1ZXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHRcclxuXHRcdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuanNvbigpLnVzZXI7XHJcblx0XHRcdFx0XHRjb25zdCBpZCA9IHVzZXJEYXRhLmlkO1xyXG5cclxuXHRcdFx0XHRcdHN3aXRjaCAodXNlckRhdGEucm9sZV9uYW1lKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2FkbWluJzogXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93KGBhZG1pbi5pbmRleD9pZD0ke2lkfWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdsaWJyYXJpYW4nOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYGxpYnJhcmlhbi5pbmRleD9pZD0ke2lkfS9saWJyYXJpYW4ubGlicmFyeWApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdyZWFkZXInOiBcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3coYHJlYWRlci5pbmRleD9pZD0ke2lkfS9yZWFkZXIubWFpbmApO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgbGlrZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvbGlrZXMnO1xyXG5pbXBvcnQge3RvZ2dsZUVsZW1lbnR9IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuaW1wb3J0IHtEVU1NWUNPVkVSfSBmcm9tICcuLi8uLi9jb25zdHMnOyBcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuaW1wb3J0IG9yZGVyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9vcmRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0NhcmQgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0Y29uc3QgYm9va0NvdmVyID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NvdmVyJyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0aGVpZ2h0OiAxODAsXHJcblx0XHRcdGNzczogJ2Jvb2tfY292ZXInLFxyXG5cdFx0XHR0ZW1wbGF0ZTogKHVybCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pXCIgPjwvZGl2PmA7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYm9va0NhcmQgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ2FyZFJlYWRlcicsXHRcdFx0XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdUaXRsZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2Jvb2tUaXRsZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQXV0aG9yJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXV0aG9yTmFtZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeU9mUHVibGljYXRpb24nLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1B1Ymxpc2hpbmcgaG91c2UnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdwdWJsaXNoaW5nSG91c2UnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVDb3BpZXMnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1BhZ2VzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnbnVtYmVyT2ZQYWdlcycsIHJlYWRvbmx5OiB0cnVlIH1cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiAnI25hbWUjPHNwYW4gY2xhc3M9XCJsaXN0X2J1dHRvblwiPjxpIGNsYXNzID0gXCJmYXMgZmEtZG93bmxvYWRcIj48L2k+PC9zcGFuPicsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYm9va05hbWUgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5nZXRJdGVtKGlkKS5uYW1lO1xyXG5cclxuXHRcdFx0XHRcdGZpbGVzTW9kZWwuZG93bmxvYWRJdGVtKGlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2ViaXguaHRtbC5kb3dubG9hZChyZXMsIGJvb2tOYW1lKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiAnYWN0aXZlTGlzdCcsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdmFpbGFibGVBdWRpb0ZpbGVzJyxcclxuXHRcdFx0dHlwZTp7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZW1wbGF0ZTogXCIjbmFtZSM8YXVkaW8gY29udHJvbHMgc3JjPSdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXVkaW8vI2lkIyc+PC9hdWRpbz5cIlxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBvcmRlckJvb2sgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnb3JkZXJCb29rJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFyIGZhLWhhbmQtcGFwZXJcIj48L2k+IE9yZGVyJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5vcmRlckJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBkb3dubG9hZEJvb2sgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnZG93bmxvYWRCb29rJyxcclxuXHRcdFx0dHlwZTogJ2ljb24nLFxyXG5cdFx0XHRpY29uOiAnZmFzIGZhLWRvd25sb2FkJyxcclxuXHRcdFx0d2lkdGg6IDYwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLm9yZGVyQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpa2VCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2xpa2VCdXR0b24nLFxyXG5cdFx0XHRjc3M6ICdsaWtlX2J1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdpY29uJywgXHJcblx0XHRcdGljb246ICdmYXIgZmEtaGVhcnQnLFxyXG5cdFx0XHR3aWR0aDogNDUsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMubGlrZUJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAncG9wdXAnLFxyXG5cdFx0XHRwb3NpdGlvbjonY2VudGVyJyxcclxuXHRcdFx0bWF4SGVpZ2h0OiA1NTAsXHJcblx0XHRcdGJvZHk6e1xyXG5cdFx0XHRcdHZpZXc6ICdzY3JvbGx2aWV3JyxcclxuXHRcdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdGJvb2tDb3ZlciwgYm9va0NhcmQsIGF2YWlsYWJsZVRleHRGaWxlcywgYXZhaWxhYmxlQXVkaW9GaWxlcyxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWDogMTUsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRvcmRlckJvb2ssIGRvd25sb2FkQm9vaywge30sIGxpa2VCb29rXHJcblx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0XHJcblx0c2hvd1BvcHVwKGlkKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24gPSB0aGlzLiQkKCdsaWtlQnV0dG9uJyk7XHJcblx0XHR0aGlzLmZvcm0gPSB0aGlzLiQkKCdib29rQ2FyZFJlYWRlcicpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKTtcclxuXHRcdHRoaXMub3JkZXJCdG4gPSB0aGlzLiQkKCdvcmRlckJvb2snKTtcclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5nZXRQYXJhbSgnaWQnLCB0cnVlKTtcclxuXHJcblx0XHRib29rc01vZGVsLmdldEJvb2soaWQpLnRoZW4oKGJvb2tEYXRhKSA9PiB7XHJcblx0XHRcdGNvbnN0IGJvb2sgPSBib29rRGF0YS5qc29uKCk7XHJcblxyXG5cdFx0XHR0aGlzLmJvb2sgPSBib29rO1xyXG5cdFx0XHR0aGlzLmJvb2tJZCA9IGJvb2suaWQ7XHJcblxyXG5cdFx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcdFx0XHRcclxuXHRcdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJQaG90byB8fCBEVU1NWUNPVkVSKTtcclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJQaG90byB8fCBEVU1NWUNPVkVSKTtcclxuXHRcdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnYmFkZ2UnLCBib29rLmNvdW50X2xpa2VzIHx8ICcwJyk7XHJcblxyXG5cdFx0XHRjb25zdCBmaWxlc0FyciA9IGJvb2suZmlsZXM7XHJcblx0XHRcdGNvbnN0IHRleHRGaWxlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhdWRpb0ZpbGVzID0gW107XHJcblxyXG5cdFx0XHRmaWxlc0Fyci5mb3JFYWNoKChmaWxlKSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoKGZpbGUuZGF0YVR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOiBcclxuXHRcdFx0XHRcdFx0dGV4dEZpbGVzLnB1c2goZmlsZSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnYXVkaW8nOiBcclxuXHRcdFx0XHRcdFx0YXVkaW9GaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5wYXJzZSh0ZXh0RmlsZXMpO1xyXG5cdFx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykucGFyc2UoYXVkaW9GaWxlcyk7XHJcblxyXG5cdFx0XHR0b2dnbGVFbGVtZW50KHRleHRGaWxlcy5sZW5ndGgsIHRoaXMuJCQoJ2Rvd25sb2FkQm9vaycpKTtcclxuXHRcdFx0dG9nZ2xlRWxlbWVudChib29rLmF2YWlsYWJsZUNvcGllcywgdGhpcy4kJCgnb3JkZXJCb29rJykpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50b2dnbGVMaWtlKGJvb2sudXNlcklkID09IHRoaXMudXNlcklkKTtcclxuXHRcdFx0dGhpcy50b2dnbGVPcmRlcihib29rLm9yZGVyRGF0ZSk7XHJcblx0XHJcblx0XHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b3JkZXJCb29rKCkge1xyXG5cdFx0Y29uc3Qgb3JkZXIgPSB7XHJcblx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXHJcblx0XHRcdGJvb2tJZDogdGhpcy5ib29rSWQsXHJcblx0XHRcdG9yZGVyRGF0ZTogbmV3IERhdGUoKVxyXG5cdFx0fTtcclxuXHJcblx0XHRvcmRlcnNNb2RlbC5hZGRJdGVtKG9yZGVyKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRPcmRlcmVkVmFsKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnT3JkZXJlZCcpOyBcclxuXHRcdHRoaXMub3JkZXJCdG4ucmVmcmVzaCgpO1xyXG5cdFx0dGhpcy5vcmRlckJ0bi5kaXNhYmxlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnPGkgY2xhc3M9XCJmYXIgZmEtaGFuZC1wYXBlclwiPjwvaT4gT3JkZXInKTsgIFxyXG5cdFx0dGhpcy5vcmRlckJ0bi5yZWZyZXNoKCk7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlT3JkZXIob3JkZXJlZCkge1xyXG5cdFx0aWYob3JkZXJlZCkge1xyXG5cdFx0XHR0aGlzLnNldE9yZGVyZWRWYWwoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0T3JkZXJlZFZhbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGlrZUJvb2soKSB7XHJcblx0XHRpZih0aGlzLmJvb2sudXNlcklkID09IHRoaXMudXNlcklkKSB7XHJcblx0XHRcdGxpa2VzTW9kZWwucmVtb3ZlTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxpa2VzTW9kZWwuYWRkTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFxyXG5cdH1cdFxyXG5cclxuXHR0b2dnbGVMaWtlKGNvbmRpdGlvbikge1xyXG5cdFx0aWYoY29uZGl0aW9uKSB7XHJcblx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXMgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldExpa2UoKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdpY29uJywgJ2ZhciBmYS1oZWFydCcpO1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSgpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCB0ZW1wbGF0ZTp0aGlzLmFwcC5jb25maWcubmFtZSwgY3NzOid3ZWJpeF9oZWFkZXIgYXBwX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbWVudSA9IHtcclxuXHRcdFx0dmlldzonbWVudScsIFxyXG5cdFx0XHRjc3M6J2FwcF9tZW51JyxcclxuXHRcdFx0d2lkdGg6MTgwLCBsYXlvdXQ6J3knLCBzZWxlY3Q6dHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwid2ViaXhfaWNvbiAjaWNvbiNcIj48L3NwYW4+ICN2YWx1ZSMgJyxcclxuXHRcdFx0dmFsdWU6ICdtYWluJyxcclxuXHRcdFx0ZGF0YTpbXHJcblx0XHRcdFx0eyB2YWx1ZTonTXkgYm9va3MnLCBpZDonbWFpbicsIGljb246J2ZhcyBmYS1ib29rbWFyaycgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidMaWJyYXJ5JywgaWQ6J2xpYnJhcnknLCAgaWNvbjonZmFzIGZhLWJvb2stcmVhZGVyJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1RvcHMnLCBpZDondG9wcycsICBpY29uOidmYXMgZmEtbGlzdCcgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidTZXR0aW5ncycsIGlkOidzZXR0aW5ncycsICBpY29uOidmYXMgZmEtY29nJyB9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbjp7XHJcblx0XHRcdFx0b25NZW51SXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYHJlYWRlci5pbmRleD9pZD0ke3VzZXJJZH0vcmVhZGVyLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoJyVZLSVtLSVkJyk7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vY29tbW9uL2xpYnJhcnknO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi9ib29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkZXJMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgbGlicmFyeUNvbmZpZyA9IHtcclxuXHRcdFx0cm9sZTogJ3JlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdG5ldyBMaWJyYXJ5KHRoaXMuYXBwLCBsaWJyYXJ5Q29uZmlnLCBCb29rQ2FyZClcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IG9yZGVyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9vcmRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IHRlc3RSZXN1bHRzID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyc0xpc3QnLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHRcdFx0XHRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tUaXRsZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdCb29rJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JOYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0F1dGhvcicsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtdHJhc2gnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlQm9vayhpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnYWRkR3JvdXAnLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCcsXHJcblx0XHRcdHR5cGU6J2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0cm93czogW3Rlc3RSZXN1bHRzLCBidXR0b25dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9IHRoaXMuJCQoJ29yZGVyc0xpc3QnKTtcclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5nZXRQYXJhbShcImlkXCIsIHRydWUpO1xyXG5cdFx0dGhpcy5wYXJzZUJvb2tzKCk7XHRcdFxyXG5cdH1cclxuXHJcblx0YXN5bmMgcGFyc2VCb29rcygpIHtcclxuXHRcdGF3YWl0IG9yZGVyc01vZGVsLmdldEl0ZW1zKHRoaXMudXNlcklkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3Qgb3JkZXJzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHJcblx0XHRcdG9yZGVyc0Fyci5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLmJvb2tUaXRsZSA9IGVsLmJvb2suYm9va1RpdGxlO1xyXG5cdFx0XHRcdGVsLmF1dGhvck5hbWUgPSBlbC5ib29rLmF1dGhvck5hbWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5ncmlkLmNsZWFyQWxsKCk7XHJcblx0XHRcdHRoaXMuJCQoJ29yZGVyc0xpc3QnKS5wYXJzZShvcmRlcnNBcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW1vdmVCb29rKGlkKSB7XHJcblx0XHRhd2FpdCBvcmRlcnNNb2RlbC5yZW1vdmVJdGVtKGlkKTtcclxuXHRcdGF3YWl0IHRoaXMucGFyc2VCb29rcygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQge3VwZGF0ZUl0ZW19IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnc2F2ZUNoYW5nZXMnLFxyXG5cdFx0XHR2YWx1ZTogJ1NhdmUnLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdGlucHV0V2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdXNlckRhdGEgPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJEYXRhRm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICd1c2VyX2lkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRmlyc3QgbmFtZScsbmFtZTogJ3VzZXJfbmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdMYXN0IG5hbWUnLG5hbWU6ICd1c2VyX3N1cm5hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3BvcnQgSUQnLG5hbWU6ICdwYXNzcG9ydF9JRCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdCaXJ0aCBkYXRlJyxuYW1lOiAnYmlydGhfZGF0ZScsIGxvY2FsSWQ6ICdiaXJ0aF9kYXRlJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0FkZHJlc3MnLG5hbWU6ICdhZGRyZXNzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bob25lJyxuYW1lOiAncGhvbmVfbnVtYmVycycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdFbWFpbCcsbmFtZTogJ2VtYWlsJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdGJ1dHRvblxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFt1c2VyRGF0YV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgaWQgPSB0aGlzLmdldFBhcmFtKCdpZCcsIHRydWUpO1xyXG5cclxuXHRcdHVzZXJzTW9kZWwuZ2V0SXRlbShpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VyRGF0YSA9IGRhdGEuanNvbigpWzBdO1xyXG5cdFx0XHR1c2VyRGF0YS5iaXJ0aERhdGUgPSBuZXcgRGF0ZSAodXNlckRhdGEuYmlydGhEYXRlKTtcclxuXHRcdFx0dGhpcy4kJCgndXNlckRhdGFGb3JtJykuc2V0VmFsdWVzKHVzZXJEYXRhKTtcclxuXHRcdH0pO1x0XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSAoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy4kJCgndXNlckRhdGFGb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gdGhpcy53ZWJpeC5tZXNzYWdlKCdOZXcgZGF0YSBzYXZlZCcpO1xyXG5cdFx0dXBkYXRlSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9va1RvcHMgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiAyNTAsXHJcblx0XHRcdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdFx0XHRkYXRhOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dPbGRlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdPbGRlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dOZXdlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdOZXdlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dNb3N0UGFnZXNCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdNb3N0IHBhZ2VzIGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93Qm9va3NXaXRoTG9uZ05hbWVzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2tzIHdpdGggbG9uZ2VzdCBuYW1lcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0F1dGhvcnMgd2l0aCBtb3N0IGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaChpZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd09sZGVzdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93T2xkZXN0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93TmV3ZXN0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dOZXdlc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dNb3N0UGFnZXNCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vc3RQYWdlc0Jvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd0Jvb2tzV2l0aExvbmdOYW1lcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dBdXRob3JzV2l0aE1vc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdib29rc1RvcCcsXHJcblx0XHRcdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSAkJCgnYm9va3NUb3AnKTtcclxuXHRcdGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IGJvb2tzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0Ym9va3NBcnIgPSBib29rc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwueWVhcl9vZl9wdWJsaWNhdGlvbiA9IG5ldyBEYXRlKGVsLnllYXJfb2ZfcHVibGljYXRpb24pO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYm9va3NBcnIgPSBib29rc0FycjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGVmYXVsdENvbmZpZyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYm9va190aXRsZScsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRoZWFkZXI6ICdUaXRsZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYXV0aG9yX25hbWUnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0aGVhZGVyOiAnQXV0aG9yJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdnZW5yZXMnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdHZW5yZXMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdDb3VudHJ5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICd5ZWFyX29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRzb3J0OiAnZGF0ZScsXHJcblx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZXCIpLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1llYXInXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ251bWJlcl9vZl9wYWdlcycsXHJcblx0XHRcdFx0aGVhZGVyOiAnUGFnZXMnLFxyXG5cdFx0XHRcdHdpZHRoOiA2MFxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0c2hvd09sZGVzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0cmV0dXJuIGEueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGIueWVhcl9vZl9wdWJsaWNhdGlvbjtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd05ld2VzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IGIueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGEueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9zdFBhZ2VzQm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gIGIubnVtYmVyX29mX3BhZ2VzIC0gYS5udW1iZXJfb2ZfcGFnZXMpO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiBiLmJvb2tfdGl0bGUubGVuZ3RoIC0gYS5ib29rX3RpdGxlLmxlbmd0aCk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MoKSB7XHJcblx0XHRsZXQgYXV0aG9ycyA9IFtdO1xyXG5cdFx0dGhpcy5ib29rc0Fyci5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IGF1dGhvcnMuZmluZEluZGV4KGF1dGhvciA9PiBhdXRob3IubmFtZSA9PSBlbC5hdXRob3JfbmFtZSk7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRhdXRob3JzLnB1c2goe25hbWU6IGVsLmF1dGhvcl9uYW1lLCBib29rc0NvdW50OiAxfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YXV0aG9yc1tpbmRleF0uYm9va3NDb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhdXRob3JzID0gYXV0aG9ycy5zb3J0KChhLCBiKSA9PiBiLmJvb2tzQ291bnQgLSBhLmJvb2tzQ291bnQpO1xyXG5cclxuXHRcdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ25hbWUnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdib29rc0NvdW50JyxcclxuXHRcdFx0XHRoZWFkZXI6ICdCb29rcyBjb3VudCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGF1dGhvcnMsIGNvbHVtbnMpO1xyXG5cdH1cclxuXHJcblx0c2hvd1Jlc3VsdHMoZGF0YSwgY29sdW1ucykge1xyXG5cdFx0dGhpcy5ncmlkLmRlZmluZSgnY29sdW1ucycsIGNvbHVtbnMpO1xyXG5cdFx0dGhpcy5ncmlkLnJlZnJlc2hDb2x1bW5zKCk7XHJcblx0XHRkYXRhID0gZGF0YS5zbGljZSgwLCAxMCk7XHJcblx0XHR0aGlzLmdyaWQuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuZ3JpZC5wYXJzZShkYXRhKTtcclxuXHRcdHRoaXMuZ3JpZC5zaG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJGb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdyZWdpc3RlckZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Vlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdyZWdpc3RlckJ0bicsIHZhbHVlOiAnUmVnaXN0ZXInLCB0eXBlOiAnZm9ybSdcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRm9ybSxcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ3JlZ2lzdGVyQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdyZWdpc3RlckZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLnJlZ2lzdGVyKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gcmVzcG9uc2UuanNvbigpLmlkO1xyXG5cdFx0XHRcdGlmIChzdGF0dXMgPT09IDIpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7aWR9L3JlYWRlci5tYWluYCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYocmVzcG9uc2UuanNvbigpLnJlYXNvbiA9PT0gJ3VzZXJFeGlzdCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UuanNvbigpLmRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9