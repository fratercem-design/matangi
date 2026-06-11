import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <p className="text-label text-gold/50 mb-6 tracking-[0.4em]">THE PATH ENDS HERE</p>
      <h1 className="font-display font-light text-ivory/90 mb-4" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}>
        404 <span className="text-shimmer italic">— Unwritten</span>
      </h1>
      <p className="font-display text-lg text-ivory/45 italic max-w-md leading-relaxed mb-10">
        This chamber of the temple does not exist. What you seek may live behind another door.
      </p>
      <Link href="/" className="btn-ritual text-xs px-8 py-3">
        <span className="text-gold mr-2">✦</span>RETURN TO THE TEMPLE<span className="text-gold ml-2">✦</span>
      </Link>
    </div>
  );
}
