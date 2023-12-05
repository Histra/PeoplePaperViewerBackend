import service from './service.js'

export function getPost(url, id) {
  return service({
    url: url,
    method: 'get',
    params: {
      id: id
    }
  })
}
