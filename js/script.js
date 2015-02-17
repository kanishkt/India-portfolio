$(document).ready(function() {
    //Variables later used for the carosel
    var a = $("#img1")
    	b = $("#img2"),
    	c = $("#img3");
    
    	//sellection auto scroll to the correct part of the page
    $("#part-1-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-1").offset().top - 100
        }, 500)
    }), $("#part-2-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-2").offset().top - 50
        }, 500)
    }), $("#part-3-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-3").offset().top - 50
        }, 500)
    }), $("#part-4-nav").click(function() {
        $("html,body").animate({
            scrollTop: $("#part-4").offset().top - 50
        }, 500)
    }),
    
    //Right and left arrow configuration for the carosel
    $("#right").click(function() {
        return a.is(":visible") ? (a.animate({
            width: "toggle"
        }, 350), void b.animate({
            width: "toggle"
        }, 350)) : b.is(":visible") ? (b.animate({
            width: "toggle"
        }, 350), void c.animate({
            width: "toggle"
        }, 350)) : c.is(":visible") ? (c.animate({
            width: "toggle"
        }, 350), void a.animate({
            width: "toggle"
        }, 350)) : void 0
    }), 
    $("#left").click(function() {
        return a.is(":visible") ? (a.animate({
            width: "toggle"
        }, 350), void c.animate({
            width: "toggle"
        }, 350)) : b.is(":visible") ? (b.animate({
            width: "toggle"
        }, 350), void a.animate({
            width: "toggle"
        }, 350)) : c.is(":visible") ? (c.animate({
            width: "toggle"
        }, 350), void b.animate({
            width: "toggle"
        }, 350)) : void 0
    }),
     
    //Nav bar resiging and correct component selction in the navbar
     $(window).scroll(function() {
        var a = $("#nav-panel li"),
            b = $(window).scrollTop();
        0 >= b ? $("header").addClass("larger-head") : $("header").removeClass("larger-head"), 
        1000 > b ? (a.removeClass("select"), $("#part-1-nav").addClass("select")) : 
        1730 > b ? (a.removeClass("select"), $("#part-2-nav").addClass("select")) : 
        b >2396 ? (a.removeClass("select"), $("#part-4-nav").addClass("select")) : 
        2395 > b && (a.removeClass("select"), $("#part-3-nav").addClass("select"))
    })
});

function model_view(){
	//Showing and hiding a modal
	$("#modal-layover").show();
	$("#modal-layover").click(function() {
        $("#modal-layover").hide()
    })
}