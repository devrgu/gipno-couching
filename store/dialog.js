export const state = () => ({
           dialog: false
})
export const getters = {
          getdialog(state) {
         return state.dialog
       }
}
export const mutations = {
    dialogMutation(state, value){
         state.dialog = value;
        
    }  
}