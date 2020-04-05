==========
Complexité
==========

Définition générale
===================

L'analyse de la complexité d'un algorithme consiste à étudier le temps (complexité *temporelle*) ou la mémoire (complexité *spatiale*) nécessaires à l'exécution d'un algorithme. En fait, ce qui nous permettra de mesurer réellement l'efficacité d'un algorithme est l'évolution de la complexité spatiale ou temporelle en fonction de la taille des données.

On peut par exemple utiliser la *commande magique* :code:`%timeit` pour évaluer le temps nécessaire à l'exécution d'une instruction élémentaire dans la console IPython. On montre ci-dessous l'évolution du temps de calcul nécessaire au tri d'un tableau aléatoire dont la taille augmente géométriquement.

.. ipython:: python

    from numpy.random import random
    for n in range(5):
        %timeit sorted(random(10**n))

Bien entendu, le temps ou la mémoire nécessaires à l'exécution d'un algorithme dépendent de nombreux facteurs indépendants de la conception de l'algorithme : machine utilisée, langage employé, ... Cependant, pour comparer l'efficacité de deux algorithmes, il faut trouver un moyen de mesurer leur complexité **intrinsèque**.

En ce qui concerne la complexité temporelle, on procède généralement de la manière suivante : on décompose l'algorithme en instructions élémentaires (affectations, opérations arithmétiques, accès à un élément d'une liste) et on suppose que chacune de ces instructions élémentaires consomme une unité de temps [#elementaire]_. On peut alors évaluer la complexité temporelle de l'algorithme comme la somme de ces coûts élémentaires.

Par exemple, l'algorithme suivant calcule la somme des éléments d'une liste.

.. ipython:: python

    def somme(l):
        s = 0
        for x in l:
            s += x
        return s

Si on considère l'affectation :code:`s = 0` et les "additions/affectations" :code:`s += x` comme des opérations élémentaires, la complexité de cet algorithme est :math:`n+1` où :math:`n` désigne la taille de la liste. Autrement dit, le temps de calcul devrait varier quasi linéairement en fonction de la taille de la liste.

Le test suivant semble corroborer ce résultat. A chaque fois que la taille de la liste est multipliée par 10, le temps de calcul est lui-même approximativement multiplié par 10, du moins lorsque la taille est grande.

.. ipython:: python

    for n in range(1,5):
        l = random(10**n)
        %timeit somme(l)


Différents cas de complexité
============================

La complexité peut dépendre de la taille des données mais elle peut également dépendre de la forme des données. On considère l'algorithme suivant qui recherche un élément à l'intérieur d'une liste.

.. ipython:: python

    def recherche(elt, l):
        for x in l:
            if elt == x:
                return True
        return False

On attribue à chaque test :code:`elt == x` un coût élémentaire. **Dans le meilleur des cas**, l'élément recherché est le premier de la liste et la complexité vaut 1. **Dans le pire des cas**, l'élément recherché n'est pas présent dans la liste et la complexité est égale à la taille de la liste [#complexite_moyenne]_.


Complexité asymtotique
======================

Pour décrire la complexité d'un algorithme, on utilise les notations de Landau et notamment le symbole :math:`\mathcal{O}` [#grand_o]_. Considérons par exemple la fonction suivante.

.. ipython:: python

    def bidon(n):
        s = 0
        for i in range(n):
            for j in range(i):
                s += i**2 * j**2
        return s

Si l'on considère les multiplications, les exponentiations et les sommes/affectations comme des opérations élémentaires, la complexité de cette fonction est

.. math::

    \sum_{i=0}^{n-1}\sum_{j=0}^{i-1}4=2n(n-1)

On pourra dire que la complexité de cette fonction est en :math:`\mathcal{O}(n^2)` [#le_plus_peut_le_moins]_.

On peut employer les adjectifs suivants pour qualifier certains types de complexité.

=========================== =============
Complexité                  Adjectif
=========================== =============
:math:`\mathcal{O}(1)`      constante
:math:`\mathcal{O}(\log n)` logarithmique
:math:`\mathcal{O}(n)`      linéaire
:math:`\mathcal{O}(n^2)`    quadratique
:math:`\mathcal{O}(2^n)`    exponentielle
=========================== =============

On emploiera également le symbole :math:`\Theta`. Si :math:`(u_n)` et :math:`(v_n)` sont deux suites, on dit que :math:`u_n=\Theta(v_n)` si :math:`u_n=\mathcal{O}(v_n)` et :math:`v_n=\mathcal{O}(u_n)`.

.. [#elementaire] Bien entendu, cette hypothèse est fausse en pratique. Une affectation ne prend pas autant de temps qu'une addition.

    .. ipython:: python

        %timeit a = 2
        %timeit 2 + 3

.. [#complexite_moyenne] Si l'on possède des informations statistiques sur les données d'entrée, on peut également tenter de calculer une **complexité en moyenne**.

.. [#grand_o] On rappelle que si :math:`(u_n)` et :math:`(v_n)` sont deux suites, alors :math:`u_n=\mathcal{O}(v_n)` s'il existe une **constante** :math:`K` telle que :math:`|u_n|\leq K|v_n|` à partir d'un certain rang. En pratique, :math:`u_n` et :math:`v_n` désignent des complexités donc ce sont des nombres positifs : on peut donc se dispenser des valeurs absolues.

.. [#le_plus_peut_le_moins] Bien entendu, la complexité est également en :math:`\mathcal{O}(n^3)` ou encore en :math:`\mathcal{O}(n^4)` mais ceci est moins précis que :math:`\mathcal{O}(n^2)`. On peut également dire que la complexité est en :math:`\mathcal{O}(2n^2)` mais cela n'apporte pas plus d'information que :math:`\mathcal{O}(n^2)`.
