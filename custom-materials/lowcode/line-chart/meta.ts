import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { actionConfigure } from '../common/chart-actions';
import { plotConfigure } from '../common/chart-plot';

const LineChartMeta: IPublicTypeComponentMetadata = {
  componentName: 'LineChart',
  title: '折线图',
  docUrl: '',
  screenshot: '',
  category: '数据展示',
  devMode: 'proCode',
  npm: {
    package: 'custom-materials',
    version: '0.1.0',
    exportName: 'LineChart',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      // 数据
      {
        name: 'data',
        type: 'group',
        display: 'accordion',
        title: {
          label: '数据',
        },
        items: [
          {
            name: 'data',
            title: '图表数据',
            setter: 'JsonSetter',
          },
          {
            name: 'xField',
            title: {
              label: 'x轴字段名',
              tip: 'x 方向映射对应的数据字段名',
            },
            setter: 'StringSetter',
          },
          {
            name: 'yField',
            title: {
              label: 'y轴字段名',
              tip: 'y 方向映射所对应的数据字段名',
            },
            setter: 'StringSetter',
          },
        ],
      },
      // 图形属性
      {
        name: '',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图形属性',
        },
        items: [
          {
            name: 'color',
            title: '颜色',
            setter: 'ColorSetter',
          },
          {
            name: 'lineSize',
            title: '粗细',
            setter: 'NumberSetter',
          },
          {
            name: 'smooth',
            title: '平滑',
            setter: 'BoolSetter',
          },
          {
            name: 'point.visible',
            title: '显示点',
            setter: 'BoolSetter',
          },
          {
            name: 'label.visible',
            title: '显示标签',
            setter: 'BoolSetter',
          },
        ],
      },
      ...plotConfigure,
      ...actionConfigure,
    ],
    supports: {
      style: true,
    },
    component: {},
    advanced: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'LineChart',
    screenshot: '',
    schema: {
      componentName: 'LineChart',
      props: {
        data: [
          { year: '1991', value: 72345678 },
          { year: '1992', value: 4321132 },
          { year: '1993', value: 33121112.5 },
          { year: '1994', value: 45227221 },
          { year: '1995', value: 4321221.9 },
          { year: '1996', value: 6322121 },
          { year: '1997', value: 78312213 },
          { year: '1998', value: 4192312 },
          { year: '1999', value: 6212332 },
          { year: '2000', value: 3192312 },
        ],
        xField: 'year',
        yField: 'value',
        color: '#0079f2',
        label: {
          visible: true,
        },
      },
    },
  },
];

export default {
  ...LineChartMeta,
  snippets,
};
