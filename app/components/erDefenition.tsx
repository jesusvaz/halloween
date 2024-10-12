

const ComparativeEr = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Uso de "-er" en los Comparativos en Inglés</h1>
      <p className="text-gray-700 mb-4">
        En inglés, la terminación <strong>-er</strong> se utiliza para formar el comparativo de adjetivos cortos. Esto expresa que una cosa o persona tiene una cualidad en mayor grado que otra.
      </p>

      <h2 className="text-xl font-semibold mb-2">Formación de Comparativos con "-er"</h2>
      <p className="text-gray-700 mb-4">
        Para los <strong>adjetivos cortos</strong> (de una o dos sílabas que terminan en "y"), se añade <strong>-er</strong> al adjetivo, seguido de <strong>than</strong> para realizar comparaciones.
      </p>

      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Big</strong> → <strong>Bigger</strong>: "This house is bigger than that one." (Esta casa es más grande que esa.)</li>
        <li><strong>Fast</strong> → <strong>Faster</strong>: "She runs faster than her brother." (Ella corre más rápido que su hermano.)</li>
        <li><strong>Happy</strong> → <strong>Happier</strong>: "He is happier today than yesterday." (Él está más feliz hoy que ayer.)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Reglas Especiales</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li>Si el adjetivo termina en una consonante precedida por una vocal, se duplica la consonante antes de añadir <strong>-er</strong>.</li>
        <p><em>Ejemplo:</em> "Big" → "Bigger" (grande → más grande)</p>
        
        <li>Si el adjetivo termina en "y", se cambia la "y" por una "i" antes de añadir <strong>-er</strong>.</li>
        <p><em>Ejemplo:</em> "Happy" → "Happier" (feliz → más feliz)</p>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Comparativos con Adjetivos Largos</h2>
      <p className="text-gray-700 mb-4">
        Para los <strong>adjetivos largos</strong> (de más de dos sílabas), no se utiliza <strong>-er</strong>. En su lugar, se usa <strong>more</strong> antes del adjetivo.
      </p>

      <p className="text-gray-700 mb-4"><strong>Ejemplo:</strong> "Beautiful" → "More beautiful than" → "She is more beautiful than her sister." (Ella es más hermosa que su hermana.)</p>
    </div>
  );
};

export default ComparativeEr;
