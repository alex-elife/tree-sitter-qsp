/**
 * @file Qsp grammar for tree-sitter
 * @author Alexey Burlakov <alexey.burlakov@elife.co.jp>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "qsp",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
