export default function BackgroundLayer() {
  return (
    <div className="isolate overflow-hidden min-h-[700px] absolute inset-0 -z-20 bg-[#f7f7f9]">
      {/* Top-right blob */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_140%_at_100%_0%,#f6e4bc_0%,#f6e4bcaa_40%,transparent_90%)] bg-no-repeat" />

      {/* Bottom-left blob (mirrored) */}
      <div className="absolute inset-0 bg-[radial-gradient(30%_140%_at_0%_100%,#f6e4bc_0%,#f6e4bcaa_40%,transparent_90%)] bg-no-repeat" />
    </div>
  );
}
