import { Button, Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IUser } from "../../models/User";
import { mainSlice } from "../../store/reducers/MainSlice";
import { USER_ID } from "../../models/constants";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const { users } = useAppSelector((state) => state.mainReducer);
  const { addUser } = mainSlice.actions;
  const dispatch = useAppDispatch();

  const onFinish = (values: Omit<IUser, "id">) => {
    dispatch(addUser({ ...values, id: USER_ID }));
    console.log("Success:", values);
    console.log(users)
  };

  return (
    <Form
      className="mt-4"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="bg-neutral-500" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
