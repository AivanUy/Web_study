/*
 * @Description: 
 * @Author: Aivan van@gmail.com
 * @Date: 2023-02-11 19:20:12
 * @LastEditTime: 2023-02-18 14:15:22
 * @LastEditors: Aivan van@gmail.com
 * @FilePath: \node-study\08-code-splitting\src\index.js
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

import helloWorld from "./node-novel";
import helloworld from "./hello-world";
import lodash from 'lodash'

import './style.css'
import './style.less'

helloWorld()
helloworld()
document.body.classList.add('hello')
document.body.classList.add('hello')

console.log(_.join(['index', 'module', 'loades!'], ' '))

const button = document.createElement('button')
button.textContent = "点击执行加法运算"
button.addEventListener('click', () => {
    import(/* webpackChunkName: 'math',webpackPrefetch: true */'./math.js').then(({ add }) => {
        console.log(add(4, 5))
    })
})
document.body.appendChild(button)
