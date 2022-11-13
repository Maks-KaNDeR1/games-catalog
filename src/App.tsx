import React, { useState } from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Сatalog } from './components/Сatalog/Сatalog';
import { items } from './server/items';
import { ItemType } from './types/types';

function App() {

  const [itemsArray, setItemsArray] = useState<ItemType[]>(items)

  return (
    <div className="App">
      <div className="app-wrapper-content">
        <Header setItemsArray={setItemsArray} />
        <Сatalog itemsArray={itemsArray} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
