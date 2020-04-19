from functools import reduce
from operator import add

from matplotlib.patches import Rectangle
from matplotlib.pyplot import axis, figure, gca, savefig, show
from numpy.random import choice, permutation


def separe(t):
    pivot = choice(t[0])
    l = [([x for x in t[0] if x < pivot], 'blue'),
         ([x for x in t[0] if x == pivot], 'orange'),
         ([x for x in t[0] if x > pivot], 'red')]
    return [ll for ll in l if len(ll[0]) > 0]


def tri(tab):
    l = [tab]
    while any(t[1] != 'orange' for t in tab):
        tab = reduce(add, [separe(t) for t in tab])
        l.append(tab)
    return l


def plot_tri(t):
    y = len(t)*10-10
    for row in t:
        x = 0
        for group, color in row:
            x_start = x
            for elt in group:
                gca().annotate(elt, (x, y), (x + 5.5, y + 5.5), color='w',
                               weight='bold', fontsize=20, ha='center', va='center')
                x += 10
            gca().add_patch(Rectangle((x_start + 1, y + 1), x -
                                      x_start - 1, 9, color=color))
        y -= 10


tab = permutation(20).tolist()
t = tri([(tab, 'green')])
figure(figsize=(len(tab), len(t)))
axis('off')
gca().axis('equal')
gca().axis([0, len(tab) * 10, 0, len(t) * 10+10])
plot_tri(t)
savefig('source/_images/tri_rapide.png')
