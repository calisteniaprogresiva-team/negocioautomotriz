# JJG Car Service · Propuesta estratégica y de diseño del sitio web (fase 1)

> **Estado:** propuesta para revisión de José. **No es una decisión aprobada.** No se ha programado el sitio.
> **Fecha:** 19 de noviembre de 2026.
> **Wireframes visuales (Claude Design, privado):** https://claude.ai/artifact/XCoMRfKuSoUoHuG9XGsgV3
> **Identidad de referencia:** «Marca de torque» (https://claude.ai/artifact/2HAMs4TUDxxN3wqGz3RtgR) y sistema de diseño JJG Car (https://claude.ai/artifact/H6oqxiC3DThBKM3XdNCUbR).

## Actualización · 19 de noviembre de 2026 (pedido de José)

José pidió una **web de ejemplo responsive**, pensada primero para el celular y con **la menor cantidad de pasos posible**. Como todo es de ejemplo para el equipo, se rellenaron datos ficticios marcados como tales.

- **Sitio de ejemplo (privado):** https://claude.ai/artifact/2hziHnmPA52Rr5AuAbRDck · archivo `web/ejemplo-jjg/index.html`.
- **Contacto en un toque:** «¿Qué necesita tu auto?» muestra 6 opciones; cada una abre WhatsApp con el mensaje listo. Se eliminó el formulario de 3 pasos.
- **Proceso en 3 pasos:** Nos escribes · Te cotizamos y agendamos · Vamos y te enviamos el informe (antes eran 9).
- **Celular:** barra fija inferior con «Cotizar por WhatsApp», botón de WhatsApp en la barra superior, sin menú hamburguesa, botones de 52 px. Revisado sin desborde a 360, 768 y 1280 px.
- **Datos de ejemplo** (precios «$ 00.000», comunas, horario, número +56 9 0000 0000, tiempos): son ficticios; no son decisiones.
- Los wireframes del lienzo de Claude Design quedan como referencia anterior; manda el sitio de ejemplo.

Todo lo que dice **«Por definir»**, **«En validación»** o **«Por verificar con un profesional»** sigue abierto. Ningún servicio, precio, plazo, comuna ni horario de este documento está aprobado.

---

## 1. Inventario de skills, guías y recursos consultados

### 1.1 Disponibles en este entorno

| Recurso | Qué es | ¿Sirve? | Cómo se usó |
| --- | --- | --- | --- |
| Tipo **Design** (Claude Design, lienzo de mesas de trabajo) | Editor de diseño con artboards, componentes y tokens | Sí, central | Se crearon los wireframes con los logos y tokens reales de la marca |
| Tipo **Design System** · *JJG Car — Sistema de diseño* | Tokens, tipografía, componentes `jc-` y reglas de contraste | Sí, central | Se instalaron sus tokens en el lienzo; colores, radios y escala tipográfica salen de ahí |
| Artefacto *JJG Car Service — Identidad visual* | Logo, construcción, versiones, iconos, aplicaciones | Sí, central | Fuente de logos SVG e iconos |
| Skills `searchfit-seo:*` (seo-audit, technical-seo, schema-markup, keyword-clustering, content-strategy, on-page-seo) | Auditoría y planificación SEO | Sí, en la fase de construcción | Guiaron la sección 14. Se usarán para auditar el sitio cuando exista |
| `marketing:brand-review`, `marketing:draft-content`, `marketing:competitive-brief` | Revisión de voz de marca, redacción, competencia | Sí, para pulir textos | Criterio para titulares y CTA |
| `code-review`, `simplify`, `security-review`, Playwright preinstalado | Revisión de código y pruebas en navegador | Sí, en implementación | Para verificar el sitio a 360 px y su accesibilidad cuando se construya |
| `dataviz` | Gráficos | Solo para el futuro panel de indicadores | No aplica a esta fase |
| `pdf`, `docx` | Documentos | Solo si se pide el informe en PDF | No aplica a esta fase |

**No están instaladas en este entorno** las skills que mencionaste: *frontend-design / taste*, *impeccable*, *web-design-guidelines (Vercel)*, *brand-guidelines*, *copywriting*. La búsqueda en el catálogo de skills de la cuenta no devolvió ninguna. Por eso **leí sus fuentes públicas directamente** (ver 1.2) y apliqué sus reglas a mano. Si quieres instalarlas para la fase de construcción, es una decisión tuya (CLAUDE.md pide preguntar antes de instalar dependencias).

Conectores de Figma y Canva aparecen pero **requieren autorización** en la configuración de conectores de claude.ai; no se usaron ni hacen falta: la identidad ya está en Claude Design.

### 1.2 Guías externas leídas

| Fuente | Cargó | Reglas que se aplicaron |
| --- | --- | --- |
| `anthropics/skills` · frontend-design (SKILL.md) | Sí | Decidir colores, tipos y concepto de layout antes de programar; evitar el «héroe = cifra grande + gradiente»; no partir todo en tarjetas idénticas; una sola animación orquestada como máximo; cada texto con función; foco visible y movimiento reducido; quitar un elemento decorativo antes de cerrar |
| Vercel · web-interface-guidelines (README) | Sí | Animar solo `transform`/`opacity`; respetar `prefers-reduced-motion`; cifras tabulares; objetivos táctiles de 44 px en móvil; inputs de 16 px o más; radios anidados coherentes; no depender solo del color; espacio no separable en «84.210 km» |
| pbakaus/impeccable (README) | Sí, parcial | Antipatrones: Inter para todo, gradiente morado-azul, tarjetas dentro de tarjetas, texto gris sobre color, icono en cuadro sobre cada título |
| anthropics/skills · brand-guidelines | Sí | Es la guía de marca de Anthropic, no anti-genérico. Útil solo como advertencia: no usar su paleta |
| tododeia · kit de diseño con Claude | Sí | Promocional; recomienda las mismas skills. Sin reglas propias |
| claude-cookbooks · prompting_for_frontend_aesthetics | **No** (solo cargó el marco de GitHub) | Sin aporte. Pendiente si se quiere revisar |

**Dos tensiones con esas guías, resueltas a favor de la marca (como pediste):**
1. *impeccable* marca «Inter para todo» como rasgo genérico. La marca usa **Inter para el cuerpo**, pero **Chakra Petch** en títulos, etiquetas y botones; no es «Inter para todo». Se mantiene.
2. *frontend-design* desaconseja etiquetas en mayúsculas. La marca las define (`label`, 12 px, +0,08 em). Se mantienen, pero **solo** en etiquetas técnicas, nunca en párrafos.

### 1.3 Documentación oficial a consultar en la fase de construcción

Astro (si se aprueba), web.dev (Core Web Vitals), Google Search Central (datos estructurados, perfiles de empresa con área de servicio), WCAG 2.2, schema.org/AutoRepair, BCN (Ley 19.496 y reglamentos), Senado (boletín 18.623-07). No se instaló nada.

---

## 2. Análisis del artefacto de identidad visual

**Encontrado y revisado.** No falta ningún recurso de marca para la web.

| Elemento | Qué define el artefacto | Implicancia para la web |
| --- | --- | --- |
| Concepto | «Marca de torque»: la línea de pintura con la que un mecánico deja constancia de que un perno fue verificado | Es literalmente la propuesta de valor (trabajo comprobado y documentado). El sitio debe contarla con el **informe**, no con un auto |
| Isotipo | Tuerca hexagonal violeta, R 54 en caja de 120, orificio real r 24, contorno de 6, marca de torque naranja de 9 a 30° | El icono «verificado» del informe es el mismo símbolo: une marca y producto |
| Logotipo | Chakra Petch a trazos: JJG Bold, CAR SERVICE SemiBold +0,24 em, descriptor Medium +0,12 em | Horizontal compacto en la barra (40 px de alto ≈ 124 px de ancho, sobre el mínimo de 100 px). Horizontal con descriptor en pie de página |
| Versiones | Horizontal, compacta, vertical, isotipo; color claro, color oscuro, grafito, blanco, mono; perfil de redes | Sobre grafito: *color-oscuro*. Sobre blanco humo: *color*. Sobre violeta: solo *blanco* |
| Color | Grafito #25272D (40 %), blanco humo #F5F5F3 (20 %), violeta #59416F (20 %), aluminio #AEB4BC (10 %), naranja #E98232 (10 %) | Grafito y blanco humo alternan capítulos; violeta solo en paneles de datos; naranja solo en el CTA principal y la marca de torque |
| Contraste (medido por el sistema) | Aluminio sobre violeta 4,1:1; naranja sobre blanco humo 2,5:1; aluminio sobre blanco humo 1,9:1 | En fondo claro, texto secundario en #5A5F68 y cifras naranjas en #A9551A (tonos derivados que ya define el sistema). Botón naranja siempre con texto grafito en negrita (5,4:1) |
| Tipografía | Chakra Petch (display) + Inter (cuerpo y datos, cifras tabulares) | Escala: 56/40/28 en escritorio; se reduce en teléfono (sección 12) |
| Geometría | Radios de 4 a 6 px, bordes de 1 px, sombras sutiles solo en tarjetas claras, degradado solo violeta→grafito | Nada de píldoras ni vidrio. Tablas tipo ficha técnica |
| Iconos | 10 iconos de línea, retícula 24, trazo 2, terminación recta; detalle naranja fijo = estado | Se usan pocos y con función. No un icono por título |
| Aplicaciones | Polera, WhatsApp, tarjeta digital, informe, sitio web | El mock de sitio del artefacto usa «Agenda tu mantención» y «Tu auto al día, sin moverte de casa». Ver observación 3 |

**Sin cambios a la identidad.** Los wireframes usan los SVG originales, sin redibujar.

---

## 3. Referencias visuales estudiadas

Solo se describe lo que se vio. Los enlaces que no cargaron se indican.

| Sitio | Qué aprender | Qué evitar |
| --- | --- | --- |
| [mecanicoadomicilio.cl](https://www.mecanicoadomicilio.cl/) · Chile, mecánica a domicilio | WhatsApp y llamada como CTA directo; muestra foto, nombre y ubicación del mecánico **antes** de la visita; proceso en 4 pasos | Testimonios genéricos sin verificación; «técnicos certificados» sin decir por quién |
| [autofact.cl](https://www.autofact.cl/) · Chile, historial vehicular | Campo de patente en la portada: la acción principal es obvia; «Ver informe ejemplo» como prueba del producto | Demasiados productos en la portada diluyen el CTA |
| [yourmechanic.com](https://www.yourmechanic.com/) · EE. UU., mecánica a domicilio | Flujo de 3 pasos claro (cotizar, agendar, reparar); «precio transparente» en el subtítulo | Logos de prensa de hace una década como prueba principal |
| [lemonsquad.com](https://lemonsquad.com/) · EE. UU., inspección | **Informe de muestra** por tipo de vehículo; precios publicados | Portada muy larga con muchos tipos de vehículo |
| [tekmetric.com · inspección digital](https://www.tekmetric.com/feature/digital-vehicle-inspection) · software para talleres | Patrón de informe con fotos, video y marcas por componente | Es B2B; su estética de software no es para clientes finales |
| [repairpal.com](https://www.repairpal.com/) · EE. UU., estimaciones | Explica cómo verifica a los talleres; estimaciones por modelo | Búsqueda local que termina en «no hay talleres aquí» |
| [Cronoshare](https://www.cronoshare.cl/servicios/talleres-mecanicos-mecanicos-a-domicilio/region-metropolitana/santiago) y [2x3.cl](https://www.2x3.cl/servicios/talleres-mecanicos/santiago) · directorios chilenos | Muestran que existe demanda de «cambio de aceite a domicilio» por comuna y que se cobra traslado según distancia | Páginas casi idénticas por comuna (lo que no debemos hacer) |
| AutoExpertos (autoexpertos.cl) · Chile | Según prensa, cotización y reserva online, seguimiento por WhatsApp | **No cargó** (error 503): no se evaluó el sitio |
| Fixter (fixter.co.uk) | — | **No cargó** (error 403) |

**Conclusión de la investigación:** ninguna referencia directa muestra el **informe** como el centro de la propuesta. Los que más se acercan (Autofact, LemonSquad) lo hacen con un enlace a «informe de ejemplo». JJG puede ir más lejos: que el informe sea la imagen de portada.

---

## 4. Diagnóstico de la marca

**Fortalezas**
- Una identidad terminada y coherente, con un concepto que coincide con la propuesta de valor (verificar y documentar).
- Un diferenciador concreto y demostrable: el informe digital con repuestos identificados.
- Honestidad posible: equipo pequeño, responsable técnico visible, catálogo corto.

**Debilidades (hoy)**
- Sin fotos propias, sin reseñas, sin historial de clientes. Toda prueba social tendría que inventarse, y no se hará.
- Capacidad muy limitada: fines de semana, horas por jornada por confirmar, sin catálogo aprobado.
- Datos clave sin definir: comunas, precios, plazo de responsabilidad, número de WhatsApp, política de privacidad.

**Riesgo de posicionamiento**
- La marca tiene estética técnica. Mal usada, parece una app de software o un taller «tuning». La dirección de arte (sección 11) la ancla en trabajo real: fotos de manos, piezas y documentos.

**Tono de voz propuesto:** directo, de tú, frases cortas, verbos concretos. Sin superlativos («el mejor», «expertos»). Se explica qué se hace y qué no. Español neutro, sin modismos.

---

## 5. Propuesta de valor

**Formulación interna (no es copy):** mantención simple a domicilio en la que siempre sabes qué se hizo, con qué repuesto, cuánto costó y qué revisar después, porque cada trabajo queda documentado en un informe y en el historial del auto.

**Titular propuesto para la portada:**
> **Sabrás qué se hizo en tu auto, con qué repuesto y cuánto costó.**

Por qué: habla del dolor real con talleres (no saber qué hicieron ni qué pusieron), es verificable y no promete nada que no esté decidido. Alternativas para elegir entre los tres:
- «Tu auto al día, sin moverte de casa.» (la del artefacto de identidad; pone la comodidad primero)
- «Mantención a domicilio, con informe de cada trabajo.»

**Subtítulo:** «Vamos a tu domicilio a hacer la mantención. Cada trabajo termina con un informe digital: fotos, repuestos identificados, lo que se hizo, lo que no, y qué revisar después.»

**Frente a un taller tradicional:** no dejas el auto; te muestran la pieza retirada; repuestos con marca y referencia; lo no autorizado no se hace; queda un historial.
**Frente a otros mecánicos a domicilio:** el informe y el historial son parte del servicio, no un extra; responsable técnico identificado.

---

## 6. Público objetivo

Según el contexto que diste. **Hipótesis a validar**, no datos de mercado.

| Segmento | Qué le importa | Mensaje que lo mueve | Prioridad en el sitio |
| --- | --- | --- | --- |
| Trabajadores con poco tiempo | No perder un sábado en un taller | «Vamos a tu domicilio» | Alta |
| Familias con un auto de uso diario | Seguridad y no gastar de más | «Sabes qué se hizo y qué revisar después» | Alta |
| Propietarios de autos particulares que desconfían de talleres | Transparencia | Informe, pieza retirada, repuestos identificados | Alta |
| Conductores de aplicaciones | Auto disponible, costo por km | Rapidez y recordatorio de la próxima mantención | Media: horario de fin de semana puede no calzar |
| Pequeñas flotas | Historial por vehículo, facturación | Etapa posterior | No se incluye en esta versión |

**Momento de búsqueda típico:** «me toca el cambio de aceite», «se prendió una luz», «viene la revisión técnica», «salgo de viaje». El sitio responde a los tres primeros con servicios y a «se prendió una luz» con honestidad: leer códigos no es diagnóstico, y el escáner es de la etapa 2.

---

## 7. Estrategia de conversión

**Objetivo principal del sitio:** que la persona inicie una conversación de WhatsApp con los datos mínimos para cotizar.

**Objetivos secundarios:** que entienda qué no hacemos (filtra solicitudes inviables), que vea un informe de ejemplo (prueba del diferenciador), que encuentre la zona y los días.

### 7.1 Recorrido según el origen

| Llega desde | Qué busca | Dónde aterriza | Camino a la conversión |
| --- | --- | --- | --- |
| Google («cambio de aceite a domicilio …») | Si lo hacen, dónde y cuánto | Página del servicio | Ficha del servicio → qué incluye → qué te vamos a preguntar → CTA |
| Instagram | Si es confiable | Portada | Informe de ejemplo → cómo trabajamos → CTA |
| Recomendación | Contacto rápido | Portada o directo a WhatsApp | CTA de la barra fija |
| Google Maps (perfil de empresa) | Teléfono, zona, reseñas | Perfil, luego WhatsApp | Botón de WhatsApp del perfil |

### 7.2 Llamadas a la acción

- **Principal (naranja, una por vista):** «Cotizar por WhatsApp». Dice lo que pasa al tocarlo.
- **Secundaria (contorno):** «Ver un informe de ejemplo».
- **Alternativa para quien no usa WhatsApp:** «Prefiero dejar mis datos» → flujo corto de 3 pasos que **arma el mensaje** (no guarda datos). Ver wireframe 05.
- En el teléfono, **barra fija inferior** con el CTA principal: el contacto nunca está a más de un toque.

### 7.3 Mensaje prellenado de WhatsApp

`Hola, quiero cotizar: [servicio]. Vehículo: [marca y modelo], [año], [km] km. Comuna: [comuna].`
Cada página de servicio rellena el servicio. Esto reduce las idas y vueltas, y no pide patente ni dirección en el primer contacto (recolección mínima).

### 7.4 Elementos de confianza (solo los reales)

| Hoy, sin inventar | Cuando exista |
| --- | --- |
| Informe de ejemplo marcado como ficticio | Informes reales anonimizados, con permiso |
| Proceso escrito: «nada sin tu autorización» | Fotos reales de trabajos con los vehículos piloto y luego de clientes que autoricen |
| Qué no hacemos a domicilio | Reseñas verificadas en el perfil de Google |
| Nombre del responsable técnico (si los tres lo aprueban) | Plazo de responsabilidad escrito, revisado por un profesional |
| Condiciones del lugar | Cobertura confirmada |

**Información que el cliente necesita antes de escribir:** si lo hacemos, si llegamos a su comuna, qué días, qué necesita en el lugar, cómo se paga, qué pasa si aparece otra falla. Todo está en la portada o en preguntas frecuentes; varios valores siguen «Por definir».

### 7.5 Qué medir (cuando se apruebe una analítica)

Toques en «Cotizar por WhatsApp» por página, vistas del informe de ejemplo, conversaciones iniciadas y cotizaciones aceptadas (registro manual en el CRM). Sin cifras objetivo hasta tener datos.

---

## 8. Arquitectura del sitio

**Recomendación: un sitio pequeño, no una página enorme ni un portal.** Evalué cada sección pedida con un criterio: ¿ayuda a que alguien escriba con confianza?

| Sección | ¿Se incluye? | Formato | Por qué |
| --- | --- | --- | --- |
| Inicio | Sí | Página | Responde todo en un recorrido |
| Servicios | Sí | Bloque en inicio + **una página por servicio** solo cuando esté aprobado | Cada servicio es una búsqueda distinta en Google |
| Cómo trabajamos | Sí | Bloque en inicio | Es corto; una página aparte agrega un clic |
| Transparencia y garantía | Sí, **la más importante** | Bloque en inicio + página con el informe de ejemplo completo | Es el diferenciador y merece su propia URL para compartir |
| Nosotros | Sí, breve | Bloque en inicio | Tres personas: una página aparte se vería vacía |
| Preguntas frecuentes | Sí | Bloque en inicio | Resuelve objeciones antes de escribir |
| Solicitar cotización | Sí | WhatsApp + flujo corto opcional | No hace falta un formulario largo |
| Contacto | Fusionado con el cierre y el pie | — | No aporta una página separada |
| Páginas por comuna | **No por ahora** | — | Serían casi idénticas (contenido duplicado). Se evalúa con datos reales |
| Blog | **No por ahora** | — | Sin capacidad para mantenerlo. Se evalúa en la etapa 4 |
| Portal del cliente / historial en línea | **No** | — | Etapa 5. El historial se entrega por WhatsApp en PDF o enlace |

### 8.1 Crecimiento progresivo

| Fase | Qué se agrega | Condición |
| --- | --- | --- |
| A · Pre-lanzamiento | Una página con cupos de prueba (ya existe como vista previa en `web/pre-lanzamiento/`) | Nombre, WhatsApp, comunas y privacidad definidos |
| B · Sitio mínimo | Inicio, Transparencia, Privacidad, Condiciones | Al menos un servicio aprobado por escrito |
| C · Servicios | Una página por servicio aprobado | Cada aprobación en `docs/decisiones.md` |
| D · Contenido | Guías útiles (cómo revisar niveles, cuándo cambiar el aceite según el manual) | Capacidad para escribir y fotos propias |
| E · Conexión con el sistema | Enlace seguro al informe de cada OT | Sistema de gestión aprobado y revisión legal de datos |

---

## 9. Sitemap

```
/                                Inicio
/transparencia/                  Cómo es el informe (ejemplo ficticio completo)
/servicios/cambio-de-aceite/     Solo cuando esté aprobado
/servicios/filtros/              Solo cuando esté aprobado
/servicios/inspeccion-preventiva/  Solo cuando esté aprobado
/servicios/bujias/               Solo cuando esté aprobado
/servicios/bateria/              Solo cuando esté aprobado
/privacidad/                     Política de privacidad (requiere revisión legal)
/condiciones/                    Condiciones del servicio (requiere revisión legal)
/404                             Página no encontrada con CTA a WhatsApp
```

Anclas internas en inicio: `#servicios`, `#como`, `#transparencia`, `#preguntas`, `#cotizar`.

---

## 10. Propuesta de contenido por sección (inicio)

Ver wireframe 01. Los textos son borradores para que los tres los aprueben.

| # | Sección | Contenido | Pendiente |
| --- | --- | --- | --- |
| 1 | Barra superior | Logo compacto · Servicios · Cómo trabajamos · Transparencia · Preguntas · **Cotizar por WhatsApp** | Número de WhatsApp |
| 2 | Portada | Etiqueta «Mantención automotriz a domicilio · Santiago» · titular · subtítulo · 2 CTA · «Atención fines de semana» · **informe de ejemplo como imagen** con sello «Ejemplo ficticio» | Comunas, horario |
| 3 | «Para cotizar, ten a mano» | Marca, modelo y año · kilometraje · comuna · qué necesitas | — |
| 4 | Servicios | Tabla tipo ficha: servicio · qué incluye · estado. Los 6 de la etapa 1 del v2, **todos «En validación»**. Aviso «No todo se puede hacer a domicilio» | Aprobación de Gustavo |
| 5 | Cómo trabajamos | Los 9 pasos agrupados en Antes (1–5), Durante (6–7), Después (8–9). Título: «Nada se hace sin tu autorización. Todo queda registrado.» | Ver observación 1 |
| 6 | Transparencia | Las 4 categorías del informe (realizado, inspeccionado, observación, no realizado) · historial · precio desglosado · enlace al informe completo | Fotos reales |
| 7 | Responsabilidad | «Si algo falla por nuestro trabajo, respondemos.» El plazo va escrito en el comprobante; no reemplaza los derechos legales | Plazo y condiciones: por verificar con un profesional |
| 8 | Quiénes somos | «Un emprendimiento de tres personas, con un responsable técnico.» Retratos reales | Roles y si se publican nombres |
| 9 | Cobertura | «Partimos desde Lo Prado y Estación Central.» Solo comunas reales | Lista de comunas, horario |
| 10 | Preguntas frecuentes | Lugar · pago · otra falla · repuestos propios · aceite usado · lluvia y cancelación | Varias respuestas por definir |
| 11 | Cierre | «Cuéntanos qué auto tienes y qué necesita.» · CTA principal y alternativo | Tiempo de respuesta |
| 12 | Pie | Logo con descriptor · contacto · privacidad · condiciones | Revisión legal |

**Página de servicio (wireframe 02):** ruta de navegación · estado «En validación» · titular · ficha del servicio (precio cerrado antes de empezar, duración, días, informe incluido) · qué incluye / qué no · lo que te vamos a preguntar · condiciones del lugar · fotos del proceso · CTA con mensaje prellenado.

**Página de transparencia (wireframe 03):** informe completo de ejemplo (estructura del v2, sección 8) con notas al margen que explican cada parte. Usa CLI-0001, VEH-0001 y OT-0001; ningún dato real.

---

## 11. Dirección de arte

**Concepto: «ficha técnica de taller».** El sitio se lee como la documentación de un trabajo bien hecho: líneas de 1 px, tablas, cifras alineadas, etiquetas técnicas y fotos de trabajo real. La emoción viene de las fotos y de la claridad, no de efectos.

**Decisiones y por qué:**
1. **El informe es la imagen de portada**, no un auto. Muestra el producto, evita el cliché del deportivo y conecta con la marca de torque.
2. **Servicios como tabla, no como tarjetas.** Evita la fila de tarjetas iguales con icono y permite mostrar el estado de cada servicio con honestidad.
3. **Pasos agrupados en tres fases**, numerados porque son una secuencia real.
4. **Capítulos alternos grafito / blanco humo**, sin degradados de fondo. El violeta solo en paneles de datos del vehículo.
5. **Un botón naranja por vista.** El resto, contorno.
6. **Lo pendiente se ve pendiente:** etiqueta con borde discontinuo. Así nadie confunde la propuesta con la versión final.
7. **Movimiento:** solo cambios de estado (hover, foco, apertura de preguntas). Sin animaciones de aparición. Respeta `prefers-reduced-motion`.

### 11.1 Fotografía

**Regla:** solo fotos propias, con permiso, sin patentes ni domicilios visibles. Nada de bancos de imágenes. Ninguna foto se presenta como trabajo de un cliente si no lo es: las fotos con los vehículos piloto se rotulan como tales cuando corresponda.

**Estilo:** luz natural de día, encuadres cerrados de manos, piezas y herramientas; colores reales; un poco de suciedad honesta. Polera de trabajo grafito con el logo compacto bordado (aplicación ya definida en el artefacto).

---

## 12. Sistema visual propuesto (aplicación web)

Ver wireframe 06. Todo sale de los tokens del sistema JJG Car.

| Elemento | Escritorio | Teléfono |
| --- | --- | --- |
| H1 (Chakra Petch 700) | 52/56 | 32–36/36–40 |
| H2 | 40/44 | 28/32 |
| H3 | 20/24 | 20/24 |
| Cuerpo (Inter 400) | 16/24, hasta 65 caracteres por línea | 16/24 |
| Dato (Inter 500, tabular) | 14/20 | 14/20 |
| Etiqueta (Chakra Petch 600, mayúsculas, +0,08 em) | 12/16 | 12/16 |
| Contenedor | máx. 1160 px, márgenes de 24 px | 16 px |
| Espaciado entre secciones | 64–88 px | 48–64 px |
| Botones | alto 48 px, radio 6 px | alto 52 px, ancho completo |
| Inputs | alto 48 px, borde #5A5F68 (no el aluminio, que no se ve sobre blanco), texto 16 px | igual |
| Foco de teclado | anillo naranja de 2 px con 2 px de separación | igual |

**Componentes:** barra superior, botón principal y secundario, etiqueta «pendiente», fila de servicio, lista de pasos, panel de datos (TelemetryPanel), ficha (SpecTable), estados del informe (realizado, inspeccionado, observación, no realizado: se distinguen por icono, no solo por color), recuadro de foto pendiente, pregunta frecuente desplegable, barra fija móvil.

---

## 13. Propuesta de experiencia móvil

Ver wireframes 04 y 05.

- **Primer pantallazo (390 × 844):** logo, titular, subtítulo, enlace al informe y el comienzo del informe asomando (invita a bajar). La barra fija inferior con «Cotizar por WhatsApp» está siempre visible.
- **Navegación:** menú en botón de 44 × 44 px; las secciones son anclas.
- **Solicitud:** 3 pasos cortos (qué necesitas · tu vehículo · comuna) con vista previa del mensaje. Sin patente ni dirección. Botón «Enviar por WhatsApp».
- **Lectura:** 16 px mínimo, contraste AA, tablas que pasan a filas apiladas.
- **Fotos:** proporción fija para que la página no salte al cargar; formatos modernos y tamaños por pantalla.
- **Rendimiento objetivo:** buenas métricas Core Web Vitals en un teléfono de gama media con 4G. Se medirá; no se promete una cifra.
- **Verificación:** a 360 px de ancho, como pide CLAUDE.md.

---

## 14. Estrategia SEO local

**No tenemos datos de volumen de búsqueda.** No se inventan. Se medirán con Google Search Console (gratis) cuando el sitio exista, y con el Planificador de palabras clave de Google si se decide.

### 14.1 Grupos de intención

| Grupo | Ejemplos de búsqueda | Página destino |
| --- | --- | --- |
| Servicio a domicilio genérico | mecánico a domicilio Santiago, mantención automotriz a domicilio | Inicio |
| Cambio de aceite | cambio de aceite a domicilio, cambio de aceite a domicilio [comuna] | /servicios/cambio-de-aceite/ (cuando se apruebe) |
| Mantención preventiva | mantención preventiva auto, revisión antes de viajar | /servicios/inspeccion-preventiva/ |
| Batería | cambio de batería a domicilio | /servicios/bateria/ |
| Transparencia | informe de mantención, historial de mantención del auto | /transparencia/ |

**Comunas:** el v2 nombra Lo Prado, Estación Central y Quinta Normal, entre otras. **No se crean páginas por comuna** mientras no haya contenido distinto y real para cada una (fotos, casos, condiciones propias). Las comunas atendidas se listan en el inicio y en cada servicio, y en el perfil de Google como área de servicio.

### 14.2 Títulos y metadescripciones (borradores)

| Página | Title (≤ 60 caracteres) | Meta description (≤ 155) |
| --- | --- | --- |
| Inicio | JJG Car Service · Mantención automotriz a domicilio | Mantención de tu auto a domicilio en Santiago, con informe digital, fotos y repuestos identificados. Cotiza por WhatsApp. |
| Cambio de aceite | Cambio de aceite a domicilio · JJG Car Service | Cambio de aceite y filtro en tu domicilio, con el aceite que pide el fabricante y un informe con fotos. Cotiza por WhatsApp. |
| Transparencia | Así es nuestro informe de mantención · JJG Car Service | Qué se hizo, con qué repuesto, cuánto costó y qué revisar después: mira un informe de ejemplo. |

Un solo H1 por página, con la búsqueda principal en lenguaje natural; H2 por sección. Sin repetir palabras clave de forma artificial.

### 14.3 Datos estructurados (JSON-LD)

- `AutoRepair` (subtipo de `LocalBusiness`) con `name`, `url`, `logo`, `areaServed` (solo comunas confirmadas), `openingHoursSpecification` (cuando haya horario), `contactPoint`. **Sin dirección de calle** si se opera como empresa con área de servicio (por verificar en la documentación de Google).
- `Service` en cada página de servicio, con `provider` y `areaServed`. **Sin precio** hasta que esté definido.
- `FAQPage` solo si las preguntas tienen respuesta definitiva.
- `BreadcrumbList` en páginas de servicio.
- Nunca `Review` o `AggregateRating` sin reseñas reales.

### 14.4 Perfil de empresa en Google

Prioridad alta, gratis. Categoría principal a elegir entre las de mecánica disponibles; configurarlo como empresa con área de servicio y dirección oculta (**verificar** requisitos actuales de Google). Fotos reales, servicios aprobados, mismo nombre, teléfono y sitio que la web. Pedir reseña solo a clientes satisfechos, sin incentivos (el v2 ya lo contempla).

### 14.5 Imágenes y rendimiento

Nombres de archivo descriptivos, texto alternativo útil, AVIF/WebP con respaldo, `srcset`, dimensiones fijas, carga diferida bajo el primer pantallazo. Sin fuentes ni scripts innecesarios; fuentes autoalojadas en subconjunto latino.

---

## 15. Recomendación tecnológica

**Principio:** sitio estático, sin servidor ni base de datos, que cualquiera de los tres pueda editar con guía.

| Pieza | Recomendación | Alternativa | Por qué |
| --- | --- | --- | --- |
| Generador | **Astro**, salida estática | HTML y CSS a mano (como el sitio del anteproyecto) | Componentes reutilizables (barra, CTA, servicio), páginas desde archivos Markdown, cero JavaScript por defecto. Si se prefiere no instalar nada, HTML puro sirve para 3–5 páginas |
| Contenido | Un archivo Markdown por servicio (título, estado, qué incluye, qué no, preguntas) | Editor visual tipo CMS sin servidor (Decap, Pages CMS), por evaluar | Agregar un servicio = copiar un archivo y cambiar el texto |
| Estilos | CSS propio con variables tomadas de `tokens.json` del sistema JJG Car | — | Sin framework de utilidades: menos peso y menos dependencia |
| Imágenes | Componente de imagen del generador (formatos modernos y tamaños automáticos) | Exportar a mano en 2 tamaños | Rendimiento en móvil |
| Formularios | **Ninguno con servidor.** WhatsApp con mensaje prellenado; flujo corto que solo arma el texto | Servicio de formularios externo, más adelante | Recolección mínima; evita almacenar datos antes de la revisión de la Ley 21.719 |
| WhatsApp | Enlace `wa.me/<número>?text=` con texto codificado | API de WhatsApp Business (con costo), no ahora | Gratis y suficiente para el volumen inicial |
| Analítica | Sin cookies: Cloudflare Web Analytics o Plausible | Google Analytics 4 con banner de consentimiento | No requiere banner de cookies; por aprobar por costo |
| SEO | Sitemap y robots generados, JSON-LD por plantilla, Search Console | — | — |
| Hosting | Cloudflare Pages o Netlify, plan gratuito | GitHub Pages | Despliegue al hacer push, HTTPS incluido |
| Dominio | `.cl` en NIC Chile | — | Disponibilidad de `jjgcarservice.cl` **por verificar** (aparece en el artefacto como ejemplo) |
| Seguridad | Sitio estático, HTTPS, cabeceras de seguridad, sin secretos en el repositorio | — | Poca superficie de ataque |
| Mantenimiento | Repositorio con historial; guía de «cómo editar un servicio» | — | Evita depender de un desarrollador |

**Conexión futura con el sistema de gestión:** cada informe tendría un identificador (OT-0001) y un enlace privado con token, generado por el sistema (AppSheet u otro). La web no guardaría datos: solo mostraría el informe al dueño del enlace. **No se construye ahora.** Requiere decisión de los tres y revisión legal.

**Todo esto requiere tu aprobación** antes de instalar nada, crear cuentas o publicar (CLAUDE.md, sección 5).

---

## 16. Fotografías y recursos que hay que producir

**Sesión con los vehículos piloto (Nissan March y Hyundai i10)**, de día, en un lugar que cumpla las condiciones del v2 (plano, firme, fuera de la vía pública). Patentes tapadas o fuera de cuadro.

| # | Foto | Uso | Nota |
| --- | --- | --- | --- |
| 1 | Manos con guantes vaciando aceite, plano cerrado | Portada de servicio, «Cómo trabajamos» | Con bandeja y protección de piso |
| 2 | Filtro nuevo junto al retirado | Transparencia, servicio | Fondo neutro |
| 3 | Varilla con el nivel correcto | Servicio | Macro |
| 4 | Celular mostrando el informe | Transparencia, redes | Informe con datos ficticios |
| 5 | Herramientas ordenadas sobre paño | Detalle, redes | — |
| 6 | Revisión de presión de neumáticos | Inspección preventiva | — |
| 7 | Retrato de cada integrante con polera de trabajo | Quiénes somos | Solo si los tres aprueban publicar nombres y caras |
| 8 | Vehículo piloto completo, plano medio | General | Sin patente |
| 9 | Envase de aceite con la especificación visible | Repuestos identificados | Cuidado con exhibir marcas comerciales |

**Seguridad en la sesión:** no se fotografía a nadie bajo un auto sostenido solo por una gata (regla fija del v2).
**Otros recursos:** número de WhatsApp Business, perfil de Instagram, foto de perfil con `jjg-perfil-redes.svg`, favicon desde el isotipo, imagen para compartir en redes (1200 × 630).

---

## 17. Información que falta definir

| Tema | Quién decide | Bloquea |
| --- | --- | --- |
| Registrar el nombre **JJG Car Service** y la identidad en `docs/decisiones.md` | Los tres | Todo lo público (ver observación 2) |
| Servicios aprobados por escrito | Gustavo | Página de servicios |
| Comunas atendidas y radio | Los tres | Cobertura, SEO, perfil de Google |
| Horario y días de atención | Los tres | Portada, perfil de Google |
| Precios o modalidad de precio por servicio | Los tres | Fichas de servicio |
| Plazo por el que se responde por el servicio | Los tres + profesional | Sección de responsabilidad, informe |
| Medios de pago y anticipo | Los tres | Preguntas frecuentes |
| Política de cancelación, lluvia y reprogramación | Los tres | Preguntas frecuentes |
| Repuestos aportados por el cliente | Gustavo | Preguntas frecuentes |
| Destino de aceite, filtros y baterías usados | Por verificar con un profesional | Servicios, preguntas frecuentes |
| Número de WhatsApp Business y cuenta de Instagram | José | CTA |
| Si se publican nombres y fotos del equipo | Los tres | Quiénes somos |
| Dominio | Los tres (por costo) | Publicación |
| Analítica | Los tres (por costo y privacidad) | Medición |
| Titular definitivo | Los tres | Portada |

---

## 18. Riesgos y decisiones pendientes

### 18.1 Aspectos legales (Chile) · todo **por verificar con un profesional**

No es asesoría legal. Lo que se pudo leer:

- **Ley 19.496, art. 40** (texto leído en copias de la ley: [iura.cl](https://iura.cl/19496/41), [leyes-cl.com](https://leyes-cl.com/establece_normas_sobre_proteccion_de_los_derechos_de_los_consumidores/41.htm), [copia de la Universidad de Chile](http://web.uchile.cl/archivos/derecho/CEDI/Normativa/Ley%2019.496%20Sobre%20Protecci%F3n%20de%20los%20Derechos%20de%20los%20Consumidores.pdf)): en la reparación se deben usar repuestos adecuados, nuevos o refaccionados, y si son refaccionados hay que informarlo. A petición del consumidor se detallan en la boleta los repuestos, su precio y la mano de obra. *El informe y el «precio desglosado» del sitio van en esa línea.*
- **Art. 41:** el prestador de un servicio, incluido el de reparación, debe señalar por escrito en la boleta, recibo u otro documento el plazo por el que se hace responsable. *Por eso el sitio no promete un plazo: hay que definirlo y escribirlo en el comprobante.*
- **Presupuesto escrito y monto mínimo:** una fuente comercial menciona un umbral fijado por reglamento; **no se pudo confirmar en fuente oficial**. Por verificar.
- **Garantía legal y derechos del consumidor:** ningún texto del sitio debe reducirlos. La frase «no reemplaza tus derechos como consumidor» se mantiene hasta que un profesional proponga la redacción.
- **El texto oficial en BCN no se pudo cargar** desde este entorno (la página exige navegador) y la página de SERNAC respondió con error. Hay que leer la versión consolidada vigente en bcn.cl antes de publicar textos.
- **Datos personales:** rige la Ley 19.628. La **Ley 21.719** entra en vigencia el **1 de diciembre de 2026** salvo que antes se publique la ley de postergación (boletín 18.623-07). Las fuentes revisadas no coinciden sobre su avance ([Academia Judicial](https://academiajudicial.cl/recursos/actualizaciones-normativas/ley-21-719-que-regula-la-proteccion-y-el-tratamiento-de-los-datos-personales-y-crea-la-agencia-de-proteccion-de-datos-personales/), [Eguiguren Abogados](https://www.eguigurenyabogados.cl/newsletter/modificaciones-prorroga-regimen-ley-datos-personales), [Orbix](https://orbixconsultor.cl/guias/vigencia-ley-21719)). Verificar en tramitacion.senado.cl. Mientras tanto, el sitio no guarda datos y el flujo de cotización solo arma un mensaje.
- **Política de privacidad y condiciones del servicio:** se necesitan antes de publicar. Deben decir qué datos se piden por WhatsApp, para qué, cuánto tiempo se guardan, quién los ve y cómo pedir su eliminación. Requieren abogado.

### 18.2 Riesgos del sitio

| Riesgo | Mitigación |
| --- | --- |
| Publicar servicios no aprobados | Etiqueta «En validación» y regla: una página de servicio se publica solo con aprobación escrita en `decisiones.md` |
| Recibir más solicitudes de las que se pueden atender | Sin publicidad pagada; cobertura real; mensaje de «cupos de fin de semana» |
| Expectativa de diagnóstico | «Inspección visual no es diagnóstico» en servicios e informe |
| Contenido que parezca inventado | Ejemplos marcados como ficticios; sin testimonios hasta tener reseñas reales |
| Fotos con datos de clientes | Protocolo de permisos y revisión antes de publicar |
| Dependencia de un desarrollador | Contenido en Markdown y guía de edición |
| Que el empleo de Gustavo tenga cláusulas de exclusividad | Por verificar con un profesional antes de publicar su nombre o rol (observación 12 de CLAUDE.md) |

### 18.3 Decisiones que te pido en esta revisión

1. ¿Apruebas la arquitectura pequeña (inicio + transparencia + páginas de servicio cuando se aprueben)?
2. ¿Qué titular prefieres para la portada?
3. ¿El informe como imagen de portada, o prefieres una foto real cuando exista?
4. ¿Astro o HTML a mano?
5. ¿Se publican nombres y caras del equipo?
6. ¿Pasamos a la fase 2 (maqueta navegable en alta fidelidad) o ajustamos primero los wireframes?

---

## Observaciones y contradicciones encontradas

1. **Pasos del proceso:** tu pedido define 9 pasos; el v2 dice «seis pasos» para la web y 14 en el flujo de atención (contradicción 1 de CLAUDE.md). Los wireframes usan tus 9. Hay que elegir.
2. **Nombre comercial:** tu mensaje fija **JJG CAR SERVICE**, y la identidad ya está hecha con ese nombre, pero CLAUDE.md y `docs/decisiones.md` todavía dicen «nombre pendiente» y no hay decisión registrada de los tres. No lo corregí: falta registrarlo.
3. **Paleta:** CLAUDE.md (sección 6) y `assets/estilos.css` describen otra paleta (carbón #141417, morado #5b2a86, amarillo #ffb000) y otras tipografías. El artefacto de identidad y el sistema JJG Car usan grafito #25272D, violeta #59416F y naranja #E98232 con Chakra Petch e Inter. Usé la del artefacto, como pediste. Falta decidir si CLAUDE.md se actualiza y si la web de pre-lanzamiento migra a la nueva identidad.
4. **CTA del artefacto:** el mock de sitio en el artefacto de identidad dice «Agenda tu mantención», pero todavía no hay agenda ni horario; propongo «Cotizar por WhatsApp» hasta que exista. El mock también muestra «Revisión de frenos · 28,0 mm» en el informe, y frenos es etapa 2.
5. **Responsable de coordinación:** tu pedido dice que la coordinación está a cargo del responsable de gestión; CLAUDE.md lo deja «propuesto, no definitivo».
6. **Zona base:** tu pedido dice «Lo Prado / Estación Central»; el v2 dice que el radio está pendiente (contradicción 3 de CLAUDE.md).
7. **Medios de pago:** tu pedido dice efectivo y transferencia; el v2 los deja por definir (sección 6.5).
8. **Ley 21.719:** el v2 dice que el Senado aprobó la postergación en primer trámite el 28 de octubre de 2026; una fuente revisada dice que al 11 de octubre seguía en comisión sin votaciones, y otra que fue aprobada en el Senado. No se pudo confirmar.
9. **Skills pedidas no instaladas:** frontend-design, impeccable, web-design-guidelines, brand-guidelines y copywriting no están en este entorno; se usaron sus fuentes públicas.
