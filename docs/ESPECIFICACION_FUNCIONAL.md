# Vera Balance Patient Management

# Especificación Funcional

**Versión del documento:** 1.0.0

**Estado:** En elaboración

**Última actualización:** Pendiente

---

# Control de versiones

| Versión | Fecha | Autor | Descripción |
|---------|--------|--------|-------------|
| 1.0.0 | Pendiente | Jorge Salgado | Creación inicial de la Especificación Funcional del proyecto. |

---

# Índice

1. Introducción
2. Usuarios y roles
3. Conceptos del dominio
4. Alcance del sistema
5. Módulos del sistema
6. Reglas de negocio
7. Arquitectura Frontend
8. Arquitectura Backend
9. Librería de componentes
10. Guía de estilos
11. Convenciones de desarrollo
12. Definition of Done
13. Alcance del MVP
14. Roadmap
15. Glosario

---

# 1. Introducción

## 1.1 Acerca del proyecto

**Vera Balance Patient Management** es una aplicación web desarrollada para optimizar la gestión clínica de los terapeutas de Vera Balance.

Su propósito es centralizar toda la información relacionada con los pacientes y sus procesos terapéuticos, permitiendo registrar, consultar y dar seguimiento clínico de forma organizada desde cualquier lugar.

Actualmente, gran parte del seguimiento clínico se realiza mediante formatos físicos, lo que dificulta la consulta del historial de los pacientes, la continuidad del tratamiento y la estandarización de la información registrada por cada terapeuta.

Vera Balance Patient Management busca digitalizar estos procesos respetando la metodología de trabajo de la clínica y proporcionando una herramienta que facilite el seguimiento clínico durante todo el proceso terapéutico.

La aplicación está diseñada exclusivamente para uso interno del personal de Vera Balance y no será utilizada directamente por los pacientes.

---

## 1.2 Objetivo del documento

El presente documento constituye la **Especificación Funcional** de Vera Balance Patient Management y representa la fuente principal de verdad del proyecto.

Su finalidad es definir el comportamiento funcional esperado del sistema, documentar las reglas de negocio, establecer el alcance del producto y servir como referencia durante todas las etapas de desarrollo.

Toda decisión funcional deberá mantenerse alineada con esta especificación.

Los documentos técnicos derivados, como la arquitectura del sistema, la especificación de la API y las guías de desarrollo, deberán ser consistentes con la información aquí definida.

Este documento servirá como referencia para:

- El desarrollo del Frontend.
- El desarrollo del Backend.
- La definición del contrato de la API.
- La documentación técnica del proyecto.
- La incorporación de nuevos desarrolladores.
- El uso de herramientas de inteligencia artificial durante el desarrollo.

---

## 1.3 Objetivo del sistema

Vera Balance Patient Management tiene como objetivo proporcionar a los terapeutas una plataforma centralizada que les permita administrar de manera organizada toda la información relacionada con sus pacientes y sus procesos terapéuticos.

El sistema deberá permitir:

- Registrar nuevos pacientes.
- Consultar únicamente los pacientes asignados al terapeuta autenticado.
- Administrar la información clínica de cada paciente.
- Registrar y consultar el seguimiento clínico de cada sesión.
- Mantener un historial clínico organizado durante todo el proceso terapéutico.
- Consultar el expediente clínico consolidado de un paciente.
- Generar prereportes utilizando la información registrada durante las sesiones.
- Acceder de forma rápida y organizada a toda la información clínica desde cualquier lugar.

El sistema busca convertirse en la principal herramienta de trabajo utilizada por los terapeutas durante el desarrollo de un proceso terapéutico.

---

## 1.4 Objetivos del proyecto

El desarrollo de Vera Balance Patient Management responde a la necesidad de modernizar y estandarizar los procesos clínicos utilizados actualmente por Vera Balance.

Para lograrlo, el proyecto persigue los siguientes objetivos:

- Digitalizar el seguimiento clínico realizado actualmente mediante formatos físicos.
- Centralizar toda la información clínica de los pacientes en una única plataforma.
- Estandarizar la captura de información entre todos los terapeutas.
- Reducir la pérdida de información clínica.
- Facilitar la consulta del historial completo de un paciente.
- Mejorar el control y seguimiento de cada proceso terapéutico.
- Disminuir el tiempo dedicado a tareas administrativas.
- Construir una plataforma escalable que permita incorporar nuevas funcionalidades sin comprometer la arquitectura del sistema.

---

## 1.5 Alcance del documento

Esta especificación describe el comportamiento funcional esperado de Vera Balance Patient Management.

Su contenido define qué debe hacer el sistema, cuáles son sus reglas de negocio, cómo se organizan sus módulos y cuáles son los objetivos funcionales que deberán cumplirse durante el desarrollo.

Este documento no tiene como finalidad describir aspectos relacionados con la implementación técnica del software.

Los detalles relacionados con arquitectura, convenciones de desarrollo, especificación de la API y demás documentación técnica serán definidos en documentos independientes.

Entre ellos:

- FRONTEND_ARCHITECTURE.md
- BACKEND_ARCHITECTURE.md
- openapi.yaml
- CODING_GUIDELINES.md
- AGENTS.md
- MVP_PLAN.md

Cualquier modificación al comportamiento funcional del sistema deberá reflejarse primero en esta especificación antes de implementarse en el código fuente.

Este documento constituye la referencia principal para el diseño, desarrollo y evolución de Vera Balance Patient Management.


# 2. Usuarios y roles

## 2.1 Introducción

Vera Balance Patient Management es una aplicación desarrollada exclusivamente para uso interno de Vera Balance.

El sistema está diseñado para ser utilizado únicamente por el personal autorizado de la clínica y no contempla interacción directa por parte de los pacientes.

Cada usuario tendrá acceso únicamente a la información correspondiente a su rol dentro del sistema.

Durante el desarrollo del MVP únicamente existirá un rol operativo. Sin embargo, la arquitectura del sistema deberá permitir incorporar nuevos roles en futuras versiones sin afectar el funcionamiento existente.

---

## 2.2 Terapeuta

El terapeuta es el usuario principal del sistema.

Representa al profesional responsable de uno o varios procesos terapéuticos y será quien utilice la plataforma durante las sesiones para registrar, consultar y administrar la información clínica de sus pacientes.

Cada terapeuta únicamente podrá visualizar y administrar la información correspondiente a los pacientes que tenga asignados.

Dentro del MVP, el terapeuta podrá realizar las siguientes acciones:

### Pacientes

- Consultar el listado de sus pacientes.
- Registrar nuevos pacientes.
- Editar la información de un paciente.
- Desactivar un paciente.
- Eliminar un paciente de forma definitiva.

### Seguimiento clínico

- Consultar el historial de sesiones de un proceso terapéutico.
- Registrar una nueva sesión.
- Editar un registro de sesión.
- Eliminar un registro de sesión.

### Expediente clínico

- Consultar el expediente clínico consolidado de un paciente.
- Consultar la información histórica del proceso terapéutico.

### Prereportes

- Generar un prereporte utilizando cuatro sesiones seleccionadas por el terapeuta.

---

## 2.3 Administrador

El rol de Administrador no forma parte del alcance del MVP.

Sin embargo, la arquitectura funcional del sistema deberá contemplar su incorporación en futuras versiones.

El Administrador tendrá como objetivo supervisar la operación clínica de Vera Balance y contará con acceso a la información de todos los terapeutas y procesos terapéuticos registrados en el sistema.

Las funcionalidades específicas de este rol serán definidas cuando inicie su desarrollo.

---

## 2.4 Paciente

Los pacientes no tendrán acceso directo a Vera Balance Patient Management.

Toda la información relacionada con un paciente será administrada exclusivamente por el terapeuta responsable de su proceso terapéutico.

El sistema no contempla funcionalidades de autenticación, consulta o interacción para pacientes dentro del alcance actual del proyecto.

---

## 2.5 Consideraciones generales

Para el MVP se establecen las siguientes reglas relacionadas con los usuarios del sistema:

- Cada proceso terapéutico tendrá un único terapeuta responsable.
- Cada terapeuta únicamente podrá visualizar los pacientes que tenga asignados.
- Los pacientes no podrán acceder al sistema.
- El rol Administrador se implementará en una versión futura.
- La arquitectura del sistema deberá permitir incorporar nuevos roles sin requerir cambios significativos en los módulos existentes.

# 3. Conceptos del dominio

## 3.1 Introducción

Con el objetivo de mantener una terminología uniforme durante todo el desarrollo del proyecto, este capítulo define los principales conceptos del dominio utilizados por Vera Balance Patient Management.

