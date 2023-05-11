import React, { useState, useEffect } from 'react';
import "./contacts.css";

const contacts_all = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }
]

function Contact(props) {
  return (
    <div className="contacts">
        <p className="name">{props.firstName}</p>
        <p className="last-name">{props.lastName}</p>
        <p className="phone">{props.phone}</p>
        {props.gender && <img className="gender" src={props.gender === 'male' ? 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png' : 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png'} alt={props.gender} />}
    </div>
  )
}

function Contacts() {
  const [contacts, setContacts] = useState(contacts_all);
  const [search, setSearch] = useState("")
  const [genderFilters, setGenderFilters] = useState({
    male: true,
    female: true,
    unknown: true,
  })

  function handleSearchChange(event) {
    setSearch(event.target.value)

    setContacts(contacts_all.filter(el => el.lastName.includes(event.target.value)))
  }

  function handleFilterChange(event) {
    const { name, checked } = event.target;
    setGenderFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
  }

  useEffect(() => {
    setContacts(contacts_all.filter(el => {
      if (el.gender) {
        if (genderFilters[el.gender]) {
          return el.lastName.toLowerCase().includes(search.toLowerCase()) ||
                 el.firstName.toLowerCase().includes(search.toLowerCase()) ||
                 el.phone.includes(search);
        }
      } else {
        if (genderFilters.unknown) {
          return el.lastName.toLowerCase().includes(search.toLowerCase()) ||
                 el.firstName.toLowerCase().includes(search.toLowerCase()) ||
                 el.phone.includes(search);
        }
      }
      return false;
    }));
  }, [search, genderFilters]);
  

  return (
    <div className='contacts-container'>
      <div className="top-contacts">
        <input className="search" placeholder="Знайти контакт" value={search} onChange={handleSearchChange} />
        <label>
          Чоловік
          <input
            type="checkbox"
            name="male"
            checked={genderFilters.male}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Жінка
          <input
            type="checkbox"
            name="female"
            checked={genderFilters.female}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Не вказано
          <input
            type="checkbox"
            name="unknown"
            checked={genderFilters.unknown}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            gender={contact.gender}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;