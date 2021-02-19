const menuList = [
    {
      title: '首页', // 菜单标题名称
      key: '/home', // 对应的path
      icon: "HomeOutlined", // 图标名称
      isPublic: true, // 公开的
    },
    {
      title: '商品',
      key: '/product',
      icon: 'HomeOutlined',
      children: [ // 子菜单列表
        {
          title: '品类管理',
          key: '/category',
          icon: 'HomeOutlined'
        },
        {
          title: '商品管理',
          key: '/product',
          icon: 'HomeOutlined'
        },
      ]
    },
  
    {
      title: '用户管理',
      key: '/user',
      icon: 'HomeOutlined'
    },
    {
      title: '角色管理',
      key: '/role',
      icon: 'HomeOutlined',
    },
  
    {
      title: '图形图表',
      key: '/charts',
      icon: 'HomeOutlined',
      children: [
        {
          title: '柱形图',
          key: '/charts/bar',
          icon: 'HomeOutlined'
        },
        {
          title: '折线图',
          key: '/charts/line',
          icon: 'HomeOutlined'
        },
        {
          title: '饼图',
          key: '/charts/pie',
          icon: 'HomeOutlined'
        },
      ]
    },
  
    {
      title: '订单管理',
      key: '/order',
      icon: 'HomeOutlined',
    },
  ]
  
  export default menuList