Todos los módulos del sistema, la documentación técnica, la especificación de la API y la implementación deberán utilizar estos términos con el significado aquí definido.

---

## 3.2 Paciente

Un **Paciente** representa a una persona registrada dentro del sistema que recibe atención psicológica en Vera Balance.

Cada paciente cuenta con información personal y clínica propia, la cual podrá consultarse y actualizarse durante todo su proceso terapéutico.

Un paciente podrá participar en uno o varios procesos terapéuticos a lo largo de su historial dentro de la clínica.

Ejemplos:

- Terapia individual.
- Terapia de pareja.
- Terapia familiar.

La existencia de varios procesos terapéuticos no implica la creación de múltiples pacientes; únicamente se crean nuevos procesos asociados al mismo paciente cuando corresponda.

---

## 3.3 Proceso terapéutico

El **Proceso Terapéutico** representa el tratamiento clínico que un terapeuta desarrolla con uno o varios pacientes.

Es el concepto central del sistema y funciona como contenedor de toda la información generada durante el tratamiento.

Cada proceso terapéutico está conformado por:

- Un terapeuta responsable.
- Uno o más pacientes.
- Un tipo de terapia.
- Objetivos generales del tratamiento.
- Registros de seguimiento clínico.
- Prereportes generados durante el proceso.

Todo el seguimiento clínico y la información relacionada con una terapia pertenecen a un proceso terapéutico.

---

## 3.4 Tipo de terapia

El **Tipo de terapia** corresponde al nombre mostrado en la interfaz de usuario para clasificar un proceso terapéutico.

Aunque internamente el dominio utiliza el concepto de **Proceso Terapéutico**, en todas las pantallas visibles para el terapeuta se utilizará el término **Tipo de terapia**, ya que corresponde a la terminología utilizada actualmente por Vera Balance.

Ejemplos de tipos de terapia:

- Terapia individual.
- Terapia de pareja.
- Terapia familiar.
- Terapia infantil.

En futuras versiones podrán incorporarse nuevos tipos sin afectar la estructura del sistema.

---

## 3.5 Terapia de pareja

La **Terapia de pareja** es un tipo de proceso terapéutico en el que participan dos pacientes.

Cada integrante de la pareja deberá registrarse como un paciente independiente dentro del sistema.

Ambos pacientes pertenecerán al mismo proceso terapéutico y compartirán:

- El terapeuta responsable.
- El tipo de terapia.
- El seguimiento clínico.
- Los prereportes generados durante el tratamiento.

Sin embargo, cada paciente conservará su propia información personal y su propio expediente clínico.

Esto permitirá que, si alguno de los integrantes inicia posteriormente un proceso terapéutico individual, pueda hacerlo sin perder su historial dentro de la clínica.

---

## 3.6 Seguimiento clínico

El **Seguimiento Clínico** representa el conjunto de registros generados durante el desarrollo de un proceso terapéutico.

Cada registro corresponde a una sesión realizada entre el terapeuta y el paciente o pacientes participantes.

El seguimiento clínico constituye la principal fuente de información del sistema y será utilizado posteriormente para consultar el expediente clínico y generar prereportes.

---

## 3.7 Registro de sesión

Un **Registro de sesión** corresponde a la documentación generada durante una sesión terapéutica.

Cada registro podrá contener, entre otros elementos:

- Fecha de la sesión.
- Terapeuta responsable.
- Objetivo de la sesión.
- Resumen de la sesión.
- Observaciones.
- Tareas asignadas.
- Objetivos trabajados.
- Objetivos cumplidos.
- Logros alcanzados.
- Estado de asistencia.

Cada registro pertenece a un único proceso terapéutico.

---

## 3.8 Expediente clínico

El **Expediente Clínico** representa la vista consolidada de toda la información histórica relacionada con un paciente.

Su finalidad es facilitar la consulta rápida del historial clínico sin necesidad de revisar individualmente cada registro de sesión.

El expediente clínico utilizará información proveniente de:

- Los datos del paciente.
- El proceso terapéutico.
- El seguimiento clínico.
- Los objetivos del tratamiento.
- El historial de sesiones.

En futuras versiones servirá como base para la generación de documentos en formato PDF.

---

## 3.9 Prereporte

Un **Prereporte** es un documento generado automáticamente por el sistema utilizando la información registrada durante el seguimiento clínico.

El terapeuta podrá seleccionar cuatro sesiones para generar un prereporte que consolide la información más relevante del proceso terapéutico.

El prereporte tiene como finalidad facilitar la revisión del avance del tratamiento y no sustituye un reporte clínico elaborado manualmente por el terapeuta.

---

## 3.10 Relaciones entre conceptos

La siguiente relación resume la estructura lógica del dominio:

- Un terapeuta administra uno o varios procesos terapéuticos.
- Un proceso terapéutico pertenece a un único terapeuta.
- Un proceso terapéutico puede contener uno o varios pacientes.
- Un paciente puede participar en uno o varios procesos terapéuticos.
- Un proceso terapéutico contiene múltiples registros de seguimiento clínico.
- El expediente clínico consolida la información histórica del paciente.
- Los prereportes utilizan la información registrada durante el seguimiento clínico.

# 4. Alcance del sistema

## 4.1 Introducción

Vera Balance Patient Management es una plataforma orientada a la administración de procesos terapéuticos y al seguimiento clínico de pacientes.

El sistema tiene como finalidad proporcionar a los terapeutas una herramienta que les permita registrar, consultar y administrar toda la información clínica generada durante un proceso terapéutico, manteniendo una estructura organizada, consistente y fácilmente accesible.

El alcance definido en este documento corresponde al comportamiento funcional esperado del sistema y establece las funcionalidades que forman parte del producto.

---

## 4.2 Alcance funcional

Vera Balance Patient Management permitirá:

### Gestión de pacientes

- Registrar nuevos pacientes.
- Consultar el listado de pacientes asignados al terapeuta.
- Editar la información de un paciente.
- Desactivar un paciente.
- Eliminar un paciente de forma definitiva.

---

### Gestión de procesos terapéuticos

- Asociar uno o varios pacientes a un proceso terapéutico.
- Definir el tipo de terapia.
- Asignar un terapeuta responsable.
- Registrar los objetivos generales del tratamiento.

---

### Seguimiento clínico

- Registrar sesiones terapéuticas.
- Consultar el historial completo de sesiones.
- Editar registros de sesión.
- Eliminar registros de sesión.
- Documentar objetivos, tareas, observaciones y avances del tratamiento.

---

### Expediente clínico

- Consultar la información clínica consolidada de un paciente.
- Visualizar el historial del proceso terapéutico.
- Mostrar los objetivos trabajados durante el tratamiento.
- Mostrar los logros alcanzados.
- Preparar la información para su futura exportación en formato PDF.

---

### Prereportes

- Seleccionar cuatro sesiones del seguimiento clínico.
- Generar un prereporte utilizando la información registrada en dichas sesiones.
- Consolidar la información clínica relevante del proceso terapéutico.

---

## 4.3 Alcance técnico del MVP

Durante el desarrollo del MVP el objetivo principal será construir la interfaz de usuario del sistema.

En esta etapa se priorizará:

- Diseño de pantallas.
- Navegación entre módulos.
- Componentes reutilizables.
- Manejo de estado mediante Redux Toolkit.
- Preparación de la estructura necesaria para la integración con el backend.

La integración con servicios externos y la implementación de la lógica definitiva del backend se realizarán en etapas posteriores del proyecto.

---

## 4.4 Funcionalidades fuera del alcance

Las siguientes funcionalidades no forman parte del alcance actual del sistema y no deberán desarrollarse durante el MVP:

- Agenda.
- Videollamadas.
- Reportes administrativos.
- Notificaciones.
- Integraciones con servicios externos.
- Importación masiva de pacientes.
- Búsquedas avanzadas.
- Portal para pacientes.

Estas funcionalidades podrán evaluarse en versiones futuras del producto.

---

## 4.5 Restricciones funcionales

Para el alcance definido en esta especificación se establecen las siguientes restricciones:

- El sistema será utilizado únicamente por terapeutas de Vera Balance.
- Los pacientes no tendrán acceso a la plataforma.
- Cada proceso terapéutico tendrá un único terapeuta responsable.
- Cada terapeuta únicamente podrá consultar los pacientes asignados a su cuenta.
- El sistema deberá reutilizar la información registrada durante el seguimiento clínico para construir el expediente clínico y los prereportes.
- No deberá capturarse información duplicada cuando esta ya exista dentro del sistema.

