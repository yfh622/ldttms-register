import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import {app} from "./app";
const qms = app.qms;

// const $axios = axios.create({
//     timeout: 60000
// })

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: qms + url,
            params: params,
            //   headers: {
            // 'Content-Type': 'application/json;charset=UTF-8'
            // }, 
          }).then(res => {
              resolve(res.data)
          }).catch()
    })
}

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: qms + url,
            // data: {},
            /* headers: {
            'Content-Type': 'application/json;charset=UTF-8'
            }, */
        }).then(res => {
            resolve(res.data)
        }).catch(e => {
        })
    })
}

export function put(url, data = {}) {
}

export function del(url, ids = []) {
}
export function down(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            params: params,
            // responseType: 'blob',
            //   headers: {
            // 'Content-Type': 'application/json;charset=UTF-8'
            // }, 
          }).then(res => {
              resolve(res.data)
          }).catch()
    })
}
// export { $axios }
// export default {get, post, put, del}