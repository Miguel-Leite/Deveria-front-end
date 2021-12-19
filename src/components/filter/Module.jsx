import api from '../../Api'

const Module = [
  {
    id: 1,
    name: "PHP",
  },
  {
    id: 2,
    name: "Python",
  },
  {
    id: 3,
    name: "Javascript",
  },
];

async function componentModule() {
  const response = await api.get('module/')
  const modules = response.data

  modules.map(module => {
    Module.push(module)
  })
}


componentModule()
export default Module