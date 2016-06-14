THEMEDIR = themes/stainless
SASSDIR = $(THEMEDIR)/sass
CSSDIR = $(THEMEDIR)/static/css
SASSFILES = $(wildcard $(SASSDIR)/*.sass) $(wildcard $(SASSDIR)/*.scss)

build:  css
	hugo

css: $(SASSFILES)
	sass $(SASSDIR)/main.scss:$(CSSDIR)/style.css
	sass $(SASSDIR)/cv.scss:$(CSSDIR)/cv.css

sasswatch:
	sass --watch $(SASSDIR)/main.scss:$(CSSDIR)/style.css

dev:
	hugo server -v --bind="0.0.0.0" --baseURL="http://10.0.0.100:1313/"

deploy: build
	cd public && rsync -v -r . rhay@russellhay.com:/home/www/russellhay/

clean:
	rm -rf public

.PHONY: build
