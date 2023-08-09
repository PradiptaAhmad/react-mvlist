import React from "react";
import Body from "./body";
import { Col, Container, Row } from "react-bootstrap";

const ListData = ({ dataList, onDelete, onEdit }) => {
  return (
    <div className="datamap">
      <Container>
        <Row>
          {dataList.map((data) => (
            <Body
              key={data.id}
              judul={data.judul}
              deskripsi={data.deskripsi}
              gambar={data.gambar}
              tanggal={data.tanggal}
              onDelete={onDelete}
              onEdit={onEdit}
              {...data}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListData;
