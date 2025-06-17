import Link from "next/link";
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Branding */}
        <div>
          <h3 className='text-xl font-semibold mb-2'>Your Brand</h3>
          <p className='text-sm text-gray-400'>
            Creating web experiences with modern technologies.
            <br />
            Beautiful, functional, and user-friendly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='font-semibold mb-2'>Quick Links</h4>
          <ul className='text-sm space-y-1 text-gray-300'>
          <Link href="/">Home page</Link>
          <Link href="/about">About page</Link>
          <Link href="/contact">Contact page</Link>
          <Link href="/settings">Settings</Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className='font-semibold mb-2'>Contact</h4>
          <p className='text-sm text-gray-300'>
            123 Main Street<br />
            City, State 12345<br />
            phone: (555) 123-4567<br />
            email: hello@yourbrand.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400 text-center'>
        <span>Your Brand. All rights reserved.</span>
        <div className='mt-2 space-x-4'>
          <a href="#" className='hover:underline'>Privacy Policy</a>
          <a href="#" className='hover:underline'>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
