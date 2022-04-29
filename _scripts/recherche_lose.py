chaine = "pitapipapa"
motif = "tapa"

width = 10

fig = plt.figure(figsize=(len(chaine), 3))
plt.axis('off')
plt.axis('equal')
plt.axis([0, len(chaine) * width, 0, 3*width])


rectangles_chaine = [plt.gca().add_patch(plt.Rectangle(
    [i * width, 0], 9, 9, color='b')) for i in range(len(chaine))]
rectangles_motif = [plt.gca().add_patch(plt.Rectangle(
    [i * width, 2*width], 9, 9, color='y')) for i in range(len(motif))]
annotations_chaine = [
    plt.gca().annotate(chaine[i], np.array([i * width, 0]) + np.array([(width - 1) * .5, (width - 1) * .5]), color='w',
                       weight='bold', fontsize=20,
                       ha='center',
                       va='center') for i in
    range(len(chaine))]
annotations_motif = [
    plt.gca().annotate(motif[i], np.array([i * width, 2*width]) + np.array([(width - 1) * .5, (width - 1) * .5]), color='w',
                       weight='bold', fontsize=20,
                       ha='center',
                       va='center') for i in
    range(len(motif))]


ani = FuncAnimation(fig, animate, frames=recherche_chaine, save_count=500)
plt.close()
ani
