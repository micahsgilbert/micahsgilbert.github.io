$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    $('body, html').animate({scrollTop: $id.offset().top}, 1000);
});

$(document).scroll(() => {
    if ($(document).scrollTop() == 0) {
        $("#down-arrow-event-listener").css("visibility", "")
        $("#down-arrow").css("visibility", "")
    } else {
        $("#down-arrow-event-listener").css("visibility", "hidden")
        $("#down-arrow").css("visibility", "hidden")
    }
})

$(document).ready(() => {
    const audio = new Audio("https://micahsgilbert.dev/bruh.mp3")

    function bruh() {
        const duplicate = audio.cloneNode()
        duplicate.play()
    }
    
    const html = document.getElementsByTagName("html")[0]
    
    html.onmousedown = bruh
    
    const texts = ["input", "textarea", "div"]
    
    for (let t of texts) {
        for (let elem of document.getElementsByTagName(t)) {
            elem.onkeydown = bruh
        }
    }
})
