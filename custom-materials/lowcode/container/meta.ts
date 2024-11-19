import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ContainerMeta: IPublicTypeComponentMetadata = {
  componentName: 'Container',
  title: '容器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'custom-materials',
    version: '0.1.0',
    exportName: 'Container',
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
          isRequired: false,
          initialValue: '',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        // 允许拖入的组件白名单
        // childWhitelist: ['ColorfulButton', 'Button'],
        // 同理也可以设置该组件允许被拖入哪些父组件里
        // parentWhitelist: ['Tab'],
      },
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Container',
    screenshot: '',
    schema: {
      componentName: 'Container',
      props: {},
    },
  },
];

export default {
  ...ContainerMeta,
  snippets,
};
