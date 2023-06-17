from matplotlib import rc
from matplotlib.pyplot import gca, figure, axis, close, Rectangle
from matplotlib.animation import FuncAnimation
from numpy.random import permutation
from numpy import array

rc('animation', html='jshtml')


def move_up(i):
    for _ in range(width):
        rectangles[i].set_xy(array(rectangles[i].get_xy())+array([0, 1]))
        annotations[i].set_position(
            array(annotations[i].get_position())+array([0, 1]))
        yield


def move_down(i):
    for _ in range(width):
        rectangles[i].set_xy(array(rectangles[i].get_xy())-array([0, 1]))
        annotations[i].set_position(
            array(annotations[i].get_position())-array([0, 1]))
        yield


def move_horizontal(i, j):
    for _ in range(width):
        rectangles[i].set_xy(array(rectangles[i].get_xy())+array([1, 0]))
        annotations[i].set_position(
            array(annotations[i].get_position())+array([1, 0]))
        rectangles[j].set_xy(array(rectangles[j].get_xy())-array([1, 0]))
        annotations[j].set_position(
            array(annotations[j].get_position())-array([1, 0]))
        yield


def change_color(i):
    rectangles[i].set_color('r')
    yield


def unchange_color(i):
    rectangles[i].set_color('b')
    yield


def tri(n):
    yield
    if n > 1:
        yield from tri(n-1)
        yield from change_color(n-1)
        yield from move_up(n-1)
        val = tab[n-1]
        j = n-1
        while j > 0 and tab[indices[j-1]] > val:
            j -= 1
            yield from move_horizontal(indices[j], n-1)
            indices[j+1] = indices[j]
        yield from move_down(n-1)
        yield from unchange_color(n-1)
        indices[j] = n-1


def gen():
    yield from tri(N)


def animate(i):
    pass


N = 10
width = 10
tab = permutation(N)

fig = figure(figsize=(len(tab), 3))
axis('off')
axis('equal')
axis([0, len(tab) * width, 0, width])

rectangles = [gca().add_patch(Rectangle(array([i*width, 0]), width-1, width-1, fc='b'))
              for i in range(N)]
annotations = [gca().annotate(tab[i], array([i*width, 0])+array([(width-1)*.5, (width-1)*.5]), color='w',
                              weight='bold', fontsize=20,
                              ha='center',
                              va='center') for i in range(N)]
indices = [n for n in range(N)]

ani = FuncAnimation(fig, animate, frames=gen, save_count=N*(N-1)//2*width*3)
close()
ani
