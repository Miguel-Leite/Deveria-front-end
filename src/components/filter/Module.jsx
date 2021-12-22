import api from '../../Api'

const Module = [];

async function componentModule() {
  const response = await api.get('module/')
  const modules = response.data

  modules.map(module => {
    Module.push(module)
  })
}


componentModule()
export default Module