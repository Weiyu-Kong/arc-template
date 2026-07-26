# Generated Website Application

This project is initialized from the `website-app` generation template.

## Stack

- Frontend: Vite + React + TypeScript
- Backend: FastAPI
- Tests: pytest

## Commands

```bash
npm --prefix frontend install
npm --prefix frontend run dev
npm --prefix frontend run build
uvicorn app.main:app --app-dir backend --reload
pytest -q
```

Generation agents should keep implementation inside the template structure:

- UI: `frontend/src`
- API routes: `backend/app/routes.py`
- Function/service logic: `backend/app`
- Local persistence: `backend/app/repository.py`
- Backend tests: `backend/tests`

