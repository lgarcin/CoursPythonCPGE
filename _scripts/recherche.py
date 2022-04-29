import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib import rc

rc('animation', html='jshtml')


def move_up(i):
    rectangles_chaine[i].set_xy(
        np.array(rectangles_chaine[i].get_xy()) + np.array([0, width]))
    annotations_chaine[i].set_position(
        np.array(annotations_chaine[i].get_position()) + np.array([0, width]))
    yield


def move_down(i, j):
    for k in range(i, j):
        rectangles_chaine[k].set_xy(
            np.array(rectangles_chaine[k].get_xy()) - np.array([0, width]))
        annotations_chaine[k].set_position(
            np.array(annotations_chaine[k].get_position()) - np.array([0, width]))
    yield


def move_right():
    for rect in rectangles_motif:
        rect.set_xy(np.array(rect.get_xy()) + np.array([width, 0]))
    for ann in annotations_motif:
        ann.set_position(np.array(ann.get_position()) + np.array([width, 0]))
    yield


def win(i, j):
    for k in range(i, j):
        rectangles_chaine[k].set_color('g')
    yield


def lose():
    for rect in rectangles_chaine:
        rect.set_color('r')
    yield


def recherche_chaine():
    yield
    n = len(chaine)
    m = len(motif)
    for ind in range(n - m + 1):
        nb = 0
        while nb < m and chaine[ind + nb] == motif[nb]:
            yield from move_up(ind+nb)
            nb += 1
        if nb == m:
            yield from win(ind, ind+m)
            break
        yield from move_down(ind, ind+nb)
        if ind < n-m:
            yield from move_right()
        else:
            yield from lose()


def animate(i):
    pass
