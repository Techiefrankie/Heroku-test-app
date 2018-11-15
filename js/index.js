$(document).ready(function(){
	let co = 0;
	$( "#add-contact" ).click(function() {
	  	let name = $('#name').val();
	  	let address = $('#address').val();
	  	let phone = $('#phone').val();
	  	let list = "<ul><li><label>Name:</label> " + name + "</li><li><label>Address:</label> " + address + "</li><li><label>Phone Number:</label> " + phone + "</li></ul>";
	  	$('#display-list').append(list);
	});

		$( "#btn-add-student" ).click(function() {
	  	let name = $('#student-name').val();
	  	let sclass = $('#student-class').val();
	  	let list = "<tr><td>" + ++co + "</td><td>" + name + "</td><td>" + sclass + "</td></tr>";
	  	$('#table-row').append(list);
	});

	$('#mybtn').click(function(){
		alert('hello');
	});

	function test(){
		alert('hello');
	}
});