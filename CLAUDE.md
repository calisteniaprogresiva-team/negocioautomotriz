# CLAUDE.md · Contexto maestro del proyecto

> Claude Code lee este archivo automáticamente al abrir el repositorio. Aquí está todo lo necesario para seguir construyendo la empresa sin perder el contexto: qué es, en qué estado está, qué reglas no se rompen y cómo trabajar cada nuevo entregable (documentos, PDF, web, portal, sistemas).

---

## 1. Qué es este proyecto

Una **empresa de mecánica automotriz a domicilio en Santiago de Chile**, en etapa de anteproyecto. Todavía **no opera**, no tiene nombre comercial, no tiene sociedad constituida y ningún servicio está aprobado técnicamente.

**En una frase (del anteproyecto v2):** servicio de mantención simple de vehículos a domicilio, con agenda, historial del auto de cada cliente y recordatorios de la próxima mantención. Por ahora, solo fines de semana.

**Lo que se busca:** no ser «personas que cambian aceite a domicilio», sino una empresa de servicios automotrices que gestione bien la experiencia completa del cliente. Cinco pilares: confianza, profesionalismo, comodidad, seguimiento y responsabilidad.

## 2. Personas

| Persona | Rol propuesto (no definitivo) | Notas |
| --- | --- | --- |
| **José Vargas** (aparece como «Usuario» en el v2) | Gestión y desarrollo empresarial: clientes, reservas, experiencia, fidelización, marketing, web, CRM, automatización, fichas, informes, indicadores | Es quien trabaja con Claude Code. Por definir si administra el dinero y los documentos tributarios (decisión de los tres). Aporta el Hyundai i10 como vehículo piloto. |
| **Gustavo** | Dirección técnica automotriz | Trabaja en Bruno (Chile) y solo trabaja dos sábados al mes allí. **Corrección de José del 14 de nov de 2026:** el v2 dice que trabaja en una tienda de repuestos; eso no es correcto. **Tiene veto técnico**: puede detener un servicio por sí solo. Aporta el Nissan March como vehículo piloto. Por confirmar: horas por jornada, si conoce sus sábados con anticipación, cláusulas de exclusividad o no competencia (en su trabajo actual). |
| **Javier Cañi** | Incorporación pendiente | No se ha definido nada: experiencia, disponibilidad, aportes, funciones ni participación. |

No hay porcentajes, aportes ni responsabilidades definitivas. **Nunca** los asumas.

## 3. Estado actual (actualizar cada vez que cambie)

- **Fecha de este estado:** 14 de noviembre de 2026.
- **Etapa del plan:** antes de la etapa 1 (Validación).
- **Próximo hito:** reunión de socios del **domingo 15 de noviembre de 2026, 18:00**. Agenda y resultados esperados en `docs/anteproyecto-v2.md`, sección 18.
- **Hecho:**
  - Sitio estático de solo lectura del anteproyecto v2 (raíz del repositorio), para la reunión.
  - Publicado como página privada de Claude: https://claude.ai/artifact/KuwZubRshgu3fzhBAeABRq (solo la ve José hasta que la comparta desde claude.ai).
  - Borrador inicial del 6 de noviembre guardado como referencia en `docs/documento-inicial.md`.
  - Maqueta de la web con variantes de color: https://claude.ai/artifact/YUwsxaZBiq5dvKd9AAK8xt (privada).
  - Documento compartido para completar entre socios, porque no habrá reunión presencial: https://claude.ai/artifact/Thrjf7DfTbAQ866S2FGLM4 (privado hasta que José lo comparta). Tiene preguntas para cada socio, tabla de decisiones y resultados esperados. **Fecha límite para responder: lunes 16 de noviembre de 2026.**
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

**Nombre comercial: pendiente.** Criterios: corto, fácil de decir por teléfono, disponible como dominio y en redes, que no limite el crecimiento, y sin marca igual registrada en INAPI (por verificar). Mientras no haya nombre, no inventes uno: usa «[Nombre por definir]».

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
| Página web comercial | `web/` | Etapa 3 en adelante | **No publicar** antes de validar capacidad, precios y cobertura |
| Portal del cliente | `portal/` | Etapa 5 (Crecimiento) | Solo idea; no construir sin decisión |
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
11. El v2 (secciones 2.2 y 17) dice que Gustavo trabaja en venta de repuestos o en una tienda de repuestos. José corrigió el 14 de noviembre: trabaja en Bruno, no en una tienda de repuestos. El v2, el sitio de lectura y su página publicada todavía dicen lo anterior; falta decidir si se corrigen.

Temas del documento inicial que **no pasaron** al v2 (no recuperarlos sin decisión): modalidad de punto fijo (cochera o bodega por horas), convenios con oficinas y comunidades de edificios, franquicia o método replicable, lista de indicadores semanales, reparto de roles «cuerpo y cerebro» entre dos socios, y la administración del dinero asignada a José.

## 10. Mapa del repositorio

| Ruta | Qué es |
| --- | --- |
| `CLAUDE.md` | Este archivo: contexto maestro |
| `docs/prompt-maestro.md` | Prompt para pegar al iniciar una sesión nueva (por ejemplo, fuera de este repositorio) |
| `docs/decisiones.md` | Registro de acuerdos de los socios |
| `docs/anteproyecto-v2.md` | Anteproyecto vigente |
| `docs/documento-inicial.md` | Borrador inicial, solo referencia |
| `marca/brief-diseno-web.md` | Recomendación de color, paletas y prompt para Claude Design |
| `index.html` … `anexo.html` | Sitio de lectura (13 páginas) |
| `assets/estilos.css`, `assets/menu.js` | Estilos e único script del sitio |
| `README.md` | Cómo abrir el sitio |

**Sitio de lectura:** HTML y CSS puro, script mínimo solo para el menú, sin frameworks, sin npm, sin compilación, sin formularios, cookies, analítica ni recursos externos. Se abre con doble clic en `index.html`. Si cambia el anteproyecto, hay que actualizar las páginas y volver a publicar la página privada (el link se mantiene).
