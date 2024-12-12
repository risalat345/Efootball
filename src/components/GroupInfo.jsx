import React from 'react';
import {images} from "./Data"
import { NavLink } from 'react-router-dom';
function Profile() {
  const ManchesterCity = images.find(img=>img.id===1);
  const GironaFC =  images.find(img=>img.id===2);
  const AtleticoMadrid = images.find(img=>img.id===3);
  const SportingLisbon = images.find(img=>img.id===4);
  const CelticGlasgow = images.find(img=>img.id===5);
  const BayernMunich = images.find(img=>img.id===6);
  const BayerLeverkusen =  images.find(img=>img.id===7);
  const InterMilan =  images.find(img=>img.id===8);
  const Liverpool = images.find(img=>img.id===9);
  const ACMilan = images.find(img=>img.id===10);
  const Arsenal = images.find(img=>img.id===11);
  const ManchesterUnited = images.find(img=>img.id===12);
  const RealSociedad = images.find(img=>img.id===13);
  const InterMiami = images.find(img=>img.id===14);
  const Chelsea = images.find(img=>img.id===15);
  const AthleticBilbao =  images.find(img=>img.id===16);
  const AjaxAmsterdam = images.find(img=>img.id===17);
  const NewcastleUnited = images.find(img=>img.id===18);
  const WestHamUnited = images.find(img=>img.id===19);
  const AlNassr = images.find(img => img.id === 20); 
  const RealBetis = images.find(img=>img.id===21);
  const OsasunaFC = images.find(img=>img.id===22);
  const RealMadrid = images.find(img=>img.id===23);
  const FCBarcelona = images.find(img=>img.id===24);
  const Dortmund = images.find(img=>img.id===25);
  const AlHilal =  images.find(img=>img.id===26);
  const RBLeipzig = images.find(img=>img.id===27);
  const AlFateh = images.find(img=>img.id===28);
  const PSG = images.find(img=>img.id===29);
  const AlRiyadh =  images.find(img=>img.id===30);
  const AtalantaBC = images.find(img=>img.id===31);
  const UdineseCalcio = images.find(img=>img.id===32);
  return (
    <div>
      
     
     <div className="flex flex-wrap gap-14" >
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>

<NavLink to="/groupa">
      <div className=" flex w-[340px] justify-between p-5">
  
        <img src={ManchesterCity.src} alt={ManchesterCity.alt} style={{ width: '50px' }} />
        <img src={Arsenal.src} alt={Arsenal.alt} style={{ width: '45px' }} />
        <img src={UdineseCalcio.src} alt={UdineseCalcio.alt} style={{ width: '50px' }} />
        <img src={WestHamUnited.src} alt={WestHamUnited.alt} style={{ width: '45px' }} />
        </div>
        </NavLink>
      </div>
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>
      <div className=" flex justify-between p-5 w-[340px]">

        <img src={FCBarcelona.src} alt={FCBarcelona.alt} style={{ width: '50px' }} />
        <img src={Chelsea.src} alt={Chelsea.alt} style={{ width: '45px' }} />
        <img src={AjaxAmsterdam.src} alt={AjaxAmsterdam.alt} style={{ width: '50px' }} />
        <img src={AlRiyadh.src} alt={AlRiyadh.alt} style={{ width: '45px' }} />
        </div>
      </div>
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>
      <div className=" flex justify-between p-5 w-[340px]">
  
        <img src={RBLeipzig.src} alt={RBLeipzig.alt} style={{ width: '50px' }} />
        <img src={ManchesterUnited.src} alt={ManchesterUnited.alt} style={{ width: '60px' }} />
        <img src={Liverpool.src} alt={Liverpool.alt} style={{ width: '50px' }} />
        <img src={AlHilal.src} alt={AlHilal.alt} style={{ width: '50px' }} />
        </div>
      </div>
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>
      <div className=" flex justify-between p-5 w-[340px]">
  
        <img src={RealMadrid.src} alt={RealMadrid.alt} style={{ width: '50px' }} />
        <img src={RealBetis.src} alt={RealBetis.alt} style={{ width: '45px' }} />
        <img src={AthleticBilbao.src} alt={AthleticBilbao.alt} style={{ width: '50px' }} />
        <img src={GironaFC.src} alt={GironaFC.alt} style={{ width: '60px' }} />
        </div>
      </div>
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>
      <div className=" flex justify-between p-5 w-[340px]">
      <img src={CelticGlasgow.src} alt={CelticGlasgow.alt} style={{ width: '50px' }} />
        <img src={AlNassr.src} alt={AlNassr.alt} style={{ width: '50px' }} />
       
        <img src={SportingLisbon.src} alt={SportingLisbon.alt} style={{ width: '50px' }} />
        <img src={ACMilan.src} alt={ACMilan.alt} style={{ width: '45px' }} />
        </div>
      </div>
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>
      <div className=" flex justify-between p-5 w-[340px]">
  
        <img src={InterMiami.src} alt={InterMiami.alt} style={{ width: '60px' }} />
        <img src={RealSociedad.src} alt={RealSociedad.alt} style={{ width: '45px' }} />
        <img src={AtleticoMadrid.src} alt={AtleticoMadrid.alt} style={{ width: '50px' }} />
        <img src={BayerLeverkusen.src} alt={BayerLeverkusen.alt} style={{ width: '45px' }} />
        </div>
      </div>
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>
      <div className=" flex justify-between p-5 w-[340px]">
  
        <img src={InterMilan.src} alt={InterMilan.alt} style={{ width: '50px' }} />
        <img src={BayernMunich.src} alt={BayernMunich.alt} style={{ width: '50px' }} />
        <img src={Dortmund.src} alt={WestHamUnited.alt} style={{ width: '50px' }} />
        <img src={PSG.src} alt={PSG.alt} style={{ width: '50px' }} />
        </div>
      </div>
     <div className='h-[150px] w-[340px] border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300'>
        <div className='p-2 border-y-2 font-bold border-yellow-300'>Group A</div>
      <div className=" flex justify-between p-5 w-[340px]">
      <img src={OsasunaFC.src} alt={OsasunaFC.alt} style={{ width: '50px' }} />
      <img src={NewcastleUnited.src} alt={NewcastleUnited.alt} style={{ width: '45px' }} />
 
      <img src={AtalantaBC.src} alt={AtalantaBC.alt} style={{ width: '50px' }} />
        <img src={AlFateh.src} alt={AlFateh.alt} style={{ width: '60px' }} />
      
        </div>
      </div>
     </div>
    </div>
  );
}
export default Profile;