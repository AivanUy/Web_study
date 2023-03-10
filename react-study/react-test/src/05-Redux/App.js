/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-03-01 13:02:19
 * @LastEditTime: 2023-03-01 13:10:06
 * @LastEditors:  
 */
import React, { Component } from 'react'
import store from '../05-Redux/redux/store'

export default class App extends Component {

    componentDidMount = () => {
        store.subscrib(() => {
            console.log("destroy")
        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
