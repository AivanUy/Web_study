/*
 * @Description: mobx store
 * @Author: Aivan
 * @Date: 2023-03-10 15:31:06
 * @LastEditTime: 2023-03-10 15:32:59
 * @LastEditors:  
 */
import {observable,action} from 'mobx'
class Store{
    @observable isTabbbarShow = true
    @observable list = []

    @action changeShow(){
        this.isTabbbarShow = true
    }

    @action changeHide(){
        this.isTabbbarShow = false
    }
}