---

## 4.6 Objetivo del MVP

El MVP tiene como finalidad validar el flujo completo de trabajo de un terapeuta dentro de Vera Balance.

Al finalizar el MVP, un terapeuta deberá ser capaz de:

1. Iniciar sesión.
2. Consultar su listado de pacientes.
3. Registrar un nuevo paciente.
4. Editar la información de un paciente.
5. Registrar el seguimiento clínico de cada sesión.
6. Consultar el expediente clínico del paciente.
7. Generar un prereporte a partir de cuatro sesiones seleccionadas.

Con estas funcionalidades se cubrirá el flujo principal de trabajo esperado dentro de la clínica y se establecerá la base para la evolución futura del sistema.

# 5. Módulos del sistema

## 5.1 Introducción

Vera Balance Patient Management está organizado en módulos funcionales independientes.

Cada módulo representa una responsabilidad específica dentro del sistema y agrupa todas las pantallas, componentes y lógica relacionados con dicha funcionalidad.

Esta separación permite mantener una arquitectura desacoplada, facilita el mantenimiento del proyecto y favorece su evolución conforme se incorporen nuevas funcionalidades.

Durante el desarrollo del frontend, cada módulo se implementará como un **Feature** independiente siguiendo la arquitectura definida para el proyecto.

---

# 5.2 Auth

## Objetivo

El módulo **Auth** es responsable de controlar el acceso a la plataforma.

Su finalidad es autenticar a los usuarios y garantizar que únicamente el personal autorizado pueda acceder a la información clínica del sistema.

---

## Responsabilidades

- Mostrar la pantalla de inicio de sesión.
- Validar las credenciales del usuario.
- Mantener la sesión activa.
- Permitir el cierre de sesión.
- Proteger las rutas privadas.
- Obtener la información básica del usuario autenticado.

---

## Pantallas

- Login.

---

## Estado del MVP

Incluido.

---

# 5.3 Patients

## Objetivo

El módulo **Patients** administra toda la información relacionada con los pacientes registrados dentro de Vera Balance.

Representa el punto de entrada para la creación de nuevos procesos terapéuticos y permite consultar y actualizar la información personal de cada paciente.

---

## Responsabilidades

- Consultar el listado de pacientes.
- Buscar pacientes.
- Registrar nuevos pacientes.
- Editar pacientes.
- Desactivar pacientes.
- Eliminar pacientes.
- Consultar la información general de un paciente.

---

## Pantallas

- Listado de pacientes.
- Crear paciente.
- Editar paciente.

---

## Consideraciones funcionales

Durante el registro de un paciente podrán mostrarse secciones adicionales dependiendo de la información capturada.

Ejemplos:

### Tutor

Si el paciente es menor de edad, el sistema deberá solicitar la información del tutor.

Información mínima:

- Nombre.
- Edad.
- Parentesco.
- Teléfono.

---

### Pareja

Si el paciente indica que mantiene una relación de pareja y el tipo de terapia no corresponde a Terapia de Pareja, el sistema deberá solicitar la información básica de la pareja.

---

### Segundo paciente

Si el tipo de terapia corresponde a Terapia de Pareja, el sistema deberá permitir registrar un segundo paciente dentro del mismo proceso terapéutico.

Ambos pacientes compartirán el mismo proceso terapéutico, pero conservarán expedientes clínicos independientes.

---

## Estado del MVP

Incluido.

---

# 5.4 Clinical Follow-up

## Objetivo

El módulo **Clinical Follow-up** administra el seguimiento clínico de cada proceso terapéutico.

Representa el núcleo funcional del sistema y concentra la información generada durante las sesiones.

Toda la información utilizada posteriormente por el expediente clínico y los prereportes proviene de este módulo.

---

## Responsabilidades

- Consultar las sesiones de un proceso terapéutico.
- Registrar nuevas sesiones.
- Editar sesiones.
- Eliminar sesiones.

---

## Información registrada por sesión

Cada registro de sesión podrá contener, entre otros, los siguientes elementos:

- Fecha.
- Terapeuta.
- Objetivo de la sesión.
- Resumen de la sesión.
- Observaciones.
- Tareas.
- Objetivos trabajados.
- Objetivos alcanzados.
- Logros obtenidos.
- Estado de asistencia.

---

## Estados de asistencia

Cada sesión podrá registrar alguno de los siguientes estados:

- Asistió.
- No asistió.
- Canceló.
- Reprogramó.
- Sin respuesta.

---

## Pantallas

- Listado de sesiones.
- Crear registro de sesión.
- Editar registro de sesión.

---

## Estado del MVP

Incluido.

---

# 5.5 Patient Record

## Objetivo

El módulo **Patient Record** permite consultar de forma consolidada toda la información clínica de un paciente.

No captura información nueva.

Su función consiste en organizar y presentar la información registrada previamente por los demás módulos.

---

## Responsabilidades

- Mostrar los datos generales del paciente.
- Mostrar el proceso terapéutico.
- Mostrar el historial clínico.
- Mostrar los objetivos del tratamiento.
- Mostrar los avances del paciente.
- Preparar la información para la futura generación de documentos PDF.

---

## Pantallas

- Expediente clínico del paciente.

---

## Estado del MVP

Incluido.

---

# 5.6 Pre Reports

## Objetivo

El módulo **Pre Reports** permite generar un prereporte utilizando la información registrada durante el seguimiento clínico.

El prereporte facilita la revisión del avance del proceso terapéutico y sirve como apoyo para la elaboración de reportes clínicos.

---

## Responsabilidades

- Seleccionar cuatro sesiones.
- Consolidar la información registrada.
- Generar un prereporte.

---

## Información considerada

El prereporte utilizará información proveniente de:

- Objetivos trabajados.
- Objetivos alcanzados.
- Resumen de las sesiones.
- Observaciones.
- Tareas.
- Logros registrados.

---

## Pantallas

- Generación de prereporte.

---

## Estado del MVP

Incluido.

---

# 5.7 Relación entre módulos

Los módulos del sistema mantienen la siguiente relación funcional:

```text
Auth
 │
 ├── Patients
 │       │
 │       ├── Clinical Follow-up
 │       │         │
 │       │         ├── Patient Record
 │       │         │
 │       │         └── Pre Reports
```

El módulo **Clinical Follow-up** representa el núcleo funcional del sistema.

Los módulos **Patient Record** y **Pre Reports** no generan información propia; únicamente reutilizan la información registrada durante el seguimiento clínico para presentarla de diferentes formas según la necesidad del terapeuta.


# 6. Reglas de negocio

## 6.1 Introducción

Las siguientes reglas de negocio definen el comportamiento funcional que deberá respetar Vera Balance Patient Management.

Estas reglas representan restricciones propias del dominio y deberán cumplirse independientemente de la tecnología utilizada para implementar el sistema.

Toda modificación a estas reglas deberá reflejarse primero en esta especificación funcional antes de implementarse en el código fuente.

---

# 6.2 Pacientes

## Registro de pacientes

- Todo paciente deberá registrarse una única vez dentro del sistema.
- Un paciente podrá participar en uno o varios procesos terapéuticos.
- La información personal del paciente será compartida entre todos sus procesos terapéuticos.
- La modificación de los datos personales deberá reflejarse automáticamente en todos los procesos terapéuticos asociados.

---

## Pacientes menores de edad

Cuando la edad del paciente sea menor a 18 años, el sistema deberá solicitar obligatoriamente la información del tutor.

La información mínima requerida será:

- Nombre.
- Edad.
- Parentesco.
- Teléfono.

---

## Estado civil

Cuando el paciente indique que mantiene una relación de pareja y el tipo de terapia sea diferente de Terapia de Pareja, el sistema deberá solicitar la información básica de la pareja.

Esta información tendrá únicamente fines informativos y no generará automáticamente un nuevo paciente dentro del sistema.

---

## Eliminación de pacientes

El sistema deberá permitir dos acciones diferentes:

### Desactivar paciente

- El paciente permanecerá registrado.
- Todo su historial clínico permanecerá disponible.
- El paciente podrá reactivarse posteriormente.

### Eliminar paciente

- El paciente será eliminado definitivamente.
- También deberán eliminarse todos los procesos terapéuticos asociados.
- También deberán eliminarse todos los registros de seguimiento clínico relacionados.
- La acción no podrá deshacerse.

Toda eliminación deberá solicitar confirmación al usuario.

---

# 6.3 Procesos terapéuticos

## Terapeuta responsable

