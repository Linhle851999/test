import "./style.css";
const data = [
  {
    id: "1",
    dayWeek: "MON",
    day: "05",
    workout: [],
  },
  {
    id: "2",
    dayWeek: "TUE",
    day: "06",
    workout: [
      {
        id: "1",
        name: "Chest day - with arm Chest day",
        exercise: [
          {
            id: "1",
            name: "Bench Press Medium Grip",
            information: "50 lb x 5, 60 lb x 5, 70 lb",
            number: "3x",
          },
          {
            id: "2",
            name: "Exercise B",
            information: "40 lb x 10",
            number: "1x",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    dayWeek: "WEB",
    day: "07",
    workout: [
      {
        id: "1",
        name: "Leg DaY",
        exercise: [
          {
            id: "1",
            name: "Exercise C",
            information: "30 lb x 6",
            number: "1x",
          },
          {
            id: "2",
            name: "Exercise D",
            information: "40 lb x 5",
            number: "1x",
          },
          {
            id: "3",
            name: "Exercise E",
            information: "50 lb x 5",
            number: "1x",
          },
        ],
      },
      {
        id: "2",
        name: "Arm day",
        exercise: [
          {
            id: "1",
            name: "Exercise F",
            information: "60 lb x 6",
            number: "1x",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    dayWeek: "THU",
    day: "08",
    workout: [],
  },
  {
    id: "5",
    dayWeek: "FRI",
    day: "09",
    workout: [],
  },
  {
    id: "6",
    dayWeek: "SAT",
    day: "10",
    workout: [],
  },
  {
    id: "7",
    dayWeek: "SUN",
    day: "11",
    workout: [],
  },
];
function Exercise({ name, information, number }) {
  return (
    <>
      <div className="group-exercise">
        <div className="name-exercise">{name}</div>
        <div className="exercise">
          <div className="number">{number}</div>
          <div className="information">{information}</div>
        </div>
      </div>
    </>
  );
}
function Workout({ name, exercise }) {
  return (
    <div className="workout">
      <div className="flex-workout">
        <h4 className="name-workout">{name}</h4>
        <i className="fa fa-ellipsis-h"></i>
      </div>
      <div className="exercises">
        {exercise.map((item) => (
          <Exercise
            key={item.id}
            name={item.name}
            information={item.information}
            number={item.number}
          />
        ))}
      </div>
      <div className="icon-add">
        <i className="fa fa-plus"></i>
      </div>
    </div>
  );
}
function Container({ dayWeek, day, workout }) {
  let date = new Date().getDate();
  return (
    <div className="container">
      <div className="day-week">{dayWeek}</div>
      <div className="group-container">
        <div
          className="day"
          style={{ color: day == date ? "#5A57CB" : "#728096" }}
        >
          {day}
        </div>
        <div className="workouts">
          {workout.map((item) => (
            <Workout key={item.id} name={item.name} exercise={item.exercise} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Containers() {
  return (
    <section className="section">
      {data.map((item) => (
        <Container
          dayWeek={item.dayWeek}
          day={item.day}
          key={item.id}
          workout={item.workout}
        />
      ))}
    </section>
  );
}

export default Containers;
