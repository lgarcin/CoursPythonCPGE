===========
Indentation
===========

Comme on le verra, les blocs d'instructions définis à l'intérieur des structures de contrôle sont délimités par leur **indentation** et non par des symboles ou des mots-clés comme dans beaucoup d'autres langages de programmation. **Indenter** un code consiste à introduire des espaces ou des tabulations en début de ligne. L'indentation est souvent utilisée à des fins esthétiques mais en Python, elle fait partie de la sémantique.

.. code-block:: python

    # Code Python
    a = 0
    while a < 10:
        # Début du bloc d'instructions
        a += 1
        print(a)
        # Fin du bloc d'instructions
    a = 0

Le code précédent ne produit pas le même résultat que le code suivant.

.. code-block:: python

    a = 0
    while a < 10:
        a += 1
    print(a)
    a = 0

Dans le premier cas, l'instruction :code:`print` est exécuté à chaque itération de la boucle :code:`while` tandis que dans le second cas, l'instruction :code:`print` n'est exécutée qu'une fois à la sortie de la boucle :code:`while`.


Dans le langage C, le premier exemple pourrait être traduit de la manière suivante.

.. code-block:: c

    // Code C
    int a = 0;
    while (a < 10) {
        a += 1;
        printf("%d", a);
    }
    a = 0;

On remarque que les blocs d'instructions sont délimités par des *accolades*. On a indenté le code pour des raisons purement esthétiques. On aurait tout aussi bien pu écrire le code suivant.

.. code-block:: c

    // Code C
    int a = 0;
    while (a < 10) {
    a += 1;
    printf("%d", a);
    }
    a = 0;

Mais cette deuxième version est beaucoup moins lisible car on ne distingue plus le bloc d'instructions de la boucle :code:`while`. En quelque sorte, le langage Python nous force par nature à adopter un style de code clair.
