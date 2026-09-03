export const dynamic = "force-dynamic";

export function GET(): Response {
  return Response.json(
    {
      service: "matangi",
      status: "ok",
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
