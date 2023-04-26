import { defineStore } from 'pinia'
import axios from "axios";
export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 10,
            token:'',
            width:'100px'
        }
    },
    actions: {
        increment() {
            this.count++
        },
        login(){
             axios.post('api/admin/login',{username:'admin',password:'admin'})
                .then(res=>{
                    console.log(res.data.data)
                  this.token=res.data.data.token
                })
        },
        setWidth(){
            this.width=this.width=='100px'?'150px':'100px'
        }
    },
    getters:{
        doublecount:(state)=>{
           return  state.count*2
        },
        setToken:(state,token)=>{
            return state.token=token
        }
    },
    persist:true
})
