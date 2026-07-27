# Arquitectura Frontend

## Vera Balance Patient Management

**Proyecto:** `mfe-vera-balance-dashboard`

**Versión del documento:** 1.0.0

**Estado:** En elaboración

**Última actualización:** Pendiente

---

# Índice

1. Introducción
2. Objetivos de la arquitectura
3. Principios arquitectónicos
4. Estructura general del proyecto
5. Organización por Features
6. Estructura de un Feature
7. Capas de un Feature
8. Reglas de dependencia
9. Páginas
10. Componentes
11. Hooks
12. Estado global con Redux Toolkit
13. Casos de uso
14. Infraestructura y consumo de API
15. Formularios
16. Flujos de creación y edición
17. Navegación y rutas
18. Manejo de estados de interfaz
19. Librería de componentes
20. Ant Design
21. Arquitectura de estilos
22. Responsive Design
23. Catálogos y elementos compartidos
24. Mocks
25. Manejo de errores
26. Convenciones de nombres
27. Incorporación de nuevos Features
28. Validación arquitectónica
29. Evolución de la arquitectura
30. Glosario técnico

---

# 1. Introducción

## 1.1 Propósito del documento

El presente documento define la arquitectura oficial del frontend de Vera Balance Patient Management.

Su finalidad es establecer la estructura, responsabilidades, dependencias y convenciones arquitectónicas que deberán respetarse durante el desarrollo de `mfe-vera-balance-dashboard`.

Este documento deberá utilizarse como referencia para:

* Crear nuevos Features.
* Incorporar nuevas páginas.
* Crear componentes.
* Administrar el estado global.
* Integrar servicios HTTP.
* Organizar estilos.
* Realizar refactors.
* Incorporar nuevos desarrolladores.
* Utilizar agentes de inteligencia artificial durante el desarrollo.

Las reglas funcionales y de negocio se encuentran definidas en:

```text
docs/product/ESPECIFICACION_FUNCIONAL.md
```

En caso de existir una contradicción entre una decisión técnica y la Especificación Funcional, tendrá prioridad la Especificación Funcional.

---

## 1.2 Proyecto Frontend

El frontend se desarrolla dentro del proyecto:

```text
mfe-vera-balance-dashboard
```

Es una aplicación web interna utilizada por los terapeutas de Vera Balance.

Su responsabilidad es proporcionar la interfaz necesaria para interactuar con los módulos del sistema y preparar la integración con el backend mediante una API HTTP documentada con OpenAPI.

---

## 1.3 Alcance arquitectónico

Este documento define:

* La organización general del código.
* La estructura de los Features.
* Las responsabilidades de cada capa.
* Las reglas de dependencia.
* El manejo del estado.
* La reutilización de componentes.
* La comunicación con la API.
* La organización de estilos.
* El comportamiento responsive.
* La separación entre casos de uso.

Este documento no define:

* Reglas de negocio.
* Campos funcionales definitivos.
* Contratos de endpoints.
* Persistencia.
* Arquitectura Backend.
* Diseño visual específico de cada pantalla.

---

# 2. Objetivos de la arquitectura

La arquitectura del frontend deberá cumplir los siguientes objetivos:

* Mantener una separación clara de responsabilidades.
* Organizar el código por Features funcionales.
* Facilitar la comprensión del proyecto.
* Permitir el mantenimiento independiente de cada módulo.
* Reducir el acoplamiento entre Features.
* Favorecer la reutilización de componentes.
* Evitar la duplicación de lógica.
* Preparar el frontend para la integración con el backend.
* Permitir que los mocks sean reemplazados sin modificar la UI.
* Mantener una estructura escalable sin introducir complejidad innecesaria.
* Facilitar el trabajo incremental.
* Permitir que Codex y otros agentes comprendan el contexto del cambio antes de modificar archivos.

---

# 3. Principios arquitectónicos

## 3.1 Clean Architecture

El frontend seguirá los principios de Clean Architecture.

La aplicación deberá separar:

* Reglas del dominio.
* Casos de uso.
* Estado.
* Infraestructura.
* Interfaz de usuario.

Las capas internas no deberán depender de herramientas externas o detalles visuales.

