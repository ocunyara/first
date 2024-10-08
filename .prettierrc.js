const baseConfig = require('@overdose/config/src/prettier-config')

const config = {
    ...baseConfig,
    useTabs: false,
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'es5',
    jsxBracketSameLine: true,
    semi: false,
    jsxSingleQuote: true,
}

module.exports = config
