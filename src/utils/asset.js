/**
 * Resuelve rutas de archivos dentro de public/ de forma relativa al documento,
 * para que el sitio funcione tanto en la raíz del dominio como en un
 * subdirectorio (por ejemplo, GitHub Pages).
 */
export function asset(path) {
  const clean = path.replace(/^\/+/, '');

  if (typeof document === 'undefined') {
    return clean;
  }

  return new URL(clean, document.baseURI).href;
}
