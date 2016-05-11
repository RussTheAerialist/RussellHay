THEMEDIR = themes/stainless
SASSDIR = $(THEMEDIR)/sass
CSSDIR = $(THEMEDIR)/static/css
SASSFILES = $(wildcard $(SASSDIR)/*.sass) $(wildcard $(SASSDIR)/*.scss)

build:  css
	hugo

css: $(SASSFILES)
	sass $(SASSDIR)/main.scss:$(CSSDIR)/style.css

sasswatch:
	sass --watch $(SASSDIR)/main.scss:$(CSSDIR)/style.css

dev:
	hugo server -v --bind="0.0.0.0" --baseURL="http://10.0.0.100:1313/"

deploy: build
	echo "TBD"

clean:
	rm -rf public

.PHONY: build
