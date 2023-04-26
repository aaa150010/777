export default {
    install(app){
        app.directive('permission',{
            mounted(el,bind){
                console.log(el,bind)
            }
        })
    }
}