export function SongCard({ song }) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden border border-beige bg-cream-deep">
        <img
          src={song.cover}
          alt={`Portada de ${song.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      </div>
      <div className="mt-4 px-0.5">
        <h3 className="text-balance font-serif text-xl font-light leading-snug text-ink">
          {song.title}
        </h3>
        <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-muted">
          {song.artist}
        </p>
      </div>
    </article>
  );
}
