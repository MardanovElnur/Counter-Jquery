$(document).ready(function () {


    $('.rum').each(function () {
        const This = $(this);
        $({ Count: This.text()}).animate(
            { Count: This.parent().attr("data-count")},
            {
                duration: 1000,
                easing: "linear",
                step: function () {
                    This.text(Math.floor(this.Count)
                    )
                },
                complete: function () {
                    This.text((this.Count)
                    )
                },

            }
        )
    })


});











