import React, { useEffect, useState } from "react";
import { Layout, Space, Card, Modal, Button, Input } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function CardVacina() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState("");
    const [newType, setNewType] = useState("");

  
    const animals = [
    { id: 0, name: "Tom", type: "Gato", age: "12 anos" },
    { id: 1, name: "Freddy", type: "Cachorro", age: "2 anos" },
  ];

  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    
    const newAnimal ={
        id: animals.length + 1,
        name: newName, 
        type: newType,
        age: newAge
    }

    animals.push(newAnimal);

    console.log(animals)

  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewName("");
  };
 

  

  return (
    <div>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Space direction="horizontal">
              {animals.map((e) => (
                <Card title={e.name} style={{ width: 300 }}>
                  <p>{e.type}</p>
                  <p>Idade: {e.age}</p>
                </Card>
              ))}
              <Card title="Novo Animal" style={{ width: 300 }}>
                <Button type="primary" onClick={showModal}>
                  Cadastrar
                </Button>
                <Modal
                  title="Cadastrar Novo Animal"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Input placeholder="Nome - ex: Bob, Marley..." onChange={(e:any) => setNewName(e.target.value)} />
                  <br />
                  <br />
                  <Input placeholder="Idade - ex: 2 anos, 7 anos..." onChange={(e) => setNewAge(e.target.value)} />
                  <br />
                  <br />
                  <Input placeholder="Espécie - ex: cachorro, gato..." onChange={(e) => setNewType(e.target.value)}  />
                </Modal>
              </Card>
            </Space>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default CardVacina;
