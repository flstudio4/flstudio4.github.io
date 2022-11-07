/*

    Build and Repair Service website
    Slide show for index.html
    Author: Dmitrii Sumenko
    Date: 10/01/2022
    FileName: slide_show.js

 */

"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");

    // start slide show
    setInterval( () => {
        $("#slide").fadeOut(3000,
                () => {
                    if (nextSlide.next().length === 0) {
                        nextSlide = $("#slides img:first-child");
                    }
                    else {
                        nextSlide = nextSlide.next();
                    }
                    const nextSlideSource = nextSlide.attr("src");
                    $("#slide").attr("src", nextSlideSource).fadeIn(3000);
                });    // end fadeOut()
        },
        3000);         // end setInterval()
});