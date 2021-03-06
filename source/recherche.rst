========================
Algorithmes de recherche
========================



Recherche d'un élément dans une liste
=====================================


Il faut noter que Python dispose déjà de l'opérateur :code:`in` pour tester si un élément figure dans une liste.

.. ipython:: python

    2 in [5, 4, 1, 2, 3]
    6 in [5, 4, 1, 2, 3]

La méthode :code:`index` permet de renvoyer l'indice de l'élément dans la liste s'il a été trouvé.

.. ipython:: python
    :okexcept:

    [5, 4, 1, 2, 3].index(2)
    [5, 4, 1, 2, 3].index(6)



On peut néanmoins proposer notre propre algorithme : il suffit de balayer la liste et de renvoyer :code:`True` dès qu'on trouve l'élément recherché et :code:`False` si on a parcouru toute la liste sans trouver l'élément.

.. ipython:: python

    def appartient(elt, lst):
        for e in lst:
            if e == elt:
                return True
        return False

    appartient(2, [5, 4, 1, 2, 3])
    appartient(6, [5, 4, 1, 2, 3])

On peut également proposer une version qui renvoie l'indice la première occurence de l'élément recherché s'il est trouvé et :code:`None` sinon.

.. ipython:: python

    def indice(elt, lst):
        for i in range(len(lst)):
            if lst[i] == elt:
                return i
        return None

    indice(2, [5, 4, 1, 2, 3])
    indice(6, [5, 4, 1, 2, 3])  # L'interpréteur IPython n'affiche pas None



Recherche par dichotomie dans une liste triée
=============================================

Lorsque l'on dispose d'une liste triée par ordre croissant, on peut grandement améliorer notre algorithme en utilisant le principe de **dichotomie**.

* On recherche tout d'abord l'élément central de la liste.
* Si c'est l'élément recherché, on s'arrête. Sinon, on le compare à l'élément recherché.
* Si l'élément recherché est inférieur à l'élément central, on le recherche dans la première partie de la liste. Sinon, on le recherche dans la deuxième partie de la liste.
* On retourne donc à la première étape de notre algorithme appliqué à l'une des deux demi-listes.

.. ipython:: python

    def appartient_dicho(elt, lst):
        g = 0
        d = len(lst) - 1
        while g <= d:
            m = (g + d) // 2
            if lst[m] == elt:
                return True
            if elt < lst[m]:
                d = m - 1
            else:
                g = m + 1
        return False

    appartient_dicho(13, [1, 3, 5, 7, 8, 10, 13, 14, 17, 19])
    appartient_dicho(18, [1, 3, 5, 7, 8, 10, 13, 14, 17, 19])

Comme souvent, un dessin vaut mieux qu'un long discours. On donne deux exemples d'application de cet algorithme.

.. rubric:: Recherche de :code:`5` dans la liste :code:`[1, 3, 5, 7, 8, 10, 13, 14, 17, 19, 20]`

.. tikz::
    :libs: matrix

    \tikzset{g/.style={fill=gray!10,draw}}
    \tikzset{b/.style={fill=blue!10,draw}}
    \tikzset{r/.style={fill=red!10,draw}}
    \tikzset{t/.style={fill=green!10,draw}}
    \tikzset{every node/.style={text height=1.5ex, text depth=.25ex}}
    \matrix[matrix of nodes, row sep=4em, nodes = {minimum width = 2em, minimum height = 2em}](recherche){
        |[b]|1 & |[b]|3 & |[b]|5 & |[b]|7 & |[b]|8 & |[r]|10 & |[b]|13 & |[b]|14 & |[b]|17 & |[b]|19 & |[b]|20\\
        |[b]|1 & |[b]|3 & |[t]|5 & |[b]|7 & |[b]|8 & |[g]|10 & |[g]|13 & |[g]|14 & |[g]|17 & |[g]|19 & |[g]|20\\
    };
    \node[below of=recherche-1-1](g1){\tt g};
    \draw[->](g1)--(recherche-1-1);
    \node[below of=recherche-1-11](d1){\tt d};
    \draw[->](d1)--(recherche-1-11);
    \node[above of=recherche-1-6](m1){\tt m};
    \draw[->](m1)--(recherche-1-6);

    \node[below of=recherche-2-1](g2){\tt g};
    \draw[->](g2)--(recherche-2-1);
    \node[below of=recherche-2-5](d2){\tt d};
    \draw[->](d2)--(recherche-2-5);
    \node[above of=recherche-2-3](m2){\tt m};
    \draw[->](m2)--(recherche-2-3);


