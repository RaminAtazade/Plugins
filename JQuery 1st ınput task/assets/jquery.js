
$(document).ready(function() {
    $("#addbutton").click(function() {
        var name = $("#nameinput").val();
        $("#namelist").append("<li>" + name + "</li>");
    });
    $("#searchinput").on("input", function() {
        var searchKeyword = $(this).val();
        $("#namelist li").show();
        $("#namelist li").filter(function() {
            return $(this).text().indexOf(searchKeyword) === -1;
        }).hide();
    });
});