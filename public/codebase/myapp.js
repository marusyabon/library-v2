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
		return webix.ajax().del(this._url, id);
	};

	return BooksModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new BooksModel());

/***/ }),

/***/ "./sources/models/comments.js":
/*!************************************!*\
  !*** ./sources/models/comments.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./sources/consts.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CommentsModel = function () {
	function CommentsModel() {
		_classCallCheck(this, CommentsModel);

		this._url = _consts__WEBPACK_IMPORTED_MODULE_0__["URL"] + '/comments/';
	}

	CommentsModel.prototype.getItems = function getItems(id) {
		return webix.ajax().get('' + this._url + id);
	};

	CommentsModel.prototype.addItem = function addItem(data) {
		return webix.ajax().post(this._url, data);
	};

	CommentsModel.prototype.updateItem = function updateItem(data) {
		return webix.ajax().put(this._url, data);
	};

	return CommentsModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (new CommentsModel());

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

	OrdersModel.prototype.getItems = function getItems(id) {
		return webix.ajax().get('' + this._url + id);
	};

	OrdersModel.prototype.getIdList = function getIdList(id) {
		return webix.ajax().get('' + this._url + id + '/ids');
	};

	OrdersModel.prototype.addOrder = function addOrder(order) {
		return webix.ajax().post(this._url, order);
	};

	OrdersModel.prototype.updateUserOrders = function updateUserOrders(ordersArr, userId) {
		webix.ajax().put(this._url, { orders: ordersArr, userId: userId });
	};

	OrdersModel.prototype.removeItem = function removeItem(id) {
		return webix.ajax().del(this._url, id);
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
/*! exports provided: toggleElement, addItem, updateItem, formatDate, convertDatesInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleElement", function() { return toggleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDatesInArray", function() { return convertDatesInArray; });
var toggleElement = function toggleElement(condition, element) {
	if (condition) {
		element.show();
	} else {
		element.hide();
	}
};

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

function formatDate(dbDate) {
	var currentYear = new Date().getFullYear();
	var currentMonth = new Date().getMonth();
	var currentDay = new Date().getDate();
	var currentHours = new Date().getHours();
	var currentDateTime = new Date();

	var commentsYear = new Date(dbDate).getFullYear();
	var commentsMonth = new Date(dbDate).getMonth();
	var commentsDay = new Date(dbDate).getDate();
	var commentsHours = new Date(dbDate).getHours();
	var commentsDateTime = new Date(dbDate);

	var formatDate = webix.Date.strToDate('%i:%s');

	if (currentYear > commentsYear) {
		formatDate = webix.Date.dateToStr('%d-%m-%y');
	} else if (currentMonth > commentsMonth) {
		formatDate = webix.Date.dateToStr('%m-%d');
	} else if (currentDay > commentsDay) {
		formatDate = webix.Date.dateToStr('%D, %H:%i');
	} else if (currentHours > commentsHours) {
		formatDate = webix.Date.dateToStr('%H:%i');
	} else {
		var time = (currentDateTime - commentsDateTime) / 60000;
		return Math.round(time) + ' minute(s) ago';
	}

	return formatDate(new Date(dbDate));
}

function convertDatesInArray(arr) {
	var date = void 0;

	arr = arr.map(function (el) {
		date = el.yearOfPublication;
		el.yearOfPublication = date ? new Date(date) : '';
		return el;
	});

	return arr;
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
	"./reader/commentObj": "./sources/views/reader/commentObj.js",
	"./reader/commentObj.js": "./sources/views/reader/commentObj.js",
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
				minWidth: 180,
				fillspace: 1.5
			}, {
				id: 'role_name',
				header: 'Role',
				width: 90
			}, {
				id: 'passport_ID',
				header: 'Passport ID',
				width: 130
			}, {
				id: 'birth_date',
				header: 'Birth date',
				width: 130
			}, {
				id: 'address',
				header: 'Address',
				minWidth: 180,
				fillspace: 1.5
			}, {
				id: 'phone_numbers',
				header: 'Phone number',
				width: 190
			}, {
				id: 'email',
				header: 'Email',
				width: 180
			}, {
				id: 'edit',
				header: 'Edit',
				width: 50,
				template: '{common.editIcon()}'
			}],
			onClick: {
				'wxi-pencil': function wxiPencil(e, id) {
					_this2.editUser(id);
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
			var usersArr = dbData.json();
			usersArr = usersArr.map(function (el) {
				el.full_name = el.user_name + ' ' + el.user_surname;
				var format = webix.Date.dateToStr("%Y-%m-%d");
				el.birth_date = format(new Date(el.birth_date));
				return el;
			});
			_this3.usersData = usersArr;
			$$('usersList').parse(usersArr);
		});

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this3.app;
			var format = webix.Date.dateToStr("%Y-%m-%d");
			var currentDate = format(new Date());

			authorization.logout({ currentDate: currentDate }).then(function (response) {
				if (response) {
					app.show('/login');
				}
			});
		});

		this._userForm = this.ui(_userForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
	};

	TopView.prototype.editUser = function editUser(id) {
		var user = this.usersData.find(function (el) {
			return el.id == id;
		});
		this._userForm.showWindow(user);
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
					elements: [{ view: 'text', name: 'id', localId: 'id', hidden: true }, { view: 'text', label: 'First name', name: 'user_name', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Last name', name: 'user_surname', labelWidth: 90, labelAlign: 'right' }, { view: 'combo', label: 'Role', name: 'capabilities_id', labelWidth: 90, labelAlign: 'right', options: [{ id: 1, value: 'reader' }, { id: 2, value: 'labrarian' }, { id: 3, value: 'admin' }] }, { view: 'text', label: 'Passport ID', name: 'passport_ID', labelWidth: 90, labelAlign: 'right' }, { view: 'datepicker', label: 'Birth date', name: 'birth_date', localId: 'birth_date', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Address', name: 'address', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Phone', name: 'phone_numbers', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Email', name: 'email', labelWidth: 90, labelAlign: 'right' }, { view: 'text', label: 'Password', name: 'account_password', localId: 'initial_password', labelWidth: 90, labelAlign: 'right' }],
					rules: {
						'capabilities_id': webix.rules.isNotEmpty,
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

	UserForm.prototype.successAction = function successAction() {
		this.webix.message('Success');
		this.hideWindow();
	};

	UserForm.prototype.showWindow = function showWindow(user) {
		this.isNew = user ? false : true;

		if (this.isNew) {
			this.window.getHead().setHTML('Add user');
			this.window.getHead().refresh();
		} else {
			this.form.setValues(user);
		}

		var initial_password = this.$$('initial_password');
		Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(this.isNew, initial_password);

		this.getRoot().show();
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

		return {
			rows: [header, dtable]
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

							this.booksArr = Object(_scripts__WEBPACK_IMPORTED_MODULE_4__["convertDatesInArray"])(dbData.json());

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
				return el.book_id === book.id;
			});

			if (isFiles) {
				_this3.booksArr[i].ebook = 'yes';
			} else {
				_this3.booksArr[i].ebook = 'no';
			}
		});
	};

	// showBookCard(id) {
	// 	const book = this.booksArr.find(el => el.id == id);
	// 	this._bookCard.showPopup(book);
	// }

	Library.prototype.removeBook = function removeBook(id) {
		var _this4 = this;

		_models_books__WEBPACK_IMPORTED_MODULE_2__["default"].removeItem(id).then(function () {
			_this4.grid.remove(id);
		});
	};

	Library.prototype.addBook = function addBook() {
		this._bookCard.showPopup();
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
			template: '#name# <span class="list_button"><i class = "fas fa-times"></i></span>',
			on: {
				onItemClick: function onItemClick(id) {
					//remove file and record in DB
				}
			}
		};

		var availableAudioFiles = {
			view: 'activeList',
			localId: 'availableAudioFiles',
			template: '#name# <span class="list_button"><i class = "fas fa-times"></i></span>'
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

		_models_files__WEBPACK_IMPORTED_MODULE_4__["default"].getItems(this.bookId).then(function (dbData) {
			var filesArr = dbData.json();
			var textFiles = [];
			var audioFiles = [];

			filesArr.forEach(function (file) {
				switch (file.data_type) {
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
		});

		Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["toggleElement"])(!this.isNew, this.$$('bookCover'));
		Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["toggleElement"])(!this.isNew, this.$$('addingFilesButtons'));

		if (!this.isNew) {
			_models_books__WEBPACK_IMPORTED_MODULE_1__["default"].getBook(id).then(function (bookData) {
				var book = bookData.json()[0];
				_this3.form.setValues(book);
				_this3.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_2__["DUMMYCOVER"]);
			});
		}

		this.getRoot().show();
	};

	BookCard.prototype.saveForm = function saveForm() {
		var _this4 = this;

		var data = this.form.getValues();

		var successAction = function successAction(newData) {
			_this4.webix.message('Success');
			var booksArr = Object(_scripts__WEBPACK_IMPORTED_MODULE_3__["convertDatesInArray"])(newData.json());
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
/* harmony import */ var _models_books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/books */ "./sources/models/books.js");
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

		webix.promise.all([_models_orders__WEBPACK_IMPORTED_MODULE_1__["default"].getIdList(this.userId), _models_books__WEBPACK_IMPORTED_MODULE_2__["default"].getDataFromServer()]).then(function (results) {
			var orders = results[0].json();

			var books = results[1].json();
			_this3.allBooks = books;
			books = books.map(function (el) {
				el.value = el.author_name + ' - ' + el.book_title;
				return el;
			});
			_this3.ordersList.define('suggest', books);
			_this3.ordersList.setValue(orders);
			_this3.ordersList.refresh();
		});
		this.getRoot().show();
	};

	OrdersForm.prototype.saveForm = function saveForm() {
		var ordersListValue = this.ordersList.getValue();
		_models_orders__WEBPACK_IMPORTED_MODULE_1__["default"].updateUserOrders(ordersListValue, this.userId);
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
/* harmony import */ var _commentObj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commentObj */ "./sources/views/reader/commentObj.js");
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

		var toggleCommentsBtn = {
			view: 'button',
			localId: 'commentButton',
			type: 'htmlbutton',
			label: 'Comments <i class="fas fa-angle-down">',
			width: 120,
			click: function click() {
				_this2.Comment.toggleComments(_this2.commentsGot, _this2.$$('commentButton'));
			}
		};

		var addComment = {
			margin: 5,
			paddingY: 10,
			paddingX: 17,
			rows: [{
				view: 'textarea',
				localId: 'userComment',
				label: 'Comment',
				labelPosition: 'top',
				height: 80
			}, {
				cols: [{}, {
					view: 'button',
					localId: 'saveCommentBtn',
					type: 'form',
					label: 'Send',
					width: 80,
					click: function click() {
						_this2.Comment.saveComment(_this2.$$('userComment'));
					}
				}]
			}]
		};

		var comments = {
			rows: [{
				paddingY: 10,
				cols: [{}, toggleCommentsBtn, {}]
			}, {
				localId: 'commentLayout',
				hidden: true,
				rows: []
			}]
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
					}, addComment, comments]
				}
			}
		};
	};

	BookCard.prototype.showPopup = function showPopup(id) {
		var _this3 = this;

		this.likeButton = this.$$('likeButton');
		this.form = this.$$('bookCardReader');
		this.filesList = this.$$('availableTextFiles');
		this.toggleCommentsBtn = this.$$('commentButton');
		this.orderBtn = this.$$('orderBook');
		this.commentLayout = this.$$('commentLayout');
		this.userId = this.getParam('id', true);

		_models_books__WEBPACK_IMPORTED_MODULE_4__["default"].getBook(id).then(function (bookData) {
			var book = bookData.json()[0];

			_this3.book = book;
			_this3.bookId = book.id;
			_this3.Comment = new _commentObj__WEBPACK_IMPORTED_MODULE_7__["default"](_this3.userId, _this3.bookId, _this3.commentLayout);

			_this3.clearForm();

			_this3.form.setValues(book);
			_this3.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
			_this3.form.setValues(book);
			_this3.$$('bookCover').setValues(book.cover_photo || _consts__WEBPACK_IMPORTED_MODULE_3__["DUMMYCOVER"]);
			_this3.likeButton.define('badge', book.count_likes || '0');
			_this3.getFiles();
			_this3.Comment.getComments();
			_this3.commentsGot = true;
			Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.book_file, _this3.$$('downloadBook'));
			Object(_scripts__WEBPACK_IMPORTED_MODULE_2__["toggleElement"])(book.available_copies, _this3.$$('orderBook'));
			_this3.toggleLike(book.userId == _this3.userId);
			_this3.toggleOrder(book.order_date);

			_this3.getRoot().show();
		});
	};

	BookCard.prototype.getFiles = function getFiles() {
		var _this4 = this;

		_models_files__WEBPACK_IMPORTED_MODULE_5__["default"].getItems(this.bookId).then(function (dbData) {
			var filesArr = dbData.json();

			var textFiles = [];
			var audioFiles = [];

			filesArr.forEach(function (file) {
				switch (file.data_type) {
					case 'text':
						textFiles.push(file);
						break;
					case 'audio':
						audioFiles.push(file);
						break;
				}
			});
			_this4.$$('availableTextFiles').parse(textFiles);
			_this4.$$('availableAudioFiles').parse(audioFiles);
		});
	};

	BookCard.prototype.orderBook = function orderBook() {
		var _this5 = this;

		var order = {
			userId: this.userId,
			bookId: this.bookId,
			orderDate: new Date()
		};

		_models_orders__WEBPACK_IMPORTED_MODULE_6__["default"].addOrder(order).then(function () {
			_this5.setOrderedVal();
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
		var _this6 = this;

		if (this.book.userId == this.userId) {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].removeLike(this.userId, this.bookId).then(function () {
				_this6.unsetLike();
			});
		} else {
			_models_likes__WEBPACK_IMPORTED_MODULE_1__["default"].addLike(this.userId, this.bookId).then(function () {
				_this6.setLike();
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
		this.Comment.clearComments();
	};

	return BookCard;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCard);

/***/ }),

/***/ "./sources/views/reader/commentObj.js":
/*!********************************************!*\
  !*** ./sources/views/reader/commentObj.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts */ "./sources/scripts.js");
/* harmony import */ var _models_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/comments */ "./sources/models/comments.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Comment = function () {
	function Comment(userId, bookId, commentLayout) {
		_classCallCheck(this, Comment);

		this.userId = userId;
		this.bookId = bookId;
		this.commentLayout = commentLayout;
	}

	Comment.prototype.saveComment = function saveComment(commentInput, parentCommentId) {
		var _this = this;

		var commentText = commentInput.getValue();
		var comment = {
			'userId': this.userId,
			'bookId': this.bookId,
			'content': commentText,
			'commentDate': new Date(),
			'commentId': parentCommentId || 0
		};

		_models_comments__WEBPACK_IMPORTED_MODULE_1__["default"].addItem(comment).then(function (response) {
			if (response) {
				_this.clearComments();
				if (!parentCommentId) {
					commentInput.setValue('');
				}
				_this.getComments();
				_this.commentLayout.show();
			}
		});
	};

	Comment.prototype.addChildComments = function addChildComments(arr, item) {
		var i = 0;
		while (i < arr.length) {
			var el = arr[i];
			if (el.comment_id === item.id) {
				var commentItem = this.composeComment(el);
				$$('comment_' + item.id).addView(commentItem);
				arr.splice(i, 1);

				if (arr.length > 0) {
					this.addChildComments(arr, el);
				}
			} else {
				i++;
			}
		}
	};

	Comment.prototype.getComments = function getComments() {
		var _this2 = this;

		_models_comments__WEBPACK_IMPORTED_MODULE_1__["default"].getItems(this.bookId).then(function (dbData) {
			var commentsArr = dbData.json();

			var i = 0;

			while (i < commentsArr.length) {
				var comment = commentsArr[i];
				if (!comment.comment_id) {
					var commentItem = _this2.composeComment(comment);
					_this2.commentLayout.addView(commentItem);
					commentsArr.splice(i, 1);

					if (commentsArr.length > 0) {
						_this2.addChildComments(commentsArr, comment);
					}
				} else {
					i++;
				}
			}
		});
	};

	Comment.prototype.toggleComments = function toggleComments(isCommentsGot, toggleCommentsBtn) {
		var isVisible = this.commentLayout.isVisible();
		if (isVisible) {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-down"></i>');
			this.commentLayout.hide();
		} else {
			toggleCommentsBtn.setValue('Comments <i class="fas fa-angle-up"></i>');
			if (!isCommentsGot) {
				this.getComments();
			}
			this.commentLayout.show();
		}
	};

	Comment.prototype.composeComment = function composeComment(comment) {
		var _this3 = this;

		var commentDate = Object(_scripts__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(comment.comment_date);
		var commentAuthor = comment.user_name + ' ' + comment.user_surname;

		return {
			id: 'comment_' + comment.id,
			css: 'comment_item',
			padding: { left: 10 },
			rows: [{
				view: 'template',
				autoheight: true,
				borderless: true,
				css: 'template',
				template: '<div class="comment_info">                                    <div class = "comment_author">' + commentAuthor + '</div>                                    <div class = "comment_date">' + commentDate + '</div>                                </div>\n                                <div>' + comment.content + '</div>',
				onClick: {
					'template': function template() {
						return _this3.replyToComment(comment.id);
					}
				}
			}]
		};
	};

	Comment.prototype.replyToComment = function replyToComment(commentId) {
		var _this4 = this;

		var replyToCommentLayout = {
			padding: 10,
			rows: [{
				view: 'textarea',
				id: 'replyUserComment',
				height: 60
			}, {
				cols: [{}, {
					view: 'button',
					localId: 'saveCommentBtn',
					type: 'form',
					label: 'Send',
					width: 70,
					height: 30,
					click: function click() {
						_this4.saveComment($$('replyUserComment'), commentId);
					}
				}]
			}]
		};

		if (!$$('replyUserComment')) {
			$$('comment_' + commentId).addView(replyToCommentLayout);
		}
	};

	Comment.prototype.clearComments = function clearComments() {
		var _this5 = this;

		var comments = this.commentLayout.getChildViews();
		if (comments) {
			var commentsCopy = [].concat(comments);

			commentsCopy.forEach(function (comment) {
				_this5.commentLayout.removeView(comment);
			});
		}
	};

	return Comment;
}();

