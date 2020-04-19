==========
Complexité
==========

Définition générale
===================

L'analyse de la complexité d'un algorithme consiste à étudier le temps (complexité *temporelle*) ou la mémoire (complexité *spatiale*) nécessaires à l'exécution d'un algorithme. En fait, ce qui nous permettra de mesurer réellement l'efficacité d'un algorithme est l'évolution de la complexité spatiale ou temporelle en fonction de la taille des données.

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

.. [#complexite_moyenne] Si l'on possède des informations statistiques sur les données d'entrée, on peut également tenter de calculer une **complexité en moyenne**.

.. [#grand_o] On rappelle que si :math:`(u_n)` et :math:`(v_n)` sont deux suites, alors :math:`u_n=\mathcal{O}(v_n)` s'il existe une **constante** :math:`K` telle que :math:`|u_n|\leq K|v_n|` à partir d'un certain rang. En pratique, :math:`u_n` et :math:`v_n` désignent des complexités donc ce sont des nombres positifs : on peut donc se dispenser des valeurs absolues.

.. [#le_plus_peut_le_moins] Bien entendu, la complexité est également en :math:`\mathcal{O}(n^3)` ou encore en :math:`\mathcal{O}(n^4)` mais ceci est moins précis que :math:`\mathcal{O}(n^2)`. On peut également dire que la complexité est en :math:`\mathcal{O}(2n^2)` mais cela n'apporte pas plus d'information que :math:`\mathcal{O}(n^2)`.
