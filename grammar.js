/**
 * @file QSP grammar for tree-sitter
 * @author Alexey Burlakov <alexey.burlakov@elife.co.jp>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "qsp",

  word: ($) => $.identifier,

  rules: {
    source_file: ($) => repeat($.identifier),

    identifier: ($) => /[A-Za-z_][A-Za-z0-9_.]*/,
  },
});
