webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/mainContext */ "./context/mainContext.js");
/* harmony import */ var _utils_currencyProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/currencyProvider */ "./utils/currencyProvider.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Image */ "./components/Image.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");





var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\jamstack-ecommerce\\pages\\checkout.js",
    _this2 = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










 // Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_13__["loadStripe"])("sk_test_51IVzFMEBSrwAYblKOrWDezFeLjLxnHi06osXTFAbi3g1LE4Dx9wc09ZkUQFPHsDxtd0miwO0OZ6Ne4lmLnILJspv00NWKygfNU");

function CheckoutWithContext(props) {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_6__["ContextProviderComponent"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_6__["SiteContext"].Consumer, {
      children: function children(context) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["Elements"], {
          stripe: stripePromise,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Checkout, _objectSpread(_objectSpread({}, props), {}, {
            context: context
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_c = CheckoutWithContext;

var calculateShipping = function calculateShipping() {
  return 0;
};

var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      name = _ref.name,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
    onChange: onChange,
    value: value,
    className: "mt-2 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    type: "text",
    placeholder: placeholder,
    name: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, _this2);
};

_c2 = Input;

var Checkout = function Checkout(_ref2) {
  _s();

  var _jsxDEV2, _jsxDEV3;

  var context = _ref2.context;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      errorMessage = _useState[0],
      setErrorMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      orderCompleted = _useState2[0],
      setOrderCompleted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: "",
    email: "",
    street: "",
    city: "",
    postal_code: "",
    state: ""
  }),
      input = _useState3[0],
      setInput = _useState3[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["useElements"])();

  var onChange = function onChange(e) {
    setErrorMessage(null);
    setInput(_objectSpread(_objectSpread({}, input), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var name, email, street, city, postal_code, state, total, clearCart, cardElement, _yield$stripe$createP, error, paymentMethod, order;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              name = input.name, email = input.email, street = input.street, city = input.city, postal_code = input.postal_code, state = input.state;
              total = context.total, clearCart = context.clearCart;

              if (!(!stripe || !elements)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              if (!(!street || !city || !postal_code || !state)) {
                _context.next = 8;
                break;
              }

              setErrorMessage("Please fill in the form!");
              return _context.abrupt("return");

            case 8:
              // Get a reference to a mounted CardElement. Elements knows how
              // to find your CardElement because there can only ever be one of
              // each type of element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["CardElement"]); // Use your card Element with other Stripe.js APIs

              _context.next = 11;
              return stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: {
                  name: name
                }
              });

            case 11:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;

              if (!error) {
                _context.next = 17;
                break;
              }

              setErrorMessage(error.message);
              return _context.abrupt("return");

            case 17:
              order = {
                email: email,
                amount: total,
                address: state,
                // should this be {street, city, postal_code, state} ?
                payment_method_id: paymentMethod.id,
                receipt_email: "customer@example.com",
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_11__["v4"])()
              }; // TODO call API

              setOrderCompleted(true);
              clearCart();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var numberOfItemsInCart = context.numberOfItemsInCart,
      cart = context.cart,
      total = context.total;
  var cartEmpty = numberOfItemsInCart === Number(0);

  if (orderCompleted) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
        children: "Thanks! Your order has been successfully processed."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this2);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "flex flex-col items-center pb-10",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
        children: "Jamstack ECommerce - Checkout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "description",
        content: "Check out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Jamstack ECommerce - Checkpit"
      }, "title", false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "\r flex flex-col w-full\r c_large:w-c_large\r ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "pt-10 pb-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          className: "text-5xl font-light mb-6",
          children: "Checkout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/cart",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            "aria-label": "Cart",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "cursor-pointer flex  items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaLongArrowAltLeft"], {
                className: "mr-2 text-gray-600"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                className: "text-gray-600 text-sm",
                children: "Edit Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this2), cartEmpty ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
        children: "No items in cart."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "",
          children: cart.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "border-b py-10",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Image__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  className: "w-32 m-0",
                  src: item.image,
                  alt: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 23
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                  className: "m-0 pl-10 text-gray-600",
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 23
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "flex flex-1 justify-end",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                    className: "m-0 pl-10 text-gray-900 font-semibold",
                    children: _utils_currencyProvider__WEBPACK_IMPORTED_MODULE_7__["default"] + item.price
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 25
                  }, _this2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 23
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 21
              }, _this2)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 19
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "flex flex-1 flex-col md:flex-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "flex flex-1 pt-8 flex-col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "mt-4 border-t pt-10",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [errorMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                  children: errorMessage
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 37
                }, _this2) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
                  onChange: onChange,
                  value: input.name,
                  name: "name",
                  placeholder: "Cardholder name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 21
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["CardElement"], {
                  className: "mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 21
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
                  onChange: onChange,
                  value: input.email,
                  name: "email",
                  placeholder: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 21
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
                  onChange: onChange,
                  value: input.street,
                  name: "street",
                  placeholder: "Street"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 21
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
                  onChange: onChange,
                  value: input.city,
                  name: "city",
                  placeholder: "City"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 21
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
                  onChange: onChange,
                  value: input.state,
                  name: "state",
                  placeholder: "State"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 21
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Input, {
                  onChange: onChange,
                  value: input.postal_code,
                  name: "postal_code",
                  placeholder: "Postal Code"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 21
                }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", (_jsxDEV2 = {
                  type: "submit",
                  disabled: !stripe,
                  onClick: handleSubmit,
                  className: "hidden md:block bg-primary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "type", "button"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV2, "children", "Confirm order"), _jsxDEV2), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 21
                }, _this2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 19
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 17
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 15
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "md:pt-20",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "pl-4 flex flex-1 pt-2 md:pt-8 mt-2 sm:mt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                className: "text-sm pr-10 text-left",
                children: "Subtotal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 19
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                className: "w-38 flex text-right justify-end",
                children: _utils_currencyProvider__WEBPACK_IMPORTED_MODULE_7__["default"] + total
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 19
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 17
            }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "pl-4 flex flex-1 my-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                className: "text-sm pr-10",
                children: "Shipping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 19
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                className: "w-38 flex justify-end",
                children: "FREE SHIPPING"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 19
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 17
            }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "md:ml-4 pl-2 flex flex-1 bg-gray-200 pr-4 pb-1 pt-2 mt-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                className: "text-sm pr-10",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 19
              }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                className: "font-semibold w-38 flex justify-end",
                children: _utils_currencyProvider__WEBPACK_IMPORTED_MODULE_7__["default"] + (total + calculateShipping())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 19
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 17
            }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", (_jsxDEV3 = {
              type: "submit",
              disabled: !stripe,
              onClick: handleSubmit,
              className: "md:hidden bg-primary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
            }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV3, "type", "button"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsxDEV3, "children", "Confirm order"), _jsxDEV3), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 17
            }, _this2)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 15
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }, _this2)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, _this2)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }, _this2);
};