Todo proceso terapéutico deberá tener un único terapeuta responsable.

---

## Tipo de terapia

Todo proceso terapéutico deberá tener asociado un tipo de terapia.

Los tipos de terapia visibles para el usuario serán definidos mediante un catálogo configurable.

---

## Terapia de pareja

Cuando el tipo de terapia corresponda a Terapia de Pareja:

- El proceso terapéutico deberá contener exactamente dos pacientes.
- Ambos pacientes compartirán el mismo proceso terapéutico.
- Ambos pacientes compartirán el mismo seguimiento clínico.
- Ambos pacientes compartirán los mismos prereportes.
- Cada paciente conservará su propio expediente clínico.

---

## Cambio de tipo de terapia

El cambio del tipo de terapia deberá preservar toda la información clínica previamente registrada.

---

# 6.4 Seguimiento clínico

## Registro de sesiones

Cada sesión deberá pertenecer a un único proceso terapéutico.

---

## Información mínima

Cada registro de sesión deberá permitir almacenar al menos:

- Fecha.
- Terapeuta.
- Objetivo de la sesión.
- Resumen.
- Observaciones.
- Tareas.
- Objetivos trabajados.
- Objetivos alcanzados.
- Logros obtenidos.
- Estado de asistencia.

---

## Edición

Un registro de sesión podrá modificarse posteriormente.

Toda modificación deberá conservar la integridad del proceso terapéutico.

---

## Eliminación

Los registros de sesión podrán eliminarse definitivamente.

La eliminación requerirá confirmación del usuario.

No existirá papelera de reciclaje.

---

## Estados de asistencia

Cada sesión podrá registrar únicamente uno de los siguientes estados:

- Asistió.
- No asistió.
- Canceló.
- Reprogramó.
- Sin respuesta.

---

# 6.5 Expediente clínico

El expediente clínico no capturará información nueva.

Toda la información mostrada deberá obtenerse de:

- Los datos del paciente.
- El proceso terapéutico.
- El seguimiento clínico.

El expediente deberá mantenerse actualizado automáticamente conforme se modifique cualquiera de estos elementos.

---

# 6.6 Prereportes

Los prereportes utilizarán únicamente información registrada previamente durante el seguimiento clínico.

Para generar un prereporte:

- El terapeuta seleccionará cuatro registros de sesión.
- El sistema consolidará automáticamente la información correspondiente.

El prereporte no modificará la información clínica existente.

Su única finalidad será presentar un resumen organizado del proceso terapéutico.

---

# 6.7 Usuarios

Durante el MVP únicamente existirá el rol Terapeuta.

Cada terapeuta podrá consultar únicamente los pacientes asignados a su cuenta.

Los pacientes no tendrán acceso al sistema.

El rol Administrador será incorporado en una versión futura.

---

# 6.8 Confirmaciones

Toda acción considerada destructiva deberá solicitar confirmación explícita antes de ejecutarse.

Esto incluye, entre otras:

- Eliminar pacientes.
- Eliminar registros de sesión.
- Desactivar pacientes.

---

# 6.9 Reutilización de información

El sistema deberá evitar la captura duplicada de información.

Toda información registrada deberá reutilizarse por los módulos que la requieran.

En particular:

- El Expediente Clínico reutilizará la información del Seguimiento Clínico.
- Los Prereportes reutilizarán la información del Seguimiento Clínico.
- La información personal del paciente será compartida entre todos los procesos terapéuticos asociados.

---

# 6.10 Reglas para el MVP

Durante el desarrollo del MVP deberán respetarse las siguientes restricciones:

- El objetivo principal será construir la interfaz de usuario.
- La lógica de negocio se preparará utilizando Redux Toolkit.
- Las llamadas al backend podrán simularse mientras se define la API.
- Toda pantalla deberá ser responsive.
- Todo componente deberá reutilizar la librería de componentes del proyecto.
- Crear y Editar deberán mantenerse separados a nivel de páginas, hooks y lógica de negocio.
- Los componentes visuales deberán reutilizarse siempre que sea posible.


# 7. Arquitectura Frontend

## 7.1 Introducción

El frontend de Vera Balance Patient Management se desarrolla como una aplicación independiente denominada **mfe-vera-balance-dashboard**.

Su arquitectura está basada en **Clean Architecture** organizada por **Features**, permitiendo que cada módulo del sistema sea independiente, desacoplado y fácilmente mantenible.

Esta organización facilita el crecimiento del proyecto, mejora la reutilización de código y permite que nuevas funcionalidades puedan incorporarse sin afectar el resto de la aplicación.

---

## 7.2 Principios de la arquitectura

El frontend deberá respetar los siguientes principios arquitectónicos:

- Separación estricta de responsabilidades.
- Organización por Features.
- Componentes reutilizables.
- Estado centralizado mediante Redux Toolkit.
- Lógica desacoplada de la interfaz de usuario.
- Reutilización antes que duplicación.
- Bajo acoplamiento entre módulos.
- Alta cohesión dentro de cada Feature.

---

## 7.3 Organización por Features

Cada módulo funcional del sistema deberá implementarse como un **Feature** independiente.

Cada Feature deberá contener únicamente el código relacionado con su responsabilidad funcional.

La eliminación de un Feature no deberá afectar el funcionamiento del resto del sistema.

Ejemplo:

```text
src/features/

    auth/

    patients/

    clinical-follow-up/

    patient-record/

    pre-reports/
```

---

## 7.4 Estructura de un Feature

Cada Feature deberá seguir la siguiente estructura base.

```text
feature/

    application/
        dtos/
        interfaces/
        use-cases/

    domain/
        entities/
        repositories/
        constants/
        services/

    infrastructure/
        adapters/
        mappers/

    hooks/

    store/
        interfaces/
        initial-state/
        selectors/
        slice/

    ui/
        components/
        pages/
        scss/
```

Dependiendo de las necesidades del Feature podrán agregarse nuevas carpetas sin romper esta estructura.

---

## 7.5 Clean Architecture

La arquitectura del frontend se divide en las siguientes capas.

### Domain

Contiene el conocimiento del negocio.

Aquí se ubican:

- Entidades.
- Interfaces de repositorios.
- Servicios de dominio.
- Constantes del dominio.

Esta capa no deberá depender de ninguna otra.

---

### Application

Contiene los casos de uso del sistema.

Aquí se implementa la lógica necesaria para resolver cada acción realizada por el usuario.

Ejemplos:

- Crear paciente.
- Editar paciente.
- Registrar sesión.
- Generar prereporte.

Los casos de uso no deberán depender de componentes visuales.

---

### Infrastructure

Contiene las implementaciones concretas necesarias para interactuar con servicios externos.

Ejemplos:

- Adaptadores HTTP.
- Mappers.
- Integraciones.

Durante el MVP esta capa podrá contener implementaciones simuladas utilizando datos mock.

---

### Store

Centraliza el estado del Feature utilizando Redux Toolkit.

Cada Feature administrará únicamente su propio estado.

La estructura mínima será:

- Interfaces.
- Initial State.
- Slice.
- Selectors.

---

### Hooks

Los Hooks representan la capa de comunicación entre la interfaz y Redux.

Su responsabilidad consiste en:

- Obtener información del Store.
- Exponer acciones.
- Encapsular la lógica de interacción utilizada por las páginas.

Los componentes visuales no deberán interactuar directamente con Redux.

---

### UI

Contiene exclusivamente la presentación del Feature.

Se divide en:

- Components.
- Pages.
- SCSS.

No deberá contener lógica de negocio.

---

## 7.6 Manejo del estado

Todo el estado compartido de la aplicación deberá administrarse mediante Redux Toolkit.

Redux será utilizado para:

- Formularios.
- Datos obtenidos del backend.
- Estado compartido entre componentes.
- Información del usuario autenticado.
- Información del paciente seleccionado.
- Información del proceso terapéutico.

Se evitará el uso de `useState` para información que pertenezca al dominio del sistema.

`useState` únicamente deberá utilizarse para estados locales relacionados con la presentación, por ejemplo:

- Apertura de modales.
- Estados temporales de la interfaz.
- Elementos visuales.

---

## 7.7 Componentes reutilizables

La aplicación contará con una librería propia de componentes ubicada dentro de `src/ui`.

Estos componentes representan una adaptación de Ant Design al branding de Vera Balance.

Todos los Features deberán reutilizar esta librería antes de crear nuevos componentes.

No deberán utilizarse componentes de Ant Design directamente cuando exista un componente equivalente dentro de la librería del proyecto.

---

## 7.8 Estilos

