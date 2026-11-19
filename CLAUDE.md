# CLAUDE.md · Contexto maestro del proyecto

> Claude Code lee este archivo automáticamente al abrir el repositorio. Aquí está todo lo necesario para seguir construyendo la empresa sin perder el contexto: qué es, en qué estado está, qué reglas no se rompen y cómo trabajar cada nuevo entregable (documentos, PDF, web, portal, sistemas).

---

## 1. Qué es este proyecto

Una **empresa de mecánica automotriz a domicilio en Santiago de Chile**, en etapa de anteproyecto. Todavía **no opera**, no tiene sociedad constituida y ningún servicio está aprobado técnicamente. **Nombre comercial propuesto: JJG Car Service** (con identidad visual hecha), pendiente de registrar como decisión de los tres.

**En una frase (del anteproyecto v2):** servicio de mantención simple de vehículos a domicilio, con agenda, historial del auto de cada cliente y recordatorios de la próxima mantención. Por ahora, solo fines de semana.

**Lo que se busca:** no ser «personas que cambian aceite a domicilio», sino una empresa de servicios automotrices que gestione bien la experiencia completa del cliente. Cinco pilares: confianza, profesionalismo, comodidad, seguimiento y responsabilidad.

## 2. Personas

| Persona | Rol propuesto (no definitivo) | Notas |
| --- | --- | --- |
| **José Vargas** (aparece como «Usuario» en el v2) | Gestión y desarrollo empresarial: clientes, reservas, experiencia, fidelización, marketing, web, CRM, automatización, fichas, informes, indicadores | Es quien trabaja con Claude Code. Por definir si administra el dinero y los documentos tributarios (decisión de los tres). Aporta el Hyundai i10 como vehículo piloto. |
| **Gustavo** | Dirección técnica automotriz | Tiene otro empleo y solo trabaja dos sábados al mes allí. No se nombra la empresa. (José corrigió el 14 de nov de 2026 que no trabaja en una tienda de repuestos; ya corregido en el v2 y el sitio.) **Tiene veto técnico**: puede detener un servicio por sí solo. Aporta el Nissan March como vehículo piloto. Por confirmar: horas por jornada, si conoce sus sábados con anticipación, cláusulas de exclusividad o no competencia (en su trabajo actual). |
| **Javier Cañi** | Incorporación pendiente | No se ha definido nada: experiencia, disponibilidad, aportes, funciones ni participación. |

No hay porcentajes, aportes ni responsabilidades definitivas. **Nunca** los asumas.

## 3. Estado actual (actualizar cada vez que cambie)

- **Fecha de este estado:** 19 de noviembre de 2026.
- **Etapa del plan:** antes de la etapa 1 (Validación).
- **Próximo hito:** que los tres revisen el sitio de ejemplo y registren en `docs/decisiones.md` los temas de la lista «Por registrar». (La reunión presencial del domingo 15 de noviembre no se hizo; se reemplazó por el documento compartido, con plazo hasta el 16.)
- **Por registrar (los tres deben confirmar; hasta entonces es propuesta):**
  1. Nombre comercial **JJG Car Service** y descriptor «Mantención y servicio automotriz».
  2. Identidad «Marca de torque»: logo, paleta grafito #25272D, violeta #59416F, naranja #E98232, aluminio #AEB4BC, blanco humo #F5F5F3; tipografías Chakra Petch e Inter. José pidió usarla al 100 % en la web (19 de nov).
  3. Zona base Lo Prado / Estación Central y comunas que se atienden.
  4. Medios de pago iniciales (efectivo y transferencia) y si hay anticipo.
  5. Proceso de atención para la web: 3 pasos en el sitio de ejemplo, frente a 6, 9 y 14 en otros documentos.
  6. Responsable de la coordinación de clientes (José, según el pedido del 19 de nov; el rol sigue «propuesto»).
  7. Servicios iniciales aprobados por Gustavo por escrito.
  8. Si se publican nombres y fotos del equipo.
  9. Tecnología del sitio (Astro o HTML a mano), dominio y analítica.
