/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise

基本要求: 能根据接口文档定义接口请求函数
//  */
// import jsonp from 'jsonp'
import ajax from './ajax'
import jsonp from 'jsonp'
import CateGory from './cate'
import Rule from './rule'
import Product from './product'
import User from './user'
import { message } from 'antd'
import md5 from 'md5'
// const BASE = 'http://localhost:5000'
const BASE = ''
// 登陆
/*
export function reqLogin(username, password) {
  return ajax('/login', {username, password}, 'POST')
}*/
export const reqLogin = (username, password) =>
  ajax(BASE + '/login', { username, password }, 'POST', data => {
    console.log(data)
    const user =  User.users.find((item) => {
      return data.username === item.username && data.password === item.password
    })
    console.log(user)
    if (user) {
      const rule = Rule.find((item) => {
          return item._id === user.role_id
      })
      user.role = {
        menus:rule.menus
      }
      return {
        status: 0,
        data:user
      }
    } else {
      return JSON.parse('{"status":1,"msg":"用户名或密码不正确"}')
    }
  })

// 获取一级/二级分类的列表
export const reqCategorys = parentId =>
  ajax(BASE + '/manage/category/list', { parentId }, 'GET', data => {
    return CateGory.filter(item => item.parentId === data.parentId.toString())
  })

// 添加分类
export const reqAddCategory = (categoryName, parentId) =>
  ajax(
    BASE + '/manage/category/add',
    { categoryName, parentId },
    'POST',
    data => {
      CateGory.push({
        parentId: data.parentId,
        _id: md5(data.parentId + new Date().getTime()),
        name: data.categoryName
      })
    }
  )

// 更新分类
export const reqUpdateCategory = ({ categoryId, categoryName }) =>
  ajax(
    BASE + '/manage/category/update',
    { categoryId, categoryName },
    'POST',
    data => {
      const res = CateGory.find(item => item._id === data.categoryId.toString())
      res.name = data.categoryName
      return { status: 0, msg: '成功' }
    }
  )

// 获取一个分类
export const reqCategory = categoryId =>
  ajax(BASE + '/manage/category/info', { categoryId }, 'GET', data => {
    console.log(data)
    const res = CateGory.find(item => {
      return (item._id = data.categoryId)
    })
    return { status: 0, msg: '成功', data: res }
  })

function getImagesAndCate(data) {
  data.forEach(item => {
    if (!item.imgs) {
      item.imgs = [
        'https://img10.360buyimg.com/n1/jfs/t1/70791/30/9837/99509/5d7809abEabb3dd71/162f3d53c477a87f.jpg',
        'https://img11.360buyimg.com/n1/s450x450_jfs/t1/3251/37/3455/82542/5b997bf4E6336f987/83d512f576675ad7.jpg',
        'https://img13.360buyimg.com/n1/s450x450_jfs/t1/5904/24/3505/86713/5b997bfdE0b92cffc/e194ac061516de9d.jpg'
      ]
    }
    if (!item.pCategoryId) {
      const cate = CateGory[Math.floor(Math.random() * CateGory.length)]
      item.pCategoryId = cate.parentId
      item.categoryId = cate._id
    }
  })
  return data
}
// 获取商品分页列表
export const reqProducts = (pageNum, pageSize) =>
  ajax(BASE + '/manage/product/list', { pageNum, pageSize }, 'GET', data => {
    let page = (data.pageNum - 1) * data.pageSize
    let res = Product.slice(page, page + data.pageSize)
    return {
      status: 0,
      data: {
        pageNum: pageNum,
        pageSize: pageSize,
        total: Product.length,
        list: getImagesAndCate(res)
      }
    }
  })

// 更新商品的状态(上架/下架)
export const reqUpdateStatus = (productId, status) =>
  ajax(
    BASE + '/manage/product/updateStatus',
    { productId, status },
    'POST',
    data => {
      const res = Product.find(item => {
        return item._id === data.productId
      })
      res.status = data.status
      return { status: 0, msg: '成功' }
    }
  )

/*
搜索商品分页列表 (根据商品名称/商品描述)
searchType: 搜索的类型, productName/productDesc
 */
export const reqSearchProducts = ({
  pageNum,
  pageSize,
  searchName,
  searchType
}) =>
  ajax(
    BASE + '/manage/product/search',
    {
      pageNum,
      pageSize,
      [searchType]: searchName
    },
    'GET',
    data => {
      console.log(data)
      let tempProduct = [...Product]
      tempProduct = tempProduct.filter(item => {
        item.imgs = []
        if (data['productName']) {
          return item.name.indexOf(data['productName']) !== -1
        } else {
          return item.desc.indexOf(data['productDesc']) !== -1
        }
      })
      console.log(tempProduct)
      let page = (data.pageNum - 1) * data.pageSize
      let res = tempProduct.slice(page, page + data.pageSize)
      return {
        status: 0,
        data: {
          pageNum: pageNum,
          pageSize: pageSize,
          total: tempProduct.length,
          list: getImagesAndCate(res)
        }
      }
    }
  )

