let rows, cols = 16;

document.write("<table>");
for(i = 0; i < rows; i++){
  document.write("<tr>");
  for(j = 0; j < cols; j++){
    document.write("<td>"+"</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

$( "td").css("color", "red");

$(document).ready(function() {
  grid(16,16);
});

$(" .button").click(function() {
  let size = prompt("Please select your grid size");
  grid(size, size);
});

function grid(rows, cols){
  let table = "<table>";
  let size = (1 / rows * 525) + "px";

  for(i = 0; i < rows; i++){
    table += "<tr>";
    for(j = 0; j < cols; j++){
      table += "<td>"+"</td>";
    }
    table += "</tr>";
  }
  table += "</table>";

  if(rows > 100 || cols > 100){
    alert("Grid size cannot exceed 100 x 100");
    return;
  }

  $(".container").empty().append(table);
  $("tr").css("height", size);
  $("td").css("color","black").css("width", size);
}

$(".container").on("mouseenter", "td", function() {
  $(this).addClass("my-color-class");
});
  





