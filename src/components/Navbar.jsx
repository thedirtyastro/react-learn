import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState('Home'); // Default selected item is 'Home'

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Define navigation items
  const navItems = [
    { label: 'Home' },
    { label: 'Features' },
    { label: 'Pricing' },
    { label: 'Blog' }
  ];

  return (
    <nav>
      <ul className="flex space-x-12 justify-center p-16 font-medium text-white">
        {navItems.map((item, index) => (
          <li
          key={index}
          className={`cursor-pointer ${selectedItem === item.label ? 'text-gray-500' : ''}`}
          onClick={() => handleItemClick(item.label)}
        >
            {item.label}
          </li>
        ))}
        <li>
          <FontAwesomeIcon icon={faDribbble} />
        </li>
        <li>
          <FontAwesomeIcon icon={faBehance} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
