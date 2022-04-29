=============
Préliminaires
=============

Installer Python
================

Distribution Python standard
    Vous pouvez installer la distribution standard sur `<https://www.python.org>`_. Dans ce cas, vous devrez installer vous-mêmes les paquets supplémentaires tels que :code:`numpy`, :code:`scipy` ou :code:`matplotlib` à l'aide du gestionnaire de paquets `pip <https://pip.pypa.io/en/stable/>`_.

    Par exemple, pour installer :code:`numpy`, utiliser la ligne de commande :

    .. code::

        pip install numpy


Anaconda
    Vous pouvez également utiliser la distribution `Anaconda <https://www.anaconda.com/products/individual>`_. Cette distribution est installée avec de nombreux paquets standards tels que :code:`numpy`, :code:`scipy` ou :code:`matplotlib`. Vous ne devrez donc pas a priori installer de paquets supplémentaires. Cette distribution dispose néanmoins de son propre gestionnaire de paquets `conda <https://docs.conda.io/en/latest/>`_.

Environnement de développement
==============================

Il y a plusieurs possibilités pour écrire et exécuter un programme Python.

Editeur de texte
    La première possibilité est d'utiliser un éditeur de texte classique. Une fois le programme enregistré dans un fichier :code:`fichier.py`, on peut l'exécuter grâce à la ligne de commande :

    .. code::

        python fichier.py

Environnement de développement intégré
    On peut également utiliser un *environnement de développement intégré* (IDE). Il s'agit d'un éditeur de texte amélioré qui facilite l'exécution des programmes (pas besoin de ligne de commande), propose généralement la coloration syntaxique et l'autocomplétion ainsi que de multiples fonctionnalités pour faciliter la vie du développeur. Il existe de nombreux IDE dont certains sont conçus exclusivement pour Python et d'autres sont plus généralistes :
    
        * `Pyzo <https://pyzo.org/>`_
        * `Spyder <https://www.spyder-ide.org/>`_ (inclus avec la distribution Anaconda mais que l'on peut également installer avec la distribution standard :code:`pip install spyder`).
        * `PyCharm <https://www.jetbrains.com/pycharm/>`_ (plutôt conçu pour un usage professionnel).
        * `vscode <https://code.visualstudio.com/>`_ (IDE généraliste mais avec un très bon support de Python).


Interpréteur interactif
=======================

On peut également utilser ce que l'on appelle un *éditeur interactif*. Il permet d'écrire et d'excuter un programme ligne par ligne plutôt que d'un bloc. L'éditeur interactif standard est **IPython**. Il est fourni avec la distribution Anaconda mais on peut également l'installer avec la distribution standard :code:`pip install ipython`. Les différents IDE proposent généralement la possibilité d'utiliser l'éditeur interactif.

Il existe une version *évoluée* de IPython appelée **Jupyter** qui permet de travailler de manière plus conviviale avec des *notebooks*. A nouveau, Jupyter est fourni avec la distribution Anaconda mais peut également s'installer avec la distribution standard :code:`pip install jupyter`.