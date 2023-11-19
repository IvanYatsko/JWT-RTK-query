import { Button, Form, Input, Alert } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { IUser } from "../../models/User.model";
import { mainSlice } from "../../store/reducers/MainSlice.reducer";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/login.service";
import { LOGIN_ERROR } from "../../models/constants.model";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const { users, error } = useAppSelector((state) => state.mainReducer);
  const { login, loginError } = mainSlice.actions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: Omit<IUser, "id">) => {
    const response = auth(users, values);
    if (response) {
      dispatch(login(response.data));
      localStorage.setItem('jwt-token', response.token);
      navigate("/gallery");
    } else {
      dispatch(loginError(LOGIN_ERROR));
    }
  };

  const onValuesChange = () => {
    dispatch(loginError(""));
  };

  return (
    <Form
      className="mt-4"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, min: 3, message: "Enter the correct username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, min: 3, message: "Enter the correct password!" }]}
      >
        <Input.Password />
      </Form.Item>
      {error && <Alert message={error} type="error" className="mb-3" />}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="bg-neutral-500" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
