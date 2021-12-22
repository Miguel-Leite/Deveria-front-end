import api from '../../Api'


const Course = [];

async function componentCourse() {
  const response = await api.get('course/')
  const courses = response.data

  courses.map(course => {
    Course.push(course)
  })
}


componentCourse()
export default Course