---

## 3.2 Organización por Features

La unidad principal de organización será el Feature.

Cada Feature representará una capacidad funcional del sistema.

Ejemplos:

```text
auth
patients
clinical-follow-up
patient-record
pre-reports
```

Cada Feature deberá concentrar todos los archivos relacionados con su responsabilidad.

---

## 3.3 Separación de responsabilidades

Cada archivo, componente, hook y caso de uso deberá tener una responsabilidad identificable.

No deberán mezclarse:

* Listado y formulario.
* Crear y editar.
* Interfaz e infraestructura.
* Componentes y Redux.
* Reglas de negocio y presentación.
* Mocks y componentes visuales.
* Navegación y componentes compartidos.

---

## 3.4 Reutilización

La reutilización deberá aplicarse cuando dos elementos representen la misma responsabilidad.

Ejemplos:

* Crear y editar un paciente podrán reutilizar los mismos componentes de formulario.
* Crear y editar deberán conservar hooks y operaciones independientes.
* Diferentes módulos podrán reutilizar `VBCard`, inputs, modales y estados vacíos.
* Las reglas funcionales compartidas podrán ubicarse en servicios o funciones puras.

Reutilizar no significa mezclar casos de uso diferentes.

---

## 3.5 Simplicidad

La arquitectura deberá mantenerse proporcional a las necesidades actuales.

No deberán crearse:

* Capas vacías.
* Interfaces sin uso.
* Repositorios sin implementación o necesidad real.
* Wrappers innecesarios.
* Hooks que solo reexporten valores sin aportar una responsabilidad.
* Abstracciones prematuras.
* Carpetas vacías únicamente para cumplir una estructura teórica.

Las carpetas se crearán según aplique en cada Feature.

---

## 3.6 Independencia de la interfaz

Los componentes reutilizables no deberán depender de:

* Redux.
* Endpoints.
* Casos de uso.
* React Router.
* Mocks.
* Flujos específicos como crear o editar.

Deberán recibir valores y funciones mediante propiedades.

---

# 4. Estructura general del proyecto

La estructura general esperada será:

```text
src/
	common/
		catalogs/
		constants/
		interfaces/
		types/
		utils/

	features/
		auth/
		patients/
		clinical-follow-up/
		patient-record/
		pre-reports/

	store/

	ui/
		Components/
		Layouts/
		scss/

	App.tsx
	PageRouter.tsx
	main.tsx
```

La estructura real podrá contener archivos adicionales, siempre que mantengan una responsabilidad clara y respeten las dependencias definidas en este documento.

---

# 5. Organización por Features

## 5.1 Definición

Un Feature representa una capacidad funcional independiente de la aplicación.

Cada Feature deberá contener los elementos necesarios para implementar su funcionalidad:

* Dominio.
* Casos de uso.
* Estado.
* Integración externa.
* Hooks.
* Páginas.
* Componentes específicos.
* Estilos propios.

---

## 5.2 Features previstos

El frontend contempla los siguientes Features:

```text
auth
patients
clinical-follow-up
patient-record
pre-reports
```

No deberán agregarse Features fuera del alcance definido en la Especificación Funcional sin aprobación previa.

---

## 5.3 Independencia

Los Features deberán mantenerse desacoplados.

Un Feature no deberá importar directamente:

* Componentes internos de otro Feature que no hayan sido diseñados como compartidos.
* Slices internos de otro Feature.
* Mocks internos de otro Feature.
* Adapters internos de otro Feature.
* Casos de uso internos de otro Feature.

Cuando exista una dependencia funcional entre módulos, deberá exponerse mediante contratos claros o datos proporcionados por la página correspondiente.

---

## 5.4 Eliminación de un Feature

La arquitectura deberá permitir que un Feature pueda retirarse con el menor impacto posible sobre la aplicación.

Esto no significa que todas las dependencias desaparezcan automáticamente, sino que deberán estar limitadas a puntos identificables, como:

* Registro de rutas.
* Registro de reducer.
* Importación del orquestador SCSS.
* Elementos de navegación.
* Contratos compartidos explícitos.

---

# 6. Estructura de un Feature

La estructura base será:

```text
feature-name/
	application/
		dtos/
		interfaces/
		use-cases/

	domain/
		entities/
		repositories/
		constants/
		services/
		errors/
		interfaces/
		types/

	infrastructure/
		adapters/
		mappers/
		repositories/
		mocks/

	hooks/

	store/
		feature-state.interface.ts
		feature.initial-state.ts
		feature.selectors.ts
		feature.slice.ts

	ui/
		components/
		pages/
		scss/
			_feature-main.scss
			components/
			pages/
```

No todas las carpetas son obligatorias.

Únicamente deberán crearse cuando exista código que pertenezca realmente a dicha responsabilidad.

---

# 7. Capas de un Feature

## 7.1 Domain

La capa `domain` contiene los conceptos y reglas centrales del Feature.

Puede incluir:

```text
domain/
	entities/
	repositories/
	constants/
	services/
	errors/
	interfaces/
	types/
```

### Responsabilidades

* Definir entidades.
* Definir tipos propios del dominio.
* Definir contratos de repositorios.
* Contener reglas puras.
* Contener servicios de dominio.
* Definir errores propios del Feature.

### Restricciones

La capa de dominio no deberá importar:

* React.
* Redux.
* Ant Design.
* React Router.
* Clientes HTTP.
* Componentes.
* Hooks.
* SCSS.

---

## 7.2 Application

La capa `application` coordina los casos de uso.

Puede incluir:

```text
application/
	dtos/
	interfaces/
	use-cases/
	mappers/
```

### Responsabilidades

* Definir casos de uso.
* Coordinar operaciones.
* Definir DTO de aplicación.
* Preparar datos para el dominio o la infraestructura.
* Consumir contratos definidos por el dominio.

### Ejemplos

```text
create-patient.use-case.ts
edit-patient.use-case.ts
delete-patient.use-case.ts
create-clinical-session.use-case.ts
generate-pre-report.use-case.ts
```

### Restricciones

Los casos de uso no deberán depender de:

* JSX.
* Componentes.
* Ant Design.
* SCSS.
* Detalles de navegación.

---

## 7.3 Infrastructure

La capa `infrastructure` contiene las implementaciones externas.

Puede incluir:

```text
infrastructure/
	adapters/
	mappers/
	repositories/
	mocks/
```

### Responsabilidades

* Consumir endpoints.
* Implementar repositorios.
* Transformar respuestas externas.
* Proporcionar mocks.
* Adaptar contratos externos a modelos internos.

### Regla principal

La UI no deberá depender directamente de la infraestructura.

La infraestructura deberá poder reemplazarse sin modificar los componentes visuales.

---

## 7.4 Store

La carpeta `store` administra el estado Redux del Feature.

Su estructura deberá separar como mínimo:

```text
store/
	feature-state.interface.ts
	feature.initial-state.ts
	feature.selectors.ts
	feature.slice.ts
```

Cuando un Feature tenga estados claramente distintos, podrán organizarse en subcarpetas.

Ejemplo:

```text
store/
	patient-form/
		patient-form-state.interface.ts
		patient-form.initial-state.ts
		patient-form.selectors.ts
		patient-form.slice.ts
```

### Responsabilidades

* Definir el estado.
* Definir el estado inicial.
* Definir reducers.
* Definir acciones.
* Definir selectores.

### Restricciones

El Store no deberá:

* Ejecutar peticiones HTTP.
* Navegar.
* Mostrar modales.
* Decidir qué endpoint utilizar.
* Implementar lógica visual.
* Conocer componentes.

---

## 7.5 Hooks

La carpeta `hooks` contiene los hooks propios del Feature.

### Responsabilidades

* Conectar páginas con Redux.
* Exponer datos.
* Exponer acciones.
* Coordinar casos de uso.
* Encapsular estados de carga y error cuando corresponda.
* Mantener separada la lógica de cada operación.

### Ejemplos

```text
usePatients.ts
usePatientForm.ts
useCreatePatient.ts
useEditPatient.ts
useClinicalFollowUp.ts
```

### Restricciones

No deberá existir un único hook que concentre todas las operaciones del Feature.