- **Por actualizar cuando se registre lo anterior:** la sección 6 de este archivo, `assets/estilos.css`, `docs/prompt-maestro.md`, la web de pre-lanzamiento (`web/pre-lanzamiento/`) y la maqueta (`web/maqueta/`), que siguen con la paleta anterior y «[Nombre por definir]»; los wireframes de Claude Design (quedaron como referencia anterior al sitio de ejemplo); y los datos ficticios del sitio de ejemplo, que se reemplazan por los reales o por «Por definir» antes de cualquier publicación.
- **Hecho:**
  - Sitio estático de solo lectura del anteproyecto v2 (raíz del repositorio), para la reunión.
  - Publicado como página de Claude: https://claude.ai/artifact/KuwZubRshgu3fzhBAeABRq. **Al 18 de nov de 2026 sigue pública** (cualquiera con el link). José pidió dejarla privada y debe cambiarlo él desde Compartir; no se ha confirmado. La versión publicada **no** incluye la sección 13 ni las respuestas.
  - Borrador inicial del 6 de noviembre guardado como referencia en `docs/documento-inicial.md`.
  - Maqueta de la web con variantes de color: https://claude.ai/artifact/YUwsxaZBiq5dvKd9AAK8xt (privada).
  - Documento compartido para completar entre socios, porque no habrá reunión presencial: https://claude.ai/artifact/Thrjf7DfTbAQ866S2FGLM4 (privado hasta que José lo comparta). Tiene preguntas para cada socio, tabla de decisiones y resultados esperados. **Fecha límite para responder: lunes 16 de noviembre de 2026.**
  - Página `respuestas.html` (sección 13 del sitio) y `docs/respuestas-socios.md`: reciben una copia de las respuestas. Copia del 18 de nov de 2026: respuestas de Gustavo (le llegaron a José por captura de pantalla, sin las preguntas citadas, así que la pregunta a la que responde cada una se dedujo de 9 capturas de lo que Gustavo estaba leyendo en el sitio, con su hora; los mensajes 4 a 8, 14, 17 y 23 siguen por confirmar). Javier todavía no responde. **No publicar estas páginas mientras el sitio sea público**: las respuestas incluyen datos del contrato y los planes laborales de Gustavo.
  - Web de pre-lanzamiento, vista previa privada (solo José): https://claude.ai/artifact/UCekWY4M2JbhnKtz6pcE29. Sin precios, sin formularios, contacto solo por WhatsApp con mensaje prellenado. Pendientes antes de publicar: nombre comercial, número de WhatsApp, comunas, política de privacidad, color definitivo, fotos reales con permiso, y revisar que los pasos de «Cómo funciona» y los textos sean aprobados por los tres.
  - Propuesta estratégica y de diseño del sitio oficial de **JJG Car Service** (fase 1, sin programar): `web/estrategia/propuesta-sitio-jjg.md`, con wireframes en Claude Design (privado): https://claude.ai/artifact/XCoMRfKuSoUoHuG9XGsgV3. Usa la identidad «Marca de torque» (https://claude.ai/artifact/2HAMs4TUDxxN3wqGz3RtgR) y el sistema de diseño JJG Car (https://claude.ai/artifact/H6oqxiC3DThBKM3XdNCUbR). El 19 de nov José pidió una web de ejemplo responsive con menos pasos: `web/ejemplo-jjg/index.html`, página privada https://claude.ai/artifact/2hziHnmPA52Rr5AuAbRDck (contacto en un toque por WhatsApp, proceso en 3 pasos, datos ficticios marcados). **El nombre JJG Car Service y la nueva paleta (grafito #25272D, violeta #59416F, naranja #E98232, Chakra Petch + Inter) aún no están registrados en `docs/decisiones.md`; las secciones 6 de este archivo y `assets/estilos.css` siguen con la paleta anterior.**
- **Pendiente:** lo que los socios respondan en el documento compartido. Cuando los tres marquen un tema como acordado, pasarlo a `docs/decisiones.md`.
- **Pendiente (anterior):** todo lo que la reunión decida. Registrar cada acuerdo en `docs/decisiones.md`.

