=======
Boucles
=======

Comme dans beaucoup de langages de programmation, il existe deux types de boucles en Python :

    * les boucles inconditionnelles qui permettent d'exécuter un bloc d'instructions un nombre de fois fixé à l'avance ;

    * les boucles conditionnelles qui permettent l'exécution d'un code tant qu'une condition est remplie.


Boucles inconditionnelles
=========================

Les boucles inconditionnelles en Python permettent de parcourir un objet de type *itérable* [#iterable]_ (comme une liste, un tuple ou une chaîne de caractères) élément par élément.

De manière générale, on utilise les mots-clés :code:`for` et :code:`in`.

::

    for <element> in <iterable>:
        <instruction1>
        <instruction2>
        ...

On peut itérer aussi bien sur des listes

.. ipython:: python

    for elt in [1, 'toto', 2.34]:
        print(elt)

que sur des tuples

.. ipython:: python

    for elt in 5, 6, 'tata':    # pas besoin de parenthèses pour le tuple dans ce cas
        print(elt)

et même sur des chaînes de caractère.

.. ipython:: python

    for elt in 'blabla':
        print(elt)


.. rubric:: La fonction :code:`range`

La fonction :code:`range` renvoie un itérable contenant des entiers. Plus précisément, lorsque :code:`a, b, c` sont des entiers (:code:`c!=0`),

    * :code:`range(a)` contient les entiers :code:`0, 1, 2, ..., a-2, a-1` (aucun si :code:`a <= 0`) ;

    .. ipython:: python

        for i in range(5):
            print(i)

    .. ipython:: python

        for i in range(-5):
            print(i)

    * :code:`range(a, b)` contient les entiers :code:`a, a+1, a+2, ..., b-2, b-1` (aucun si :code:`b <= a`) ;

    .. ipython:: python

        for i in range(3, 8):
            print(i)

    .. ipython:: python

        for i in range(8, 3):
            print(i)

    * :code:`range(a, b, c)` contient les entiers :code:`a, a+c, a+2c, ...` jusqu'à atteindre :code:`b` exclu (aucun si :code:`c*(b-a)<=0`).

    .. ipython:: python

        for i in range(4, 9, 2):
            print(i)

    .. ipython:: python

        for i in range(9, 4, 2):
            print(i)

    .. ipython:: python

        for i in range(9, 4, -2):
            print(i)

    .. ipython:: python

        for i in range(4, 9, -2):
            print(i)


Listes en compréhension
=======================

En mathématiques, il existe plusieurs manières de décrire un même ensemble. L'ensemble :math:`\mathcal{A}` des entiers pairs compris entre 0 et 19 peut être défini en *extension* :

.. math::

    \mathcal{A}=\{0,2,4,6,8,10,12,14,16,18\}

Il peut également être décrit en *compréhension* :

.. math::

    \mathcal{A}=\{2n,\;n\in[\![0,9]\!]\}

De la même manière, la liste de ces entiers peut être défini en Python en extension :

.. ipython:: python

    [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

et en compréhension :

.. ipython:: python

    [2*n for n in range(10)]

On parle alors de *liste en compréhension*.

Une autre manière de définir :math:`\mathcal{A}` en compréhension est la suivante :

.. math::

    \mathcal{A} = \{x\in[\![0,19]\!],\;x\equiv0[2]\}

La version correspondante en Python est :

.. ipython:: python

    [n for n in range(20) if n%2==0]

Bien entendu, on peut utiliser ce type de liste pour d'autres objets que des entiers [#listcomp]_.

.. ipython:: python

    [s.upper() for s in ('toto', 'tata', 'titi', 'zozo', 'zaza', 'zizi') if s[0]=='t']



Boucles conditionnelles
=======================

Une boucle conditionnelle consiste à répéter un bloc d'instructions **tant qu'une condition est vraie**. On emploie pour cela le mot-clé :code:`while`.

.. ipython:: python

    a, b = 15, 6
    q, r = 0, a
    while r >= b:
        q += 1
        r -= b
    print(q, r)

Lorsque l'on "sort" de la boucle :code:`while`, on est assuré que la condition suivant le mot-clé :code:`while` est **fausse**.

.. warning::

	Contrairement aux boucles inconditionnelles, il est facile de créer des boucles conditionnelles *infinies* [#generateur]_. En effet, la condition suivant l'instruction :code:`while` peut s'avérer ne jamais être fausse. On peut par exemple méditer l'exemple suivant qui n'est qu'une très subtile modification de l'exemple précédent.

    .. code-block:: python

        a, b = 15, -6
        q, r = 0, a
        while r >= b:
            q += 1
            r -= b
        print(q, r)


Les instructions :code:`break` et :code:`continue`
==================================================

Ces deux instructions permettent d'altérer le cours normal d'une boucle.

L'instruction :code:`break` permet de sortir d'une boucle sans avoir effectué toutes les itérations.

.. ipython:: python

    i = 0
    while i < 5:
        i += 1
        print(i)
        break

.. ipython:: python

    for i in range(10):
        print(i)
        if i > 5:
            print("sortie")
            break

En cas de boucles *imbriquées*, l'instruction :code:`break` permet de quitter la boucle la plus *interne* dans laquelle elle figure.

.. ipython:: python

    for i in range(5):
        print('i =', i)
        for j in range(5):
            if j > 2:
                break
            print('\t j =', j)

Quant à l'instruction :code:`continue`, elle permet de terminer l'itération courante et de passer directement à l'itération suivante.

.. ipython:: python

    s = ""
    for c in "anticonstitutionnellement":
        if c == "e":
            continue
        s += c
    print(s)

.. ipython:: python

    i = 0
    while i < 10:
        i += 1
        if i % 3 ==0:
            continue
        print(i)

On remarquera que les instructions :code:`break` et :code:`continue` figurent quasiment toujours à l'intérieur d'un test.

.. rubric:: Notes

.. [#listcomp] Les listes en compréhension peuvent être utilisées pour effectuer des actions plutôt que de calculer des valeurs.

    .. ipython:: python

        s = ([], [1, 2], ['titi', 'tata'])
        [li.append('toto') for li in s]
        s

.. [#generateur] Techniquement, il est possible en Python de créer des boucles :code:`for` infinies en utilisant des objets spéciaux nommés *générateurs*.

.. [#iterable] De manière générale, un objet de type *itérable* est une "collection" d'éléments capable d'énumérer lesdits éléments. De manière plus pragmatique, un *itérable* est un objet sur lequel on peut appliquer une boucle :code:`for`.
