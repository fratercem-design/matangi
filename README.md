# matangi

This repository now contains a minimal production-friendly Python web app using only the standard library.

## What was audited

- The original repository had no runnable application code.
- There were no tests or operational instructions.

## What's included

- `matangi_app.py`: WSGI app with:
  - `GET /` JSON status response
  - `GET /health` lightweight health check
  - Proper `404` and `405` behavior
- `tests/test_app.py`: unit tests covering all routes and method handling

## Run locally

```bash
python matangi_app.py
```

Then open `http://127.0.0.1:8000/`.

## Run tests

```bash
python -m unittest discover -s tests -p 'test_*.py' -v
```