## 4. Fuentes de verdad (en este orden)

1. **`docs/decisiones.md`**: acuerdos tomados por los tres socios, con fecha. Lo que está aquí manda sobre el anteproyecto.
2. **`docs/anteproyecto-v2.md`**: anteproyecto vigente (8 de noviembre de 2026). Es la fuente del sitio actual.
3. **`docs/documento-inicial.md`**: borrador del 6 de noviembre. **Solo referencia histórica**; no usarlo como fuente sin que José lo pida.

Si dos fuentes se contradicen, **no lo resuelvas tú**: anota la contradicción y pregunta.

## 5. Reglas que no se rompen

### Contenido
- **No inventar** capacidades, acuerdos, precios, costos, plazos, porcentajes ni decisiones. Lo que no está decidido se muestra como **«Por definir»** o **«Por confirmar»**.
- **No agregar cifras de mercado ni estadísticas.**
- Lo que el documento marca como *verificar* (temas legales, tributarios, seguros, residuos) se muestra como **«Por verificar con un profesional»**. No des asesoría legal ni tributaria como si fuera definitiva.
- Si un dato parece contradictorio, **no lo corrijas**: anótalo en una lista de observaciones al final de tu respuesta.
- Ningún servicio se presenta como disponible hasta que Gustavo lo apruebe por escrito y quede en `docs/decisiones.md`.
- Las duraciones de las etapas son orientativas, no compromisos.

### Datos personales
- No usar nombres reales de clientes. Usar identificadores genéricos: `CLI-0001`, `VEH-0001`, `OT-0001`.
- No publicar patentes, domicilios ni fotos de clientes.
- Recolección mínima. La **Ley 21.719** de protección de datos entra en vigencia el 1 de diciembre de 2026, salvo que antes se publique la postergación (por verificar). Todo lo que guarde datos personales necesita revisión antes de usarse con clientes reales.

### Forma de trabajo
- **No publicar nada en internet, no crear repositorios remotos ni servicios externos, y no instalar dependencias sin preguntar antes a José.**
- No contratar ni configurar herramientas de pago: las herramientas de la sección 10.1 del v2 requieren aprobación de los tres por su costo.
- No usar infraestructura, cuentas ni datos de **Calistenia Progresiva** para este negocio sin acuerdo expreso. Se puede reutilizar *el método* (ver sección 10.4 del v2), no las cuentas.
- Escribir en **español neutro** (sin voseo ni modismos).
- Desarrollar en una rama, con commits claros. No crear pull requests si José no los pide.

## 6. Identidad visual (propuesta, a validar entre los tres)

**Identidad nueva en uso para la web de JJG Car Service (19 de nov de 2026, pendiente de registro):** «Marca de torque», en https://claude.ai/artifact/2HAMs4TUDxxN3wqGz3RtgR y el sistema de diseño https://claude.ai/artifact/H6oqxiC3DThBKM3XdNCUbR. Grafito #25272D (40 %), blanco humo #F5F5F3 (20 %), violeta #59416F (20 %), aluminio #AEB4BC (10 %), naranja #E98232 (10 %, solo CTA y marca de torque). Chakra Petch en títulos, Inter en texto. Radios de 4 a 6 px. No modificar el logo ni los colores. Se usa en `web/estrategia/` y `web/ejemplo-jjg/`.

**Identidad anterior** (sitio de lectura, maqueta y pre-lanzamiento; se reemplaza cuando los tres registren la nueva):

| Elemento | Valor usado en el sitio |
| --- | --- |
| Base | Negro carbón `#141417` |
| Marca y acento | Morado profundo `#5b2a86` (morado claro `#cfaef5` sobre fondo oscuro). Nada pastel. |
| Lectura | Blanco |
| Detalles y fondos secundarios | Gris acero (`#aeb3bc` claro) |
| Solo avisos, pendientes y riesgos | Amarillo o naranja de seguridad `#ffb000`. **Nunca** como color de marca. |
| Títulos | Recios, condensados, industriales (Bahnschrift, Roboto Condensed, Arial Narrow) |
| Texto | Sans-serif limpia del sistema (`system-ui`) |
| Gráficos | Chapa, tornillos, llaves, franjas. Sin caricaturas. |

