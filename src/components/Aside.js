function Aside({dogs}) {
  console.log(dogs);
  // const dogNames = dogs.map((dog, i) => {
    // return <li key={i}>{dog.name}</li>;
  // })
  // const dogNames = [];
  // for (let i = 0; i < dogs.length; i++) {
  // dogNames.push(<li key={i}>{dog.name}</li>);
  //}
  const dogNames = dogs.map((dog, i) => 
  dog.present ? <li key={i}>{dog.name}</li> : null
  );
  console.log(dogNames);
  return (
    <aside>
      <h3>Roster:</h3>
      <ol>{dogNames}</ol>
    </aside>
  );
}

export default Aside;
