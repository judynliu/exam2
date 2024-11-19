import Link from 'next/link'
export default function NavBar(){
  return(
<>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href='/'>Homepage</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/faq">FAQs</Link></li>
        <li><a href="https://eminenceorganics.com/us/contact-us" target='_blank'>Contact Us</a></li>
      </ul>
    </div>
  </div>
<div className="navbar-center bg-primary text-primary-content">
  <p className="font-bold text-3xl">Js Nature and Organic Skincare Store</p>
</div>

<div className="navbar-end">
  
<div className="navbar-end">
            <Link href='/login' className="btn btn-outline btn-primary">Login</Link>
          </div>
  </div>
</div>

</>


  )
}