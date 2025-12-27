import React, { useState, useEffect } from 'react'

const App = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [contacts, setContacts] = useState([]);
  const [showTime, setShowTime] = useState(false);

  const saveHandler = (e) => {
    e.preventDefault();

    setContacts([...contacts, {name, phone, time}]);
    setName('');
    setPhone('');
    setShowTime(true);
  }

  useEffect(() => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    setTime(`${h}:${m}`);
  }, []);

  return (
    <div className='p-4 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold mb-4'>Contacts List</h1>
      <form onSubmit={(e)=>{saveHandler(e)}} className='flex flex-col'>
        <input
          type="text"
          className='border-2 p-2 outline-none'
          placeholder='Enter name'
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <input
          type="number"
          className='border-2 p-2 outline-none mt-4'
          placeholder='+91 Enter number'
          value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}
        />
        {showTime && <p className='px-4 text-black text-md'>{time}</p>}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' type='submit'>
          Save
        </button>
      </form>

        {contacts.map(function(contact, idx){
          return <div key={idx} className='bg-white text-black p-4 mt-4 rounded flex items-center gap-2'>
            <h1 className='px-4 py-2 font-bold text-black text-2xl'>{contact.name}</h1>
            <p className='px-4 text-black text-md'>{contact.phone}</p>
            <p className='px-4 text-black text-md'>{contact.time}</p>
          </div>
        })}
    </div>
  )
}

export default App

