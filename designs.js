//Select color input
const colorInput = $('#colorPicker');
//Select size input
const $inputHeight = $('#input_height');
const $inputWidth = $ ('#input_width');
let gridHeight;
let gridWidth;
const pixelCanvas = $('#pixel_canvas');

function makeGrid(row,column) {
    for (let i= 0 ; i<row ; i++){
        pixelCanvas.append("<tr></tr>");
    }
    for (let j= 0 ; j < column ; j++){
        $("tr").append("<td></td>");
    }
}
//When size is submitted by the user, call makeGrid function; removes previous grid and builds a new one
$('form').submit(function() {
	$("tr").remove(); 
	gridHeight = $inputHeight.val();
	gridWidth = $inputWidth.val();
	makeGrid(gridHeight, gridWidth);
	event.preventDefault();
});

//Changes the background color 
$('table').on('click', 'td', function() {
	$(this).css('backgroundColor', colorInput.val());
});