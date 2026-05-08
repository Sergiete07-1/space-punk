# Recetario de prompts

> Prompts tipo para distintos momentos del proyecto. Sirven como punto de partida — adaptar al contexto.

---

## 🟢 Inicio de sesión

### Sesión de planning / estrategia

```
Hola. Soy [tutor / estudiante]. Hoy queremos planificar [qué milestone / sesión].

Por favor:
1. Lee CLAUDE.md, docs/ROADMAP.md, docs/BACKLOG.md, docs/LEARNINGS.md y docs/DECISIONS.md.
2. Tu rol hoy es: Coach de proceso.
3. Hazme un resumen de dónde estamos (1 párrafo).
4. Hazme 2-3 preguntas para entender bien el objetivo de hoy antes de proponer plan.
```

### Sesión de coding (M2 — sin copiloto)

```
Hola. Soy el estudiante. Hoy quiero trabajar en [tarea T-XXX del backlog].

Lee CLAUDE.md y los docs relevantes.
Tu rol hoy es: Pair Programmer en modo enseñanza estricta.

Reglas para esta sesión:
- No me des código completo.
- Pregúntame qué creo que hay que hacer antes de cada paso.
- Si te pido algo y no lo entiendo, páralo y explícamelo.
- Cuando escriba código, revísalo conmigo línea a línea.
```

### Sesión de coding (M3-M4 — con copiloto)

```
Hola. Soy el estudiante. Hoy quiero implementar [feature].

Lee CLAUDE.md, docs/ROADMAP.md y docs/BACKLOG.md.
Tu rol hoy es: Pair Programmer (modo copiloto).

Reglas:
- Puedes proponer código, pero explícamelo antes de que lo acepte.
- Si propones algo que no entiendo, no lo acepto.
- Antes de empezar, ayúdame a definir el plan en pasos pequeños.
```

### Sesión agentic (M4)

```
Hola. Soy el tutor. Hoy vamos a delegar la feature [X] a un agente.

Lee CLAUDE.md y los docs.
Tu rol hoy es: Tech Lead.

Por favor:
1. Ayúdame a redactar una spec clara y completa para esta feature.
2. La spec debe incluir: objetivo, criterios de aceptación, restricciones técnicas, qué NO debe hacer.
3. Una vez la spec esté lista, ejecútala como agente y prepárame un PR para code review.
```

### Code review

```
Hola. Quiero hacer code review del PR [URL o branch].

Tu rol hoy es: Tech Lead haciendo code review.

Por favor:
1. Léelo entero.
2. Identifica: bugs potenciales, problemas de seguridad, código que huele mal, decisiones cuestionables.
3. Para cada hallazgo, explícamelo en términos que pueda enseñar al estudiante.
4. Sugiéreme 2-3 preguntas que pueda hacerle al estudiante para que aprenda revisando.
```

---

## 🔴 Cierre de sesión

### Cierre estándar

```
Vamos a cerrar la sesión.

Por favor, en este orden:
1. Resumen de lo que hemos hecho hoy (5 bullets máximo).
2. Propón actualización para docs/BACKLOG.md (qué cerramos, qué queda en doing, qué añadimos).
3. Propón entrada para docs/LEARNINGS.md siguiendo la plantilla "Sesión".
4. Si hemos tomado decisiones importantes, propón entrada para docs/DECISIONS.md.
5. Sugiere mensaje(s) de commit con formato `tipo: descripción`.
6. ¿Hay algo que deberíamos llevar a la próxima sesión y aún no está en el backlog?
```

### Cierre de milestone

```
Hemos terminado el milestone M[X].

Por favor:
1. Revisa la Definition of Done de M[X] en ROADMAP.md y dime qué está hecho y qué no.
2. Si hay items no hechos, propón: ¿se posponen, se cancelan, o se hace ahora?
3. Propón entrada de retro para docs/LEARNINGS.md siguiendo la plantilla "Retro de milestone".
4. Mira el siguiente milestone en el roadmap. ¿Sigue teniendo sentido tal cual o hay que ajustar el scope?
5. Propón el backlog inicial del siguiente sprint.
```

---

## 🟡 Situaciones específicas

### Cuando el estudiante está atascado

```
Llevo X minutos atascado con [problema]. He intentado [lo que sea].

Por favor:
- NO me des la solución directa.
- Hazme preguntas que me lleven a entender por qué no funciona.
- Si después de 2-3 preguntas sigo sin verlo, dame una pista pequeña.
```

### Cuando hay que decidir algo técnico

```
Tengo que decidir entre [opción A] y [opción B] para [problema].

Tu rol: Tech Lead.

Por favor:
1. Compara las dos opciones de forma honesta (pros y contras).
2. Considera nuestro contexto (proyecto de aprendizaje, scope limitado, ver CLAUDE.md).
3. Recomienda una con justificación clara.
4. Si la decisión es importante, prepárame el ADR para DECISIONS.md.
```

### Para introducir un concepto nuevo

```
Nunca he trabajado con [concepto]. Necesito entenderlo para [tarea].

Tu rol: profesor.

Por favor:
1. Explícamelo asumiendo que sé X pero no Y.
2. Usa una analogía si ayuda.
3. Dame un mini-ejercicio para asegurarme de que lo he pillado.
4. NO me lo apliques al proyecto todavía. Primero quiero entenderlo.
```

---

## 📋 Notas sobre uso

- **Adapta los prompts al contexto.** No los uses al pie de la letra si no encajan.
- **Si la IA se pone "demasiado servicial" y empieza a darte código sin pedírtelo,** recuérdale las reglas del CLAUDE.md.
- **Si la IA explica de forma muy abstracta,** pídele que use ejemplos concretos del proyecto.
- **Si una sesión va mal,** está bien parar, hacer mini-retro y empezar de nuevo el día siguiente.
