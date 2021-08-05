module.exports = {
  base: '/', //基础路径
  title: 'CodeGuide',
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '前端代码规范',
        link: '/Front-Guide/index.html'
      }
    ],

    sidebar: {
      '/Front-Guide/': [
        {
          title:'开始使用',
          collapsable: false,
          children: [
            {
              title: '概述',
              path: '/Front-Guide/'
            }
          ]
        },
        {
          title:'HTML 规范',
          collapsable: false,
          children:[
            {
              title:'代码规范',
              path:'html/code',
            },
            {
              title:'注释规范',
              path:'html/note',
            },
            {
              title:'文件模版',
              path:'html/template',
            },
            {
              title:'WebApp Meta',
              path:'html/webapp',
            },
          ]
        },
        {
          title:'图片规范',
          collapsable: false,
          children:[
            {
              title:'图片格式',
              path:'image/format',
            },
            {
              title:'图片大小',
              path:'image/size',
            },
            {
              title:'图片质量',
              path:'image/quality',
            },
            {
              title:'图片引入',
              path:'image/import',
            },
          ]
        },
        {
          title:'CSS 规范',
          collapsable: false,
          children:[
            {
              title:'代码规范',
              path:'css/code',
            },
            {
              title:'注释规范',
              path:'css/note',
            },
            {
              title:'SASS 规范',
              path:'css/sass',
            },
            {
              title:'重置样式',
              path:'css/reset',
            },
            {
              title:'媒体查询',
              path:'css/query',
            },
            {
              title:'移动端常用私有属性',
              path:'css/webkit',
            },
          ]
        },
        {
          title:'命名规范',
          collapsable: false,
          children:[
            {
              title:'目录命名',
              path:'name/dir',
            },
            {
              title:'图片命名',
              path:'name/image',
            },
            {
              title:'HTML/CSS 命名',
              path:'name/htmlcss',
            },
            {
              title:'ClassName 命名',
              path:'name/classname',
            },
          ]
        },
        {
          title:'JS 规范',
          collapsable: false,
          children:[
            {
              title:'语言规范',
              path:'js/language',
            },
            {
              title:'代码规范',
              path:'js/code',
            },
            {
              title:'React&JSX 书写规范',
              path:'js/react',
            },
          ]
        },
      ]
    },
  },
}
