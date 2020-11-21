===========
Récursivité
===========

On appelle fonction **récursive** une fonction qui s'appelle elle-même. Ceci est très lié à la notion de **récurrence** en mathématiques.

Par exemple, la factorielle en mathématiques est définie par la condition intiale :math:`0! = 1` et par la relation de récurrence :math:`n! = n\cdot(n-1)!` lorsque :math:`n\geq1`.

.. ipython:: python
    :okexcept:

    def factorielle(n):
        return 1 if n==0 else n*factorielle(n-1)
    
    factorielle(3)

Par exemple lors de l'appel de :code:`factorielle(3)`

- :code:`3*factorielle(2)`
- :code:`2*factorielle(1)`
- :code:`1*factorielle(0)`


A noter que le case de base doit être impérativement défini sinon l'algorithme ne termine pas. En Python, il existe un garde-fou consistant à imposer un niveau maximum de récursion. Si jamais celui-ci est dépassé, une exception est levée.

.. todo:: baratin sur la tour de Hanoï

.. jupyter-execute:: _scripts/hanoi.py
    :hide-code:
