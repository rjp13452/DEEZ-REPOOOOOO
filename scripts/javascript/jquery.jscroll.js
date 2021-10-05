let page = 1;
let currentscrollHeight: 0;
let lockScroll: false;

$(window).on("scroll", () => {
    const scrollHeight = $(document).height() as number;
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    const isBottom = scrollHeight - 300 < scrollPos;

    if (isBottom && currentscrollHeight < scrollHeight) {

        $.ajax({
            method: "POST",
            url: "/api/search",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ page: this.page })
        } as any)
        .done((posts: Post[]) => {
            this.page = this.page + 1;
            // do whatever
        });

        currentscrollHeight = scrollHeight;
    }
});