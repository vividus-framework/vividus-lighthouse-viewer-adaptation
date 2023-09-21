"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var step = (x3) => x3.done ? resolve(x3.value) : Promise.resolve(x3.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../server/src/ui/components/loading-spinner.svg
  var require_loading_spinner = __commonJS({
    "../server/src/ui/components/loading-spinner.svg"(exports, module) {
      module.exports = "../../webjars/vividus-lighthouse-viewer-adaptation/assets/loading-spinner-N6LEBK7Y.svg";
    }
  });

  // ../server/src/ui/favicon.svg
  var require_favicon = __commonJS({
    "../server/src/ui/favicon.svg"(exports, module) {
      module.exports = "../../webjars/vividus-lighthouse-viewer-adaptation/assets/favicon-PWXHY3O5.svg";
    }
  });

  // ../server/src/ui/routes/project-list/confetti.svg
  var require_confetti = __commonJS({
    "../server/src/ui/routes/project-list/confetti.svg"(exports, module) {
      module.exports = "../../webjars/vividus-lighthouse-viewer-adaptation/assets/confetti-NE5ZCURM.svg";
    }
  });

  // ../server/src/ui/logo.svg
  var require_logo = __commonJS({
    "../server/src/ui/logo.svg"(exports, module) {
      module.exports = "../../webjars/vividus-lighthouse-viewer-adaptation/assets/logo-7LKJDYBP.svg";
    }
  });

  // ../utils/src/lodash.js
  var require_lodash = __commonJS({
    "../utils/src/lodash.js"(exports, module) {
      "use strict";
      function merge(v1, v22) {
        if (Array.isArray(v1)) {
          if (!Array.isArray(v22))
            return v22;
          for (let i3 = 0; i3 < Math.max(v1.length, v22.length); i3++) {
            v1[i3] = i3 < v22.length ? merge(v1[i3], v22[i3]) : v1[i3];
          }
          return v1;
        } else if (typeof v1 === "object" && v1 !== null) {
          if (typeof v22 !== "object" || v22 === null)
            return v22;
          const o1 = v1;
          const o22 = v22;
          const o1Keys = new Set(Object.keys(o1));
          const o2Keys = new Set(Object.keys(o22));
          for (const key of /* @__PURE__ */ new Set([...o1Keys, ...o2Keys])) {
            o1[key] = key in o22 ? merge(o1[key], o22[key]) : o1[key];
          }
          return v1;
        } else {
          return v22;
        }
      }
      function kebabCase(s3, opts) {
        let kebabed = s3.replace(/([a-z])([A-Z])/g, "$1-$2");
        if (opts && opts.alphanumericOnly) {
          kebabed = kebabed.replace(/[^a-z0-9]+/gi, "-").replace(/-+/g, "-").replace(/(^-|-$)/g, "");
        }
        return kebabed.toLowerCase();
      }
      function groupIntoMap2(items, keyFn) {
        const groups = /* @__PURE__ */ new Map();
        for (const item of items) {
          const key = keyFn(item);
          const group = groups.get(key) || [];
          group.push(item);
          groups.set(key, group);
        }
        return groups;
      }
      function debounce(fn, time) {
        let timeout;
        const cancel = () => {
          if (timeout)
            clearTimeout(timeout);
          timeout = void 0;
        };
        const debouncedFn = (...args) => {
          if (timeout)
            clearTimeout(timeout);
          timeout = setTimeout(() => fn(...args), time);
        };
        debouncedFn.cancel = cancel;
        return debouncedFn;
      }
      module.exports = {
        merge,
        kebabCase,
        debounce,
        range(from, to, by = 1) {
          const numbers = [];
          for (let i3 = from; i3 < to; i3 += by) {
            numbers.push(i3);
          }
          return numbers;
        },
        startCase(s3) {
          return kebabCase(s3).split("-").map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`).join(" ");
        },
        padStart(s3, length, padding = " ") {
          if (s3.length >= length)
            return s3;
          return `${padding.repeat(length)}${s3}`.slice(-length);
        },
        padEnd(s3, length, padding = " ") {
          if (s3.length >= length)
            return s3;
          return `${s3}${padding.repeat(length)}`.slice(0, length);
        },
        isEqual(o1, o22, depth = 0) {
          if (depth > 100)
            return false;
          if (typeof o1 !== typeof o22)
            return false;
          if (Number.isNaN(o1) && Number.isNaN(o22))
            return true;
          if (typeof o1 !== "object")
            return o1 === o22;
          if (o1 === o22)
            return true;
          if (!o1 || !o22)
            return false;
          if (Array.isArray(o1)) {
            if (!Array.isArray(o22))
              return false;
            return o1.every((v3, i3) => this.isEqual(v3, o22[i3])) && o1.length === o22.length;
          }
          const o1Keys = Object.keys(o1).sort();
          const o2Keys = Object.keys(o22).sort();
          const allChildrenEqual = o1Keys.every((k3) => this.isEqual(o1[k3], o22[k3], depth + 1));
          return allChildrenEqual && this.isEqual(o1Keys, o2Keys);
        },
        cloneDeep(o3) {
          return JSON.parse(JSON.stringify(o3));
        },
        uniqBy(items, keyFn) {
          const seen = /* @__PURE__ */ new Set();
          const out = [];
          for (const item of items) {
            const key = keyFn(item);
            if (seen.has(key))
              continue;
            seen.add(key);
            out.push(item);
          }
          return out;
        },
        groupBy(items, keyFn) {
          return [...groupIntoMap2(items, keyFn).values()];
        },
        groupIntoMap: groupIntoMap2,
        maxBy(items, keyFn) {
          let maxItem = void 0;
          let maxValue = -Infinity;
          for (const item of items) {
            const value = keyFn(item);
            if (value > maxValue) {
              maxItem = item;
              maxValue = value;
            }
          }
          return maxItem;
        },
        minBy(items, keyFn) {
          return this.maxBy(items, (o3) => -keyFn(o3));
        },
        sortBy(items, keyFn) {
          return items.slice().sort((a3, b3) => keyFn(a3) - keyFn(b3));
        },
        pick(object, propertiesToPick) {
          const out = {};
          for (const [key_, value] of Object.entries(object)) {
            const key = key_;
            if (!propertiesToPick.includes(key))
              continue;
            out[key] = value;
          }
          return out;
        },
        omit(object, propertiesToDrop, options = {}) {
          const out = {};
          for (const [key_, value] of Object.entries(object)) {
            const key = key_;
            if (propertiesToDrop.includes(key))
              continue;
            if (options.dropUndefined && value === void 0)
              continue;
            out[key] = value;
          }
          return out;
        },
        shortId(uuid) {
          return uuid.replace(/-/g, "").slice(0, 12);
        },
        pluralize(string, number, pluralForm) {
          pluralForm = pluralForm || `${string}s`;
          return number === 1 ? string : pluralForm;
        },
        uniqueId: (() => {
          let id = 1;
          return () => id++;
        })()
      };
    }
  });

  // ../utils/src/seed-data/lhr-generator.js
  var require_lhr_generator = __commonJS({
    "../utils/src/seed-data/lhr-generator.js"(exports, module) {
      "use strict";
      var _6 = require_lodash();
      var LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna nunc, molestie sed hendrerit et, vulputate vitae mauris. Sed tempor vitae risus vel hendrerit. Nulla vestibulum malesuada erat vitae laoreet. Phasellus sodales vehicula dolor, dictum ullamcorper metus aliquam id. Nullam porttitor posuere purus id rhoncus. Sed et mi ligula. Donec imperdiet nulla sit amet justo cursus, id tempus ex accumsan. Maecenas ultricies elit eget lectus posuere vestibulum. Cras vestibulum neque nec justo congue feugiat non id dui. Pellentesque dapibus ac orci sed malesuada. Sed rhoncus vitae lorem eget facilisis. Donec auctor tortor a tortor egestas, vel condimentum lacus auctor.";
      function getCategoryForAuditId(auditId) {
        if (auditId.startsWith("a11y"))
          return "accessibility";
        if (auditId.startsWith("seo"))
          return "seo";
        if (auditId.startsWith("best-practices"))
          return "best-practices";
        if (auditId.startsWith("pwa"))
          return "pwa";
        return "performance";
      }
      function getGroupForAuditId(auditId) {
        if (auditId === "cumulative-layout-shift")
          return "metrics";
        if (auditId === "first-contentful-paint")
          return "metrics";
        if (auditId === "first-meaningful-paint")
          return "metrics";
        if (auditId === "speed-index")
          return "metrics";
        if (auditId === "interactive")
          return "metrics";
        if (auditId === "first-cpu-idle")
          return "metrics";
        if (auditId === "max-potential-fid")
          return "metrics";
        if (auditId.startsWith("diagnostic-"))
          return "diagnostics";
        if (auditId.startsWith("uses-"))
          return "load-opportunities";
        if (auditId.startsWith("a11y-aria"))
          return "a11y-aria";
        if (auditId.startsWith("a11y"))
          return "a11y-best-practices";
        if (auditId.startsWith("seo"))
          return "seo-content";
        if (auditId.startsWith("best-practices"))
          return "best-practices";
        if (auditId.startsWith("pwa-fast-reliable"))
          return "pwa-fast-reliable";
        if (auditId.startsWith("pwa-installable"))
          return "pwa-installable";
        if (auditId.startsWith("pwa-optimized"))
          return "pwa-optimized";
      }
      function generateNumericValue(average, prandom) {
        const maxDeltaAsPercent = 0.1;
        const maxDelta = average * maxDeltaAsPercent;
        const percentile = prandom.next();
        return (percentile - 0.5) * 2 * maxDelta + average;
      }
      function createLHR(pageUrl, auditDefs, prandom) {
        const audits = {};
        const loremIpsumTokens = LOREM_IPSUM.split(" ");
        for (const auditDef of auditDefs) {
          const { auditId, averageNumericValue, averageWastedMs, unit = "items" } = auditDef;
          const groupId = getGroupForAuditId(auditId);
          if (typeof averageNumericValue === "number") {
            const numericValue = generateNumericValue(averageNumericValue, prandom);
            const score = 1 - Math.min(1, Math.max((numericValue - 1e3) / 9e3, 0));
            audits[auditId] = {
              score,
              numericValue,
              scoreDisplayMode: "numeric",
              displayValue: groupId === "metrics" ? `${(numericValue / 1e3).toLocaleString(void 0, { maximumFractionDigits: 1 })} s` : `${Math.round(numericValue)} ${unit}`
            };
          } else if (typeof averageWastedMs === "number") {
            const wastedMs = generateNumericValue(averageWastedMs, prandom);
            const score = 1 - Math.min(1, Math.max((wastedMs - 100) / 900, 0));
            const hasBytes = auditDef.items && auditDef.items.some((item) => item.averageWastedBytes);
            const wastedBytes = wastedMs * 257;
            audits[auditId] = {
              score,
              scoreDisplayMode: "numeric",
              displayValue: hasBytes ? `${(wastedBytes / 1024).toLocaleString(void 0, {
                maximumFractionDigits: 0
              })} KB` : `${(wastedMs / 1e3).toLocaleString(void 0, {
                maximumFractionDigits: 1
              })} s`,
              details: {
                type: "opportunity",
                overallSavingsMs: wastedMs,
                overallSavingsBytes: hasBytes ? wastedBytes : void 0,
                items: []
              }
            };
          } else {
            const { passRate = 1 } = auditDef;
            audits[auditId] = { score: prandom.next() <= passRate ? 1 : 0, scoreDisplayMode: "binary" };
          }
          const headersAsObject = {};
          if (auditDef.items) {
            const items = [];
            for (const _a of auditDef.items) {
              const _b = _a, { url, inclusionRate = 1 } = _b, rest = __objRest(_b, ["url", "inclusionRate"]);
              if (prandom.next() > inclusionRate)
                continue;
              const item = {};
              if (url) {
                if (url.includes("lorempixel")) {
                  headersAsObject.thumbnail = { key: "url", valueType: "thumbnail" };
                }
                headersAsObject.url = { key: "url", valueType: "url", label: "URL" };
                item.url = new URL(url, pageUrl).href;
              }
              for (const key of Object.keys(rest)) {
                if (key.startsWith("average")) {
                  const dataKey = key.replace("average", "").replace(/^\w/, (v3) => v3.toLowerCase());
                  const valueType = key.endsWith("Ms") ? "timespanMs" : "bytes";
                  headersAsObject[dataKey] = { key: dataKey, valueType, label: _6.startCase(dataKey) };
                  const averageValue = rest[key];
                  item[dataKey] = generateNumericValue(averageValue, prandom);
                } else {
                  headersAsObject[key] = { key, valueType: "text", label: _6.startCase(key) };
                  item[key] = rest[key];
                }
              }
              items.push(item);
            }
            const details = audits[auditId].details || { type: "table" };
            details.headings = Object.values(headersAsObject).map((header) => {
              if (getGroupForAuditId(auditId) === "load-opportunities")
                return header;
              return __spreadProps(__spreadValues({}, header), { itemType: header.valueType, text: header.label, valueType: void 0 });
            });
            details.items = items;
            audits[auditId].details = details;
          }
          audits[auditId].title = _6.startCase(auditId);
          audits[auditId].description = `Help text for ${_6.startCase(auditId)}. ${loremIpsumTokens.slice(0, Math.round(auditId.length * 1.5)).join(" ")}.`;
        }
        const categories = {};
        const auditsGroupedByCategory = _6.groupBy(
          Object.entries(audits),
          (pair) => getCategoryForAuditId(pair[0])
        );
        for (const audits2 of auditsGroupedByCategory) {
          const category = getCategoryForAuditId(audits2[0][0]);
          const sum = audits2.reduce((sum2, next) => sum2 + (next[1].score || 0), 0);
          categories[category] = {
            id: category,
            title: category.toUpperCase(),
            score: sum / audits2.length,
            auditRefs: audits2.map(([id]) => ({ id, weight: 1, group: getGroupForAuditId(id) }))
          };
        }
        const fetchTimeBase = new Date("2019-08-01T12:00:00").getTime();
        const fetchTimeOffset = Math.round(prandom.next() * 1e3 * 60 * 60 * 24 * 7);
        const fetchTime = new Date(fetchTimeBase + fetchTimeOffset).toISOString();
        return {
          requestedUrl: pageUrl,
          finalUrl: pageUrl,
          categories,
          audits,
          fetchTime,
          lighthouseVersion: "5.2.0",
          configSettings: { channel: "cli" },
          categoryGroups: {
            metrics: { title: "Metrics" },
            "load-opportunities": { title: "Opportunities" },
            diagnostics: { title: "Diagnostics" },
            accessibility: { title: "Accessibility" },
            seo: { title: "SEO" },
            "best-practices": { title: "Best Practices" },
            "pwa-fast-reliable": { title: "PWA Fast & Reliable" },
            "pwa-installable": { title: "PWA Installable" },
            "pwa-optimized": { title: "PWA Optimized" }
          },
          runWarnings: [],
          userAgent: "Chrome!",
          environment: { hostUserAgent: "", networkUserAgent: "", benchmarkIndex: 500 },
          timing: { total: 1, entries: [] },
          i18n: { rendererFormattedStrings: {}, icuMessagePaths: {} }
        };
      }
      module.exports = { createLHR, generateNumericValue, getGroupForAuditId };
    }
  });

  // ../utils/src/audit-diff-finder.js
  var require_audit_diff_finder = __commonJS({
    "../utils/src/audit-diff-finder.js"(exports, module) {
      "use strict";
      var _6 = require_lodash();
      var { getGroupForAuditId } = require_lhr_generator();
      var auditsToNotDIff = ["main-thread-tasks", "screenshot-thumbnails", "metrics"];
      function getDeltaLabel2(delta, deltaType = "audit") {
        if (delta === 0)
          return "neutral";
        let isImprovement = delta < 0;
        if (deltaType === "score")
          isImprovement = delta > 0;
        return isImprovement ? "improvement" : "regression";
      }
      function getDiffLabel6(diff) {
        switch (diff.type) {
          case "error":
            return "regression";
          case "score":
            return getDeltaLabel2(getDeltaStats2(diff).delta, "score");
          case "numericValue":
          case "itemCount":
          case "itemDelta":
            return getDeltaLabel2(getDeltaStats2(diff).delta, "audit");
          case "itemAddition":
            return "regression";
          case "itemRemoval":
            return "improvement";
          default:
            return "neutral";
        }
      }
      function getRowLabel(diffs) {
        if (!diffs.length)
          return "no change";
        if (diffs.some((diff) => diff.type === "itemAddition"))
          return "added";
        if (diffs.some((diff) => diff.type === "itemRemoval"))
          return "removed";
        const itemDeltaDiffs = diffs.filter(
          (diff) => diff.type === "itemDelta"
        );
        if (itemDeltaDiffs.every((diff) => diff.compareValue > diff.baseValue))
          return "worse";
        if (itemDeltaDiffs.every((diff) => diff.compareValue < diff.baseValue))
          return "better";
        if (itemDeltaDiffs.length)
          return "ambiguous";
        return "no change";
      }
      function getMatchingDiffsForIndex(diffs, compareItemIndex, baseItemIndex) {
        return diffs.filter((diff) => {
          const compareIndex = "compareItemIndex" in diff ? diff.compareItemIndex : void 0;
          const baseIndex = "baseItemIndex" in diff ? diff.baseItemIndex : void 0;
          if (typeof compareIndex === "number")
            return compareIndex === compareItemIndex;
          if (typeof baseIndex === "number")
            return baseIndex === baseItemIndex;
          return false;
        });
      }
      function getRowLabelForIndex3(diffs, compareItemIndex, baseItemIndex) {
        return getRowLabel(getMatchingDiffsForIndex(diffs, compareItemIndex, baseItemIndex));
      }
      function getWorstNumericDeltaForIndex(diffs, compareItemIndex, baseItemIndex) {
        const matchingDiffs = getMatchingDiffsForIndex(diffs, compareItemIndex, baseItemIndex);
        const numericDiffs = matchingDiffs.filter(isNumericAuditDiff);
        if (!numericDiffs.length)
          return void 0;
        return Math.max(...numericDiffs.map((diff) => getDeltaStats2(diff).delta));
      }
      function getMostSevereDiffLabel(labels) {
        if (labels.some((l3) => l3 === "regression"))
          return "regression";
        if (labels.some((l3) => l3 === "neutral"))
          return "neutral";
        return "improvement";
      }
      function isNumericAuditDiff(diff) {
        return ["score", "numericValue", "itemCount", "itemDelta"].includes(diff.type);
      }
      function getScoreLevel(score) {
        if (typeof score !== "number")
          return "error";
        if (score >= 0.9)
          return "pass";
        if (score >= 0.5)
          return "average";
        return "fail";
      }
      function getMetricScoreLevel(value, cutoffs) {
        if (typeof value !== "number")
          return "error";
        if (value <= cutoffs[0])
          return "pass";
        if (value <= cutoffs[1])
          return "average";
        return "fail";
      }
      function getDiffSeverity2(diff) {
        const delta = isNumericAuditDiff(diff) ? getDeltaStats2(diff).absoluteDelta : 0;
        if (diff.type === "error")
          return 1e12;
        if (diff.type === "score")
          return 1e10 * delta;
        if (diff.type === "numericValue")
          return 1e8 * Math.max(delta / 1e3, 1);
        if (diff.type === "itemCount")
          return 1e6 * delta;
        if (diff.type === "itemAddition")
          return 1e5;
        if (diff.type === "itemRemoval")
          return 1e5;
        if (diff.type === "itemDelta")
          return Math.min(Math.max(delta / 100, 1), 1e5 - 1);
        return 0;
      }
      function getDeltaStats2(diff) {
        const { baseValue, compareValue } = diff;
        const delta = compareValue - baseValue;
        const absoluteDelta = Math.abs(delta);
        if (delta === 0)
          return { delta, absoluteDelta, percentDelta: 0, percentAbsoluteDelta: 0 };
        const percentDelta = baseValue ? delta / baseValue : 1;
        const percentAbsoluteDelta = Math.abs(percentDelta);
        return {
          delta,
          absoluteDelta,
          percentDelta,
          percentAbsoluteDelta
        };
      }
      function createAuditDiff(diff) {
        const { auditId, type, baseValue, compareValue, baseItemIndex, compareItemIndex, itemKey } = diff;
        if (type === "itemAddition") {
          if (typeof compareItemIndex !== "number")
            throw new Error("compareItemIndex is not set");
          return { auditId, type, compareItemIndex };
        }
        if (type === "itemRemoval") {
          if (typeof baseItemIndex !== "number")
            throw new Error("baseItemIndex is not set");
          return { auditId, type, baseItemIndex };
        }
        if (type === "displayValue") {
          throw new Error("Do not use createAuditDiff for displayValue, just manually create");
        }
        if (typeof compareValue !== "number" || typeof baseValue !== "number" || !Number.isFinite(baseValue) || !Number.isFinite(compareValue) || type === "error") {
          return {
            auditId,
            type: "error",
            attemptedType: type,
            baseValue: baseValue || NaN,
            compareValue: compareValue || NaN
          };
        }
        const numericDiffResult = {
          auditId,
          type: "score",
          baseValue,
          compareValue
        };
        if (type === "itemDelta") {
          if (typeof itemKey !== "string")
            throw new Error("itemKey is not set");
          if (typeof baseItemIndex !== "number" && typeof compareItemIndex !== "number") {
            throw new Error("Either baseItemIndex or compareItemIndex must be set");
          }
          return __spreadProps(__spreadValues({}, numericDiffResult), {
            type: "itemDelta",
            baseItemIndex,
            compareItemIndex,
            itemKey
          });
        }
        return __spreadProps(__spreadValues({}, numericDiffResult), { type });
      }
      function findAuditDetailItemKeyDiffs(auditId, baseEntry, compareEntry, headings) {
        const diffs = [];
        for (const key of Object.keys(baseEntry.item)) {
          const baseValue = baseEntry.item[key];
          const compareValue = compareEntry.item[key];
          if (typeof baseValue !== "number" || typeof compareValue !== "number")
            continue;
          if (!headings.some((heading) => heading.key === key))
            continue;
          diffs.push(
            createAuditDiff({
              auditId,
              type: "itemDelta",
              itemKey: key,
              baseItemIndex: baseEntry.index,
              compareItemIndex: compareEntry.index,
              baseValue,
              compareValue
            })
          );
        }
        return diffs;
      }
      function synthesizeItemKeyDiffs(diffs, baseItems, compareItems) {
        const itemKeyDiffs = [];
        for (const diff of diffs) {
          if (diff.type !== "itemAddition" && diff.type !== "itemRemoval")
            continue;
          const item = diff.type === "itemAddition" ? compareItems[diff.compareItemIndex] : baseItems[diff.baseItemIndex];
          for (const key of Object.keys(item)) {
            const baseValue = diff.type === "itemAddition" ? 0 : item[key];
            const compareValue = diff.type === "itemAddition" ? item[key] : 0;
            if (typeof compareValue !== "number" || typeof baseValue !== "number")
              continue;
            const itemIndexKeyName = diff.type === "itemAddition" ? "compareItemIndex" : "baseItemIndex";
            const itemIndexValue = diff.type === "itemAddition" ? diff.compareItemIndex : diff.baseItemIndex;
            itemKeyDiffs.push(
              createAuditDiff({
                auditId: diff.auditId,
                type: "itemDelta",
                itemKey: key,
                [itemIndexKeyName]: itemIndexValue,
                baseValue,
                compareValue
              })
            );
          }
        }
        return itemKeyDiffs;
      }
      function replaceNondeterministicStrings(s3) {
        if (s3.startsWith("http") && s3.includes("?")) {
          try {
            const url = new URL(s3);
            url.search = "";
            s3 = url.href;
          } catch (err) {
          }
        }
        return s3.replace(/www-embed-player-[0-9a-z]+/i, "www-embed-player").replace(/player_ias-[0-9a-z]+/i, "player_ias").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "UUID").replace(/:[0-9]{3,5}\//, ":PORT/").replace(/(\.|-)[0-9a-f]{6,8}\.(js|css|woff|html|png|jpeg|jpg|svg)/i, "$1HASH.$2");
      }
      function deepPruneItemForKeySerialization(item) {
        if (typeof item !== "object")
          return item;
        if (item === null)
          return item;
        if (Array.isArray(item)) {
          return item.map((entry) => deepPruneItemForKeySerialization(entry));
        } else {
          const itemAsRecord = item;
          const keys = Object.keys(item);
          const keysToKeep = keys.filter((key) => !key.startsWith("_"));
          const copy = {};
          for (const key of keysToKeep) {
            copy[key] = deepPruneItemForKeySerialization(itemAsRecord[key]);
          }
          return copy;
        }
      }
      function getItemKey(item) {
        var _a, _b, _c;
        const source = item.source;
        if (typeof source === "string")
          return source;
        if (source && source.url)
          return `${source.url}:${source.line}:${source.column}`;
        if (typeof item.label === "string")
          return item.label;
        if (typeof item.groupLabel === "string")
          return item.groupLabel;
        if (typeof item.name === "string")
          return item.name;
        if (typeof item.statistic === "string")
          return item.statistic;
        if (item.entity && typeof item.entity.text === "string")
          return item.entity.text;
        if (typeof ((_a = item.node) == null ? void 0 : _a.path) === "string")
          return item.node.path;
        if (typeof ((_b = item.tapTarget) == null ? void 0 : _b.path) === "string" && typeof ((_c = item.overlappingTarget) == null ? void 0 : _c.path) === "string") {
          return `${item.tapTarget.path} + ${item.overlappingTarget.path}`;
        }
        if (typeof item.url === "string" && item.url)
          return item.url;
        if (typeof item.origin === "string" && item.origin)
          return item.origin;
        return JSON.stringify(deepPruneItemForKeySerialization(item));
      }
      function zipBaseAndCompareItems2(baseItems, compareItems) {
        const groupedByKey = _6.groupIntoMap(
          [
            ...baseItems.map((item, i3) => ({ item, kind: "base", index: i3 })),
            ...compareItems.map((item, i3) => ({ item, kind: "compare", index: i3 }))
          ],
          (entry) => replaceNondeterministicStrings(getItemKey(entry.item))
        );
        const zipped = [];
        for (const entries of groupedByKey.values()) {
          const baseItems2 = entries.filter((entry) => entry.kind === "base");
          const compareItems2 = entries.filter((entry) => entry.kind === "compare");
          if (baseItems2.length > 1 || compareItems2.length > 1) {
            for (const entry of entries) {
              zipped.push({ [entry.kind]: entry });
            }
            continue;
          }
          zipped.push({ base: baseItems2[0], compare: compareItems2[0] });
        }
        return zipped;
      }
      function sortZippedBaseAndCompareItems2(diffs, zippedItems) {
        const rowLabelSortOrder = ["added", "worse", "ambiguous", "removed", "better", "no change"];
        return zippedItems.map((item) => {
          return __spreadProps(__spreadValues({}, item), {
            diffs: getMatchingDiffsForIndex(
              diffs,
              item.compare && item.compare.index,
              item.base && item.base.index
            )
          });
        }).sort((a3, b3) => {
          const compareIndexA = a3.compare && a3.compare.index;
          const baseIndexA = a3.base && a3.base.index;
          const compareIndexB = b3.compare && b3.compare.index;
          const baseIndexB = b3.base && b3.base.index;
          const rowStateIndexA = rowLabelSortOrder.indexOf(
            getRowLabelForIndex3(diffs, compareIndexA, baseIndexA)
          );
          const rowStateIndexB = rowLabelSortOrder.indexOf(
            getRowLabelForIndex3(diffs, compareIndexB, baseIndexB)
          );
          const labelValueA = getItemKey(
            a3.compare && a3.compare.item || a3.base && a3.base.item || {}
          );
          const labelValueB = getItemKey(
            b3.compare && b3.compare.item || b3.base && b3.base.item || {}
          );
          const numericValueA = getWorstNumericDeltaForIndex(diffs, compareIndexA, baseIndexA);
          const numericValueB = getWorstNumericDeltaForIndex(diffs, compareIndexB, baseIndexB);
          if (rowStateIndexA === rowStateIndexB) {
            return typeof numericValueA === "number" && typeof numericValueB === "number" ? numericValueB - numericValueA : labelValueA.localeCompare(labelValueB);
          }
          return rowStateIndexA - rowStateIndexB;
        });
      }
      function findAuditDetailItemsDiffs(auditId, baseItems, compareItems, headings) {
        const diffs = [];
        for (const { base, compare } of zipBaseAndCompareItems2(baseItems, compareItems)) {
          if (base && compare) {
            diffs.push(...findAuditDetailItemKeyDiffs(auditId, base, compare, headings));
          } else if (compare) {
            diffs.push({ type: "itemAddition", auditId, compareItemIndex: compare.index });
          } else if (base) {
            diffs.push({ type: "itemRemoval", auditId, baseItemIndex: base.index });
          } else {
            throw new Error("Impossible");
          }
        }
        return diffs;
      }
      function normalizeScore(audit) {
        if (audit.scoreDisplayMode === "notApplicable") {
          return 1;
        }
        if (audit.scoreDisplayMode === "informative") {
          return 0;
        }
        return audit.score;
      }
      function getNumericValue(audit) {
        if (typeof audit.numericValue !== "number" && audit.details && typeof audit.details.overallSavingsMs === "number") {
          return audit.details.overallSavingsMs;
        }
        return audit.numericValue;
      }
      function normalizeNumericValue(audit) {
        if (audit.scoreDisplayMode === "notApplicable") {
          return 0;
        }
        return getNumericValue(audit);
      }
      function normalizeDetails(audit) {
        if (!audit.details)
          return { items: [], headings: [] };
        return { items: audit.details.items || [], headings: audit.details.headings || [] };
      }
      function findAuditDiffs2(baseAudit, compareAudit, options = {}) {
        const auditId = baseAudit.id || "";
        const { percentAbsoluteDeltaThreshold = 0 } = options;
        const diffs = [];
        if (auditsToNotDIff.includes(auditId))
          return diffs;
        if (typeof baseAudit.score === "number" || typeof compareAudit.score === "number") {
          diffs.push(
            createAuditDiff({
              auditId,
              type: "score",
              baseValue: normalizeScore(baseAudit),
              compareValue: normalizeScore(compareAudit)
            })
          );
        }
        if (typeof getNumericValue(baseAudit) === "number" || typeof getNumericValue(compareAudit) === "number") {
          diffs.push(
            createAuditDiff({
              auditId,
              type: "numericValue",
              baseValue: normalizeNumericValue(baseAudit),
              compareValue: normalizeNumericValue(compareAudit)
            })
          );
        }
        if (typeof baseAudit.displayValue === "string" || typeof compareAudit.displayValue === "string") {
          diffs.push({
            auditId,
            type: "displayValue",
            baseValue: baseAudit.displayValue || "",
            compareValue: compareAudit.displayValue || ""
          });
        }
        let hasItemDetails = false;
        const baseAuditDetails = baseAudit.details || {};
        const compareAuditDetails = compareAudit.details || {};
        if (baseAuditDetails.type !== "debugdata" && baseAuditDetails.items || compareAuditDetails.type !== "debugdata" && compareAuditDetails.items) {
          hasItemDetails = true;
          const { items: baseItems, headings: baseHeadings } = normalizeDetails(baseAudit);
          const { items: compareItems, headings: compareHeadings } = normalizeDetails(compareAudit);
          const headings = baseHeadings.concat(compareHeadings);
          diffs.push(
            createAuditDiff({
              auditId,
              type: "itemCount",
              baseValue: baseItems.length,
              compareValue: compareItems.length
            })
          );
          diffs.push(...findAuditDetailItemsDiffs(auditId, baseItems, compareItems, headings));
          if (options.synthesizeItemKeyDiffs) {
            diffs.push(...synthesizeItemKeyDiffs(diffs, baseItems, compareItems));
          }
        }
        const filteredDiffs = diffs.filter((diff) => {
          if (diff.type === "error")
            return true;
          if (diff.type === "itemAddition" || diff.type === "itemRemoval")
            return true;
          if (diff.type === "score" && !options.forceAllScoreDiffs) {
            return getScoreLevel(diff.baseValue) !== getScoreLevel(diff.compareValue);
          }
          if (diff.type === "displayValue") {
            return diff.baseValue !== diff.compareValue && !options.skipDisplayValueDiffs;
          }
          return getDeltaStats2(diff).percentAbsoluteDelta > percentAbsoluteDeltaThreshold;
        });
        if (filteredDiffs.length === 1 && filteredDiffs[0].type === "displayValue")
          return [];
        const isAllPassing = compareAudit.score === 1 && baseAudit.score === 1;
        const group = getGroupForAuditId(auditId);
        if (group !== "metrics" && filteredDiffs.every((diff) => diff.type === "displayValue" || diff.type === "numericValue") && (isAllPassing || hasItemDetails)) {
          return [];
        }
        return filteredDiffs;
      }
      module.exports = {
        findAuditDiffs: findAuditDiffs2,
        getDiffSeverity: getDiffSeverity2,
        getDeltaLabel: getDeltaLabel2,
        getDeltaStats: getDeltaStats2,
        getDiffLabel: getDiffLabel6,
        getRowLabel,
        getRowLabelForIndex: getRowLabelForIndex3,
        getMostSevereDiffLabel,
        getMetricScoreLevel,
        zipBaseAndCompareItems: zipBaseAndCompareItems2,
        synthesizeItemKeyDiffs,
        sortZippedBaseAndCompareItems: sortZippedBaseAndCompareItems2,
        replaceNondeterministicStrings
      };
    }
  });

  // ../utils/src/markdown.js
  var require_markdown = __commonJS({
    "../utils/src/markdown.js"(exports, module) {
      "use strict";
      function splitMarkdownLink2(text) {
        const segments = [];
        const parts = text.split(/\[([^\]]+?)\]\((https?:\/\/.*?)\)/g);
        while (parts.length) {
          const [preambleText, linkText, linkHref] = parts.splice(0, 3);
          if (preambleText) {
            segments.push({
              isLink: false,
              text: preambleText
            });
          }
          if (linkText && linkHref) {
            segments.push({
              isLink: true,
              text: linkText,
              linkHref
            });
          }
        }
        return segments;
      }
      module.exports = { splitMarkdownLink: splitMarkdownLink2 };
    }
  });

  // ../../node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var h = Array.isArray;
  function v(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, i3, o3, null);
  }
  function d(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function g(n2, l3) {
    if (null == l3)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l3, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (l3 = i.length, t3 = void 0, o3 = void 0, r3 = void 0, c3 = (e3 = (u3 = n2).__v).__e, (s3 = u3.__P) && (t3 = [], o3 = [], (r3 = v({}, e3)).__v = e3.__v + 1, L(s3, e3, r3, u3.__n, void 0 !== s3.ownerSVGElement, null != e3.__h ? [c3] : null, t3, null == c3 ? g(e3) : c3, e3.__h, o3), M(t3, e3, o3), e3.__e != c3 && m(e3)), i.length > l3 && i.sort(f));
    x.__r = 0;
  }
  function P(n2, l3, u3, t3, i3, o3, r3, f3, e3, a3, v3) {
    var p3, y3, _6, b3, m3, w4, x3, P3, C3, H3 = 0, I3 = t3 && t3.__k || s, T4 = I3.length, j4 = T4, z4 = l3.length;
    for (u3.__k = [], p3 = 0; p3 < z4; p3++)
      null != (b3 = u3.__k[p3] = null == (b3 = l3[p3]) || "boolean" == typeof b3 || "function" == typeof b3 ? null : "string" == typeof b3 || "number" == typeof b3 || "bigint" == typeof b3 ? d(null, b3, null, null, b3) : h(b3) ? d(k, { children: b3 }, null, null, null) : b3.__b > 0 ? d(b3.type, b3.props, b3.key, b3.ref ? b3.ref : null, b3.__v) : b3) ? (b3.__ = u3, b3.__b = u3.__b + 1, -1 === (P3 = A(b3, I3, x3 = p3 + H3, j4)) ? _6 = c : (_6 = I3[P3] || c, I3[P3] = void 0, j4--), L(n2, b3, _6, i3, o3, r3, f3, e3, a3, v3), m3 = b3.__e, (y3 = b3.ref) && _6.ref != y3 && (_6.ref && O(_6.ref, null, b3), v3.push(y3, b3.__c || m3, b3)), null != m3 && (null == w4 && (w4 = m3), (C3 = _6 === c || null === _6.__v) ? -1 == P3 && H3-- : P3 !== x3 && (P3 === x3 + 1 ? H3++ : P3 > x3 ? j4 > z4 - x3 ? H3 += P3 - x3 : H3-- : H3 = P3 < x3 && P3 == x3 - 1 ? P3 - x3 : 0), x3 = p3 + H3, "function" != typeof b3.type || P3 === x3 && _6.__k !== b3.__k ? "function" == typeof b3.type || P3 === x3 && !C3 ? void 0 !== b3.__d ? (e3 = b3.__d, b3.__d = void 0) : e3 = m3.nextSibling : e3 = S(n2, m3, e3) : e3 = $(b3, e3, n2), "function" == typeof u3.type && (u3.__d = e3))) : (_6 = I3[p3]) && null == _6.key && _6.__e && (_6.__e == e3 && (e3 = g(_6)), q(_6, _6, false), I3[p3] = null);
    for (u3.__e = w4, p3 = T4; p3--; )
      null != I3[p3] && ("function" == typeof u3.type && null != I3[p3].__e && I3[p3].__e == u3.__d && (u3.__d = I3[p3].__e.nextSibling), q(I3[p3], I3[p3]));
  }
  function $(n2, l3, u3) {
    for (var t3, i3 = n2.__k, o3 = 0; i3 && o3 < i3.length; o3++)
      (t3 = i3[o3]) && (t3.__ = n2, l3 = "function" == typeof t3.type ? $(t3, l3, u3) : S(u3, t3.__e, l3));
    return l3;
  }
  function C(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (h(n2) ? n2.some(function(n3) {
      C(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function S(n2, l3, u3) {
    return null == u3 || u3.parentNode !== n2 ? n2.insertBefore(l3, null) : l3 == u3 && null != l3.parentNode || n2.insertBefore(l3, u3), l3.nextSibling;
  }
  function A(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type)
      return u3;
    if (t3 > (null != e3 ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function H(n2, l3, u3, t3, i3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || T(n2, o3, null, u3[o3], t3);
    for (o3 in l3)
      i3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || T(n2, o3, l3[o3], u3[o3], t3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 || n2.addEventListener(l3, o3 ? z : j, o3) : n2.removeEventListener(l3, o3 ? z : j, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p3, y3, d3, _6, g4, m3, w4, x3, $3, C3, S2, A3, H3, I3, T4 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != t3.__h && (c3 = t3.__h, e3 = u3.__e = t3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof T4)
        try {
          if (w4 = u3.props, x3 = (a3 = T4.contextType) && i3[a3.__c], $3 = a3 ? x3 ? x3.props.value : a3.__ : i3, t3.__c ? m3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in T4 && T4.prototype.render ? u3.__c = p3 = new T4(w4, $3) : (u3.__c = p3 = new b(w4, $3), p3.constructor = T4, p3.render = B), x3 && x3.sub(p3), p3.props = w4, p3.state || (p3.state = {}), p3.context = $3, p3.__n = i3, y3 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != T4.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = v({}, p3.__s)), v(p3.__s, T4.getDerivedStateFromProps(w4, p3.__s))), d3 = p3.props, _6 = p3.state, p3.__v = u3, y3)
            null == T4.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
          else {
            if (null == T4.getDerivedStateFromProps && w4 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(w4, $3), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(w4, p3.__s, $3) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (p3.props = w4, p3.state = p3.__s, p3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), C3 = 0; C3 < p3._sb.length; C3++)
                p3.__h.push(p3._sb[C3]);
              p3._sb = [], p3.__h.length && f3.push(p3);
              break n;
            }
            null != p3.componentWillUpdate && p3.componentWillUpdate(w4, p3.__s, $3), null != p3.componentDidUpdate && p3.__h.push(function() {
              p3.componentDidUpdate(d3, _6, g4);
            });
          }
          if (p3.context = $3, p3.props = w4, p3.__P = n2, p3.__e = false, S2 = l.__r, A3 = 0, "prototype" in T4 && T4.prototype.render) {
            for (p3.state = p3.__s, p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), H3 = 0; H3 < p3._sb.length; H3++)
              p3.__h.push(p3._sb[H3]);
            p3._sb = [];
          } else
            do {
              p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
            } while (p3.__d && ++A3 < 25);
          p3.state = p3.__s, null != p3.getChildContext && (i3 = v(v({}, i3), p3.getChildContext())), y3 || null == p3.getSnapshotBeforeUpdate || (g4 = p3.getSnapshotBeforeUpdate(d3, _6)), P(n2, h(I3 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? I3 : [I3], u3, t3, i3, o3, r3, f3, e3, c3, s3), p3.base = u3.__e, u3.__h = null, p3.__h.length && f3.push(p3), m3 && (p3.__E = p3.__ = null);
        } catch (n3) {
          u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = N(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function M(n2, u3, t3) {
    for (var i3 = 0; i3 < t3.length; i3++)
      O(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, t3, i3, o3, r3, f3, e3, s3) {
    var a3, v3, y3, d3 = t3.props, _6 = u3.props, k3 = u3.type, b3 = 0;
    if ("svg" === k3 && (o3 = true), null != r3) {
      for (; b3 < r3.length; b3++)
        if ((a3 = r3[b3]) && "setAttribute" in a3 == !!k3 && (k3 ? a3.localName === k3 : 3 === a3.nodeType)) {
          l3 = a3, r3[b3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === k3)
        return document.createTextNode(_6);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, _6.is && _6), r3 = null, e3 = false;
    }
    if (null === k3)
      d3 === _6 || e3 && l3.data === _6 || (l3.data = _6);
    else {
      if (r3 = r3 && n.call(l3.childNodes), v3 = (d3 = t3.props || c).dangerouslySetInnerHTML, y3 = _6.dangerouslySetInnerHTML, !e3) {
        if (null != r3)
          for (d3 = {}, b3 = 0; b3 < l3.attributes.length; b3++)
            d3[l3.attributes[b3].name] = l3.attributes[b3].value;
        (y3 || v3) && (y3 && (v3 && y3.__html == v3.__html || y3.__html === l3.innerHTML) || (l3.innerHTML = y3 && y3.__html || ""));
      }
      if (H(l3, _6, d3, o3, e3), y3)
        u3.__k = [];
      else if (P(l3, h(b3 = u3.props.children) ? b3 : [b3], u3, t3, i3, o3 && "foreignObject" !== k3, r3, f3, r3 ? r3[0] : t3.__k && g(t3, 0), e3, s3), null != r3)
        for (b3 = r3.length; b3--; )
          null != r3[b3] && p(r3[b3]);
      e3 || ("value" in _6 && void 0 !== (b3 = _6.value) && (b3 !== l3.value || "progress" === k3 && !b3 || "option" === k3 && b3 !== d3.value) && T(l3, "value", b3, d3.value, false), "checked" in _6 && void 0 !== (b3 = _6.checked) && b3 !== l3.checked && T(l3, "checked", b3, d3.checked, false));
    }
    return l3;
  }
  function O(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function q(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || O(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null, n2.__c = void 0;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && q(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function B(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function D(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], L(t3, u3 = (!o3 && i3 || t3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), M(f3, u3, e3);
  }
  n = s.slice, l = { __e: function(n2, l3, u3, t3) {
    for (var i3, o3, r3; l3 = l3.__; )
      if ((i3 = l3.__c) && !i3.__)
        try {
          if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
            return i3.__E = i3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, b.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u3), this.props)), n2 && v(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
  }, b.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, x.__r = 0, e = 0;

  // ../../node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function p2(u3, i3) {
    var o3 = d2(t2++, 3);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
  }
  function _(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, l.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
  }, l.diffed = function(t3) {
    v2 && v2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || w2(n2);
        });
      } catch (u3) {
        r3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), l2 && l2(t3, r3);
  }, l.unmount = function(t3) {
    m2 && m2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
      try {
        k2(n2);
      } catch (n3) {
        r3 = n3;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // ../../node_modules/clsx/dist/clsx.m.js
  function toVal(mix) {
    var k3, y3, str = "";
    if (mix) {
      if (typeof mix === "object") {
        if (!!mix.push) {
          for (k3 = 0; k3 < mix.length; k3++) {
            if (mix[k3] && (y3 = toVal(mix[k3]))) {
              str && (str += " ");
              str += y3;
            }
          }
        } else {
          for (k3 in mix) {
            if (mix[k3] && (y3 = toVal(k3))) {
              str && (str += " ");
              str += y3;
            }
          }
        }
      } else if (typeof mix !== "boolean" && !mix.call) {
        str && (str += " ");
        str += mix;
      }
    }
    return str;
  }
  function clsx_m_default() {
    var i3 = 0, x3, str = "";
    while (i3 < arguments.length) {
      if (x3 = toVal(arguments[i3++])) {
        str && (str += " ");
        str += x3;
      }
    }
    return str;
  }

  // ../server/src/ui/components/loading-spinner.jsx
  var SVG_PATH = require_loading_spinner();
  var LoadingSpinner_ = () => {
    return /* @__PURE__ */ y("img", {
      src: SVG_PATH,
      alt: "Loading spinner"
    });
  };
  var LoadingSpinner = (props) => {
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default("loading-spinner", {
        "loading-spinner--container": !props.solo
      })
    }, /* @__PURE__ */ y(LoadingSpinner_, null));
  };

  // ../server/src/ui/components/paper.jsx
  var Paper = (props) => {
    const { children } = props;
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default("paper", props.className)
    }, children);
  };

  // ../server/src/ui/components/lhr-viewer-link.jsx
  function openLhrInClassicViewer(lhr) {
    const VIEWER_ORIGIN = "https://googlechrome.github.io";
    window.addEventListener("message", function msgHandler(messageEvent) {
      if (messageEvent.origin !== VIEWER_ORIGIN) {
        return;
      }
      if (popup && messageEvent.data.opened) {
        popup.postMessage({ lhresults: lhr }, VIEWER_ORIGIN);
        window.removeEventListener("message", msgHandler);
      }
    });
    const fetchTime = lhr.fetchTime;
    const windowName = `${lhr.lighthouseVersion}-${lhr.requestedUrl}-${fetchTime}`;
    const popup = window.open(`${VIEWER_ORIGIN}/lighthouse/viewer`, windowName);
  }
  var LhrViewerLink = (props) => {
    const { children, lhr: lhrOrResolver } = props;
    const [isLoading, setIsLoading] = h2(false);
    return /* @__PURE__ */ y("span", {
      className: clsx_m_default("lhr-viewer-link", props.className, {
        "lhr-viewer-link--loading": isLoading
      }),
      onClick: (evt) => __async(void 0, null, function* () {
        evt.preventDefault();
        evt.stopImmediatePropagation();
        if (isLoading)
          return;
        if (typeof lhrOrResolver === "object")
          return openLhrInClassicViewer(lhrOrResolver);
        setIsLoading(true);
        const lhr = yield lhrOrResolver();
        setIsLoading(false);
        openLhrInClassicViewer(lhr);
      })
    }, children);
  };

  // ../server/src/ui/components/lhr-viewer-button.jsx
  var LH_ICON_PATH = require_favicon();
  var LhrViewerButton = (props) => {
    const { lhr, label = "Open Report" } = props;
    return /* @__PURE__ */ y(LhrViewerLink, {
      lhr
    }, /* @__PURE__ */ y("div", {
      className: "lhr-viewer-button",
      role: "button"
    }, /* @__PURE__ */ y("img", {
      src: LH_ICON_PATH
    }), " ", /* @__PURE__ */ y("span", null, label)));
  };

  // src/ui/components/lhci-components.jsx
  var CONFETTI_PATH = require_confetti();
  var LH_LOGO_PATH = require_logo();

  // src/ui/components/report-upload-box.jsx
  function parseStringAsLhr(s3) {
    if (s3.includes("<script>window.__LIGHTHOUSE_JSON__ = ")) {
      const match = s3.match(/window\.__LIGHTHOUSE_JSON__ = (.*?});<\/script>/);
      if (match)
        s3 = match[1];
    }
    if (s3.trim().charAt(0) === "{") {
      try {
        const lhr = JSON.parse(s3);
        if (lhr.lighthouseVersion)
          return lhr;
        return new Error(`JSON did not contain a lighthouseVersion`);
      } catch (err) {
        return new Error(`File was not valid JSON (${err.message})`);
      }
    }
    return new Error("File was not a valid report");
  }
  function computeBestDisplayType(lhrA, lhrB) {
    const urlA = new URL(lhrA.finalUrl);
    const urlB = new URL(lhrB.finalUrl);
    if (urlA.hostname !== urlB.hostname)
      return "hostname";
    if (urlA.pathname !== urlB.pathname)
      return "pathname";
    if (urlA.search !== urlB.search)
      return "path";
    if (urlA.pathname.length < 5)
      return "timestamp-hostname";
    return "timestamp-pathname";
  }
  var FilePill = (props) => {
    const { filename, lhr } = props.report;
    const url = new URL(lhr.finalUrl);
    const timestamp = new Date(lhr.fetchTime).toLocaleString();
    const options = {
      filename,
      hostname: url.hostname,
      pathname: url.pathname,
      path: `${url.pathname}${url.search}`,
      "timestamp-hostname": `${timestamp} (${url.hostname})`,
      "timestamp-pathname": `${timestamp} (${url.pathname})`
    };
    const tooltip = `${url.href} at ${timestamp}`;
    return /* @__PURE__ */ y("span", {
      title: tooltip
    }, options[props.displayType]);
  };
  function handleFileInput(props, fileList) {
    const filename = fileList[0].name;
    const reader = new FileReader();
    reader.readAsText(fileList[0], "utf-8");
    reader.addEventListener("load", () => {
      if (typeof reader.result !== "string") {
        props.addToast({ message: "File was not readable as text!", level: "error" });
        return;
      }
      const lhr = parseStringAsLhr(reader.result);
      if (lhr instanceof Error) {
        props.addToast({ message: `Invalid file: ${lhr.message}`, level: "error" });
        return;
      }
      props.setReport({ filename, data: reader.result, lhr });
    });
    reader.addEventListener("error", () => {
      props.addToast({ message: "File was not readable!", level: "error" });
    });
  }
  function handleDragEnter(props, dragTargetRef, setIsDragging, e3) {
    if (!(e3.target instanceof HTMLElement))
      return;
    e3.stopPropagation();
    e3.preventDefault();
    setIsDragging(true);
    dragTargetRef.current = e3.target;
  }
  function handleDragLeave(props, dragTargetRef, setIsDragging, e3) {
    if (e3.target !== dragTargetRef.current)
      return;
    e3.stopPropagation();
    e3.preventDefault();
    setIsDragging(false);
    dragTargetRef.current = void 0;
  }
  function handleDragOver(props, dragTargetRef, setIsDragging, e3) {
    if (!dragTargetRef.current)
      return;
    e3.stopPropagation();
    e3.preventDefault();
  }
  function handleDrop(props, dragTargetRef, setIsDragging, e3) {
    if (!dragTargetRef.current)
      return;
    if (!(e3 instanceof DragEvent))
      return;
    if (!e3.dataTransfer)
      return;
    e3.stopPropagation();
    e3.preventDefault();
    setIsDragging(false);
    dragTargetRef.current = void 0;
    handleFileInput(props, e3.dataTransfer.files);
  }
  var ReportUploadBox = (props) => {
    const [isDragging, setIsDragging] = h2(false);
    const dragTargetRef = _(void 0);
    const onDragEnter = (e3) => handleDragEnter(props, dragTargetRef, setIsDragging, e3);
    const onDragLeave = (e3) => handleDragLeave(props, dragTargetRef, setIsDragging, e3);
    const onDragOver = (e3) => handleDragOver(props, dragTargetRef, setIsDragging, e3);
    const onDrop = (e3) => handleDrop(props, dragTargetRef, setIsDragging, e3);
    p2(() => {
      if (props.dragTarget !== "document")
        return;
      document.addEventListener("dragenter", onDragEnter);
      document.addEventListener("dragleave", onDragLeave);
      document.addEventListener("dragover", onDragOver);
      document.addEventListener("drop", onDrop);
      return () => {
        document.removeEventListener("dragenter", onDragEnter);
        document.removeEventListener("dragleave", onDragLeave);
        document.removeEventListener("dragover", onDragOver);
        document.removeEventListener("drop", onDrop);
      };
    }, [props.dragTarget, props.addToast, props.setReport, dragTargetRef.current]);
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default(`report-upload-box report-upload-box--${props.variant}`, {
        "report-upload-box--drop": isDragging,
        "report-upload-box--document-target": props.dragTarget === "document"
      }),
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDrop
    }, /* @__PURE__ */ y("div", {
      className: "report-upload-box__drop-outline"
    }, "Drop your report to upload"), /* @__PURE__ */ y("span", {
      className: "report-upload-box__label"
    }, props.variant === "base" ? "Base" : "Compare"), /* @__PURE__ */ y("div", {
      className: "report-upload-box__file"
    }, props.report ? /* @__PURE__ */ y(FilePill, {
      report: props.report,
      displayType: props.displayType
    }) : /* @__PURE__ */ y(k, null)), /* @__PURE__ */ y("div", {
      className: "report-upload-box__lhr-link"
    }, props.report && props.showOpenLhrLink ? /* @__PURE__ */ y(LhrViewerButton, {
      lhr: props.report.lhr,
      label: "View Report"
    }) : null), /* @__PURE__ */ y("div", {
      className: "report-upload-box__spacer"
    }), /* @__PURE__ */ y("label", {
      className: "report-upload-box__upload"
    }, "Select file", /* @__PURE__ */ y("input", {
      type: "file",
      style: { display: "none" },
      onChange: (e3) => {
        const input = e3.target;
        if (!(input instanceof HTMLInputElement))
          return;
        const fileList = input.files;
        if (!fileList || fileList.length !== 1)
          return;
        handleFileInput(props, fileList);
      }
    })));
  };

  // src/ui/routes/landing/landing.jsx
  var LandingRoute = (props) => {
    return /* @__PURE__ */ y("div", {
      className: "landing"
    }, /* @__PURE__ */ y("div", {
      className: "landing__background"
    }, /* @__PURE__ */ y("img", {
      src: CONFETTI_PATH,
      alt: "Lighthouse CI Background Image"
    })), /* @__PURE__ */ y(Paper, {
      className: "landing__paper"
    }, /* @__PURE__ */ y("div", {
      className: "landing__logos"
    }, /* @__PURE__ */ y("img", {
      className: "landing__logo",
      src: LH_LOGO_PATH,
      alt: "Lighthouse Logo"
    }), /* @__PURE__ */ y("img", {
      className: "landing__logo landing__logo--diff",
      src: LH_LOGO_PATH,
      alt: ""
    }), /* @__PURE__ */ y("h1", null, "Lighthouse Report Diff Tool")), /* @__PURE__ */ y("p", null, "Provide two Lighthouse reports to start comparing!"), /* @__PURE__ */ y("p", null, /* @__PURE__ */ y("a", {
      href: "./?baseReport=https://googlechrome.github.io/lighthouse-ci/packages/server/test/fixtures/lh-5-6-0-verge-a.json&compareReport=https://googlechrome.github.io/lighthouse-ci/packages/server/test/fixtures/lh-5-6-0-verge-b.json"
    }, "View example diff")), /* @__PURE__ */ y("div", {
      className: "landing__upload"
    }, /* @__PURE__ */ y(ReportUploadBox, {
      variant: "base",
      report: props.baseReport,
      setReport: props.setBaseReport,
      addToast: props.addToast,
      displayType: "filename",
      dragTarget: props.baseReport ? "self" : "document"
    }), /* @__PURE__ */ y(ReportUploadBox, {
      variant: "compare",
      report: props.compareReport,
      setReport: props.setCompareReport,
      addToast: props.addToast,
      displayType: "filename",
      dragTarget: props.baseReport ? "document" : "self"
    })), /* @__PURE__ */ y("p", null, "Above, drag 'n drop your JSON/HTML, or select the files from disk."), /* @__PURE__ */ y("footer", null, "Powered by ", /* @__PURE__ */ y("a", {
      href: "https://github.com/GoogleChrome/lighthouse-ci"
    }, "lighthouse-ci"))));
  };

  // ../server/src/ui/routes/build-view/lhr-comparison.jsx
  var import_lodash = __toESM(require_lodash());
  var import_audit_diff_finder8 = __toESM(require_audit_diff_finder());

  // ../server/src/ui/components/dropdown.jsx
  var Dropdown = (props) => {
    const { options, value, setValue, className, title, label } = props;
    const computedOptions = options.some((option) => option.value === value) ? options : [...options, { value, label: value }];
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default("dropdown", className),
      style: { position: "relative" },
      "data-tooltip": title
    }, /* @__PURE__ */ y("label", null, label ? /* @__PURE__ */ y("span", {
      className: "dropdown__label"
    }, label) : /* @__PURE__ */ y(k, null), /* @__PURE__ */ y("select", {
      onChange: (evt) => {
        if (!(evt.target instanceof HTMLSelectElement))
          return;
        setValue(evt.target.value);
      }
    }, computedOptions.map((option) => {
      return /* @__PURE__ */ y("option", {
        key: option.value,
        value: option.value,
        selected: option.value === value
      }, option.label);
    }))), /* @__PURE__ */ y("div", {
      className: "dropdown__chevron"
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "arrow_drop_down")));
  };

  // ../server/src/ui/hooks/use-previous-value.jsx
  function usePreviousValue(value) {
    const ref = _(void 0);
    p2(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  // ../server/src/ui/components/score-icon.jsx
  var ScoreIcon = (props) => {
    const score = props.score;
    if (score >= 0.9)
      return /* @__PURE__ */ y("i", {
        className: "lh-score-pass"
      });
    if (score >= 0.5)
      return /* @__PURE__ */ y("i", {
        className: "lh-score-average"
      });
    return /* @__PURE__ */ y("i", {
      className: "lh-score-fail"
    }, /* @__PURE__ */ y("svg", {
      viewBox: "0 0 120 120",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ y("polygon", {
      points: "10,110 60,10 110,110"
    })));
  };
  var ScoreWord = (props) => {
    const score = props.audit.score || 0;
    if (score >= 0.9)
      return /* @__PURE__ */ y("span", {
        className: "lh-score-word"
      }, "Pass");
    return /* @__PURE__ */ y("span", {
      className: "lh-score-word"
    }, "Fail");
  };

  // ../server/src/ui/components/markdown.jsx
  var import_markdown = __toESM(require_markdown());
  var Markdown = (props) => {
    const segments = (0, import_markdown.splitMarkdownLink)(props.text);
    return /* @__PURE__ */ y(k, null, segments.map((segment, i3) => {
      if (!segment.isLink)
        return /* @__PURE__ */ y("span", {
          key: i3
        }, segment.text);
      const url = new URL(segment.linkHref);
      const DOCS_ORIGINS = ["https://developers.google.com", "https://web.dev"];
      if (DOCS_ORIGINS.includes(url.origin)) {
        url.searchParams.set("utm_source", "lighthouse");
        url.searchParams.set("utm_medium", "ci");
      }
      return /* @__PURE__ */ y("a", {
        key: i3,
        href: url.href,
        target: "_blank",
        rel: "noopener noreferrer"
      }, segment.text);
    }));
  };

  // ../server/src/ui/components/nbsp.jsx
  var Nbsp = () => {
    return /* @__PURE__ */ y("span", {
      style: { display: "inline-block", width: 4, height: 1 }
    });
  };

  // ../server/src/ui/routes/build-view/audit-detail/simple-details.jsx
  var import_audit_diff_finder = __toESM(require_audit_diff_finder());
  var SimpleDetails = (props) => {
    let type = props.type;
    const { compareValue, baseValue, diff } = props;
    const value = compareValue === void 0 ? baseValue : compareValue;
    if (typeof value === "object" && value.type) {
      type = value.type;
    }
    const label = diff ? (0, import_audit_diff_finder.getDiffLabel)(diff) : "neutral";
    const numericBase = Number.isFinite(baseValue) ? baseValue : 0;
    const numericCompare = Number.isFinite(compareValue) ? compareValue : 0;
    const baseDisplay = `Base Value: ${Math.round(numericBase).toLocaleString()}`;
    const compareDisplay = `Compare Value: ${Math.round(numericCompare).toLocaleString()}`;
    const numericTitle = `${baseDisplay}, ${compareDisplay}`;
    const deltaPercent = diff && (0, import_audit_diff_finder.getDeltaStats)(diff).percentAbsoluteDelta !== 1 ? ` (${((0, import_audit_diff_finder.getDeltaStats)(diff).percentAbsoluteDelta * 100).toLocaleString(void 0, {
      maximumFractionDigits: 0
    })}%)` : "";
    switch (type) {
      case "bytes": {
        const kb = Math.abs((numericCompare - numericBase) / 1024);
        return /* @__PURE__ */ y("pre", {
          className: `simple-details--${label}`,
          "data-tooltip": numericTitle
        }, numericCompare >= numericBase ? "+" : "-", kb.toLocaleString(void 0, { maximumFractionDigits: Math.abs(kb) < 1 ? 1 : 0 }), /* @__PURE__ */ y(Nbsp, null), "KB", deltaPercent);
      }
      case "ms":
      case "timespanMs": {
        const ms = Math.abs(Math.round(numericCompare - numericBase));
        return /* @__PURE__ */ y("pre", {
          className: `simple-details--${label}`,
          "data-tooltip": numericTitle
        }, numericCompare >= numericBase ? "+" : "-", ms.toLocaleString(), /* @__PURE__ */ y(Nbsp, null), "ms", deltaPercent);
      }
      case "thumbnail":
        return /* @__PURE__ */ y("img", {
          style: { width: 48, height: 48, objectFit: "cover" },
          src: value,
          onError: (evt) => {
            const img = evt.srcElement;
            if (!(img instanceof HTMLImageElement))
              return;
            img.onerror = null;
            img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
          }
        });
      case "url": {
        let display = value;
        let hostname = "";
        try {
          const url = new URL(value);
          display = url.pathname;
          hostname = url.hostname;
        } catch (_6) {
        }
        return /* @__PURE__ */ y("span", {
          title: value
        }, display, hostname ? /* @__PURE__ */ y("span", {
          className: "simple-details__url-hostname"
        }, "(", hostname, ")") : "");
      }
      case "link": {
        if (!value.url)
          return /* @__PURE__ */ y("span", null, value.text);
        return /* @__PURE__ */ y("a", {
          target: "_blank",
          rel: "noopener noreferrer",
          href: value.url
        }, value.text);
      }
      case "code":
        return /* @__PURE__ */ y("pre", null, value);
      case "numeric": {
        return /* @__PURE__ */ y("pre", {
          className: `simple-details--${label}`
        }, numericCompare >= numericBase ? "+" : "-", Math.abs(numericCompare - numericBase).toLocaleString(), deltaPercent);
      }
      case "text":
        return /* @__PURE__ */ y("span", null, value);
      case "node":
        return /* @__PURE__ */ y("pre", null, value.snippet);
      case "source-location": {
        if (!value.url)
          return /* @__PURE__ */ y("pre", null, JSON.stringify(value));
        const { url, line, column } = value;
        return /* @__PURE__ */ y("pre", null, url, ":", line, ":", column);
      }
      case "debugdata": {
        return /* @__PURE__ */ y(k, null);
      }
      default: {
        const debugdata = JSON.stringify(props);
        return /* @__PURE__ */ y("pre", {
          "data-tooltip": debugdata
        }, debugdata.slice(0, 20));
      }
    }
  };

  // ../server/src/ui/routes/build-view/audit-detail/table-details.jsx
  var import_audit_diff_finder2 = __toESM(require_audit_diff_finder());
  function isNumericValueType(itemType) {
    switch (itemType) {
      case "bytes":
      case "ms":
      case "timespanMs":
      case "numeric":
        return true;
      default:
        return false;
    }
  }
  var TableDetails = (props) => {
    const { audit, baseAudit, diffs: allDiffs } = props.pair;
    if (!audit.details)
      return /* @__PURE__ */ y(k, null);
    const { headings: compareHeadings, items: compareItems } = audit.details;
    if (!compareHeadings || !compareItems)
      return /* @__PURE__ */ y(k, null);
    const baseHeadings = baseAudit && baseAudit.details && baseAudit.details.headings || [];
    const baseItems = baseAudit && baseAudit.details && baseAudit.details.items || [];
    const zippedItems = (0, import_audit_diff_finder2.zipBaseAndCompareItems)(baseItems, compareItems);
    const sortedItems = (0, import_audit_diff_finder2.sortZippedBaseAndCompareItems)(allDiffs, zippedItems);
    const headings = compareHeadings.length ? compareHeadings : baseHeadings;
    let insertRowLabelAfterIndex = headings.findIndex(
      (heading) => isNumericValueType(heading.valueType || heading.itemType || "unknown")
    ) - 1;
    if (insertRowLabelAfterIndex < 0)
      insertRowLabelAfterIndex = headings.length - 1;
    return /* @__PURE__ */ y("div", {
      className: "table-details"
    }, /* @__PURE__ */ y("table", null, /* @__PURE__ */ y("thead", null, /* @__PURE__ */ y("tr", null, headings.map((heading, i3) => {
      const itemType = heading.valueType || heading.itemType || "unknown";
      return /* @__PURE__ */ y(k, {
        key: i3
      }, /* @__PURE__ */ y("th", {
        className: `table-column--${itemType}`
      }, heading.label || heading.text), insertRowLabelAfterIndex === i3 ? /* @__PURE__ */ y("th", null) : null);
    }))), /* @__PURE__ */ y("tbody", null, sortedItems.map(({ base, compare, diffs }) => {
      const definedItem = compare || base;
      if (!definedItem)
        return null;
      const key = `${base && base.index}-${compare && compare.index}`;
      const state = (0, import_audit_diff_finder2.getRowLabelForIndex)(
        allDiffs,
        compare && compare.index,
        base && base.index
      );
      return /* @__PURE__ */ y("tr", {
        key
      }, headings.map((heading, j4) => {
        const itemType = heading.valueType || heading.itemType || "unknown";
        const diff = diffs.find(
          (diff2) => diff2.type === "itemDelta" && diff2.itemKey === heading.key
        );
        const compareItem = heading.key && compare && compare.item[heading.key];
        const baseItem = heading.key && base && base.item[heading.key];
        return /* @__PURE__ */ y(k, {
          key: j4
        }, /* @__PURE__ */ y("td", {
          className: `table-column--${itemType}`
        }, compareItem || baseItem ? /* @__PURE__ */ y(SimpleDetails, {
          type: itemType,
          compareValue: compareItem,
          baseValue: baseItem,
          diff
        }) : /* @__PURE__ */ y(k, null)), insertRowLabelAfterIndex === j4 ? /* @__PURE__ */ y("td", {
          className: "table-column--row-label"
        }, state === "added" || state === "removed" ? state : "") : null);
      }));
    }))));
  };

  // ../server/src/ui/routes/build-view/audit-list/numeric-diff.jsx
  var import_audit_diff_finder3 = __toESM(require_audit_diff_finder());
  var BIG_PICTURE_LIMITS = {
    "first-contentful-paint": [0, 1e4],
    "first-meaningful-paint": [0, 1e4],
    "largest-contentful-paint": [0, 15e3],
    "speed-index": [0, 15e3],
    "first-cpu-idle": [0, 15e3],
    "interactive": [0, 2e4],
    "estimated-input-latency": [0, 1500],
    "max-potential-fid": [0, 1500],
    "total-blocking-time": [0, 1500],
    "experimental-interaction-to-next-paint": [0, 3500],
    "cumulative-layout-shift": [0, 1],
    __default__: [0, 30 * 1e3]
  };
  var getBigPictureLimit = (audit, limitType) => {
    const auditId = audit && audit.id || "";
    const limits = BIG_PICTURE_LIMITS[auditId] || BIG_PICTURE_LIMITS.__default__;
    return limits[limitType === "lower" ? 0 : 1];
  };
  var toNearestRoundNumber = (x3, direction) => {
    const fn = direction === "up" ? Math.ceil : Math.floor;
    if (x3 < 10)
      return fn(x3);
    if (x3 < 100)
      return fn(x3 / 10) * 10;
    if (x3 < 1e3)
      return fn(x3 / 100) * 100;
    if (x3 < 1e4)
      return fn(x3 / 1e3) * 1e3;
    return fn(x3 / 2500) * 2500;
  };
  var getUnitFromAudit = (audit, groupId) => {
    if (audit && audit.id === "cumulative-layout-shift")
      return "none";
    if (groupId === "metrics")
      return "ms";
    if (groupId === "load-opportunities")
      return "ms";
    if (!audit)
      return "none";
    if (audit.details) {
      const details = audit.details;
      if (details.overallSavingsMs)
        return "ms";
    }
    const displayValue = audit.displayValue || "";
    if (/[0-9,.]+\s(ms|s)$/.test(displayValue))
      return "ms";
    if (/[0-9,.]+\s(KB|MB)$/.test(displayValue))
      return "bytes";
    return "none";
  };
  var toDisplay = (x3, options) => {
    const { asDelta = false, withSuffix = false, unit = "none" } = options;
    let value = Math.round(x3);
    let fractionDigits = 0;
    let suffixUnit = "";
    if (unit === "ms") {
      suffixUnit = "ms";
      if (Math.abs(value) >= 1e3 && !options.preventSecondsConversion) {
        value /= 1e3;
        fractionDigits = 1;
        suffixUnit = "s";
      }
    }
    if (unit === "bytes") {
      suffixUnit = "KB";
      value /= 1024;
      if (Math.abs(value) >= 500) {
        value /= 1024;
        fractionDigits = 1;
        suffixUnit = "MB";
      }
    }
    if (unit === "none") {
      if (Math.abs(x3) < 1) {
        value = x3;
        fractionDigits = 3;
      } else if (Math.abs(value) < 10) {
        value = x3;
        fractionDigits = 1;
      } else if (Math.abs(value) >= 50) {
        value /= 1e3;
        fractionDigits = 1;
        suffixUnit = "K";
      }
    }
    const string = value.toLocaleString(void 0, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    });
    const numericSign = asDelta && value >= 0 ? "+" : "";
    const resultStr = numericSign + string + (withSuffix ? suffixUnit : "");
    return {
      element: /* @__PURE__ */ y("span", null, numericSign, string, withSuffix ? /* @__PURE__ */ y(k, null, /* @__PURE__ */ y(Nbsp, null), suffixUnit) : ""),
      string: resultStr,
      length: resultStr.length
    };
  };
  var NumericDiff = (props) => {
    const { diff, audit, groupId } = props;
    const unit = getUnitFromAudit(audit, groupId);
    const currentNumericValue = diff.compareValue;
    const baseNumericValue = diff.baseValue;
    if (typeof baseNumericValue !== "number" || typeof currentNumericValue !== "number") {
      return /* @__PURE__ */ y("span", null, "No diff available");
    }
    const delta = currentNumericValue - baseNumericValue;
    const minValue = Math.min(currentNumericValue, baseNumericValue);
    const maxValue = Math.max(currentNumericValue, baseNumericValue);
    const lowerLimit = props.showAsBigPicture ? getBigPictureLimit(audit, "lower") : toNearestRoundNumber(minValue * 0.8, "down");
    const upperLimit = props.showAsBigPicture ? getBigPictureLimit(audit, "upper") : toNearestRoundNumber(maxValue * 1.2, "up");
    const range = upperLimit - lowerLimit;
    const minValueConstrainted = Math.min(Math.max(minValue, lowerLimit), upperLimit);
    const maxValueConstrainted = Math.min(Math.max(maxValue, lowerLimit), upperLimit);
    const boxLeft = 100 * (minValueConstrainted - lowerLimit) / range;
    const boxRight = 100 - 100 * (maxValueConstrainted - lowerLimit) / range;
    const deltaType = (0, import_audit_diff_finder3.getDeltaLabel)(delta, "audit");
    const minValueIsCurrentValue = minValue === currentNumericValue;
    const hoverDisplay = `${toDisplay(baseNumericValue, { unit, withSuffix: true }).string} to ${toDisplay(currentNumericValue, {
      withSuffix: true,
      unit
    }).string}`;
    if (props.showAsNarrow) {
      return /* @__PURE__ */ y("div", {
        className: clsx_m_default("audit-numeric-diff", `text--${deltaType}`),
        "data-tooltip": hoverDisplay
      }, toDisplay(delta, { asDelta: true, withSuffix: true, preventSecondsConversion: true, unit }).element);
    }
    const { element: deltaLabel, length: deltaLabelLength } = toDisplay(delta, {
      asDelta: true,
      withSuffix: true,
      preventSecondsConversion: true,
      unit
    });
    const narrowCutoffThresholdInPercent = deltaLabelLength * 10 * 100 / 300;
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("div", {
      className: "audit-numeric-diff"
    }, /* @__PURE__ */ y("div", {
      className: "audit-numeric-diff__left-label"
    }, toDisplay(lowerLimit, { unit }).element), /* @__PURE__ */ y("div", {
      className: "audit-numeric-diff__bar"
    }, /* @__PURE__ */ y("div", {
      className: clsx_m_default("audit-numeric-diff__box", {
        "audit-numeric-diff__box--improvement": deltaType === "improvement",
        "audit-numeric-diff__box--regression": deltaType === "regression"
      }),
      style: { left: `${boxLeft}%`, right: `${boxRight}%` },
      "data-tooltip": hoverDisplay
    }, /* @__PURE__ */ y("div", {
      className: "audit-numeric-diff__now",
      style: { left: minValueIsCurrentValue ? "0%" : "100%" }
    }), /* @__PURE__ */ y("div", {
      className: clsx_m_default("audit-numeric-diff__delta-label", {
        "audit-numeric-diff__delta-label--narrow-left": deltaType === "improvement" && boxLeft < narrowCutoffThresholdInPercent,
        "audit-numeric-diff__delta-label--narrow-right": deltaType === "regression" && boxRight < narrowCutoffThresholdInPercent
      }),
      style: { [minValueIsCurrentValue ? "right" : "left"]: "100%" }
    }, deltaLabel))), /* @__PURE__ */ y("div", {
      className: "audit-numeric-diff__right-label"
    }, toDisplay(upperLimit, { unit }).element)));
  };

  // ../server/src/ui/routes/build-view/audit-list/audit-diff.jsx
  var _2 = __toESM(require_lodash());
  var import_audit_diff_finder4 = __toESM(require_audit_diff_finder());
  var ICONS_BY_AUDIT_ID = {
    "font-display": "font_download",
    "uses-rel-preconnect": "language",
    "user-timings": "timer",
    "bootup-time": "speed",
    "mainthread-work-breakdown": "speed",
    "third-party-summary": "language",
    deprecations: "error",
    "errors-in-console": "error",
    "font-sizes": "format_size"
  };
  var IconForAuditItems = (props) => {
    const auditId = props.audit.id || "";
    const groupId = props.groupId || "";
    let icon = "";
    if (groupId.includes("opportunities"))
      icon = "web_asset";
    if (groupId.includes("a11y"))
      icon = "code";
    if (auditId.includes("image"))
      icon = "photo";
    icon = ICONS_BY_AUDIT_ID[auditId] || icon || "list_alt";
    return /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, icon);
  };
  var ScoreDiff = (props) => {
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y(ScoreWord, {
      audit: props.baseAudit
    }), /* @__PURE__ */ y("i", {
      className: `material-icons audit-group__diff-arrow audit-group__diff-arrow--${(0, import_audit_diff_finder4.getDiffLabel)(
        props.diff
      )}`
    }, "arrow_forward"), /* @__PURE__ */ y(ScoreWord, {
      audit: props.audit
    }));
  };
  var DisplayValueDiff = (props) => {
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("span", null, props.diff.baseValue), /* @__PURE__ */ y("i", {
      className: `material-icons audit-group__diff-arrow audit-group__diff-arrow--${(0, import_audit_diff_finder4.getDiffLabel)(
        props.diff
      )}`
    }, "arrow_forward"), /* @__PURE__ */ y("span", null, props.diff.compareValue));
  };
  function getDiffLabelForRowLabel(rowLabel) {
    switch (rowLabel) {
      case "added":
      case "worse":
      case "ambiguous":
        return "regression";
      case "removed":
      case "better":
        return "improvement";
      case "no change":
        return "neutral";
    }
  }
  function getUniqueBaseCompareIndexPairs(diffs) {
    return _2.uniqBy(
      diffs.map((diff) => ({
        base: "baseItemIndex" in diff ? diff.baseItemIndex : void 0,
        compare: "compareItemIndex" in diff ? diff.compareItemIndex : void 0
      })).filter((indexes) => typeof indexes.base === "number" || typeof indexes.compare === "number"),
      (idx) => `${idx.base}-${idx.compare}`
    );
  }
  var ItemDiff = (props) => {
    const { diffs, baseAudit, groupId } = props;
    const baseAuditItems = baseAudit.details && baseAudit.details.items || [];
    const rowIndexes = getUniqueBaseCompareIndexPairs(diffs);
    const rowLabels = rowIndexes.map((pair) => (0, import_audit_diff_finder4.getRowLabelForIndex)(diffs, pair.compare, pair.base)).map(getDiffLabelForRowLabel);
    const regressionCount = rowLabels.filter((label) => label === "regression").length;
    const improvementCount = rowLabels.filter((label) => label === "improvement").length;
    const baseElements = /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("div", {
      className: "audit-group__diff-badge-group"
    }, /* @__PURE__ */ y(IconForAuditItems, {
      audit: props.audit,
      groupId
    }), /* @__PURE__ */ y("div", {
      className: "audit-group__diff-badges"
    }, /* @__PURE__ */ y("span", {
      className: "audit-group__diff-badge"
    }, baseAuditItems.length))), /* @__PURE__ */ y("i", {
      className: `material-icons audit-group__diff-arrow audit-group__diff-arrow--${improvementCount > regressionCount ? "improvement" : "regression"}`
    }, "arrow_forward"));
    return /* @__PURE__ */ y(k, null, props.showAsNarrow ? /* @__PURE__ */ y(k, null) : baseElements, /* @__PURE__ */ y("div", {
      className: clsx_m_default(`audit-group__diff-badge-group`)
    }, /* @__PURE__ */ y(IconForAuditItems, {
      audit: props.audit,
      groupId
    }), /* @__PURE__ */ y("div", {
      className: clsx_m_default("audit-group__diff-badges", {
        "audit-group__diff-badge-group--multiple": Boolean(regressionCount && improvementCount)
      })
    }, regressionCount ? /* @__PURE__ */ y("span", {
      className: "audit-group__diff-badge audit-group__diff-badge--regression"
    }, regressionCount) : null, improvementCount ? /* @__PURE__ */ y("span", {
      className: "audit-group__diff-badge audit-group__diff-badge--improvement"
    }, improvementCount) : null)));
  };
  var NoBaseAudit = () => /* @__PURE__ */ y("div", {
    className: "audit-group__error-message",
    "data-tooltip": "Audit did not run in the base report"
  }, /* @__PURE__ */ y("i", {
    className: "material-icons"
  }, "error_outline"), " Audit Missing");
  var ErrorDiff = (props) => {
    let message = "An unknown error occurred while trying to compare the audit results.";
    if (props.audit.scoreDisplayMode === "error") {
      message = `Audit in compare report errored: ${props.audit.errorMessage}`;
    } else if (props.baseAudit.scoreDisplayMode === "error") {
      message = `Audit in base report errored: ${props.baseAudit.errorMessage}`;
    }
    return /* @__PURE__ */ y("div", {
      className: "audit-group__error-message",
      "data-tooltip": message
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "error_outline"), " Audit Error");
  };
  var AuditDiff = (props) => {
    const { audit, baseAudit, diffs, group } = props.pair;
    const noDiffAvailable = /* @__PURE__ */ y("span", null, "No diff available");
    if (!baseAudit)
      return /* @__PURE__ */ y(NoBaseAudit, null);
    const errorDiff = diffs.find((diff) => diff.type === "error");
    if (errorDiff)
      return /* @__PURE__ */ y(ErrorDiff, {
        audit,
        baseAudit
      });
    const numericDiff = diffs.find((diff) => diff.type === "numericValue");
    if (numericDiff && numericDiff.type === "numericValue") {
      return /* @__PURE__ */ y(NumericDiff, {
        diff: numericDiff,
        audit,
        groupId: group.id,
        showAsBigPicture: props.showAsBigPicture,
        showAsNarrow: props.showAsNarrow
      });
    }
    const hasItemDiff = diffs.some(
      (diff) => diff.type === "itemAddition" || diff.type === "itemRemoval" || diff.type === "itemDelta"
    );
    if (hasItemDiff) {
      return /* @__PURE__ */ y(ItemDiff, {
        diffs,
        audit,
        baseAudit,
        groupId: group.id,
        showAsNarrow: props.showAsNarrow
      });
    }
    const scoreDiff = diffs.find((diff) => diff.type === "score");
    if (scoreDiff)
      return /* @__PURE__ */ y(ScoreDiff, {
        diff: scoreDiff,
        audit,
        baseAudit
      });
    const displayValueDiff = diffs.find((diff) => diff.type === "displayValue");
    if (!displayValueDiff || displayValueDiff.type !== "displayValue")
      return noDiffAvailable;
    return /* @__PURE__ */ y(DisplayValueDiff, {
      diff: displayValueDiff,
      audit,
      baseAudit
    });
  };

  // ../server/src/ui/routes/build-view/audit-detail/audit-detail.jsx
  var import_audit_diff_finder5 = __toESM(require_audit_diff_finder());
  var ScoreOnlyDetails = (props) => {
    const { audit, baseAudit } = props.pair;
    if (!baseAudit)
      return null;
    return /* @__PURE__ */ y("div", {
      className: "audit-detail-pane__audit-details--binary"
    }, /* @__PURE__ */ y(ScoreWord, {
      audit: baseAudit
    }), /* @__PURE__ */ y("i", {
      className: `material-icons audit-group__diff-arrow audit-group__diff-arrow--${(0, import_audit_diff_finder5.getDiffLabel)(
        props.diff
      )}`
    }, "arrow_forward"), /* @__PURE__ */ y(ScoreWord, {
      audit
    }));
  };
  var ErrorDetails = (props) => {
    const erroredAudit = props.pair.audit.scoreDisplayMode === "error" ? props.pair.audit : props.pair.baseAudit;
    if (!erroredAudit)
      return null;
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("div", {
      className: "audit-detail-pane__audit-details-summary"
    }, "Error occurred in the", " ", erroredAudit === props.pair.baseAudit ? "base report:" : "compare report:"), /* @__PURE__ */ y("pre", null, erroredAudit.errorMessage || "Unknown error"));
  };
  var Details = (props) => {
    const { pair } = props;
    const details = pair.audit.details || { type: "unknown" };
    const baseDetails = pair.baseAudit && pair.baseAudit.details || { type: "unknown" };
    const hasItems = Boolean((details.items || []).length || (baseDetails.items || []).length);
    let itemDiff = void 0;
    let tableDetails = void 0;
    let numericDetails = void 0;
    if (pair.audit.errorMessage || pair.baseAudit && pair.baseAudit.errorMessage) {
      return /* @__PURE__ */ y(ErrorDetails, {
        pair
      });
    }
    if ((details.type === "table" || details.type === "opportunity") && hasItems) {
      tableDetails = /* @__PURE__ */ y(TableDetails, {
        pair
      });
      if (pair.baseAudit) {
        itemDiff = /* @__PURE__ */ y(ItemDiff, __spreadProps(__spreadValues({}, pair), {
          baseAudit: pair.baseAudit,
          groupId: pair.group.id
        }));
      }
    }
    const numericDiff = pair.diffs.find((diff) => diff.type === "numericValue");
    if (numericDiff && numericDiff.type === "numericValue") {
      numericDetails = /* @__PURE__ */ y(NumericDiff, {
        diff: numericDiff,
        audit: pair.audit
      });
    }
    if (tableDetails || numericDiff) {
      return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("div", {
        className: "audit-detail-pane__audit-details-summary"
      }, numericDetails || itemDiff), tableDetails);
    }
    const scoreDiff = pair.diffs.find((diff) => diff.type === "score");
    if (scoreDiff && scoreDiff.type === "score")
      return /* @__PURE__ */ y(ScoreOnlyDetails, {
        diff: scoreDiff,
        pair: props.pair
      });
    return /* @__PURE__ */ y("pre", null, JSON.stringify(props.pair, null, 2));
  };
  var AuditDetail = (props) => {
    const { audit } = props.pair;
    return /* @__PURE__ */ y("div", {
      id: `audit-detail-pane-audit--${audit.id}`,
      className: clsx_m_default("audit-detail-pane__audit")
    }, /* @__PURE__ */ y("div", {
      className: "audit-detail-pane__score"
    }, /* @__PURE__ */ y(ScoreIcon, {
      score: audit.score || 0
    })), /* @__PURE__ */ y("div", {
      className: "audit-detail-pane__audit-title"
    }, audit.title), /* @__PURE__ */ y("div", {
      className: "audit-detail-pane__audit-description"
    }, /* @__PURE__ */ y(Markdown, {
      text: audit.description || ""
    })), /* @__PURE__ */ y("div", {
      className: "audit-detail-pane__audit-details"
    }, /* @__PURE__ */ y(Details, {
      pair: props.pair
    })));
  };

  // ../server/src/ui/routes/build-view/audit-detail/audit-detail-pane.jsx
  var AuditDetailPane = (props) => {
    const paneElementRef = _(void 0);
    const previouslySelectedAuditId = usePreviousValue(props.selectedAuditId);
    p2(() => {
      const auditId = props.selectedAuditId;
      const paneElement = paneElementRef.current;
      if (!paneElement || !auditId || auditId === previouslySelectedAuditId)
        return;
      const childElement = paneElement.querySelector(`#audit-detail-pane-audit--${auditId}`);
      if (!childElement || !(childElement instanceof HTMLElement))
        return;
      paneElement.scrollTo(0, childElement.offsetTop);
    }, [props.selectedAuditId, previouslySelectedAuditId]);
    return /* @__PURE__ */ y("div", {
      className: "audit-detail-pane",
      ref: (el) => paneElementRef.current = el
    }, /* @__PURE__ */ y("div", {
      className: "audit-detail-pane__close",
      onClick: () => props.setSelectedAuditId(null)
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "close")), props.pairs.map((pair) => {
      const { audit } = pair;
      if (!audit.id)
        return void 0;
      return /* @__PURE__ */ y(AuditDetail, {
        key: audit.id,
        pair
      });
    }));
  };

  // ../server/src/ui/components/gauge.jsx
  var import_audit_diff_finder6 = __toESM(require_audit_diff_finder());
  var Gauge = (props) => {
    const score = Math.round(props.score * 100);
    const rawBaseScore = props.diff ? props.diff.baseValue : props.score;
    const baseScore = Math.round(rawBaseScore * 100);
    const label = props.diff ? (0, import_audit_diff_finder6.getDiffLabel)(props.diff) : "neutral";
    const baseDasharrayScore = Math.max(0, props.score * 352 - 2);
    const baseStrokeDasharray = `${baseDasharrayScore} 352`;
    const delta = Math.abs(baseScore - score);
    const deltaDasharrayScore = Math.max(0, delta / 100 * 352 - 2);
    const deltaStrokeDasharray = `${deltaDasharrayScore} 352`;
    const deltaTransform = `rotate(${Math.min(score, baseScore) / 100 * 360}deg)`;
    const indicatorTransform = `rotate(${props.score * 360}deg)`;
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default("gauge", `gauge--${label}`)
    }, /* @__PURE__ */ y("div", {
      className: "gauge-arc"
    }, /* @__PURE__ */ y("svg", {
      viewBox: "0 0 120 120"
    }, /* @__PURE__ */ y("circle", {
      className: "gauge-arc__arc",
      transform: "rotate(-90 60 60)",
      r: "56",
      cx: "60",
      cy: "60",
      style: { strokeDasharray: baseStrokeDasharray }
    })), /* @__PURE__ */ y("div", {
      className: "gauge-arc__delta-wrapper",
      style: { transform: deltaTransform, display: deltaDasharrayScore < 1 ? "none" : "block" }
    }, /* @__PURE__ */ y("svg", {
      viewBox: "0 0 120 120"
    }, /* @__PURE__ */ y("circle", {
      className: "gauge-arc__arc",
      transform: "rotate(-90 60 60)",
      r: "56",
      cx: "60",
      cy: "60",
      style: { strokeDasharray: deltaStrokeDasharray }
    }))), /* @__PURE__ */ y("div", {
      className: "gauge-arc__indicator-wrapper",
      style: { transform: indicatorTransform }
    }, /* @__PURE__ */ y("div", {
      className: "gauge-arc__indicator"
    }))), /* @__PURE__ */ y("span", null, score));
  };

  // ../server/src/ui/components/pwa-gauge.jsx
  var _3 = __toESM(require_lodash());
  var FastReliableIcon = (props) => {
    return /* @__PURE__ */ y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      class: `pwa-icon pwa-icon--${props.deltaType}`
    }, /* @__PURE__ */ y("g", {
      "fill-rule": "nonzero",
      fill: "none"
    }, /* @__PURE__ */ y("circle", {
      class: `pwa-icon__background`,
      cx: "12",
      cy: "12",
      r: "12"
    }), /* @__PURE__ */ y("path", {
      d: "M12 4.3l6.3 2.8v4.2c0 3.88-2.69 7.52-6.3 8.4-3.61-.88-6.3-4.51-6.3-8.4V7.1L12 4.3zm-.56 12.88l3.3-5.79.04-.08c.05-.1.01-.29-.26-.29h-1.96l.56-3.92h-.56L9.3 12.82c0 .03.07-.12-.03.07-.11.2-.12.37.2.37h1.97l-.56 3.92h.56z",
      fill: "#FFF"
    })));
  };
  var InstallableIcon = (props) => {
    return /* @__PURE__ */ y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      class: `pwa-icon pwa-icon--${props.deltaType}`
    }, /* @__PURE__ */ y("g", {
      "fill-rule": "nonzero",
      fill: "none"
    }, /* @__PURE__ */ y("circle", {
      class: `pwa-icon__background`,
      cx: "12",
      cy: "12",
      r: "12"
    }), /* @__PURE__ */ y("path", {
      d: "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z",
      fill: "#FFF"
    })));
  };
  var OptimizedIcon = (props) => {
    return /* @__PURE__ */ y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      class: `pwa-icon pwa-icon--${props.deltaType}`
    }, /* @__PURE__ */ y("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, /* @__PURE__ */ y("rect", {
      class: `pwa-icon__background`,
      width: "24",
      height: "24",
      rx: "12"
    }), /* @__PURE__ */ y("path", {
      d: "M5 5h14v14H5z"
    }), /* @__PURE__ */ y("path", {
      fill: "#FFF",
      d: "M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"
    })));
  };
  function getBadgeDiffType(base, compare, key) {
    if (base[key] === compare[key])
      return "neutral";
    if (compare[key])
      return "improvement";
    return "regression";
  }
  function getBadgeStatus(lhr) {
    const pwaCategory = lhr.categories.pwa;
    const auditsByCategory = _3.groupIntoMap(pwaCategory.auditRefs, (ref) => ref.group);
    const hasEveryPass = (refs = []) => refs.map((ref) => lhr.audits[ref.id]).every((audit) => audit && audit.score === 1);
    return {
      optimized: hasEveryPass(auditsByCategory.get("pwa-optimized") || []),
      installable: hasEveryPass(auditsByCategory.get("pwa-installable") || []),
      fastAndReliable: hasEveryPass(auditsByCategory.get("pwa-fast-reliable") || [])
    };
  }
  var PWAGauge = (props) => {
    const { status } = props;
    const all = status.optimized && status.installable && status.fastAndReliable;
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default("pwa-gauge", {
        "pwa-gauge--all": all,
        "pwa-gauge--pwa-optimized": !all && status.optimized,
        "pwa-gauge--pwa-installable": !all && status.installable,
        "pwa-gauge--pwa-fast-reliable": !all && status.fastAndReliable
      })
    }, /* @__PURE__ */ y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 60 60"
    }, /* @__PURE__ */ y("defs", null, /* @__PURE__ */ y("linearGradient", {
      id: "pwa-gauge__check-circle__gradient",
      x1: "50%",
      y1: "0%",
      x2: "50%",
      y2: "100%"
    }, /* @__PURE__ */ y("stop", {
      "stop-color": "#00C852",
      offset: "0%"
    }), /* @__PURE__ */ y("stop", {
      "stop-color": "#009688",
      offset: "100%"
    })), /* @__PURE__ */ y("linearGradient", {
      id: "pwa-gauge__installable__shadow-gradient",
      x1: "76.056%",
      x2: "24.111%",
      y1: "82.995%",
      y2: "24.735%"
    }, /* @__PURE__ */ y("stop", {
      "stop-color": "#A5D6A7",
      offset: "0%"
    }), /* @__PURE__ */ y("stop", {
      "stop-color": "#80CBC4",
      offset: "100%"
    })), /* @__PURE__ */ y("linearGradient", {
      id: "pwa-gauge__fast-reliable__shadow-gradient",
      x1: "76.056%",
      y1: "82.995%",
      x2: "25.678%",
      y2: "26.493%"
    }, /* @__PURE__ */ y("stop", {
      "stop-color": "#64B5F6",
      offset: "0%"
    }), /* @__PURE__ */ y("stop", {
      "stop-color": "#2979FF",
      offset: "100%"
    })), /* @__PURE__ */ y("g", {
      id: "pwa-gauge__fast-reliable-badge"
    }, /* @__PURE__ */ y("circle", {
      fill: "#FFFFFF",
      cx: "10",
      cy: "10",
      r: "10"
    }), /* @__PURE__ */ y("path", {
      fill: "#304FFE",
      d: "M10 3.58l5.25 2.34v3.5c0 3.23-2.24 6.26-5.25 7-3.01-.74-5.25-3.77-5.25-7v-3.5L10 3.58zm-.47 10.74l2.76-4.83.03-.07c.04-.08 0-.24-.22-.24h-1.64l.47-3.26h-.47l-2.7 4.77c-.02.01.05-.1-.04.05-.09.16-.1.31.18.31h1.63l-.47 3.27h.47z"
    })), /* @__PURE__ */ y("g", {
      id: "pwa-gauge__installable-badge"
    }, /* @__PURE__ */ y("circle", {
      fill: "#FFFFFF",
      cx: "10",
      cy: "10",
      r: "10"
    }), /* @__PURE__ */ y("path", {
      fill: "#009688",
      d: "M10 4.167A5.835 5.835 0 0 0 4.167 10 5.835 5.835 0 0 0 10 15.833 5.835 5.835 0 0 0 15.833 10 5.835 5.835 0 0 0 10 4.167zm2.917 6.416h-2.334v2.334H9.417v-2.334H7.083V9.417h2.334V7.083h1.166v2.334h2.334v1.166z"
    }))), /* @__PURE__ */ y("g", {
      stroke: "none",
      "fill-rule": "nonzero"
    }, /* @__PURE__ */ y("circle", {
      class: "pwa-gauge__disc",
      cx: "30",
      cy: "30",
      r: "30"
    }), /* @__PURE__ */ y("g", {
      class: "pwa-gauge__logo"
    }, /* @__PURE__ */ y("path", {
      class: "pwa-gauge__logo--secondary-color",
      d: "M35.66 19.39l.7-1.75h2L37.4 15 38.6 12l3.4 9h-2.51l-.58-1.61z"
    }), /* @__PURE__ */ y("path", {
      class: "pwa-gauge__logo--primary-color",
      d: "M33.52 21l3.65-9h-2.42l-2.5 5.82L30.5 12h-1.86l-1.9 5.82-1.35-2.65-1.21 3.72L25.4 21h2.38l1.72-5.2 1.64 5.2z"
    }), /* @__PURE__ */ y("path", {
      class: "pwa-gauge__logo--secondary-color",
      "fill-rule": "nonzero",
      d: "M20.3 17.91h1.48c.45 0 .85-.05 1.2-.15l.39-1.18 1.07-3.3a2.64 2.64 0 0 0-.28-.37c-.55-.6-1.36-.91-2.42-.91H18v9h2.3V17.9zm1.96-3.84c.22.22.33.5.33.87 0 .36-.1.65-.29.87-.2.23-.59.35-1.15.35h-.86v-2.41h.87c.52 0 .89.1 1.1.32z"
    })), /* @__PURE__ */ y("rect", {
      class: "pwa-gauge__component pwa-gauge__na-line",
      fill: "#FFFFFF",
      x: "20",
      y: "32",
      width: "20",
      height: "4",
      rx: "2"
    }), /* @__PURE__ */ y("g", {
      class: "pwa-gauge__component pwa-gauge__fast-reliable-badge",
      transform: "translate(20, 29)"
    }, /* @__PURE__ */ y("path", {
      fill: "url(#pwa-gauge__fast-reliable__shadow-gradient)",
      d: "M33.63 19.49A30 30 0 0 1 16.2 30.36L3 17.14 17.14 3l16.49 16.49z"
    }), /* @__PURE__ */ y("use", {
      href: "#pwa-gauge__fast-reliable-badge"
    })), /* @__PURE__ */ y("g", {
      class: "pwa-gauge__component pwa-gauge__installable-badge",
      transform: "translate(20, 29)"
    }, /* @__PURE__ */ y("path", {
      fill: "url(#pwa-gauge__installable__shadow-gradient)",
      d: "M33.629 19.487c-4.272 5.453-10.391 9.39-17.415 10.869L3 17.142 17.142 3 33.63 19.487z"
    }), /* @__PURE__ */ y("use", {
      href: "#pwa-gauge__installable-badge"
    })), /* @__PURE__ */ y("g", {
      class: "pwa-gauge__component pwa-gauge__fast-reliable-installable-badges"
    }, /* @__PURE__ */ y("g", {
      transform: "translate(8, 29)"
    }, /* @__PURE__ */ y("path", {
      fill: "url(#pwa-gauge__fast-reliable__shadow-gradient)",
      d: "M16.321 30.463L3 17.143 17.142 3l22.365 22.365A29.864 29.864 0 0 1 22 31c-1.942 0-3.84-.184-5.679-.537z"
    }), /* @__PURE__ */ y("use", {
      href: "#pwa-gauge__fast-reliable-badge"
    })), /* @__PURE__ */ y("g", {
      transform: "translate(32, 29)"
    }, /* @__PURE__ */ y("path", {
      fill: "url(#pwa-gauge__installable__shadow-gradient)",
      d: "M25.982 11.84a30.107 30.107 0 0 1-13.08 15.203L3 17.143 17.142 3l8.84 8.84z"
    }), /* @__PURE__ */ y("use", {
      href: "#pwa-gauge__installable-badge"
    }))), /* @__PURE__ */ y("g", {
      class: "pwa-gauge__component pwa-gauge__check-circle",
      transform: "translate(18, 28)"
    }, /* @__PURE__ */ y("circle", {
      fill: "#FFFFFF",
      cx: "12",
      cy: "12",
      r: "12"
    }), /* @__PURE__ */ y("path", {
      fill: "url(#pwa-gauge__check-circle__gradient)",
      d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    })))));
  };

  // ../server/src/ui/components/score-delta-badge.jsx
  var import_audit_diff_finder7 = __toESM(require_audit_diff_finder());
  var ScoreDeltaBadge = (props) => {
    const delta = Math.round((props.diff.compareValue - props.diff.baseValue) * 100);
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default(
        "score-delta-badge",
        `score-delta-badge--${(0, import_audit_diff_finder7.getDiffLabel)(props.diff)}`,
        props.className
      )
    }, delta < 0 ? delta : `+${delta}`);
  };

  // ../server/src/ui/routes/build-view/lhr-comparison-scores.jsx
  var StandardScoreItem = (props) => {
    const { lhr, baseLhr, categoryId } = props;
    const category = lhr.categories[categoryId];
    const baseCategory = baseLhr && baseLhr.categories[categoryId];
    const diff = baseCategory && {
      auditId: "",
      type: "score",
      baseValue: baseCategory.score,
      compareValue: category.score
    };
    return /* @__PURE__ */ y("div", {
      key: categoryId,
      className: clsx_m_default("lhr-comparison-scores-item")
    }, /* @__PURE__ */ y(Gauge, {
      score: category.score,
      diff
    }), /* @__PURE__ */ y("div", {
      className: "lhr-comparison-scores-item__label"
    }, category.title), diff ? /* @__PURE__ */ y(ScoreDeltaBadge, {
      diff,
      className: "lhr-comparison-scores-item__delta"
    }) : null);
  };
  var PwaScoreItem = (props) => {
    const { lhr, baseLhr, categoryId } = props;
    const compareStatus = getBadgeStatus(lhr);
    let deltaEl;
    const overallStatus = "neutral";
    if (baseLhr) {
      const baseStatus = getBadgeStatus(baseLhr);
      const diffTypes = {
        fastAndReliable: getBadgeDiffType(baseStatus, compareStatus, "fastAndReliable"),
        installable: getBadgeDiffType(baseStatus, compareStatus, "installable"),
        optimized: getBadgeDiffType(baseStatus, compareStatus, "optimized")
      };
      const allEqual = Object.values(diffTypes).every((type) => type === "neutral");
      const individualBadges = /* @__PURE__ */ y(k, null, diffTypes.fastAndReliable === "neutral" ? /* @__PURE__ */ y(k, null) : /* @__PURE__ */ y(FastReliableIcon, {
        deltaType: diffTypes.fastAndReliable
      }), diffTypes.installable === "neutral" ? /* @__PURE__ */ y(k, null) : /* @__PURE__ */ y(InstallableIcon, {
        deltaType: diffTypes.installable
      }), diffTypes.optimized === "neutral" ? /* @__PURE__ */ y(k, null) : /* @__PURE__ */ y(OptimizedIcon, {
        deltaType: diffTypes.optimized
      }));
      deltaEl = /* @__PURE__ */ y("div", {
        className: clsx_m_default("lhr-comparison-scores-item__delta")
      }, allEqual ? "-" : individualBadges);
    }
    return /* @__PURE__ */ y("div", {
      key: categoryId,
      className: clsx_m_default(
        "lhr-comparison-scores-item",
        `lhr-comparison-scores-item--pwa`,
        `lhr-comparison-scores-item--${overallStatus}`
      )
    }, /* @__PURE__ */ y(PWAGauge, {
      status: compareStatus
    }), /* @__PURE__ */ y("div", {
      className: "lhr-comparison-scores-item__label"
    }, "PWA"), deltaEl);
  };
  var LhrComparisonScores = (props) => {
    const { lhr, baseLhr } = props;
    if (!lhr)
      return null;
    const compareCategoryIds = Object.keys(lhr.categories);
    const baseCategoryIds = baseLhr ? Object.keys(baseLhr.categories) : compareCategoryIds;
    const categoryIds = compareCategoryIds.filter((id) => baseCategoryIds.includes(id));
    return /* @__PURE__ */ y("div", {
      className: "lhr-comparison-scores"
    }, categoryIds.sort((idA, idB) => {
      const sortKeyA = idA === "pwa" ? Infinity : categoryIds.indexOf(idA);
      const sortKeyB = idB === "pwa" ? Infinity : categoryIds.indexOf(idB);
      return sortKeyA - sortKeyB;
    }).map((id) => {
      return id === "pwa" ? /* @__PURE__ */ y(PwaScoreItem, {
        lhr,
        baseLhr,
        categoryId: id
      }) : /* @__PURE__ */ y(StandardScoreItem, {
        lhr,
        baseLhr,
        categoryId: id
      });
    }));
  };

  // ../server/src/ui/routes/build-view/audit-list/audit-group.jsx
  var MetricsTabHeader = (props) => {
    return /* @__PURE__ */ y("div", {
      className: "audit-group__big-picture-tabs"
    }, /* @__PURE__ */ y("span", {
      className: clsx_m_default("big-picture-tabs__tab", {
        "big-picture-tabs__tab--selected": props.showAsBigPicture
      }),
      onClick: () => props.setShowAsBigPicture(true)
    }, "Overview"), /* @__PURE__ */ y("span", {
      className: clsx_m_default("big-picture-tabs__tab", {
        "big-picture-tabs__tab--selected": !props.showAsBigPicture
      }),
      onClick: () => props.setShowAsBigPicture(false)
    }, "Magnified"));
  };
  var ChangedAuditList = (props) => {
    return /* @__PURE__ */ y(k, null, props.pairs.map((pair) => {
      const { audit } = pair;
      if (props.group.id !== "metrics") {
        pair = __spreadProps(__spreadValues({}, pair), { diffs: pair.diffs.filter((diff) => diff.type !== "numericValue") });
      }
      return /* @__PURE__ */ y("div", {
        key: audit.id,
        className: clsx_m_default("audit-group__audit"),
        onClick: () => props.setSelectedAuditId(audit.id || null)
      }, /* @__PURE__ */ y("div", {
        className: "audit-group__audit-score"
      }, /* @__PURE__ */ y(ScoreIcon, {
        score: audit.score || 0
      })), /* @__PURE__ */ y("div", {
        className: "audit-group__audit-title"
      }, audit.title), /* @__PURE__ */ y("div", {
        className: "audit-group__audit-diff"
      }, /* @__PURE__ */ y(AuditDiff, {
        pair,
        showAsBigPicture: props.showAsBigPicture,
        showAsNarrow: props.showAsNarrow
      })));
    }));
  };
  var UnchangedAuditList = (props) => {
    const baseLhr = props.baseLhr;
    if (!baseLhr || !props.expanded)
      return /* @__PURE__ */ y(k, null);
    return /* @__PURE__ */ y(k, null, props.pairs.map((pair) => {
      const { audit } = pair;
      return /* @__PURE__ */ y("div", {
        key: audit.id,
        className: clsx_m_default("audit-group__audit", "audit-group__audit--unchanged"),
        onClick: (e3) => {
          e3.preventDefault();
          e3.stopPropagation();
          openLhrInClassicViewer(baseLhr);
        }
      }, /* @__PURE__ */ y("div", {
        className: "audit-group__audit-score"
      }, /* @__PURE__ */ y(ScoreIcon, {
        score: audit.score || 0
      })), /* @__PURE__ */ y("div", {
        className: "audit-group__audit-title"
      }, audit.title), /* @__PURE__ */ y("div", {
        className: "audit-group__audit-diff"
      }, "Open Report"));
    }));
  };
  var AuditGroup = (props) => {
    const { group } = props;
    const [showAsBigPicture, setShowAsBigPicture] = h2(group.id === "metrics");
    const [expanded, setExpanded] = h2(false);
    return /* @__PURE__ */ y(Paper, {
      className: clsx_m_default("audit-group", {
        "audit-group--expanded": expanded,
        "audit-group--unchanged": props.showAsUnchanged
      })
    }, /* @__PURE__ */ y("div", {
      className: "audit-group__header",
      onClick: () => setExpanded(!expanded)
    }, /* @__PURE__ */ y("div", {
      className: "audit-group__title"
    }, group.title, " ", props.showAsUnchanged ? `(${props.pairs.length})` : ""), /* @__PURE__ */ y("div", {
      className: "audit-group__expand-toggle"
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "chevron_right")), group.id === "metrics" && !props.showAsNarrow ? /* @__PURE__ */ y(MetricsTabHeader, __spreadProps(__spreadValues({}, props), {
      showAsBigPicture,
      setShowAsBigPicture
    })) : /* @__PURE__ */ y(k, null)), /* @__PURE__ */ y("div", {
      className: "audit-group__audits"
    }, props.showAsUnchanged ? /* @__PURE__ */ y(UnchangedAuditList, __spreadProps(__spreadValues({}, props), {
      expanded
    })) : /* @__PURE__ */ y(ChangedAuditList, __spreadProps(__spreadValues({}, props), {
      showAsBigPicture
    }))));
  };

  // ../server/src/ui/routes/build-view/lhr-comparison-legend.jsx
  var LhrComparisonLegend = () => {
    return /* @__PURE__ */ y("div", {
      className: "lhr-comparison-legend"
    }, /* @__PURE__ */ y(ScoreIcon, {
      score: 0
    }), /* @__PURE__ */ y("span", {
      className: "lhr-comparison-legend__label"
    }, "0-49"), /* @__PURE__ */ y(ScoreIcon, {
      score: 0.5
    }), /* @__PURE__ */ y("span", {
      className: "lhr-comparison-legend__label"
    }, "50-89"), /* @__PURE__ */ y(ScoreIcon, {
      score: 1
    }), /* @__PURE__ */ y("span", {
      className: "lhr-comparison-legend__label"
    }, "90-100"), /* @__PURE__ */ y("i", {
      className: "lhr-comparison-legend__chip lhr-comparison-legend__chip--regression"
    }), /* @__PURE__ */ y("span", {
      className: "lhr-comparison-legend__label"
    }, "Regression"), /* @__PURE__ */ y("i", {
      className: "lhr-comparison-legend__chip lhr-comparison-legend__chip--improvement"
    }), /* @__PURE__ */ y("span", {
      className: "lhr-comparison-legend__label"
    }, "Improvement"));
  };

  // ../../node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function w3(n2) {
    this.props = n2;
  }
  (w3.prototype = new b()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
    return C2(this.props, n2) || C2(this.state, t3);
  };
  var R = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
  };
  var N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var T3 = l.__e;
  l.__e = function(n2, t3, e3, r3) {
    if (n2.then) {
      for (var u3, o3 = t3; o3 = o3.__; )
        if ((u3 = o3.__c) && u3.__c)
          return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
    }
    T3(n2, t3, e3, r3);
  };
  var F3 = l.unmount;
  function I2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return I2(n3, t3, e3);
    })), n2;
  }
  function L2(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function U() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function D2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function V2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), F3 && F3(n2);
  }, (U.prototype = new b()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    null == r3.t && (r3.t = []), r3.t.push(e3);
    var u3 = D2(r3.__v), o3 = false, i3 = function() {
      o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
    };
    e3.__R = i3;
    var l3 = function() {
      if (!--r3.__u) {
        if (r3.state.__a) {
          var n3 = r3.state.__a;
          r3.__v.__k[0] = L2(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
          t4.forceUpdate();
      }
    }, c3 = true === t3.__h;
    r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
  }, U.prototype.componentWillUnmount = function() {
    this.t = [];
  }, U.prototype.render = function(n2, e3) {
    if (this.__b) {
      if (this.__v.__k) {
        var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
        this.__v.__k[0] = I2(this.__b, r3, o3.__O = o3.__P);
      }
      this.__b = null;
    }
    var i3 = e3.__a && y(k, null, n2.fallback);
    return i3 && (i3.__h = null), [y(k, null, e3.__a ? null : n2.children), i3];
  };
  var W = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  function P2(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function j3(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      D(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), D(y(P2, { context: e3.context }, n2.__v), e3.l);
  }
  function z3(n2, e3) {
    var r3 = y(j3, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  (V2.prototype = new b()).__a = function(n2) {
    var t3 = this, e3 = D2(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u3) {
      var o3 = function() {
        t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
      };
      e3 ? e3(o3) : o3();
    };
  }, V2.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t3 = C(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      W(n2, e3, t3);
    });
  };
  var B3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var H2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var Y = /[A-Z0-9]/g;
  var $2 = "undefined" != typeof document;
  var q3 = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  b.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
    Object.defineProperty(b.prototype, t3, { configurable: true, get: function() {
      return this["UNSAFE_" + t3];
    }, set: function(n2) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
    } });
  });
  var K = l.event;
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
  };
  var tn;
  var en = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var rn = l.vnode;
  l.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t3 = n3.props, e3 = n3.type, u3 = {};
      for (var o3 in t3) {
        var i3 = t3[o3];
        if (!("value" === o3 && "defaultValue" in t3 && null == i3 || $2 && "children" === o3 && "noscript" === e3 || "class" === o3 || "className" === o3)) {
          var l3 = o3.toLowerCase();
          "defaultValue" === o3 && "value" in t3 && null == t3.value ? o3 = "value" : "download" === o3 && true === i3 ? i3 = "" : "ondoubleclick" === l3 ? o3 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || q3(t3.type) ? "onfocus" === l3 ? o3 = "onfocusin" : "onblur" === l3 ? o3 = "onfocusout" : Z.test(o3) ? o3 = l3 : -1 === e3.indexOf("-") && H2.test(o3) ? o3 = o3.replace(Y, "-$&").toLowerCase() : null === i3 && (i3 = void 0) : l3 = o3 = "oninput", "oninput" === l3 && u3[o3 = l3] && (o3 = "oninputCapture"), u3[o3] = i3;
        }
      }
      "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = C(t3.children).forEach(function(n4) {
        n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
      })), "select" == e3 && null != u3.defaultValue && (u3.value = C(t3.children).forEach(function(n4) {
        n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
      })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", en)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
    }(n2), n2.$$typeof = B3, rn && rn(n2);
  };
  var un = l.__r;
  l.__r = function(n2) {
    un && un(n2), tn = n2.__c;
  };
  var on = l.diffed;
  l.diffed = function(n2) {
    on && on(n2);
    var t3 = n2.props, e3 = n2.__e;
    null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), tn = null;
  };

  // ../server/src/ui/components/modal.jsx
  var Modal = (props) => {
    const modalRootRef = _(
      document.getElementById("preact-modal-root") || document.createElement("div")
    );
    p2(() => {
      modalRootRef.current.id = "preact-modal-root";
      document.body.appendChild(modalRootRef.current);
      return () => document.body.removeChild(modalRootRef.current);
    }, []);
    return z3(
      /* @__PURE__ */ y("div", {
        className: "modal-backdrop"
      }, /* @__PURE__ */ y("div", {
        className: clsx_m_default("modal", props.className),
        style: { position: "relative" }
      }, props.children, /* @__PURE__ */ y("div", {
        className: "modal__close",
        onClick: props.onClose
      }, /* @__PURE__ */ y("i", {
        className: "material-icons"
      }, "close")))),
      modalRootRef.current
    );
  };

  // ../server/src/ui/routes/build-view/lhr-comparison-runtime-diff.jsx
  function getStringValueFromRawConfigSetting(value) {
    if (typeof value === "string")
      return value;
    if (typeof value === "number")
      return value.toString();
    if (typeof value === "undefined")
      return "Unset";
    if (typeof value === "boolean")
      return value ? "Enabled" : "Disabled";
    if (Array.isArray(value))
      return value.join(", ");
    return "Unknown";
  }
  function computeRuntimeDiffs(lhr, baseLhr) {
    if (!baseLhr)
      return [];
    const diffs = [];
    const { benchmarkIndex } = lhr.environment;
    const { benchmarkIndex: baseBenchmarkIndex } = baseLhr.environment;
    const benchmarkMultiplicativeDelta = Math.abs(benchmarkIndex - baseBenchmarkIndex) / Math.min(benchmarkIndex, baseBenchmarkIndex);
    if (benchmarkMultiplicativeDelta > 1.5) {
      diffs.push({
        label: "CPU/Memory Power",
        base: baseLhr.environment.benchmarkIndex.toString(),
        compare: lhr.environment.benchmarkIndex.toString(),
        severity: benchmarkMultiplicativeDelta > 2 ? "error" : "warn"
      });
    }
    const settings = lhr.configSettings;
    const baseSettings = baseLhr.configSettings;
    const throttling = settings.throttling || {};
    const baseThrottling = settings.throttling || {};
    const potentialDiffs = [
      ["Lighthouse Version", baseLhr.lighthouseVersion, lhr.lighthouseVersion],
      ["Storage Reset", baseSettings.disableStorageReset, settings.disableStorageReset],
      ["Emulated Form Factor", baseSettings.emulatedFormFactor, settings.emulatedFormFactor],
      ["Throttling Method", baseSettings.throttlingMethod, settings.throttlingMethod],
      ["CPU Throttling", baseThrottling.cpuSlowdownMultiplier, throttling.cpuSlowdownMultiplier],
      ["Network RTT", baseThrottling.rttMs, throttling.rttMs],
      ["Network Throughput", baseThrottling.throughputKbps, throttling.throughputKbps],
      ["Network RTT", baseThrottling.requestLatencyMs, throttling.requestLatencyMs],
      [
        "Network Throughput (Up)",
        baseThrottling.uploadThroughputKbps,
        throttling.uploadThroughputKbps
      ],
      [
        "Network Throughput (Down)",
        baseThrottling.downloadThroughputKbps,
        throttling.downloadThroughputKbps
      ]
    ];
    for (const [label, rawBase, rawCompare] of potentialDiffs) {
      const base = getStringValueFromRawConfigSetting(rawBase);
      const compare = getStringValueFromRawConfigSetting(rawCompare);
      if (base === compare)
        continue;
      diffs.push({ label, base, compare, severity: "error" });
    }
    return diffs;
  }
  var LhrRuntimeDiff = (props) => {
    const { diffs } = props;
    return /* @__PURE__ */ y("div", {
      className: clsx_m_default(
        "lhr-comparison-runtime-diff",
        `lhr-comparison-runtime-diff--${props.variant}`
      )
    }, /* @__PURE__ */ y("div", {
      className: "lhr-comparison__warning"
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "info"), /* @__PURE__ */ y("div", null, "Changes of runtime settings or the environment can substantially affect your Lighthouse scores and might be the reason for the differences here.")), /* @__PURE__ */ y("div", {
      className: "lhr-comparison-runtime-diff__diffs"
    }, "The following runtime differences were detected:", /* @__PURE__ */ y("table", null, /* @__PURE__ */ y("thead", null, /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null), /* @__PURE__ */ y("th", null, "Base"), /* @__PURE__ */ y("th", null, "Compare"))), /* @__PURE__ */ y("tbody", null, diffs.map((diff) => /* @__PURE__ */ y("tr", {
      key: diff.label
    }, /* @__PURE__ */ y("td", null, diff.label), /* @__PURE__ */ y("td", null, diff.base), /* @__PURE__ */ y("td", null, diff.compare)))))));
  };

  // ../server/src/ui/routes/build-view/lhr-comparison.jsx
  function useAuditPermalinkScrollOnLoad(setAuditId) {
    const wait = (ms) => new Promise((r3) => setTimeout(r3, ms));
    const waitUntilSelector = (selector) => __async(this, null, function* () {
      let attempts = 0;
      while (!document.querySelector(selector) && attempts < 10) {
        yield wait(500);
        attempts++;
      }
    });
    p2(() => {
      if (window.location.hash.length <= 1)
        return;
      Promise.resolve().then(() => __async(this, null, function* () {
        yield waitUntilSelector(".lhr-comparison__audit-groups");
        setAuditId(window.location.hash.slice(1));
      }));
    }, []);
  }
  function computeAuditGroups(lhr, baseLhr, options) {
    const auditGroups = [];
    for (const [categoryId, category] of Object.entries(lhr.categories)) {
      const categoryAsGroup = { title: category.title, description: category.description };
      const auditRefsGroupedByGroup = import_lodash.default.groupBy(category.auditRefs, (ref) => ref.group);
      const unchangedAuditsGroupId = `unchanged:${categoryId}`;
      const unchangedAuditsGroup = {
        id: unchangedAuditsGroupId,
        group: { id: unchangedAuditsGroupId, title: `Unchanged Audits - ${category.title}` },
        pairs: [],
        showAsUnchanged: true
      };
      for (const auditRefGroup of auditRefsGroupedByGroup) {
        let groupId = auditRefGroup[0].group || "";
        let groupWithoutId = lhr.categoryGroups && lhr.categoryGroups[groupId];
        if (!groupWithoutId) {
          if (auditRefsGroupedByGroup.length !== 1)
            continue;
          groupId = `category:${categoryId}`;
          groupWithoutId = categoryAsGroup;
        }
        const group = __spreadProps(__spreadValues({}, groupWithoutId), { id: groupId });
        const pairs = auditRefGroup.map((ref) => {
          const audit = __spreadProps(__spreadValues({}, lhr.audits[ref.id]), { id: ref.id });
          const baseAudit = baseLhr && baseLhr.audits[audit.id || ""];
          const diffs = baseAudit ? (0, import_audit_diff_finder8.findAuditDiffs)(baseAudit, audit, __spreadProps(__spreadValues({}, options), { synthesizeItemKeyDiffs: true })) : [];
          const maxSeverity = Math.max(...diffs.map(import_audit_diff_finder8.getDiffSeverity), 0);
          return { audit, baseAudit, diffs, maxSeverity, group };
        }).sort((a3, b3) => (a3.audit.score || 0) - (b3.audit.score || 0));
        const pairsWithDiffs = pairs.filter((pair) => !pair.baseAudit || pair.diffs.length);
        const pairsWithoutDiffs = pairs.filter((pair) => pair.baseAudit && !pair.diffs.length);
        if (pairsWithDiffs.length) {
          auditGroups.push({ id: groupId, group, pairs: pairsWithDiffs, showAsUnchanged: false });
        }
        if (pairsWithoutDiffs.length) {
          unchangedAuditsGroup.pairs.push(...pairsWithoutDiffs);
        }
      }
      if (unchangedAuditsGroup.pairs.length) {
        auditGroups.push(unchangedAuditsGroup);
      }
    }
    return auditGroups;
  }
  var LhrComparisonScoresAndUrl = (props) => {
    return /* @__PURE__ */ y("div", {
      className: "lhr-comparison__scores-and-dropdowns"
    }, /* @__PURE__ */ y("div", {
      className: "container"
    }, /* @__PURE__ */ y("div", {
      className: "lhr-comparison__dropdowns"
    }, props.hookElements.dropdowns, /* @__PURE__ */ y(Dropdown, {
      label: "Threshold",
      value: props.percentAbsoluteDeltaThreshold.toString(),
      setValue: (value) => {
        props.setPercentAbsoluteDeltaThreshold(Number(value));
      },
      options: [
        { value: "0", label: "0%" },
        { value: "0.05", label: "5%" },
        { value: "0.1", label: "10%" },
        { value: "0.15", label: "15%" },
        { value: "0.25", label: "25%" }
      ]
    })), props.selectedAuditId ? /* @__PURE__ */ y(k, null) : /* @__PURE__ */ y(LhrComparisonScores, __spreadValues({}, props))));
  };
  var AuditGroups = (props) => {
    return /* @__PURE__ */ y("div", {
      className: "lhr-comparison__audit-groups"
    }, props.auditGroups.map((auditGroup) => {
      if (!auditGroup)
        return void 0;
      return /* @__PURE__ */ y(AuditGroup, {
        key: auditGroup.id,
        showAsNarrow: props.showAsNarrow,
        showAsUnchanged: auditGroup.showAsUnchanged,
        pairs: auditGroup.pairs,
        group: auditGroup.group,
        baseLhr: props.baseLhr,
        selectedAuditId: props.selectedAuditId,
        setSelectedAuditId: props.setSelectedAuditId
      });
    }));
  };
  var LhrComparison = (props) => {
    const { lhr, baseLhr } = props;
    const defaultAck = "none";
    const [percentAbsoluteDeltaThreshold, setDiffThreshold] = h2(0.05);
    const [selectedAuditId, setAuditId] = h2(null);
    const [runtimeDiffAck, setRuntimeDiffAck] = h2(defaultAck);
    useAuditPermalinkScrollOnLoad(setAuditId);
    p2(() => {
      window.__LHR__ = lhr;
      window.__BASE_LHR__ = baseLhr;
    }, [lhr, baseLhr]);
    const runtimeDiffs = computeRuntimeDiffs(lhr, baseLhr);
    const runtimeDiffsHaveError = runtimeDiffs.some((diff) => diff.severity === "error");
    const auditGroups = computeAuditGroups(lhr, baseLhr, { percentAbsoluteDeltaThreshold });
    return /* @__PURE__ */ y(k, null, runtimeDiffAck === "none" && runtimeDiffsHaveError ? /* @__PURE__ */ y(Modal, {
      onClose: () => setRuntimeDiffAck("acknowledged")
    }, /* @__PURE__ */ y(LhrRuntimeDiff, {
      diffs: runtimeDiffs,
      variant: "full"
    })) : null, selectedAuditId ? /* @__PURE__ */ y(AuditDetailPane, {
      selectedAuditId,
      setSelectedAuditId: setAuditId,
      pairs: auditGroups.filter((group) => !group.showAsUnchanged).map((group) => group.pairs).reduce((a3, b3) => a3.concat(b3)),
      baseLhr
    }) : /* @__PURE__ */ y(k, null), /* @__PURE__ */ y("div", {
      className: clsx_m_default("lhr-comparison", props.className, {
        "lhr-comparison--with-audit-selection": !!selectedAuditId
      })
    }, /* @__PURE__ */ y(LhrComparisonScoresAndUrl, {
      lhr,
      baseLhr,
      selectedAuditId,
      hookElements: props.hookElements,
      percentAbsoluteDeltaThreshold,
      setPercentAbsoluteDeltaThreshold: setDiffThreshold
    }), /* @__PURE__ */ y("div", {
      className: "container"
    }, props.hookElements.warnings, runtimeDiffAck !== "closed" && runtimeDiffs.length ? /* @__PURE__ */ y(Paper, {
      className: "position-relative"
    }, /* @__PURE__ */ y(LhrRuntimeDiff, {
      diffs: runtimeDiffs,
      variant: "mini"
    }), /* @__PURE__ */ y("div", {
      className: "lhr-comparison-runtime-diff__close",
      onClick: () => setRuntimeDiffAck("closed")
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "close"))) : null, auditGroups.length && baseLhr ? /* @__PURE__ */ y(k, null, selectedAuditId ? null : /* @__PURE__ */ y("div", {
      className: "lhr-comparison__legend-container"
    }, /* @__PURE__ */ y(LhrComparisonLegend, null)), /* @__PURE__ */ y(AuditGroups, {
      showAsNarrow: !!selectedAuditId,
      auditGroups,
      baseLhr,
      selectedAuditId,
      setSelectedAuditId: setAuditId
    })) : props.hookElements.warnings ? null : /* @__PURE__ */ y(Paper, {
      className: "lhr-comparison__warning"
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "sentiment_satisfied_alt"), /* @__PURE__ */ y("div", null, "Woah, no differences found! Switch base builds to explore other differences, or", " ", /* @__PURE__ */ y(LhrViewerLink, {
      className: "lhr-comparison__warning__lhr-link",
      lhr: props.lhr
    }, "jump straight to the Lighthouse report."))))));
  };

  // src/ui/routes/comparison/comparison.jsx
  var ComparisonRoute = (props) => {
    const displayType = computeBestDisplayType(props.baseReport.lhr, props.compareReport.lhr);
    return /* @__PURE__ */ y("div", {
      className: "comparison"
    }, /* @__PURE__ */ y("div", {
      className: "comparison-header"
    }, /* @__PURE__ */ y("div", {
      className: "comparison-header__switcher",
      onClick: () => {
        props.setBaseReport(props.compareReport);
        props.setCompareReport(props.baseReport);
      }
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "swap_horiz")), /* @__PURE__ */ y("div", {
      className: "comparison-header__logo"
    }, /* @__PURE__ */ y("img", {
      src: LH_LOGO_PATH,
      alt: "Lighthouse Logo",
      onClick: () => {
        props.setBaseReport(void 0);
        props.setCompareReport(void 0);
      }
    })), /* @__PURE__ */ y("div", {
      className: "comparison-header__upload"
    }, /* @__PURE__ */ y(ReportUploadBox, {
      variant: "base",
      dragTarget: "self",
      report: props.baseReport,
      setReport: props.setBaseReport,
      addToast: props.addToast,
      displayType,
      showOpenLhrLink: true
    }), /* @__PURE__ */ y(ReportUploadBox, {
      variant: "compare",
      dragTarget: "self",
      report: props.compareReport,
      setReport: props.setCompareReport,
      addToast: props.addToast,
      displayType,
      showOpenLhrLink: true
    })), /* @__PURE__ */ y("a", {
      className: "comparison-header__info",
      href: "https://github.com/GoogleChrome/lighthouse-ci"
    }, /* @__PURE__ */ y("i", {
      className: "material-icons"
    }, "info"))), /* @__PURE__ */ y("div", {
      className: "comparison-body"
    }, /* @__PURE__ */ y(LhrComparison, {
      lhr: props.compareReport.lhr,
      baseLhr: props.baseReport.lhr,
      hookElements: {}
    })));
  };

  // src/ui/components/toast.jsx
  var Toast = (props) => {
    const setToasts = props.setToasts;
    const { message, level = "info" } = props.toast;
    p2(() => {
      const interval = setTimeout(
        () => setToasts((toasts) => toasts.filter((t3) => t3 !== props.toast)),
        5e3
      );
      return () => clearInterval(interval);
    }, []);
    return /* @__PURE__ */ y("div", {
      className: `toast toast--${level}`
    }, message);
  };

  // src/ui/app.jsx
  var SEARCH_PARAMS = new URLSearchParams(location.search);
  var INITIAL_BASE_URL = SEARCH_PARAMS.get("baseReport");
  var INITIAL_COMPARE_URL = SEARCH_PARAMS.get("compareReport");
  function loadReportFromURL(url, setReport) {
    return __async(this, null, function* () {
      const filename = new URL(url).pathname.split("/").slice(-1)[0] || "Unknown";
      const response = yield fetch(url);
      const data = yield response.text();
      const lhr = parseStringAsLhr(data);
      if (lhr instanceof Error)
        throw lhr;
      setReport({ filename, data, lhr });
    });
  }
  function loadInitialReports(setBaseReport, setCompareReport, setIsLoading, addToast) {
    return __async(this, null, function* () {
      if (window.location.hostname === "localhost") {
        const lastBaseReport = localStorage.getItem("lastBaseReport");
        const lastCompareReport = localStorage.getItem("lastCompareReport");
        if (lastBaseReport)
          setBaseReport(JSON.parse(lastBaseReport));
        if (lastCompareReport)
          setCompareReport(JSON.parse(lastCompareReport));
      }
      const promises = [
        INITIAL_BASE_URL && loadReportFromURL(INITIAL_BASE_URL, setBaseReport),
        INITIAL_COMPARE_URL && loadReportFromURL(INITIAL_COMPARE_URL, setCompareReport)
      ].filter((p3) => !!p3);
      if (!promises.length)
        return;
      setIsLoading(true);
      yield Promise.all(
        promises.map(
          (p3) => p3.catch((err) => {
            console.error(err);
            addToast({ message: `Failed loading report from URL: ${err.message}`, level: "error" });
          })
        )
      );
      setIsLoading(false);
    });
  }
  var App = () => {
    const initialReport = void 0;
    const [isLoading, setIsLoading] = h2(false);
    const [baseReport, setBaseReport] = h2({
      lhr: __LIGHTHOUSE_JSON_BASE__
    });
    const [compareReport, setCompareReport] = h2({
      lhr: __LIGHTHOUSE_JSON_COMPARE__
    });
    const [toasts, setToasts] = h2([]);
    const addToastUnmemoized = (toast) => setToasts((toasts2) => [...toasts2, toast]);
    const addToast = T2(addToastUnmemoized, [setToasts]);
    p2(() => {
      loadInitialReports(setBaseReport, setCompareReport, setIsLoading, addToast);
    }, []);
    p2(() => {
      try {
        if (baseReport)
          localStorage.setItem("lastBaseReport", JSON.stringify(baseReport));
        if (compareReport)
          localStorage.setItem("lastCompareReport", JSON.stringify(compareReport));
      } catch (err) {
        console.error(`Error saving to localStorage: ${err}`);
      }
    }, [baseReport, compareReport]);
    return /* @__PURE__ */ y("div", {
      className: "lhci-viewer"
    }, isLoading ? /* @__PURE__ */ y("div", {
      className: "loading-container"
    }, /* @__PURE__ */ y(LoadingSpinner, null)) : /* @__PURE__ */ y(k, null), /* @__PURE__ */ y("div", {
      className: "toast-container"
    }, toasts.map((toast) => /* @__PURE__ */ y(Toast, {
      key: toast.message,
      toast,
      setToasts
    }))), baseReport && compareReport ? /* @__PURE__ */ y(ComparisonRoute, {
      baseReport,
      setBaseReport,
      compareReport,
      setCompareReport,
      addToast
    }) : /* @__PURE__ */ y(LandingRoute, {
      baseReport,
      setBaseReport,
      compareReport,
      setCompareReport,
      addToast
    }));
  };

  // src/ui/entry.jsx
  var preactRoot = document.getElementById("preact-root");
  if (!preactRoot)
    throw new Error("Missing #preact-root");
  D(/* @__PURE__ */ y(App, null), preactRoot);
})();
/**
 * @license Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/**
 * @license Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
//# sourceMappingURL=../../webjars/vividus-lighthouse-viewer-adaptation/chunks/entry-AEMYZTEQ.js.map
