import { Link} from 'react-router-dom'
import { useState } from 'react'    


export default function Nav(){

    const [activePage, setActivePage] = useState('home');

    const handlePageChange = (page) => {
        setActivePage(page);
      };
    

    return(
       <> 
        <div className='nav' role='navigation'>
            <ul>
                <li><Link to='/' 
                    className={activePage === 'home' ? 'active' : ''}
                    onClick={() => handlePageChange('home')} >Home</Link></li> 
                <li><Link to='/about'  
                    className={activePage === 'about' ? 'active' : ''}
                    onClick={() => handlePageChange('about')}>About</Link></li>
                <li><Link to='/gallery'
                    className={activePage === 'gallery' ? 'active' : ''}
                    onClick={() => handlePageChange('gallery')}>Gallery</Link></li>
                <li><Link to='/feature'
                    className={activePage === 'feature' ? 'active' : ''}
                    onClick={() => handlePageChange('feature')}>Feature</Link></li>
                <li><Link to='/contact'
                    className={activePage === 'contact' ? 'active' : ''}
                    onClick={() => handlePageChange('contact')}>Contact us</Link></li> 
            </ul>
        </div>
      </>
    )
}