Todos los estilos deberán reutilizar los recursos definidos dentro de:

```text
src/ui/scss/
```

Entre ellos:

- Mixins.
- Variables.
- Colores.
- Tipografías.
- Breakpoints.

No deberán declararse colores, tamaños o estilos duplicados cuando ya existan dentro del proyecto.

---

## 7.9 Responsive Design

Todas las pantallas desarrolladas deberán ser completamente responsivas.

El soporte responsive forma parte del MVP y deberá considerarse terminado únicamente cuando la pantalla funcione correctamente en:

- Escritorio.
- Tablet.
- Dispositivos móviles.

Los breakpoints definidos por el proyecto deberán reutilizarse en todos los módulos.

---

## 7.10 Separación entre Crear y Editar

Las funcionalidades de **Crear** y **Editar** deberán mantenerse desacopladas.

Cada una deberá contar con:

- Página independiente.
- Hook independiente.
- Casos de uso independientes.
- Integración independiente con el backend.

Los componentes visuales podrán reutilizarse cuando representen la misma interfaz.

La lógica de negocio nunca deberá compartirse entre ambos flujos.

---

## 7.11 Componentes compartidos

Los componentes visuales deberán diseñarse para ser reutilizados.

La lógica relacionada con la obtención o actualización de información no deberá implementarse dentro de los componentes.

Los componentes deberán recibir la información mediante propiedades (`props`) y notificar los cambios utilizando callbacks.

Esta estrategia permitirá reutilizar los mismos componentes tanto en la creación como en la edición de entidades sin duplicar código.

---

## 7.12 Convenciones generales

Todo desarrollo realizado dentro del frontend deberá respetar las siguientes reglas:

- Mantener el formato y estilo de código existente.
- No modificar la estructura del proyecto sin justificación.
- Entregar siempre archivos completos cuando se realicen cambios.
- Incluir todos los archivos afectados por una modificación.
- Priorizar la reutilización de componentes.
- Evitar duplicar lógica de negocio.
- Mantener bajo acoplamiento entre Features.
- Mantener alta cohesión dentro de cada Feature.


# 8. Arquitectura Backend

## 8.1 Introducción

El backend de Vera Balance Patient Management será desarrollado como un proyecto independiente del frontend.

Su responsabilidad será implementar toda la lógica de negocio del sistema, administrar la persistencia de la información y exponer los servicios necesarios para que el frontend pueda interactuar con la plataforma.

La implementación técnica del backend no forma parte de esta especificación funcional y será documentada posteriormente.

---

## 8.2 Proyecto

El backend será desarrollado dentro del siguiente repositorio:

```text
baas-vera-balance-dashboard
```

Actualmente este proyecto se encuentra pendiente de construcción.

---

## 8.3 Objetivos

El backend deberá ser responsable de:

- Administrar la información de los pacientes.
- Administrar los procesos terapéuticos.
- Administrar el seguimiento clínico.
- Administrar los expedientes clínicos.
- Generar los prereportes.
- Gestionar la autenticación y autorización de los usuarios.
- Garantizar la integridad de la información almacenada.
- Exponer los servicios requeridos por el frontend.

---

## 8.4 Principios de arquitectura

La arquitectura del backend deberá respetar los siguientes principios:

- Clean Architecture.
- Separación estricta de responsabilidades.
- Organización modular.
- Bajo acoplamiento entre módulos.
- Alta cohesión dentro de cada módulo.
- Reutilización de lógica de negocio.
- Independencia de tecnologías externas.

La arquitectura deberá facilitar el mantenimiento y permitir incorporar nuevos módulos sin afectar el funcionamiento de los existentes.

---

## 8.5 Organización por módulos

Cada responsabilidad del sistema deberá implementarse como un módulo independiente.

Cada módulo deberá encapsular completamente su lógica de negocio y exponer únicamente las interfaces necesarias para interactuar con otros módulos.

La eliminación de un módulo no deberá afectar el funcionamiento del resto del sistema.

Los módulos previstos inicialmente son:

- Auth.
- Patients.
- Clinical Follow-up.
- Patient Record.
- Pre Reports.

Podrán incorporarse nuevos módulos conforme evolucione el sistema.

---

## 8.6 Estructura de un módulo

Todos los módulos deberán seguir la siguiente estructura mínima.

```text
module/

    application/
        dtos/
        use-cases/

    domain/
        entities/
        repositories/
        constants/
        services/
        errors/

    infrastructure/
        adapters/
        mappers/

    presentation/
        http/
            controllers/
            http-errors/
```

Dependiendo de las necesidades de cada módulo podrán agregarse nuevas carpetas sin romper esta estructura.

---

## 8.7 Contrato con el Frontend

Toda comunicación entre el frontend y el backend deberá realizarse mediante una API documentada.

La especificación oficial de dicha API será mantenida mediante OpenAPI.

El frontend nunca deberá depender de implementaciones internas del backend, únicamente del contrato definido por la API.

---

## 8.8 Estado actual

Al momento de la elaboración de esta especificación funcional, el backend se encuentra pendiente de definición e implementación.

Las decisiones relacionadas con tecnologías, persistencia de datos, autenticación, infraestructura y despliegue serán documentadas posteriormente en:

- BACKEND_ARCHITECTURE.md
- openapi.yaml

Una vez definidos estos documentos, deberán mantenerse alineados con la presente especificación funcional.


# 9. Librería de componentes

## 9.1 Introducción

Vera Balance Patient Management contará con una librería de componentes reutilizables desarrollada sobre Ant Design y adaptada al branding de Vera Balance.

El objetivo de esta librería es proporcionar una experiencia visual uniforme, reducir la duplicación de código y facilitar el mantenimiento del proyecto.

Todos los módulos del sistema deberán reutilizar estos componentes antes de crear nuevos.

---

## 9.2 Objetivos

La librería de componentes tiene como finalidad:

- Mantener una interfaz consistente en toda la aplicación.
- Reducir la duplicación de código.
- Facilitar el mantenimiento del proyecto.
- Centralizar la personalización de Ant Design.
- Simplificar el desarrollo de nuevas pantallas.
- Garantizar una experiencia de usuario uniforme.

---

## 9.3 Principios

Todos los componentes deberán cumplir los siguientes principios.

### Reutilización

Siempre deberá reutilizarse un componente existente antes de crear uno nuevo.

---

### Responsabilidad única

Cada componente deberá resolver un único problema.

No deberán crearse componentes con múltiples responsabilidades.

---

### Independencia

Los componentes no deberán conocer Redux, React Router ni ninguna implementación específica del proyecto.

Toda la información deberá recibirse mediante propiedades (`props`).

---

### Bajo acoplamiento

Los componentes deberán poder reutilizarse en cualquier módulo del sistema sin modificaciones.

---

### Consistencia

Todos los componentes deberán respetar el mismo lenguaje visual y comportamiento.

---

## 9.4 Comunicación

Los componentes deberán recibir toda la información desde el exterior.

La actualización de datos deberá realizarse mediante callbacks.

Ejemplo:

```tsx
<VBInputText
	value={patient.name}
	onChange={(value) => handleUpdate({ name: value })}
/>
```

Los componentes nunca deberán modificar directamente el estado global del sistema.

---

## 9.5 Componentes base

Actualmente la librería incluye los siguientes componentes.

### Contenedores

- VBCard

---

### Entradas de información

- VBInputText
- VBInputArea
- VBInputDate
- VBInputSelect

---

### Componentes de apoyo

- VBTitleSection
- VBLoadingModal
- VBEmptyState
- VBConfirmModal

---

Esta lista crecerá conforme evolucione el proyecto.

---

## 9.6 Personalización de Ant Design

Ant Design representa la base visual utilizada por el proyecto.

Sin embargo, ningún módulo deberá consumir directamente componentes de Ant Design cuando exista un componente equivalente dentro de la librería de Vera Balance.

Toda personalización deberá implementarse dentro de los componentes propios del proyecto.

Esto permitirá mantener un único punto de mantenimiento para futuras modificaciones visuales.

---

## 9.7 Creación de nuevos componentes

Antes de crear un nuevo componente deberán responderse las siguientes preguntas:

- ¿Ya existe un componente que resuelva este problema?
- ¿Puede extenderse un componente existente?
- ¿El nuevo componente será reutilizable?
- ¿Representa una responsabilidad independiente?

Únicamente cuando todas estas preguntas justifiquen su creación deberá desarrollarse un nuevo componente.

---

## 9.8 Organización

La librería de componentes se encuentra ubicada dentro de:

```text
src/ui/Components/
```

