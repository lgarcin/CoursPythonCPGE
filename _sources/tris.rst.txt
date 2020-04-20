====
Tris
====

On décrit les algorithmes au programmme permettant de trier un tableau de valeurs numériques.

Tri par insertion
=================

Le principe est très simple : c'est l'algorithme qu'utilise naturellement l'être humain pour trier des objets comme par exemple des cartes à jouer.

On procède en plusieurs étapes. On suppose qu'à l'étape :math:`i`, les éléments d'indice :math:`0` à :math:`i-1` du tableau sont déjà triés et on insère alors l'élément d'indice :math:`i` à sa place parmi les éléments précédents.

Un dessin vaut probablement mieux qu'un long discours.

.. jupyter-execute:: _scripts/tri_insertion.py
    :hide-code:

On peut alors proposer la fonction Python suivante.

.. ipython:: python

    def tri_insertion(tab):
        for i in range(1,len(tab)):
            val = tab[i]
            pos = i
            while pos > 0 and tab[pos - 1] > val:
                tab[pos] = tab[pos-1]
                pos -= 1
            tab[pos] = val

On vérifie qu'elle fonctionne bien sur quelques tableaux choisis aléatoirement.

.. ipython:: python

    from numpy.random import randint
    tab = randint(100, size=20)
    tab
    tri_insertion(tab)
    tab

.. todo:: preuve de l'algorithme + complexité

Tri rapide
==========

Le **tri rapide** est une application du principe *diviser pour régner*. Il consiste

* à choisir un élément du tableau à trier comme *pivot* ;
* à séparer le tableau à trier en deux sous-tableaux contenant respectivement les éléments inférieurs et supérieurs au pivot ;
* et à répéter le processus sur les deux sous-tableaux.

.. jupyter-execute:: _scripts/tri_rapide.py
    :hide-code:

Comme tout algorithme du type *diviser pour régner*, le tri rapide se prête bien à une implémentation récursive [#tri_rapide_pythonesque]_.


.. ipython:: python

    from numpy.random import choice

    def tri_rapide(tab):
        if len(tab) == 0:
            return []
        pivot = choice(tab)     # Choix aléatoire d'un élément comme pivot
        t1, t2, t3 = [], [], []
        for x in tab:
            if x < pivot:
                t1.append(x)
            elif x > pivot:
                t2.append(x)
            else:
                t3.append(x)
        return tri_rapide(t1) + t3 + tri_rapide(t2)

.. ipython:: python

    from numpy.random import randint

    tab = randint(100, size=10)
    tab
    tri_rapide(tab)

L'algorithme précédent crée une nouvelle liste à chaque appel de la fonction :code:`tri_rapide`. D'un point de vue de l'utilisation de la mémoire, on peut préférer effectuer un tri *en place* : on modifie le tableau au cours de l'algorithme de tri.

.. ipython:: python

    def partition(tab, g, d, p):
        j = g
        tab[p], tab[d] = tab[d], tab[p]
        for i in range(g, d):
            if tab[i] <= tab[d]:
                tab[i], tab[j] = tab[j], tab[i]
                j += 1
        tab[d], tab[j] = tab[j], tab[d]
        return j


    def tri_rapide(tab, g=0, d=None):
        if d == None:
            d = len(tab) - 1
        if g < d:
            p = randint(g, d + 1)
            pp = partition(tab, g, d, p)
            tri_rapide(tab, g, pp - 1)
            tri_rapide(tab, pp + 1, d)

.. ipython:: python

    tab = randint(100, size=10)
    tab
    tri_rapide(tab)
    tab



Tri par fusion
==============

Le **tri par fusion** est également une application du principe *diviser pour régner*. Il consiste

* à séparer la liste à trier en deux-sous listes si elle contient plus d'un élément ;
* appliquer l'algorithme de tri aux deux sous-listes ;
* fusionner les deux sous-listes triées en une liste triée.

L'algorithme de tri par fusion est de nature récursive par définition.

.. ipython:: python

    def tri_fusion(tab):
        if len(tab) < 2:
            return tab
        else:
            m = len(tab)//2
            return fusion(tri_fusion(tab[:m]), tri_fusion(tab[m:]))

Le principe de fusion de deux listes triées en une liste triée est très simple :

* on compare les deux premiers éléments de chacune des listes ;
* on déplace le plus petit d'entre eux de la liste auquel il appartient vers la fin de la liste à renvoyer ;
* on répète le processus jusqu'à ce qu'une des deux listes soient vides ;
* on ajoute l'intégralité de l'autre liste à la fin de la liste à renvoyer.

.. ipython:: python

    def fusion(t1, t2):
        t = []
        while t1 and t2:
            if t1[0] < t2[0]:
                t.append(t1.pop(0))
            else:
                t.append(t2.pop(0))
        if t1:
            t.extend(t1)
        else:
            t.extend(t2)
        return t

.. ipython:: python

    from numpy.random import randint
    tab = list(randint(100, size=20))
    tab
    tri_fusion(tab)

On peut également donner une implémentation récursive de l'lagorithme de fusion.

.. ipython:: python

    def fusion(t1, t2):
        if not t1:
            return t2
        if not t2:
            return t1
        if t1[0] < t2[0]:
            return [t1[0]] + fusion(t1[1:], t2)
        else:
            return [t2[0]] + fusion(t1, t2[1:])


.. ipython:: python

    from numpy.random import randint
    tab = list(randint(100, size=10))
    tab
    tri_fusion(tab)


.. [#tri_rapide_pythonesque] On peut également proposer une implémentation tirant partie des spécificités de Python (listes en compréhension).

    .. ipython:: python

        from numpy.random import choice

        def tri_rapide(tab):
            if len(tab) == 0:
                return []
            pivot = choice(tab)
            return tri_rapide([x for x in tab if x < pivot]) +\
                [x for x in tab if x == pivot] +\
                tri_rapide([x for x in tab if x > pivot])


    .. ipython:: python

        from numpy.random import randint
        tab = randint(100, size=10)
        tab
        tri_rapide(tab)
