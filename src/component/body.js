import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import DeleteButton from "./deleteButton";
import EditButton from "./editButton";

const Body = ({ id, judul, deskripsi, gambar, tanggal, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedJudul, setEditedJudul] = useState(judul);
  const [editedDeskripsi, setEditedDeskripsi] = useState(deskripsi);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditedJudul(judul);
    setEditedDeskripsi(deskripsi);
    setEditMode(false);
  };

  const handleSaveClick = () => {
    const newData = {
      judul: editedJudul,
      deskripsi: editedDeskripsi,
    };
    onEdit(id, newData);
    setEditMode(false);
  };

  return (
    <Col md={3} className="MovieWrapper">
      <Card className="MovieImage">
        <Card.Img src={gambar} alt="Card image" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
            {editMode ? (
              <>
                <input
                  type="text"
                  value={editedJudul}
                  onChange={(e) => setEditedJudul(e.target.value)}
                />
                <textarea
                  value={editedDeskripsi}
                  onChange={(e) => setEditedDeskripsi(e.target.value)}
                />
              </>
            ) : (
              <>
                <Card.Title className="text-center">{judul}</Card.Title>
                <Card.Text className="text-left carddesc">
                  {deskripsi}
                </Card.Text>
              </>
            )}
            <Card.Text className="text-left">Created at {tanggal}</Card.Text>
            <div className="divBtn">
              {editMode ? (
                <>
                  <Button className="p-1 m-2 btnEdit" onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button
                    className="p-1 m-2 btnEdit"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <EditButton id={id} onEdit={handleEditClick} />
                  <DeleteButton id={id} onDelete={onDelete} />
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Body;
