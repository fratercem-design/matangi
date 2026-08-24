import json
import unittest

from matangi_app import application


class AppTests(unittest.TestCase):
    def _request(self, path="/", method="GET"):
        environ = {"REQUEST_METHOD": method, "PATH_INFO": path}
        status_holder = {}
        headers_holder = {}

        def start_response(status, headers):
            status_holder["status"] = status
            headers_holder["headers"] = dict(headers)

        chunks = application(environ, start_response)
        body = b"".join(chunks)
        return status_holder["status"], headers_holder["headers"], body

    def test_root(self):
        status, headers, body = self._request("/")
        self.assertEqual(status, "200 OK")
        self.assertEqual(headers["Content-Type"], "application/json")
        payload = json.loads(body)
        self.assertEqual(payload["name"], "matangi")
        self.assertEqual(payload["status"], "ok")

    def test_health(self):
        status, headers, body = self._request("/health")
        self.assertEqual(status, "200 OK")
        self.assertEqual(headers["Content-Type"], "text/plain; charset=utf-8")
        self.assertEqual(body, b"ok")

    def test_not_found(self):
        status, _, body = self._request("/missing")
        self.assertEqual(status, "404 Not Found")
        payload = json.loads(body)
        self.assertEqual(payload["error"], "not_found")

    def test_method_not_allowed(self):
        status, _, body = self._request("/", method="POST")
        self.assertEqual(status, "405 Method Not Allowed")
        payload = json.loads(body)
        self.assertEqual(payload["error"], "method_not_allowed")


if __name__ == "__main__":
    unittest.main()
