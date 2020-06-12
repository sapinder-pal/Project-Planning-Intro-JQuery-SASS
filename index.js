// toggle navbar
let hamburger = "images/icon-hamburger.svg";
let close = "images/icon-close.svg";

let expanded = false;
$(".navbar-toggler").click(()=>{
	$("#navigation-content").toggleClass("collapse");

	if(expanded){
		$(".navbar-toggler-icon img").attr("src",hamburger);
		expanded = false;
	}
	else{
		$(".navbar-toggler-icon img").attr("src",close);
		expanded = true;
	}
})


// hover effect
document.querySelectorAll("li a").forEach(element => {

			element.addEventListener("mouseenter", (event) => {

			  let span;
			  let alreadyHasSpan = event.target.childNodes.length > 1; //default length=1

			  if (!alreadyHasSpan) {
			    span = $(`<span class="a-effect"></span>`);
			    span.appendTo(event.target);
			  }
			});

			element.addEventListener("mousemove", (event) => {
			  let targetLeftPos = event.target.getBoundingClientRect().left;

			  if (event.target.childNodes.length > 1) {
			    let span = event.target.childNodes[1];
			    $(span).css("left", `${event.clientX-targetLeftPos}px`);
			  }
			});

			element.addEventListener("mouseleave", (event) => {
				
			  if (event.target.childNodes.length > 1) {
			    let span = event.target.childNodes[1];
			    span.remove();
			  }
			});
		});

