// Bandeau décoratif dégradé : bleu nuit → blanc → jaune → retour bleu
// Le gradient se tile sur 50% de la piste → loop parfait avec translateX(-50%)
export default function SectionDivider() {
  return (
    <div className="divider" role="separator" aria-hidden="true">
      <div className="divider__track" />
    </div>
  );
}
