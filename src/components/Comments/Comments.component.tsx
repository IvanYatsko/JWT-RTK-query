import { useState } from "react";
import { Button, Input, Space } from "antd";
import { CommentType, DataType } from "../../models/PhotoGallery.model";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { UNKNOWN_USER } from "../../models/constants.model";
import { mainSlice } from "../../store/reducers/MainSlice.reducer";
import { v4 as uuidv4 } from "uuid";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";

interface CommentsProps {
  pictureData: DataType;
}

const Comments = ({ pictureData }: CommentsProps) => {
  const { users, currentUser } = useAppSelector((state) => state.mainReducer);
  const { addComment, deleteComment } = mainSlice.actions;
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const addNewComment = () => {
    if (!currentUser || !value) return;
    const comment: CommentType = {
      id: uuidv4(),
      userId: currentUser,
      text: value,
      createDate: moment().format(),
    };
    dispatch(addComment({ photoId: pictureData.id, comment }));
    setValue("");
  };

  const removeComment = (commentId: string) => {
    dispatch(deleteComment({ photoId: pictureData.id, commentId }));
  };

  return (
    <div className="w-full bg-white text-black px-10 py-8">
      {pictureData.comments.map((item: CommentType) => (
        <>
          <div key={item.id} className="text-start mb-4 relative">
            <div className="flex justify-between mr-10">
              <strong>
                {users.find(({ id }) => id === item.userId)?.username ||
                  UNKNOWN_USER}
              </strong>
              <i>{moment(item.createDate).calendar()}</i>
            </div>
            <p className="text-start">{item.text}</p>
            {item.userId === currentUser && (
              <Button
                icon={<DeleteOutlined />}
                size="small"
                danger
                className="absolute top-0 right-0"
                onClick={() => removeComment(item.id)}
              />
            )}
          </div>
        </>
      ))}
      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="Enter your comment"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="primary" className="bg-sky-500" onClick={addNewComment}>
          Submit
        </Button>
      </Space.Compact>
    </div>
  );
};

export default Comments;
