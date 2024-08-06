import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox';
import useCurrencyConvertor from './customHook/currencyHook'


function App() {
  const [ammount,setAmmount] = useState(0);
  let [from, setFrom] = useState('inr')
  const [to,setTo] = useState('usd')
  const [convertedAmmount, setConvertedAmmount] = useState(0)
  const currencyInfo = useCurrencyConvertor(from)

  const options = Object.keys(currencyInfo);
  // swap 
 const convert = ()=>{
  setConvertedAmmount(ammount * currencyInfo[to])
 }
  const swap = function (){
      const prevTo = to
      setTo(from);
      setFrom(prevTo);
      setConvertedAmmount(ammount)
      setAmmount(convertedAmmount)
  }
  
  return (
    <>
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/26707838/pexels-photo-26707838/free-photo-of-a-close-up-of-a-blue-glass-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                ammount={ammount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from||'inr'}
                                onAmmountChange={(ammount) => setAmmount(ammount)}
                            />
                           
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                          {/* input box from component from here we are sending its values  onCurrencyChange={(currency) => setTo(currency)}
*/}
                            <InputBox label="To"
                             ammount={convertedAmmount}
                             currencyOptions={options}
                             onCurrencyChange={(currency) => setTo(currency)}
                             selectCurrency={to}
                             ammountDisable
                              
                              />
                        </div>
                        <button type="submit" className="w-full bg-blue-600
                         text-white px-4 py-3 rounded-lg"
                         onClick={()=>convert()}>
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
