import { DataType } from "../models/PhotoGallery.model";

const LIST_COMMENTS = [{
    id: 'aee77420-86c2-11ee-b9d1-0242ac120002',
    userId: '79bf80ce-cb05-468b-9362-9fd95f244e07',
    text: 'That is a cool picture',
    createDate: '11/17/2023 11:45:00'
},
{
    id: 'a97b8454-86c2-11ee-b9d1-0242ac120002',
    userId: '7319a8fa-7b60-40ed-9096-a4da0093e51a',
    text: 'I liked this picture because it is unusual.',
    createDate: '11/19/2023 11:45:00'
}]

export const addMockComments = (value: DataType) => {
return {...value, comments: LIST_COMMENTS};
}