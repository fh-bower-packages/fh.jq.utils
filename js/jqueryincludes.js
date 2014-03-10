function showErrorPopups() {
	$(".error-messages-wrapper").each(function(index) {
		var top = $(this).offset().top - $(this).height();
		var left = $(this).offset().left;
		
		if ($('#registration-form').length > 0) {
			top = $('#registration-form').height() - $(this).height();
			top = top / 2;
			top = top + $('#registration-form').offset().top;
			
			var elem = $(this);
			setTimeout(function () { elem.hide(); }, 5000);
		}
		
		$(this).offset({ 'left' : left });//'top' : top,
	});
	$("#login-error-messages-wrapper").each(function(index) {
		var pwd = $('#login_password');
		if($('body .modal .content').length == 0){
			//when you do not have the login_password field in your form
			if(pwd.length == 0 ){
				var top = $(this).offset().top + 20;
				var left = $(this).offset().left - 160;
				$("#login-error-messages-wrapper").offset({ 'top' : top, 'left' : left });
			}else{
			// desktop version 
				
			
			var top = pwd.offset().top + 23;
			var left = pwd.offset().left - 340;
			}
			
			
			if(getCookie("loginType")=="desktop"){
				 top = 40;
				 left = 530;
			}
			$("#login-error-messages-wrapper").css({ 'top' : top, 'left' : left });
		}else{
			// modal version
			var top = pwd.offset().top + 20;
			var left = pwd.offset().left - 160;
			$("#login-error-messages-wrapper").offset({ 'top' : top, 'left' : left });
		}
	});
}

$(function() {
	showErrorPopups();
});