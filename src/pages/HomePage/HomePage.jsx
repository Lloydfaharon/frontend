import React from 'react'
import Banner from '../../components/Banner/banner.jsx';
import Item from '../../components/Item/item.jsx';
import ItemData from '../../data/itemData.json';
import './HomePage.css';

import iconChat from '../../img/icon-chat.png';
import iconMoney from '../../img/icon-money.png';
import iconSecurity from '../../img/icon-security.png';

function HomePage() {
  const imageData = {
    "icon-chat.png": iconChat,
    "icon-money.png": iconMoney,
    "icon-security.png": iconSecurity
  }
  return (
    <>
     <Banner/>
      <section className="features">
        {/* Return items from json file with map */}
        {ItemData.map((data) => (
            /* Return item component */
            < Item 
              key={data.id}
              image={imageData[data.image]}
              descriptionImage={data.descriptionImage}
              title={data.title}
              description={data.description}
            />
        ))}
      </section>
    </>
  )
}

export default HomePage