const axios = require('axios');

const baseUrl = 'http://task.mng';

const logger = (name) => (data) => {
    console.log(name);
    console.log(data);
    return data;
}

const formatterOne = ({id, name, description}) => {
    return {id, name, description, isEdited: false}
}

const formatterList = (data) => {
    return data.map(formatterOne);
}

const get = (handler) => {
    axios.get(baseUrl + '/tasks')
        .then(resp => resp.data)
        .then(formatterList)
        .then(handler);
}

const create = (data, handler) => {
    axios.post(baseUrl + '/tasks', {
        ...data
    })
        .then(resp => resp.data)
        .then(formatterOne)
        .then(handler);
}

const update = (data, handler) => {
    axios.put(baseUrl + `/tasks/${data.id}`, {
        ...data
    })
        .then(resp => resp.data)
        .then(formatterOne)
        .then(handler);
}

const destroy = (id, handler) => {
    axios.delete(baseUrl + `/tasks/${id}`)
        .then(logger('get response'))
        .then(handler())
    ;
}

export default {
    get,
    create,
    update,
    destroy
}