/* harmony default export */ __webpack_exports__["default"] = (Comment);

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
				id: 'book_title',
				header: 'Book',
				fillspace: 1
			}, {
				id: 'author_name',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViaXgtamV0L2Rpc3QvZXM2L2pldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvYXV0aG9yaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2NvbnN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2xvY2FsZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2Jvb2tzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2ZpbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xpa2VzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL29yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3Mgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZG1pbi91c2VyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2NvbW1vbi9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vb3JkZXJzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi91c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2Jvb2tDYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL2NvbW1lbnRPYmouanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImciLCJGdW5jdGlvbiIsImhhZFJ1bnRpbWUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiaW5kZXhPZiIsIm9sZFJ1bnRpbWUiLCJ1bmRlZmluZWQiLCJlIiwiZ2xvYmFsIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiaW5Nb2R1bGUiLCJydW50aW1lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJldHVybiIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInRvU3RyaW5nIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0Iiwia2V5IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiSmV0QmFzZSIsIndlYml4Iiwid2ViaXhKZXQiLCJfZXZlbnRzIiwiX3N1YnMiLCJfZGF0YSIsImdldFJvb3QiLCJfcm9vdCIsImRlc3RydWN0b3IiLCJfZGV0YWNoRXZlbnRzIiwiX2Rlc3Ryb3lTdWJzIiwiX2NvbnRhaW5lciIsImFwcCIsIl9wYXJlbnQiLCJzZXRQYXJhbSIsImlkIiwidXJsIiwiX3NlZ21lbnQiLCJ1cGRhdGUiLCJzaG93IiwiZ2V0UGFyYW0iLCJwYXJlbnQiLCJ2aWV3IiwiZ2V0UGFyZW50VmlldyIsImdldFVybCIsInN1YnVybCIsImdldFVybFN0cmluZyIsIiQkIiwicm9vdCIsInF1ZXJ5VmlldyIsImNvbmZpZyIsImxvY2FsSWQiLCIkc2NvcGUiLCJvbiIsImNvZGUiLCJhdHRhY2hFdmVudCIsImNvbnRhaW5zIiwia2lkIiwiZ2V0U3ViVmlldyIsInN1YiIsImdldFN1YlZpZXdJbmZvIiwic3VidmlldyIsInBvcHVwIiwiZXZlbnRzIiwiZGV0YWNoRXZlbnQiLCJzdWJWaWV3IiwiX2luaXRfdXJsX2RhdGEiLCJjdXJyZW50IiwiZXh0ZW5kIiwicGFyYW1zIiwiX2dldERlZmF1bHRTdWIiLCJkZWZhdWx0IiwiYnJhbmNoIiwiY2hpbGQiLCJfcm91dGVkX3ZpZXciLCJwYXJzZSIsInN1YnN0ciIsInBhcnRzIiwic3BsaXQiLCJjaHVua3MiLCJ0ZXN0IiwicG9zIiwicGFyYW0iLCJkY2h1bmsiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwiaXNOZXciLCJ1cmwyc3RyIiwic3RhY2siLCJjaHVuayIsIm9iajJzdHIiLCJqb2luIiwic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJyb3V0ZSIsImluZGV4IiwiX25leHQiLCJwYXRoIiwic2hpZnQiLCJyZWZyZXNoIiwiX2pvaW4iLCJraWRzIiwib2xkIiwiY29uY2F0IiwiYXBwZW5kIiwicmVzIiwicmVqIiwicmVkaXJlY3QiLCJjb25maXJtIiwiY2FsbEV2ZW50IiwiY2F0Y2giLCJzaXplIiwibiIsIkpldFZpZXciLCJfY2hpbGRyZW4iLCJ1aSIsImNvbnRhaW5lciIsImpldHZpZXciLCJjcmVhdGVWaWV3IiwicmVuZGVyIiwidGFyZ2V0IiwiX3JlbmRlckZyYW1lTG9jayIsIl9zaG93Iiwic2VnbWVudCIsIl91cmxDaGFuZ2UiLCJsaW5rUm91dGVyIiwiZ2V0Um91dGVyIiwic2V0Iiwic2lsZW50IiwiaW5pdCIsIl8kdmlldyIsIl8kIiwicmVhZHkiLCJfJHVybCIsIm1lc3NhZ2UiLCJ1cmxDaGFuZ2UiLCJkZXN0cm95IiwiX2Rlc3Ryb3lLaWRzIiwidXNlIiwicGx1Z2luIiwidGFnTmFtZSIsIl9yZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ0b05vZGUiLCJfcmVuZGVyX2ZpbmFsIiwiY2ZnIiwic2xvdCIsInJlc3BvbnNlIiwiY29weUNvbmZpZyIsIm9sZHVpIiwiYXNXaW4iLCJzZXRQb3NpdGlvbiIsImlzVmlzaWJsZSIsIl9pbml0IiwiX2luaXRVcmwiLCJfaW5pdEVycm9yIiwid2FpdHMiLCJmcmFtZSIsIndhaXQiLCJhbGwiLCJsb2NrIiwiX3JlbmRlckZyYW1lIiwiX2NyZWF0ZVN1YlZpZXciLCJlcnJvciIsImNyZWF0ZUZyb21VUkwiLCJ1aXMiLCJKZXRWaWV3UmF3IiwiX3VpIiwiU3ViUm91dGVyIiwiY2IiLCJhIiwiZ2V0IiwiX29uY2UiLCJKZXRBcHBCYXNlIiwid2luZG93IiwidmVyc2lvbiIsInN0YXJ0IiwiX3NlcnZpY2VzIiwiRXZlbnRTeXN0ZW0iLCJfc3ViU2VnbWVudCIsImdldFNlcnZpY2UiLCJzZXRTZXJ2aWNlIiwiaGFuZGxlciIsIiRzdWJ2aWV3IiwiYWRkU3ViVmlldyIsIkFycmF5IiwicG9pbnQiLCJEYXRhQ29sbGVjdGlvbiIsIlJlZ0V4cCIsIkRhdGUiLCJjb3B5IiwiJHJvdXRlciIsImNsaWNrSGFuZGxlciIsInNyY0VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0cmlnZ2VyIiwiX2ZvclZpZXciLCJsb2FkVmlldyIsInZpZXdzIiwiX2xvYWRFcnJvciIsIl9sb2FkVmlld0R5bmFtaWMiLCJfX2VzTW9kdWxlIiwibm93Iiwicm91dGVyIiwicmVzdCIsImFwcGx5IiwiZGF0YSIsImFjdGlvbiIsImJpbmQiLCJlciIsImRlYnVnIiwiY29uc29sZSIsInRleHQiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiZXhwaXJlIiwiZmlyc3RJbml0IiwiX2ZpcnN0X3N0YXJ0IiwidG9wIiwiYmFzZSIsInNldFRpbWVvdXQiLCJhbmltYXRpb24iLCJub2RlIiwiaHRtbCIsImFkZENzcyIsInJlbW92ZUNzcyIsInVybFN0cmluZyIsInRlbXBsYXRlIiwidWlkIiwiSGFzaFJvdXRlciIsIl9kZXRlY3RQcmVmaXgiLCJvbnBvcHN0YXRlIiwicm91dGVzIiwiY29tcGFyZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwcmVmaXgiLCJzdWZpeCIsIl9nZXRSYXciLCJyb3V0ZXJQcmVmaXgiLCJsb2NhdGlvbiIsImhyZWYiLCJpc1BhdGNoZWQiLCJwYXRjaCIsInciLCJ3aW4iLCJwcm9taXNlIiwiZnJlZXplIiwic29tZSIsIiRmcmVlemUiLCJyZXNpemUiLCJiYXNlQWRkIiwiYmFzZWxheW91dCIsImFkZFZpZXciLCJiYXNlUmVtb3ZlIiwicmVtb3ZlVmlldyIsImp2aWV3Iiwic3VicyIsImFyZ3VtZW50cyIsImxheW91dCIsInByb3RvVUkiLCIkaW5pdCIsIiRhcHAiLCIkcmVhZHkiLCJvcmlnaW4iLCJwcm94eSIsIkpldEFwcCIsIlN0b3JlUm91dGVyIiwic3RvcmFnZSIsInNlc3Npb24iLCJzdG9yZU5hbWUiLCJwdXQiLCJVcmxSb3V0ZXIiLCJwYXRobmFtZSIsIkVtcHR5Um91dGVyIiwiXyRjb25maWciLCJVbmxvYWRHdWFyZCIsImhhcyIsInN0b3JlIiwidHJpbSIsIndhcm4iLCJ4IiwiU3RyaW5nIiwiZGVsaW1pdGVyIiwicnVzc2lhblBsdXJhbEdyb3VwcyIsImVuZCIsInBsdXJhbFR5cGVzIiwiYXJhYmljIiwibGFzdFR3byIsImJvc25pYW5fc2VyYmlhbiIsImNoaW5lc2UiLCJjcm9hdGlhbiIsImZyZW5jaCIsImdlcm1hbiIsInJ1c3NpYW4iLCJsaXRodWFuaWFuIiwiY3plY2giLCJwb2xpc2giLCJpY2VsYW5kaWMiLCJzbG92ZW5pYW4iLCJwbHVyYWxUeXBlVG9MYW5ndWFnZXMiLCJsYW5nVG9UeXBlTWFwIiwibWFwcGluZyIsInJldCIsImxhbmdzIiwibGFuZyIsInBsdXJhbFR5cGVOYW1lIiwibG9jYWxlIiwibGFuZ1RvUGx1cmFsVHlwZSIsImVuIiwicGx1cmFsVHlwZUluZGV4IiwiY291bnQiLCJlc2NhcGUiLCJ0b2tlbiIsImNvbnN0cnVjdFRva2VuUmVnZXgiLCJvcHRzIiwic3VmZml4IiwiUmFuZ2VFcnJvciIsImRvbGxhclJlZ2V4IiwiZG9sbGFyQmlsbHNZYWxsIiwiZGVmYXVsdFRva2VuUmVnZXgiLCJ0cmFuc2Zvcm1QaHJhc2UiLCJwaHJhc2UiLCJzdWJzdGl0dXRpb25zIiwidG9rZW5SZWdleCIsImludGVycG9sYXRpb25SZWdleCIsIm9wdGlvbnMiLCJzbWFydF9jb3VudCIsInRleHRzIiwiZXhwcmVzc2lvbiIsImFyZ3VtZW50IiwiUG9seWdsb3QiLCJwaHJhc2VzIiwiY3VycmVudExvY2FsZSIsImFsbG93TWlzc2luZyIsIm9uTWlzc2luZ0tleSIsImludGVycG9sYXRpb24iLCJuZXdMb2NhbGUiLCJtb3JlUGhyYXNlcyIsInByZWZpeGVkS2V5IiwidW5zZXQiLCJjbGVhciIsIm5ld1BocmFzZXMiLCJ0IiwiXyIsInRyYW5zZm9ybSIsIndlYml4UG9seWdsb3QiLCJMb2NhbGUiLCJfdmlldyIsInNldExhbmdEYXRhIiwicGNvbmZpZyIsInBvbHlnbG90IiwicG9seSIsInNlcnZpY2UiLCJsb2NOYW1lIiwiaTE4biIsInNldExvY2FsZSIsImdldExhbmciLCJzZXRMYW5nIiwidXJscyIsIk1lbnUiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiZ2V0U2VsZWN0ZWRJZCIsInNlbGVjdCIsImV4aXN0cyIsImJhc2VpY29ucyIsImdvb2QiLCJzYXZpbmciLCJiYXNldGV4dCIsIlN0YXR1cyIsInN0YXR1cyIsImlzZXJyb3IiLCJleHBpcmVEZWxheSIsImljb25zIiwiY29udGVudCIsImFyZWEiLCJzZXRIVE1MIiwic3VjY2VzcyIsInNldFN0YXR1cyIsImZhaWwiLCJnZXRTdGF0dXMiLCJoaWRlU3RhdHVzIiwibW9kZSIsInJlc3BvbnNlVGV4dCIsInRyYWNrIiwiZHAiLCJfaWQiLCJfb2JqIiwicmVtb3RlIiwiYWpheCIsIl9tb2RlIiwiX3VybCIsIl9yZXF1ZXN0IiwiX2hlYWRlcnMiLCJfZmlsZXMiLCJUaGVtZSIsInRoZW1lIiwiZ2V0VGhlbWUiLCJzZXRUaGVtZSIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsbmFtZSIsImRpc2FibGVkIiwic2tpbiIsImNvcHlQYXJhbXMiLCJVcmxQYXJhbSIsIm9zIiwib2ciLCJ2YWwiLCJVc2VyIiwibG9naW4iLCJsb2dvdXQiLCJhZnRlckxvZ2luIiwiYWZ0ZXJMb2dvdXQiLCJwaW5nIiwibW9kZWwiLCJ1c2VyIiwiZ2V0VXNlciIsInNlcnZlciIsInBhc3MiLCJjYW5OYXZpZ2F0ZSIsIl8kcm9vdCIsInB1YmxpYyIsInNldEludGVydmFsIiwicGx1Z2lucyIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJsIiwibG9nb3V0VXJsIiwibG9naW5VcmwiLCJyZWdpc3RlclVybCIsIkF1dGhvcml6YXRpb24iLCJyZWdpc3RlciIsInBvc3QiLCJkYXRlIiwiRFVNTVlDT1ZFUiIsIlNVQ0NFU1NfU1FMIiwiU1VDQ0VTU19NT05HTyIsIlVSTCIsIkJvb2tzTW9kZWwiLCJnZXREYXRhRnJvbVNlcnZlciIsInVzZXJJZCIsImdldEJvb2siLCJib29rSWQiLCJhZGRJdGVtIiwiZnVuYyIsInVwZGF0ZUl0ZW0iLCJyZW1vdmVJdGVtIiwiZGVsIiwiQ29tbWVudHNNb2RlbCIsImdldEl0ZW1zIiwiRmlsZXNNb2RlbCIsImRvd25sb2FkSXRlbSIsIkxpa2VzTW9kZWwiLCJnZXRMaWtlcyIsImFkZExpa2UiLCJyZW1vdmVMaWtlIiwiT3JkZXJzTW9kZWwiLCJnZXRJZExpc3QiLCJhZGRPcmRlciIsIm9yZGVyIiwidXBkYXRlVXNlck9yZGVycyIsIm9yZGVyc0FyciIsIm9yZGVycyIsIlVzZXJzTW9kZWwiLCJnZXRSZWFkZXJzIiwiZ2V0SXRlbSIsIk15QXBwIiwiZGVmYXVsdHMiLCJBUFBOQU1FIiwiVkVSU0lPTiIsIkJVSUxEX0FTX01PRFVMRSIsIlBST0RVQ1RJT04iLCJuYXYiLCJ1cmxQYXJ0cyIsInRhcmdldFBhcnQiLCJlbCIsInJvbGUiLCJqc29uIiwidG9nZ2xlRWxlbWVudCIsImNvbmRpdGlvbiIsImVsZW1lbnQiLCJoaWRlIiwiTW9kZWwiLCJzdWNjZXNzQWN0aW9uIiwiZm9ybWF0RGF0ZSIsImRiRGF0ZSIsImN1cnJlbnRZZWFyIiwiZ2V0RnVsbFllYXIiLCJjdXJyZW50TW9udGgiLCJnZXRNb250aCIsImN1cnJlbnREYXkiLCJnZXREYXRlIiwiY3VycmVudEhvdXJzIiwiZ2V0SG91cnMiLCJjdXJyZW50RGF0ZVRpbWUiLCJjb21tZW50c1llYXIiLCJjb21tZW50c01vbnRoIiwiY29tbWVudHNEYXkiLCJjb21tZW50c0hvdXJzIiwiY29tbWVudHNEYXRlVGltZSIsInN0clRvRGF0ZSIsImRhdGVUb1N0ciIsInRpbWUiLCJNYXRoIiwicm91bmQiLCJjb252ZXJ0RGF0ZXNJbkFycmF5IiwiYXJyIiwibWFwIiwieWVhck9mUHVibGljYXRpb24iLCJhdXRvaGVpZ2h0IiwiYm9yZGVybGVzcyIsImhlaWdodCIsImxpc3QiLCJUb3BWaWV3IiwiaGVhZGVyIiwid2lkdGgiLCJkdGFibGUiLCJjb2x1bW5zIiwiaGlkZGVuIiwibWluV2lkdGgiLCJmaWxsc3BhY2UiLCJvbkNsaWNrIiwiZWRpdFVzZXIiLCJhZGRVc2VyQnRuIiwiY2xpY2siLCJhZGRVc2VyIiwicm93cyIsImNvbHMiLCJ1c2Vyc01vZGVsIiwiZGJEYXRhIiwidXNlcnNBcnIiLCJmdWxsX25hbWUiLCJ1c2VyX25hbWUiLCJ1c2VyX3N1cm5hbWUiLCJmb3JtYXQiLCJiaXJ0aF9kYXRlIiwidXNlcnNEYXRhIiwiYXV0aG9yaXphdGlvbiIsImN1cnJlbnREYXRlIiwiX3VzZXJGb3JtIiwiVXNlckZvcm0iLCJmaW5kIiwic2hvd1dpbmRvdyIsImhlYWQiLCJwb3NpdGlvbiIsImVsZW1lbnRzIiwibGFiZWwiLCJsYWJlbFdpZHRoIiwibGFiZWxBbGlnbiIsInJ1bGVzIiwiaXNOb3RFbXB0eSIsIm1hcmdpbiIsInBhZGRpbmdZIiwic2F2ZUZvcm0iLCJoaWRlV2luZG93IiwiZm9ybSIsImdldEhlYWQiLCJzZXRWYWx1ZXMiLCJpbml0aWFsX3Bhc3N3b3JkIiwiZ2V0VmFsdWVzIiwidmFsaWRhdGUiLCJjbGVhclZhbGlkYXRpb24iLCJMaWJyYXJ5IiwibGlicmFyeUNvbmZpZyIsImJvb2tDYXJkIiwiY3NzIiwic29ydCIsImVib29rIiwiX2Jvb2tDYXJkIiwic2hvd1BvcHVwIiwicmVtb3ZlQm9vayIsImdyaWQiLCJnZXRDb2x1bW5Db25maWciLCJyZWZyZXNoQ29sdW1ucyIsImdldERhdGEiLCJnZXRGaWxlcyIsImNoZWNrRmlsZXMiLCJib29rc0FyciIsImJvb2tzTW9kZWwiLCJmaWxlc01vZGVsIiwiZmlsZXNBcnIiLCJib29rIiwiaXNGaWxlcyIsImJvb2tfaWQiLCJyZW1vdmUiLCJhZGRCb29rIiwiQm9va0NhcmQiLCJib29rQ292ZXIiLCJhZGRUZXh0RmlsZSIsImF1dG9zZW5kIiwiZm9ybURhdGEiLCJhY2NlcHQiLCJ1cGxvYWQiLCJsaW5rIiwiZmlsZXNMaXN0IiwiYWRkQXVkaW9GaWxlIiwiYXVkaW9MaXN0IiwiYXZhaWxhYmxlVGV4dEZpbGVzIiwib25JdGVtQ2xpY2siLCJhdmFpbGFibGVBdWRpb0ZpbGVzIiwic2F2ZUJ0biIsIm1heEhlaWdodCIsInBhZGRpbmdYIiwiY2xlYXJGb3JtIiwidGV4dEZpbGVzIiwiYXVkaW9GaWxlcyIsImZpbGUiLCJkYXRhX3R5cGUiLCJib29rRGF0YSIsImNvdmVyX3Bob3RvIiwibmV3RGF0YSIsInNlbmQiLCJmaWxlcyIsImNsZWFyQWxsIiwibWVudSIsImljb24iLCJvbk1lbnVJdGVtQ2xpY2siLCJsaWJMaWJyYXJ5IiwiYWRkQm9va0J0biIsImxpYnJhcnkiLCJPcmRlcnNGb3JtIiwibW92ZSIsInBhZGRpbmciLCJzdWdnZXN0IiwidXNlck5hbWUiLCJyb3ciLCJvcmRlcnNMaXN0Iiwib3JkZXJzTW9kZWwiLCJyZXN1bHRzIiwiYm9va3MiLCJhbGxCb29rcyIsImF1dGhvcl9uYW1lIiwiYm9va190aXRsZSIsImRlZmluZSIsIm9yZGVyc0xpc3RWYWx1ZSIsIlVzZXJzVmlldyIsInNob3dVc2VyT3JkZXJzIiwiZWRpdE9yZGVycyIsInNlbGVjdGVkSXRlbSIsIkxvZ2luUGFnZSIsImxvZ2luRm9ybSIsInVzZXJEYXRhIiwicm9sZV9uYW1lIiwicmVhZG9ubHkiLCJib29rTmFtZSIsImRvd25sb2FkIiwib3JkZXJCb29rIiwiZG93bmxvYWRCb29rIiwibGlrZUJvb2siLCJ0b2dnbGVDb21tZW50c0J0biIsIkNvbW1lbnQiLCJ0b2dnbGVDb21tZW50cyIsImNvbW1lbnRzR290IiwiYWRkQ29tbWVudCIsImxhYmVsUG9zaXRpb24iLCJzYXZlQ29tbWVudCIsImNvbW1lbnRzIiwibGlrZUJ1dHRvbiIsIm9yZGVyQnRuIiwiY29tbWVudExheW91dCIsIkNvbW1lbnRDbGFzcyIsImNvdW50X2xpa2VzIiwiZ2V0Q29tbWVudHMiLCJib29rX2ZpbGUiLCJhdmFpbGFibGVfY29waWVzIiwidG9nZ2xlTGlrZSIsInRvZ2dsZU9yZGVyIiwib3JkZXJfZGF0ZSIsIm9yZGVyRGF0ZSIsInNldE9yZGVyZWRWYWwiLCJkaXNhYmxlIiwidW5zZXRPcmRlcmVkVmFsIiwiZW5hYmxlIiwib3JkZXJlZCIsImxpa2VzTW9kZWwiLCJ1bnNldExpa2UiLCJzZXRMaWtlIiwiY2xlYXJDb21tZW50cyIsImNvbW1lbnRJbnB1dCIsInBhcmVudENvbW1lbnRJZCIsImNvbW1lbnRUZXh0IiwiY29tbWVudCIsImNvbW1lbnRzTW9kZWwiLCJhZGRDaGlsZENvbW1lbnRzIiwiaXRlbSIsImNvbW1lbnRfaWQiLCJjb21tZW50SXRlbSIsImNvbXBvc2VDb21tZW50Iiwic3BsaWNlIiwiY29tbWVudHNBcnIiLCJpc0NvbW1lbnRzR290IiwiY29tbWVudERhdGUiLCJjb21tZW50X2RhdGUiLCJjb21tZW50QXV0aG9yIiwibGVmdCIsInJlcGx5VG9Db21tZW50IiwiY29tbWVudElkIiwicmVwbHlUb0NvbW1lbnRMYXlvdXQiLCJnZXRDaGlsZFZpZXdzIiwiY29tbWVudHNDb3B5IiwicmVhZGVyTGlicmFyeSIsIk1haW5WaWV3IiwidGVzdFJlc3VsdHMiLCJidXR0b24iLCJpbnB1dFdpZHRoIiwicGFyc2VCb29rcyIsIlNldHRpbmdzIiwiYmlydGhEYXRlIiwiYm9va1RvcHMiLCJzaG93T2xkZXN0Qm9va3MiLCJzaG93TmV3ZXN0Qm9va3MiLCJzaG93TW9zdFBhZ2VzQm9va3MiLCJzaG93Qm9va3NXaXRoTG9uZ05hbWVzIiwic2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzIiwieWVhcl9vZl9wdWJsaWNhdGlvbiIsImRlZmF1bHRDb25maWciLCJiIiwic2hvd1Jlc3VsdHMiLCJudW1iZXJfb2ZfcGFnZXMiLCJhdXRob3JzIiwiZmluZEluZGV4IiwiYXV0aG9yIiwiYm9va3NDb3VudCIsIlJlZ2lzdGVyUGFnZSIsInJlZ2lzdGVyRm9ybSIsInJlYXNvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FB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O0FBRGxCLElBSFM7QUFKVSxHQUFyQjs7QUFpQkEsU0FBTztBQUNOMm1CLFNBQU0sQ0FDTCxFQURLLEVBRUw7QUFDQ0QsVUFBTSxDQUNMLEVBREssRUFFTHNNLFlBRkssRUFHTCxFQUhLO0FBRFAsSUFGSyxFQVNMLEVBVEs7QUFEQSxHQUFQO0FBYUEsRTs7d0JBRUQxbEIsSSxtQkFBTztBQUFBOztBQUNOLE9BQUtuRixFQUFMLENBQVEsYUFBUixFQUF1QlEsV0FBdkIsQ0FBbUMsYUFBbkMsRUFBa0QsWUFBTTtBQUN2RCxPQUFNN0gsU0FBUyxPQUFLcUgsRUFBTCxDQUFRLGNBQVIsRUFBd0J3Z0IsU0FBeEIsRUFBZjtBQUNBLE9BQU10QixnQkFBZ0IsSUFBSTNHLHNEQUFKLEVBQXRCOztBQUVBMkcsaUJBQWMxRyxRQUFkLENBQXVCN2YsTUFBdkIsRUFBK0J3QixJQUEvQixDQUFvQyxVQUFDbU0sUUFBRCxFQUFjO0FBQ2pELFFBQU1nTyxTQUFTaE8sU0FBU2dWLElBQVQsR0FBZ0JoSCxNQUEvQjtBQUNBLFFBQU1sVixLQUFLa0gsU0FBU2dWLElBQVQsR0FBZ0JsYyxFQUEzQjtBQUNBLFFBQUlrVixXQUFXLENBQWYsRUFBa0I7QUFDakIsWUFBSzlVLElBQUwsc0JBQTZCSixFQUE3QjtBQUNBLEtBRkQsTUFHSztBQUNKLFNBQUdrSCxTQUFTZ1YsSUFBVCxHQUFnQndQLE1BQWhCLEtBQTJCLFdBQTlCLEVBQTJDO0FBQzFDLGFBQUt0ckIsSUFBTCxDQUFVLFFBQVY7QUFDQTtBQUNEbEIsV0FBTWtILE9BQU4sQ0FBY2MsU0FBU2dWLElBQVQsR0FBZ0JyUixJQUE5QjtBQUNBO0FBQ0QsSUFaRDtBQWFBLEdBakJEO0FBa0JBLEU7OztFQXREd0M5RixpRDs7QUFBckJ5bUIsMkUiLCJmaWxlIjoibXlhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2VzL215YXBwLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJjbGFzcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHdlYml4KSB7XHJcbiAgICAgICAgdGhpcy53ZWJpeEpldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53ZWJpeCA9IHdlYml4O1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb290O1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuYXBwID0gdGhpcy5fcGFyZW50ID0gdGhpcy5fcm9vdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbShpZCwgdmFsdWUsIHVybCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kYXRhW2lkXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVtpZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoaWQsIHZhbHVlLCAwKTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UGFyYW0oaWQsIHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZGF0YVtpZF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCAhcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmdldFBhcmFtKGlkLCBwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGFyZW50VmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG4gICAgJCQoaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3QucXVlcnlWaWV3KChvYmogPT4gKG9iai5jb25maWcuaWQgPT09IGlkIHx8IG9iai5jb25maWcubG9jYWxJZCA9PT0gaWQpICYmXHJcbiAgICAgICAgICAgICAgICAob2JqLiRzY29wZSA9PT0gcm9vdC4kc2NvcGUpKSwgXCJzZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uKG9iaiwgbmFtZSwgY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gb2JqLmF0dGFjaEV2ZW50KG5hbWUsIGNvZGUpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKHsgb2JqLCBpZCB9KTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICBjb250YWlucyh2aWV3KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBraWQgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgaWYgKGtpZCA9PT0gdmlldyB8fCBraWQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ViLnN1YnZpZXcudmlldztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3SW5mbyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1tuYW1lIHx8IFwiZGVmYXVsdFwiXTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1YnZpZXc6IHN1YiwgcGFyZW50OiB0aGlzIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzW25hbWVdID0geyB1cmw6IFwiXCIsIGlkOiBudWxsLCBwb3B1cDogdHJ1ZSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBhIGNoaWxkIHZpZXcsIHNlYXJjaGVzIGZvciBuZWFyZXN0IHBhcmVudCB3aXRoIHN1YnZpZXdcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgX2RldGFjaEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGV2ZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBldmVudHNbaV0ub2JqLmRldGFjaEV2ZW50KGV2ZW50c1tpXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lTdWJzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgc3ViIHZpZXdzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJWaWV3ID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIC8vIGl0IHBvc3NpYmxlIHRoYXQgc3VidmlldyB3YXMgbm90IGxvYWRlZCB3aXRoIGFueSBjb250ZW50IHlldFxyXG4gICAgICAgICAgICAvLyBzbyBjaGVjayBvbiBudWxsXHJcbiAgICAgICAgICAgIGlmIChzdWJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJWaWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgIH1cclxuICAgIF9pbml0X3VybF9kYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLl9kYXRhLCB1cmwucGFyYW1zLCB0cnVlKTtcclxuICAgIH1cclxuICAgIF9nZXREZWZhdWx0U3ViKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnMuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghc3ViLmJyYW5jaCAmJiBzdWIudmlldyAmJiBrZXkgIT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHN1Yi52aWV3Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcm91dGVkX3ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YiA9IHBhcmVudC5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgIGlmICghc3ViICYmIHN1YiAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnQuX3JvdXRlZF92aWV3KCk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gcGFyc2UodXJsKSB7XHJcbiAgICAvLyByZW1vdmUgc3RhcnRpbmcgL1xyXG4gICAgaWYgKHVybFswXSA9PT0gXCIvXCIpIHtcclxuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgLy8gc3BsaXQgdXJsIGJ5IFwiL1wiXHJcbiAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgIC8vIGZvciBlYWNoIHBhZ2UgaW4gdXJsXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGVzdCA9IHBhcnRzW2ldO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIC8vIGRldGVjdCBwYXJhbXNcclxuICAgICAgICAvLyBzdXBwb3J0IG9sZCBcdFx0XHRzb21lOmE9YjpjPWRcclxuICAgICAgICAvLyBhbmQgbmV3IG5vdGF0aW9uXHRcdHNvbWU/YT1iJmM9ZFxyXG4gICAgICAgIGxldCBwb3MgPSB0ZXN0LmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRlc3QuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRlc3Quc3Vic3RyKHBvcyArIDEpLnNwbGl0KC9bXFw6XFw/XFwmXS9nKTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGhhc2ggb2YgbmFtZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkY2h1bmsgPSBwYXJhbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbZGNodW5rWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChkY2h1bmtbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN0b3JlIHBhcnNlZCB2YWx1ZXNcclxuICAgICAgICBjaHVua3NbaV0gPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IChwb3MgPiAtMSA/IHRlc3Quc3Vic3RyKDAsIHBvcykgOiB0ZXN0KSxcclxuICAgICAgICAgICAgcGFyYW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgIGlzTmV3OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBwYWdlIG9iamVjdHNcclxuICAgIHJldHVybiBjaHVua3M7XHJcbn1cclxuZnVuY3Rpb24gdXJsMnN0cihzdGFjaykge1xyXG4gICAgY29uc3QgdXJsID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIHN0YWNrKSB7XHJcbiAgICAgICAgdXJsLnB1c2goXCIvXCIgKyBjaHVuay5wYWdlKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBvYmoyc3RyKGNodW5rLnBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICB1cmwucHVzaChcIj9cIiArIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybC5qb2luKFwiXCIpO1xyXG59XHJcbmZ1bmN0aW9uIG9iajJzdHIob2JqKSB7XHJcbiAgICBjb25zdCBzdHIgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ci5wdXNoKFwiJlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyLnB1c2goa2V5ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbihcIlwiKTtcclxufVxuXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZSwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnNlKHJvdXRlKSxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHJvdXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIGN1cnJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIHRoaXMuX25leHRdO1xyXG4gICAgfVxyXG4gICAgc3VidXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUodGhpcy5yb3V0ZSwgdGhpcy5pbmRleCArIHRoaXMuX25leHQpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIDE7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSB1cmwyc3RyKHRoaXMuc3VidXJsKCkpO1xyXG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIuc3Vic3RyKDEpIDogXCJcIjtcclxuICAgIH1cclxuICAgIF9qb2luKHBhdGgsIGtpZHMpIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgaWYgKHBhdGggPT09IG51bGwpIHsgLy8gY2hhbmdlIG9mIHBhcmFtZXRlcnMsIHJvdXRlIGVsZW1lbnRzIGFyZSBub3QgYWZmZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgdXJsID0gb2xkLnNsaWNlKDAsIHRoaXMuaW5kZXggKyAoa2lkcyA/IHRoaXMuX25leHQgOiAwKSk7XHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLmNvbmNhdChwYXJzZShwYXRoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLnZpZXcgPSBvbGRbaV0udmlldztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0gJiYgdXJsW2ldLnBhZ2UgPT09IG9sZFtpXS5wYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIGFwcGVuZChwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUucGF0aDtcclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgdmlldywga2lkcykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwga2lkcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtOiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSB2aWV3ID8gdmlldy5hcHAgOiBudWxsO1xyXG4gICAgICAgICAgICAvLyB3aGVuIGNyZWF0aW5nIGEgbmV3IHJvdXRlLCBpdCBwb3NzaWJsZSB0aGF0IGl0IHdpbGwgbm90IGhhdmUgYW55IGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gZ3VhcmQgaXMgbm90IG5lY2Vzc2FyeSBpbiBzdWNoIGNhc2VcclxuICAgICAgICAgICAgaWYgKGFwcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXBwLmNhbGxFdmVudChcImFwcDpndWFyZFwiLCBbb2JqLnJlZGlyZWN0LCB2aWV3LCBvYmpdKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtLmNhdGNoKCgpID0+IG9iai5yZWRpcmVjdCA9IG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgIT09IHJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNob3cob2JqLnJlZGlyZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSByZWRpcmVjdDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2l6ZShuKSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IG47XHJcbiAgICB9XHJcbiAgICBzcGxpdCgpIHtcclxuICAgICAgICBjb25zdCByb3V0ZSA9IHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4ICsgMSksXHJcbiAgICAgICAgICAgIHBhdGg6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyb3V0ZS51cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLnBhdGggPSB1cmwyc3RyKHJvdXRlLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUocm91dGUsIDApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIChpbmRleCB8fCAwKV07XHJcbiAgICAgICAgaWYgKCFjaHVuaykge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlLnVybC5wdXNoKHsgcGFnZTogXCJcIiwgcGFyYW1zOiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhZ2UgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhcmFtc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHRoaXMucm91dGUudXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBKZXRWaWV3IGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcC53ZWJpeCk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgLy90aGlzLiRjb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIHVpKHVpLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciB8fCB1aS5jb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgamV0dmlldyA9IHRoaXMuYXBwLmNyZWF0ZVZpZXcodWkpO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goamV0dmlldyk7XHJcbiAgICAgICAgamV0dmlldy5yZW5kZXIoY29udGFpbmVyLCB0aGlzLl9zZWdtZW50LCB0aGlzKTtcclxuICAgICAgICBpZiAodHlwZW9mIHVpICE9PSBcIm9iamVjdFwiIHx8ICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIC8vIHJhdyB3ZWJpeCBVSVxyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3LmdldFJvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICAvLyBjb252ZXJ0IHBhcmFtZXRlcnMgb2JqZWN0IHRvIHVybFxyXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtKGtleSwgcGF0aFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGlnYXRlIHRvIGFwcCBpbiBjYXNlIG9mIHJvb3QgcHJlZml4XHJcbiAgICAgICAgICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxvY2FsIHBhdGgsIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGFyZW50IHBhdGgsIGNhbGwgcGFyZW50IHZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4uL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaG93KHBhdGguc3Vic3RyKDMpLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoLnN1YnN0cigzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhjb25maWcudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Yi5wYXJlbnQgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViLnBhcmVudC5zaG93KHBhdGgsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25maWcudGFyZ2V0ICYmIGNvbmZpZy50YXJnZXQgIT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZyYW1lTG9jayhjb25maWcudGFyZ2V0LCBzdWIuc3VidmlldywgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3codGhpcy5fc2VnbWVudCwgcGF0aCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBfc2hvdyhzZWdtZW50LCBwYXRoLCB2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQuc2hvdyhwYXRoLCB2aWV3LCB0cnVlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmdldFJvdXRlcigpLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFtzZWdtZW50LnJvdXRlLnBhdGhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdChfJHZpZXcsIF8kKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgcmVhZHkoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmFwcC53ZWJpeC5tZXNzYWdlKFwiVmlldzpDb25maWcgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdXJsQ2hhbmdlKF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICAvLyBkZXN0cm95IGFjdHVhbCBVSVxyXG4gICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLmFwcCwgdGhpcywgY29uZmlnKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50LnJlZnJlc2goKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHRoaXMuX3NlZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID8gdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOiByb290O1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IF9jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4gdGhpcy5nZXRSb290KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXIodXJsKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcoKTtcclxuICAgICAgICBpZiAoY29uZmlnLnRoZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy50aGVuKGNmZyA9PiB0aGlzLl9yZW5kZXJfZmluYWwoY2ZnLCB1cmwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpIHtcclxuICAgICAgICAvLyBnZXQgcHJldmlvdXMgdmlldyBpbiB0aGUgc2FtZSBzbG90XHJcbiAgICAgICAgbGV0IHNsb3QgPSBudWxsO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzaG93ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICBzbG90ID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICBpZiAoc2xvdC5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy53ZWJpeC4kJChzbG90LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB2aWV3IGFscmVhZHkgZGVzdHJveWVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmFwcCB8fCAhY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICAvLyB1c2luZyB3cmFwcGVyIG9iamVjdCwgc28gdWkgY2FuIGJlIGNoYW5nZWQgZnJvbSBhcHA6cmVuZGVyIGV2ZW50XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyB1aToge30gfTtcclxuICAgICAgICB0aGlzLmFwcC5jb3B5Q29uZmlnKGNvbmZpZywgcmVzdWx0LnVpLCB0aGlzLl9zdWJzKTtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cmVuZGVyXCIsIFt0aGlzLCB1cmwsIHJlc3VsdF0pO1xyXG4gICAgICAgIHJlc3VsdC51aS4kc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIC8qIGRlc3Ryb3kgb2xkIEhUTUwgYXR0YWNoZWQgdmlld3MgYmVmb3JlIGNyZWF0aW5nIG5ldyBvbmUgKi9cclxuICAgICAgICBpZiAoIXNsb3QgJiYgY3VycmVudC5pc05ldyAmJiBjdXJyZW50LnZpZXcpIHtcclxuICAgICAgICAgICAgY3VycmVudC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBmb3IgYWRkaW5nIGluc2lkZSBvZiBtdWx0aXZpZXcgLSBwcmVzZXJ2ZSBvbGQgaWRcclxuICAgICAgICAgICAgaWYgKHNsb3QgJiYgIXNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZHVpID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gb2xkdWkuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubmFtZSA9PT0gXCJtdWx0aXZpZXdcIiAmJiAhcmVzdWx0LnVpLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVpLmlkID0gb2xkdWkuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLmFwcC53ZWJpeC51aShyZXN1bHQudWksIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzV2luID0gdGhpcy5fcm9vdDtcclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHVybCBhZGRlZCB0byBpZ25vcmUgdGhpcy51aSBjYWxsc1xyXG4gICAgICAgICAgICBpZiAoc2hvdyAmJiBhc1dpbi5zZXRQb3NpdGlvbiAmJiAhYXNXaW4uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIGFzV2luLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjaGVjaywgaWYgd2UgYXJlIHJlcGxhY2luZyBzb21lIG9sZGVyIHZpZXdcclxuICAgICAgICAgICAgaWYgKHNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbG90LnZpZXcgJiYgc2xvdC52aWV3ICE9PSB0aGlzICYmIHNsb3QudmlldyAhPT0gdGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xvdC5pZCA9IHRoaXMuX3Jvb3QuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGFyZW50VmlldygpIHx8ICF0aGlzLmFwcC5hcHApXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgaGF2ZSBzdWJhcHAsIHNldCB3aG9sZSBhcHAgYXMgYSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gb24gZGVzdHJ1Y3Rpb24sIHRoZSB3aG9sZSBhcHAgd2lsbCBiZSBkZXN0cm95ZWRcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzLmFwcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc05ldykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9pbml0KHRoaXMuX3Jvb3QsIHVybCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRVcmwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KHRoaXMuX3Jvb3QsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5jYXRjaChlcnIgPT4gdGhpcy5faW5pdEVycm9yKHRoaXMsIGVycikpO1xyXG4gICAgfVxyXG4gICAgX2luaXQodmlldywgdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCh2aWV3LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgfVxyXG4gICAgX3VybENoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6dXJsY2hhbmdlXCIsIFt0aGlzLCB0aGlzLl9zZWdtZW50XSk7XHJcbiAgICAgICAgY29uc3Qgd2FpdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBjb25zdCB3YWl0ID0gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIG51bGwpO1xyXG4gICAgICAgICAgICBpZiAod2FpdCkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHMucHVzaCh3YWl0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwod2FpdHMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxDaGFuZ2UodGhpcy5fcm9vdCwgdGhpcy5fc2VnbWVudC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvLyBpZiBzdWJ2aWV3IGlzIG5vdCBvY2N1cGllZCBieSBzb21lIHJlbmRlcmluZyB5ZXRcclxuICAgICAgICBpZiAoIWZyYW1lLmxvY2spIHtcclxuICAgICAgICAgICAgLy8gcmV0cmVpdmUgYW5kIHN0b3JlIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5fcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBsb2NrIGFmdGVyIGZyYW1lIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgLy8gYXMgcHJvbWlzZS5maW5hbGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgIFdlYml4IGxlc3NlciB0aGFuIDYuMlxyXG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgYSBtb3JlIHZlcmJvc2Ugbm90YXRpb25cclxuICAgICAgICAgICAgICAgIGZyYW1lLmxvY2sgPSBsb2NrLnRoZW4oKCkgPT4gZnJhbWUubG9jayA9IG51bGwsICgpID0+IGZyYW1lLmxvY2sgPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgcmV0dXJuIGZyYW1lLmxvY2s7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vZGVmYXVsdCByb3V0ZVxyXG4gICAgICAgIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWdtZW50Lm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5leHQgc2VnbWVudCBpbiB1cmwsIHJlbmRlciBpdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIHRoaXMuX3NlZ21lbnQuc2hpZnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWUudmlldyAmJiBmcmFtZS5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gbmV4dCBzZWdtZW50LCBkZWxldGUgdGhlIGV4aXN0aW5nIHN1Yi12aWV3XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgbmV3IHBhdGggcHJvdmlkZWQsIHNldCBpdCB0byB0aGUgZnJhbWVcclxuICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmcmFtZS51cmwgPSBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbiBjYXNlIG9mIHJvdXRlZCBzdWItdmlld1xyXG4gICAgICAgIGlmIChmcmFtZS5yb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV3IHBhdGggZm9yIHN1Yi12aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWUucm91dGUuc2hvdyhwYXRoLCBmcmFtZS52aWV3KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gbm90IHRyaWdnZXIgb25DaGFuZ2UgZm9yIGlzb2xhdGVkIHN1Yi12aWV3c1xyXG4gICAgICAgICAgICBpZiAoZnJhbWUuYnJhbmNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpZXcgPSBmcmFtZS52aWV3O1xyXG4gICAgICAgIC8vIGlmIHZpZXcgZG9lc24ndCBleGlzdHMgeWV0LCBpbml0IGl0XHJcbiAgICAgICAgaWYgKCF2aWV3ICYmIGZyYW1lLnVybCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nLCBzbyB3ZSBoYXZlIGlzb2xhdGVkIHN1YnZpZXcgdXJsXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5yb3V0ZSA9IG5ldyBSb3V0ZShmcmFtZS51cmwsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG9iamVjdCwgc28gd2UgaGF2ZSBhbiBlbWJlZGVkIHN1YnZpZXdcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcImZ1bmN0aW9uXCIgJiYgISh2aWV3IGluc3RhbmNlb2YgZnJhbWUudXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBuZXcgZnJhbWUudXJsKHRoaXMuYXBwLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBmcmFtZS51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHJpZ2dlciBvbkNoYW5nZSBmb3IgYWxyZWFkeSBleGlzdGVkIHZpZXdcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoZnJhbWUsIChmcmFtZS5yb3V0ZSB8fCB0aGlzLl9zZWdtZW50KSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2luaXRFcnJvcih2aWV3LCBlcnIpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBpZiB2aWV3IGlzIGRlc3Ryb3llZCwgaWdub3JlIGFueSB2aWV3IHJlbGF0ZWQgZXJyb3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAuZXJyb3IoXCJhcHA6ZXJyb3I6aW5pdHZpZXdcIiwgW2Vyciwgdmlld10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTdWJWaWV3KHN1Yiwgc3VidXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmNyZWF0ZUZyb21VUkwoc3VidXJsLmN1cnJlbnQoKSwgc3ViLnZpZXcpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihzdWIsIHN1YnVybCwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveUtpZHMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBjaGlsZCB2aWV3c1xyXG4gICAgICAgIGNvbnN0IHVpcyA9IHRoaXMuX2NoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB1aXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHVpc1tpXSAmJiB1aXNbaV0uZGVzdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdWlzW2ldLmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB2YXJzIGZvciBiZXR0ZXIgR0MgcHJvY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbn1cblxuLy8gd3JhcHBlciBmb3IgcmF3IG9iamVjdHMgYW5kIEpldCAxLnggc3RydWN0c1xyXG5jbGFzcyBKZXRWaWV3UmF3IGV4dGVuZHMgSmV0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl91aSA9IGNvbmZpZy51aTtcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3ViUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBjb25zdCBhID0gdGhpcy5hcHA7XHJcbiAgICAgICAgYS5hcHAuZ2V0Um91dGVyKCkuc2V0KGEuX3NlZ21lbnQuYXBwZW5kKHRoaXMucGF0aCksIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxubGV0IF9vbmNlID0gdHJ1ZTtcclxuY2xhc3MgSmV0QXBwQmFzZSBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViaXggPSAoY29uZmlnIHx8IHt9KS53ZWJpeCB8fCB3aW5kb3cud2ViaXg7XHJcbiAgICAgICAgc3VwZXIod2ViaXgpO1xyXG4gICAgICAgIC8vIGluaXQgY29uZmlnXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLndlYml4LmV4dGVuZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwXCIsXHJcbiAgICAgICAgICAgIHZlcnNpb246IFwiMS4wXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBcIi9ob21lXCJcclxuICAgICAgICB9LCBjb25maWcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5jb25maWcuYXBwO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMsIHRoaXMud2ViaXguRXZlbnRTeXN0ZW0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTZXJ2aWNlKG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IG9iaih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHNldFNlcnZpY2UobmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzW25hbWVdID0gaGFuZGxlcjtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJWaWV3KCkuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIC8vIGNvcHkgb2JqZWN0IGFuZCBjb2xsZWN0IGV4dHJhIGhhbmRsZXJzXHJcbiAgICBjb3B5Q29uZmlnKG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICAvLyByYXcgdWkgY29uZmlnXHJcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEpldEJhc2UgfHxcclxuICAgICAgICAgICAgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiBvYmoucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgb2JqID0geyAkc3Vidmlldzogb2JqIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1YnZpZXcgcGxhY2Vob2xkZXJcclxuICAgICAgICBpZiAodHlwZW9mIG9iai4kc3VidmlldyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHByb2Nlc3Mgc3ViLXByb3BlcnRpZXNcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgKG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2QgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG9ialttZXRob2RdO1xyXG4gICAgICAgICAgICAvLyB2aWV3IGNsYXNzXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgPT09IFwiZnVuY3Rpb25cIiAmJiBwb2ludC5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludCA9IHsgJHN1YnZpZXc6IHBvaW50IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvaW50ICYmIHR5cGVvZiBwb2ludCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgIShwb2ludCBpbnN0YW5jZW9mIHRoaXMud2ViaXguRGF0YUNvbGxlY3Rpb24pICYmICEocG9pbnQgaW5zdGFuY2VvZiBSZWdFeHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBuZXcgRGF0ZShwb2ludCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb3B5Q29uZmlnKHBvaW50LCAocG9pbnQgaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBnZXRSb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlcjtcclxuICAgIH1cclxuICAgIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmlnZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LmFwcC50cmlnZ2VyKHRyaWdnZXIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvdXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5zaG93KHJvdXRlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5nZXRSb290KCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkucmVmcmVzaCgpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZFZpZXcodXJsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLmNvbmZpZy52aWV3cztcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAodXJsID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fbG9hZEVycm9yKFwiXCIsIG5ldyBFcnJvcihcIldlYml4IEpldDogRW1wdHkgdXJsIHNlZ21lbnRcIikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHZpZXdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpZXdzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b20gbG9hZGluZyBzdHJhdGVneVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmVkZWZpbmVkIGhhc2hcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3c1t1cmxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gXCJfYmxhbmtcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZFZpZXdEeW5hbWljKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZEVycm9yKHVybCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGN1c3RvbSBoYW5kbGVyIGNhbiByZXR1cm4gdmlldyBvciBpdHMgcHJvbWlzZVxyXG4gICAgICAgIGlmICghcmVzdWx0LnRoZW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0XHJcbiAgICAgICAgICAgIC50aGVuKG1vZHVsZSA9PiBtb2R1bGUuX19lc01vZHVsZSA/IG1vZHVsZS5kZWZhdWx0IDogbW9kdWxlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuX2xvYWRFcnJvcih1cmwsIGVycikpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBfZm9yVmlldyh0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy53ZWJpeC4kJCh0YXJnZXQpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIodmlldy4kc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVGcm9tVVJMKGNodW5rLCBub3cpIHtcclxuICAgICAgICBsZXQgdmlldztcclxuICAgICAgICBpZiAoY2h1bmsuaXNOZXcgfHwgIWNodW5rLnZpZXcpIHtcclxuICAgICAgICAgICAgdmlldyA9IHRoaXMubG9hZFZpZXcoY2h1bmsucGFnZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHVpID0+IHRoaXMuY3JlYXRlVmlldyh1aSwgbmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmlldyA9IFByb21pc2UucmVzb2x2ZShjaHVuay52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVWaWV3KHVpLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuICAgICAgICBpZiAodHlwZW9mIHVpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEFwcEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHsgYXBwOiB0aGlzLCBuYW1lLCByb3V0ZXI6IFN1YlJvdXRlciB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh0aGlzLCB7IG5hbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBmYWN0b3J5IGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICAgICAgdWkgPSB1aSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHVpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVUkgb2JqZWN0XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyBKZXRWaWV3UmF3KHRoaXMsIHsgbmFtZSwgdWkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBzaG93IHZpZXcgcGF0aFxyXG4gICAgc2hvdyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5fY29udGFpbmVyLCAodXJsIHx8IHRoaXMuY29uZmlnLnN0YXJ0KSk7XHJcbiAgICB9XHJcbiAgICAvLyBldmVudCBoZWxwZXJzXHJcbiAgICB0cmlnZ2VyKG5hbWUsIC4uLnJlc3QpIHtcclxuICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgfVxyXG4gICAgYXBwbHkobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJpeC5iaW5kKGZ1bmN0aW9uICguLi5yZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbihuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudChuYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLCBudWxsLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IobmFtZSwgZXIpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBlcik7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6ZXJyb3JcIiwgZXIpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyW2ldIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGVyW2ldLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihcIk1vZHVsZSBidWlsZCBmYWlsZWRcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFx4MWJcXFtbMC05O10qbS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHByZSBzdHlsZT0nZm9udC1zaXplOjE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNlYzY4NzM7IGNvbG9yOiAjMDAwOyBwYWRkaW5nOjEwcHg7Jz4ke3RleHR9PC9wcmU+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCI8YnI+PGJyPkNoZWNrIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlsc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndlYml4Lm1lc3NhZ2UoeyB0eXBlOiBcImVycm9yXCIsIHRleHQ6IHRleHQsIGV4cGlyZTogLTEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICB9XHJcbiAgICAvLyByZW5kZXJzIHRvcCB2aWV3XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID9cclxuICAgICAgICAgICAgdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOlxyXG4gICAgICAgICAgICAocm9vdCB8fCBkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICBjb25zdCBmaXJzdEluaXQgPSAhdGhpcy4kcm91dGVyO1xyXG4gICAgICAgIGxldCBwYXRoID0gbnVsbDtcclxuICAgICAgICBpZiAoZmlyc3RJbml0KSB7XHJcbiAgICAgICAgICAgIGlmIChfb25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5hdHRhY2hFdmVudChcIm9uQ2xpY2tcIiwgZSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgICAgICAgICBfb25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50ID0gdGhpcy5fZmlyc3Rfc3RhcnQodXJsKTtcclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudC5yb3V0ZS5saW5rUm91dGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC5zcGxpdCgpLnJvdXRlLnBhdGggfHwgdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRTdWJWaWV3KCk7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuX3N1YlNlZ21lbnQ7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSBzZWdtZW50LnNob3cocGF0aCwgdG9wKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmNyZWF0ZUZyb21VUkwoc2VnbWVudC5jdXJyZW50KCksIHRvcCkpXHJcbiAgICAgICAgICAgIC50aGVuKHZpZXcgPT4gdmlldy5yZW5kZXIocm9vdCwgc2VnbWVudCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJhc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0aGlzLnJlYWR5LnRoZW4oKCkgPT4gcmVhZHkpO1xyXG4gICAgICAgIHJldHVybiByZWFkeTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuX3N1YlNlZ21lbnQuY3VycmVudCgpLnZpZXc7XHJcbiAgICAgICAgICAgIGlmICh2aWV3KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSmV0Vmlldyh0aGlzLCB7fSk7XHJcbiAgICB9XHJcbiAgICBfZmlyc3Rfc3RhcnQocm91dGUpIHtcclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gcm91dGU7XHJcbiAgICAgICAgY29uc3QgY2IgPSAoYSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhhKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIgPSBuZXcgKHRoaXMuY29uZmlnLnJvdXRlcikoY2IsIHRoaXMuY29uZmlnLCB0aGlzKTtcclxuICAgICAgICAvLyBzdGFydCBhbmltYXRpb24gZm9yIHRvcC1sZXZlbCBhcHBcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5ICYmIHRoaXMuY29uZmlnLmFuaW1hdGlvbiAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLnJlbW92ZUNzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBcIik7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyBpZiBubyB1cmwgZGVmaW5lZCwgY2hlY2sgcm91dGVyIGZpcnN0XHJcbiAgICAgICAgICAgIGxldCB1cmxTdHJpbmcgPSB0aGlzLiRyb3V0ZXIuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmICghdXJsU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxTdHJpbmcgPSB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQodXJsU3RyaW5nLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh1cmxTdHJpbmcsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICByb3V0ZS5jdXJyZW50KCkudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUuc3BsaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHRoaXMuY29uZmlnLnN0YXJ0LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICB9XHJcbiAgICAvLyBlcnJvciBkdXJpbmcgdmlldyByZXNvbHZpbmdcclxuICAgIF9sb2FkRXJyb3IodXJsLCBlcnIpIHtcclxuICAgICAgICB0aGlzLmVycm9yKFwiYXBwOmVycm9yOnJlc29sdmVcIiwgW2VyciwgdXJsXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdGVtcGxhdGU6IFwiIFwiIH07XHJcbiAgICB9XHJcbiAgICBhZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBvYmouJHN1YnZpZXcgIT09IHRydWUgPyBvYmouJHN1YnZpZXcgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYmoubmFtZSB8fCAodXJsID8gdGhpcy53ZWJpeC51aWQoKSA6IFwiZGVmYXVsdFwiKTtcclxuICAgICAgICB0YXJnZXQuaWQgPSBvYmouaWQgfHwgXCJzXCIgKyB0aGlzLndlYml4LnVpZCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBjb25maWdbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgIGlkOiB0YXJnZXQuaWQsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgYnJhbmNoOiBvYmouYnJhbmNoLFxyXG4gICAgICAgICAgICBwb3B1cDogb2JqLnBvcHVwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdmlldy5wb3B1cCA/IG51bGwgOiB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSGFzaFJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgdGhpcy5fZGV0ZWN0UHJlZml4KCk7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4gdGhpcy5jYih0aGlzLmdldCgpKTtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzW2tleV0gPT09IGNvbXBhcmVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldCgpICE9PSBwYXRoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLnByZWZpeCArIHRoaXMuc3VmaXggKyBwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLl9nZXRSYXcoKS5yZXBsYWNlKHRoaXMucHJlZml4LCBcIlwiKS5yZXBsYWNlKHRoaXMuc3VmaXgsIFwiXCIpO1xyXG4gICAgICAgIHBhdGggPSBwYXRoICE9PSBcIi9cIiA/IHBhdGggOiBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZy5yb3V0ZXNbY29tcGFyZVswXV07XHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIC8vIHVzZSBcIiMhXCIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBjb25zdCBzdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeDtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gXCIjXCIgKyAoKHR5cGVvZiBzdWZpeCA9PT0gXCJ1bmRlZmluZWRcIikgPyBcIiFcIiA6IHN1Zml4KTtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIsIDIpWzBdO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxuXG5sZXQgaXNQYXRjaGVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHBhdGNoKHcpIHtcclxuICAgIGlmIChpc1BhdGNoZWQgfHwgIXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpc1BhdGNoZWQgPSB0cnVlO1xyXG4gICAgLy8gY3VzdG9tIHByb21pc2UgZm9yIElFOFxyXG4gICAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gICAgaWYgKCF3aW4uUHJvbWlzZSkge1xyXG4gICAgICAgIHdpbi5Qcm9taXNlID0gdy5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmVyc2lvbiA9IHcudmVyc2lvbi5zcGxpdChcIi5cIik7XHJcbiAgICAvLyB3aWxsIGJlIGZpeGVkIGluIHdlYml4IDUuM1xyXG4gICAgaWYgKHZlcnNpb25bMF0gKiAxMCArIHZlcnNpb25bMV0gKiAxIDwgNTMpIHtcclxuICAgICAgICB3LnVpLmZyZWV6ZSA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkIGJlY2F1c2Ugd2ViaXggamV0IDUuMCBjYW4ndCBoYW5kbGUgcmVzaXplIG9mIHNjcm9sbHZpZXcgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIHcudWkuJGZyZWV6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKHNvbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb21lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gYWRkaW5nIHZpZXdzIGFzIGNsYXNzZXNcclxuICAgIGNvbnN0IGJhc2VBZGQgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLmFkZFZpZXc7XHJcbiAgICBjb25zdCBiYXNlUmVtb3ZlID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5yZW1vdmVWaWV3O1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIGFkZFZpZXcodmlldywgaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBsb2dpYyBvbmx5IGZvciB3aWRnZXRzIGluc2lkZSBvZiBqZXQtdmlld1xyXG4gICAgICAgICAgICAvLyBpZ25vcmUgY2FzZSB3aGVuIGFkZFZpZXcgdXNlZCB3aXRoIGFscmVhZHkgaW5pdGlhbGl6ZWQgd2lkZ2V0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCAmJiAhdmlldy5xdWVyeVZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGp2aWV3ID0gdGhpcy4kc2NvcGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0ge307XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0ganZpZXcuYXBwLmNvcHlDb25maWcodmlldywge30sIHN1YnMpO1xyXG4gICAgICAgICAgICAgICAgYmFzZUFkZC5hcHBseSh0aGlzLCBbdmlldywgaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdmlldy5fcmVuZGVyRnJhbWUoa2V5LCBzdWJzW2tleV0sIG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdmlldy5fc3Vic1trZXldID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZUFkZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVWaWV3KCkge1xyXG4gICAgICAgICAgICBiYXNlUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHRoaXMuJHNjb3BlLl9zdWJzO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWxsIHN1Yi12aWV3cywgZGVzdHJveSBhbmQgY2xlYW4gdGhlIHJlbW92ZWQgb25lXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXcuJCQodGVzdC5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdy5leHRlbmQody51aS5sYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgdy5leHRlbmQody51aS5iYXNlbGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIC8vIHdyYXBwZXIgZm9yIHVzaW5nIEpldCBBcHBzIGFzIHZpZXdzXHJcbiAgICB3LnByb3RvVUkoe1xyXG4gICAgICAgIG5hbWU6IFwiamV0YXBwXCIsXHJcbiAgICAgICAgJGluaXQoY2ZnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcCA9IG5ldyB0aGlzLmFwcChjZmcpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHcudWlkKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2ZnLmJvZHkgPSB7IGlkIH07XHJcbiAgICAgICAgICAgIHRoaXMuJHJlYWR5LnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnJlbmRlcih7IGlkIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGFwcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuJGFwcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW4gPT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gb3JpZ2luLmJpbmQodGhpcy4kYXBwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHcudWkucHJveHkpO1xyXG59XG5cbmNsYXNzIEpldEFwcCBleHRlbmRzIEpldEFwcEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLnJvdXRlciA9IGNvbmZpZy5yb3V0ZXIgfHwgSGFzaFJvdXRlcjtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHBhdGNoKHRoaXMud2ViaXgpO1xyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuL2csIFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gcmVxdWlyZShcImpldC12aWV3cy9cIiArIHVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3RvcmVSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gY29uZmlnLnN0b3JhZ2UgfHwgYXBwLndlYml4LnN0b3JhZ2Uuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLm5hbWUgPSAoY29uZmlnLnN0b3JlTmFtZSB8fCBjb25maWcuaWQgKyBcIjpyb3V0ZVwiKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnB1dCh0aGlzLm5hbWUsIHBhdGgpO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgVXJsUm91dGVyIGV4dGVuZHMgSGFzaFJvdXRlciB7XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4IHx8IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBFbXB0eVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgXyRjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVW5sb2FkR3VhcmQoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKF8kdXJsLCBwb2ludCwgcHJvbWlzZSkge1xyXG4gICAgICAgIGlmIChwb2ludCA9PT0gdmlldyB8fCBwb2ludC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBjb25maWcoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IFByb21pc2UucmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBwcm9taXNlLmNvbmZpcm0udGhlbigoKSA9PiByZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuLy8gICAgIChjKSAyMDEyLTIwMTggQWlyYm5iLCBJbmMuXG5cbi8vIHZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbmZ1bmN0aW9uIGhhcyhzdG9yZSwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RvcmUsIGtleSk7XG59XG4vLyB2YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaGFuZGxlciwgY29udGV4dCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcyhvYmosIGtleSkpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCgoY29udGV4dCB8fCBvYmopLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuLy8gdmFyIHRyaW0gPSByZXF1aXJlKCdzdHJpbmcucHJvdG90eXBlLnRyaW0nKTtcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbn1cbi8vIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIG1lc3NhZ2U7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyB9IGNhdGNoICh4KSB7fVxufVxuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBzcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQ7XG5cbi8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4vLyBUaGUgc3RyaW5nIHRoYXQgc2VwYXJhdGVzIHRoZSBkaWZmZXJlbnQgcGhyYXNlIHBvc3NpYmlsaXRpZXMuXG52YXIgZGVsaW1pdGVyID0gJ3x8fHwnO1xuXG52YXIgcnVzc2lhblBsdXJhbEdyb3VwcyA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciBlbmQgPSBuICUgMTA7XG4gIGlmIChuICE9PSAxMSAmJiBlbmQgPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgIShuID49IDEyICYmIG4gPD0gMTQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDI7XG59O1xuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG52YXIgcGx1cmFsVHlwZXMgPSB7XG4gIGFyYWJpYzogZnVuY3Rpb24gKG4pIHtcbiAgICAvLyBodHRwOi8vd3d3LmFyYWJleWVzLm9yZy9QbHVyYWxfRm9ybXNcbiAgICBpZiAobiA8IDMpIHsgcmV0dXJuIG47IH1cbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPj0gMyAmJiBsYXN0VHdvIDw9IDEwKSByZXR1cm4gMztcbiAgICByZXR1cm4gbGFzdFR3byA+PSAxMSA/IDQgOiA1O1xuICB9LFxuICBib3NuaWFuX3NlcmJpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGNoaW5lc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gIGNyb2F0aWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBmcmVuY2g6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuID4gMSA/IDEgOiAwOyB9LFxuICBnZXJtYW46IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuICE9PSAxID8gMSA6IDA7IH0sXG4gIHJ1c3NpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGxpdGh1YW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gJSAxMCA9PT0gMSAmJiBuICUgMTAwICE9PSAxMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gOSAmJiAobiAlIDEwMCA8IDExIHx8IG4gJSAxMDAgPiAxOSkgPyAxIDogMjtcbiAgfSxcbiAgY3plY2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gKG4gPj0gMiAmJiBuIDw9IDQpID8gMSA6IDI7XG4gIH0sXG4gIHBvbGlzaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHZhciBlbmQgPSBuICUgMTA7XG4gICAgcmV0dXJuIDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjtcbiAgfSxcbiAgaWNlbGFuZGljOiBmdW5jdGlvbiAobikgeyByZXR1cm4gKG4gJSAxMCAhPT0gMSB8fCBuICUgMTAwID09PSAxMSkgPyAxIDogMDsgfSxcbiAgc2xvdmVuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA9PT0gMSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDMgfHwgbGFzdFR3byA9PT0gNCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIHJldHVybiAzO1xuICB9XG59O1xuXG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHRvIGluZGl2aWR1YWwgbGFuZ3VhZ2UgY29kZXMvbG9jYWxlcy5cbi8vIFdpbGwgbG9vayB1cCBiYXNlZCBvbiBleGFjdCBtYXRjaCwgaWYgbm90IGZvdW5kIGFuZCBpdCdzIGEgbG9jYWxlIHdpbGwgcGFyc2UgdGhlIGxvY2FsZVxuLy8gZm9yIGxhbmd1YWdlIGNvZGUsIGFuZCBpZiB0aGF0IGRvZXMgbm90IGV4aXN0IHdpbGwgZGVmYXVsdCB0byAnZW4nXG52YXIgcGx1cmFsVHlwZVRvTGFuZ3VhZ2VzID0ge1xuICBhcmFiaWM6IFsnYXInXSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBbJ2JzLUxhdG4tQkEnLCAnYnMtQ3lybC1CQScsICdzcmwtUlMnLCAnc3ItUlMnXSxcbiAgY2hpbmVzZTogWydpZCcsICdpZC1JRCcsICdqYScsICdrbycsICdrby1LUicsICdsbycsICdtcycsICd0aCcsICd0aC1USCcsICd6aCddLFxuICBjcm9hdGlhbjogWydocicsICdoci1IUiddLFxuICBnZXJtYW46IFsnZmEnLCAnZGEnLCAnZGUnLCAnZW4nLCAnZXMnLCAnZmknLCAnZWwnLCAnaGUnLCAnaGktSU4nLCAnaHUnLCAnaHUtSFUnLCAnaXQnLCAnbmwnLCAnbm8nLCAncHQnLCAnc3YnLCAndHInXSxcbiAgZnJlbmNoOiBbJ2ZyJywgJ3RsJywgJ3B0LWJyJ10sXG4gIHJ1c3NpYW46IFsncnUnLCAncnUtUlUnXSxcbiAgbGl0aHVhbmlhbjogWydsdCddLFxuICBjemVjaDogWydjcycsICdjcy1DWicsICdzayddLFxuICBwb2xpc2g6IFsncGwnXSxcbiAgaWNlbGFuZGljOiBbJ2lzJ10sXG4gIHNsb3ZlbmlhbjogWydzbC1TTCddXG59O1xuXG5mdW5jdGlvbiBsYW5nVG9UeXBlTWFwKG1hcHBpbmcpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3JFYWNoKG1hcHBpbmcsIGZ1bmN0aW9uIChsYW5ncywgdHlwZSkge1xuICAgIGZvckVhY2gobGFuZ3MsIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICByZXRbbGFuZ10gPSB0eXBlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZU5hbWUobG9jYWxlKSB7XG4gIHZhciBsYW5nVG9QbHVyYWxUeXBlID0gbGFuZ1RvVHlwZU1hcChwbHVyYWxUeXBlVG9MYW5ndWFnZXMpO1xuICByZXR1cm4gbGFuZ1RvUGx1cmFsVHlwZVtsb2NhbGVdXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZVtzcGxpdC5jYWxsKGxvY2FsZSwgLy0vLCAxKVswXV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlLmVuO1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlSW5kZXgobG9jYWxlLCBjb3VudCkge1xuICByZXR1cm4gcGx1cmFsVHlwZXNbcGx1cmFsVHlwZU5hbWUobG9jYWxlKV0oY291bnQpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGUodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cykge1xuICB2YXIgcHJlZml4ID0gKG9wdHMgJiYgb3B0cy5wcmVmaXgpIHx8ICcleyc7XG4gIHZhciBzdWZmaXggPSAob3B0cyAmJiBvcHRzLnN1ZmZpeCkgfHwgJ30nO1xuXG4gIGlmIChwcmVmaXggPT09IGRlbGltaXRlciB8fCBzdWZmaXggPT09IGRlbGltaXRlcikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIicgKyBkZWxpbWl0ZXIgKyAnXCIgdG9rZW4gaXMgcmVzZXJ2ZWQgZm9yIHBsdXJhbGl6YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKGVzY2FwZShwcmVmaXgpICsgJyguKj8pJyArIGVzY2FwZShzdWZmaXgpLCAnZycpO1xufVxuXG52YXIgZG9sbGFyUmVnZXggPSAvXFwkL2c7XG52YXIgZG9sbGFyQmlsbHNZYWxsID0gJyQkJztcbnZhciBkZWZhdWx0VG9rZW5SZWdleCA9IC8lXFx7KC4qPylcXH0vZztcblxuLy8gIyMjIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSlcbi8vXG4vLyBUYWtlcyBhIHBocmFzZSBzdHJpbmcgYW5kIHRyYW5zZm9ybXMgaXQgYnkgY2hvb3NpbmcgdGhlIGNvcnJlY3Rcbi8vIHBsdXJhbCBmb3JtIGFuZCBpbnRlcnBvbGF0aW5nIGl0LlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJ0hlbGxvLCAle25hbWV9IScsIHtuYW1lOiAnU3Bpa2UnfSk7XG4vLyAgICAgLy8gXCJIZWxsbywgU3Bpa2UhXCJcbi8vXG4vLyBUaGUgY29ycmVjdCBwbHVyYWwgZm9ybSBpcyBzZWxlY3RlZCBpZiBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50XG4vLyBpcyBzZXQuIFlvdSBjYW4gcGFzcyBpbiBhIG51bWJlciBpbnN0ZWFkIG9mIGFuIE9iamVjdCBhcyBgc3Vic3RpdHV0aW9uc2Bcbi8vIGFzIGEgc2hvcnRjdXQgZm9yIGBzbWFydF9jb3VudGAuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMX0sICdlbicpO1xuLy8gICAgIC8vIFwiMSBuZXcgbWVzc2FnZVwiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMn0sICdlbicpO1xuLy8gICAgIC8vIFwiMiBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCA1LCAnZW4nKTtcbi8vICAgICAvLyBcIjUgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyBZb3Ugc2hvdWxkIHBhc3MgaW4gYSB0aGlyZCBhcmd1bWVudCwgdGhlIGxvY2FsZSwgdG8gc3BlY2lmeSB0aGUgY29ycmVjdCBwbHVyYWwgdHlwZS5cbi8vIEl0IGRlZmF1bHRzIHRvIGAnZW4nYCB3aXRoIDIgcGx1cmFsIGZvcm1zLlxuZnVuY3Rpb24gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlLCB0b2tlblJlZ2V4KSB7XG4gIGlmICh0eXBlb2YgcGhyYXNlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BvbHlnbG90LnRyYW5zZm9ybVBocmFzZSBleHBlY3RzIGFyZ3VtZW50ICMxIHRvIGJlIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHN1YnN0aXR1dGlvbnMgPT0gbnVsbCkge1xuICAgIHJldHVybiBwaHJhc2U7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gcGhyYXNlO1xuICB2YXIgaW50ZXJwb2xhdGlvblJlZ2V4ID0gdG9rZW5SZWdleCB8fCBkZWZhdWx0VG9rZW5SZWdleDtcblxuICAvLyBhbGxvdyBudW1iZXIgYXMgYSBwbHVyYWxpemF0aW9uIHNob3J0Y3V0XG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHN1YnN0aXR1dGlvbnMgPT09ICdudW1iZXInID8geyBzbWFydF9jb3VudDogc3Vic3RpdHV0aW9ucyB9IDogc3Vic3RpdHV0aW9ucztcblxuICAvLyBTZWxlY3QgcGx1cmFsIGZvcm06IGJhc2VkIG9uIGEgcGhyYXNlIHRleHQgdGhhdCBjb250YWlucyBgbmBcbiAgLy8gcGx1cmFsIGZvcm1zIHNlcGFyYXRlZCBieSBgZGVsaW1pdGVyYCwgYSBgbG9jYWxlYCwgYW5kIGEgYHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRgLFxuICAvLyBjaG9vc2UgdGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0uIFRoaXMgaXMgb25seSBkb25lIGlmIGBjb3VudGAgaXMgc2V0LlxuICBpZiAob3B0aW9ucy5zbWFydF9jb3VudCAhPSBudWxsICYmIHJlc3VsdCkge1xuICAgIHZhciB0ZXh0cyA9IHNwbGl0LmNhbGwocmVzdWx0LCBkZWxpbWl0ZXIpO1xuICAgIHJlc3VsdCA9IHRyaW0odGV4dHNbcGx1cmFsVHlwZUluZGV4KGxvY2FsZSB8fCAnZW4nLCBvcHRpb25zLnNtYXJ0X2NvdW50KV0gfHwgdGV4dHNbMF0pO1xuICB9XG5cbiAgLy8gSW50ZXJwb2xhdGU6IENyZWF0ZXMgYSBgUmVnRXhwYCBvYmplY3QgZm9yIGVhY2ggaW50ZXJwb2xhdGlvbiBwbGFjZWhvbGRlci5cbiAgcmVzdWx0ID0gcmVwbGFjZS5jYWxsKHJlc3VsdCwgaW50ZXJwb2xhdGlvblJlZ2V4LCBmdW5jdGlvbiAoZXhwcmVzc2lvbiwgYXJndW1lbnQpIHtcbiAgICBpZiAoIWhhcyhvcHRpb25zLCBhcmd1bWVudCkgfHwgb3B0aW9uc1thcmd1bWVudF0gPT0gbnVsbCkgeyByZXR1cm4gZXhwcmVzc2lvbjsgfVxuICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLlxuICAgIHJldHVybiByZXBsYWNlLmNhbGwob3B0aW9uc1thcmd1bWVudF0sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAjIyMgUG9seWdsb3QgY2xhc3MgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFBvbHlnbG90KG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbiAgdGhpcy5leHRlbmQob3B0cy5waHJhc2VzIHx8IHt9KTtcbiAgdGhpcy5jdXJyZW50TG9jYWxlID0gb3B0cy5sb2NhbGUgfHwgJ2VuJztcbiAgdmFyIGFsbG93TWlzc2luZyA9IG9wdHMuYWxsb3dNaXNzaW5nID8gdHJhbnNmb3JtUGhyYXNlIDogbnVsbDtcbiAgdGhpcy5vbk1pc3NpbmdLZXkgPSB0eXBlb2Ygb3B0cy5vbk1pc3NpbmdLZXkgPT09ICdmdW5jdGlvbicgPyBvcHRzLm9uTWlzc2luZ0tleSA6IGFsbG93TWlzc2luZztcbiAgdGhpcy53YXJuID0gb3B0cy53YXJuIHx8IHdhcm47XG4gIHRoaXMudG9rZW5SZWdleCA9IGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cy5pbnRlcnBvbGF0aW9uKTtcbn1cblxuLy8gIyMjIHBvbHlnbG90LmxvY2FsZShbbG9jYWxlXSlcbi8vXG4vLyBHZXQgb3Igc2V0IGxvY2FsZS4gSW50ZXJuYWxseSwgUG9seWdsb3Qgb25seSB1c2VzIGxvY2FsZSBmb3IgcGx1cmFsaXphdGlvbi5cblBvbHlnbG90LnByb3RvdHlwZS5sb2NhbGUgPSBmdW5jdGlvbiAobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHRoaXMuY3VycmVudExvY2FsZSA9IG5ld0xvY2FsZTtcbiAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5leHRlbmQocGhyYXNlcylcbi8vXG4vLyBVc2UgYGV4dGVuZGAgdG8gdGVsbCBQb2x5Z2xvdCBob3cgdG8gdHJhbnNsYXRlIGEgZ2l2ZW4ga2V5LlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIGtleSBjYW4gYmUgYW55IHN0cmluZy4gIEZlZWwgZnJlZSB0byBjYWxsIGBleHRlbmRgIG11bHRpcGxlIHRpbWVzO1xuLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbi8vIHVudG91Y2hlZC5cbi8vXG4vLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4vLyBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZSBuZXN0ZWQga2V5cyBjb25jYXRlbmF0ZWQgdXNpbmcgZG90IG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJuYXZcIjoge1xuLy8gICAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbi8vICAgICAgICAgXCJzaWRlYmFyXCI6IHtcbi8vICAgICAgICAgICBcIndlbGNvbWVcIjogXCJXZWxjb21lXCJcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfScsXG4vLyAgICAgLy8gICAnbmF2LnNpZGViYXIud2VsY29tZSc6ICdXZWxjb21lJ1xuLy8gICAgIC8vIH1cbi8vXG4vLyBgZXh0ZW5kYCBhY2NlcHRzIGFuIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCwgYHByZWZpeGAsIHdoaWNoIGNhbiBiZSB1c2VkXG4vLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3Rcbi8vIG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSwgXCJuYXZcIik7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9J1xuLy8gICAgIC8vIH1cbi8vXG4vLyBUaGlzIGZlYXR1cmUgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIHN1cHBvcnQgbmVzdGVkIHBocmFzZSBvYmplY3RzLlxuUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZXh0ZW5kKHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldID0gcGhyYXNlO1xuICAgIH1cbiAgfSwgdGhpcyk7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QudW5zZXQocGhyYXNlcylcbi8vIFVzZSBgdW5zZXRgIHRvIHNlbGVjdGl2ZWx5IHJlbW92ZSBrZXlzIGZyb20gYSBwb2x5Z2xvdCBpbnN0YW5jZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudW5zZXQoXCJzb21lX2tleVwiKTtcbi8vICAgICBwb2x5Z2xvdC51bnNldCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUgdW5zZXQgbWV0aG9kIGNhbiB0YWtlIGVpdGhlciBhIHN0cmluZyAoZm9yIHRoZSBrZXkpLCBvciBhbiBvYmplY3QgaGFzaCB3aXRoXG4vLyB0aGUga2V5cyB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIHVuc2V0LlxuUG9seWdsb3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBtb3JlUGhyYXNlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBkZWxldGUgdGhpcy5waHJhc2VzW21vcmVQaHJhc2VzXTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLnVuc2V0KHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV07XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5jbGVhcigpXG4vL1xuLy8gQ2xlYXJzIGFsbCBwaHJhc2VzLiBVc2VmdWwgZm9yIHNwZWNpYWwgY2FzZXMsIHN1Y2ggYXMgZnJlZWluZ1xuLy8gdXAgbWVtb3J5IGlmIHlvdSBoYXZlIGxvdHMgb2YgcGhyYXNlcyBidXQgbm8gbG9uZ2VyIG5lZWQgdG9cbi8vIHBlcmZvcm0gYW55IHRyYW5zbGF0aW9uLiBBbHNvIHVzZWQgaW50ZXJuYWxseSBieSBgcmVwbGFjZWAuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbi8vXG4vLyBDb21wbGV0ZWx5IHJlcGxhY2UgdGhlIGV4aXN0aW5nIHBocmFzZXMgd2l0aCBhIG5ldyBzZXQgb2YgcGhyYXNlcy5cbi8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuLy8gY2lyY3Vtc3RhbmNlcywgeW91IG1heSB3YW50IHRvIG1ha2Ugc3VyZSBubyBvbGQgcGhyYXNlcyBhcmUgbHlpbmcgYXJvdW5kLlxuUG9seWdsb3QucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3UGhyYXNlcykge1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMuZXh0ZW5kKG5ld1BocmFzZXMpO1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QudChrZXksIG9wdGlvbnMpXG4vL1xuLy8gVGhlIG1vc3QtdXNlZCBtZXRob2QuIFByb3ZpZGUgYSBrZXksIGFuZCBgdGAgd2lsbCByZXR1cm4gdGhlXG4vLyBwaHJhc2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb1wiKTtcbi8vICAgICA9PiBcIkhlbGxvXCJcbi8vXG4vLyBUaGUgcGhyYXNlIHZhbHVlIGlzIHByb3ZpZGVkIGZpcnN0IGJ5IGEgY2FsbCB0byBgcG9seWdsb3QuZXh0ZW5kKClgIG9yXG4vLyBgcG9seWdsb3QucmVwbGFjZSgpYC5cbi8vXG4vLyBQYXNzIGluIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHBlcmZvcm0gaW50ZXJwb2xhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvX25hbWVcIiwge25hbWU6IFwiU3Bpa2VcIn0pO1xuLy8gICAgID0+IFwiSGVsbG8sIFNwaWtlXCJcbi8vXG4vLyBJZiB5b3UgbGlrZSwgeW91IGNhbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBpbiBjYXNlIHRoZSBwaHJhc2UgaXMgbWlzc2luZy5cbi8vIFVzZSB0aGUgc3BlY2lhbCBvcHRpb24ga2V5IFwiX1wiIHRvIHNwZWNpZnkgYSBkZWZhdWx0LlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaV9saWtlX3RvX3dyaXRlX2luX2xhbmd1YWdlXCIsIHtcbi8vICAgICAgIF86IFwiSSBsaWtlIHRvIHdyaXRlIGluICV7bGFuZ3VhZ2V9LlwiLFxuLy8gICAgICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiXG4vLyAgICAgfSk7XG4vLyAgICAgPT4gXCJJIGxpa2UgdG8gd3JpdGUgaW4gSmF2YVNjcmlwdC5cIlxuLy9cblBvbHlnbG90LnByb3RvdHlwZS50ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICB2YXIgcGhyYXNlLCByZXN1bHQ7XG4gIHZhciBvcHRzID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICBpZiAodHlwZW9mIHRoaXMucGhyYXNlc1trZXldID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IHRoaXMucGhyYXNlc1trZXldO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLl8gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gb3B0cy5fO1xuICB9IGVsc2UgaWYgKHRoaXMub25NaXNzaW5nS2V5KSB7XG4gICAgdmFyIG9uTWlzc2luZ0tleSA9IHRoaXMub25NaXNzaW5nS2V5O1xuICAgIHJlc3VsdCA9IG9uTWlzc2luZ0tleShrZXksIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhcm4oJ01pc3NpbmcgdHJhbnNsYXRpb24gZm9yIGtleTogXCInICsga2V5ICsgJ1wiJyk7XG4gICAgcmVzdWx0ID0ga2V5O1xuICB9XG4gIGlmICh0eXBlb2YgcGhyYXNlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QuaGFzKGtleSlcbi8vXG4vLyBDaGVjayBpZiBwb2x5Z2xvdCBoYXMgYSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5XG5Qb2x5Z2xvdC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gaGFzKHRoaXMucGhyYXNlcywga2V5KTtcbn07XG5cbi8vIGV4cG9ydCB0cmFuc2Zvcm1QaHJhc2VcblBvbHlnbG90LnRyYW5zZm9ybVBocmFzZSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSkge1xuICByZXR1cm4gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKTtcbn07XG5cbnZhciB3ZWJpeFBvbHlnbG90ID0gUG9seWdsb3Q7XG5cbmZ1bmN0aW9uIExvY2FsZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCBsYW5nID0gc3RvcmFnZSA/IChzdG9yYWdlLmdldChcImxhbmdcIikgfHwgXCJlblwiKSA6IChjb25maWcubGFuZyB8fCBcImVuXCIpO1xyXG4gICAgZnVuY3Rpb24gc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KSB7XHJcbiAgICAgICAgaWYgKGRhdGEuX19lc01vZHVsZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwY29uZmlnID0geyBwaHJhc2VzOiBkYXRhIH07XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wb2x5Z2xvdCkge1xyXG4gICAgICAgICAgICBhcHAud2ViaXguZXh0ZW5kKHBjb25maWcsIGNvbmZpZy5wb2x5Z2xvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbHkgPSBzZXJ2aWNlLnBvbHlnbG90ID0gbmV3IHdlYml4UG9seWdsb3QocGNvbmZpZyk7XHJcbiAgICAgICAgcG9seS5sb2NhbGUobmFtZSk7XHJcbiAgICAgICAgc2VydmljZS5fID0gYXBwLndlYml4LmJpbmQocG9seS50LCBwb2x5KTtcclxuICAgICAgICBsYW5nID0gbmFtZTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlLnB1dChcImxhbmdcIiwgbGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcud2ViaXgpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jTmFtZSA9IGNvbmZpZy53ZWJpeFtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGxvY05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGFwcC53ZWJpeC5pMThuLnNldExvY2FsZShsb2NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TGFuZygpIHsgcmV0dXJuIGxhbmc7IH1cclxuICAgIGZ1bmN0aW9uIHNldExhbmcobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgLy8gaWdub3JlIHNldExhbmcgaWYgbG9hZGluZyBieSBwYXRoIGlzIGRpc2FibGVkXHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhdGggPSAoY29uZmlnLnBhdGggPyBjb25maWcucGF0aCArIFwiL1wiIDogXCJcIikgKyBuYW1lO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiamV0LWxvY2FsZXMvXCIgKyBwYXRoKTtcclxuICAgICAgICBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRMYW5nLCBzZXRMYW5nLCBzZXRMYW5nRGF0YSwgXzogbnVsbCwgcG9seWdsb3Q6IG51bGxcclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcImxvY2FsZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNldExhbmcobGFuZywgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gc2hvdyh2aWV3LCBjb25maWcsIHZhbHVlKSB7XHJcbiAgICBpZiAoY29uZmlnLnVybHMpIHtcclxuICAgICAgICB2YWx1ZSA9IGNvbmZpZy51cmxzW3ZhbHVlXSB8fCB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgIHZhbHVlID0geyBbY29uZmlnLnBhcmFtXTogdmFsdWUgfTtcclxuICAgIH1cclxuICAgIHZpZXcuc2hvdyh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gTWVudShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3QgZnJhbWUgPSB2aWV3LmdldFN1YlZpZXdJbmZvKCkucGFyZW50O1xyXG4gICAgY29uc3QgdWkgPSB2aWV3LiQkKGNvbmZpZy5pZCB8fCBjb25maWcpO1xyXG4gICAgbGV0IHNpbGVudCA9IGZhbHNlO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCB0aGlzLmdldFZhbHVlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmFmdGVyc2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLmdldFNlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdWkuZ2V0U2VsZWN0ZWRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6cm91dGVgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICAgICAgbmFtZSA9IHZpZXcuZ2V0UGFyYW0oY29uZmlnLnBhcmFtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmcmFtZS5nZXRVcmwoKVsxXTtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBzZWdtZW50LnBhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgc2lsZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlICYmIHVpLmdldFZhbHVlKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNldFZhbHVlKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnNlbGVjdCAmJiB1aS5leGlzdHMobmFtZSkgJiYgdWkuZ2V0U2VsZWN0ZWRJZCgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZWxlY3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2lsZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuY29uc3QgYmFzZWljb25zID0ge1xyXG4gICAgZ29vZDogXCJjaGVja1wiLFxyXG4gICAgZXJyb3I6IFwid2FybmluZ1wiLFxyXG4gICAgc2F2aW5nOiBcInJlZnJlc2ggZmEtc3BpblwiXHJcbn07XHJcbmNvbnN0IGJhc2V0ZXh0ID0ge1xyXG4gICAgZ29vZDogXCJPa1wiLFxyXG4gICAgZXJyb3I6IFwiRXJyb3JcIixcclxuICAgIHNhdmluZzogXCJDb25uZWN0aW5nLi4uXCJcclxufTtcclxuZnVuY3Rpb24gU3RhdHVzKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gXCJnb29kXCI7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IGlzZXJyb3IgPSBmYWxzZTtcclxuICAgIGxldCBleHBpcmVEZWxheSA9IGNvbmZpZy5leHBpcmU7XHJcbiAgICBpZiAoIWV4cGlyZURlbGF5ICYmIGV4cGlyZURlbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGV4cGlyZURlbGF5ID0gMjAwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHRleHRzID0gY29uZmlnLnRleHRzIHx8IGJhc2V0ZXh0O1xyXG4gICAgY29uc3QgaWNvbnMgPSBjb25maWcuaWNvbnMgfHwgYmFzZWljb25zO1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBjb25maWcgPSB7IHRhcmdldDogY29uZmlnIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBhcmVhID0gdmlldy4kJChjb25maWcudGFyZ2V0KTtcclxuICAgICAgICBpZiAoYXJlYSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PHNwYW4gY2xhc3M9J3dlYml4X2ljb24gZmEtXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zW3N0YXR1c10gKyBcIic+PC9zcGFuPiBcIiArIHRleHRzW3N0YXR1c10gKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZWEuc2V0SFRNTChjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZ29vZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJlcnJvclwiLCBlcnIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RhcnQocHJvbWlzZSkge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgc2V0U3RhdHVzKFwic2F2aW5nXCIpO1xyXG4gICAgICAgIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikge1xyXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oc3VjY2VzcywgZmFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaWRlU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZWZyZXNoKFwiIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobW9kZSwgZXJyKSB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInNhdmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFwic2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlzZXJyb3IgPSAobW9kZSA9PT0gXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBpc2Vycm9yID8gXCJlcnJvclwiIDogXCJnb29kXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5lcnJvcihcImFwcDplcnJvcjpzZXJ2ZXJcIiwgW2Vyci5yZXNwb25zZVRleHQgfHwgZXJyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlRGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlU3RhdHVzLCBleHBpcmVEZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJhY2soZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRwID0gYXBwLndlYml4LmRwKGRhdGEpO1xyXG4gICAgICAgIGlmIChkcCkge1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJEYXRhU2VuZFwiLCBzdGFydCk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVFcnJvclwiLCAoX2lkLCBfb2JqLCByZXNwb25zZSkgPT4gZmFpbChyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlXCIsIHN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwic3RhdHVzXCIsIHtcclxuICAgICAgICBnZXRTdGF0dXMsXHJcbiAgICAgICAgc2V0U3RhdHVzLFxyXG4gICAgICAgIHRyYWNrXHJcbiAgICB9KTtcclxuICAgIGlmIChjb25maWcucmVtb3RlKSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25SZW1vdGVDYWxsXCIsIHN0YXJ0KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuYWpheCkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uQmVmb3JlQWpheFwiLCAoX21vZGUsIF91cmwsIF9kYXRhLCBfcmVxdWVzdCwgX2hlYWRlcnMsIF9maWxlcywgcHJvbWlzZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuZGF0YSkge1xyXG4gICAgICAgIHRyYWNrKGNvbmZpZy5kYXRhKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBUaGVtZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCB0aGVtZSA9IHN0b3JhZ2UgP1xyXG4gICAgICAgIChzdG9yYWdlLmdldChcInRoZW1lXCIpIHx8IFwiZmxhdC1kZWZhdWx0XCIpXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICAoY29uZmlnLnRoZW1lIHx8IFwiZmxhdC1kZWZhdWx0XCIpO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRUaGVtZSgpIHsgcmV0dXJuIHRoZW1lOyB9LFxyXG4gICAgICAgIHNldFRoZW1lKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG5hbWUgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsbmFtZSA9PT0gbmFtZSB8fCBsbmFtZSA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXBwLndlYml4LnNraW4uc2V0KHBhcnRzWzBdKTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwucmVtb3ZlQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyB0aGVtZSk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLmFkZENzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgIHRoZW1lID0gbmFtZTtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwidGhlbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ0aGVtZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNlcnZpY2Uuc2V0VGhlbWUodGhlbWUsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIGNvcHlQYXJhbXMoZGF0YSwgdXJsLCByb3V0ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRhdGFbcm91dGVbaV1dID0gdXJsW2kgKyAxXSA/IHVybFtpICsgMV0ucGFnZSA6IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gVXJsUGFyYW0oYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlIHx8IGNvbmZpZztcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIHZpZXcub24oYXBwLCBcImFwcDp1cmxjaGFuZ2VcIiwgZnVuY3Rpb24gKHN1YnZpZXcsIHNlZ21lbnQpIHtcclxuICAgICAgICBpZiAodmlldyA9PT0gc3Vidmlldykge1xyXG4gICAgICAgICAgICBjb3B5UGFyYW1zKGRhdGEsIHNlZ21lbnQuc3VidXJsKCksIHJvdXRlKTtcclxuICAgICAgICAgICAgc2VnbWVudC5zaXplKHJvdXRlLmxlbmd0aCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb3MgPSB2aWV3LnNldFBhcmFtO1xyXG4gICAgY29uc3Qgb2cgPSB2aWV3LmdldFBhcmFtO1xyXG4gICAgdmlldy5zZXRQYXJhbSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgc2hvdykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm91dGUuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKFwiXCIsIHZhbHVlLCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9zLmNhbGwodGhpcywgbmFtZSwgdmFsdWUsIHNob3cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2aWV3LmdldFBhcmFtID0gZnVuY3Rpb24gKGtleSwgbW9kZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2cuY2FsbCh0aGlzLCBrZXksIG1vZGUpO1xyXG4gICAgfTtcclxuICAgIGNvcHlQYXJhbXMoZGF0YSwgdmlldy5nZXRVcmwoKSwgcm91dGUpO1xyXG59XG5cbmZ1bmN0aW9uIFVzZXIoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBsb2dpbiA9IGNvbmZpZy5sb2dpbiB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgbG9nb3V0ID0gY29uZmlnLmxvZ291dCB8fCBcIi9sb2dvdXRcIjtcclxuICAgIGNvbnN0IGFmdGVyTG9naW4gPSBjb25maWcuYWZ0ZXJMb2dpbiB8fCBhcHAuY29uZmlnLnN0YXJ0O1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dvdXQgPSBjb25maWcuYWZ0ZXJMb2dvdXQgfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IHBpbmcgPSBjb25maWcucGluZyB8fCA1ICogNjAgKiAxMDAwO1xyXG4gICAgY29uc3QgbW9kZWwgPSBjb25maWcubW9kZWw7XHJcbiAgICBsZXQgdXNlciA9IGNvbmZpZy51c2VyO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXR1cyhzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyICE9PSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5zdGF0dXMoKS5jYXRjaCgoKSA9PiBudWxsKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW4obmFtZSwgcGFzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9naW4obmFtZSwgcGFzcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dpblwiLCBbdXNlcl0pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnNob3coYWZ0ZXJMb2dpbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICB1c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ291dCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dvdXRcIiwgW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGNhbk5hdmlnYXRlKHVybCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gbG9nb3V0KSB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGFmdGVyTG9nb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1cmwgIT09IGxvZ2luICYmICFzZXJ2aWNlLmdldFN0YXR1cygpKSB7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGxvZ2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidXNlclwiLCBzZXJ2aWNlKTtcclxuICAgIGFwcC5hdHRhY2hFdmVudChgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKHVybCwgXyRyb290LCBvYmopIHtcclxuICAgICAgICBpZiAoY29uZmlnLnB1YmxpYyAmJiBjb25maWcucHVibGljKHVybCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBvYmouY29uZmlybSA9IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLnRoZW4oKCkgPT4gY2FuTmF2aWdhdGUodXJsLCBvYmopKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbk5hdmlnYXRlKHVybCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBpbmcpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKSwgcGluZyk7XHJcbiAgICB9XHJcbn1cblxuLypcclxuTUlUIExpY2Vuc2VcclxuQ29weXJpZ2h0IChjKSAyMDE5IFhCIFNvZnR3YXJlXHJcbiovXHJcbmxldCB3ZWJpeCA9IHdpbmRvdy53ZWJpeDtcclxuaWYgKHdlYml4KSB7XHJcbiAgICBwYXRjaCh3ZWJpeCk7XHJcbn1cclxuY29uc3QgcGx1Z2lucyA9IHtcclxuICAgIFVubG9hZEd1YXJkLCBMb2NhbGUsIE1lbnUsIFRoZW1lLCBVc2VyLCBTdGF0dXMsIFVybFBhcmFtXHJcbn07XHJcbmNvbnN0IHcgPSB3aW5kb3c7XHJcbmlmICghdy5Qcm9taXNlKSB7XHJcbiAgICB3LlByb21pc2UgPSB3LndlYml4LnByb21pc2U7XHJcbn1cblxuZXhwb3J0IHsgcGx1Z2lucywgSmV0QXBwLCBKZXRWaWV3LCBIYXNoUm91dGVyLCBTdG9yZVJvdXRlciwgVXJsUm91dGVyLCBFbXB0eVJvdXRlciwgU3ViUm91dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qZXQuanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJjb25zdCBsb2dvdXRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ291dCc7XHJcbmNvbnN0IGxvZ2luVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbic7XHJcbmNvbnN0IHJlZ2lzdGVyVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemF0aW9uIHtcclxuXHRyZWdpc3RlcihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChyZWdpc3RlclVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ2luVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9nb3V0KGRhdGUpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChsb2dvdXRVcmwsIGRhdGUpO1xyXG5cdH1cclxufSIsImNvbnN0IERVTU1ZQ09WRVIgPSAnaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2FkL2ZkLzU4L2FkZmQ1ODczYmUzODQxZjA2NjBlNmFhYTAwY2RlMThlLmpwZyc7XHJcbmNvbnN0IFNVQ0NFU1NfU1FMID0gMjtcclxuY29uc3QgU1VDQ0VTU19NT05HTyA9IDIwMDtcclxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcblxyXG5leHBvcnQge0RVTU1ZQ09WRVIsIFNVQ0NFU1NfU1FMLCBTVUNDRVNTX01PTkdPLCBVUkx9OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvbG9jYWxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBCb29rc01vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBbXTtcclxuXHRcdHRoaXMuX3VybCA9IGAke1VSTH0vYm9va3MvYDtcclxuXHR9XHJcblxyXG5cdGdldERhdGFGcm9tU2VydmVyKGlkKSB7XHJcblx0XHRjb25zdCB1c2VySWQgPSB7dXNlcklkOiBpZH07XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwsIHVzZXJJZCk7XHJcblx0fVxyXG5cclxuXHRnZXRCb29rKGJvb2tJZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7Ym9va0lkfWApO1xyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhLCBmdW5jKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhLCBmdW5jKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKHRoaXMuX3VybCwgaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEJvb2tzTW9kZWwoKTsiLCJpbXBvcnQgeyBVUkwgfSBmcm9tICcuLi9jb25zdHMnO1xyXG5cclxuY2xhc3MgQ29tbWVudHNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L2NvbW1lbnRzL2A7XHJcblx0fVxyXG5cdFxyXG5cdGdldEl0ZW1zKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb21tZW50c01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIEZpbGVzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9maWxlcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVJdGVtKGRhdGEpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucHV0KHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHRkb3dubG9hZEl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucmVzcG9uc2UoJ2Jsb2InKS5nZXQoYCR7dGhpcy5fdXJsfWRvd25sb2FkLyR7aWR9YCk7XHRcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWxlc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIExpa2VzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS9saWtlcy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0TGlrZXMoaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0ke2lkfWApO1xyXG5cdH1cclxuXHJcblx0YWRkTGlrZSh1c2VySWQsIGJvb2tJZCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcklkOiB1c2VySWQsXHJcblx0XHRcdGJvb2tJZDogYm9va0lkXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdCh0aGlzLl91cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlTGlrZSh1c2VySWQsIGJvb2tJZCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0dXNlcklkOiB1c2VySWQsXHJcblx0XHRcdGJvb2tJZDogYm9va0lkXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKHRoaXMuX3VybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGlrZXNNb2RlbCgpOyIsImltcG9ydCB7IFVSTCB9IGZyb20gJy4uL2NvbnN0cyc7XHJcblxyXG5jbGFzcyBPcmRlcnNNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl91cmwgPSBgJHtVUkx9L29yZGVycy9gO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtcyhpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9YCk7XHRcclxuXHR9XHJcblxyXG5cdGdldElkTGlzdChpZCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQoYCR7dGhpcy5fdXJsfSR7aWR9L2lkc2ApO1x0XHJcblx0fVxyXG5cclxuXHRhZGRPcmRlcihvcmRlcikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHRoaXMuX3VybCwgb3JkZXIpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVXNlck9yZGVycyhvcmRlcnNBcnIsIHVzZXJJZCkge1xyXG5cdFx0d2ViaXguYWpheCgpLnB1dCh0aGlzLl91cmwsIHtvcmRlcnM6IG9yZGVyc0FyciwgdXNlcklkOiB1c2VySWR9KTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaWQpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZGVsKHRoaXMuX3VybCwgaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9yZGVyc01vZGVsKCk7IiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAnLi4vY29uc3RzJztcclxuXHJcbmNsYXNzIFVzZXJzTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5fdXJsID0gYCR7VVJMfS91c2Vycy9gO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YUZyb21TZXJ2ZXIoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldCh0aGlzLl91cmwpO1xyXG5cdH1cclxuXHJcblx0Z2V0UmVhZGVycygpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGAke3RoaXMuX3VybH0vcmVhZGVyc2ApO1xyXG5cdH1cclxuXHRcclxuXHRnZXRJdGVtKGlkKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChgJHt0aGlzLl91cmx9JHtpZH1gKTtcdFxyXG5cdH1cclxuXHJcblx0YWRkSXRlbShkYXRhKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUl0ZW0oZGF0YSkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wdXQodGhpcy5fdXJsLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2Vyc01vZGVsKCk7IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0IHtKZXRBcHAsIEVtcHR5Um91dGVyLCBIYXNoUm91dGVyIH0gZnJvbSAnd2ViaXgtamV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgSmV0QXBwe1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZyl7XHJcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcclxuXHRcdFx0aWQgXHRcdDogQVBQTkFNRSxcclxuXHRcdFx0dmVyc2lvbiA6IFZFUlNJT04sXHJcblx0XHRcdHJvdXRlciBcdDogQlVJTERfQVNfTU9EVUxFID8gRW1wdHlSb3V0ZXIgOiBIYXNoUm91dGVyLFxyXG5cdFx0XHRkZWJ1ZyBcdDogIVBST0RVQ1RJT04sXHJcblx0XHRcdHN0YXJ0IFx0OiAnL2xvZ2luJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRzdXBlcih7IC4uLmRlZmF1bHRzLCAuLi5jb25maWcgfSk7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUJVSUxEX0FTX01PRFVMRSl7XHJcblx0d2ViaXgucmVhZHkoKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBwID0gbmV3IE15QXBwKCk7XHJcblx0XHRhcHAuYXR0YWNoRXZlbnQoJ2FwcDpndWFyZCcsICh1cmwsIHZpZXcsIG5hdikgPT4ge1xyXG5cdFx0XHRpZih1cmwuaW5kZXhPZignaWQnKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRjb25zdCB1cmxQYXJ0cyA9IHVybC5zcGxpdCgnLycpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXRQYXJ0O1xyXG5cclxuXHRcdFx0XHR1cmxQYXJ0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYoZWwuaW5kZXhPZignaWQnKSAhPSAtMSkge1xyXG5cdFx0XHRcdFx0XHR0YXJnZXRQYXJ0ID0gZWw7XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRjb25zdCBpID0gdGFyZ2V0UGFydC5pbmRleE9mKCdpZCcpO1xyXG5cdFx0XHRcdGNvbnN0IHJvbGUgPSB0YXJnZXRQYXJ0LnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0Y29uc3QgaWQgPSB0YXJnZXRQYXJ0LnNsaWNlKGkrMyk7XHJcbiBcclxuXHRcdFx0XHR3ZWJpeC5hamF4KCkuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hlY2snKS50aGVuKFxyXG5cdFx0XHRcdFx0KHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IHJlcy5qc29uKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnJvbGUgIT0gcm9sZSB8fCByZXNwb25zZS5pZCAhPSBpZCkge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YXBwLnJlbmRlcigpO1xyXG5cdH0pO1xyXG59IiwiY29uc3QgdG9nZ2xlRWxlbWVudCA9IChjb25kaXRpb24sIGVsZW1lbnQpID0+IHtcclxuXHRpZiAoY29uZGl0aW9uKSB7XHJcblx0XHRlbGVtZW50LnNob3coKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRlbGVtZW50LmhpZGUoKTtcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRJdGVtIChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikge1xyXG5cdE1vZGVsLmFkZEl0ZW0oZGF0YSkudGhlbigoKSA9PiB7XHJcblx0XHRNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0c3VjY2Vzc0FjdGlvbihkYXRhKTtcclxuXHRcdH0pO1x0XHRcdFxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVJdGVtIChNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbikge1xyXG5cdE1vZGVsLnVwZGF0ZUl0ZW0oZGF0YSkudGhlbigoKSA9PiB7XHJcblx0XHRNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0c3VjY2Vzc0FjdGlvbihkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlIChkYkRhdGUpIHtcclxuXHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHRjb25zdCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcblx0Y29uc3QgY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IGN1cnJlbnRIb3VycyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuXHRjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRjb25zdCBjb21tZW50c1llYXIgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcblx0Y29uc3QgY29tbWVudHNNb250aCA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0TW9udGgoKTtcclxuXHRjb25zdCBjb21tZW50c0RheSA9IG5ldyBEYXRlKGRiRGF0ZSkuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IGNvbW1lbnRzSG91cnMgPSBuZXcgRGF0ZShkYkRhdGUpLmdldEhvdXJzKCk7XHJcblx0Y29uc3QgY29tbWVudHNEYXRlVGltZSA9IG5ldyBEYXRlKGRiRGF0ZSk7XHJcblxyXG5cdGxldCBmb3JtYXREYXRlID0gd2ViaXguRGF0ZS5zdHJUb0RhdGUoJyVpOiVzJyk7XHJcblxyXG5cdGlmIChjdXJyZW50WWVhciA+IGNvbW1lbnRzWWVhcikge1xyXG5cdFx0Zm9ybWF0RGF0ZSA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKCclZC0lbS0leScpO1xyXG5cdH1cclxuXHRlbHNlIGlmKGN1cnJlbnRNb250aCA+IGNvbW1lbnRzTW9udGgpIHtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cignJW0tJWQnKTtcclxuXHR9XHJcblx0ZWxzZSBpZihjdXJyZW50RGF5ID4gY29tbWVudHNEYXkpIHtcclxuXHRcdGZvcm1hdERhdGUgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cignJUQsICVIOiVpJyk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGN1cnJlbnRIb3VycyA+IGNvbW1lbnRzSG91cnMpe1xyXG5cdFx0Zm9ybWF0RGF0ZSA9IHdlYml4LkRhdGUuZGF0ZVRvU3RyKCclSDolaScpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGNvbnN0IHRpbWUgPSAoY3VycmVudERhdGVUaW1lIC0gY29tbWVudHNEYXRlVGltZSkvNjAwMDA7XHJcblx0XHRyZXR1cm4gYCR7TWF0aC5yb3VuZCh0aW1lKX0gbWludXRlKHMpIGFnb2A7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBmb3JtYXREYXRlKG5ldyBEYXRlKGRiRGF0ZSkpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydERhdGVzSW5BcnJheShhcnIpIHtcclxuXHRsZXQgZGF0ZTtcclxuXHJcblx0YXJyID0gYXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdGRhdGUgPSBlbC55ZWFyT2ZQdWJsaWNhdGlvbjtcclxuXHRcdGVsLnllYXJPZlB1YmxpY2F0aW9uID0gZGF0ZSA/IG5ldyBEYXRlKGRhdGUpIDogJyc7XHJcblx0XHRyZXR1cm4gZWw7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBhcnI7XHRcdFxyXG59XHJcblxyXG53ZWJpeC5wcm90b1VJKHtcclxuXHRuYW1lOiAnYWN0aXZlTGlzdCcsXHJcblx0ZGVmYXVsdHM6IHtcclxuXHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0dHlwZToge1xyXG5cdFx0XHRoZWlnaHQ6IDMwXHJcblx0XHR9XHJcblx0fVxyXG59LCB3ZWJpeC51aS5saXN0KTtcclxuXHJcbmV4cG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgZm9ybWF0RGF0ZSwgY29udmVydERhdGVzSW5BcnJheX07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2FkbWluXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vaW5kZXguanNcIixcblx0XCIuL2FkbWluL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL2luZGV4LmpzXCIsXG5cdFwiLi9hZG1pbi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9hZG1pbi9pbmRleC5qc1wiLFxuXHRcIi4vYWRtaW4vdXNlckZvcm1cIjogXCIuL3NvdXJjZXMvdmlld3MvYWRtaW4vdXNlckZvcm0uanNcIixcblx0XCIuL2FkbWluL3VzZXJGb3JtLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkbWluL3VzZXJGb3JtLmpzXCIsXG5cdFwiLi9jb21tb24vbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9jb21tb24vbGlicmFyeS5qc1wiLFxuXHRcIi4vY29tbW9uL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvY29tbW9uL2xpYnJhcnkuanNcIixcblx0XCIuL2xpYnJhcmlhblwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vaW5kZXguanNcIixcblx0XCIuL2xpYnJhcmlhbi9cIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vYm9va0NhcmRcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vYm9va0NhcmQuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2Jvb2tDYXJkLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2luZGV4LmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vbGlicmFyeS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvbGlicmFyaWFuL2xpYnJhcnkuanNcIixcblx0XCIuL2xpYnJhcmlhbi9vcmRlcnNGb3JtXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi9vcmRlcnNGb3JtLmpzXCIsXG5cdFwiLi9saWJyYXJpYW4vb3JkZXJzRm9ybS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9saWJyYXJpYW4vb3JkZXJzRm9ybS5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL3VzZXJzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi91c2Vycy5qc1wiLFxuXHRcIi4vbGlicmFyaWFuL3VzZXJzLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xpYnJhcmlhbi91c2Vycy5qc1wiLFxuXHRcIi4vbG9naW5cIjogXCIuL3NvdXJjZXMvdmlld3MvbG9naW4uanNcIixcblx0XCIuL2xvZ2luLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2xvZ2luLmpzXCIsXG5cdFwiLi9yZWFkZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9pbmRleC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2Jvb2tDYXJkLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9ib29rQ2FyZC5qc1wiLFxuXHRcIi4vcmVhZGVyL2NvbW1lbnRPYmpcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2NvbW1lbnRPYmouanNcIixcblx0XCIuL3JlYWRlci9jb21tZW50T2JqLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9jb21tZW50T2JqLmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXhcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2luZGV4LmpzXCIsXG5cdFwiLi9yZWFkZXIvbGlicmFyeVwiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbGlicmFyeS5qc1wiLFxuXHRcIi4vcmVhZGVyL2xpYnJhcnkuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL2xpYnJhcnkuanNcIixcblx0XCIuL3JlYWRlci9tYWluXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9tYWluLmpzXCIsXG5cdFwiLi9yZWFkZXIvbWFpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9yZWFkZXIvbWFpbi5qc1wiLFxuXHRcIi4vcmVhZGVyL3NldHRpbmdzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qc1wiLFxuXHRcIi4vcmVhZGVyL3NldHRpbmdzLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci9zZXR0aW5ncy5qc1wiLFxuXHRcIi4vcmVhZGVyL3RvcHNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVhZGVyL3RvcHMuanNcIixcblx0XCIuL3JlYWRlci90b3BzLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlYWRlci90b3BzLmpzXCIsXG5cdFwiLi9yZWdpc3RlclwiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiLFxuXHRcIi4vcmVnaXN0ZXIuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL3ZpZXdzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IFVzZXJGb3JtIGZyb20gJy4vdXNlckZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCBcclxuXHRcdFx0dGVtcGxhdGU6ICdVc2VycyBsaXN0J1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBkdGFibGUgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ3VzZXJzTGlzdCcsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdmdWxsX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnTmFtZScsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTgwLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLjVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncm9sZV9uYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JvbGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDkwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3Bhc3Nwb3J0X0lEJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1Bhc3Nwb3J0IElEJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxMzBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYmlydGhfZGF0ZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdCaXJ0aCBkYXRlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxMzBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYWRkcmVzcycsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBZGRyZXNzJyxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxODAsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEuNVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdwaG9uZV9udW1iZXJzJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1Bob25lIG51bWJlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogMTkwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VtYWlsJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0VtYWlsJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxODBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWRpdCcsIFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsIFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLmVkaXRJY29uKCl9J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCd3eGktcGVuY2lsJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmVkaXRVc2VyKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkVXNlckJ0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQWRkIHVzZXInLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hZGRVc2VyKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHJvd3M6W1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHR0eXBlOiAnY2xlYW4nLFxyXG5cdFx0XHRcdFx0Y29sczogW2hlYWRlciwgbG9nb3V0XSBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGR0YWJsZSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHt9LCBhZGRVc2VyQnRuLCB7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dXNlcnNNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgdXNlcnNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHR1c2Vyc0FyciA9IHVzZXJzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC5mdWxsX25hbWUgPSBlbC51c2VyX25hbWUgKyAnICcgKyBlbC51c2VyX3N1cm5hbWU7XHJcblx0XHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0XHRlbC5iaXJ0aF9kYXRlID0gZm9ybWF0KG5ldyBEYXRlKGVsLmJpcnRoX2RhdGUpKTtcclxuXHRcdFx0XHRyZXR1cm4gZWw7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnVzZXJzRGF0YSA9IHVzZXJzQXJyO1xyXG5cdFx0XHQkJCgndXNlcnNMaXN0JykucGFyc2UodXNlcnNBcnIpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRjb25zdCBmb3JtYXQgPSB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZLSVtLSVkXCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KHtjdXJyZW50RGF0ZX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGFwcC5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5fdXNlckZvcm0gPSB0aGlzLnVpKFVzZXJGb3JtKTtcclxuXHR9XHJcblxyXG5cdGVkaXRVc2VyKGlkKSB7XHJcblx0XHRjb25zdCB1c2VyID0gdGhpcy51c2Vyc0RhdGEuZmluZChlbCA9PiBlbC5pZCA9PSBpZCk7XHJcblx0XHR0aGlzLl91c2VyRm9ybS5zaG93V2luZG93KHVzZXIpO1xyXG5cdH1cclxuXHJcblx0YWRkVXNlcigpIHtcclxuXHRcdHRoaXMuX3VzZXJGb3JtLnNob3dXaW5kb3coKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHVzZXJzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzJztcclxuaW1wb3J0IHt0b2dnbGVFbGVtZW50LCBhZGRJdGVtLCB1cGRhdGVJdGVtfSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyRm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICd3aW5kb3cnLFxyXG5cdFx0XHRsb2NhbElkOiAndXNlcldpbmRvdycsXHJcblx0XHRcdGhlYWQ6ICdFZGl0IHVzZXInLFxyXG5cdFx0XHR3aWR0aDogNjAwLFxyXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ3VzZXJGb3JtJyxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2lkJywgbG9jYWxJZDogJ2lkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRmlyc3QgbmFtZScsIG5hbWU6ICd1c2VyX25hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0xhc3QgbmFtZScsIG5hbWU6ICd1c2VyX3N1cm5hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdSb2xlJywgbmFtZTogJ2NhcGFiaWxpdGllc19pZCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHRcdFx0XHR7aWQ6IDEsIHZhbHVlOiAncmVhZGVyJ30sXHJcblx0XHRcdFx0XHRcdFx0XHR7aWQ6IDIsIHZhbHVlOiAnbGFicmFyaWFuJ30sXHJcblx0XHRcdFx0XHRcdFx0XHR7aWQ6IDMsIHZhbHVlOiAnYWRtaW4nfVxyXG5cdFx0XHRcdFx0XHRcdF0gfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdQYXNzcG9ydCBJRCcsIG5hbWU6ICdwYXNzcG9ydF9JRCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAnZGF0ZXBpY2tlcicsIGxhYmVsOiAnQmlydGggZGF0ZScsIG5hbWU6ICdiaXJ0aF9kYXRlJywgbG9jYWxJZDogJ2JpcnRoX2RhdGUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0FkZHJlc3MnLCBuYW1lOiAnYWRkcmVzcycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGhvbmUnLCBuYW1lOiAncGhvbmVfbnVtYmVycycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRW1haWwnLCBuYW1lOiAnZW1haWwnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0JyB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ2FjY291bnRfcGFzc3dvcmQnLCBsb2NhbElkOiAnaW5pdGlhbF9wYXNzd29yZCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnIH0sXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdHJ1bGVzOiB7XHJcblx0XHRcdFx0XHRcdFx0J2NhcGFiaWxpdGllc19pZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J2VtYWlsJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnYWNjb3VudF9wYXNzd29yZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdTYXZlJywgdHlwZTogJ2Zvcm0nLCBsb2NhbElkOiAnc2F2ZUJ0bicsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ3VzZXJGb3JtJyk7XHJcblx0XHR0aGlzLndpbmRvdyA9IHRoaXMuJCQoJ3VzZXJXaW5kb3cnKTtcclxuXHR9XHJcblxyXG5cdHN1Y2Nlc3NBY3Rpb24oKSB7XHJcblx0XHR0aGlzLndlYml4Lm1lc3NhZ2UoJ1N1Y2Nlc3MnKTtcclxuXHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdH1cclxuXHJcblx0c2hvd1dpbmRvdyh1c2VyKSB7XHRcclxuXHRcdHRoaXMuaXNOZXcgPSB1c2VyID8gZmFsc2UgOiB0cnVlO1x0XHJcblxyXG5cdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHR0aGlzLndpbmRvdy5nZXRIZWFkKCkuc2V0SFRNTCgnQWRkIHVzZXInKTtcclxuXHRcdFx0dGhpcy53aW5kb3cuZ2V0SGVhZCgpLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKHVzZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluaXRpYWxfcGFzc3dvcmQgPSB0aGlzLiQkKCdpbml0aWFsX3Bhc3N3b3JkJyk7XHJcblx0XHR0b2dnbGVFbGVtZW50KHRoaXMuaXNOZXcsIGluaXRpYWxfcGFzc3dvcmQpO1xyXG5cdFx0XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy5mb3JtLmdldFZhbHVlcygpO1x0XHJcblx0XHRcclxuXHRcdGlmKHRoaXMuZm9ybS52YWxpZGF0ZSgpKSB7XHJcblx0XHRcdGlmKHRoaXMuaXNOZXcpIHtcclxuXHRcdFx0XHRhZGRJdGVtKHVzZXJzTW9kZWwsIGRhdGEsIHRoaXMuc3VjY2Vzc0FjdGlvbi5iaW5kKHRoaXMpKTtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHVwZGF0ZUl0ZW0odXNlcnNNb2RlbCwgZGF0YSwgdGhpcy5zdWNjZXNzQWN0aW9uLmJpbmQodGhpcykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcdFxyXG5cdH1cclxuXHJcblx0aGlkZVdpbmRvdygpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuaW1wb3J0IGZpbGVzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2ZpbGVzJztcclxuaW1wb3J0IHtjb252ZXJ0RGF0ZXNJbkFycmF5fSBmcm9tICcuLi8uLi9zY3JpcHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25zdHJ1Y3RvcihhcHAsIGxpYnJhcnlDb25maWcsIGJvb2tDYXJkKSB7XHJcblx0XHRzdXBlcihhcHApO1xyXG5cdFx0dGhpcy5saWJyYXJ5Q29uZmlnID0gbGlicmFyeUNvbmZpZztcclxuXHRcdHRoaXMuYm9va0NhcmQgPSBib29rQ2FyZDtcclxuXHR9XHJcblxyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTogJ2hlYWRlcicsXHJcblx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtYm9va1wiPjwvaT4gTGlzdCBvZiBib29rcycsXHJcblx0XHRcdGNzczogJ2NlbnRlciBwYWdlX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICdkdExpYnJhcnknLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYm9va1RpdGxlJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydUaXRsZScsIHtjb250ZW50OiAndGV4dEZpbHRlcid9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdXRob3JOYW1lJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydBdXRob3InLCB7Y29udGVudDogJ3RleHRGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZ2VucmVzJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnR2VucmVzJywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnY291bnRyeU9mUHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydDb3VudHJ5Jywge2NvbnRlbnQ6ICdzZWxlY3RGaWx0ZXInfV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAneWVhck9mUHVibGljYXRpb24nLFxyXG5cdFx0XHRcdFx0c29ydDogJ2RhdGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGZvcm1hdDogd2ViaXguRGF0ZS5kYXRlVG9TdHIoJyVZJyksXHJcblx0XHRcdFx0XHRoZWFkZXI6IFsnWWVhcicsIHtjb250ZW50OlwiZGF0ZVJhbmdlRmlsdGVyXCJ9XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdhdmFpbGFibGVDb3BpZXMnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0F2YWlsYWJsZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZWJvb2snLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiBbJ2VCb29rJywge2NvbnRlbnQ6XCJzZWxlY3RGaWx0ZXJcIn1dLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6IChvYmopID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9iai5lYm9vaz09PSd5ZXMnID8gJzxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPicgOiAnJ1xyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAndmlld0NvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdWaWV3JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2VkaXRDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRWRpdCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLWV5ZSc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fYm9va0NhcmQuc2hvd1BvcHVwKGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS1lZGl0JzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9ib29rQ2FyZC5zaG93UG9wdXAoaWQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2ZhLXRyYXNoJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUJvb2soaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3dzOiBbaGVhZGVyLCBkdGFibGVdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0YXN5bmMgaW5pdCgpIHtcclxuXHRcdHRoaXMuZ3JpZCA9ICQkKCdkdExpYnJhcnknKTtcclxuXHJcblx0XHRzd2l0Y2ggKHRoaXMubGlicmFyeUNvbmZpZy5yb2xlKSB7XHJcblx0XHRcdGNhc2UgJ3JlYWRlcic6IFxyXG5cdFx0XHRcdHRoaXMuZ3JpZC5nZXRDb2x1bW5Db25maWcoJ2VkaXRDb2wnKS5oaWRkZW4gPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZ3JpZC5nZXRDb2x1bW5Db25maWcoJ3JlbW92ZUNvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xpYnJhcmlhbic6XHJcblx0XHRcdFx0dGhpcy5ncmlkLmdldENvbHVtbkNvbmZpZygndmlld0NvbCcpLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHR0aGlzLmdyaWQucmVmcmVzaENvbHVtbnMoKTtcclxuXHRcdGF3YWl0IHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0YXdhaXQgdGhpcy5nZXRGaWxlcygpO1xyXG5cdFx0dGhpcy5jaGVja0ZpbGVzKCk7XHJcblx0XHR0aGlzLmdyaWQucGFyc2UodGhpcy5ib29rc0Fycik7XHJcblx0XHR0aGlzLl9ib29rQ2FyZCA9IHRoaXMudWkodGhpcy5ib29rQ2FyZCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBnZXREYXRhKCkge1x0XHRcclxuXHRcdGNvbnN0IHVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdGNvbnN0IGRiRGF0YSA9IGF3YWl0IGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIodXNlcklkKTtcclxuXHRcdHRoaXMuYm9va3NBcnIgPSBjb252ZXJ0RGF0ZXNJbkFycmF5KGRiRGF0YS5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZ2V0RmlsZXMoKSB7XHJcblx0XHRjb25zdCBkYkRhdGEgPSBhd2FpdCBmaWxlc01vZGVsLmdldERhdGFGcm9tU2VydmVyKCk7XHJcblx0XHR0aGlzLmZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcdFx0XHRcdFx0XHRcclxuXHR9XHJcblxyXG5cdGNoZWNrRmlsZXMoKSB7XHJcblx0XHR0aGlzLmJvb2tzQXJyLmZvckVhY2goKGJvb2ssIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgaXNGaWxlcyA9IHRoaXMuZmlsZXNBcnIuZmluZCgoZWwpID0+IGVsLmJvb2tfaWQgPT09IGJvb2suaWQpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoaXNGaWxlcykge1xyXG5cdFx0XHRcdHRoaXMuYm9va3NBcnJbaV0uZWJvb2sgPSAneWVzJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmJvb2tzQXJyW2ldLmVib29rID0gJ25vJztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBzaG93Qm9va0NhcmQoaWQpIHtcclxuXHQvLyBcdGNvbnN0IGJvb2sgPSB0aGlzLmJvb2tzQXJyLmZpbmQoZWwgPT4gZWwuaWQgPT0gaWQpO1xyXG5cdC8vIFx0dGhpcy5fYm9va0NhcmQuc2hvd1BvcHVwKGJvb2spO1xyXG5cdC8vIH1cclxuXHJcblx0cmVtb3ZlQm9vayhpZCkge1xyXG5cdFx0Ym9va3NNb2RlbC5yZW1vdmVJdGVtKGlkKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5ncmlkLnJlbW92ZShpZCk7XHJcblx0XHR9KTtcdFx0XHJcblx0fVxyXG5cclxuXHRhZGRCb29rKCkge1xyXG5cdFx0dGhpcy5fYm9va0NhcmQuc2hvd1BvcHVwKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5pbXBvcnQge0RVTU1ZQ09WRVJ9IGZyb20gJy4uLy4uL2NvbnN0cyc7XHJcbmltcG9ydCB7dG9nZ2xlRWxlbWVudCwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgY29udmVydERhdGVzSW5BcnJheX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQgZmlsZXNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvZmlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0NhcmQgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0Y29uc3QgYm9va0NvdmVyID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NvdmVyJyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0aGVpZ2h0OiAxODAsXHJcblx0XHRcdGNzczogJ2Jvb2tfY292ZXInLFxyXG5cdFx0XHR0ZW1wbGF0ZTogKHVybCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pXCIgPjwvZGl2PmA7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYm9va0NhcmQgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ2FyZExpYnJhcmlhbicsXHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdUaXRsZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2Jvb2tUaXRsZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdXRob3InLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdXRob3JOYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdHZW5yZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdnZW5yZXMnLCBvcHRpb25zOiBbXHJcblx0XHRcdFx0XHQnJywgJ0ZpY3Rpb24nLCAnRmFudGFzeScsICdUaHJpbGxlcicsICdIb3Jyb3InLCAnTXlzdGVyeScsICdIaXN0b3JpY2FsJywgJ1dlc3Rlcm5zJywgJ0ZhbWlseScsICdEYXJrIGNvbWVkeSdcclxuXHRcdFx0XHRdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeU9mUHVibGljYXRpb24nIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUHVibGlzaGluZyBob3VzZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ3B1Ymxpc2hpbmdIb3VzZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdBdmFpbGFibGUgY29waWVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXZhaWxhYmxlQ29waWVzJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1BhZ2VzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnbnVtYmVyT2ZQYWdlcycgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdZZWFyIG9mIHB1YmxpY2F0aW9uJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCB0eXBlOiAneWVhcicsIGZvcm1hdDogJyVZJywgbmFtZTogJ3llYXJPZlB1YmxpY2F0aW9uJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0NvdmVyIHBob3RvJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY292ZXJQaG90bycgfVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGFkZFRleHRGaWxlID0ge1xyXG5cdFx0XHR2aWV3OiAndXBsb2FkZXInLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtdXBsb2FkXCI+PC9pPiBVcGxvYWQgdGV4dCBmaWxlJyxcclxuXHRcdFx0bG9jYWxJZDogJ2Jvb2tGaWxlcycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0YXV0b3NlbmQ6IGZhbHNlLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRmb3JtRGF0YTogKCkgPT4gKHtcclxuXHRcdFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdGJvb2tJZDogdGhpcy5ib29rSWRcclxuXHRcdFx0fSksXHJcblx0XHRcdGFjY2VwdDogJ3RleHQvcGxhaW4sIGFwcGxpY2F0aW9uL3BkZiwgLmRvYywgLmRvY3gnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL3RleHQnLFxyXG5cdFx0XHRsaW5rOiAnZmlsZXNMaXN0J1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBmaWxlc0xpc3QgPSB7XHJcblx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0dHlwZTogJ3VwbG9hZGVyJyxcclxuXHRcdFx0aWQ6ICdmaWxlc0xpc3QnLFxyXG5cdFx0XHRhdXRvaGVpZ2h0OnRydWUsIFxyXG5cdFx0XHRib3JkZXJsZXNzOnRydWVcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYWRkQXVkaW9GaWxlID0ge1xyXG5cdFx0XHR2aWV3OiAndXBsb2FkZXInLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFzIGZhLW11c2ljXCI+PC9pPiBVcGxvYWQgYXVkaW8nLFxyXG5cdFx0XHRsb2NhbElkOiAnYXVkaW9GaWxlcycsXHJcblx0XHRcdHR5cGU6ICdodG1sYnV0dG9uJyxcclxuXHRcdFx0YXV0b3NlbmQ6IGZhbHNlLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRmb3JtRGF0YTogKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxyXG5cdFx0XHRcdFx0Ym9va0lkOiB0aGlzLmJvb2tJZFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0sXHJcblx0XHRcdGFjY2VwdDogJy5tcDMnLFxyXG5cdFx0XHR1cGxvYWQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZmlsZXMvdXBsb2FkL2F1ZGlvJyxcclxuXHRcdFx0bGluazogJ2F1ZGlvTGlzdCdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYXVkaW9MaXN0ID0ge1xyXG5cdFx0XHR2aWV3OiAnbGlzdCcsXHJcblx0XHRcdHR5cGU6ICd1cGxvYWRlcicsXHJcblx0XHRcdGlkOiAnYXVkaW9MaXN0JyxcclxuXHRcdFx0YXV0b2hlaWdodDp0cnVlLCBcclxuXHRcdFx0Ym9yZGVybGVzczp0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZVRleHRGaWxlcyA9IHtcclxuXHRcdFx0dmlldzogJ2FjdGl2ZUxpc3QnLFxyXG5cdFx0XHRsb2NhbElkOiAnYXZhaWxhYmxlVGV4dEZpbGVzJyxcclxuXHRcdFx0dGVtcGxhdGU6ICcjbmFtZSMgPHNwYW4gY2xhc3M9XCJsaXN0X2J1dHRvblwiPjxpIGNsYXNzID0gXCJmYXMgZmEtdGltZXNcIj48L2k+PC9zcGFuPicsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly9yZW1vdmUgZmlsZSBhbmQgcmVjb3JkIGluIERCXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGF2YWlsYWJsZUF1ZGlvRmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnLFxyXG5cdFx0XHR0ZW1wbGF0ZTogJyNuYW1lIyA8c3BhbiBjbGFzcz1cImxpc3RfYnV0dG9uXCI+PGkgY2xhc3MgPSBcImZhcyBmYS10aW1lc1wiPjwvaT48L3NwYW4+JyxcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3Qgc2F2ZUJ0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0bGFiZWw6ICdTYXZlJyxcclxuXHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAncG9wdXAnLFxyXG5cdFx0XHRwb3NpdGlvbjogJ2NlbnRlcicsXHJcblx0XHRcdG1heEhlaWdodDogNTUwLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0dmlldzogJ3Njcm9sbHZpZXcnLFxyXG5cdFx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0Ym9va0NvdmVyLCBcclxuXHRcdFx0XHRcdFx0Ym9va0NhcmQsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAndGVtcGxhdGUnLFxyXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlOiAnRmlsZXMnLFxyXG5cdFx0XHRcdFx0XHRcdGF1dG9oZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y3NzOiAnY2VudGVyJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7aGVpZ2h0OiAyfSxcclxuXHRcdFx0XHRcdFx0YXZhaWxhYmxlVGV4dEZpbGVzLFxyXG5cdFx0XHRcdFx0XHRhdmFpbGFibGVBdWRpb0ZpbGVzLFxyXG5cdFx0XHRcdFx0XHRmaWxlc0xpc3QsXHJcblx0XHRcdFx0XHRcdGF1ZGlvTGlzdCxcclxuXHRcdFx0XHRcdFx0e2hlaWdodDogMTV9LFxyXG5cdFx0XHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0XHRcdGxvY2FsSWQ6ICdhZGRpbmdGaWxlc0J1dHRvbnMnLFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdFx0Y29sczogWyB7fSwgYWRkVGV4dEZpbGUsIGFkZEF1ZGlvRmlsZSwge30gXSBcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e2hlaWdodDogMX0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1g6IDE1LFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjb2xzOiBbe30sIHNhdmVCdG4sIHt9XVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtID0gdGhpcy4kJCgnYm9va0NhcmRMaWJyYXJpYW4nKTtcclxuXHR9XHJcblxyXG5cdHNob3dQb3B1cChpZCkge1xyXG5cdFx0dGhpcy5jbGVhckZvcm0oKTtcclxuXHRcdHRoaXMuaXNOZXcgPSBpZCA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdHRoaXMuYm9va0lkID0gaWQgfHwgJyc7XHJcblx0XHR0aGlzLnVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oJ2lkJywgdHJ1ZSk7XHJcblxyXG5cdFx0ZmlsZXNNb2RlbC5nZXRJdGVtcyh0aGlzLmJvb2tJZCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0Y29uc3QgdGV4dEZpbGVzID0gW107XHJcblx0XHRcdGNvbnN0IGF1ZGlvRmlsZXMgPSBbXTtcclxuXHJcblx0XHRcdGZpbGVzQXJyLmZvckVhY2goKGZpbGUpID0+IHtcclxuXHRcdFx0XHRzd2l0Y2goZmlsZS5kYXRhX3R5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHR0ZXh0RmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhdWRpbyc6XHJcblx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLnBhcnNlKHRleHRGaWxlcyk7XHJcblx0XHRcdHRoaXMuJCQoJ2F2YWlsYWJsZUF1ZGlvRmlsZXMnKS5wYXJzZShhdWRpb0ZpbGVzKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRvZ2dsZUVsZW1lbnQoIXRoaXMuaXNOZXcsIHRoaXMuJCQoJ2Jvb2tDb3ZlcicpKTtcclxuXHRcdHRvZ2dsZUVsZW1lbnQoIXRoaXMuaXNOZXcsIHRoaXMuJCQoJ2FkZGluZ0ZpbGVzQnV0dG9ucycpKTtcclxuXHJcblx0XHRpZighdGhpcy5pc05ldykge1xyXG5cdFx0XHRib29rc01vZGVsLmdldEJvb2soaWQpLnRoZW4oKGJvb2tEYXRhKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYm9vayA9IGJvb2tEYXRhLmpzb24oKVswXTtcclxuXHRcdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1xyXG5cdFx0XHRcdHRoaXMuJCQoJ2Jvb2tDb3ZlcicpLnNldFZhbHVlcyhib29rLmNvdmVyX3Bob3RvIHx8IERVTU1ZQ09WRVIpO1xyXG5cdFx0XHR9KTtcdFx0XHRcdFx0XHRcclxuXHRcdH1cdFx0XHJcblxyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1x0XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSgpIHtcclxuXHRcdGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZ2V0VmFsdWVzKCk7XHJcblxyXG5cdFx0Y29uc3Qgc3VjY2Vzc0FjdGlvbiA9IChuZXdEYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMud2ViaXgubWVzc2FnZSgnU3VjY2VzcycpO1xyXG5cdFx0XHRjb25zdCBib29rc0FyciA9IGNvbnZlcnREYXRlc0luQXJyYXkobmV3RGF0YS5qc29uKCkpO1xyXG5cdFx0XHQkJCgnZHRMaWJyYXJ5JykucGFyc2UoYm9va3NBcnIpO1xyXG5cdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYodGhpcy5mb3JtLnZhbGlkYXRlKCkpIHtcclxuXHRcdFx0aWYodGhpcy5pc05ldykge1xyXG5cdFx0XHRcdGFkZEl0ZW0oYm9va3NNb2RlbCwgZGF0YSwgc3VjY2Vzc0FjdGlvbik7XHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlSXRlbShib29rc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kJCgnYm9va0ZpbGVzJykuc2VuZCgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSl7XHJcblx0XHRcdFx0XHR0aGlzLndlYml4Lm1lc3NhZ2UocmVzcG9uc2UubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJCQoJ2F1ZGlvRmlsZXMnKS5zZW5kKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKXtcclxuXHRcdFx0XHRcdHRoaXMud2ViaXgubWVzc2FnZShyZXNwb25zZS5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLmNsZWFyRm9ybSgpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJGb3JtICgpe1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy5mb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLiQkKCdib29rRmlsZXMnKS5maWxlcy5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXVkaW9GaWxlcycpLmZpbGVzLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5jbGVhckFsbCgpO1xyXG5cdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi8uLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgXHJcblx0XHRcdGxheW91dDoneScsIFxyXG5cdFx0XHRzZWxlY3Q6dHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwid2ViaXhfaWNvbiAjaWNvbiNcIj48L3NwYW4+ICN2YWx1ZSMgJyxcclxuXHRcdFx0dmFsdWU6ICdtYWluJyxcclxuXHRcdFx0ZGF0YTpbXHJcblx0XHRcdFx0eyB2YWx1ZTonTGlicmFyeScsIGlkOidsaWJyYXJ5JywgIGljb246J2ZhcyBmYS1ib29rLXJlYWRlcicgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidVc2VycycsIGlkOid1c2VycycsICBpY29uOidmYXMgZmEtY29nJyB9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uOntcclxuXHRcdFx0XHRvbk1lbnVJdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdXNlcklkID0gdGhpcy5nZXRQYXJhbSgnaWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYGxpYnJhcmlhbi5pbmRleD9pZD0ke3VzZXJJZH0vbGlicmFyaWFuLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlWS0lbS0lZFwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCh7Y3VycmVudERhdGV9KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRhcHAuc2hvdygnL2xvZ2luJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgTGlicmFyeSBmcm9tICcuLi9jb21tb24vbGlicmFyeSc7XHJcbmltcG9ydCBCb29rQ2FyZCBmcm9tICcuL2Jvb2tDYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxpYkxpYnJhcnkgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHRcclxuXHJcblx0XHRjb25zdCBsaWJyYXJ5Q29uZmlnID0ge1xyXG5cdFx0XHRyb2xlOiAnbGlicmFyaWFuJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRCb29rQnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQgYm9vaycsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRsaWJyYXJ5LmFkZEJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaWJyYXJ5ID0gbmV3IExpYnJhcnkodGhpcy5hcHAsIGxpYnJhcnlDb25maWcsIEJvb2tDYXJkKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdGxpYnJhcnksXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW3t9LGFkZEJvb2tCdG4se31dXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBvcmRlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXJzJztcclxuaW1wb3J0IGJvb2tzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2tzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyc0Zvcm0gZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJPcmRlcnNXaW5kb3cnLFxyXG5cdFx0XHR3aWR0aDogNjAwLFxyXG5cdFx0XHRoZWFkOiAnT3JkZXJlZCBib29rcycsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0bW92ZTogdHJ1ZSxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHZpZXc6ICdmb3JtJyxcdFxyXG5cdFx0XHRcdHBhZGRpbmc6IDAsXHRcdFx0XHJcblx0XHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmlldzogJ3RlbXBsYXRlJyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ3VzZXJOYW1lJyxcclxuXHRcdFx0XHRcdFx0Y3NzOiAncGFnZV9oZWFkZXIgY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NSxcclxuXHRcdFx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmlldzogJ211bHRpY29tYm8nLFxyXG5cdFx0XHRcdFx0XHRsb2NhbElkOiAnb3JkZXJzTGlzdCcsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdvcmRlcnNMaXN0JyxcclxuXHRcdFx0XHRcdFx0c3VnZ2VzdDogW11cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdTYXZlJyxcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUZvcm0oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdDYW5jZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy4kJCgndXNlck9yZGVyc1dpbmRvdycpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHRcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHNob3dQb3B1cChpZCwgdXNlck5hbWUpIHtcclxuXHRcdHRoaXMudXNlcklkID0gaWQucm93O1xyXG5cdFx0dGhpcy5wb3B1cCA9IHRoaXMuJCQoJ3VzZXJPcmRlcnNXaW5kb3cnKTtcclxuXHRcdHRoaXMub3JkZXJzTGlzdCA9IHRoaXMuJCQoJ29yZGVyc0xpc3QnKTtcclxuXHRcdHRoaXMuJCQoJ3VzZXJOYW1lJykuc2V0SFRNTCh1c2VyTmFtZSk7XHJcblxyXG5cdFx0d2ViaXgucHJvbWlzZS5hbGwoW1xyXG5cdFx0XHRvcmRlcnNNb2RlbC5nZXRJZExpc3QodGhpcy51c2VySWQpLCBcclxuXHRcdFx0Ym9va3NNb2RlbC5nZXREYXRhRnJvbVNlcnZlcigpXHJcblx0XHRdKS50aGVuKChyZXN1bHRzKSA9PiB7XHJcblx0XHRcdGNvbnN0IG9yZGVycyA9IHJlc3VsdHNbMF0uanNvbigpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGJvb2tzID0gcmVzdWx0c1sxXS5qc29uKCk7XHJcblx0XHRcdHRoaXMuYWxsQm9va3MgPSBib29rcztcclxuXHRcdFx0Ym9va3MgPSBib29rcy5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwudmFsdWUgPSBgJHtlbC5hdXRob3JfbmFtZX0gLSAke2VsLmJvb2tfdGl0bGV9YDtcclxuXHRcdFx0XHRyZXR1cm4gZWw7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLm9yZGVyc0xpc3QuZGVmaW5lKCdzdWdnZXN0JywgYm9va3MpO1xyXG5cdFx0XHR0aGlzLm9yZGVyc0xpc3Quc2V0VmFsdWUob3JkZXJzKTtcclxuXHRcdFx0dGhpcy5vcmRlcnNMaXN0LnJlZnJlc2goKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRjb25zdCBvcmRlcnNMaXN0VmFsdWUgPSB0aGlzLm9yZGVyc0xpc3QuZ2V0VmFsdWUoKTtcclxuXHRcdG9yZGVyc01vZGVsLnVwZGF0ZVVzZXJPcmRlcnMob3JkZXJzTGlzdFZhbHVlLCB0aGlzLnVzZXJJZCk7XHJcblx0XHR0aGlzLiQkKCd1c2VyT3JkZXJzV2luZG93JykuaGlkZSgpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQgT3JkZXJzRm9ybSBmcm9tICcuL29yZGVyc0Zvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNWaWV3IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICd1c2Vyc0xpc3RMaWJyYXJpYW4nLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdpZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZnVsbF9uYW1lJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogWydOYW1lJywge2NvbnRlbnQ6ICd0ZXh0RmlsdGVyJ31dLFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDE4MCxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMS41XHJcblx0XHRcdFx0fSxcdFx0XHRcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnb3JkZXJzJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ09yZGVycycsXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWZvbGRlci1vcGVuXCI+PC9pPidcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtZm9sZGVyLW9wZW4nOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1VzZXJPcmRlcnMoaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdGR0YWJsZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHVzZXJzTW9kZWwuZ2V0UmVhZGVycygpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgdXNlcnNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cdFx0XHR1c2Vyc0FyciA9IHVzZXJzQXJyLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRlbC5mdWxsX25hbWUgPSBlbC51c2VyX25hbWUgKyAnICcgKyBlbC51c2VyX3N1cm5hbWU7XHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gZWw7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnVzZXJzRGF0YSA9IHVzZXJzQXJyO1xyXG5cdFx0XHQkJCgndXNlcnNMaXN0TGlicmFyaWFuJykucGFyc2UodXNlcnNBcnIpO1xyXG5cdFx0fSk7XHRcdFxyXG5cclxuXHRcdHRoaXMuZWRpdE9yZGVycyA9IHRoaXMudWkoT3JkZXJzRm9ybSk7XHJcblx0fVxyXG5cclxuXHRzaG93VXNlck9yZGVycyhpZCkge1xyXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtID0gJCQoJ3VzZXJzTGlzdExpYnJhcmlhbicpLmdldEl0ZW0oaWQpO1xyXG5cdFx0Y29uc3QgdXNlck5hbWUgPSBgJHtzZWxlY3RlZEl0ZW0udXNlcl9uYW1lfSAke3NlbGVjdGVkSXRlbS51c2VyX3N1cm5hbWV9YDtcclxuXHRcdHRoaXMuZWRpdE9yZGVycy5zaG93UG9wdXAoaWQsIHVzZXJOYW1lKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ2xvZ2luRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVXNlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdsb2dpbkJ0bicsIHZhbHVlOiAnTG9naW4nLCB0eXBlOiAnZm9ybScgfSxcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQ3JlYXRlIGFuIGFjY291bnQnLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hvdygnL3JlZ2lzdGVyJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHRcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdGxvZ2luRm9ybSxcclxuXHRcdFx0XHRcdFx0bGluayxcclxuXHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgnbG9naW5CdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ2xvZ2luRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9naW4odmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1x0XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyRGF0YSA9IHJlc3BvbnNlLmpzb24oKS51c2VyO1xyXG5cdFx0XHRcdFx0Y29uc3QgaWQgPSB1c2VyRGF0YS5pZDtcclxuXHJcblx0XHRcdFx0XHRzd2l0Y2ggKHVzZXJEYXRhLnJvbGVfbmFtZSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICdhZG1pbic6IFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvdyhgYWRtaW4uaW5kZXg/aWQ9JHtpZH1gKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnbGlicmFyaWFuJzogXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93KGBsaWJyYXJpYW4uaW5kZXg/aWQ9JHtpZH0vbGlicmFyaWFuLmxpYnJhcnlgKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAncmVhZGVyJzogXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93KGByZWFkZXIuaW5kZXg/aWQ9JHtpZH0vcmVhZGVyLm1haW5gKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR3ZWJpeC5tZXNzYWdlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IGxpa2VzTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL2xpa2VzJztcclxuaW1wb3J0IHt0b2dnbGVFbGVtZW50fSBmcm9tICcuLi8uLi9zY3JpcHRzJzsgXHJcbmltcG9ydCB7RFVNTVlDT1ZFUn0gZnJvbSAnLi4vLi4vY29uc3RzJzsgXHJcbmltcG9ydCBib29rc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9ib29rcyc7XHJcbmltcG9ydCBmaWxlc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9maWxlcyc7XHJcbmltcG9ydCBvcmRlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvb3JkZXJzJztcclxuaW1wb3J0IENvbW1lbnRDbGFzcyBmcm9tICcuL2NvbW1lbnRPYmonO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0NhcmQgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0Y29uc3QgYm9va0NvdmVyID0ge1xyXG5cdFx0XHRsb2NhbElkOiAnYm9va0NvdmVyJyxcclxuXHRcdFx0d2lkdGg6IDEyMCxcclxuXHRcdFx0aGVpZ2h0OiAxODAsXHJcblx0XHRcdGNzczogJ2Jvb2tfY292ZXInLFxyXG5cdFx0XHR0ZW1wbGF0ZTogKHVybCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pXCIgPjwvZGl2PmA7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYm9va0NhcmQgPSB7XHJcblx0XHRcdGxvY2FsSWQ6ICdib29rQ2FyZFJlYWRlcicsXHRcdFx0XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdUaXRsZScsIGxhYmVsV2lkdGg6IDEzMCwgd2lkdGg6IDMxMCwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogJ2Jvb2tUaXRsZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnQXV0aG9yJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnYXV0aG9yTmFtZScsIHJlYWRvbmx5OiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnR2VucmVzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnZ2VucmVzJywgcmVhZG9ubHk6IHRydWUgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdDb3VudHJ5JywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnY291bnRyeU9mUHVibGljYXRpb24nLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1B1Ymxpc2hpbmcgaG91c2UnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdwdWJsaXNoaW5nSG91c2UnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0F2YWlsYWJsZSBjb3BpZXMnLCBsYWJlbFdpZHRoOiAxMzAsIHdpZHRoOiAzMTAsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICdhdmFpbGFibGVDb3BpZXMnLCByZWFkb25seTogdHJ1ZSB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1BhZ2VzJywgbGFiZWxXaWR0aDogMTMwLCB3aWR0aDogMzEwLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnbnVtYmVyT2ZQYWdlcycsIHJlYWRvbmx5OiB0cnVlIH1cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVUZXh0RmlsZXMgPSB7XHJcblx0XHRcdHZpZXc6ICdhY3RpdmVMaXN0JyxcclxuXHRcdFx0bG9jYWxJZDogJ2F2YWlsYWJsZVRleHRGaWxlcycsXHJcblx0XHRcdHRlbXBsYXRlOiAnI25hbWUjPHNwYW4gY2xhc3M9XCJsaXN0X2J1dHRvblwiPjxpIGNsYXNzID0gXCJmYXMgZmEtZG93bmxvYWRcIj48L2k+PC9zcGFuPicsXHJcblx0XHRcdG9uOiB7XHJcblx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgYm9va05hbWUgPSB0aGlzLiQkKCdhdmFpbGFibGVUZXh0RmlsZXMnKS5nZXRJdGVtKGlkKS5uYW1lO1xyXG5cclxuXHRcdFx0XHRcdGZpbGVzTW9kZWwuZG93bmxvYWRJdGVtKGlkKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2ViaXguaHRtbC5kb3dubG9hZChyZXMsIGJvb2tOYW1lKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhdmFpbGFibGVBdWRpb0ZpbGVzID0ge1xyXG5cdFx0XHR2aWV3OiAnYWN0aXZlTGlzdCcsXHJcblx0XHRcdGxvY2FsSWQ6ICdhdmFpbGFibGVBdWRpb0ZpbGVzJyxcclxuXHRcdFx0dHlwZTp7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZW1wbGF0ZTogXCIjbmFtZSM8YXVkaW8gY29udHJvbHMgc3JjPSdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXVkaW8vI2lkIyc+PC9hdWRpbz5cIlxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBvcmRlckJvb2sgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnb3JkZXJCb29rJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRsYWJlbDogJzxpIGNsYXNzPVwiZmFyIGZhLWhhbmQtcGFwZXJcIj48L2k+IE9yZGVyJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5vcmRlckJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBkb3dubG9hZEJvb2sgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRsb2NhbElkOiAnZG93bmxvYWRCb29rJyxcclxuXHRcdFx0dHlwZTogJ2ljb24nLFxyXG5cdFx0XHRpY29uOiAnZmFzIGZhLWRvd25sb2FkJyxcclxuXHRcdFx0d2lkdGg6IDYwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLm9yZGVyQm9vaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpa2VCb29rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0bG9jYWxJZDogJ2xpa2VCdXR0b24nLFxyXG5cdFx0XHRjc3M6ICdsaWtlX2J1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdpY29uJywgXHJcblx0XHRcdGljb246ICdmYXIgZmEtaGVhcnQnLFxyXG5cdFx0XHR3aWR0aDogNDUsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMubGlrZUJvb2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB0b2dnbGVDb21tZW50c0J0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGxvY2FsSWQ6ICdjb21tZW50QnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2h0bWxidXR0b24nLFxyXG5cdFx0XHRsYWJlbDogJ0NvbW1lbnRzIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj4nLFxyXG5cdFx0XHR3aWR0aDogMTIwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLkNvbW1lbnQudG9nZ2xlQ29tbWVudHModGhpcy5jb21tZW50c0dvdCwgdGhpcy4kJCgnY29tbWVudEJ1dHRvbicpKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBhZGRDb21tZW50ID0ge1xyXG5cdFx0XHRtYXJnaW46IDUsXHJcblx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0cGFkZGluZ1g6IDE3LFxyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmlldzondGV4dGFyZWEnLFxyXG5cdFx0XHRcdFx0bG9jYWxJZDogJ3VzZXJDb21tZW50JyxcclxuXHRcdFx0XHRcdGxhYmVsOiAnQ29tbWVudCcsXHJcblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uOiAndG9wJyxcclxuXHRcdFx0XHRcdGhlaWdodDogODBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRsb2NhbElkOiAnc2F2ZUNvbW1lbnRCdG4nLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ1NlbmQnLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5Db21tZW50LnNhdmVDb21tZW50KHRoaXMuJCQoJ3VzZXJDb21tZW50JykpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBjb21tZW50cyA9IHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBhZGRpbmdZOiAxMCxcclxuXHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0e30sIHRvZ2dsZUNvbW1lbnRzQnRuLCB7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bG9jYWxJZDogJ2NvbW1lbnRMYXlvdXQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdFx0cm93czogW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3BvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246J2NlbnRlcicsXHJcblx0XHRcdG1heEhlaWdodDogNTUwLFxyXG5cdFx0XHRib2R5OntcclxuXHRcdFx0XHR2aWV3OiAnc2Nyb2xsdmlldycsXHJcblx0XHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHRib29rQ292ZXIsIGJvb2tDYXJkLCBhdmFpbGFibGVUZXh0RmlsZXMsIGF2YWlsYWJsZUF1ZGlvRmlsZXMsXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZ1g6IDE1LFxyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJCb29rLCBkb3dubG9hZEJvb2ssIHt9LCBsaWtlQm9va1xyXG5cdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0YWRkQ29tbWVudCxcclxuXHRcdFx0XHRcdFx0Y29tbWVudHNcclxuXHRcdFx0XHRcdF0gXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRzaG93UG9wdXAoaWQpIHtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbiA9IHRoaXMuJCQoJ2xpa2VCdXR0b24nKTtcclxuXHRcdHRoaXMuZm9ybSA9IHRoaXMuJCQoJ2Jvb2tDYXJkUmVhZGVyJyk7XHJcblx0XHR0aGlzLmZpbGVzTGlzdCA9IHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpO1xyXG5cdFx0dGhpcy50b2dnbGVDb21tZW50c0J0biA9IHRoaXMuJCQoJ2NvbW1lbnRCdXR0b24nKTtcclxuXHRcdHRoaXMub3JkZXJCdG4gPSB0aGlzLiQkKCdvcmRlckJvb2snKTtcclxuXHRcdHRoaXMuY29tbWVudExheW91dCA9IHRoaXMuJCQoJ2NvbW1lbnRMYXlvdXQnKTtcclxuXHRcdHRoaXMudXNlcklkID0gdGhpcy5nZXRQYXJhbSgnaWQnLCB0cnVlKTtcclxuXHRcdFxyXG5cdFx0XHJcblxyXG5cdFx0Ym9va3NNb2RlbC5nZXRCb29rKGlkKS50aGVuKChib29rRGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCBib29rID0gYm9va0RhdGEuanNvbigpWzBdO1xyXG5cclxuXHRcdFx0dGhpcy5ib29rID0gYm9vaztcclxuXHRcdFx0dGhpcy5ib29rSWQgPSBib29rLmlkO1xyXG5cdFx0XHR0aGlzLkNvbW1lbnQgPSBuZXcgQ29tbWVudENsYXNzKHRoaXMudXNlcklkLCB0aGlzLmJvb2tJZCwgdGhpcy5jb21tZW50TGF5b3V0KTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuY2xlYXJGb3JtKCk7XHJcblxyXG5cdFx0XHR0aGlzLmZvcm0uc2V0VmFsdWVzKGJvb2spO1x0XHRcdFxyXG5cdFx0XHR0aGlzLiQkKCdib29rQ292ZXInKS5zZXRWYWx1ZXMoYm9vay5jb3Zlcl9waG90byB8fCBEVU1NWUNPVkVSKTtcclxuXHRcdFx0dGhpcy5mb3JtLnNldFZhbHVlcyhib29rKTtcclxuXHRcdFx0dGhpcy4kJCgnYm9va0NvdmVyJykuc2V0VmFsdWVzKGJvb2suY292ZXJfcGhvdG8gfHwgRFVNTVlDT1ZFUik7XHJcblx0XHRcdHRoaXMubGlrZUJ1dHRvbi5kZWZpbmUoJ2JhZGdlJywgYm9vay5jb3VudF9saWtlcyB8fCAnMCcpO1xyXG5cdFx0XHR0aGlzLmdldEZpbGVzKCk7XHJcblx0XHRcdHRoaXMuQ29tbWVudC5nZXRDb21tZW50cygpO1x0XHJcblx0XHRcdHRoaXMuY29tbWVudHNHb3QgPSB0cnVlO1x0XHRcdFxyXG5cdFx0XHR0b2dnbGVFbGVtZW50KGJvb2suYm9va19maWxlLCB0aGlzLiQkKCdkb3dubG9hZEJvb2snKSk7XHJcblx0XHRcdHRvZ2dsZUVsZW1lbnQoYm9vay5hdmFpbGFibGVfY29waWVzLCB0aGlzLiQkKCdvcmRlckJvb2snKSk7XHJcblx0XHRcdHRoaXMudG9nZ2xlTGlrZShib29rLnVzZXJJZCA9PSB0aGlzLnVzZXJJZCk7XHJcblx0XHRcdHRoaXMudG9nZ2xlT3JkZXIoYm9vay5vcmRlcl9kYXRlKTtcclxuXHRcclxuXHRcdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdFx0fSk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGdldEZpbGVzKCkge1xyXG5cdFx0ZmlsZXNNb2RlbC5nZXRJdGVtcyh0aGlzLmJvb2tJZCkudGhlbigoZGJEYXRhKSA9PiB7XHJcblx0XHRcdGNvbnN0IGZpbGVzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHJcblx0XHRcdGNvbnN0IHRleHRGaWxlcyA9IFtdO1xyXG5cdFx0XHRjb25zdCBhdWRpb0ZpbGVzID0gW107XHJcblxyXG5cdFx0XHRmaWxlc0Fyci5mb3JFYWNoKChmaWxlKSA9PiB7XHJcblx0XHRcdFx0c3dpdGNoKGZpbGUuZGF0YV90eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlICd0ZXh0JzogXHJcblx0XHRcdFx0XHRcdHRleHRGaWxlcy5wdXNoKGZpbGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzogXHJcblx0XHRcdFx0XHRcdGF1ZGlvRmlsZXMucHVzaChmaWxlKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlVGV4dEZpbGVzJykucGFyc2UodGV4dEZpbGVzKTtcclxuXHRcdFx0dGhpcy4kJCgnYXZhaWxhYmxlQXVkaW9GaWxlcycpLnBhcnNlKGF1ZGlvRmlsZXMpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvcmRlckJvb2soKSB7XHJcblx0XHRjb25zdCBvcmRlciA9IHtcclxuXHRcdFx0dXNlcklkOiB0aGlzLnVzZXJJZCxcclxuXHRcdFx0Ym9va0lkOiB0aGlzLmJvb2tJZCxcclxuXHRcdFx0b3JkZXJEYXRlOiBuZXcgRGF0ZSgpXHJcblx0XHR9O1xyXG5cclxuXHRcdG9yZGVyc01vZGVsLmFkZE9yZGVyKG9yZGVyKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRPcmRlcmVkVmFsKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnT3JkZXJlZCcpOyBcclxuXHRcdHRoaXMub3JkZXJCdG4ucmVmcmVzaCgpO1xyXG5cdFx0dGhpcy5vcmRlckJ0bi5kaXNhYmxlKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldE9yZGVyZWRWYWwoKSB7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmRlZmluZSgnbGFiZWwnLCAnPGkgY2xhc3M9XCJmYXIgZmEtaGFuZC1wYXBlclwiPjwvaT4gT3JkZXInKTsgIFxyXG5cdFx0dGhpcy5vcmRlckJ0bi5yZWZyZXNoKCk7XHJcblx0XHR0aGlzLm9yZGVyQnRuLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlT3JkZXIob3JkZXJlZCkge1xyXG5cdFx0aWYob3JkZXJlZCkge1xyXG5cdFx0XHR0aGlzLnNldE9yZGVyZWRWYWwoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVuc2V0T3JkZXJlZFZhbCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGlrZUJvb2soKSB7XHJcblx0XHRpZih0aGlzLmJvb2sudXNlcklkID09IHRoaXMudXNlcklkKSB7XHJcblx0XHRcdGxpa2VzTW9kZWwucmVtb3ZlTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGxpa2VzTW9kZWwuYWRkTGlrZSh0aGlzLnVzZXJJZCwgdGhpcy5ib29rSWQpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cdFxyXG5cdH1cdFxyXG5cclxuXHR0b2dnbGVMaWtlKGNvbmRpdGlvbikge1xyXG5cdFx0aWYoY29uZGl0aW9uKSB7XHJcblx0XHRcdHRoaXMuc2V0TGlrZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMudW5zZXRMaWtlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRMaWtlKCkge1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLmRlZmluZSgnaWNvbicsICdmYXMgZmEtaGVhcnQnKTtcclxuXHRcdHRoaXMubGlrZUJ1dHRvbi5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHR1bnNldExpa2UoKSB7XHJcblx0XHR0aGlzLmxpa2VCdXR0b24uZGVmaW5lKCdpY29uJywgJ2ZhciBmYS1oZWFydCcpO1xyXG5cdFx0dGhpcy5saWtlQnV0dG9uLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybSgpIHtcclxuXHRcdHRoaXMuZm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5maWxlc0xpc3QuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuJCQoJ2F2YWlsYWJsZVRleHRGaWxlcycpLmNsZWFyQWxsKCk7XHJcblx0XHR0aGlzLiQkKCdhdmFpbGFibGVBdWRpb0ZpbGVzJykuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuQ29tbWVudC5jbGVhckNvbW1lbnRzKCk7XHJcblx0fVxyXG59IiwiXHJcbmltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi4vLi4vc2NyaXB0cyc7IFxyXG5pbXBvcnQgY29tbWVudHNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvY29tbWVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWVudCB7XHJcblx0Y29uc3RydWN0b3IodXNlcklkLCBib29rSWQsIGNvbW1lbnRMYXlvdXQpIHtcclxuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xyXG5cdFx0dGhpcy5ib29rSWQgPSBib29rSWQ7XHJcblx0XHR0aGlzLmNvbW1lbnRMYXlvdXQgPSBjb21tZW50TGF5b3V0O1xyXG5cdH1cclxuXHJcblx0c2F2ZUNvbW1lbnQgKGNvbW1lbnRJbnB1dCwgcGFyZW50Q29tbWVudElkKSB7XHJcblx0XHRjb25zdCBjb21tZW50VGV4dCA9IGNvbW1lbnRJbnB1dC5nZXRWYWx1ZSgpO1xyXG5cdFx0Y29uc3QgY29tbWVudCA9IHtcclxuXHRcdFx0J3VzZXJJZCc6IHRoaXMudXNlcklkLFxyXG5cdFx0XHQnYm9va0lkJzogdGhpcy5ib29rSWQsXHJcblx0XHRcdCdjb250ZW50JzogY29tbWVudFRleHQsXHJcblx0XHRcdCdjb21tZW50RGF0ZSc6IG5ldyBEYXRlKCksXHJcblx0XHRcdCdjb21tZW50SWQnOiBwYXJlbnRDb21tZW50SWQgfHwgMFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb21tZW50c01vZGVsLmFkZEl0ZW0oY29tbWVudCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0dGhpcy5jbGVhckNvbW1lbnRzKCk7XHJcblx0XHRcdFx0aWYoIXBhcmVudENvbW1lbnRJZCkge1xyXG5cdFx0XHRcdFx0Y29tbWVudElucHV0LnNldFZhbHVlKCcnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5nZXRDb21tZW50cygpO1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5zaG93KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ2hpbGRDb21tZW50cyAoYXJyLCBpdGVtKSB7XHJcblx0XHRsZXQgaSA9IDA7XHJcblx0XHR3aGlsZSAoaSA8IGFyci5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBhcnJbaV07XHJcblx0XHRcdGlmIChlbC5jb21tZW50X2lkID09PSBpdGVtLmlkKSB7XHJcblx0XHRcdFx0Y29uc3QgY29tbWVudEl0ZW0gPSB0aGlzLmNvbXBvc2VDb21tZW50KGVsKTtcclxuXHRcdFx0XHQkJChgY29tbWVudF8ke2l0ZW0uaWR9YCkuYWRkVmlldyhjb21tZW50SXRlbSk7XHJcblx0XHRcdFx0YXJyLnNwbGljZShpLCAxKTtcclxuXHJcblx0XHRcdFx0aWYgKGFyci5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoYXJyLCBlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0Q29tbWVudHMoKSB7XHJcblx0XHRjb21tZW50c01vZGVsLmdldEl0ZW1zKHRoaXMuYm9va0lkKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0Y29uc3QgY29tbWVudHNBcnIgPSBkYkRhdGEuanNvbigpO1xyXG5cclxuXHRcdFx0bGV0IGkgPSAwO1xyXG5cdFx0XHRcclxuXHRcdFx0d2hpbGUgKGkgPCBjb21tZW50c0Fyci5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb21tZW50ID0gY29tbWVudHNBcnJbaV07XHJcblx0XHRcdFx0aWYgKCFjb21tZW50LmNvbW1lbnRfaWQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNvbW1lbnRJdGVtID0gdGhpcy5jb21wb3NlQ29tbWVudChjb21tZW50KTtcclxuXHRcdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5hZGRWaWV3KGNvbW1lbnRJdGVtKTtcclxuXHRcdFx0XHRcdGNvbW1lbnRzQXJyLnNwbGljZShpLCAxKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoY29tbWVudHNBcnIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZENoaWxkQ29tbWVudHMoY29tbWVudHNBcnIsIGNvbW1lbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRvZ2dsZUNvbW1lbnRzIChpc0NvbW1lbnRzR290LCB0b2dnbGVDb21tZW50c0J0bikge1xyXG5cdFx0Y29uc3QgaXNWaXNpYmxlID0gdGhpcy5jb21tZW50TGF5b3V0LmlzVmlzaWJsZSgpO1xyXG5cdFx0aWYgKGlzVmlzaWJsZSkge1xyXG5cdFx0XHR0b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT4nKTtcclxuXHRcdFx0dGhpcy5jb21tZW50TGF5b3V0LmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0b2dnbGVDb21tZW50c0J0bi5zZXRWYWx1ZSgnQ29tbWVudHMgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+Jyk7XHJcblx0XHRcdGlmICghaXNDb21tZW50c0dvdCkge1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tbWVudHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNvbW1lbnRMYXlvdXQuc2hvdygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9zZUNvbW1lbnQgKGNvbW1lbnQpIHtcclxuXHRcdGNvbnN0IGNvbW1lbnREYXRlID0gZm9ybWF0RGF0ZShjb21tZW50LmNvbW1lbnRfZGF0ZSk7XHJcblx0XHRjb25zdCBjb21tZW50QXV0aG9yID0gYCR7Y29tbWVudC51c2VyX25hbWV9ICR7Y29tbWVudC51c2VyX3N1cm5hbWV9YDtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpZDogYGNvbW1lbnRfJHtjb21tZW50LmlkfWAsXHJcblx0XHRcdGNzczogJ2NvbW1lbnRfaXRlbScsXHJcblx0XHRcdHBhZGRpbmc6IHsgbGVmdDogMTAgfSxcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6ICd0ZW1wbGF0ZScsXHJcblx0XHRcdFx0XHRhdXRvaGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGNzczogJ3RlbXBsYXRlJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbW1lbnRfaW5mb1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbW1lbnRfYXV0aG9yXCI+JHtjb21tZW50QXV0aG9yfTwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcImNvbW1lbnRfZGF0ZVwiPiR7Y29tbWVudERhdGV9PC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Y29tbWVudC5jb250ZW50fTwvZGl2PmAsXHJcblx0XHRcdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0XHRcdCd0ZW1wbGF0ZSc6ICgpID0+IHRoaXMucmVwbHlUb0NvbW1lbnQoY29tbWVudC5pZClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXBseVRvQ29tbWVudCAoY29tbWVudElkKSB7XHJcblx0XHRjb25zdCByZXBseVRvQ29tbWVudExheW91dCA9IHtcclxuXHRcdFx0cGFkZGluZzogMTAsXHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2aWV3OiAndGV4dGFyZWEnLFxyXG5cdFx0XHRcdFx0aWQ6ICdyZXBseVVzZXJDb21tZW50JyxcclxuXHRcdFx0XHRcdGhlaWdodDogNjBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRsb2NhbElkOiAnc2F2ZUNvbW1lbnRCdG4nLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ1NlbmQnLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDMwLFxyXG5cdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVDb21tZW50KCQkKCdyZXBseVVzZXJDb21tZW50JyksIGNvbW1lbnRJZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICghJCQoJ3JlcGx5VXNlckNvbW1lbnQnKSkge1xyXG5cdFx0XHQkJChgY29tbWVudF8ke2NvbW1lbnRJZH1gKS5hZGRWaWV3KHJlcGx5VG9Db21tZW50TGF5b3V0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsZWFyQ29tbWVudHMgKCkge1xyXG5cdFx0Y29uc3QgY29tbWVudHMgPSB0aGlzLmNvbW1lbnRMYXlvdXQuZ2V0Q2hpbGRWaWV3cygpO1xyXG5cdFx0aWYgKGNvbW1lbnRzKSB7XHJcblx0XHRcdGNvbnN0IGNvbW1lbnRzQ29weSA9IFsuLi5jb21tZW50c107XHJcblxyXG5cdFx0XHRjb21tZW50c0NvcHkuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29tbWVudExheW91dC5yZW1vdmVWaWV3KGNvbW1lbnQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uLy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCB0ZW1wbGF0ZTp0aGlzLmFwcC5jb25maWcubmFtZSwgY3NzOid3ZWJpeF9oZWFkZXIgYXBwX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbWVudSA9IHtcclxuXHRcdFx0dmlldzonbWVudScsIFxyXG5cdFx0XHRjc3M6J2FwcF9tZW51JyxcclxuXHRcdFx0d2lkdGg6MTgwLCBsYXlvdXQ6J3knLCBzZWxlY3Q6dHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwid2ViaXhfaWNvbiAjaWNvbiNcIj48L3NwYW4+ICN2YWx1ZSMgJyxcclxuXHRcdFx0dmFsdWU6ICdtYWluJyxcclxuXHRcdFx0ZGF0YTpbXHJcblx0XHRcdFx0eyB2YWx1ZTonTXkgYm9va3MnLCBpZDonbWFpbicsIGljb246J2ZhcyBmYS1ib29rbWFyaycgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidMaWJyYXJ5JywgaWQ6J2xpYnJhcnknLCAgaWNvbjonZmFzIGZhLWJvb2stcmVhZGVyJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1RvcHMnLCBpZDondG9wcycsICBpY29uOidmYXMgZmEtbGlzdCcgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidTZXR0aW5ncycsIGlkOidzZXR0aW5ncycsICBpY29uOidmYXMgZmEtY29nJyB9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbjp7XHJcblx0XHRcdFx0b25NZW51SXRlbUNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVzZXJJZCA9IHRoaXMuZ2V0UGFyYW0oXCJpZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuYXBwLnNob3coYHJlYWRlci5pbmRleD9pZD0ke3VzZXJJZH0vcmVhZGVyLiR7aWR9YCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHR5cGU6ICd3aWRlJywgcGFkZGluZ1k6IDEwLCBwYWRkaW5nWDogNSwgcm93czogW1xyXG5cdFx0XHRcdFx0XHR7ICRzdWJ2aWV3OiB0cnVlIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0Y29uc3QgZm9ybWF0ID0gd2ViaXguRGF0ZS5kYXRlVG9TdHIoJyVZLSVtLSVkJyk7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoe2N1cnJlbnREYXRlfSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0YXBwLnNob3coJy9sb2dpbicpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi4vY29tbW9uL2xpYnJhcnknO1xyXG5pbXBvcnQgQm9va0NhcmQgZnJvbSAnLi9ib29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkZXJMaWJyYXJ5IGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cdFx0Y29uc3QgbGlicmFyeUNvbmZpZyA9IHtcclxuXHRcdFx0cm9sZTogJ3JlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdG5ldyBMaWJyYXJ5KHRoaXMuYXBwLCBsaWJyYXJ5Q29uZmlnLCBCb29rQ2FyZClcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IG9yZGVyc01vZGVsIGZyb20gJy4uLy4uL21vZGVscy9vcmRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IHRlc3RSZXN1bHRzID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0bG9jYWxJZDogJ29yZGVyc0xpc3QnLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcdFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHRcdFx0XHRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2Jvb2tfdGl0bGUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQm9vaycsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnYXV0aG9yX25hbWUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQXV0aG9yJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyZW1vdmVDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUmVtb3ZlJyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPidcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS10cmFzaCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVCb29rKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9uID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0aWQ6ICdhZGRHcm91cCcsXHJcblx0XHRcdHZhbHVlOiAnQWRkJyxcclxuXHRcdFx0dHlwZTonZm9ybScsXHJcblx0XHRcdGlucHV0V2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHt9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRyb3dzOiBbdGVzdFJlc3VsdHMsIGJ1dHRvbl1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5ncmlkID0gdGhpcy4kJCgnb3JkZXJzTGlzdCcpO1xyXG5cdFx0dGhpcy51c2VySWQgPSB0aGlzLmdldFBhcmFtKFwiaWRcIiwgdHJ1ZSk7XHJcblx0XHR0aGlzLnBhcnNlQm9va3MoKTtcdFx0XHJcblx0fVxyXG5cclxuXHRhc3luYyBwYXJzZUJvb2tzKCkge1xyXG5cdFx0YXdhaXQgb3JkZXJzTW9kZWwuZ2V0SXRlbXModGhpcy51c2VySWQpLnRoZW4oKGRiRGF0YSkgPT4ge1xyXG5cdFx0XHRsZXQgb3JkZXJzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0dGhpcy5ncmlkLmNsZWFyQWxsKCk7XHJcblx0XHRcdHRoaXMuJCQoJ29yZGVyc0xpc3QnKS5wYXJzZShvcmRlcnNBcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW1vdmVCb29rKGlkKSB7XHJcblx0XHRhd2FpdCBvcmRlcnNNb2RlbC5yZW1vdmVJdGVtKGlkKTtcclxuXHRcdGF3YWl0IHRoaXMucGFyc2VCb29rcygpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgdXNlcnNNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcnMnO1xyXG5pbXBvcnQge3VwZGF0ZUl0ZW19IGZyb20gJy4uLy4uL3NjcmlwdHMnOyBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnc2F2ZUNoYW5nZXMnLFxyXG5cdFx0XHR2YWx1ZTogJ1NhdmUnLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdGlucHV0V2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdXNlckRhdGEgPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3VzZXJEYXRhRm9ybScsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICd1c2VyX2lkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnRmlyc3QgbmFtZScsbmFtZTogJ3VzZXJfbmFtZScsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdMYXN0IG5hbWUnLG5hbWU6ICd1c2VyX3N1cm5hbWUnLCBsYWJlbFdpZHRoOiA5MCwgbGFiZWxBbGlnbjogJ3JpZ2h0J30sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnUGFzc3BvcnQgSUQnLG5hbWU6ICdwYXNzcG9ydF9JRCcsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdkYXRlcGlja2VyJywgbGFiZWw6ICdCaXJ0aCBkYXRlJyxuYW1lOiAnYmlydGhfZGF0ZScsIGxvY2FsSWQ6ICdiaXJ0aF9kYXRlJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ0FkZHJlc3MnLG5hbWU6ICdhZGRyZXNzJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Bob25lJyxuYW1lOiAncGhvbmVfbnVtYmVycycsIGxhYmVsV2lkdGg6IDkwLCBsYWJlbEFsaWduOiAncmlnaHQnfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdFbWFpbCcsbmFtZTogJ2VtYWlsJywgbGFiZWxXaWR0aDogOTAsIGxhYmVsQWxpZ246ICdyaWdodCd9LFxyXG5cdFx0XHRcdGJ1dHRvblxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJvd3M6IFt1c2VyRGF0YV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0Y29uc3QgaWQgPSB0aGlzLmdldFBhcmFtKCdpZCcsIHRydWUpO1xyXG5cclxuXHRcdHVzZXJzTW9kZWwuZ2V0SXRlbShpZCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VyRGF0YSA9IGRhdGEuanNvbigpWzBdO1xyXG5cdFx0XHR1c2VyRGF0YS5iaXJ0aERhdGUgPSBuZXcgRGF0ZSAodXNlckRhdGEuYmlydGhEYXRlKTtcclxuXHRcdFx0dGhpcy4kJCgndXNlckRhdGFGb3JtJykuc2V0VmFsdWVzKHVzZXJEYXRhKTtcclxuXHRcdH0pO1x0XHJcblx0fVxyXG5cclxuXHRzYXZlRm9ybSAoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gdGhpcy4kJCgndXNlckRhdGFGb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRjb25zdCBzdWNjZXNzQWN0aW9uID0gdGhpcy53ZWJpeC5tZXNzYWdlKCdOZXcgZGF0YSBzYXZlZCcpO1xyXG5cdFx0dXBkYXRlSXRlbSh1c2Vyc01vZGVsLCBkYXRhLCBzdWNjZXNzQWN0aW9uKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSBcIndlYml4LWpldFwiO1xyXG5pbXBvcnQgYm9va3NNb2RlbCBmcm9tICcuLi8uLi9tb2RlbHMvYm9va3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9va1RvcHMgZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZpZXc6ICdsaXN0JyxcclxuXHRcdFx0XHRcdHdpZHRoOiAyNTAsXHJcblx0XHRcdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdFx0XHRkYXRhOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dPbGRlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdPbGRlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dOZXdlc3RCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdOZXdlc3QgYm9va3MnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRpZDogJ3Nob3dNb3N0UGFnZXNCb29rcycsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6ICdNb3N0IHBhZ2VzIGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aWQ6ICdzaG93Qm9va3NXaXRoTG9uZ05hbWVzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0Jvb2tzIHdpdGggbG9uZ2VzdCBuYW1lcydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiAnc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzJyxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogJ0F1dGhvcnMgd2l0aCBtb3N0IGJvb2tzJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0b25JdGVtQ2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaChpZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd09sZGVzdEJvb2tzJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93T2xkZXN0Qm9va3MoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzaG93TmV3ZXN0Qm9va3MnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dOZXdlc3RCb29rcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dNb3N0UGFnZXNCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vc3RQYWdlc0Jvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hvd0Jvb2tzV2l0aExvbmdOYW1lcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Nob3dBdXRob3JzV2l0aE1vc3RCb29rcyc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0F1dGhvcnNXaXRoTW9zdEJvb2tzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdib29rc1RvcCcsXHJcblx0XHRcdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmdyaWQgPSAkJCgnYm9va3NUb3AnKTtcclxuXHRcdGJvb2tzTW9kZWwuZ2V0RGF0YUZyb21TZXJ2ZXIoKS50aGVuKChkYkRhdGEpID0+IHtcclxuXHRcdFx0bGV0IGJvb2tzQXJyID0gZGJEYXRhLmpzb24oKTtcclxuXHRcdFx0Ym9va3NBcnIgPSBib29rc0Fyci5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwueWVhcl9vZl9wdWJsaWNhdGlvbiA9IG5ldyBEYXRlKGVsLnllYXJfb2ZfcHVibGljYXRpb24pO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuYm9va3NBcnIgPSBib29rc0FycjtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGVmYXVsdENvbmZpZyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYm9va190aXRsZScsXHJcblx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRoZWFkZXI6ICdUaXRsZSdcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAnYXV0aG9yX25hbWUnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0aGVhZGVyOiAnQXV0aG9yJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdnZW5yZXMnLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdHZW5yZXMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ2NvdW50cnlfb2ZfcHVibGljYXRpb24nLFxyXG5cdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRoZWFkZXI6ICdDb3VudHJ5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICd5ZWFyX29mX3B1YmxpY2F0aW9uJyxcclxuXHRcdFx0XHRzb3J0OiAnZGF0ZScsXHJcblx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVZXCIpLFxyXG5cdFx0XHRcdGhlYWRlcjogJ1llYXInXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ251bWJlcl9vZl9wYWdlcycsXHJcblx0XHRcdFx0aGVhZGVyOiAnUGFnZXMnLFxyXG5cdFx0XHRcdHdpZHRoOiA2MFxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0c2hvd09sZGVzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0cmV0dXJuIGEueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGIueWVhcl9vZl9wdWJsaWNhdGlvbjtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd05ld2VzdEJvb2tzKCkge1xyXG5cdFx0bGV0IGRhdGEgPSBbLi4udGhpcy5ib29rc0Fycl07XHJcblx0XHRkYXRhLnNvcnQoKGEsIGIpID0+IGIueWVhcl9vZl9wdWJsaWNhdGlvbiAtIGEueWVhcl9vZl9wdWJsaWNhdGlvbik7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93TW9zdFBhZ2VzQm9va3MoKSB7XHJcblx0XHRsZXQgZGF0YSA9IFsuLi50aGlzLmJvb2tzQXJyXTtcclxuXHRcdGRhdGEuc29ydCgoYSwgYikgPT4gIGIubnVtYmVyX29mX3BhZ2VzIC0gYS5udW1iZXJfb2ZfcGFnZXMpO1xyXG5cdFx0dGhpcy5zaG93UmVzdWx0cyhkYXRhLCB0aGlzLmRlZmF1bHRDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c2hvd0Jvb2tzV2l0aExvbmdOYW1lcygpIHtcclxuXHRcdGxldCBkYXRhID0gWy4uLnRoaXMuYm9va3NBcnJdO1xyXG5cdFx0ZGF0YS5zb3J0KChhLCBiKSA9PiBiLmJvb2tfdGl0bGUubGVuZ3RoIC0gYS5ib29rX3RpdGxlLmxlbmd0aCk7XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGRhdGEsIHRoaXMuZGVmYXVsdENvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRzaG93QXV0aG9yc1dpdGhNb3N0Qm9va3MoKSB7XHJcblx0XHRsZXQgYXV0aG9ycyA9IFtdO1xyXG5cdFx0dGhpcy5ib29rc0Fyci5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IGF1dGhvcnMuZmluZEluZGV4KGF1dGhvciA9PiBhdXRob3IubmFtZSA9PSBlbC5hdXRob3JfbmFtZSk7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0XHRhdXRob3JzLnB1c2goe25hbWU6IGVsLmF1dGhvcl9uYW1lLCBib29rc0NvdW50OiAxfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YXV0aG9yc1tpbmRleF0uYm9va3NDb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRhdXRob3JzID0gYXV0aG9ycy5zb3J0KChhLCBiKSA9PiBiLmJvb2tzQ291bnQgLSBhLmJvb2tzQ291bnQpO1xyXG5cclxuXHRcdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogJ25hbWUnLFxyXG5cdFx0XHRcdGhlYWRlcjogJ05hbWUnLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6ICdib29rc0NvdW50JyxcclxuXHRcdFx0XHRoZWFkZXI6ICdCb29rcyBjb3VudCcsXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0XHR0aGlzLnNob3dSZXN1bHRzKGF1dGhvcnMsIGNvbHVtbnMpO1xyXG5cdH1cclxuXHJcblx0c2hvd1Jlc3VsdHMoZGF0YSwgY29sdW1ucykge1xyXG5cdFx0dGhpcy5ncmlkLmRlZmluZSgnY29sdW1ucycsIGNvbHVtbnMpO1xyXG5cdFx0dGhpcy5ncmlkLnJlZnJlc2hDb2x1bW5zKCk7XHJcblx0XHRkYXRhID0gZGF0YS5zbGljZSgwLCAxMCk7XHJcblx0XHR0aGlzLmdyaWQuY2xlYXJBbGwoKTtcclxuXHRcdHRoaXMuZ3JpZC5wYXJzZShkYXRhKTtcclxuXHRcdHRoaXMuZ3JpZC5zaG93KCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJGb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdyZWdpc3RlckZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Vlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdyZWdpc3RlckJ0bicsIHZhbHVlOiAnUmVnaXN0ZXInLCB0eXBlOiAnZm9ybSdcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRm9ybSxcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ3JlZ2lzdGVyQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdyZWdpc3RlckZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLnJlZ2lzdGVyKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSByZXNwb25zZS5qc29uKCkuc3RhdHVzO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gcmVzcG9uc2UuanNvbigpLmlkO1xyXG5cdFx0XHRcdGlmIChzdGF0dXMgPT09IDIpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdyhgcmVhZGVyLmluZGV4P2lkPSR7aWR9L3JlYWRlci5tYWluYCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYocmVzcG9uc2UuanNvbigpLnJlYXNvbiA9PT0gJ3VzZXJFeGlzdCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93KCcvbG9naW4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UuanNvbigpLmRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9