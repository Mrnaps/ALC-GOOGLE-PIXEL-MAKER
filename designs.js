//create variable for height, width and columns.
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    //clear default values
    event.preventDefault();
    //get user row and column input
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    //make the grid ( row = height, width = column)
    makeGrid(height, width);

});
function makeGrid(row,column) {
    //remove default grid
    $('tr').remove();

// iterate rows by columns
    for (var i = 1; i <= row; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr');
        for (var j = 1; j <= column; j++){
            $('#table' + i).append('<td></td>');
        }
    }

    //add color to cell
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}
