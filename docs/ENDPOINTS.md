# DEFINICIÓN DE LOS ENDPOINTS

Todos los endpoints utilizan el prefijo:

```text
/v1
```

## 1. Users

```text
POST   /v1/users
GET    /v1/users
GET    /v1/users/{id}
PUT    /v1/users/{id}
DELETE /v1/users/{id}

PATCH  /v1/users/{id}/status
PATCH  /v1/users/reset-password
```

Estados disponibles:

```text
active
inactive
```

## 2. Auth

```text
POST /v1/auth/sign-in
POST /v1/auth/sign-out
POST /v1/auth/verify
```

## 3. Clinics

```text
POST /v1/clinics
GET  /v1/clinics
GET  /v1/clinics/{id}
GET  /v1/clinics/user/{userId}
PUT  /v1/clinics/{id}
```

## 4. Catalogs

```text
POST   /v1/catalogs
GET    /v1/catalogs
GET    /v1/catalogs/{id}
PATCH  /v1/catalogs/{id}
DELETE /v1/catalogs/{id}
```

## 5. Patients

```text
POST   /v1/patients
GET    /v1/patients
GET    /v1/patients/{id}
PUT    /v1/patients/{id}
DELETE /v1/patients/{id}
```

Patient no tiene endpoints para activar o desactivar porque no tiene un status propio.

## 6. Therapeutic Processes

```text
POST   /v1/therapeutic-processes
GET    /v1/therapeutic-processes
GET    /v1/therapeutic-processes/{id}
GET    /v1/therapeutic-processes/patient/{patientId}
PUT    /v1/therapeutic-processes/{id}
DELETE /v1/therapeutic-processes/{id}

PATCH  /v1/therapeutic-processes/{id}/status
```

Cambio de status:

```json
{
	"status": "inactive"
}
```

Estados disponibles:

```text
active
inactive
discharged
unfinished
```

## 7. Records

```text
POST   /v1/records
GET    /v1/records
GET    /v1/records/{id}
GET    /v1/records/therapeutic-process/{therapeuticProcessId}
PUT    /v1/records/{id}
DELETE /v1/records/{id}
```

Cada registro pertenece a un proceso terapéutico.

## 8. Home Works

```text
POST   /v1/home-works
GET    /v1/home-works
GET    /v1/home-works/{id}
PUT    /v1/home-works/{id}
DELETE /v1/home-works/{id}
```

Las tareas son entidades independientes y pueden seleccionarse al crear o editar un registro de sesión.
