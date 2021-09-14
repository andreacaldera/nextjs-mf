"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...slug]",{

/***/ "../shared/index.js":
/*!**************************!*\
  !*** ../shared/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matchFederatedPage\": function() { return /* binding */ matchFederatedPage; },\n/* harmony export */   \"createFederatedCatchAll\": function() { return /* binding */ createFederatedCatchAll; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var feather_route_matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feather-route-matcher */ \"../node_modules/feather-route-matcher/index.js\");\n\n\n\nasync function matchFederatedPage(remotes, path) {\n  const maps = await Promise.all(\n    remotes.map((remote) =>\n      window[remote]\n        .get(\"./pages-map\")\n        .then((factory) => ({ remote, config: factory().default }))\n        .catch(() => null)\n    )\n  );\n\n  const config = {};\n\n  for (let map of maps) {\n    if (!map) continue;\n\n    for (let [path, mod] of Object.entries(map.config)) {\n      config[path] = {\n        remote: map.remote,\n        module: mod,\n      };\n    }\n  }\n\n  const matcher = (0,feather_route_matcher__WEBPACK_IMPORTED_MODULE_1__.default)(config);\n  const match = matcher(path);\n\n  return match;\n}\n\nfunction createFederatedCatchAll(remotes) {\n  const FederatedCatchAll = (initialProps) => {\n    const [lazyProps, setProps] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});\n\n    const { FederatedPage, render404, renderError, needsReload, ...props } = {\n      ...lazyProps,\n      ...initialProps,\n    };\n\n    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(async () => {\n      if (needsReload) {\n        const federatedProps = await FederatedCatchAll.getInitialProps(props);\n        setProps(federatedProps);\n      }\n    }, []);\n\n    if (render404) {\n      // TODO: Render 404 page\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {}, \"404 Not Found\");\n    }\n    if (renderError) {\n      // TODO: Render error page\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {}, \"Oops, something went wrong.\");\n    }\n\n    if (FederatedPage) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FederatedPage, props);\n    }\n\n    return null;\n  };\n\n  FederatedCatchAll.getInitialProps = async (ctx) => {\n    const { err, req, res, AppTree, ...props } = ctx;\n\n    if (err) {\n      // TODO: Run getInitialProps for error page\n      return { renderError: true, ...props };\n    }\n\n    if (false) {}\n\n    try {\n      const matchedPage = await matchFederatedPage(remotes, ctx.asPath);\n      console.log(\"matchedPage\", matchedPage);\n\n      const remote = matchedPage?.value?.remote;\n      const mod = matchedPage?.value?.module;\n\n      if (!remote || !mod) {\n        // TODO: Run getInitialProps for 404 page\n        return { render404: true, ...props };\n      }\n\n      console.log(\"loading exposed module\", mod, \"from remote\", remote, matchedPage);\n      try {\n        if (!window[remote].__initialized) {\n          window[remote].__initialized = true;\n          await window[remote].init(__webpack_require__.S.default);\n        }\n      } catch (initErr) {\n        console.log(\"initErr\", initErr);\n      }\n\n      const FederatedPage = await window[remote]\n        .get(mod)\n        .then((factory) => factory().default);\n      console.log(\"FederatedPage\", FederatedPage);\n      if (!FederatedPage) {\n        // TODO: Run getInitialProps for 404 page\n        return { render404: true, ...props };\n      }\n\n      const modifiedContext = {\n        ...ctx,\n        query: matchedPage.params,\n      };\n      const federatedPageProps =\n        (await FederatedPage.getInitialProps?.(modifiedContext)) || {};\n      return { ...federatedPageProps, FederatedPage };\n    } catch (err) {\n      console.log(\"err\", err);\n      // TODO: Run getInitialProps for error page\n      return { renderError: true, ...props };\n    }\n  };\n\n  return FederatedCatchAll;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2hhcmVkL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ3dCOztBQUUzQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsOERBQWE7QUFDL0I7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0Esa0NBQWtDLHFEQUFjLEdBQUc7O0FBRW5ELFlBQVksK0RBQStEO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsYUFBYSwwREFBbUIsU0FBUztBQUN6QztBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFtQixTQUFTO0FBQ3pDOztBQUVBO0FBQ0EsYUFBYSwwREFBbUI7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksbUNBQW1DOztBQUUvQztBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBLFFBQVEsS0FBZ0IsRUFBRSxFQUVyQjs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUF3QjtBQUM1RDtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi9zaGFyZWQvaW5kZXguanM/YjgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3JlYXRlTWF0Y2hlciBmcm9tIFwiZmVhdGhlci1yb3V0ZS1tYXRjaGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXRjaEZlZGVyYXRlZFBhZ2UocmVtb3RlcywgcGF0aCkge1xuICBjb25zdCBtYXBzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgcmVtb3Rlcy5tYXAoKHJlbW90ZSkgPT5cbiAgICAgIHdpbmRvd1tyZW1vdGVdXG4gICAgICAgIC5nZXQoXCIuL3BhZ2VzLW1hcFwiKVxuICAgICAgICAudGhlbigoZmFjdG9yeSkgPT4gKHsgcmVtb3RlLCBjb25maWc6IGZhY3RvcnkoKS5kZWZhdWx0IH0pKVxuICAgICAgICAuY2F0Y2goKCkgPT4gbnVsbClcbiAgICApXG4gICk7XG5cbiAgY29uc3QgY29uZmlnID0ge307XG5cbiAgZm9yIChsZXQgbWFwIG9mIG1hcHMpIHtcbiAgICBpZiAoIW1hcCkgY29udGludWU7XG5cbiAgICBmb3IgKGxldCBbcGF0aCwgbW9kXSBvZiBPYmplY3QuZW50cmllcyhtYXAuY29uZmlnKSkge1xuICAgICAgY29uZmlnW3BhdGhdID0ge1xuICAgICAgICByZW1vdGU6IG1hcC5yZW1vdGUsXG4gICAgICAgIG1vZHVsZTogbW9kLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtYXRjaGVyID0gY3JlYXRlTWF0Y2hlcihjb25maWcpO1xuICBjb25zdCBtYXRjaCA9IG1hdGNoZXIocGF0aCk7XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwocmVtb3Rlcykge1xuICBjb25zdCBGZWRlcmF0ZWRDYXRjaEFsbCA9IChpbml0aWFsUHJvcHMpID0+IHtcbiAgICBjb25zdCBbbGF6eVByb3BzLCBzZXRQcm9wc10gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG5cbiAgICBjb25zdCB7IEZlZGVyYXRlZFBhZ2UsIHJlbmRlcjQwNCwgcmVuZGVyRXJyb3IsIG5lZWRzUmVsb2FkLCAuLi5wcm9wcyB9ID0ge1xuICAgICAgLi4ubGF6eVByb3BzLFxuICAgICAgLi4uaW5pdGlhbFByb3BzLFxuICAgIH07XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKG5lZWRzUmVsb2FkKSB7XG4gICAgICAgIGNvbnN0IGZlZGVyYXRlZFByb3BzID0gYXdhaXQgRmVkZXJhdGVkQ2F0Y2hBbGwuZ2V0SW5pdGlhbFByb3BzKHByb3BzKTtcbiAgICAgICAgc2V0UHJvcHMoZmVkZXJhdGVkUHJvcHMpO1xuICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGlmIChyZW5kZXI0MDQpIHtcbiAgICAgIC8vIFRPRE86IFJlbmRlciA0MDQgcGFnZVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7fSwgXCI0MDQgTm90IEZvdW5kXCIpO1xuICAgIH1cbiAgICBpZiAocmVuZGVyRXJyb3IpIHtcbiAgICAgIC8vIFRPRE86IFJlbmRlciBlcnJvciBwYWdlXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHt9LCBcIk9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoRmVkZXJhdGVkUGFnZSkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVkZXJhdGVkUGFnZSwgcHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIEZlZGVyYXRlZENhdGNoQWxsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCB7IGVyciwgcmVxLCByZXMsIEFwcFRyZWUsIC4uLnByb3BzIH0gPSBjdHg7XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciBlcnJvciBwYWdlXG4gICAgICByZXR1cm4geyByZW5kZXJFcnJvcjogdHJ1ZSwgLi4ucHJvcHMgfTtcbiAgICB9XG5cbiAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgcmV0dXJuIHsgbmVlZHNSZWxvYWQ6IHRydWUsIC4uLnByb3BzIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1hdGNoZWRQYWdlID0gYXdhaXQgbWF0Y2hGZWRlcmF0ZWRQYWdlKHJlbW90ZXMsIGN0eC5hc1BhdGgpO1xuICAgICAgY29uc29sZS5sb2coXCJtYXRjaGVkUGFnZVwiLCBtYXRjaGVkUGFnZSk7XG5cbiAgICAgIGNvbnN0IHJlbW90ZSA9IG1hdGNoZWRQYWdlPy52YWx1ZT8ucmVtb3RlO1xuICAgICAgY29uc3QgbW9kID0gbWF0Y2hlZFBhZ2U/LnZhbHVlPy5tb2R1bGU7XG5cbiAgICAgIGlmICghcmVtb3RlIHx8ICFtb2QpIHtcbiAgICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgNDA0IHBhZ2VcbiAgICAgICAgcmV0dXJuIHsgcmVuZGVyNDA0OiB0cnVlLCAuLi5wcm9wcyB9O1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgZXhwb3NlZCBtb2R1bGVcIiwgbW9kLCBcImZyb20gcmVtb3RlXCIsIHJlbW90ZSwgbWF0Y2hlZFBhZ2UpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCF3aW5kb3dbcmVtb3RlXS5fX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgd2luZG93W3JlbW90ZV0uX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgd2luZG93W3JlbW90ZV0uaW5pdChfX3dlYnBhY2tfc2hhcmVfc2NvcGVzX18uZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGluaXRFcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0RXJyXCIsIGluaXRFcnIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBGZWRlcmF0ZWRQYWdlID0gYXdhaXQgd2luZG93W3JlbW90ZV1cbiAgICAgICAgLmdldChtb2QpXG4gICAgICAgIC50aGVuKChmYWN0b3J5KSA9PiBmYWN0b3J5KCkuZGVmYXVsdCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkZlZGVyYXRlZFBhZ2VcIiwgRmVkZXJhdGVkUGFnZSk7XG4gICAgICBpZiAoIUZlZGVyYXRlZFBhZ2UpIHtcbiAgICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgNDA0IHBhZ2VcbiAgICAgICAgcmV0dXJuIHsgcmVuZGVyNDA0OiB0cnVlLCAuLi5wcm9wcyB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2RpZmllZENvbnRleHQgPSB7XG4gICAgICAgIC4uLmN0eCxcbiAgICAgICAgcXVlcnk6IG1hdGNoZWRQYWdlLnBhcmFtcyxcbiAgICAgIH07XG4gICAgICBjb25zdCBmZWRlcmF0ZWRQYWdlUHJvcHMgPVxuICAgICAgICAoYXdhaXQgRmVkZXJhdGVkUGFnZS5nZXRJbml0aWFsUHJvcHM/Lihtb2RpZmllZENvbnRleHQpKSB8fCB7fTtcbiAgICAgIHJldHVybiB7IC4uLmZlZGVyYXRlZFBhZ2VQcm9wcywgRmVkZXJhdGVkUGFnZSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcbiAgICAgIC8vIFRPRE86IFJ1biBnZXRJbml0aWFsUHJvcHMgZm9yIGVycm9yIHBhZ2VcbiAgICAgIHJldHVybiB7IHJlbmRlckVycm9yOiB0cnVlLCAuLi5wcm9wcyB9O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRmVkZXJhdGVkQ2F0Y2hBbGw7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../shared/index.js\n");

/***/ })

});