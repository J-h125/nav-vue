const key ='save'
export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(key))
    },
    save(items){
        window.localStorage.setItem(key,JSON.stringify(items))
    },
    // remove(){
    //     window.localStorage.key()
    // }
}

