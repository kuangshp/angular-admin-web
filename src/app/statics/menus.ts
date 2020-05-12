export default {
  code: 0,
  message: '请求成功',
  result: [
    {
      id: 1,
      name: '文件中心',
      parentId: -1,
      sort: 1,
      url: '/file',
      icon: 'file',
    },
    {
      id: 2,
      name: '系统管理',
      parentId: -1,
      sort: 2,
      url: 'system',
      icon: 'team',
    },
    {
      id: 4,
      name: '角色管理',
      parentId: 2,
      sort: 4,
      url: 'system/role',
      icon: 'usergroup-add',
    },
    {
      id: 5,
      name: '资源管理',
      parentId: 2,
      sort: 5,
      url: 'system/access',
      icon: 'apartment',
    },
    {
      id: 3,
      name: '用户中心',
      parentId: 2,
      sort: 3,
      url: 'system/user',
      icon: 'user',
    },
    {
      id: 6,
      name: '设置',
      parentId: -1,
      sort: 6,
      url: '/setting',
      icon: 'setting',
    },
  ],
};
