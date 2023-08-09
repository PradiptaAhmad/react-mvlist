import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteButton from "./deleteButton";

class EditData extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi state
    this.state = {
      isEditing: false,
      editedJudul: "",
      editedDeskripsi: "",
    };
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onCancelEditButtonClick = this.onCancelEditButtonClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
  }
  // method edit
  onEditButtonClick() {
    const { data } = this.props;
    this.setState({
      isEditing: true,
      editedTitle: data.title,
      editedDesc: data.desc,
    });
  }
  // method save saat mode edit
  onSaveButtonClick() {
    const { data, onEdit } = this.props;
    const { editedTitle, editedDesc } = this.state;

    const newData = {
      judul: editedTitle,
      deskripsi: editedDesc,
    };
    onEdit(data.id, newData);
    this.setState({ isEditing: false });
  }

  // method cancel
  onCancelEditButtonClick() {
    this.setState({ isEditing: false });
  }

  // metode yang dipanggil ketika judul berubah
  onTitleChange(e) {
    this.setState({ editedTitle: e.target.value });
  }

  // metode yang dipanggil ketika deskripsi berubah
  onDescChange(e) {
    this.setState({ editedDesc: e.target.value });
  }

  render() {
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(judul);

    return (
      <Col md={3} className="MovieWrapper">
        <Card className="MovieImage">
          <Card.Img src={gambar} alt="Card image" />
          <div className="bg-dark">
            <div className="p-2 m-1 text-white">
              {editMode ? (
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              ) : (
                <Card.Title className="text-center">{judul}</Card.Title>
              )}
              <Card.Text className="text-left carddesc">{deskripsi}</Card.Text>
              <Card.Text className="text-left">Created at {tanggal}</Card.Text>
              <div className="divBtn">
                {editMode ? (
                  <>
                    <Button
                      className="p-1 m-2 btnEdit"
                      onClick={this.onSaveButtonClick}
                    >
                      Save
                    </Button>
                    <Button
                      className="p-1 m-2 btnEdit"
                      onClick={this.onCancelEditButtonClick}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="p-1 m-2 btnEdit"
                      onClick={this.onEditButtonClick}
                    >
                      Edit
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}

export default EditData
// const Body = ({ id, judul, deskripsi, gambar, tanggal, onDelete }) => {
//   const [editMode, setEditMode] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(judul);

//   const handleEditClick = () => {
//     setEditMode(true);
//   };

//   const handleCancelClick = () => {
//     setEditedTitle(judul);
//     setEditMode(false);
//   };

//   const handleSaveClick = () => {
//     // Call an appropriate function to save the edited title
//     // For example, you can define a separate function and pass the editedTitle and id as arguments
//     // onSave(editedTitle, id);
//     setEditMode(false);
//   };

//   return (
//     <Col md={3} className="MovieWrapper">
//       <Card className="MovieImage">
//         <Card.Img src={gambar} alt="Card image" />
//         <div className="bg-dark">
//           <div className="p-2 m-1 text-white">
//             {editMode ? (
//               <input
//                 type="text"
//                 value={editedTitle}
//                 onChange={(e) => setEditedTitle(e.target.value)}
//               />
//             ) : (
//               <Card.Title className="text-center">{judul}</Card.Title>
//             )}
//             <Card.Text className="text-left carddesc">{deskripsi}</Card.Text>
//             <Card.Text className="text-left">Created at {tanggal}</Card.Text>
//             <div className="divBtn">
//               {editMode ? (
//                 <>
//                   <Button className="p-1 m-2 btnEdit" onClick={handleSaveClick}>
//                     Save
//                   </Button>
//                   <Button
//                     className="p-1 m-2 btnEdit"
//                     onClick={handleCancelClick}
//                   >
//                     Cancel
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button className="p-1 m-2 btnEdit" onClick={handleEditClick}>
//                     Edit
//                   </Button>
//                   <DeleteButton id={id} onDelete={onDelete} />
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </Card>
//     </Col>
//   );
// };

// export default Body;
