import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Table } from "antd";
import { useState } from "react";

const FornExplore = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      Name: "John",
      Email: "John@gmail.com",
      Address: "John Home",
    },
    {
      id: 2,
      Name: "Alamin",
      Email: "Alamin@gmail.com",
      Address: "Alamin Home",
    },
    {
      id: 3,
      Name: "Ahmed",
      Email: "Ahmed@gmail.com",
      Address: "Ahmed Home",
    },
    {
      id: 4,
      Name: "Rabi",
      Email: "Rabi@gmail.com",
      Address: "Rabi Home",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "Name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "Email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "Address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: "12px" }}
            />
          </>
        );
      },
    },
  ];
  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 10);
    const newStudent = {
      id: randomNumber,
      Name: "Name" + randomNumber,
      Email: randomNumber + "@gmail.com",
      Address: "Address" + randomNumber,
    };
    setDataSource((prev) => {
      return [...prev, newStudent];
    });
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, You want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => {
          return prev.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEdit(true);
    setEditStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEdit(false);
    setEditStudent(null);
  };
  return (
    <div>
      <Button onClick={onAddStudent}>Add a new Student</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        open={isEdit}
        onCancel={() => {
          resetEditing();
        }}
        okText="Save"
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((student) => {
              if (student.id === editStudent.id) {
                return editStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editStudent?.Name}
          onChange={(e) => {
            setEditStudent((pre) => {
              return { ...pre, Name: e.target.value };
            });
          }}
        />
        <Input
          value={editStudent?.Email}
          onChange={(e) => {
            setEditStudent((pre) => {
              return { ...pre, Email: e.target.value };
            });
          }}
        />
        <Input
          value={editStudent?.Address}
          onChange={(e) => {
            setEditStudent((pre) => {
              return { ...pre, Address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default FornExplore;