Cada componente deberá contener únicamente la lógica necesaria para su funcionamiento visual.

Los estilos correspondientes deberán ubicarse dentro de:

```text
src/ui/scss/
```

---

## 9.9 Componentes inteligentes

Los componentes de la librería deberán ser componentes de presentación.

No deberán:

- Consultar Redux.
- Consumir APIs.
- Acceder directamente a React Router.
- Implementar lógica de negocio.

Su responsabilidad será únicamente representar información y notificar eventos mediante callbacks.

---

## 9.10 Evolución de la librería

La librería de componentes forma parte de la arquitectura del proyecto y evolucionará junto con el sistema.

Todo nuevo componente deberá diseñarse pensando en su reutilización dentro de futuros módulos.

No deberán desarrollarse componentes específicos para una única pantalla cuando puedan construirse de forma reutilizable.


# 10. Guía de estilos

## 10.1 Introducción

Vera Balance Patient Management deberá mantener una identidad visual uniforme en toda la aplicación.

Todos los módulos desarrollados deberán respetar las mismas reglas de diseño, organización visual y estilos definidos por el proyecto.

El objetivo de esta guía es garantizar una experiencia consistente para el usuario y facilitar el mantenimiento del código SCSS.

---

## 10.2 SCSS compartido

Todos los estilos reutilizables deberán obtenerse desde la carpeta:

```text
src/ui/scss/
```

Esta carpeta representa la fuente oficial de estilos del proyecto.

No deberán declararse nuevamente variables, mixins, colores, tipografías o breakpoints cuando ya existan dentro de esta ubicación.

---

## 10.3 Reutilización de estilos

Antes de crear un nuevo estilo deberán revisarse los recursos existentes.

Siempre deberá priorizarse:

- Reutilizar mixins.
- Reutilizar variables.
- Reutilizar clases comunes.
- Reutilizar componentes.

Se deberá evitar la duplicación de estilos.

---

## 10.4 Colores

Todos los colores utilizados por la aplicación deberán obtenerse desde los archivos de configuración ubicados en:

```text
src/ui/scss/
```

No deberán utilizarse:

- Valores HEX escritos directamente.
- Valores RGB escritos directamente.
- Colores definidos localmente.

Toda modificación de la paleta deberá realizarse únicamente en los archivos de configuración correspondientes.

---

## 10.5 Tipografías

Toda la aplicación deberá utilizar las tipografías definidas por Vera Balance.

No deberán declararse nuevas familias tipográficas dentro de componentes o páginas.

Los tamaños, pesos y jerarquías visuales deberán reutilizar las variables definidas por el proyecto.

---

## 10.6 Mixins

Los mixins representan la forma oficial de reutilizar estilos comunes.

Deberán utilizarse para:

- Responsive.
- Flexbox.
- Espaciados.
- Contenedores.
- Utilidades visuales.

No deberán duplicarse estilos que ya existan mediante un mixin.

---

## 10.7 Responsive

El diseño responsive forma parte del MVP.

Toda pantalla nueva deberá funcionar correctamente en:

- Escritorio.
- Tablet.
- Dispositivos móviles.

Los breakpoints deberán reutilizar los definidos dentro de:

```text
src/ui/scss/
```

No deberán declararse breakpoints nuevos sin una justificación técnica.

---

## 10.8 Organización de archivos SCSS

Cada Feature podrá contener una carpeta SCSS para los estilos específicos del módulo.

La estructura recomendada será:

```text
feature/

    ui/

        scss/

            _feature-main.scss
            _component.scss
            _page.scss
```

El archivo **_feature-main.scss** será el encargado de importar el resto de archivos SCSS del Feature.

---

## 10.9 Convención de nombres

Las clases CSS deberán seguir una estructura consistente.

Se recomienda utilizar una nomenclatura basada en bloques y elementos.

Ejemplo:

```scss
.patient_card { }

.patient_card__header { }

.patient_card__body { }

.patient_card__footer { }

.patient_card--active { }
```

Todos los módulos deberán mantener la misma convención.

---

## 10.10 Componentes visuales comunes

La aplicación deberá reutilizar componentes visuales comunes para mantener una experiencia consistente.

Entre ellos:

### Estados vacíos

Cuando un módulo no tenga información para mostrar, deberá utilizar un componente reutilizable de estado vacío.

Ejemplos:

- No existen pacientes.
- No existen sesiones.
- No existen prereportes.

Siempre que sea posible, el estado vacío deberá incluir una acción principal que invite al usuario a crear el primer registro.

---

### Modales de confirmación

Toda acción destructiva deberá solicitar confirmación utilizando el componente oficial de confirmación del proyecto.

Ejemplos:

- Eliminar paciente.
- Eliminar sesión.
- Desactivar paciente.

---

### Modales de carga

Toda operación que requiera esperar la respuesta del servidor deberá utilizar el componente oficial de carga.

Actualmente el proyecto utiliza:

- VBLoadingModal.

---

## 10.11 Consistencia visual

Todas las pantallas deberán mantener la misma estructura visual.

En términos generales, deberán conservar:

- Espaciados.
- Márgenes.
- Tamaños de títulos.
- Jerarquía visual.
- Estilos de botones.
- Formularios.
- Tablas.
- Tarjetas.
- Modales.

El usuario deberá percibir toda la aplicación como un único producto, independientemente del módulo que esté utilizando.

---

## 10.12 Evolución de la guía

Esta guía podrá ampliarse conforme evolucione el proyecto.

Toda nueva regla visual aprobada deberá documentarse en este capítulo antes de ser utilizada de forma general en el sistema.


# 11. Convenciones de desarrollo

## 11.1 Introducción

Con el objetivo de mantener un código consistente, legible y fácil de mantener, todo el desarrollo de Vera Balance Patient Management deberá respetar las convenciones definidas en este capítulo.

Estas reglas aplican para cualquier contribución realizada al proyecto, independientemente de si fue desarrollada por un miembro del equipo o mediante herramientas de inteligencia artificial.

---

## 11.2 Principios generales

Todo desarrollo deberá respetar los siguientes principios:

- Mantener una separación clara de responsabilidades.
- Priorizar la reutilización antes que la duplicación.
- Mantener bajo acoplamiento entre módulos.
- Mantener alta cohesión dentro de cada Feature.
- Favorecer la legibilidad sobre la complejidad.
- Mantener consistencia en toda la base de código.

---

## 11.3 Formato del código

Todo el código deberá respetar estrictamente el formato existente dentro del proyecto.

No deberán realizarse modificaciones únicamente por preferencias personales de formato.

En particular:

- No agregar saltos de línea innecesarios.
- No dividir líneas únicamente por longitud.
- Mantener la indentación utilizada por el proyecto.
- Mantener el orden de imports existente.
- Mantener el estilo de llaves utilizado.
- Mantener el espaciado existente.

El estilo del proyecto prevalece sobre cualquier configuración automática del editor.

---

## 11.4 Entrega de código

Cuando se realice una modificación, siempre deberán entregarse los archivos completos.

No deberán entregarse únicamente fragmentos de código.

Toda entrega deberá incluir:

- Archivos modificados.
- Archivos nuevos.
- Interfaces relacionadas.
- Hooks relacionados.
- Slices relacionados.
- Selectors relacionados.
- Initial State relacionado.
- Componentes relacionados.

El objetivo es que cada cambio pueda integrarse directamente al proyecto.

---

## 11.5 Separación de responsabilidades

Cada Feature deberá mantener una separación clara entre sus capas.

### Pages

Las páginas representan el punto de entrada del Feature.

Son responsables de:

- Construir el flujo de la pantalla.
- Consumir Hooks.
- Organizar componentes.

---

### Hooks

Los Hooks representan la comunicación entre la interfaz y el Store.

Su responsabilidad consiste en:

- Obtener información.
- Actualizar información.
- Exponer acciones.

---

### Store

El Store administra el estado global del Feature.

Su estructura mínima será:

- Interfaces.
- Initial State.
- Slice.
- Selectors.

---

### Components

Los componentes únicamente representan la interfaz.

No deberán contener lógica de negocio.

---

## 11.6 Componentes

Los componentes deberán ser reutilizables.

No deberán:

- Consumir Redux.
- Consumir React Router.
- Consumir APIs.
- Conocer el origen de los datos.

Toda la información deberá recibirse mediante propiedades (`props`).

Toda modificación deberá notificarse mediante callbacks.

Ejemplo:

```tsx
<VBInputText
	value={patient.name}
	onChange={(value) => handleUpdate({ name: value })}
/>
```

