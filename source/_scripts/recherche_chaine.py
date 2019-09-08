from matplotlib.patches import Rectangle
from matplotlib.collections import PatchCollection
from matplotlib.pyplot import show, gca, figure, axis
from matplotlib.animation import ArtistAnimation


def recherche_chaine(chaine, motif):
    n = len(chaine)
    m = len(motif)
    for ind in range(n - m + 1):
        nb = 0
        while nb < m and chaine[ind + nb] == motif[nb]:
            move_up(chaine, motif, ind, nb)
            nb += 1
        else:
            move_down(chaine, motif, ind, nb)
        if nb == m:
            win(chaine, motif, ind, nb)
            return True
    lose(chaine, motif, ind)
    return False


def move_up(chaine, motif, ind, nb):
    for j in range(10):
        patches = []
        annotations = []
        colors = []
        for i, v in enumerate(motif):
            x, y = (ind + i) * 10, 20
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
            colors.append('orange')
        for i, v in enumerate(chaine):
            if ind <= i < ind + nb:
                x, y = i * 10, 10
                colors.append('orange')
            elif i == ind + nb:
                x, y = i * 10, j
                colors.append('green')
            else:
                x, y = i * 10, 0
                colors.append('blue')
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
        collection = gca().add_collection(PatchCollection(patches))
        collection.set_color(colors)
        frames.append((collection, *annotations))


def move_down(chaine, motif, ind, nb):
    for j in range(10):
        patches = []
        annotations = []
        colors = []
        for i, v in enumerate(motif):
            x, y = (ind + i) * 10, 20
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
            colors.append('orange')
        for i, v in enumerate(chaine):
            if ind <= i < ind + nb:
                x, y = i * 10, 10 - j
                colors.append('orange')
            else:
                x, y = i * 10, 0
                colors.append('blue')
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
        collection = gca().add_collection(PatchCollection(patches))
        collection.set_color(colors)
        frames.append((collection, *annotations))


def win(chaine, motif, ind, nb):
    for j in range(10):
        patches = []
        annotations = []
        colors = []
        for i, v in enumerate(motif):
            x, y = (ind + i) * 10, 20
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
            colors.append('orange')
        for i, v in enumerate(chaine):
            if ind <= i < ind + nb:
                x, y = i * 10, 0
                colors.append('orange' if j % 2 == 0 else 'green')
            else:
                x, y = i * 10, 0
                colors.append('blue')
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
        collection = gca().add_collection(PatchCollection(patches))
        collection.set_color(colors)
        frames.append((collection, *annotations))


def lose(chaine, motif, ind):
    for j in range(10):
        patches = []
        annotations = []
        colors = []
        for i, v in enumerate(motif):
            x, y = (ind + i) * 10, 20
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
            colors.append('orange')
        for i, v in enumerate(chaine):
            x, y = i * 10, 0
            colors.append('red' if j % 2 == 0 else 'orange')
            patches.append(Rectangle((x, y), 9, 9))
            annotations.append(
                gca().annotate(v, (x, y), (x + 4.5, y + 4.5), color='w', weight='bold', fontsize=20, ha='center',
                               va='center'))
        collection = gca().add_collection(PatchCollection(patches))
        collection.set_color(colors)
        frames.append((collection, *annotations))


frames = []
chaine = "pitapipapa"
motif = "pipa"
fig = figure(figsize=(len(chaine), 3))
axis('off')
gca().axis('equal')
gca().axis([0, len(chaine) * 10, 0, 30])
recherche_chaine(chaine, motif)
ani = ArtistAnimation(fig, frames, interval=100, repeat_delay=3000)
ani.save('source/_images/recherche_chaine_win.gif',
         dpi=80, writer='imagemagick')

frames = []
chaine = "pitapipapa"
motif = "tapa"
fig = figure(figsize=(len(chaine), 3))
axis('off')
gca().axis('equal')
gca().axis([0, len(chaine) * 10, 0, 30])
recherche_chaine(chaine, motif)
ani = ArtistAnimation(fig, frames, interval=100, repeat_delay=3000)
ani.save('source/_images/recherche_chaine_lose.gif',
         dpi=80, writer='imagemagick')
