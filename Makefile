# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    	=
SPHINXBUILD   	= sphinx-build
SPHINXAUTOBUILD = sphinx-autobuild
SPHINXPROJ    	= CoursPythonCPGE
SOURCEDIR     	= source
BUILDDIR      	= build
IMAGEDIR 		= $(SOURCEDIR)/_images
IMAGES 			= $(addprefix $(IMAGEDIR)/,tri_rapide.png)
SCRIPTSDIR		= $(SOURCEDIR)/_scripts

deploy:
	make clean &&\
	git worktree prune &&\
	git worktree add build/html gh-pages &&\
	make html &&\
	git config user.email "laurent.garcin@gmail.com" &&\
	git config user.name "lgarcin" &&\
	cd build/html &&\
	git add -A &&\
	git commit -a -m "Rebuilt docs" &&\
	git push origin gh-pages

	# git worktree remove build/html

livehtml: $(IMAGES)
	@$(SPHINXAUTOBUILD) -B $(SOURCEDIR) $(SPHINXOPTS) $(BUILDDIR)/html

html: $(IMAGES)
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS)

$(IMAGEDIR)/tri_rapide.png: $(SCRIPTSDIR)/tri_rapide.py
	@python $<

images:
	@for i in $(IMAGES); do \
		make --no-print-directory $$i; \
	done

clean:
	rm -rf $(BUILDDIR)/*