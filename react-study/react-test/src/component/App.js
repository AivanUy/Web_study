import React from "react";
import axios from "axios"
class App extends React.Component {
    list = []

    state = {
        list: [],
        ipList: [],
        text: ""
    }

    render() {
        return <div style={{ color: "red" }}>
            <input value={this.state.text} onChange={this.textOnChange} />
            <button style={{ marginLeft: 10 }} onClick={() => this.itemAdd()}>add</button>
            <ul>
                {
                    this.state.list.map((item, index) => <li key={item}>{item}<button style={{ marginLeft: 10 }} onClick={() => this.itemDelete(index)}>Del</button></li>)
                }
            </ul>
            {this.state.list.length === 0 && <div>暂无数据</div>}
            <button onClick={() => this.requestCity()}>Request</button>
            {/* <ul>
                {
                    this.state.ipList.map((item) => <li key={item.ip}>{item.ip}</li>)
                }
            </ul>
            {
                this.state.ipList.map((item) => <div>{item.ip}</div>)
            } */}

        </div>
    }

    textOnChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    itemAdd = () => {
        if (this.state.text == "" || this.state.text == null) return
        this.list.push(this.state.text)
        this.setState({
            list: this.list,
            text: ""
        })
    }


    itemDelete = (index) => {
        this.list.splice(index, 1)
        this.setState({
            list: this.list
        })

    }

    requestCity = () => {
        axios({
            // url: "/mytio/im/imserver.tio_x?p_is_h5=1&tio_site_from_h5=1",
            url: "/book/3440/chapter/3146106.html",
            method: "get"
        }).then(res => {
            console.log(res.data)
            this.setState({
                ipList: res.data.data
            })
        })
    }

    /* shouldComponentUpdate = (nextProps, nextState) => {

    }

    componentWillUpdate = (nextProps, nextState) => {

    }

    componentDidUpdate = (prevProps, prevState) => {

    }

    componentWillUnmount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    componentWillReceiveProps = (nextProps) => {

    }

    static getDerivedStateFromProps(nextProps, prevState) {

    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {

    } */









}

export default App

