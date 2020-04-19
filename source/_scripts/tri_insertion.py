from matplotlib import rc
from matplotlib.pyplot import gca, figure, axis, close, Rectangle, grid
from matplotlib.animation import FuncAnimation
from numpy.random import permutation
from numpy import array

rc('animation', html='jshtml')


def move_horizontal(j, i):
    for _ in range(width):
        positions[i] -= array([1, 0])
        positions[j] += array([1, 0])
        yield i


def move_up(i):
    for _ in range(width):
        positions[i] += array([0, 1])
        yield i


def move_down(i):
    for _ in range(width):
        positions[i] -= array([0, 1])
        yield i


def tri():
    global positions, annotations
    yield -1
    for i in range(1, len(tab)):
        p = positions[:]
        a = annotations[:]
        val = tab[i]
        j = i
        yield from move_up(i)
        while j > 0 and tab[j - 1] > val:
            j -= 1
            yield from move_horizontal(j, i)
            tab[j + 1] = tab[j]
            p[j+1] = p[j]
            a[j+1] = a[j]
        yield from move_down(i)
        tab[j] = val
        p[j] = positions[i]
        a[j] = annotations[i]
        positions = p
        annotations = a


def trace(i):
    for j in range(N):
        rectangles[j].set_color('b' if j != i else 'r')
        rectangles[j].set_xy(positions[j])
        annotations[j].set_position(
            positions[j]+array([(width-1)*.5, (width-1)*.5]))


N = 10
width = 10
tab = permutation(N)

fig = figure(figsize=(len(tab), 3))
axis('off')
axis('equal')
axis([0, len(tab) * width, 0, width])

positions = [array([i*width, 0]) for i in range(N)]
rectangles = [gca().add_patch(Rectangle(p, width-1, width-1, fc='b'))
              for p in positions]
annotations = [gca().annotate(tab[i], positions[i]+array([(width-1)*.5, (width-1)*.5]), color='w',
                              weight='bold', fontsize=20,
                              ha='center',
                              va='center') for i in range(N)]

ani = FuncAnimation(fig, trace, frames=tri, save_count=N*(N-1)/2*width*3)
close()
ani
