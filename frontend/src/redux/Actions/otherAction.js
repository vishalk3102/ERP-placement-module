import axios from 'axios'
import { server } from '../Store'

// BRANCH ACTION
export const getBranch = () => async dispatch => {
  try {
    dispatch({
      type: 'getBranchRequest'
    })

    const { data } = await axios.get(`${server}/branch/getbranch`)
    dispatch({
      type: 'getBranchSuccess',
      payload: data.branches
    })
  } catch (error) {
    dispatch({
      type: 'getBranchFail',
      payload: error.response.data.message
    })
  }
}

export const addBranch = name => async dispatch => {
  try {
    dispatch({
      type: 'addBranchRequest'
    })

    const { data } = await axios.post(`${server}/admin/branch/add`, { name })

    dispatch({
      type: 'addBranchSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'addBranchFail',
      payload: error.response.data.message
    })
  }
}

export const deleteBranch = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteBranchRequest'
    })

    const { data } = await axios.delete(`${server}/admin/branch/delete/${id}`)

    dispatch({
      type: 'deleteBranchSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteBranchFail',
      payload: error.response.data.message
    })
  }
}

// MARKS ACTION
export const getMarks = () => async dispatch => {
  try {
    dispatch({
      type: 'getMarksRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/register`)
    dispatch({
      type: 'getMarksSuccess',
      payload: data.mark
    })
  } catch (error) {
    dispatch({
      type: 'getMarksFail',
      payload: error.response.data.message
    })
  }
}

export const addMarks = () => async dispatch => {
  try {
    dispatch({
      type: 'addMarksRequest'
    })

    const { data } = await axios.post(`${server}/admin/auth/register`)
    dispatch({
      type: 'addMarksSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'addMarksFail',
      payload: error.response.data.message
    })
  }
}

export const deleteMarks = () => async dispatch => {
  try {
    dispatch({
      type: 'deleteMarksRequest'
    })

    const { data } = await axios.delete(`${server}/admin/auth/register`)
    dispatch({
      type: 'deleteMarksSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteMarksFail',
      payload: error.response.data.message
    })
  }
}

// MATERIALS ACTION
export const getMaterials = () => async dispatch => {
  try {
    dispatch({
      type: 'getMaterialsRequest'
    })

    const { data } = await axios.get(`${server}/material/getmaterial`)
    dispatch({
      type: 'getMaterialsSuccess',
      payload: data.material
    })
  } catch (error) {
    dispatch({
      type: 'getMaterialsFail',
      payload: error.response.data.message
    })
  }
}

export const addMaterials = () => async dispatch => {
  try {
    dispatch({
      type: 'addMaterialsRequest'
    })

    const { data } = await axios.post(`${server}/admin/auth/register`)
    dispatch({
      type: 'addMaterialsSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'addMaterialsFail',
      payload: error.response.data.message
    })
  }
}

export const updateMaterials = () => async dispatch => {
  try {
    dispatch({
      type: 'updateMaterialsRequest'
    })

    const { data } = await axios.post(`${server}/admin/auth/register`)
    dispatch({
      type: 'updateMaterialsSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'updateMaterialsFail',
      payload: error.response.data.message
    })
  }
}

export const deleteMaterials = () => async dispatch => {
  try {
    dispatch({
      type: 'deleteMaterialsRequest'
    })

    const { data } = await axios.delete(`${server}/admin/auth/register`)
    dispatch({
      type: 'deleteMaterialsSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteMaterialsFail',
      payload: error.response.data.message
    })
  }
}

// NOTICE ACTION
export const getNotice = () => async dispatch => {
  try {
    dispatch({
      type: 'getNoticeRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/register`)
    dispatch({
      type: 'getNoticeSuccess',
      payload: data.notice
    })
  } catch (error) {
    dispatch({
      type: 'getNoticeFail',
      payload: error.response.data.message
    })
  }
}

export const addNotice = () => async dispatch => {
  try {
    dispatch({
      type: 'addNoticeRequest'
    })

    const { data } = await axios.post(`${server}/admin/auth/register`)
    dispatch({
      type: 'addNoticeSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'addNoticeFail',
      payload: error.response.data.message
    })
  }
}

export const updateNotice = () => async dispatch => {
  try {
    dispatch({
      type: 'updateNoticeRequest'
    })

    const { data } = await axios.post(`${server}/admin/auth/register`)
    dispatch({
      type: 'updateNoticeSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'updateNoticeFail',
      payload: error.response.data.message
    })
  }
}

export const deleteNotice = () => async dispatch => {
  try {
    dispatch({
      type: 'deleteNoticeRequest'
    })

    const { data } = await axios.delete(`${server}/admin/auth/register`)
    dispatch({
      type: 'deleteNoticeSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteNoticeFail',
      payload: error.response.data.message
    })
  }
}

// SUBJECT ACTION
export const getSubject = () => async dispatch => {
  try {
    dispatch({
      type: 'getSubjectRequest'
    })

    const { data } = await axios.get(`${server}/admin/auth/register`)
    dispatch({
      type: 'getSubjectSuccess',
      payload: data.subjects
    })
  } catch (error) {
    dispatch({
      type: 'getSubjectFail',
      payload: error.response.data.message
    })
  }
}

export const addSubject =
  ({ name, code }) =>
  async dispatch => {
    try {
      dispatch({
        type: 'addSubjectRequest'
      })

      const { data } = await axios.post(`${server}/admin/subject/add`, {
        name,
        code
      })
      dispatch({
        type: 'addSubjectSuccess',
        payload: data.message
      })
    } catch (error) {
      dispatch({
        type: 'addSubjectFail',
        payload: error.response.data.message
      })
    }
  }

export const deleteSubject = id => async dispatch => {
  try {
    dispatch({
      type: 'deleteSubjectRequest'
    })

    const { data } = await axios.delete(`${server}/admin/subject/delete/${id}`)
    dispatch({
      type: 'deleteSubjectSuccess',
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: 'deleteSubjectFail',
      payload: error.response.data.message
    })
  }
}
