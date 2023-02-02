function Main(props) {
  const {dogs} = props;
  const dogPerformance = dogs.map((dog) => {
    return (
      <li key={dog.name}>
        <span>{dog.name}:</span> {dogs.notes}
        <span> Grade:</span> {dogs.grade}
      </li>
    );
  });

  const getAverage = (dogs) => {
    let sum = 0;
    for (let i = 0; i < dogs.length; i ++){
      sum += Number(dogs[i].grade)
  }
  return (sum / dogs.length).toFixed(2);
 };

 const average = getAverage(dogs);
 return (
  <main>
    <h2>Class Average:{average}</h2>
    <h3>Notable performances and grades:</h3>
    <ul>{dogPerformance}</ul>
 </main>
 );
}

export default Main;