Las variables están en `assets/estilos.css`. Reutilízalas en todo entregable nuevo para que todo se vea como una sola marca.

**Nombre comercial: JJG Car Service propuesto, pendiente de registro en `docs/decisiones.md`.** En entregables de JJG se usa ese nombre; en los documentos anteriores sigue «[Nombre por definir]» hasta el registro. Criterios que se pedían: corto, fácil de decir por teléfono, disponible como dominio y en redes, que no limite el crecimiento, y sin marca igual registrada en INAPI (por verificar). Mientras no haya nombre, no inventes uno: usa «[Nombre por definir]».

## 7. Hoja de ruta de entregables

Cada entregable va en su propia carpeta. Antes de empezar uno, revisa en qué etapa del plan está el proyecto: **no se construye lo de una etapa posterior como si estuviera aprobado**.

| Entregable | Carpeta sugerida | Etapa del plan (v2, sección 16) | Estado |
| --- | --- | --- | --- |
| Sitio de lectura del anteproyecto (para socios) | raíz (`index.html` y demás) | Antes de la etapa 1 | Hecho |
| PDF del anteproyecto para imprimir o enviar | `entregables/pdf/` | Antes de la etapa 1 | Por hacer si José lo pide |
| Acta y acuerdos de la reunión del 15 | `docs/decisiones.md` | Etapa 1 | Después de la reunión |
| Documentos de operación: procedimientos por servicio, checklist de seguridad, inventario de herramientas, protocolo de reclamos | `operacion/` | Etapas 1 y 2 | Contenido técnico lo valida Gustavo |
| Documentos para el cliente: condiciones del servicio, autorización de trabajo, política de privacidad, consentimiento de fotos, garantía | `cliente/` | Etapa 2 | Requiere revisión de abogado |
| Modelo de datos (clientes, vehículos, tenencias, solicitudes, cotizaciones, OT, repuestos, pagos) | `sistemas/` | Etapa 2 | Propuesta: Google Sheets + AppSheet, por aprobar |
| Plantilla del informe al cliente | `sistemas/` | Etapa 2 | Estructura en v2, sección 8 |
| Maqueta de prueba de la web comercial (variantes A morado y B azul acero, cambia con #morado / #azul) | `web/maqueta/index.html` | Antes de la etapa 1 | Hecha; publicada como página privada para comparar en la reunión |
| Web de pre-lanzamiento (una página: cupos de prueba por WhatsApp, sin precios ni formularios) | `web/pre-lanzamiento/index.html` | Etapa 3 (prueba controlada) | Hecha como vista previa privada; **no publicar** hasta tener nombre, número de WhatsApp, comunas y política de privacidad, y que Gustavo apruebe lo que se ofrece. Las instrucciones para publicar están en un comentario al inicio del archivo |
| Propuesta estratégica, arquitectura, SEO y wireframes del sitio oficial JJG Car Service | `web/estrategia/` | Antes de la etapa 1 (planificación) | Hecha la fase 1; espera revisión de José antes de programar |
| Página web comercial completa | `web/` | Etapa 3 en adelante | **No publicar** antes de validar capacidad, precios y cobertura |
| Portal del cliente | `portal/` | Etapa 5 (Crecimiento) | Solo idea; no construir sin decisión |
| Sitio de ejemplo responsive JJG Car Service (datos ficticios, para el equipo) | `web/ejemplo-jjg/` | Antes de la etapa 1 | Hecho; página privada https://claude.ai/artifact/2hziHnmPA52Rr5AuAbRDck. **No publicar abierto** |
| Brief de diseño y prompt para probar la web en Claude Design (variantes morado y azul acero) | `marca/brief-diseno-web.md` | Antes de la etapa 1 | Hecho; la decisión de color es de los tres |
| Identidad: logo, tarjetas, uniforme | `marca/` | Cuando haya nombre | Pendiente del nombre |

Estructura de la web comercial según el v2 (sección 11): Inicio · Servicios · Cómo funciona · Cobertura real · Confianza · Contacto. Solo se publica la cobertura real, sin comprar publicidad antes de validar.

## 8. Cómo trabajar cada pedido nuevo

1. **Lee** `docs/decisiones.md` y la sección del anteproyecto que corresponda.
2. **Confirma la etapa**: si el pedido es de una etapa posterior, dilo y propón una versión marcada como borrador o maqueta («EJEMPLO»).
3. **Propón antes de construir** si el pedido es grande: estructura, archivos y qué queda «Por definir».
4. **Construye** respetando las reglas de la sección 5 y la identidad de la sección 6.
5. **Verifica**: que funcione sin conexión cuando corresponda, que se lea bien en un celular de 360 px y que no tenga datos personales reales.
6. **Actualiza este archivo** (sección 3, Estado actual, y la tabla de la sección 7).
7. **Cierra tu respuesta** con: qué hiciste, qué quedó pendiente y la lista de observaciones o contradicciones encontradas.

## 9. Contradicciones conocidas del anteproyecto v2 (no corregir sin decisión)

1. La web habla de «Cómo funciona (seis pasos)», pero el flujo de atención tiene 14 pasos.
2. Los «11 estados de la versión anterior» del CRM no están en ninguno de los dos documentos.
3. El modelo inicial dice «con radio definido», pero el radio está pendiente.
4. Regla de 10 ejecuciones por servicio frente a 10 a 20 clientes repartidos en 6 servicios.
5. Recordatorio y encuesta aparecen en el flujo, pero se automatizan recién en la etapa de optimización.
6. El reclamo «manual al inicio» está listado entre las automatizaciones.
7. La inspección revisa el estado visible de las pastillas (etapa 1), pero los frenos son de la etapa 2.
8. El plan anual aparece como fuente de ingreso y también como idea para más adelante.
9. Ley 21.719: vigencia el 1 de diciembre de 2026, con una postergación aún no verificada.
10. El informe lleva datos del cliente, pero los documentos internos usan identificadores.

Observaciones sobre las respuestas de Gustavo (18 de nov de 2026), sin resolver:

11. José corrigió el 14 de nov que Gustavo no trabaja en una tienda de repuestos, y el v2 y el sitio pasaron a decir «tiene otro empleo». Gustavo responde que su contrato es de «vendedor de repuestos». Falta decidir cómo se describe su empleo.
12. Gustavo tiene cláusulas de exclusividad y cree que alcanzan «cualquiera de las actividades que hace» su empleador; dice que debe volver a leer el contrato. Por verificar con un profesional antes de que opere el negocio.
13. Sobre las baterías describe subir el precio e incluir la instalación «para que no se vea raro». El v2 pide transparencia con los repuestos (sección 3.2 y principio 7).
14. Dice que requiere «una gata sí o sí» (según el orden de sus mensajes, para frenos y trabajos de mayor complejidad) y no menciona soportes. La regla fija del v2 prohíbe trabajar bajo un vehículo sostenido solo por una gata.
15. Su lista de costos del precio (hora hombre, traslado y desgaste, publicidad) no incluye costos que el v2 (sección 14) sí lista: repuestos, insumos, comisión de medios de pago, seguro, residuos y contabilidad.
16. Ya anota las patentes de clientes y les avisa de la revisión técnica: son datos personales (Ley 21.719, por verificar). Ofrece subir a Drive las pautas de cálculo de su empleador: verificar antes si son material confidencial.
17. Menciona cifras sueltas (20 mil pesos de abono, 200k por una interfaz de escáner, 50 mil por la revisión técnica). Son sus comentarios, no precios ni decisiones.
18. Un mensaje quedó cortado («el kit de»); José indicó que sigue «kit de embrague» (por confirmar con Gustavo). El de «Lo de arriba si» se leyó como inspección visual preventiva, según la captura de las 3:48 p. m.

19. Gustavo propone como ejemplo vender un kit de embrague en promoción. El v2 (sección 4.3) dice que los embragues se derivan a talleres colaboradores desde el inicio.

Observaciones de la propuesta web JJG Car Service (19 de nov de 2026), sin resolver:

20. Pasos del proceso: 6 en el v2 (web), 14 en el flujo de atención, 9 en el pedido de José del 19 de nov y 3 en el sitio de ejemplo.
21. El mock de sitio del artefacto de identidad dice «Agenda tu mantención» (no hay agenda) y su informe incluye frenos (etapa 2).
22. El pedido del 19 de nov da como hechos la zona base, los medios de pago y quién coordina; el v2 los deja por definir.
23. El sitio de ejemplo muestra horario, precios «Desde $ 00.000», comunas, pago al terminar, reprogramación sin costo y los 6 servicios como si estuvieran decididos. Son datos ficticios para el equipo: no publicar así.
24. Ley 21.719: las fuentes revisadas el 19 de nov no coinciden sobre el avance de la postergación (boletín 18.623-07) con lo que dice el v2.
25. El texto oficial de la Ley 19.496 no se pudo leer en BCN desde este entorno; los arts. 40 y 41 se leyeron en copias. El umbral de presupuesto escrito no se confirmó.

Temas del documento inicial que **no pasaron** al v2 (no recuperarlos sin decisión): modalidad de punto fijo (cochera o bodega por horas), convenios con oficinas y comunidades de edificios, franquicia o método replicable, lista de indicadores semanales, reparto de roles «cuerpo y cerebro» entre dos socios, y la administración del dinero asignada a José.

## 10. Mapa del repositorio

| Ruta | Qué es |
| --- | --- |
| `CLAUDE.md` | Este archivo: contexto maestro |
| `docs/prompt-maestro.md` | Prompt para pegar al iniciar una sesión nueva (por ejemplo, fuera de este repositorio) |
| `docs/decisiones.md` | Registro de acuerdos de los socios |
| `docs/respuestas-socios.md` | Copia en texto de las respuestas de los socios (la misma que `respuestas.html`) |
| `docs/anteproyecto-v2.md` | Anteproyecto vigente |
| `docs/documento-inicial.md` | Borrador inicial, solo referencia |
| `web/estrategia/propuesta-sitio-jjg.md` | Propuesta estratégica y de diseño del sitio JJG Car Service |
| `web/ejemplo-jjg/` | Sitio de ejemplo responsive JJG Car Service (datos ficticios) |
| `marca/brief-diseno-web.md` | Recomendación de color, paletas y prompt para Claude Design |
| `index.html` … `anexo.html` | Sitio de lectura (14 páginas: 13 secciones y el anexo) |
| `assets/estilos.css`, `assets/menu.js` | Estilos e único script del sitio |
| `README.md` | Cómo abrir el sitio |

### Cómo copiar las respuestas de los socios (cuando José lo pida)

El sitio no recibe datos: las respuestas se escriben en el documento compartido (doc id `d84201ab-ec6a-426c-b59d-9783240fe2cf`, se lee con las herramientas de Claude Docs) y se copian aquí a mano.

1. Lee el documento y copia **textualmente** las respuestas, sin resumir ni corregir.
2. Actualiza `docs/respuestas-socios.md` y `respuestas.html` con las mismas respuestas, y cambia el recuadro «Última copia» con la fecha.
3. Lo que siga sin respuesta se queda como «Por responder», «Por marcar» o «Por proponer».
4. Un tema pasa a `docs/decisiones.md` solo cuando los tres lo marcaron igual.
5. Las respuestas pueden incluir datos de cada socio (horarios, cláusulas del contrato): el sitio es solo para los tres, no se publica abierto.
6. Vuelve a publicar la página privada (el link se mantiene).

Las páginas se editan a mano: el generador que las creó no está en el repositorio. Si se agrega una página, hay que actualizar el menú y la paginación de todas.

**Sitio de lectura:** HTML y CSS puro, script mínimo solo para el menú, sin frameworks, sin npm, sin compilación, sin formularios, cookies, analítica ni recursos externos. Se abre con doble clic en `index.html`. Si cambia el anteproyecto, hay que actualizar las páginas y volver a publicar la página privada (el link se mantiene).
