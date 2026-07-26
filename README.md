# Generation Templates

Reusable templates for Clone Agent application generation.

This repository stores copyable project templates. A generation runner can clone
or pull this repository, select one template by `template.yaml`, and copy its
`files/` directory into the target project before agents start implementing
requirements.

## Templates

| ID | Type | Stack |
|---|---|---|
| `website-app` | Website application | Vite + React + TypeScript frontend, FastAPI backend |

## Copy Usage

```powershell
Copy-Item -Recurse -Force .\templates\website-app\files\* D:\target\generated_app\
```

After copying, generation agents should implement inside:

- `frontend/src` for UI.
- `backend/app` for API, function/service logic, and local persistence.
- `backend/tests` for backend tests.

