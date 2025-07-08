export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Left side: logo and social */}
        <div className="mb-10 md:mb-0 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            {/* Arrow up icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-up"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            <span className="tracking-widest">Yoga-Go</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 opacity-30">
            {/* Facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="hover:text-white cursor-pointer"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.406.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.796.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z" />
            </svg>
            {/* Instagram */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="hover:text-white cursor-pointer"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm4.75-3.25a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            {/* YouTube */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="hover:text-white cursor-pointer"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184a3.003 3.003 0 00-2.12-2.12C15.05.5 12 .5 12 .5s-3.05 0-5.495.564a3.003 3.003 0 00-2.12 2.12C4.5 5.627 4.5 8 4.5 8s0 2.373.565 4.816a3.003 3.003 0 002.12 2.12C8.95 15.5 12 15.5 12 15.5s3.05 0 5.495-.564a3.003 3.003 0 002.12-2.12C19.5 10.373 19.5 8 19.5 8s0-2.373-.565-4.816zM10 11.5v-5l4 2.5-4 2.5z" />
            </svg>
          </div>
        </div>

        {/* Right side: columns */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-10 gap-y-6 text-white text-sm">
          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-2">Product</h3>
            <ul className="space-y-1">
              {[
                "Yoga for Beginners",
                "Somatic Yoga",
                "Chair Yoga",
                "Wall Pilates",
                "Tai Chi",
                "Sofa Yoga",
                "Help Center",
              ].map((item) => (
                <li key={item} className="cursor-pointer hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              {[
                "Wellness Hub",
                "Our Experts",
                "About Us",
                "Careers",
                "Contact Us",
              ].map((item) => (
                <li key={item} className="cursor-pointer hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Apps */}
          <div>
            <h3 className="text-white font-semibold mb-2">Our Apps</h3>
            <ul className="space-y-1">
              {["Muscle Booster", "WalkFit"].map((item) => (
                <li key={item} className="cursor-pointer hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              {["Terms & Conditions", "Privacy Policy", "Cookies"].map(
                (item) => (
                  <li key={item} className="cursor-pointer hover:text-white">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="mt-10 text-center text-white text-xs font-bold">
        © 2025 Welltech Yoga-Go
      </div>
    </footer>
  );
}
