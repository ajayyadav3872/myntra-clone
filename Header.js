import '../App.css';

function Header() {
  return (
    <div className='flex shopping-cart'>
      <div className='left'>
        <div className='column1'>MYNTRA</div>
        <div className='column2'>MEN</div>
        <div className='column3'>WOMEN</div>
        <div className='column4'>KIDS</div>
        <div className='column5'>HOME & LIVING</div>
        <div className='column6'>BEAUTY</div>
        <div className='column7'>STUDIO <sup className='top'>NEW</sup></div>
        <form className='column8'>
          <input type="text" placeholder='search for product,brands and more' />
        </form>
        <div className='column9'>Proflie</div>
        <div className='column10'>Wishlist</div>
        <div className='column11'>Bag</div>
      </div>
    </div>
  );
}

export default Header;