// 搜索商品分页列表 (根据商品描述)
/*export const reqSearchProducts2 = ({pageNum, pageSize, searchName}) => ajax(BASE + '/manage/product/search', {
  pageNum,
  pageSize,
  productDesc: searchName,
})*/

// 删除指定名称的图片
export const reqDeleteImg = name =>
  ajax(BASE + '/manage/img/delete', { name }, 'POST')

// 添加/修改商品
export const reqAddOrUpdateProduct = product =>
  ajax(
    BASE + '/manage/product/' + (product._id ? 'update' : 'add'),
    product,
    'POST',
    data => {
      if (data._id) {
        let key = null
        let res = Product.find((item, index) => {
          if (item._id === data._id) {
            key = index
            return true
          }
          return false
        })

        Product[key] = { ...res, ...data }
      } else {
        Product.push({
          _id: md5(data + new Date().getTime()),
          status: '1',
          ...data
        })
      }
      return {
        status: 0,
        mag: '成功'
      }
    }
  )
// 修改商品
// export const reqUpdateProduct = (product) => ajax(BASE + '/manage/product/update', product, 'POST')

// 获取所有角色的列表
export const reqRoles = () =>
  ajax(BASE + '/manage/role/list', {}, 'GET', () => {
    return {
      status: 0,
      data: Rule
    }
  })
// 添加角色
export const reqAddRole = roleName =>
  ajax(BASE + '/manage/role/add', { roleName }, 'POST', data => {
    const res = {
      menus: [],
      _id: md5(data.roleName + new Date().getTime()),
      name: roleName,
      create_time: new Date().getTime(),
      __v: 0,
      auth_time: null,
      auth_name: null
    }
    return {
      status: 0,
      msg: '成功',
      data: res
    }
  })
// 添加角色
export const reqUpdateRole = role =>
  ajax(BASE + '/manage/role/update', role, 'POST', data => {
    let res = Rule.find(item => {
      return item._id === data._id
    })
    res = { ...res, ...data }
    return {
      status: 0,
      msg: '成功',
      data: res
    }
  })

// 获取所有用户的列表
export const reqUsers = () =>
  ajax(BASE + '/manage/user/list', {}, 'GET', () => {
    User.users.forEach(item => {
      const rule = Rule[Math.floor(Math.random() * Rule.length)]
      item.role_id = rule._id
    })
    User.roles = Rule
    return {
      status: 0,
      msg: '成功',
      data: User
    }
  })
// 删除指定用户
export const reqDeleteUser = userId =>
  ajax(BASE + '/manage/user/delete', { userId }, 'POST', data => {
    const users = User.users.filter(item => {
      return item._id !== data.userId
    })
    User.users = users
    return {
      status: 0,
      msg: '成功'
    }
  })
// 添加/更新用户
export const reqAddOrUpdateUser = user =>
  ajax(BASE + '/manage/user/' + (user._id ? 'update' : 'add'), user, 'POST', data => {
    if (data._id) {
      let key = null
      let res = User.users.find((item, index) => {
        if (item._id === data._id) {
          key = index
          return true
        }
        return false
      })

      User.users[key] = { ...res, ...data }
    } else {
      User.users.push({
        _id: md5(data + new Date().getTime()),
        create_time: new Date().getTime(),
        ...data
      })
    }
    return {
      status: 0,
      msg: '成功'
    }
  })

/*
json请求的接口请求函数
 */
export const reqWeather = city => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    // 发送jsonp请求
    jsonp(url, {}, (err, data) => {
      // 如果成功了
      if (!err && data.status === 'success') {
        // 取出需要的数据
        const { dayPictureUrl, weather } = data.results[0].weather_data[0]
        resolve({ dayPictureUrl, weather })
      } else {
        // 如果失败了
        message.error('获取天气信息失败!')
      }
    })
  })
}
// reqWeather('北京')
/*
jsonp解决ajax跨域的原理
  1). jsonp只能解决GET类型的ajax请求跨域问题
  2). jsonp请求不是ajax请求, 而是一般的get请求
  3). 基本原理
   浏览器端:
      动态生成<script>来请求后台接口(src就是接口的url)
      定义好用于接收响应数据的函数(fn), 并将函数名通过请求参数提交给后台(如: callback=fn)
   服务器端:
      接收到请求处理产生结果数据后, 返回一个函数调用的js代码, 并将结果数据作为实参传入函数调用
   浏览器端:
      收到响应自动执行函数调用的js代码, 也就执行了提前定义好的回调函数, 并得到了需要的结果数据
 */