.. rubric:: Recherche de :code:`13` dans la liste :code:`[1, 3, 5, 7, 8, 10, 13, 14, 17, 19]`

.. tikz::
    :libs: matrix

    \tikzset{g/.style={fill=gray!10,draw}}
    \tikzset{b/.style={fill=blue!10,draw}}
    \tikzset{r/.style={fill=red!10,draw}}
    \tikzset{t/.style={fill=green!10,draw}}
    \tikzset{every node/.style={text height=1.5ex, text depth=.25ex}}
    \matrix[matrix of nodes, row sep=4em, nodes = {minimum width = 2em, minimum height = 2em}](recherche){
        |[b]|1 & |[b]|3 & |[b]|5 & |[b]|7 & |[r]|8 & |[b]|10 & |[b]|13 & |[b]|14 & |[b]|17 & |[b]|19\\
        |[g]|1 & |[g]|3 & |[g]|5 & |[g]|7 & |[g]|8 & |[b]|10 & |[b]|13 & |[r]|14 & |[b]|17 & |[b]|19\\
        |[g]|1 & |[g]|3 & |[g]|5 & |[g]|7 & |[g]|8 & |[r]|10 & |[b]|13 & |[g]|14 & |[g]|17 & |[g]|19\\
        |[g]|1 & |[g]|3 & |[g]|5 & |[g]|7 & |[g]|8 & |[g]|10 & |[t]|13 & |[g]|14 & |[g]|17 & |[g]|19\\
    };
    \node[below of=recherche-1-1](g1){\tt g};
    \draw[->](g1)--(recherche-1-1);
    \node[below of=recherche-1-10](d1){\tt d};
    \draw[->](d1)--(recherche-1-10);
    \node[above of=recherche-1-5](m1){\tt m};
    \draw[->](m1)--(recherche-1-5);

    \node[below of=recherche-2-6](g2){\tt g};
    \draw[->](g2)--(recherche-2-6);
    \node[below of=recherche-2-10](d2){\tt d};
    \draw[->](d2)--(recherche-2-10);
    \node[above of=recherche-2-8](m2){\tt m};
    \draw[->](m2)--(recherche-2-8);

    \node[below of=recherche-3-6](g3){\tt g};
    \draw[->](g3)--(recherche-3-6);
    \node[below of=recherche-3-7](d3){\tt d};
    \draw[->](d3)--(recherche-3-7);
    \node[above of=recherche-3-6](m3){\tt m};
    \draw[->](m3)--(recherche-3-6);

    \node[below of=recherche-4-7](gd){\tt{g=d}};
    \draw[->](gd)--(recherche-4-7);
    \node[above of=recherche-4-7](m4){\tt m};
    \draw[->](m4)--(recherche-4-7);

A nouveau, on peut proposer une version qui renvoie l'indice de la première occurence de l'élément recherché plutôt qu'un booléen.

.. ipython:: python

    def indice_dicho(elt, lst):
        g = 0
        d = len(lst) - 1
        while g <= d:
            m = (g + d) // 2
            if lst[m] == elt:
                return m
            if elt < lst[m]:
                d = m - 1
            else:
                g = m + 1
        return None

    indice_dicho(13, [1, 3, 7, 8, 10, 13, 14, 17, 19])
    indice_dicho(18, [1, 3, 7, 8, 10, 13, 14, 17, 19])  # L'interpréteur IPython n'affiche pas None


