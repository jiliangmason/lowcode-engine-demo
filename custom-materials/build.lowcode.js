const { library } = require('./build.json');
const { version, name } = require('./package.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        // noParse: true,
        // renderUrls: [
        //   `https://alifd.alicdn.com/npm/${name}@${version}/dist/${library}.js`,
        //   `https://alifd.alicdn.com/npm/${name}@${version}/dist/${library}.css`,
        // ],
        // baseUrl: {
        //   prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
        //   daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        // },
        noParse: true,
        library,
        engineScope: "@alilc",
        // lowcodeDir: 'lowcode',
        // entryPath: 'src/index.tsx',
        // staticResources: {
        //   engineCoreCssUrl:
        //     'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.2.1/dist/css/engine-core.css',
        //   engineExtCssUrl:
        //     'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6/dist/css/engine-ext.css',
        //   engineCoreJsUrl:
        //     'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.2.1/dist/js/engine-core.js',
        //   engineExtJsUrl:
        //     'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6/dist/js/engine-ext.js',
        // },
        // npmInfo: {
        //   package: name,
        //   version,
        // },
        // baseUrl: {
        //   prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
        //   daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        // },
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              {
                package: 'antd',
                version: '4.23.0',
                urls: [
                  `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.js`,
                  `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.css`,
                ],
                library: 'antd',
              },
              {
                "package": "bizcharts",
                "version": "4.1.11",
                "urls": ["https://g.alicdn.com/code/lib/bizcharts/4.1.11/BizCharts.min.js"],
                "library": "BizCharts"
              }
            ],
            components: [],
          },
        ],
      },
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/index.html
        openUrl: 'https://lowcode-engine.cn/demo/index.html?debug',
      },
    ],
    // [
    //   'build-plugin-fusion',
    //   {
    //     uniteBaseComponent: '@alifd/next',
    //     cssVariable: true,
    //     importOptions: {
    //       libraryDirectory: 'lib',
    //     },
    //   },
    // ],
  ],
};
