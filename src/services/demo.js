import { get, post } from '../utils/api'

export function save(activity) {
	const api = activity.id ? '/api/activity/updateByPrimaryKeySelective' : '/api/activity/insert'
  return post(api, activity)
}

export function deleteModel(params) {
	return get('/api/activity/deleteByPrimaryKey', {
		params,
	})
}