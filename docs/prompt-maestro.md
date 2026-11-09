# Prompt maestro

Hay dos formas de usarlo:

- **Dentro de este repositorio con Claude Code:** no necesitas pegar nada. Claude Code lee `CLAUDE.md` automáticamente. Basta con decir qué quieres hacer, por ejemplo: «Haz el PDF del anteproyecto» o «Registra los acuerdos de la reunión».
- **En una sesión nueva o fuera del repositorio:** copia el bloque de abajo como primer mensaje.

---

```
Soy José Vargas. Estoy creando, con Gustavo y Javier Cañi, una empresa de mecánica automotriz a domicilio en Santiago de Chile. Está en etapa de anteproyecto: no opera, no tiene nombre comercial, no tiene sociedad constituida y ningún servicio está aprobado técnicamente.

Trabaja en el repositorio calisteniaprogresiva-team/negocioautomotriz. Antes de hacer cualquier cosa, lee en este orden:
1. CLAUDE.md (contexto maestro, reglas, estado actual y hoja de ruta).
2. docs/decisiones.md (acuerdos de los socios; mandan sobre el anteproyecto).
3. docs/anteproyecto-v2.md (anteproyecto vigente).
docs/documento-inicial.md es solo referencia histórica.

Reglas que no se rompen:
- No inventes capacidades, acuerdos, precios, costos, plazos, porcentajes, nombres ni decisiones. Lo pendiente va como «Por definir» o «Por confirmar»; lo legal, tributario o de seguros, como «Por verificar con un profesional».
- No agregues cifras de mercado ni estadísticas.
- Si encuentras una contradicción, no la corrijas: anótala en una lista de observaciones al final de tu respuesta.
- Ningún servicio es «disponible» hasta que Gustavo lo apruebe y quede en docs/decisiones.md.
- Sin datos personales reales: usa CLI-0001, VEH-0001, OT-0001. Sin patentes, domicilios ni fotos de clientes.
- No publiques nada en internet, no crees repositorios ni cuentas, no contrates herramientas y no instales dependencias sin preguntarme antes.
- No uses cuentas ni infraestructura de Calistenia Progresiva; solo su método.
- Español neutro, sin voseo ni modismos.
- Identidad visual: negro carbón, morado profundo de acento, blanco y gris acero; amarillo o naranja de seguridad solo para avisos, pendientes y riesgos. Títulos condensados y recios. Reutiliza las variables de assets/estilos.css.
- Respeta la etapa del plan (sección 16 del anteproyecto): lo de etapas posteriores se hace como borrador o maqueta marcada «EJEMPLO».

Forma de trabajo: si el pedido es grande, propón la estructura antes de construir. Al terminar, actualiza la sección «Estado actual» y la hoja de ruta de CLAUDE.md, haz commit en la rama de trabajo y cierra con: qué hiciste, qué queda pendiente y las observaciones.

Lo que quiero ahora: [ESCRIBE AQUÍ EL PEDIDO]
```

---

## Ejemplos de pedidos

- «Haz un PDF imprimible del anteproyecto v2 con la identidad visual, en `entregables/pdf/`.»
- «Pasa a `docs/decisiones.md` estos acuerdos de la reunión del 15: …»
- «Propón la estructura del modelo de datos en Google Sheets (clientes, vehículos, tenencias, OT) sin datos reales.»
- «Haz una maqueta de la web comercial marcada como EJEMPLO, sin publicarla.»
- «Redacta el checklist de seguridad de llegada y cierre para que Gustavo lo revise.»
