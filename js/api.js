$(document).ready(function () {
	let users = [];

	$('#add').click(function () {

		let user = $('#student-name').val();
		let pass = $('#student-class').val();

		let aUser = new User(user,pass);
		users.push(aUser);
		
		alert('created!');
	});

	$('#view').click(function () {
		for (let i = 0; i < users.length; i++) {
			alert(users[i].user);
		}
	});

	function User(user,pass){
		this.user = user;
		this.pass = pass;
	}
});

/*

		$('add').click(function () {
		alert('hi');
		let user = $('#student-name').val();
		let pass = $('#student-class').val();
		let aUser = new User(user,pass);
		users.push(aUser);
	});

	function User(user,pass){
		this.user = user;
		this.pass = pass;
	}

	function listUsers(){
		for (let i = 0; i < users.length; i++) {
			alert(users[i].name);
		}
	}


*/