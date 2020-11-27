# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    	=
SPHINXBUILD   	= sphinx-build
SPHINXAUTOBUILD = sphinx-autobuild
SPHINXPROJ    	= CoursPythonCPGE
SOURCEDIR     	= source
BUILDDIR      	= build
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

livehtml:
	@$(SPHINXAUTOBUILD) $(SOURCEDIR) $(SPHINXOPTS) $(BUILDDIR)/html

html:
	@$(SPHINXBUILD) $(SOURCEDIR) $(BUILDDIR)/html $(SPHINXOPTS)

clean:
	rm -rf $(BUILDDIR)/*