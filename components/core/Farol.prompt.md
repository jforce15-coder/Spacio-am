Farol: el estado de un ítem de un vistazo, con la escala única del sistema.

\`\`\`jsx
<Farol state="success">Con depósito</Farol>
<Farol state="attention">Falta constancia</Farol>
<Farol state="error">Vencido</Farol>
<Farol state="warning" dotOnly label="Por vencer" />
\`\`\`

## Peach o rojo — la decisión que más importa

- **\`attention\` (peach)** es el default para "esto merece tu mirada": falta un depósito, falta una
  constancia, el mes bajó, este es el dato que destaca. **No es una falla** — no alarma, informa.
  Punto en peach neón, texto en \`--attention-text\` (4.93:1).
- **\`error\` (rojo)** se reserva para la **excepción que exige acción correctiva**: vencido, daño
  reportado, pago rechazado, validación fallida, acción destructiva. Si nadie tiene que hacer algo
  al respecto, no es rojo.

En duda: **peach**. El rojo pierde fuerza si se usa para todo.

- Los estados temporales de EPI ("hace 3+ semanas" → error, "hace 2 semanas" → warning) se mapean aquí.
- Colocación: punto a la izquierda del título en listas; píldora a la derecha en cards; punto en la celda del calendario.