---

## 11.7 Estado de la aplicación

Toda información perteneciente al dominio deberá almacenarse mediante Redux Toolkit.

Ejemplos:

- Pacientes.
- Procesos terapéuticos.
- Seguimiento clínico.
- Expediente.
- Usuario autenticado.

`useState` deberá reservarse únicamente para estados locales relacionados con la interfaz.

Ejemplos:

- Apertura de modales.
- Estado temporal de un menú.
- Información exclusivamente visual.

---

## 11.8 Crear y Editar

Las funcionalidades de Crear y Editar deberán mantenerse completamente separadas.

Cada flujo contará con:

- Página independiente.
- Hook independiente.
- Casos de uso independientes.
- Integración independiente con el backend.

Los componentes visuales podrán reutilizarse siempre que representen la misma interfaz.

La lógica nunca deberá compartirse entre ambos flujos.

---

## 11.9 Reutilización

Antes de desarrollar cualquier elemento nuevo deberán responderse las siguientes preguntas:

- ¿Ya existe una implementación similar?
- ¿Puede reutilizarse un componente existente?
- ¿Puede reutilizarse un Hook?
- ¿Puede reutilizarse un Selector?
- ¿Puede reutilizarse un caso de uso?

Siempre deberá priorizarse la reutilización.

---

## 11.10 Organización de archivos

Cada archivo deberá contener una única responsabilidad.

No deberán agruparse múltiples responsabilidades dentro del mismo archivo.

La estructura del proyecto deberá mantenerse organizada conforme a la arquitectura definida.

---

## 11.11 Comentarios

El código deberá ser lo suficientemente claro para evitar comentarios innecesarios.

Los comentarios únicamente deberán utilizarse cuando aporten contexto relevante que no pueda expresarse mediante nombres descriptivos.

---

## 11.12 Commits

Cada funcionalidad deberá desarrollarse de forma incremental.

Cuando una funcionalidad quede terminada y aprobada, deberá generar un commit independiente.

Los commits deberán representar unidades completas de trabajo y facilitar el seguimiento del historial del proyecto.

---

## 11.13 Inteligencia Artificial

Cuando se utilicen herramientas de inteligencia artificial durante el desarrollo, deberán respetarse todas las convenciones establecidas en este documento.

En particular:

- Mantener el formato del proyecto.
- Entregar archivos completos.
- No modificar el estilo del código existente.
- Respetar la arquitectura.
- No introducir dependencias innecesarias.
- Priorizar la reutilización de componentes.
- Mantener separadas las responsabilidades.

El código generado mediante inteligencia artificial deberá cumplir los mismos estándares de calidad que cualquier desarrollo realizado manualmente.

---

## 11.14 Evolución de las convenciones

Las convenciones definidas en este capítulo representan el estándar oficial del proyecto.

Cualquier nueva convención aprobada durante el desarrollo deberá documentarse en esta sección antes de adoptarse de forma general.


# 12. Definition of Done

## 12.1 Introducción

Una funcionalidad se considerará terminada únicamente cuando cumpla con todos los criterios definidos en este capítulo.

La implementación de código por sí sola no implica que una tarea esté finalizada.

Toda funcionalidad deberá cumplir tanto los requisitos funcionales como los estándares de calidad definidos para el proyecto.

---

## 12.2 Funcionalidad

La funcionalidad deberá:

- Cumplir completamente con el comportamiento definido en esta especificación funcional.
- Resolver el caso de uso para el cual fue desarrollada.
- No afectar el funcionamiento de otras funcionalidades existentes.
- Mantener la integridad de la información del sistema.

---

## 12.3 Diseño

La interfaz deberá:

- Respetar el diseño aprobado por Vera Balance.
- Mantener la identidad visual del proyecto.
- Utilizar únicamente los componentes oficiales de la librería.
- Reutilizar los estilos compartidos del proyecto.
- Mantener consistencia visual con el resto de la aplicación.

---

## 12.4 Responsive

Toda funcionalidad deberá funcionar correctamente en:

- Escritorio.
- Tablet.
- Dispositivos móviles.

El comportamiento responsive forma parte obligatoria del desarrollo y no podrá dejarse para etapas posteriores.

---

## 12.5 Arquitectura

La implementación deberá respetar la arquitectura definida para el proyecto.

Entre otros aspectos:

- Clean Architecture.
- Organización por Features.
- Separación de responsabilidades.
- Reutilización de componentes.
- Bajo acoplamiento.
- Alta cohesión.

---

## 12.6 Componentes

Toda nueva interfaz deberá:

- Reutilizar componentes existentes cuando sea posible.
- Evitar duplicación de componentes.
- Mantener desacoplada la lógica de negocio de la interfaz.
- Recibir la información mediante propiedades (`props`).

---

## 12.7 Estado de la aplicación

La gestión del estado deberá respetar las convenciones del proyecto.

En particular:

- Utilizar Redux Toolkit para información perteneciente al dominio.
- Utilizar `useState` únicamente para estados visuales temporales.
- Mantener desacoplados los componentes del Store.

---

## 12.8 Calidad del código

El código deberá:

- Mantener el formato oficial del proyecto.
- Mantener la estructura de carpetas establecida.
- No contener código duplicado.
- No contener archivos sin uso.
- Mantener nombres descriptivos.
- Ser fácil de leer y mantener.

---

## 12.9 Errores

La funcionalidad deberá compilar sin errores.

No deberán existir:

- Errores de TypeScript.
- Errores de ESLint.
- Imports sin utilizar.
- Variables sin utilizar.
- Código inalcanzable.

---

## 12.10 Revisión funcional

Antes de considerarse terminada, toda funcionalidad deberá ser revisada y aprobada por el responsable del proyecto.

La aprobación funcional representa el criterio definitivo para dar por concluido un desarrollo.

---

## 12.11 Checklist de finalización

Antes de realizar el commit de una funcionalidad deberán cumplirse todos los siguientes puntos:

- Funcionalidad implementada.
- Flujo funcional aprobado.
- Diseño aprobado.
- Responsive aprobado.
- Arquitectura respetada.
- Componentes reutilizados correctamente.
- Sin errores de TypeScript.
- Sin errores de ESLint.
- Código revisado.
- Aprobación del responsable del proyecto.

Únicamente cuando todos los elementos anteriores se encuentren completos podrá considerarse finalizada la funcionalidad.


# 13. Alcance del MVP

## 13.1 Introducción

El objetivo del MVP (Minimum Viable Product) es construir la primera versión funcional de Vera Balance Patient Management.

Esta versión deberá permitir que un terapeuta pueda realizar el flujo completo de trabajo utilizado actualmente dentro de Vera Balance, sustituyendo gradualmente el registro físico del seguimiento clínico.

El MVP estará enfocado principalmente en la construcción del Frontend, preparando la arquitectura necesaria para la futura integración con el Backend.

---

## 13.2 Objetivos del MVP

Al finalizar el MVP, un terapeuta deberá ser capaz de:

- Iniciar sesión en la plataforma.
- Consultar el listado de sus pacientes.
- Registrar nuevos pacientes.
- Editar la información de un paciente.
- Crear procesos terapéuticos.
- Registrar el seguimiento clínico de cada sesión.
- Consultar el expediente clínico consolidado de un paciente.
- Generar un prereporte utilizando cuatro sesiones seleccionadas.

---

## 13.3 Módulos incluidos

El MVP contempla el desarrollo de los siguientes módulos.

### Auth

Incluye:

- Login.
- Logout.
- Protección básica de rutas.

---

### Patients

Incluye:

- Listado de pacientes.
- Búsqueda por nombre.
- Crear paciente.
- Editar paciente.
- Desactivar paciente.
- Eliminar paciente.

---

### Clinical Follow-up

Incluye:

- Listado de sesiones.
- Crear registro de sesión.
- Editar registro de sesión.
- Eliminar registro de sesión.

---

### Patient Record

Incluye:

- Consulta del expediente clínico.
- Información consolidada del paciente.
- Historial del proceso terapéutico.
- Consulta de objetivos y avances.

---

### Pre Reports

Incluye:

- Selección de cuatro sesiones.
- Generación del prereporte.
- Vista previa del prereporte.

---

## 13.4 Alcance del Frontend

Durante el MVP, el desarrollo estará enfocado en la construcción de la interfaz de usuario.

Esto incluye:

- Pantallas.
- Navegación.
- Componentes reutilizables.
- Formularios.
- Estado mediante Redux Toolkit.
- Responsive Design.

