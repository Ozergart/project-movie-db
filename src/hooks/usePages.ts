import {SetURLSearchParams} from "react-router-dom";


const usePages = {
    prev: (setQuery:SetURLSearchParams)=>{
        setQuery(prev=> {
            prev.set("page", `${+prev.get('page')-1}`)
            return prev
        })
    },

    next: (setQuery:SetURLSearchParams)=>{
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page')+-1}`)
            return prev
        })
    },
    change: (setQuery:SetURLSearchParams,value:number)=>{
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page')+value}`)
            return prev
        })
    }
}
export{
    usePages
}