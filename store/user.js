export const state = () => ({
    user:{
           dialog: false
        }
})
export const getters = {
          user: state => state.user
}
export const mutations = {
    userAuthMutation(state, payload){
         state.user.dialog = payload.dialog;
        
    }  
}