La integración definitiva con el Backend podrá realizarse utilizando datos simulados mientras se define el contrato de la API.

---

## 13.5 Alcance del Backend

El Backend no forma parte del desarrollo inicial del MVP.

Sin embargo, la estructura del Frontend deberá prepararse considerando la futura integración mediante una API documentada con OpenAPI.

---

## 13.6 Calidad mínima requerida

Todos los módulos incluidos en el MVP deberán cumplir con la Definition of Done definida en el Capítulo 12.

Ninguna funcionalidad podrá considerarse terminada si no cumple con todos los criterios establecidos.

---

## 13.7 Exclusiones del MVP

Las siguientes funcionalidades no forman parte del MVP:

- Rol Administrador.
- Expediente infantil especializado.
- Agenda.
- Videollamadas.
- Integraciones con servicios externos.
- Notificaciones.
- Reportes administrativos.
- Importación masiva de pacientes.
- Búsquedas avanzadas.

Estas funcionalidades podrán evaluarse en versiones posteriores del sistema.


# 14. Roadmap

## 14.1 Introducción

Este capítulo describe la evolución prevista para Vera Balance Patient Management una vez concluido el MVP.

El objetivo del Roadmap es establecer una visión de crecimiento del producto sin modificar el alcance definido para la primera versión.

Las funcionalidades descritas en este capítulo representan iniciativas futuras y no deberán desarrollarse durante el MVP, salvo que exista una aprobación explícita para modificar el alcance del proyecto.

---

## 14.2 Próxima etapa

Una vez concluido el MVP, la siguiente etapa del proyecto contempla la incorporación de las siguientes funcionalidades.

### Administración de usuarios

Se incorporará un rol de **Administrador** con acceso a toda la información registrada dentro del sistema.

Entre sus responsabilidades estarán:

- Consultar todos los pacientes registrados.
- Consultar todos los procesos terapéuticos.
- Supervisar el trabajo realizado por los terapeutas.
- Administrar usuarios del sistema.

El modelo de permisos definitivo será documentado cuando inicie el desarrollo de esta funcionalidad.

---

### Expediente clínico infantil

El expediente clínico infantil evolucionará para incorporar información especializada que actualmente no forma parte del expediente clínico general.

Su estructura funcional será definida cuando comience su desarrollo.

---

## 14.3 Funcionalidades fuera del alcance

Las siguientes funcionalidades no forman parte de la visión actual del producto y no deberán contemplarse dentro del desarrollo de Vera Balance Patient Management.

- Agenda.
- Videollamadas.
- Integraciones con servicios externos.
- Notificaciones.
- Reportes administrativos.
- Importación masiva de pacientes.
- Búsquedas avanzadas.

Si en el futuro alguna de estas funcionalidades llegara a formar parte del producto, deberá actualizarse previamente esta especificación funcional.

---

## 14.4 Evolución del sistema

La evolución de Vera Balance Patient Management deberá respetar en todo momento los principios establecidos en esta especificación funcional.

Toda nueva funcionalidad deberá:

- Mantener la arquitectura del proyecto.
- Respetar las reglas de negocio existentes.
- Reutilizar la librería de componentes.
- Mantener la separación de responsabilidades.
- Conservar la experiencia de usuario definida para el sistema.

Ninguna evolución del producto deberá comprometer la estabilidad o mantenibilidad de la plataforma.

---

## 14.5 Actualización del Roadmap

El Roadmap representa la planificación funcional del proyecto.

Toda nueva iniciativa deberá documentarse en este capítulo antes de incorporarse al proceso de desarrollo.

La aprobación de una nueva funcionalidad implica la actualización de esta especificación funcional para mantenerla como la fuente principal de verdad del proyecto.


# 15. Glosario

## 15.1 Introducción

El presente glosario define los principales términos utilizados dentro de esta Especificación Funcional.

Todos los documentos derivados del proyecto, incluyendo documentación técnica, especificación de la API, código fuente y documentación de usuario, deberán utilizar estos conceptos con el mismo significado aquí definido.

---

## 15.2 Paciente

Persona registrada dentro de Vera Balance que recibe atención psicológica.

Un paciente puede participar en uno o varios procesos terapéuticos y conserva un único registro de información personal dentro del sistema.

---

## 15.3 Terapeuta

Profesional de Vera Balance responsable de uno o varios procesos terapéuticos.

Cada proceso terapéutico tiene un único terapeuta responsable.

Durante el MVP es el único rol con acceso al sistema.

---

## 15.4 Administrador

Rol contemplado para una versión futura del sistema.

Tendrá acceso a la información de todos los terapeutas, pacientes y procesos terapéuticos.

No forma parte del alcance del MVP.

---

## 15.5 Proceso terapéutico

Unidad principal de trabajo dentro del sistema.

Representa el tratamiento clínico realizado por un terapeuta para uno o varios pacientes.

Todo proceso terapéutico está conformado por:

- Un terapeuta responsable.
- Uno o más pacientes.
- Un tipo de terapia.
- Objetivos generales.
- Seguimiento clínico.
- Prereportes.

---

## 15.6 Tipo de terapia

Clasificación utilizada para identificar un proceso terapéutico.

Es el término mostrado al usuario en toda la interfaz del sistema.

Ejemplos:

- Terapia individual.
- Terapia de pareja.
- Terapia familiar.
- Terapia infantil.

---

## 15.7 Seguimiento clínico

Conjunto de registros de sesión pertenecientes a un proceso terapéutico.

Representa la principal fuente de información clínica del sistema.

El expediente clínico y los prereportes utilizan la información registrada en el seguimiento clínico.

---

## 15.8 Registro de sesión

Documento generado durante una sesión terapéutica.

Contiene la información clínica registrada por el terapeuta para documentar el desarrollo de la sesión.

Cada registro pertenece a un único proceso terapéutico.

---

## 15.9 Expediente clínico

Vista consolidada de toda la información histórica de un paciente.

Su finalidad es facilitar la consulta del historial clínico sin necesidad de revisar individualmente cada registro de sesión.

El expediente clínico no genera información nueva; únicamente organiza la información existente.

---

## 15.10 Prereporte

Documento generado automáticamente por el sistema utilizando la información registrada durante el seguimiento clínico.

El terapeuta selecciona cuatro sesiones y el sistema consolida la información para facilitar la revisión del proceso terapéutico.

El prereporte no sustituye un reporte clínico elaborado por el terapeuta.

---

## 15.11 Proceso activo

Proceso terapéutico que continúa en atención y sobre el cual pueden registrarse nuevas sesiones.

---

## 15.12 Paciente activo

Paciente que puede continuar participando en uno o varios procesos terapéuticos.

---

## 15.13 Paciente inactivo

Paciente que permanece registrado dentro del sistema, conservando todo su historial clínico, pero que actualmente no participa en un proceso terapéutico activo.

Puede reactivarse posteriormente.

---

## 15.14 Paciente eliminado

Paciente eliminado definitivamente del sistema.

La eliminación implica la pérdida permanente de la información asociada, conforme a las reglas de negocio definidas para el proyecto.

---

## 15.15 Estado de asistencia

Valor utilizado para indicar el resultado de una sesión programada.

Los estados permitidos son:

- Asistió.
- No asistió.
- Canceló.
- Reprogramó.
- Sin respuesta.

---

## 15.16 MVP

Primera versión funcional de Vera Balance Patient Management.

Su objetivo es validar el flujo principal de trabajo utilizado por los terapeutas antes de incorporar nuevas funcionalidades al sistema.

---

## 15.17 Frontend

Aplicación web utilizada por los terapeutas para interactuar con el sistema.

Se desarrolla en el proyecto:

`mfe-vera-balance-dashboard`

---

## 15.18 Backend

Servicio encargado de implementar la lógica de negocio y administrar la información del sistema.

Se desarrollará en el proyecto:

`baas-vera-balance-dashboard`

---

## 15.19 Librería de componentes

Conjunto de componentes reutilizables desarrollados para Vera Balance Patient Management.

Su objetivo es mantener una interfaz consistente, reutilizable y alineada con el branding del proyecto.

---

## 15.20 Clean Architecture

Modelo arquitectónico utilizado por el proyecto para separar responsabilidades, reducir el acoplamiento y facilitar el mantenimiento de la aplicación.

Tanto el Frontend como el Backend deberán respetar este modelo.

---

## 15.21 Feature

Unidad funcional independiente utilizada para organizar el Frontend.

Cada Feature agrupa todos los elementos relacionados con una responsabilidad específica del sistema, incluyendo interfaz, estado, lógica de aplicación y dominio.

