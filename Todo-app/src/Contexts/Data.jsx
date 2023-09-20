const date = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

let AllNotes = [
  {
    id: 0,
    title: "First Task",
    task: "I will be rich sumeday, just sit and watch me",
    dateCreated: date,
    dateEdited: date,
    pinned: true,
  },
  {
    id: 1,
    title: "Second Task",
    task: "I will be rich sumeday, just sit and watch me",
    dateCreated: date,
    dateEdited: date,
    pinned: false,
  },
  {
    id: 2,
    title: "Third Task",
    task: "I will be rich sumeday, just sit and watch me",
    dateCreated: date,
    dateEdited: date,
    pinned: true,
  },
  {
    id: 3,
    title: "Fourth Task",
    task: "I will be rich sumeday, just sit and watch me",
    dateCreated: date,
    dateEdited: date,
    pinned: false,
  },
  {
    id: 4,
    title: "Fifth Task",
    task: "I will be rich sumeday, just sit and watch me",
    dateCreated: date,
    dateEdited: date,
    pinned: false,
  },
  {
    id: 5,
    title: "Sixth Task",
    task: "I will be rich sumeday, just sit and watch me",
    dateCreated: date,
    dateEdited: date,
    pinned: false,
  },
];

export default AllNotes;
