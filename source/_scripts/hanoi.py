from matplotlib import rc
from matplotlib.collections import PatchCollection
from matplotlib.animation import ArtistAnimation
import matplotlib.pyplot as plt
from enum import Enum


rc('animation', html='jshtml')

ims = []


def plot_config(config):
    plt.gca().axis([-N, 5 * N, 0, N + 2])
    patches = []
    for piquet in Piquet.A, Piquet.B, Piquet.C:
        if piquet == Piquet.A:
            x = 0
        elif piquet == Piquet.B:
            x = 2 * N
        elif piquet == Piquet.C:
            x = 4 * N
        y = 0
        for anneau in config[piquet]:
            patches.append(
                plt.Rectangle((x - anneau, y), anneau * 2, 1))
            y += 1
    ims.append(
        (plt.gca().add_collection(PatchCollection(patches, edgecolors='red', facecolors='blue', linewidths=5)),
         plt.text(-N + 1, N + 1, 'It\u00e9ration ' + ' ' + str(config['iter']))))


class Piquet(Enum):
    A = 1
    B = 2
    C = 3


N = 5

config = {
    'iter': 0,
    Piquet.A: list(range(N, 0, -1)),
    Piquet.B: [],
    Piquet.C: []
}

fig = plt.figure(figsize=(10, 4))
plt.axis('off')
plot_config(config)


def hanoi(n, A, B, C):
    if n > 0:
        hanoi(n - 1, A, C, B)
        config[A].pop()
        config[C].append(n)
        config['iter'] += 1
        plot_config(config)
        hanoi(n - 1, B, A, C)


hanoi(N, Piquet.A, Piquet.B, Piquet.C)
plt.close()
anim = ArtistAnimation(fig, ims, interval=200, repeat_delay=1000, blit=True)
anim
