"""Minimal WSGI app for Matangi."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from wsgiref.simple_server import make_server


def application(environ, start_response):
    method = environ.get("REQUEST_METHOD", "GET")
    path = environ.get("PATH_INFO", "/")

    if method != "GET":
        payload = {"error": "method_not_allowed", "allowed": ["GET"]}
        body = json.dumps(payload).encode("utf-8")
        start_response(
            "405 Method Not Allowed",
            [("Content-Type", "application/json"), ("Content-Length", str(len(body)))],
        )
        return [body]

    if path == "/":
        payload = {
            "name": "matangi",
            "status": "ok",
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        body = json.dumps(payload).encode("utf-8")
        start_response(
            "200 OK",
            [("Content-Type", "application/json"), ("Content-Length", str(len(body)))],
        )
        return [body]

    if path == "/health":
        body = b"ok"
        start_response(
            "200 OK",
            [("Content-Type", "text/plain; charset=utf-8"), ("Content-Length", str(len(body)))],
        )
        return [body]

    payload = {"error": "not_found", "path": path}
    body = json.dumps(payload).encode("utf-8")
    start_response(
        "404 Not Found",
        [("Content-Type", "application/json"), ("Content-Length", str(len(body)))],
    )
    return [body]


def run(host: str = "127.0.0.1", port: int = 8000) -> None:
    with make_server(host, port, application) as server:
        print(f"matangi listening on http://{host}:{port}")
        server.serve_forever()


if __name__ == "__main__":
    run()
