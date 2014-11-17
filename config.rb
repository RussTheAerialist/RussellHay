set :slim, layout_engine: :slim

activate :automatic_image_sizes
configure :development do
   activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :blog do |blog|
    blog.permalink = "{category}/{title}/index.html"
    blog.sources = "blog/{category}/{title}.html"
    blog.taglink = "tag/{tag}"
    blog.paginate = true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end
