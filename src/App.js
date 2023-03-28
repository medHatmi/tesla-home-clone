import './App.css';
import Header from './components/Header.jsx';
import Item from './components/Item.jsx'


import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';




function App () {
 
  return (
    <div className="App">
      {/* header */}
    <Header />

    <div className="app-itemsContainer">
      <Item 
        title="Lowest Cost Solar Panels In America"
        desc="Money-Back guarantee"
        descLink=""
        backgroungImg={SolarPanels}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        first
      />

      <Item 
        title='Model S'
        desc='$69,420'
        descLink=''
        backgroungImg={ModelS}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'

      />   
      
      <Item 
      title='Model 3'
      desc='$62,764'

      descLink=''
      backgroungImg={Model3}
      leftBtnTxt='CUSTOM ORDER'
      leftBtnLink=''
      rightBtnTxt='LEARN MORE'
      rightBtnLink=''
      twoButtons='true'

    />   
    
    <Item 
    title='Model X'
    desc='$34,834'

    descLink=''
    backgroungImg={ModelX}
    leftBtnTxt='CUSTOM ORDER'
    leftBtnLink=''
    rightBtnTxt='LEARN MORE'
    rightBtnLink=''
    twoButtons='true'

  />   
  
  <Item 
  title='Model Y'
  desc='$79,387'

  descLink=''
  backgroungImg={ModelY}
  leftBtnTxt='CUSTOM ORDER'
  leftBtnLink=''
  rightBtnTxt='LEARN MORE'
  rightBtnLink=''
  twoButtons='true'

  />


<Item 
  title='Solar Roof'
  desc='$97,545'

  descLink=''
  backgroungImg={SolarRoof}
  leftBtnTxt='CUSTOM ORDER'
  leftBtnLink=''
  rightBtnTxt='LEARN MORE'
  rightBtnLink=''
  twoButtons='true'

  />

<Item 
  title='Accessories'
  desc='$23,530'

  descLink=''
  backgroungImg={Accessories}
  leftBtnTxt='CUSTOM ORDER'
  leftBtnLink=''
  rightBtnTxt='LEARN MORE'
  rightBtnLink=''
  twoButtons='true'

  />


    </div>
  

    </div>
  );
}


export default App;
