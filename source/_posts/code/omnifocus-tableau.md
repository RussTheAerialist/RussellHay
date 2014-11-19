title: omnifocus + tableau
date: 2014-11-18 16:24:20
tags:
  - code
  - productivity
  - gtd
  - kanban
  - pkflow
---
I'll freely admit that I'm a productivity geek.  I love tools, optimizing my process, and being able to show progress across a number of different axies in my life. To that end, I'm always search for the ultimate tool which I know doesn't exist, but nonetheless, the search continues.

Enter [Omnifocus](https://www.omnigroup.com/omnifocus) (*note: you need the pro version for this to work*).  It's a pretty good tool for building a task/project tracking system. It basically enables [gtd](http://www.amazon.com/gp/product/B000WH7PKY/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000WH7PKY&linkCode=as2&tag=loggerblogger-20&linkId=NFMFF2ZRSQOBNZBV) in a very well-designed experience with syncing across any apple device, and since Apple's [Core Data](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/CoreData/cdProgrammingGuide.html) uses SQLite for it's storage backend, getting data out of Omnifocus is stupidly easy, and someone has already done most of the work for me.

[kanban-fetch](http://1klb.com/projects/kanban-fetch/) and [of-store](http://1klb.com/projects/of-store/) are two similar tools that get data out of omnifocus into an definable sqlite database, but that's only half the story.

[Tableau](http://tableausoftware.com) is a great data visualization tool (*disclaimer: I work there*) which I wanted to use to build a dashboard for my task overview and my weekly review.

![Tableau Dashboard of Tasks, Projects and Goals](dashboard.png)

But Tableau doesn't yet talk to SQLite, so we need to export it into CSV so that we can use the data in Tableau.  Luckily, that's super easy and here is a [gist](https://gist.github.com/RussTheAerialist/70c453a530eb08b4cdfe) for it.

Basically I dump the three tables generated from the `kanban-fetch` and `of-store` tools.  This gives us `tasks.csv`, `projects.csv`, and `kanban.csv`. Kanban is the active projects, and tasks and projects are completed tasks and projects only.

Once we load that into Tableau, there is a little of data massaging that has to happen because SQLite dumps the datas in UNIX EPOCH format, which doesn't make Tableau happy, so we need to convert them.  It's easy, though, to convert an epoch field into a datetime field using a calculated field:

`DATEADD("hour",-8,(Date("1/1/1970") + ([Completion Date]/86400)))`
You'll want to do this for all of the date fields you care about. Once we get that setup, we can do things like calculate task duration:

`
IF [task completion date] - [task creation date] < 1
THEN 1
ELSE [task completion date] - [task creation date]
END
`

Because we want the task to always show up as at least a single day, the calculated field needs to be a little more complicated as you can see above.

### How I setup Omnifocus for goal tracking.

One thing that I do in Omnifocus is setup folders in my projects view so that I can keep goals separate from other projects.  Goals usually have some repeating tasks/projects, so those are important to keep separate from one-shot projects for long-term tracking purposes.

![omnifocus-projects.png](omnifocus-projects.png)

As you can see from the above screenshot, I have goals, projects, work, and someday/maybe as my top level project folders.  For the real projects, they are things that move me towards the goals and show up in the data source as pipe-delimited strings in the ancestors field of the task and project tables.  Great, a little string manipulation and I can slice and dice my folder structure in a meaningful way in Tableau.

If you'd like to use my viz you can download it off of Tableau Public and then replace the data source with your own csv files.  [Omnifocus Viz](https://public.tableausoftware.com/views/Omnifocus/Overview?:embed=y&:display_count=no)

<script type='text/javascript' src='https://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 1024px; height: 694px;'><noscript><a href='http:&#47;&#47;russellhay.com&#47;2014&#47;code&#47;omnifocus-tableau&#47;'><img alt='Overview ' src='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Om&#47;Omnifocus&#47;Overview&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='1024' height='694' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Omnifocus&#47;Overview' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Om&#47;Omnifocus&#47;Overview&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div><div style='width:1024px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/Omnifocus/Overview' target='_blank'>Learn About Tableau</a></div></div>