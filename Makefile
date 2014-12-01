build: node_modules
	node_modules/hexo/bin/hexo gzip

dev: node_modules
	node_modules/hexo/bin/hexo server --debug

deploy: build
	node_modules/hexo/bin/hexo deploy

clean:
	node_modules/hexo/bin/hexo clean

node_modules: package.json
	npm install

.PHONY: build
