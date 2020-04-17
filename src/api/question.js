import instance from '@/utils/request.js'
function getQuestionData(params) {
    return instance({
        url: "/question/list",
        method: "get",
        params      //data: data   
    })
}
export { getQuestionData }