const esModules = ['@org/somelibrary1', '@org/somelibrary2'].join('|');

module.exports = {
    transform: {
        '^.+\\.(m?js|ts)$': 'babel-jest', // transpile mjs, mts, js, ts files
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};