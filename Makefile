# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SPHINXPROJ    = CoursPythonCPGE
SOURCEDIR     = source
BUILDDIR      = build

deploy:
	make clean &&\
	git worktree prune &&\
	git worktree add build/html gh-pages &&\
	make html &&\
	git config user.email "laurent.garcin@gmail.com" &&\
	git config user.name "lgarcin" &&\
	git add -A &&\
	git commit -a -m "Rebuilt docs" &&\
	git push origin gh-pages

livehtml:
	sphinx-autobuild -B $(SOURCEDIR) $(SPHINXOPTS) $(BUILDDIR)/html

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)