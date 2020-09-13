// https://github.com/zaydek/dot-eslintrc.js
module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: ["eslint:recommended"],
	parser: "babel-eslint",
	parserOptions: { sourceType: "module" },
	rules: {

		// enforce linebreaks after opening and before closing array brackets
		"array-bracket-newline": [1, "consistent"],

		// enforce consistent spacing inside array brackets
		"array-bracket-spacing": 1,

		// enforce line breaks after each array element
		"array-element-newline": [1, "consistent"],

		// require braces around arrow function bodies
		"arrow-body-style": 0,

		// require parentheses around arrow function arguments
		"arrow-parens": [1, "as-needed"],

		// enforce consistent spacing before and after the arrow in arrow functions
		"arrow-spacing": 1,

		// disallow or enforce spaces inside of blocks after opening block and before closing block
		"block-spacing": 0,

		// enforce consistent brace style for blocks
		"brace-style": 1,

		// enforce or disallow capitalization of the first letter of a comment
		"capitalized-comments": 0,

		// require or disallow trailing commas
		"comma-dangle": [1, { arrays: "always-multiline", objects: "always-multiline", imports: "always-multiline", exports: "always-multiline", functions: "always-multiline" }],

		// enforce consistent spacing before and after commas
		"comma-spacing": 1,

		// enforce consistent comma style
		"comma-style": 1,

		// enforce consistent spacing inside computed property brackets
		"computed-property-spacing": 1,

		// enforce consistent brace style for all control statements
		"curly": 1,

		// enforce consistent newlines before and after dots
		"dot-location": [1, "property"],

		// enforce dot notation whenever possible
		"dot-notation": 1,

		// require or disallow newline at the end of files
		"eol-last": 1,

		// require the use of `===` and `!==`
		"eqeqeq": 1,

		// require or disallow spacing between function identifiers and their invocations
		"func-call-spacing": 1,

		// enforce line breaks between arguments of a function call
		"function-call-argument-newline": [1, "consistent"],

		// enforce consistent line breaks inside function parentheses
		"function-paren-newline": 1,

		// enforce consistent spacing around `*` operators in generator functions
		"generator-star-spacing": 0,

		// enforce the location of arrow function bodies
		"implicit-arrow-linebreak": 1,

		// enforce consistent indentation
		"indent": [1, "tab"],

		// enforce the consistent use of either double or single quotes in JSX attributes
		"jsx-quotes": 1,

		// enforce consistent spacing between keys and values in object literal properties
		"key-spacing": [1, { beforeColon: false, afterColon: true, mode: "minimum" }],

		// enforce consistent spacing before and after keywords
		"keyword-spacing": 1,

		// enforce consistent linebreak style
		"linebreak-style": 1,

		// require empty lines around comments
		"lines-around-comment": 0,

		// require or disallow an empty line between class members
		"lines-between-class-members": 0,

		// enforce a particular style for multiline comments
		"multiline-comment-style": 0,

		// enforce or disallow parentheses when invoking a constructor with no arguments
		"new-parens": 1,

		// require a newline after each call in a method chain
		"newline-per-chained-call": 0,

		// disallow arrow functions where they could be confused with comparisons
		"no-confusing-arrow": 0,

		// disallow division operators explicitly at the beginning of regular expressions
		"no-div-regex": 0,

		// disallow `else` blocks after `return` statements in `if` statements
		"no-else-return": 0,

		// disallow unnecessary calls to `.bind()`
		"no-extra-bind": 0,

		// disallow unnecessary boolean casts
		"no-extra-boolean-cast": 0,

		// disallow unnecessary labels
		"no-extra-label": 0,

		// disallow unnecessary parentheses
		"no-extra-parens": 0,

		// disallow unnecessary semicolons
		"no-extra-semi": 0,

		// disallow leading or trailing decimal points in numeric literals
		"no-floating-decimal": 0,

		// disallow shorthand type conversions
		"no-implicit-coercion": 0,

		// disallow `if` statements as the only statement in `else` blocks
		"no-lonely-if": 0,

		// disallow multiple spaces
		"no-multi-spaces": [1, { ignoreEOLComments: true }],

		// disallow multiple empty lines
		"no-multiple-empty-lines": [1, { max: 1, maxEOF: 0, maxBOF: 0 }],

		// disallow multiple spaces in regular expressions
		"no-regex-spaces": 0,

		// disallow trailing whitespace at the end of lines
		"no-trailing-spaces": 1,

		// disallow initializing variables to `undefined`
		"no-undef-init": 0,

		// disallow ternary operators when simpler alternatives exist
		"no-unneeded-ternary": 0,

		// disallow unused labels
		"no-unused-labels": 0,

		// disallow unnecessary computed property keys in objects and classes
		"no-useless-computed-key": 1,

		// disallow renaming import, export, and destructured assignments to the same name
		"no-useless-rename": 1,

		// disallow redundant return statements
		"no-useless-return": 0,

		// require `let` or `const` instead of `var`
		"no-var": 1,

		// disallow whitespace before properties
		"no-whitespace-before-property": 1,

		// enforce the location of single-line statements
		"nonblock-statement-body-position": 0,

		// enforce consistent line breaks inside braces
		"object-curly-newline": [1, { consistent: true }],

		// enforce consistent spacing inside braces
		"object-curly-spacing": [1, "always"],

		// enforce placing object properties on separate lines
		"object-property-newline": [1, { allowAllPropertiesOnSameLine: true }],

		// require or disallow method and property shorthand syntax for object literals
		"object-shorthand": 1,

		// enforce variables to be declared either together or separately in functions
		"one-var": 0,

		// require or disallow newlines around variable declarations
		"one-var-declaration-per-line": 0,

		// require or disallow assignment operator shorthand where possible
		"operator-assignment": 1,

		// enforce consistent linebreak style for operators
		"operator-linebreak": 1,

		// require or disallow padding within blocks
		"padded-blocks": 0,

		// require or disallow padding lines between statements
		"padding-line-between-statements": 0,

		// require using arrow functions for callbacks
		"prefer-arrow-callback": 0,

		// require `const` declarations for variables that are never reassigned after declared
		"prefer-const": [1, { destructuring: "all" }],

		// require destructuring from arrays and/or objects
		"prefer-destructuring": 0,

		// disallow the use of `Math.pow` in favor of the `**` operator
		"prefer-exponentiation-operator": 1,

		// disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
		"prefer-numeric-literals": 1,

		// disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
		"prefer-object-spread": 1,

		// require template literals instead of string concatenation
		"prefer-template": 0,

		// require quotes around object literal property names
		"quote-props": [1, "consistent-as-needed"],

		// enforce the consistent use of either backticks, double, or single quotes
		"quotes": 1,

		// enforce spacing between rest and spread operators and their expressions
		"rest-spread-spacing": 1,

		// require or disallow semicolons instead of ASI
		"semi": [1, "never"],

		// enforce consistent spacing before and after semicolons
		"semi-spacing": 0,

		// enforce location of semicolons
		"semi-style": 0,

		// enforce sorted import declarations within modules
		"sort-imports": 0,

		// require variables within the same declaration block to be sorted
		"sort-vars": 0,

		// enforce consistent spacing before blocks
		"space-before-blocks": 1,

		// enforce consistent spacing before `function` definition opening parenthesis
		"space-before-function-paren": [1, { anonymous: "never", named: "never", asyncArrow: "always" }],

		// enforce consistent spacing inside parentheses
		"space-in-parens": 1,

		// require spacing around infix operators
		"space-infix-ops": 1,

		// enforce consistent spacing before or after unary operators
		"space-unary-ops": 1,

		// enforce consistent spacing after the `//` or `/*` in a comment
		"spaced-comment": 0,

		// require or disallow strict mode directives
		"strict": 0,

		// enforce spacing around colons of switch statements
		"switch-colon-spacing": 1,

		// require or disallow spacing around embedded expressions of template strings
		"template-curly-spacing": 1,

		// require or disallow spacing between template tags and their literals
		"template-tag-spacing": 1,

		// require or disallow Unicode byte order mark (BOM)
		"unicode-bom": 1,

		// require parentheses around immediate `function` invocations
		"wrap-iife": [1, "inside"],

		// require parenthesis around regex literals
		"wrap-regex": 0,

		// require or disallow spacing around the `*` in `yield*` expressions
		"yield-star-spacing": 0,

		// require or disallow "Yoda" conditions
		"yoda": 1,

	},
}
