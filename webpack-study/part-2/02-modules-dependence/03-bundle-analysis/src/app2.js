/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-22 12:26:42
 * @LastEditTime: 2023-02-22 12:34:16
 * @LastEditors:  
 */
import(/* webpackChunkName: 'lodash' */'lodash')
    .then(({ default: _ }) => {
        console.log(_.join(['hello', 'webpack']),' ')
    })