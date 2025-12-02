import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-white">Adresa:</strong><br />
                Nádražní 1317/5<br />
                Brandýs nad Labem, 250 01
              </p>
              <p>
                <strong className="text-white">Telefon:</strong><br />
                <a href="tel:+420326396790" className="hover:text-brand-red transition">
                  +420 326 396 790
                </a>
              </p>
              <p>
                <strong className="text-white">Mobil:</strong><br />
                <a href="tel:+420604415479" className="hover:text-brand-red transition">
                  +420 604 415 479
                </a>
              </p>
              <p>
                <strong className="text-white">Fax:</strong><br />
                +420 326 312 684
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:kardiologie.brandys@seznam.cz" className="hover:text-brand-red transition">
                  kardiologie.brandys@seznam.cz
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Ordinační hodiny</h3>
            <div className="space-y-1 text-sm">
              <p>
                <strong className="text-white">Pondělí:</strong> 7:00–17:00<br />
                <span className="text-xs text-gray-400">(arytmologie 17:00–19:30)</span>
              </p>
              <p><strong className="text-white">Úterý:</strong> 7:00–16:00</p>
              <p><strong className="text-white">Středa:</strong> 8:00–16:00</p>
              <p>
                <strong className="text-white">Čtvrtek:</strong> 8:00–15:00<br />
                <span className="text-xs text-gray-400">(sportovci od 15:30 na objednání)</span>
              </p>
              <p><strong className="text-white">Pátek:</strong> 7:30–15:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Rychlé odkazy</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-brand-red transition">
                Domů
              </Link>
              <Link href="/o-nas" className="block hover:text-brand-red transition">
                O nás
              </Link>
              <Link href="/tym" className="block hover:text-brand-red transition">
                Náš tým
              </Link>
              <Link href="/sluzby" className="block hover:text-brand-red transition">
                Služby
              </Link>
              <Link href="/cenik" className="block hover:text-brand-red transition">
                Ceník
              </Link>
              <Link href="/kontakt" className="block hover:text-brand-red transition">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="mb-2">
                <strong className="text-white">MEDICUS SERVICES s.r.o.</strong>
              </p>
              <p className="text-xs">
                IČO: 47547898<br />
                Zapsáno v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 20327
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xs">
                © {new Date().getFullYear()} Kardiologie Brandýs nad Labem<br />
                Všechna práva vyhrazena
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
