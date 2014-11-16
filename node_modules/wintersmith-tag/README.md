wintersmith-tag
==================

This is a plugin for [Wintersmith](https://github.com/jnordberg/wintersmith). It allows you to add tags to articles and list articles by tags.

For a complete example, please take a look at [thecoolwei.com](http://thecoolwei.com) and its [source](https://github.com/weiribao/weiribao.github.io).

## How to use

### Step1: install

Install globally or locally using npm

```
npm install [-g] wintersmith-tag
```

and add `wintersmith-tag` to your project's config.json

```json
{
  "plugins": [
    "wintersmith-tag"
  ]
}
```

### Step2: set plugin options
You can specify options in config.json

```json
{
    "tag": {
        "template": "tag-index.jade",
        "perPage": 4
    }
}
```

This plugin is based on the built-in paginator plugin, so it uses the paginator's options by default. The only exception is it has its own default for `filename`. This is can be best understood by looking at the source code

```coffeescript
paginatorDefaults =
    template: 'index.jade' # template that renders pages
    articles: 'articles' # directory containing contents to paginate
    first: 'index.html' # filename/url for first page
    filename: 'page/%d/index.html' # filename for rest of pages
    perPage: 2 # number of articles per page

tagDefaults = 
    filename: 'tag/%s/%d/index.html' # => tag/:tagName/:pageNum/index.html
    
options = _.extend {}, paginatorDefaults, env.config.paginator, tagDefaults, env.config.tag
```

### Step3: add tags to articles
Just add `tags` to the metadata section of the article. Seperate multple tags by comma. Tag name can contain space.

```
---
title: Hello world
date: 2012-10-14 8:31
template: article.jade
tags: Algorithm, a happy story
---
```

### Step4: modify your template
Several new context variables and helper funtions are available in the template now.

#### tagName
The `tagName` variable contains the tag name that articles are filtered by.

#### env.helpers.getAllTags()
This function returns all tags in the project. It can be used to create a tag cloud on your frontpage, for example.

#### env.helpers.getArticlesByTag(tagName)
Returns all articles that has tag `tagName`

#### env.helpers.getTagHome(tagName)
Returns a `page` object that reperents the first page of the article list filtered by `tagName`. You can create a link to this page in template like

```jade
a(href=env.helpers.getTagHome(tagName).url)= tagName
```
#### env.helpers.getTagsFromArticle(article)
Returns an array of tags of current article.

```jade
- var tags = env.helpers.getTagsFromArticle(page)
each tag in tags
    a.big-tag(href=env.helpers.getTagHome(tag).url)= tag
```
### Step5: build & done!
```
wintersmith build -v
```
Lists of articles filtered by tags have been created successfully!
```
/tag/algorithm/1/index.html
/tag/algorithm/2/index.html
...
```
