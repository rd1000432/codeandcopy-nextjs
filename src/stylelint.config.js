const cssModules = [].concat(["composes"]);

const display = [].concat(["display", "visibility", "opacity", "transform"]);

const clipping = [].concat(["overflow", "overflow-x", "overflow-y", "clip", "clip-path"]);

const animation = [].concat([
    "animation",
    "animation-name",
    "animation-duration",
    "animation-timing-function",
    "animation-delay",
    "animation-iteration-count",
    "animation-direction",
    "animation-fill-mode",
    "animation-play-state",
    "transition",
    "transition-property",
    "transition-duration",
    "transition-timing-function",
    "transition-delay",
  ]);

  const background = [].concat([
    "background",
    "background-color",
    "background-image",
    "background-repeat",
    "background-attachment",
    "background-position",
    "background-size",
    "cursor",
  ]);


  const propertyGroups = [
    cssModules,
    display,
    clipping,
    animation,
    background,
  ];

  const propertiesOrder = propertyGroups.map(properties => ({
    noEmptyLineBetween: true,
    emptyLineBefore: "threshold",
    properties,
  }));

  module.exports = {
    extends: ["stylelint-config-standard-scss", "stylelint-config-css-modules"],
    plugins: ["stylelint-selector-bem-pattern", "stylelint-order"],
    rules: {
      "plugin/selector-bem-pattern": {
        componentName: /^[a-z][-a-zA-Z0-9]+$/,
        componentSelectors: bemSelector,
        ignoreSelectors: /^\.no-js$/,
      },
      "declaration-empty-line-before": [
        "always",
        {
          except: ["first-nested"],
          ignore: ["after-declaration", "after-comment", "inside-single-line-block"],
        },
      ],
      "at-rule-empty-line-before": [
        "always",
        {
          ignore: ["first-nested", "blockless-after-same-name-blockless", "after-comment"],
        },
      ],
      "order/order": ["dollar-variables", "custom-properties", "at-rules", "declarations", "rules"],
      "order/properties-order": [
        propertiesOrder,
        {
          unspecified: "bottomAlphabetical",
          emptyLineBeforeUnspecified: "always",
          emptyLineMinimumPropertyThreshold: 5,
        },
      ],
      "selector-class-pattern": null,
      "at-rule-no-unknown": null,
      "scss/at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: ["import-normalize"],
        },
      ],
      "selector-pseudo-class-no-unknown": [
        true,
        {
          ignorePseudoClasses: ["global"],
        },
      ],
      "import-notation": "string",
      "max-nesting-depth": [
        3,
        {
          ignore: ["blockless-at-rules"],
        },
      ],
      "selector-max-compound-selectors": 5,
      "media-query-no-invalid": null,
    },
  };