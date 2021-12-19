import api from '../../Api'


const Course = [
  {
    id: 1,
    name: "React",
    module: 3,
  },
  {
    id: 2,
    name: "python",
    module: 2,
  },
  {
    id: 3,
    name: "PHP",
    module: 1,
  },
  {
    id: 4,
    name: "React Iniciante",
    module: 3,
  },
  {
    id: 5,
    name: "PHP Iniciante",
    module: 1,
  },
  {
    id: 7,
    name: "PHP Avançado",
    module: 1,
  },
  {
    id: 6,
    name: "Python",
    module: 2,
  },
];

async function componentCourse() {
  const response = await api.get('course/')
  const courses = response.data

  courses.map(course => {
    Course.push(course)
  })
}


componentCourse()
export default Course