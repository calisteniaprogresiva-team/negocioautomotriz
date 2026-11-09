# Brief de diseño · Prueba de la web comercial con Claude Design

> **Estado:** prueba de diseño. No es la web definitiva, no se publica y no reemplaza la decisión de los tres socios sobre la marca (anteproyecto v2, sección 5: «propuesta inicial, a validar entre los tres»).

## 1. Recomendación de color

### Qué se ve en el rubro (observación cualitativa, sin cifras)

- **Rojo y negro:** lo clásico de talleres, repuestos y lubricantes. Transmite potencia y velocidad, pero también urgencia, ofertas y emergencias.
- **Azul:** muy usado por servicios técnicos y concesionarios. Transmite confianza y orden, pero se confunde fácilmente con muchos otros.
- **Amarillo y naranja:** herramientas, señalética y seguridad. En este proyecto quedan **reservados para avisos**, así que no pueden ser la marca.
- **Morado:** poco usado en mecánica. Por eso destaca, pero si es claro o pastel puede leerse como belleza, bienestar o tecnología.

### Recomendación

**Mantener el negro carbón con morado profundo como propuesta principal (variante A)** y probar al lado un **azul acero (variante B)** como alternativa segura. Llevar las dos a la reunión del 15 y decidir entre los tres.

Por qué el morado sí puede funcionar:

1. **Diferencia.** En un rubro de rojos, azules y amarillos, un taller negro y morado se recuerda. Para un negocio que parte por recomendación del círculo cercano, ser recordable importa.
2. **Encaja con la promesa.** El v2 quiere una empresa seria que gestiona la experiencia completa, no «personas que cambian aceite». Un morado profundo sobre carbón se lee sobrio y cuidado.
3. **El equipo lo siente propio.** Que sea el color de Gustavo no es un argumento de mercado, pero ayuda a que el técnico lo use con gusto en el uniforme y en terreno.

Condiciones para que el morado no falle:

- Siempre **profundo** y sobre fondo carbón. Nada pastel, lila ni degradados de fantasía.
- Acompañado de **elementos industriales**: chapa, tornillos, franjas, tipografía condensada, fotos reales de trabajo (cuando las haya).
- Usado como **acento** (botones, líneas, detalles), no para pintar páginas completas.

**Lo que no recomiendo:**

- **Rojo como color principal:** comunica urgencia y emergencia, y el modelo es de reservas anticipadas, sin urgencias. Además compite con el amarillo de los avisos.
- **Verde como color de marca:** se confunde con el botón de WhatsApp. Si se usa ese botón, que lleve texto oscuro sobre verde o que vaya en el color de marca con el ícono.

### Paletas para la prueba

Los contrastes se calcularon con la fórmula WCAG. 4,5:1 es el mínimo para texto normal.

| Uso | Variante A · Morado | Variante B · Azul acero |
| --- | --- | --- |
| Fondo base | Carbón `#141417` | Carbón `#141417` |
| Botón principal (texto blanco) | Morado `#5b2a86` · contraste 9,9:1 | Azul acero `#1d4f6e` · contraste 8,8:1 |
| Acento sobre fondo oscuro (enlaces, títulos cortos) | Morado claro `#cfaef5` · 9,7:1 | Celeste acero `#8cc7e3` · 10,0:1 |
| Texto | Blanco `#ffffff` | Blanco `#ffffff` |
| Texto secundario y detalles | Gris acero `#aeb3bc` · 8,7:1 | Gris acero `#aeb3bc` · 8,7:1 |
| Solo avisos de seguridad y pendientes | Amarillo seguridad `#ffb000` · 10,0:1 | Amarillo seguridad `#ffb000` · 10,0:1 |

### Tipografía

- **Títulos:** condensada, recia, industrial, en mayúsculas o versalitas. Ejemplos de estilo: Bahnschrift, Barlow Condensed, Oswald, Roboto Condensed.
- **Texto:** sans-serif limpia y legible. Ejemplos: Inter, system-ui.
- Para el sitio definitivo, preferir fuentes del sistema o alojadas en el propio sitio (sin depender de servicios externos).

## 2. Qué debe mostrar la página (anteproyecto v2, sección 11)

1. **Inicio:** propuesta de valor, servicios, cobertura y botón de solicitud.
2. **Servicios:** qué incluye, qué no, qué se necesita para cotizar, condiciones, precio o modalidad.
3. **Cómo funciona:** pasos del servicio (el v2 habla de seis pasos, pero el flujo completo tiene 14; queda por definir cuáles se muestran).
4. **Cobertura real:** solo comunas confirmadas.
5. **Confianza:** equipo, procedimientos, ejemplo de informe, fotos reales, opiniones verificadas.
6. **Contacto:** WhatsApp, formulario y política de privacidad.

