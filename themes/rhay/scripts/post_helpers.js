hexo.extend.helper.register("get_post_template", function(post) {
   if (post.video) {
       return "_video_post.jade";
   }

   return "_text_post.jade";
});

hexo.extend.helper.register("video", function(post) {
    var id = post.video;
    var vtype = post.videotype;

    if (vtype === "youtube") {
        return '<div class="video-container"><iframe src="//www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
    }

    if (vtype === "vimeo") {
        return '<div class="video-container"><iframe src="//player.vimeo.com/video/' + id + '" frameborder="0" allowfullscreen></iframe></div>';
    }

    return id;
});
