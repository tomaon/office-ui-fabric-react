#
default: watch

$(VERBOSE).SILENT:

#
install ls update:
	npm $@
build watch:
	npm run-script $@

#
clean: rm-autosave rm-dist rm-log

rm-autosave:
	find . -name "*~" | xargs rm -f
rm-dist:
	rm -rf dist
rm-log:
	rm -f npm-debug.log
