<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>UIUCnet QuickConnect</title>



<style>

/* CONTAINER FOR FIXED LAYOUT */
#container {
	padding: 0em;
	width: 47em;
	margin: .2em auto 0 auto; 
	background-color: white; 
	color:inherit;
/*	font-family: 'Gill Sans MT', 'Gill Sans', Arial, Helvetica, sans-serif; */
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1em; 
}
	
	
	
/* ----------- BEGIN header styles --------------*/

#header {
	position: relative;
    margin: 0 0 10px 0;
    padding: 8px 10px 0.1em 10px; 
	background: url(/images/topbar-mod4.jpg) no-repeat center top;
/*	font-family: 'Gill Sans MT', 'Gill Sans', Arial, Helvetica, sans-serif; */
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1em; 
	width: 100%;
	color: #EEE;

/*	border: solid 1px orange; */
}

.header_content {
	margin: 0 0 0 0;
	padding: 0 0 0.4em 0;
	min-height: 100%; 
	width: 75%;

/*	border: solid 1px green; */
}

.header_content img {
	float: left;
	border: none;
	margin-right: 4px;
}

.cites {
	line-height: 0.7em; 
	font-size: 1em;
	letter-spacing: 0.3em;
	margin: 2px 0 2px 0px;
	padding: 3px 0 0px 0;
	color: #EEE;
}

.service_name {
	font-size: 1.4em;
	line-height: 1.2em; 
	white-space: nowrap;
	font-weight: normal;
	padding: 0;
	margin: 0;
}

.tag_line {
	font-size: 0.7em;
	line-height: 1.2em;
}


.header_content a:link {
    color: #EEE;
    text-decoration: none;
}

.header_content a:visited {
    color: #EEE;
    text-decoration: none;
}

.header_content a:hover {
    color: #EA7C50;
}   



/* ----------- END header styles ----------------*/




#login_button {
	width: 45%;
	float: left;
	padding: 2em 1em;
	font-size: 0.7em;
	text-align: center;
}


#login_text {
	float: right;
	padding: 1em 1em;
	font-size: 0.8em;
	width: 45%;
}

#login_text p {
}


#users_section {
	margin: 10em 1em;
	clear: both;
}

#users_section h2 {
	font-size: 1.2em;
	font-weight: normal;
	border-bottom: solid 1px gray;
	padding-bottom: 0.4em;
}

#users_section h3 {
	font-weight: normal;
	padding-bottom: 0.4em;
	font-size: 1.3em;
	color:#990000
}

#uiuc_users {
	width: 40%;
	float: left;
	padding: 1em 2em;
	font-size: 0.8em;
	background-color:  #EEF;
	border: solid 1px #CCC;
	height: 20em;
}

#other_users {
	float: right;
	padding: 1em 2em;
	font-size: 0.8em;
	width: 40%;
	background-color: #EEF;
	border: solid 1px #CCC;
	height: 20em;
}


#help_section {
	margin: 2em 1em;
	clear: both;
	padding-top: 2em;
}

#help_section h2 {
	font-size: 1.2em;
	font-weight: normal;
	border-bottom: solid 1px gray;
	padding-bottom: 0.4em;
}

#help_section h3 {
	font-weight: normal;
	font-size: 1em;
	margin: 2em 0 0 0;
	padding: 0;
}

#help_section p {
	font-size: 0.8em;
}



</style>

	<link rel="stylesheet" href="/handheld.css" type="text/css" media="handheld" />

</head>

<body>


<!-- BEGIN container div -->
<div id="container">

<!-- BEGIN header div -->
<div id="header">
	 <div class="header_content">
		<img src="/images/UILogoVsm.gif" alt="link to campus homepage" />
		  <div class="cites">CITES</div>
		  <h1 class="service_name">UIUCnet QuickConnect</h1>
		  <div class="tag_line">Limited network access through the UIUCnet Wireless and Walkup networks</div>
	 </div>


</div>
<!-- END header div -->


<!-- BEGIN login_section div -->
<div id="login_section">



<div id="login_button">

<form method="get" action="https://quickconnect.cites.illinois.edu/cgi-bin/login">
	<label>
 	<input name="mode_login" id="mode_login" type="image" value="Log In to QuickConnect" src="/images/login.gif" />
	</label>
    <input type="hidden" name="mac" value="b8:e8:56:31:1c:56">
    <input type="hidden" name="token" value="$1$34825892$0hF6vTaymTQalEQLxKXvv.">
    <input type="hidden" name="redirect" value="http://code.jquery.com/jquery-2.1.3.min.js">
    <input type="hidden" name="gateway" value="192.17.160.1:5280">
    <input type="hidden" name="timeout" value="4800">
</form>
<p><strong>Guest account holders:</strong><br /> 
Use <strong><em>yourguestusername</em></strong> and your password 
to log in.</p>

</div>



<div id="login_text">
<p>Wireless users: did you know you could be using <a href="http://www.cites.illinois.edu/wireless/wpa2/index.html"><strong>IllinoisNet Secure Wireless</strong></a> instead?</p>

<p><a href="http://www.cites.illinois.edu/wireless/changing.html">Changing Which Wireless Network You Use</a></p>
</div>



</div>
<!-- END login_section div -->



<!-- BEGIN users_section div -->
<div id="users_section">

<h2>Who Can Use QuickConnect</h2>

<div id="uiuc_users">
<h3>University of Illinois faculty, staff, students, and affiliates</h3> 

<p>Use your <strong>NetID</strong> and <strong>Active Directory password</strong> to log in.</p>

<p><strong>Note:</strong> UIUCnet QuickConnect provides <a href="/permitted.html"><strong>limited access</strong></a> to the most commonly used network services, such as web browsing, email, and some instant messaging clients.</p>


<p><strong>Need full access?</strong>  Use the <a href="http://www.cites.illinois.edu/vpn/download-install.html">VPN</a>, or switch to <a href="http://www.cites.illinois.edu/wireless/wpa2/index.html">IllinoisNet Secure Wireless</a>.</p>
</div>

<div id="other_users">
<h3>Guest account holders</h3> 

<p>Use <strong><em>yourguestusername</em></strong> and your password to log in.</p>

<h4>Don't Have an Account?</h4> 

<ul>
<li>Ask a campus member to create an account for you.</li>

<li>Use UI Public Wireless, available in some campus locations.</li>
</ul>

<p>For more information, see <a href="/visitors.html">Getting Started with Temporary Network Access</a>. </p>
</div>



</div>
<!-- END users_section div -->


<!-- BEGIN help_section div -->
<div id="help_section">
<h2>Help with QuickConnect</h2>

<p>For help with QuickConnect, contact the CITES Help Desk at <strong>(217) 244-7000.</strong></p>
</div>
<!-- END help_section div -->



</div> <!-- END container div -->

</body>
</html>
