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
IMAGES 			= $(addprefix $(IMAGEDIR)/,hanoi.gif recherche_chaine_lose.gif recherche_chaine_win.gif tri_insertion.gif tri_rapide.png)
SCRIPTSDIR		= $(SOURCEDIR)/_scripts

deploy:
	make clean &&\
	git worktree remove build/html --force
	git worktree prune &&\
	git worktree add build/html gh-pages &&\
	make html &&\
	git config user.email "laurent.garcin@gmail.com" &&\
	git config user.name "lgarcin" &&\
	git add -A &&\
	git commit -a -m "Rebuilt docs" &&\
	git push origin gh-pages
	git worktree remove build/html

livehtml: $(IMAGES)
	@$(SPHINXAUTOBUILD) -B $(SOURCEDIR) $(SPHINXOPTS) $(BUILDDIR)/html

html: $(IMAGES)
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS)

$(IMAGEDIR)/hanoi.gif: $(SCRIPTSDIR)/hanoi.py
	@python $<

$(IMAGEDIR)/recherche_chaine_lose.gif $(IMAGEDIR)/recherche_chaine_win.gif: $(SCRIPTSDIR)/recherche_chaine.py
	@python $<

$(IMAGEDIR)/tri_insertion.gif: $(SCRIPTSDIR)/tri_insertion.py
	@python $<

$(IMAGEDIR)/tri_rapide.png: $(SCRIPTSDIR)/tri_rapide.py
	@python $<

images:
	@for i in $(IMAGES); do \
		make --no-print-directory $$i; \
	done

clean:
	rm -rf $(BUILDDIR)/*