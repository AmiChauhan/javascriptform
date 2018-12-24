function nm1() {

    var name, email, password, table, rows;

    name = document.getElementById('exampleInputName1').value;
    email = document.getElementById('exampleInputEmail1').value;

    password = document.getElementById('exampleInputPassword1').value;
    console.log(name + email + password);

    table = document.getElementById('table1');

    var table_len = (table.rows.length);
    table.insertRow(table_len).outerHTML =
        `<tr id="row${table_len}"><td>${name}</td><td>${email}</td><td>${password}</td><td> 
<button id ="updatee${table_len}" value="up" onclick="chngetext(${table_len})" type="button" class="btn btn-secondary">UPDATE</button> </td>
<td> <button id=""onclick="del(this)"  type="button" class="btn btn-secondary">DELETE</button></td>
</tr>`;
    //onclick="upd(${table_len})"

}

function del(traw) {

    var i = traw.parentNode.parentNode;

    document.getElementById('table1').deleteRow(i.rowIndex);
    // document.getElementById(table).removeChild(this);
    alert("do you want to delete this row");

}

// function upd(update) {
//
//     var table = document.getElementById('table1');
//     var row = document.getElementById(`row${update}`);
//     var textchng=document.getElementById("updatee");
//
//     for (var i = 0; i <= 3; i++)
//     {
//         if(textchng.innerHTML="UPDATE")
//         {
//             row.getElementsByTagName('td')[i].contentEditable = true;
//             row.getElementsByTagName('td')[i].style.backgroundColor="#E8E8E8";
//
//             textchng.innerHTML="SAVE";
//
//         }
//         else
//         {
//             textchng.innerText="UPDATE";
//         }
//
//
//
//
//     }
//
// }
function chngetext(chg) {

    var table = document.getElementById('table1');
    var row = document.getElementById(`row${chg}`);
    var textchng = document.getElementById(`updatee${chg}`);

    var msg = textchng.innerHTML;

    if (msg === "UPDATE") {

        textchng.innerText = "SAVE";
        for (var i = 0; i <= 3; i++)
        {
            row.getElementsByTagName('td')[i].contentEditable = true;
            row.getElementsByTagName('td')[i].style.backgroundColor = "#E8E8E8";
        }
    }



    else if (msg == = "SAVE")
    {
            textchng.innerHTML = "UPDATE";
            for (var i = 0; i <= 3; i++)
            {
                row.getElementsByTagName('td')[i].contentEditable = false;
                // row.getElementsByTagName('td')[i].style.backgroundColor="#E8E8E8";
            }
        }


}




