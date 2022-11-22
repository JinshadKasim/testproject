function insert() {

    $.ajax({
        url: "insert_data",
        type: "post",
        data: {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'password': $('#password').val(),
            'place': $('#place').val(),
        },
        success: function (response) {
            alert(response.message)
            alert("sucess")
        }
    })
    // view_data()
}



function view_data() {
    console.log("Hello World")


    // $('#submit').on('click', function () {
    //     var station = $('#stationChoose').val();

        $.ajax({
            type: 'GET',
            url: "view_data",
            success:
                function (response) {
                    alert(response.data)
                    var table = document.getElementById("add_table");
                    console.log(response.data)
                    i = 0
                    j = 0
                    while (j < response.length) {

                        var row = table.insertRow(-1);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        var cell3 = row.insertCell(2);
                        var cell4 = row.insertCell(3);
                        var cell5 = row.insertCell(4);
                        cell1.innerHTML = i++;
                        cell2.innerHTML = response.data[j].name;
                        cell3.innerHTML = response.data[j].email;
                        cell4.innerHTML = response.data[j].password;
                        cell5.innerHTML = response.data[j].place
                        j++

                    }

                }
        });
    };



// }