## 3. Reglas para la prueba

- Nombre: **«[Nombre por definir]»**. No inventar uno.
- Sin precios, montos, plazos, cifras ni estadísticas.
- Servicios marcados «En evaluación». Ninguno está aprobado.
- Cobertura: «Comunas por confirmar».
- Sin testimonios ni reseñas inventadas: usar un recuadro «Aquí irán opiniones verificadas de clientes reales».
- Sin fotos de personas, patentes ni domicilios: usar marcadores de imagen («Foto real de un servicio»).
- Marca de agua o cinta visible: **«EJEMPLO · Prueba de diseño»**.
- Español neutro. Pensada primero para celular (360 px).

---

## 4. Prompt para pegar en Claude Design

Pídelo dos veces, una por variante, cambiando solo el bloque de colores.

```
Diseña una maqueta de página de inicio (una sola página con secciones, pensada primero para celular de 360 px y que también se vea bien en escritorio) para una empresa de mecánica automotriz a domicilio en Santiago de Chile. Es una PRUEBA DE DISEÑO: lleva una cinta visible que diga «EJEMPLO · Prueba de diseño».

Concepto: no somos «personas que cambian aceite a domicilio», sino una empresa de servicios automotrices seria que gestiona bien la experiencia completa del cliente. Pilares: confianza, profesionalismo, comodidad, seguimiento y responsabilidad. Atendemos solo con reserva anticipada, en fines de semana, sin urgencias. Cada servicio queda registrado en el historial del vehículo y el cliente recibe un informe.

Estilo: debe verse como un lugar mecánico, serio y de confianza. Fondo negro carbón. Títulos en tipografía condensada, recia e industrial; textos en sans-serif limpia. Elementos gráficos sobrios: chapa, tornillos, llaves, franjas. Sin caricaturas, sin degradados de fantasía, sin colores pastel.

Colores (VARIANTE A):
- Fondo #141417, texto #ffffff, texto secundario #aeb3bc.
- Color de marca: morado profundo #5b2a86 para botones (texto blanco) y #cfaef5 para acentos sobre fondo oscuro.
- Amarillo de seguridad #ffb000 SOLO para avisos (por ejemplo, «Servicio en evaluación»). Nunca como color de marca.
[Para la VARIANTE B, reemplaza el morado por azul acero #1d4f6e en botones y #8cc7e3 en acentos.]

Secciones:
1. Inicio: nombre «[Nombre por definir]», propuesta de valor en una frase («Mantención simple de tu vehículo a domicilio, con agenda, historial del auto y recordatorio de la próxima mantención»), botón «Solicitar evaluación».
2. Servicios (cada uno con la etiqueta amarilla «En evaluación»): cambio de aceite y filtro de aceite; cambio de filtro de aire; cambio de filtro de habitáculo; inspección visual preventiva (también antes de un viaje); cambio de bujías; revisión y cambio de batería. Para cada uno, espacio para «Qué incluye», «Qué no incluye» y «Qué necesitamos para cotizar». Sin precios.
3. Cómo funciona: una secuencia de seis pasos con títulos de ejemplo marcados [Por definir].
4. Cobertura: «Santiago. Comunas por confirmar».
5. Confianza: el equipo (dos tarjetas sin fotos: «Dirección técnica» y «Gestión y atención»), «Procedimientos escritos», «Ejemplo de informe del servicio» (una miniatura de informe con datos ficticios VEH-0001), y un recuadro «Aquí irán opiniones verificadas de clientes reales».
6. Contacto: botón de WhatsApp (texto oscuro sobre verde o en el color de marca), espacio para un formulario de solicitud y enlace a «Política de privacidad».

Reglas: español neutro. No inventes precios, cifras, estadísticas, testimonios, nombres de personas, comunas ni garantías. Usa marcadores de imagen («Foto real de un servicio») en vez de fotos de stock con personas o patentes. Contraste accesible (mínimo 4,5:1 en textos).
```

## 5. Cómo comparar las dos variantes en la reunión

- ¿Cuál se lee más como «taller serio» y menos como otro rubro?
- ¿Cuál se ve mejor en un uniforme, una tarjeta y el auto de trabajo?
- ¿Cuál se recuerda mejor después de verla una vez?
- ¿Los avisos amarillos se distinguen bien del color de marca?

Anotar la decisión en `docs/decisiones.md`.