Cada hook deberá representar una responsabilidad clara.

---

## 7.6 UI

La carpeta `ui` contiene la presentación del Feature.

```text
ui/
	components/
	pages/
	scss/
```

### Responsabilidades

* Representar información.
* Coordinar la composición visual.
* Mostrar estados de carga, error y vacío.
* Conectar páginas con hooks.
* Mantener estilos propios del Feature.

---

# 8. Reglas de dependencia

Las dependencias deberán seguir una dirección controlada.

La dirección conceptual será:

```text
UI
	→ Hooks
	→ Application
	→ Domain
```

La infraestructura implementará contratos consumidos por Application o Domain.

---

## 8.1 Dependencias permitidas

### UI puede depender de

* Hooks.
* Componentes compartidos.
* Tipos necesarios para props.
* Catálogos.
* Constantes de rutas.
* Componentes propios del Feature.

### Hooks pueden depender de

* Redux.
* Casos de uso.
* Selectores.
* Acciones.
* Interfaces y tipos.
* Adapters mediante abstracciones cuando corresponda.

### Application puede depender de

* Domain.
* Interfaces de repositorios.
* DTO.
* Mappers de aplicación.

### Infrastructure puede depender de

* Domain.
* Contratos.
* Clientes HTTP.
* OpenAPI generado o tipos derivados cuando corresponda.

### Domain puede depender de

* Código propio del dominio.
* Tipos puros de TypeScript.

---

## 8.2 Dependencias no permitidas

No deberá permitirse:

```text
Domain → React
Domain → Redux
Domain → Ant Design
Domain → UI
Component → Redux
Component → Endpoint
Component → Router
Slice → HTTP
Slice → Modal
Feature → archivos internos no expuestos de otro Feature
```

---

# 9. Páginas

## 9.1 Responsabilidad

Las páginas funcionarán como orquestadores de los flujos.

Deberán:

* Leer parámetros de la ruta.
* Seleccionar el hook correspondiente.
* Obtener datos.
* Coordinar la carga inicial.
* Coordinar el envío.
* Calcular la composición de la pantalla.
* Pasar valores y callbacks a los componentes.
* Mostrar estados generales.
* Ejecutar navegación cuando corresponda.

---

## 9.2 Restricciones

Las páginas no deberán:

* Implementar clientes HTTP directamente.
* Contener grandes reglas de negocio.
* Duplicar lógica ya disponible en casos de uso o servicios.
* Acceder al estado interno de otras páginas.
* Importar archivos internos de otro flujo para reutilizar lógica operacional.

---

## 9.3 Independencia entre páginas

Una página nunca deberá depender de la implementación interna de otra página.

Ejemplo:

```text
CreatePatient
	→ useCreatePatient
```

```text
EditPatient
	→ useEditPatient
```

Ambas podrán reutilizar:

```text
PatientPersonalData
TherapyData
PatientGuardianData
PatientPartnerData
SecondPatientData
```

Las páginas comparten componentes, no lógica operacional.

---

# 10. Componentes

## 10.1 Componentes compartidos

Los componentes compartidos de la aplicación se ubican principalmente en:

```text
src/ui/Components/
```

Representan la librería visual de Vera Balance.

---

## 10.2 Componentes de Feature

Los componentes específicos se ubican en:

```text
src/features/<feature>/ui/components/
```

Estos componentes podrán reutilizarse dentro del mismo Feature.

---

## 10.3 Props

Los componentes deberán recibir la información mediante props.

Ejemplo:

```tsx
<PatientPersonalData
	personalData={personalData}
	onChange={handleUpdatePersonalData}
/>
```

No deberán obtener internamente los datos desde Redux.

---

## 10.4 Responsabilidad visual

Un componente deberá:

* Mostrar información.
* Capturar interacción.
* Notificar eventos.
* Aplicar estilos.
* Mantener comportamiento visual reutilizable.

No deberá:

* Ejecutar endpoints.
* Cargar entidades.
* Decidir el caso de uso.
* Navegar.
* Mutar Redux directamente.

---

## 10.5 Duplicación

No deberán crearse componentes separados únicamente porque se utilicen en páginas diferentes.

Ejemplo incorrecto:

