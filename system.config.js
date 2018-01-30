/* global System */

System.config({
    packages: {
        '.': { defaultExtension: 'js' }
    },
    meta: {
        '.': { format: 'esm' },
    },
    map: {
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel'
});
