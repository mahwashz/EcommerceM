import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
          <a className="hover:text-cyan-500 text-amber-500" href="a">Home</a>
          <a className="hover:text-cyan-500 text-amber-500" href="a">About</a>
          <a className="hover:text-cyan-500 text-amber-500" href="a">Delivery</a>
          <a className="hover:text-cyan-500 text-amber-500" href="a">Contact</a>
        </nav>
        <div className="flex justify-center space-x-5">
          <a href="https://facebook.com" target="_blank" rel="nofollow noopener">
            <img src="fb.png" alt="Facebook" className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">
            <img src="lin.webp" alt="LinkedIn" className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="nofollow noopener">
            <img src="insta.webp" alt="Instagram" className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
            <img src="tt.png" alt="Twitter" className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
        <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8">
          @2024 Mahwash Zehra. All rights reserved
        </p>
      </footer>
    </div>
  );
}