```text
CreatePatientPersonalData
EditPatientPersonalData
```

Cuando ambos representan la misma interfaz, deberá existir:

```text
PatientPersonalData
```

Las diferencias se resolverán desde la página mediante datos, callbacks, estados o props.

---

# 11. Hooks

## 11.1 Tipos de hooks

Los hooks podrán representar:

* Acceso a un Store.
* Caso de uso.
* Estado de página.
* Integración de infraestructura.
* Lógica reutilizable de interfaz.

---

## 11.2 Hook de formulario

Un hook como `usePatientForm` deberá:

* Leer el objeto completo del formulario.
* Exponer secciones.
* Actualizar secciones.
* Reemplazar el estado completo.
* Limpiar el formulario.
* Exponer reglas derivadas del formulario.

No deberá decidir si se crea o edita un paciente.

---

## 11.3 Hooks de operación

Hooks como:

```text
useCreatePatient
useEditPatient
```

deberán representar operaciones diferentes.

### `useCreatePatient`

Responsable de:

* Crear un paciente.
* Administrar carga de creación.
* Administrar errores de creación.
* Ejecutar el futuro `POST`.
* Resolver el resultado de creación.

### `useEditPatient`

Responsable de:

* Obtener el paciente.
* Administrar carga inicial.
* Llenar el Store compartido.
* Actualizar el paciente.
* Ejecutar el futuro `GET`.
* Ejecutar el futuro `PUT`.

---

# 12. Estado global con Redux Toolkit

## 12.1 Uso

Redux Toolkit se utilizará para información compartida o perteneciente al dominio.

Ejemplos:

* Listado de pacientes.
* Formulario de paciente.
* Sesiones clínicas.
* Usuario autenticado.
* Datos obtenidos de la API.
* Información que debe permanecer disponible entre componentes.

---

## 12.2 Estado local

`useState` podrá utilizarse para estado exclusivamente visual o temporal.

Ejemplos:

* Apertura de modal.
* Campo de búsqueda local.
* Pestaña activa.
* Estado temporal del menú.
* Toggle responsive.
* Elementos de interacción que no pertenecen al dominio.

---

## 12.3 Actualización por secciones

Cuando un objeto esté dividido por secciones, las acciones deberán actualizar la sección completa mediante `Partial`.

Ejemplo:

```ts
updatePersonalData({
	age: value
})
```

No deberán crearse reducers individuales sin necesidad:

```text
setName
setAge
setPhone
setAddress
```

---

## 12.4 Store neutral

Los Stores compartidos deberán nombrarse según la información que almacenan, no según una operación específica.

Ejemplo correcto:

```text
patientForm
```

Ejemplo incorrecto cuando también lo utilizará edición:

```text
createPatient
```

El Store almacena datos.

La página y el hook deciden si dichos datos se utilizan para crear o editar.

---

## 12.5 Registro de reducers

Los reducers de cada Feature deberán registrarse en el Store principal.

Cuando se agregue o elimine un reducer, deberán actualizarse todos los archivos involucrados.

---

# 13. Casos de uso

## 13.1 Responsabilidad

Los casos de uso representan una operación del sistema.

Cada uno deberá tener una responsabilidad específica.

Ejemplos:

```text
CreatePatient
GetPatient
EditPatient
DeletePatient
DeactivatePatient
CreateClinicalSession
EditClinicalSession
DeleteClinicalSession
GeneratePreReport
```

---

## 13.2 Separación

No deberá existir un caso de uso genérico que mezcle operaciones no equivalentes.

Crear y editar deberán conservar casos de uso separados, incluso cuando utilicen los mismos datos.

---

## 13.3 Implementación gradual

Durante el MVP podrán existir flujos visuales sin caso de uso conectado a backend.

Los casos de uso se incorporarán cuando exista una operación real que coordinar.

No deberán crearse archivos vacíos únicamente para anticipar trabajo futuro.

---

# 14. Infraestructura y consumo de API

## 14.1 Contrato

Toda integración con backend deberá respetar:

```text
docs/api/openapi.yaml
```

OpenAPI será la fuente oficial de los contratos HTTP.

---

