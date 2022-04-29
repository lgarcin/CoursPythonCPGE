from matplotlib import rc
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from numpy.random import permutation, choice
import numpy as np

rc('animation', html='jshtml')


def move_vertical(left, right):
    for _ in range(width):
        for r in [rectangles[i] for i in left]:
            r.set_xy(np.array(r.get_xy())+np.array([0, 1]))
        for a in [annotations[i] for i in left]:
            a.set_position(np.array(a.get_position())+np.array([0, 1]))
        for r in [rectangles[i] for i in right]:
            r.set_xy(np.array(r.get_xy())-np.array([0, 1]))
        for a in [annotations[i] for i in right]:
            a.set_position(np.array(a.get_position())-np.array([0, 1]))
        yield


def change(ind, a):
    for r in [rectangles[i] for i in ind[:len(ind)//2]]:
        r.set_color('r')
    for r in [rectangles[i] for i in ind[len(ind)//2:]]:
        r.set_color('g')
    yield


def unchange(ind, a):
    for r in [rectangles[i] for i in ind]:
        r.set_color('b')
    yield


def move_horizontal(move_list):
    for _ in range(10):
        for (i, move) in move_list:
            rectangles[i].set_xy(
                np.array(rectangles[i].get_xy())+np.array([move*width/10, 0]))
            annotations[i].set_position(
                np.array(annotations[i].get_position())+np.array([move*width/10, 0]))
        yield


def tri(a, b):
    global indices
    if b-a > 1:
        yield
        yield from tri(a, (a+b)//2)
        yield from tri((a+b)//2, b)
        local_indices = indices[a:b]
        yield from change(local_indices, .5)
        yield from move_vertical(local_indices[:len(local_indices)//2], local_indices[len(local_indices)//2:])
        sorted_local_indices = sorted(local_indices, key=lambda i: tab[i])
        indices[a:b] = sorted_local_indices
        moves = [(i, sorted_local_indices.index(i)-local_indices.index(i))
                 for i in local_indices]
        yield from move_horizontal(moves)
        yield from move_vertical(local_indices[len(local_indices)//2:], local_indices[:len(local_indices)//2])
        yield from unchange(local_indices, None)


def gen():
    yield from tri(0, N)


def animate(i):
    pass


N = 16
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
indices = [n for n in range(N)]

ani = FuncAnimation(fig, animate, frames=gen, save_count=1000)
plt.close()
ani