On peut également proposer une version **récursive**.

.. ipython:: python

    def appartient_dicho_recursif(elt, lst):
        if len(lst) == 1:
            return elt == lst[0]
        m = len(lst)//2
        if elt == lst[m]:
            return True
        if elt < lst[m]:
            return appartient_dicho_recursif(elt, lst[:m-1])
        else:
            return appartient_dicho_recursif(elt, lst[m+1:])
        return False

    appartient_dicho_recursif(13, [1, 3, 5, 7, 8, 10, 13, 14, 17, 19])
    appartient_dicho_recursif(18, [1, 3, 5, 7, 8, 10, 13, 14, 17, 19])


Recherche du maximum ou du minimim d'une liste
==============================================

On suppose qu'on dispose d'une liste d'éléments que l'on peut comparer les uns aux autres et on cherche à déterminer le plus grand ou le plus petit élément. Python dispose déjà de deux fonctions :code:`min` et :code:`max` pour effectuer cette tâche.

.. ipython:: python

    lst = [5, -7, 4, -3, 2, 10]
    min(lst), max(lst)

On peut également proposer notre algorithme. Rien de bien difficile, il suffit de parcourir un à un les éléments de la liste et de comparer chaque élément au minimum ou maximum des éléments précédents.


.. ipython:: python

    def minmax(lst):
        m, M = None, None
        for elt in lst:
            if m is None or m > elt:
                m = elt
            if M is None or M < elt:
                M = elt
        return m, M

    minmax([5, -7, 4, -3, 2, 10])


Recherche d'une sous-chaîne dans une chaîne de caractères
=========================================================

L'objectif est de retrouver une sous-chaîne (qu'on appellera *motif*) dans une chaîne de caractères. Par exemple, la chaîne :code:`"pitapipapa"` contient le motif :code:`"pipa"` mais pas le motif :code:`"tapi"`. Python propose déjà cette fonctionnalité à l'aide de l'opérateur :code:`in`.

.. ipython:: python

    "pipa" in "pitapipapa"
    "tapa" in "pitapipapa"

La méthode :code:`index` permet de renvoyer l'indice du caractère où a été trouvé le motif le cas échéant.

.. ipython:: python
    :okexcept:

    "pitapipapa".index("pipa")
    "pitapipapa".index("tapa")


On présente ici un algorithme naïf qui est assez peu efficace mais qui a le mérite d'être très facile à comprendre : on prend successivement chaque caractère de la chaîne comme point de départ et on compare les caractères de la chaîne et les caractères du motif à partir de ce point de départ.


.. ipython:: python

    def recherche_chaine(chaine, motif):
        n = len(chaine)
        m = len(motif)
        for ind in range(n-m+1):
            nb = 0
            while nb < m and chaine[ind+nb] == motif[nb]:
                nb +=1
            if nb == m:
                return True
        return False

    recherche_chaine("pitapipapa", "pipa")
    recherche_chaine("patapipapa", "tapa")


.. jupyter-execute:: _scripts/recherche.py
    :hide-code:

**Succès**

.. jupyter-execute:: _scripts/recherche_win.py
    :hide-code:

**Echec**

.. jupyter-execute:: _scripts/recherche_lose.py
    :hide-code:

On peut à nouveau proposer une version de l'algorithme qui renvoie l'indice de la *première occurence* rencontrée.

.. ipython:: python

    def indice_chaine(chaine, motif):
        n = len(chaine)
        m = len(motif)
        for ind in range(n-m):
            nb = 0
            while nb < m and chaine[ind+nb] == motif[nb]:
                nb +=1
            if nb == m:
                return nb
        return None

    indice_chaine("pitapipapa", "pipa")
    indice_chaine("patapipapa", "tapa")     # L'interpréteur IPython n'affiche pas None


.. rubric:: Notes
