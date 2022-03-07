import React, { useEffect, useState } from "react";
import { Layout, Space, Card, Modal, Button, Input } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function CardVacina() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newType, setNewType] = useState("");
  const [animais, setAnimais] = useState([]);
  const [update, setUpdate] = useState(false);

 

  useEffect(() => {
    fetch("http://localhost:5000/animais", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setAnimais(data));
  }, [update]);

 const animals: any = [...animais];


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setUpdate(!update);
    setIsModalVisible(false);

    const newAnimal = {
      id: animals.length + 1,
      name: newName,
      type: newType,
      age: newAge,
      vacinas: [],
    };

    animals.push(newAnimal);
    console.log(animais.length);
    console.log(animals.length)

    let x = await fetch(
      `http://localhost:5000/animais/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          newAnimal
        ),
      }
    );
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
              {animals.map((e: any) => (
                <Card title={e.name} style={{ width: 300 }}>
                  <p>{e.type}</p>
                  <p>Idade: {e.age}</p>
                  {e.vacinas.map((e: any) => (
                    <Card title={e.vacina} style={{ marginBottom: "4px" }}>
                      <p>Data: {e.status}</p>
                      <p>Reforço: {e.reforço}</p>
                    </Card>
                  ))}
                  <br/>
                  <Button type="primary">Adicionar Vacina</Button>
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
                  <Input
                    placeholder="Nome - ex: Bob, Marley..."
                    onChange={(e: any) => setNewName(e.target.value)}
                  />
                  <br />
                  <br />
                  <Input
                    placeholder="Idade - ex: 2 anos, 7 anos..."
                    onChange={(e) => setNewAge(e.target.value)}
                  />
                  <br />
                  <br />
                  <Input
                    placeholder="Espécie - ex: cachorro, gato..."
                    onChange={(e) => setNewType(e.target.value)}
                  />
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
