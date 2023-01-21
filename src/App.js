
import { useState } from 'react';
import './App.css';
import NewContact from './components/NewContact';



function App() {

const [contacts, setContacts] = useState([])
const [user, setUser] = useState({
name: "",
surname: "",
phone: ""
})
const [error, setError] = useState("")

const [nameErorr, setNameErorr] = useState("")
const [phoneErorr, setPhoneErorr] = useState("")
const [surnameErorr, setSurnameErorr] = useState("")

const deleteTodo = (li) => {
  setContacts(contact => contact.filter(el => el.id !== li))
}



const handleChange = (e) => {
setUser({...user, [e.target.name] : e.target.value})
}





const addContact = () => {
// if(user.name.trim() && user.phone.trim() && user.surname.trim()){

if (user.name.length <= 3) {
  setNameErorr("имя должно состоять из более чем 3 букв")
}
else if(user.phone.length <= 3){
setPhoneErorr("имя должно состоять из более чем 3 букв")
}
else if (user.surname.length <= 3) {
  setSurnameErorr("телефон должно состоять из более чем 3 сифр")
} else {

  const foundContact = contacts.some(el => {
    return el.name === user.name && el.phone === user.phone && el.surname === user.surname
  })

 if(foundContact){
  setUser({
     name: "",
     surname: "",
    phone: ""
  })

  setError("Такой контакт уже существует! Введите другие данные")
 } else {
  const newContact = {
    id: contacts.length ? contacts[contacts.length - 1].id + 1: 1,
    ...user
   }
   setUser({
    name: "",
   surname: "",
   phone: ""
  })
 
  setContacts([...contacts, newContact])
  setError("")
  setSurnameErorr("")
  setPhoneErorr("")
  setNameErorr("")
 }
}


  
// } 

}


const updateContact = (id, user) => {
setContacts(state => state.map(el => {
return el.id === id ? {...el, ...user}: el
}))

}


  return (

    <div className="App">
 <div className='container'>
<div className='app-item'>
<div className='div-1'>
  

 <div>
 <input type="text" 
         onChange={handleChange}
          name='name'
          value={user.name}
        className='input-1' placeholder='имя'/>
<span className='error-2'>{nameErorr}</span>
 </div>

  
  <div>
  <input type="text" 
         onChange={handleChange}
          name='surname'
          value={user.surname}
          required
        className='input-2' placeholder='фамилия'/>
        <span className='error-2'>{surnameErorr}</span>
  </div>
  
   <div>
       <input type="number"
            onChange={handleChange}
         name='phone'
         value={user.phone}
         required
       className='input-3' placeholder='номер телефона'/>
       <span className='error-2'>{phoneErorr}</span>
   </div>

  <button className='button-1' 
      onClick={addContact}>добавить в контакта</button>

</div>

</div>
<div>{error}</div>
<ul className='ul-1'>
{
    contacts.map(el => <NewContact updateContact={updateContact} deleteTodo={deleteTodo} el={el} key={el.id}/>)
}
</ul>
 </div>

    </div>
  );
}

export default App;