_s(Checkout, "RQs0Ub1cjqW1n5ivEbw9IXZeewk=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["useElements"]];
});

_c3 = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutWithContext);

var _c, _c2, _c3;

$RefreshReg$(_c, "CheckoutWithContext");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "Checkout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJDaGVja291dFdpdGhDb250ZXh0IiwicHJvcHMiLCJjb250ZXh0IiwiY2FsY3VsYXRlU2hpcHBpbmciLCJJbnB1dCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJDaGVja291dCIsInVzZVN0YXRlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwib3JkZXJDb21wbGV0ZWQiLCJzZXRPcmRlckNvbXBsZXRlZCIsImVtYWlsIiwic3RyZWV0IiwiY2l0eSIsInBvc3RhbF9jb2RlIiwic3RhdGUiLCJpbnB1dCIsInNldElucHV0Iiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG90YWwiLCJjbGVhckNhcnQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImJpbGxpbmdfZGV0YWlscyIsImVycm9yIiwicGF5bWVudE1ldGhvZCIsIm1lc3NhZ2UiLCJvcmRlciIsImFtb3VudCIsImFkZHJlc3MiLCJwYXltZW50X21ldGhvZF9pZCIsImlkIiwicmVjZWlwdF9lbWFpbCIsInV1aWQiLCJudW1iZXJPZkl0ZW1zSW5DYXJ0IiwiY2FydCIsImNhcnRFbXB0eSIsIk51bWJlciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltYWdlIiwiREVOT01JTkFUSU9OIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBUUE7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFVLENBQzlCLDZHQUQ4QixDQUFoQzs7QUFJQSxTQUFTQyxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFBQTs7QUFDbEMsc0JBQ0UscUVBQUMsNkVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxnRUFBRCxDQUFhLFFBQWI7QUFBQSxnQkFDRyxrQkFBQ0MsT0FBRDtBQUFBLDRCQUNDLHFFQUFDLGlFQUFEO0FBQVUsZ0JBQU0sRUFBRUosYUFBbEI7QUFBQSxpQ0FDRSxxRUFBQyxRQUFELGtDQUFjRyxLQUFkO0FBQXFCLG1CQUFPLEVBQUVDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0tBWlFGLG1COztBQWNULElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixTQUFPLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsS0FBYixRQUFhQSxLQUFiO0FBQUEsTUFBb0JDLElBQXBCLFFBQW9CQSxJQUFwQjtBQUFBLE1BQTBCQyxXQUExQixRQUEwQkEsV0FBMUI7QUFBQSxzQkFDWjtBQUNFLFlBQVEsRUFBRUgsUUFEWjtBQUVFLFNBQUssRUFBRUMsS0FGVDtBQUdFLGFBQVMsRUFBQyx5SUFIWjtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsZUFBVyxFQUFFRSxXQUxmO0FBTUUsUUFBSSxFQUFFRDtBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWTtBQUFBLENBQWQ7O01BQU1ILEs7O0FBV04sSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBaUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFkUCxPQUFjLFNBQWRBLE9BQWM7O0FBQUEsa0JBQ1FRLHNEQUFRLENBQUMsSUFBRCxDQURoQjtBQUFBLE1BQ3pCQyxZQUR5QjtBQUFBLE1BQ1hDLGVBRFc7O0FBQUEsbUJBRVlGLHNEQUFRLENBQUMsS0FBRCxDQUZwQjtBQUFBLE1BRXpCRyxjQUZ5QjtBQUFBLE1BRVRDLGlCQUZTOztBQUFBLG1CQUdOSixzREFBUSxDQUFDO0FBQ2pDSCxRQUFJLEVBQUUsRUFEMkI7QUFFakNRLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsVUFBTSxFQUFFLEVBSHlCO0FBSWpDQyxRQUFJLEVBQUUsRUFKMkI7QUFLakNDLGVBQVcsRUFBRSxFQUxvQjtBQU1qQ0MsU0FBSyxFQUFFO0FBTjBCLEdBQUQsQ0FIRjtBQUFBLE1BR3pCQyxLQUh5QjtBQUFBLE1BR2xCQyxRQUhrQjs7QUFZaEMsTUFBTUMsTUFBTSxHQUFHQywwRUFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsNEVBQVcsRUFBNUI7O0FBRUEsTUFBTXBCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNxQixDQUFELEVBQU87QUFDdEJkLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FTLFlBQVEsaUNBQU1ELEtBQU4scUdBQWNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTcEIsSUFBdkIsRUFBOEJtQixDQUFDLENBQUNDLE1BQUYsQ0FBU3JCLEtBQXZDLEdBQVI7QUFDRCxHQUhEOztBQUtBLE1BQU1zQixZQUFZO0FBQUEsaU1BQUcsaUJBQU9DLEtBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsbUJBQUssQ0FBQ0MsY0FBTjtBQUNRdkIsa0JBRlcsR0FFdUNhLEtBRnZDLENBRVhiLElBRlcsRUFFTFEsS0FGSyxHQUV1Q0ssS0FGdkMsQ0FFTEwsS0FGSyxFQUVFQyxNQUZGLEdBRXVDSSxLQUZ2QyxDQUVFSixNQUZGLEVBRVVDLElBRlYsR0FFdUNHLEtBRnZDLENBRVVILElBRlYsRUFFZ0JDLFdBRmhCLEdBRXVDRSxLQUZ2QyxDQUVnQkYsV0FGaEIsRUFFNkJDLEtBRjdCLEdBRXVDQyxLQUZ2QyxDQUU2QkQsS0FGN0I7QUFHWFksbUJBSFcsR0FHVTdCLE9BSFYsQ0FHWDZCLEtBSFcsRUFHSkMsU0FISSxHQUdVOUIsT0FIVixDQUdKOEIsU0FISTs7QUFBQSxvQkFLZixDQUFDVixNQUFELElBQVcsQ0FBQ0UsUUFMRztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBLG9CQVlmLENBQUNSLE1BQUQsSUFBVyxDQUFDQyxJQUFaLElBQW9CLENBQUNDLFdBQXJCLElBQW9DLENBQUNDLEtBWnRCO0FBQUE7QUFBQTtBQUFBOztBQWFqQlAsNkJBQWUsQ0FBQywwQkFBRCxDQUFmO0FBYmlCOztBQUFBO0FBaUJuQjtBQUNBO0FBQ0E7QUFDTXFCLHlCQXBCYSxHQW9CQ1QsUUFBUSxDQUFDVSxVQUFULENBQW9CQyxvRUFBcEIsQ0FwQkQsRUFzQm5COztBQXRCbUI7QUFBQSxxQkF1Qm9CYixNQUFNLENBQUNjLG1CQUFQLENBQTJCO0FBQ2hFQyxvQkFBSSxFQUFFLE1BRDBEO0FBRWhFQyxvQkFBSSxFQUFFTCxXQUYwRDtBQUdoRU0sK0JBQWUsRUFBRTtBQUFFaEMsc0JBQUksRUFBRUE7QUFBUjtBQUgrQyxlQUEzQixDQXZCcEI7O0FBQUE7QUFBQTtBQXVCWGlDLG1CQXZCVyx5QkF1QlhBLEtBdkJXO0FBdUJKQywyQkF2QkkseUJBdUJKQSxhQXZCSTs7QUFBQSxtQkE2QmZELEtBN0JlO0FBQUE7QUFBQTtBQUFBOztBQThCakI1Qiw2QkFBZSxDQUFDNEIsS0FBSyxDQUFDRSxPQUFQLENBQWY7QUE5QmlCOztBQUFBO0FBa0NiQyxtQkFsQ2EsR0FrQ0w7QUFDWjVCLHFCQUFLLEVBQUxBLEtBRFk7QUFFWjZCLHNCQUFNLEVBQUViLEtBRkk7QUFHWmMsdUJBQU8sRUFBRTFCLEtBSEc7QUFHSTtBQUNoQjJCLGlDQUFpQixFQUFFTCxhQUFhLENBQUNNLEVBSnJCO0FBS1pDLDZCQUFhLEVBQUUsc0JBTEg7QUFNWkQsa0JBQUUsRUFBRUUsZ0RBQUk7QUFOSSxlQWxDSyxFQTBDbkI7O0FBQ0FuQywrQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FrQix1QkFBUzs7QUE1Q1U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkosWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFwQmdDLE1BbUV4QnNCLG1CQW5Fd0IsR0FtRWFoRCxPQW5FYixDQW1FeEJnRCxtQkFuRXdCO0FBQUEsTUFtRUhDLElBbkVHLEdBbUVhakQsT0FuRWIsQ0FtRUhpRCxJQW5FRztBQUFBLE1BbUVHcEIsS0FuRUgsR0FtRWE3QixPQW5FYixDQW1FRzZCLEtBbkVIO0FBb0VoQyxNQUFNcUIsU0FBUyxHQUFHRixtQkFBbUIsS0FBS0csTUFBTSxDQUFDLENBQUQsQ0FBaEQ7O0FBRUEsTUFBSXhDLGNBQUosRUFBb0I7QUFDbEIsd0JBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUtEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFDRSxnQkFBUSxFQUFDLFVBRFg7QUFFRSxlQUFPLEVBQUM7QUFGVixTQUdNLE9BSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFO0FBQ0UsZUFBUyxFQUFDLGdEQURaO0FBQUEsOEJBTUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsMEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQUEsaUNBQ0U7QUFBRywwQkFBVyxNQUFkO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLG1DQUFmO0FBQUEsc0NBQ0UscUVBQUMsaUVBQUQ7QUFBb0IseUJBQVMsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBRyx5QkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixFQWtCR3VDLFNBQVMsZ0JBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFEsZ0JBR1I7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsRUFBZjtBQUFBLG9CQUNHRCxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekIsZ0NBQ0U7QUFBSyx1QkFBUyxFQUFDLGdCQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLG1CQUFmO0FBQUEsd0NBQ0UscUVBQUMsMERBQUQ7QUFDRSwyQkFBUyxFQUFDLFVBRFo7QUFFRSxxQkFBRyxFQUFFRCxJQUFJLENBQUNFLEtBRlo7QUFHRSxxQkFBRyxFQUFFRixJQUFJLENBQUNoRDtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFNRTtBQUFHLDJCQUFTLEVBQUMseUJBQWI7QUFBQSw0QkFBd0NnRCxJQUFJLENBQUNoRDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5GLGVBT0U7QUFBSywyQkFBUyxFQUFDLHlCQUFmO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLHVDQUFiO0FBQUEsOEJBQ0dtRCwrREFBWSxHQUFHSCxJQUFJLENBQUNJO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQXFDSCxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGO0FBaUJELFdBbEJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQXNCRTtBQUFLLG1CQUFTLEVBQUMsa0NBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsMkJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDRTtBQUFNLHdCQUFRLEVBQUU1QixZQUFoQjtBQUFBLDJCQUNHakIsWUFBWSxnQkFBRztBQUFBLDRCQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQUgsR0FBaUMsRUFEaEQsZUFFRSxxRUFBQyxLQUFEO0FBQ0UsMEJBQVEsRUFBRU4sUUFEWjtBQUVFLHVCQUFLLEVBQUVlLEtBQUssQ0FBQ2IsSUFGZjtBQUdFLHNCQUFJLEVBQUMsTUFIUDtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBUUUscUVBQUMsb0VBQUQ7QUFBYSwyQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUkYsZUFTRSxxRUFBQyxLQUFEO0FBQ0UsMEJBQVEsRUFBRUYsUUFEWjtBQUVFLHVCQUFLLEVBQUVlLEtBQUssQ0FBQ0wsS0FGZjtBQUdFLHNCQUFJLEVBQUMsT0FIUDtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVRGLGVBZUUscUVBQUMsS0FBRDtBQUNFLDBCQUFRLEVBQUVWLFFBRFo7QUFFRSx1QkFBSyxFQUFFZSxLQUFLLENBQUNKLE1BRmY7QUFHRSxzQkFBSSxFQUFDLFFBSFA7QUFJRSw2QkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFmRixlQXFCRSxxRUFBQyxLQUFEO0FBQ0UsMEJBQVEsRUFBRVgsUUFEWjtBQUVFLHVCQUFLLEVBQUVlLEtBQUssQ0FBQ0gsSUFGZjtBQUdFLHNCQUFJLEVBQUMsTUFIUDtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXJCRixlQTJCRSxxRUFBQyxLQUFEO0FBQ0UsMEJBQVEsRUFBRVosUUFEWjtBQUVFLHVCQUFLLEVBQUVlLEtBQUssQ0FBQ0QsS0FGZjtBQUdFLHNCQUFJLEVBQUMsT0FIUDtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQTNCRixlQWlDRSxxRUFBQyxLQUFEO0FBQ0UsMEJBQVEsRUFBRWQsUUFEWjtBQUVFLHVCQUFLLEVBQUVlLEtBQUssQ0FBQ0YsV0FGZjtBQUdFLHNCQUFJLEVBQUMsYUFIUDtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWpDRixlQXVDRTtBQUNFLHNCQUFJLEVBQUMsUUFEUDtBQUVFLDBCQUFRLEVBQUUsQ0FBQ0ksTUFGYjtBQUdFLHlCQUFPLEVBQUVNLFlBSFg7QUFJRSwyQkFBUyxFQUFDO0FBSlosK0hBS08sUUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQXNERTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyw0Q0FBZjtBQUFBLHNDQUNFO0FBQUcseUJBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFO0FBQUcseUJBQVMsRUFBQyxrQ0FBYjtBQUFBLDBCQUNHOEIsK0RBQVksR0FBRzNCO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBT0U7QUFBSyx1QkFBUyxFQUFDLHVCQUFmO0FBQUEsc0NBQ0U7QUFBRyx5QkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFHLHlCQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBV0U7QUFBSyx1QkFBUyxFQUFDLDBEQUFmO0FBQUEsc0NBQ0U7QUFBRyx5QkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFHLHlCQUFTLEVBQUMscUNBQWI7QUFBQSwwQkFDRzJCLCtEQUFZLElBQUkzQixLQUFLLEdBQUc1QixpQkFBaUIsRUFBN0I7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYRixlQWlCRTtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLHNCQUFRLEVBQUUsQ0FBQ21CLE1BRmI7QUFHRSxxQkFBTyxFQUFFTSxZQUhYO0FBSUUsdUJBQVMsRUFBQztBQUpaLDJIQUtPLFFBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUE2SUQsQ0EzTkQ7O0dBQU1uQixRO1VBWVdjLGtFLEVBQ0VFLG9FOzs7TUFiYmhCLFE7QUE2TlNULGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjQ1ZjgwZjkyMmNiNTZkOGQ5YTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyBTaXRlQ29udGV4dCwgQ29udGV4dFByb3ZpZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbnRleHQvbWFpbkNvbnRleHRcIlxyXG5pbXBvcnQgREVOT01JTkFUSU9OIGZyb20gXCIuLi91dGlscy9jdXJyZW5jeVByb3ZpZGVyXCJcclxuaW1wb3J0IHsgRmFMb25nQXJyb3dBbHRMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbWFnZVwiXHJcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiXHJcblxyXG5pbXBvcnQge1xyXG4gIENhcmRFbGVtZW50LFxyXG4gIEVsZW1lbnRzLFxyXG4gIHVzZVN0cmlwZSxcclxuICB1c2VFbGVtZW50cyxcclxufSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIlxyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCJcclxuXHJcbi8vIE1ha2Ugc3VyZSB0byBjYWxsIGBsb2FkU3RyaXBlYCBvdXRzaWRlIG9mIGEgY29tcG9uZW504oCZcyByZW5kZXIgdG8gYXZvaWRcclxuLy8gcmVjcmVhdGluZyB0aGUgYFN0cmlwZWAgb2JqZWN0IG9uIGV2ZXJ5IHJlbmRlci5cclxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXHJcbiAgXCJza190ZXN0XzUxSVZ6Rk1FQlNyd0FZYmxLT3JXRGV6RmVMakx4bkhpMDZvc1hURkFiaTNnMUxFNER4OXdjMDlaa1VRRlBIc0R4dGQwbWl3TzBPWjZOZTRsbUxuSUxKc3B2MDBOV0t5Z2ZOVVwiXHJcbilcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0V2l0aENvbnRleHQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHRQcm92aWRlckNvbXBvbmVudD5cclxuICAgICAgPFNpdGVDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgIHsoY29udGV4dCkgPT4gKFxyXG4gICAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XHJcbiAgICAgICAgICAgIDxDaGVja291dCB7Li4ucHJvcHN9IGNvbnRleHQ9e2NvbnRleHR9IC8+XHJcbiAgICAgICAgICA8L0VsZW1lbnRzPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2l0ZUNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICA8L0NvbnRleHRQcm92aWRlckNvbXBvbmVudD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVNoaXBwaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAwXHJcbn1cclxuXHJcbmNvbnN0IElucHV0ID0gKHsgb25DaGFuZ2UsIHZhbHVlLCBuYW1lLCBwbGFjZWhvbGRlciB9KSA9PiAoXHJcbiAgPGlucHV0XHJcbiAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgdHlwZT1cInRleHRcIlxyXG4gICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgbmFtZT17bmFtZX1cclxuICAvPlxyXG4pXHJcblxyXG5jb25zdCBDaGVja291dCA9ICh7IGNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtvcmRlckNvbXBsZXRlZCwgc2V0T3JkZXJDb21wbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBzdHJlZXQ6IFwiXCIsXHJcbiAgICBjaXR5OiBcIlwiLFxyXG4gICAgcG9zdGFsX2NvZGU6IFwiXCIsXHJcbiAgICBzdGF0ZTogXCJcIixcclxuICB9KVxyXG5cclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UobnVsbClcclxuICAgIHNldElucHV0KHsgLi4uaW5wdXQsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgc3RyZWV0LCBjaXR5LCBwb3N0YWxfY29kZSwgc3RhdGUgfSA9IGlucHV0XHJcbiAgICBjb25zdCB7IHRvdGFsLCBjbGVhckNhcnQgfSA9IGNvbnRleHRcclxuXHJcbiAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHtcclxuICAgICAgLy8gU3RyaXBlLmpzIGhhcyBub3QgbG9hZGVkIHlldC4gTWFrZSBzdXJlIHRvIGRpc2FibGVcclxuICAgICAgLy8gZm9ybSBzdWJtaXNzaW9uIHVudGlsIFN0cmlwZS5qcyBoYXMgbG9hZGVkLlxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxyXG4gICAgaWYgKCFzdHJlZXQgfHwgIWNpdHkgfHwgIXBvc3RhbF9jb2RlIHx8ICFzdGF0ZSkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZmlsbCBpbiB0aGUgZm9ybSFcIilcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIGEgbW91bnRlZCBDYXJkRWxlbWVudC4gRWxlbWVudHMga25vd3MgaG93XHJcbiAgICAvLyB0byBmaW5kIHlvdXIgQ2FyZEVsZW1lbnQgYmVjYXVzZSB0aGVyZSBjYW4gb25seSBldmVyIGJlIG9uZSBvZlxyXG4gICAgLy8gZWFjaCB0eXBlIG9mIGVsZW1lbnQuXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpXHJcblxyXG4gICAgLy8gVXNlIHlvdXIgY2FyZCBFbGVtZW50IHdpdGggb3RoZXIgU3RyaXBlLmpzIEFQSXNcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogXCJjYXJkXCIsXHJcbiAgICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxyXG4gICAgICBiaWxsaW5nX2RldGFpbHM6IHsgbmFtZTogbmFtZSB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9yZGVyID0ge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgYW1vdW50OiB0b3RhbCxcclxuICAgICAgYWRkcmVzczogc3RhdGUsIC8vIHNob3VsZCB0aGlzIGJlIHtzdHJlZXQsIGNpdHksIHBvc3RhbF9jb2RlLCBzdGF0ZX0gP1xyXG4gICAgICBwYXltZW50X21ldGhvZF9pZDogcGF5bWVudE1ldGhvZC5pZCxcclxuICAgICAgcmVjZWlwdF9lbWFpbDogXCJjdXN0b21lckBleGFtcGxlLmNvbVwiLFxyXG4gICAgICBpZDogdXVpZCgpLFxyXG4gICAgfVxyXG4gICAgLy8gVE9ETyBjYWxsIEFQSVxyXG4gICAgc2V0T3JkZXJDb21wbGV0ZWQodHJ1ZSlcclxuICAgIGNsZWFyQ2FydCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IG51bWJlck9mSXRlbXNJbkNhcnQsIGNhcnQsIHRvdGFsIH0gPSBjb250ZXh0XHJcbiAgY29uc3QgY2FydEVtcHR5ID0gbnVtYmVyT2ZJdGVtc0luQ2FydCA9PT0gTnVtYmVyKDApXHJcblxyXG4gIGlmIChvcmRlckNvbXBsZXRlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+VGhhbmtzISBZb3VyIG9yZGVyIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBwcm9jZXNzZWQuPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwYi0xMFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SmFtc3RhY2sgRUNvbW1lcmNlIC0gQ2hlY2tvdXQ8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2BDaGVjayBvdXRgfSAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnRpdGxlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJKYW1zdGFjayBFQ29tbWVyY2UgLSBDaGVja3BpdFwiXHJcbiAgICAgICAgICBrZXk9XCJ0aXRsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIGZsZXggZmxleC1jb2wgdy1mdWxsXHJcbiAgICAgICAgICAgIGNfbGFyZ2U6dy1jX2xhcmdlXHJcbiAgICAgICAgICBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBwYi04XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1saWdodCBtYi02XCI+Q2hlY2tvdXQ8L2gxPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XCJDYXJ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4ICBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxGYUxvbmdBcnJvd0FsdExlZnQgY2xhc3NOYW1lPVwibXItMiB0ZXh0LWdyYXktNjAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbVwiPkVkaXQgQ2FydDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7Y2FydEVtcHR5ID8gKFxyXG4gICAgICAgICAgPGgzPk5vIGl0ZW1zIGluIGNhcnQuPC9oMz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAge2NhcnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBweS0xMFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMyIG0tMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHBsLTEwIHRleHQtZ3JheS02MDBcIj57aXRlbS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHBsLTEwIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtERU5PTUlOQVRJT04gKyBpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBwdC04IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgYm9yZGVyLXQgcHQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSA/IDxzcGFuPntlcnJvck1lc3NhZ2V9PC9zcGFuPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FyZGhvbGRlciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRWxlbWVudCBjbGFzc05hbWU9XCJtdC0yIHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LnN0cmVldH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHJlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdHJlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQuY2l0eX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5zdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LnBvc3RhbF9jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvc3RhbF9jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdGFsIENvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXN0cmlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBiZy1wcmltYXJ5IGhvdmVyOmJnLWJsYWNrIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBtdC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0gb3JkZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpwdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IGZsZXggZmxleC0xIHB0LTIgbWQ6cHQtOCBtdC0yIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBwci0xMCB0ZXh0LWxlZnRcIj5TdWJ0b3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy0zOCBmbGV4IHRleHQtcmlnaHQganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7REVOT01JTkFUSU9OICsgdG90YWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IGZsZXggZmxleC0xIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBwci0xMFwiPlNoaXBwaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LTM4IGZsZXgganVzdGlmeS1lbmRcIj5GUkVFIFNISVBQSU5HPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1sLTQgcGwtMiBmbGV4IGZsZXgtMSBiZy1ncmF5LTIwMCBwci00IHBiLTEgcHQtMiBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gcHItMTBcIj5Ub3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB3LTM4IGZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7REVOT01JTkFUSU9OICsgKHRvdGFsICsgY2FsY3VsYXRlU2hpcHBpbmcoKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzdHJpcGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGJnLXByaW1hcnkgaG92ZXI6YmctYmxhY2sgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IG10LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ29uZmlybSBvcmRlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0V2l0aENvbnRleHRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==