## 14.2 Adapters

Los adapters encapsularán la comunicación externa.

Ejemplo:

```text
patients-api.adapter.ts
```

La UI no deberá conocer:

* URL base.
* Headers.
* Métodos HTTP.
* Formato externo de errores.
* Forma original de las respuestas.

---

## 14.3 Mappers

Cuando la respuesta de la API no coincida con el modelo interno, deberá utilizarse un mapper.

Ejemplo:

```text
PatientApiResponse
	→ Patient
```

No deberán adaptarse respuestas externas directamente dentro de un componente.

---

## 14.4 Reemplazo de mocks

Los mocks deberán respetar los contratos planeados.

La transición esperada será:

```text
Mock Adapter
	→ HTTP Adapter
```

Este reemplazo no deberá requerir cambios en componentes visuales.

---

# 15. Formularios

## 15.1 Estado

Los formularios complejos compartidos deberán utilizar Redux cuando su información:

* Se comparta entre componentes.
* Dependa de reglas condicionales.
* Deba llenarse desde una respuesta.
* Sea utilizada por crear y editar.
* Represente información del dominio.

---

## 15.2 Componentes controlados

Los inputs serán controlados.

Deberán recibir, según corresponda:

```text
value
onChange
disabled
error
placeholder
options
```

---

## 15.3 Reglas condicionales

La visibilidad de secciones podrá resolverse mediante selectores.

Ejemplos:

```text
selectIsMinor
selectHasPartner
selectIsCouplesTherapy
selectShouldShowGuardianData
selectShouldShowPartnerData
selectShouldShowSecondPatientData
```

Las reglas no deberán duplicarse en varios componentes.

---

## 15.4 Limpieza

El formulario deberá limpiarse al iniciar un flujo de creación.

Un flujo de edición deberá:

1. Limpiar datos anteriores.
2. Obtener la entidad.
3. Llenar el Store.
4. Permitir la edición.

---

# 16. Flujos de creación y edición

## 16.1 Estado compartido

Crear y editar podrán utilizar el mismo Store neutral del formulario.

Ejemplo:

```text
patientForm
```

---

## 16.2 Lógica independiente

Crear y editar deberán mantener separados:

* Página.
* Hook operacional.
* Caso de uso.
* Endpoint.
* Estado de carga de la operación.
* Manejo de errores.
* Navegación posterior.

---

## 16.3 Flujo de creación

```text
CreatePatient
	→ limpiar patientForm
	→ capturar información
	→ useCreatePatient
	→ POST
```

---

## 16.4 Flujo de edición

```text
EditPatient
	→ leer patientId
	→ limpiar patientForm
	→ GET
	→ llenar patientForm
	→ modificar información
	→ PUT
```

---

# 17. Navegación y rutas

## 17.1 Centralización

Las rutas deberán definirse mediante constantes compartidas.

Ejemplo:

```text
ROUTES
```

No deberán escribirse rutas literales repetidas dentro de múltiples componentes.

---

## 17.2 Page Router

El router principal será responsable de asociar rutas con páginas.

Cuando se agregue una nueva página deberán revisarse:

* Constantes de rutas.
* Router.
* Menú lateral.
* Navegación desde otras páginas.
* Estado activo del menú.

---

## 17.3 Navegación de componentes

Los componentes compartidos no deberán navegar directamente.

La página deberá proporcionar callbacks cuando una interacción necesite modificar la ruta.

---

# 18. Manejo de estados de interfaz

Toda pantalla que consulte o modifique información deberá considerar los siguientes estados.

## 18.1 Loading

Se utilizará el componente compartido de carga cuando una operación bloquee la pantalla.

Ejemplo:

```text
VBLoadingModal
```

---

## 18.2 Empty State

Todo Feature que permita crear registros deberá mostrar un estado vacío cuando no existan datos.

El componente deberá permitir:

* Icono o ilustración.
* Título.
* Descripción.
* Acción principal.

Ejemplos:

```text
No existen pacientes
No existen sesiones
No existen prereportes
```

---

## 18.3 Error

La pantalla deberá comunicar errores de forma clara.

No deberán mostrarse mensajes técnicos del backend directamente al usuario.

