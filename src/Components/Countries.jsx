import React from 'react';
import Country from './Country';

const Countries = ({countries}) => {
    console.log(countries);
    return (
        <>
             <div className='grid grid-cols-4 gap-4'>
          {
         
                countries.map((country,index) =>(
                    <Country key={index} country={country}/>
                 ) )
              
            }
             </div>
        </>
    );
};

export default Countries;