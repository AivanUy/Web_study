/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-03-10 14:56:21
 * @LastEditTime: 2023-03-10 15:01:30
 * @LastEditors:  
 */



import React, { Component } from 'react'
import {observable,autorun} from 'mobx'

var observableNumber = observable.box(10)

autorun(() => {
  console.log(observableNumber.get())
})

export default class App extends Component {
  render() {
    return (
      <div>
        app
      </div>
    )
  }
}
