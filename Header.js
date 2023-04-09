import '../App.css';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className='flex'>
        <div className='left flex'>
          <img src='https://logos-world.net/wp-content/uploads/2021/02/New-Myntra-Logo.png' />
          <ul className='flex uppercase semibold'>
            <li>Man</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home&Living</li>
            <li>Beauty</li>
            <li>Studio <sup>new</sup></li>
          </ul>
        </div>
        <div className='right flex items-center'>
          <div className='flex searchBox'>
            <img src='https://img.myloview.com/posters/search-icon-magnifying-glass-icon-vector-magnifier-or-loupe-sign-400-171117509.jpg' />
            <div className='searchIcons'>
              <input className='searchBar' type='text' placeholder='Search for products,brands and more' />
            </div>
          </div>
          <div className='profile mg-1'>Profile</div>
          <div className='wishlist mg-1'>Wishlist</div>
          <div className='bag mg-1'>Bag</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;