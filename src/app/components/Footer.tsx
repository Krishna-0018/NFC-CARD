import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
        <div>
          <h4 className="text-base font-semibold mb-2 text-primary">NFC Card Maker</h4>
          <p>Your smart identity solution. Customize NFC cards, tags, and more.</p>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2 text-primary">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/collections" className="hover:underline">Collections</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2 text-primary">Policies</h4>
          <ul className="space-y-1">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/return-policy" className="hover:underline">Return & Refund</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-2 text-primary">Connect with Us</h4>
          <ul className="space-y-1">
            <li><a href="https://instagram.com/yourpage" target="_blank" className="hover:underline">Instagram</a></li>
            <li><a href="https://facebook.com/yourpage" target="_blank" className="hover:underline">Facebook</a></li>
            <li><a href="https://wa.me/yourwhatsappnumber" target="_blank" className="hover:underline">WhatsApp</a></li>
            <li><a href="mailto:support@nfc-card-maker.com" className="hover:underline">support@nfc-card-maker.com</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t text-muted-foreground">
        &copy; {new Date().getFullYear()} NFC Card Maker. All rights reserved.
      </div>
    </footer>
  )
}
