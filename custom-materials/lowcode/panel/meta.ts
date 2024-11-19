import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PanelMeta: IPublicTypeComponentMetadata = {
  componentName: 'Panel',
  title: '卡片',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  category: '数据展示',
  npm: {
    package: 'custom-materials',
    version: '0.1.0',
    exportName: 'Panel',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '标题',
          },
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content',
          },
        },
        name: 'content',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Panel',
    screenshot: '',
    schema: {
      componentName: 'Panel',
      props: {},
    },
  },
];

export default {
  ...PanelMeta,
  snippets,
};
