======================
Preuves et complexités
======================

Algorithme d'Euclide étendu
===========================

On rappelle la définition de l'algorithme en Python.

.. ipython:: python

    def bezout(a, b):
        s, t, u, v = 1, 0, 0, 1
        while b != 0:
            q = a // b
            a, s, t, b, u, v = b, u, v, a - q * b, s - q * u, t - q * v
        return (a, s, t) if a > 0 else (-a, -s, -t)     # Le pgcd doit être positif

Tout d'abord, l'algorithme se termine car :code:`b` est un entier naturel qui décroît strictement à chaque itération de la boucle :code:`while`.

Ensuite, en notant :math:`a_0` et :math:`b_0` les valeurs initiales de :math:`a` et :math:`b`, on peut prouver que les égalités :math:`a_0s+b_0t=a` et :math:`a_0u+b_0v=b` sont des invariants de boucle.

Comme à la fin de l'algorithme, :math:`b` vaut le pgcd de :math:`a_0` et :math:`b_0` (cf. :ref:`Preuve d'un algorithme`), l'algorithme fournit bien le résultat attendu.


Recherche par dichotomie
========================

On rappelle l'algorithme en Python.

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

Notons :math:`n` la taille de la liste à trier.
