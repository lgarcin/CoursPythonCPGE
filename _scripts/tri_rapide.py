from matplotlib import rc
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from numpy.random import permutation, choice
import numpy as np

rc('animation', html='jshtml')


def change_colors(left, mid, right):
    for r in [rectangles[i] for i in left]:
        r.set_color('g')
    for r in [rectangles[i] for i in right]:
        r.set_color('r')
    for r in [rectangles[i] for i in mid]:
        r.set_color('y')
    yield


def unchange_colors(left, mid, right):
    for r in [rectangles[i] for i in left]:
        r.set_color('b')
    for r in [rectangles[i] for i in right]:
        r.set_color('b')
    for r in [rectangles[i] for i in mid]:
        r.set_color('brown')
    yield


def move_vertical(left, right):
    for _ in range(width):
        for r in [rectangles[i] for i in left]:
            r.set_xy(np.array(r.get_xy())+np.array([0, 1]))
        for r in [rectangles[i] for i in right]:
            r.set_xy(np.array(r.get_xy())-np.array([0, 1]))
        for a in [annotations[i] for i in left]:
            a.set_position(np.array(a.get_position())+np.array([0, 1]))
        for a in [annotations[i] for i in right]:
            a.set_position(np.array(a.get_position())-np.array([0, 1]))
        yield


def move_horizontal(move_list):
    for _ in range(10):
        for (i, move) in move_list:
            rectangles[i].set_xy(
                np.array(rectangles[i].get_xy())+np.array([move*width/10, 0]))
            annotations[i].set_position(
                np.array(annotations[i].get_position())+np.array([move*width/10, 0]))
        yield


def tri(indices):
    yield
    if len(indices) > 0:
        piv = choice(indices)
        left = [i for i in indices if tab[i] < tab[piv]]
        mid = [i for i in indices if tab[i] == tab[piv]]
        right = [i for i in indices if tab[i] > tab[piv]]
        yield from change_colors(left, mid, right)
        if len(left)>0 or len(right)>0:
            yield from move_vertical(left, right)
            yield from move_horizontal([(i, (left+mid+right).index(i)-indices.index(i)) for i in indices])
            yield from move_vertical(right, left)
        yield from unchange_colors(left, mid, right)
        yield from tri(left)
        yield from tri(right)


def gen():
    yield from tri([n for n in range(N)])


def animate(i):
    pass


N = 20
width = 10
tab = permutation(N)

fig = plt.figure(figsize=(len(tab), 3))
plt.axis('off')
plt.axis('equal')
plt.axis([0, len(tab) * width, 0, width])

rectangles = [plt.gca().add_patch(plt.Rectangle(np.array([i*width, 0]), width-1, width-1, fc='b'))
              for i in range(N)]
annotations = [plt.gca().annotate(tab[i], np.array([i*width, 0])+np.array([(width-1)*.5, (width-1)*.5]), color='w',
                                  weight='bold', fontsize=20,
                                  ha='center',
                                  va='center') for i in range(N)]

ani = FuncAnimation(fig, animate, frames=gen, save_count=1000)
plt.close()
ani
