import React from "react";
import { useState } from "react";
import "./addEdit.css";

import { Form, Input, Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

AddEditPage.propTypes = {};

function AddEditPage({ add }) {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const [newCategory, setNewCategory] = useState({
    id: "",
    name: "",
    description: "",
    primary: "",
    active: "",
  });

  const handleSelection = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCategory) return;
    add(newCategory);
    console.log(newCategory);
    setNewCategory({
      id: "",
      name: "",
      description: "",
      primary: "",
      active: "",
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label="Required Mark" name="requiredMarkValue">
        <Radio.Group>
          <Radio.Button value="optional">Category</Radio.Button>
          <Radio.Button value>Status</Radio.Button>
          <Radio.Button value={false}>Center</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item
        label="Field B"
        tooltip={{
          title: "Tooltip with customize icon",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default AddEditPage;
