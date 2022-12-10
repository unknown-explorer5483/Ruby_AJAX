function show_result(data){
    let result = document.getElementById("result")
    result.innerHTML = "<br>Результат:<br><br><table id='resultTable'><tr><th>Число</th><th>Квадрат числа</th></tr></table>"
    let table = document.querySelector("#resultTable")
    data.value.forEach(result => table.innerHTML += `<tr><td>${result[0]}</td><td>${result[1]}</td><tr>`)
    table.innerHTML += `<tr><th>Количество элементов:</th><th>${data.value.length}</th><tr></tr>`
}
$(document).ready(function(){
    $("#calc_form").bind("ajax:success",function(xhr, data, status) {
    show_result(data)
    })
})