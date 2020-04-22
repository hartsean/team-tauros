import React from 'react';

const AssignCharacter = ({ users }) => {

  let characters = [
    'Snow White',
    'Snoopy',
    'Scooby Doo',
    'John Wayne',
    'Anne Hathaway',
    'Duke Ellington',
    'Madonna',
    'Superman',
    'Batman',
    'Robin',
    'George Washington',
    'Abraham Lincoln',
    'Thomas Edison',
    'Benjamin Franklin',
    'Brittany Spears',
    'Cinderella',
    'Sleeping Beauty',
    'Billy Joel',
    'Albert Einstein',
    'Richard Nixon',
    'Arnold Schwarzenegger',
    'Dora the Explorer',
    'Elmo',
    'Howard Stern',
    'Donald Trump',
    'Rosie O’Donnell',
    'Oprah Winfrey',
    'Helen of Troy',
    'Helen Keller',
    'Cleopatra',
    'Queen Elizabeth',
    'Demi Moore',
    'Angelina Jolie',
    'Bill Clinton',
    'Hillary Clinton',
    'George Clooney',
    'Rachael Ray',
    'Martha Stewart',
    'Magic Johnson',
    'Dennis Miller',
    'Michael Jackson',
    'Brad Pitt',
    'John Lennon',
    'Elvis',
    'Tom Sawyer',
    'Napoleon',
    'Cleopatra',
    'Joan of Arc',
    'SpongeBob',
    'Ellen DeGeneres',
    'Simon Cowell',
    'George Bush'
  ];

  const getRandomCharacter = (characters) => {
    let item = characters[Math.floor(Math.random() * characters.length)];
    return item;
  }

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked. Characters Assigned');
  }

  const character = getRandomCharacter(characters);
  return (
    <div>
      
      <button onClick={handleClick}>
        
        <h3>Assign Character</h3>
        
      </button>

      {users.map(user => {
        const character = getRandomCharacter(characters);
        user.name = `${user.name} (${character}):`;
      })}
      
      {console.log(users)}
      
    </div>
  );
}

export default AssignCharacter;