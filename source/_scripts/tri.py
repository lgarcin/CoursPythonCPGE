from matplotlib import rc
from matplotlib.patches import Rectangle
from matplotlib.collections import PatchCollection
from matplotlib.pyplot import gca, figure, axis, close
from matplotlib.animation import FuncAnimation
from numpy.random import permutation
from numpy import array

rc('animation', html='jshtml')


def move_horizontal(i, j):
    for _ in range(10):
        pos[i] += array([1, 0])
        pos[j] -= array([1, 0])
        yield


def move_up(i):
    for _ in range(10):
        pos[i] -= array([1, 0])
        yield


def move_down(i):
    for _ in range(10):
        pos[i] -= array([1, 0])
        yield


def tri():
    for i in range(1, len(tab)):
        val = tab[i]
        pos = i
        yield from move_up(i)
        while pos > 0 and tab[pos - 1] > val:
            pos -= 1
            yield from move_horizontal(pos, i)
            tab[pos + 1] = tab[pos]
        tab[pos] = val
        yield from move_down(i)


def trace():
    rectangles = [gca().add_patch(Rectangle(p, 9, 9)) for p in pos]
    return rectangles


N = 10
tab = permutation(N)

pos = [array([i*10, 0]) for i in range(N)]

fig = figure(figsize=(len(tab), 3))
axis('off')
axis('equal')
axis([0, len(tab) * 10, 0, 10])
close()
ani = FuncAnimation(fig, trace, frames=tri(),
                      interval=100, repeat_delay=3000)
ani
