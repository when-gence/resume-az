window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 69;
    fetch(functionApi).then (response =>{
        return response.json()
    }).then (response =>{
        console.log("Website called Function.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch (function(error){
        console.log(error);
    });
    return count;
}