---

## 18.4 Confirmación

Toda acción destructiva deberá utilizar un componente compartido de confirmación.

Ejemplos:

* Eliminar paciente.
* Eliminar sesión.
* Desactivar paciente cuando requiera confirmación.
* Descartar cambios importantes cuando se implemente.

---

## 18.5 Success

Cuando una operación requiera confirmación visible de éxito, deberá utilizarse un patrón compartido aprobado por el proyecto.

---

# 19. Librería de componentes

La librería interna se ubica en:

```text
src/ui/Components/
```

Su objetivo es adaptar Ant Design al branding de Vera Balance.

Componentes conocidos:

```text
VBCard
VBInputText
VBInputSelect
VBInputDate
VBInputArea
VBTitleSection
VBLoadingModal
VBEmptyState
VBConfirmModal
```

La lista deberá mantenerse actualizada en la documentación correspondiente.

---

# 20. Ant Design

Ant Design será la base de los componentes visuales.

No se pretende reconstruir todos los elementos desde cero.

La estrategia será:

```text
Ant Design
	→ adaptación al branding
	→ componente VB
	→ reutilización en Features
```

Cuando exista un componente `VB` equivalente, deberá utilizarse en lugar de consumir directamente Ant Design.

Ant Design podrá consumirse directamente cuando:

* No exista todavía un componente compartido equivalente.
* El elemento sea específico de una página.
* Crear un wrapper no aporte reutilización.
* La decisión respete los estilos del proyecto.

---

# 21. Arquitectura de estilos

## 21.1 Fuente oficial

Los estilos compartidos se encuentran en:

```text
src/ui/scss/
```

Deberán reutilizarse obligatoriamente:

* Mixins.
* Configuración.
* Colores.
* Tipografías.
* Breakpoints.
* Variables.
* Clases compartidas.

---

## 21.2 SCSS de Feature

Cada Feature tendrá un orquestador:

```text
_feature-main.scss
```

Ejemplo:

```text
patients-main.scss
```

Este archivo importará páginas y componentes del Feature.

---

## 21.3 SCSS central

El archivo SCSS central de la aplicación deberá importar el orquestador de cada Feature.

No deberán importarse individualmente todas las hojas internas desde el archivo global.

---

## 21.4 Restricciones

No deberán:

* Declararse colores hardcodeados si existe una variable.
* Declararse fuentes locales si existe configuración.
* Duplicarse mixins.
* Crearse breakpoints alternativos.
* Importarse hojas de componentes directamente en cada TSX cuando el Feature utiliza un orquestador.
* Sobrescribirse Ant Design de manera inconsistente desde páginas diferentes.

---

# 22. Responsive Design

## 22.1 Obligatorio

Responsive forma parte de la funcionalidad mínima.

Una pantalla no se considerará terminada sin comportamiento responsive aprobado.

---

## 22.2 Breakpoints

Se deberán reutilizar los breakpoints definidos en los SCSS compartidos.

No se deberán inventar nuevos valores sin aprobación.

---

## 22.3 Menú lateral

El menú lateral deberá:

* Respetar los breakpoints actuales.
* Mostrar la opción activa según la ruta.
* Permitir toggle en responsive.
* Cerrar o adaptarse correctamente después de navegar cuando corresponda.

---

# 23. Catálogos y elementos compartidos

Los catálogos compartidos se ubicarán en:

```text
src/common/catalogs/
```

Ejemplos:

```text
therapy-type.catalog.ts
patient-status.catalog.ts
marritage.catalog.ts
school-grades.catalog.ts
relationship.catalog.ts
```

Solo deberán colocarse en `common` cuando sean utilizados por varios Features o representen conceptos transversales.

Los catálogos exclusivos de un Feature deberán permanecer dentro de dicho Feature.

---

# 24. Mocks

Los mocks se utilizarán temporalmente mientras no exista integración con backend.

Deberán:

* Respetar las interfaces del sistema.
* Representar escenarios realistas.
* Contener casos activos, inactivos y vacíos cuando corresponda.
* Poder reemplazarse por adapters HTTP.
* Evitar mezclarse dentro de componentes.

