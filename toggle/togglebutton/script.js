$(document).ready(function()
{
    $(".toggle").click(function()
    {
        $("body").toggleClass("btn");
        $(this).toggleClass("toggle-button")
        $(".circle").toggleClass("circle-button",2)
        $("p:nth-child(even)").toggleClass("evenafter")
    })

})