Los mocks no deberán considerarse la fuente definitiva de reglas funcionales.

---

# 25. Manejo de errores

Los errores deberán dividirse conceptualmente en:

* Errores de carga.
* Errores de validación.
* Errores de operación.
* Errores de recurso no encontrado.
* Errores de autenticación.
* Errores de autorización futuros.

La UI deberá mostrar mensajes útiles para el terapeuta.

No deberá mostrar:

* Stack traces.
* Mensajes internos.
* Detalles de infraestructura.
* Identificadores técnicos innecesarios.

---

# 26. Convenciones de nombres

## 26.1 Features

Los nombres de carpetas deberán utilizar kebab-case:

```text
clinical-follow-up
patient-record
pre-reports
```

---

## 26.2 Componentes

Los componentes React deberán utilizar PascalCase:

```text
PatientPersonalData.tsx
VBLoadingModal.tsx
```

---

## 26.3 Hooks

Los hooks deberán utilizar camelCase y comenzar con `use`:

```text
usePatientForm.ts
useEditPatient.ts
```

---

## 26.4 Stores

Los archivos deberán identificar su responsabilidad:

```text
patient-form-state.interface.ts
patient-form.initial-state.ts
patient-form.selectors.ts
patient-form.slice.ts
```

---

## 26.5 SCSS

Los archivos SCSS deberán respetar el patrón actual del proyecto.

Las clases deberán mantener la convención visual existente, basada en bloques, elementos y modificadores.

---

# 27. Incorporación de nuevos Features

Antes de crear un nuevo Feature deberá confirmarse:

1. Que representa una capacidad funcional independiente.
2. Que forma parte de la Especificación Funcional.
3. Que no puede resolverse como parte de un Feature existente.
4. Que tiene una responsabilidad claramente delimitada.
5. Que no duplica información o lógica.

El proceso recomendado será:

1. Definir funcionalmente el módulo.
2. Identificar páginas.
3. Identificar estado.
4. Identificar componentes compartidos.
5. Identificar contratos.
6. Definir rutas.
7. Crear estructura mínima.
8. Implementar de forma incremental.
9. Validar responsive.
10. Obtener aprobación.

---

# 28. Validación arquitectónica

Antes de considerar terminado un cambio deberá verificarse:

* La capa elegida es correcta.
* No existe dependencia prohibida.
* No se duplicaron componentes.
* No se mezclaron operaciones.
* Redux solo almacena estado.
* La UI no consume infraestructura directamente.
* Los componentes reciben props.
* Los estilos reutilizan mixins y configuración.
* Se incluyeron estados de loading, error y vacío cuando corresponda.
* La pantalla es responsive.
* Todos los archivos involucrados fueron actualizados.

---

# 29. Evolución de la arquitectura

La arquitectura podrá evolucionar conforme cambien las necesidades del proyecto.

Toda modificación deberá:

* Resolver una necesidad real.
* Mantener la separación de responsabilidades.
* Evitar refactors generales no relacionados.
* Documentarse antes de adoptarse como estándar.
* Actualizar este archivo.
* Considerar el impacto sobre Features existentes.

---

# 30. Glosario técnico

## Feature

Unidad funcional independiente que concentra dominio, aplicación, estado, infraestructura y UI relacionados con una capacidad del sistema.

## Domain

Capa que contiene conceptos y reglas centrales del negocio.

## Application

Capa que coordina casos de uso y operaciones.

## Infrastructure

Capa que implementa comunicación externa, repositorios, adapters y mappers.

## Store

Estado Redux perteneciente a un Feature o flujo compartido.

## Hook

Función React utilizada para conectar páginas con estado, casos de uso o comportamiento reutilizable.

## Page

Componente que representa una ruta y coordina el flujo completo de una pantalla.

## Component

Elemento visual reutilizable que recibe datos y callbacks.

## Adapter

Implementación que traduce la comunicación entre la aplicación y un servicio externo.

## Mapper

Función o clase que transforma información entre modelos diferentes.

## Mock

Implementación temporal utilizada para simular datos o servicios.

## Orquestador SCSS

Archivo principal de estilos de un Feature encargado de importar sus páginas y componentes.
