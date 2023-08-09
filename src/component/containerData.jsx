import React from "react";
import Header from "./header";
import "../styles/main.css";
import Intro from "./intro";
import Body from "./body";
import InputData from "./inputData";
import { Data } from "./data/data";
import ListData from "./listData";
import EditData from "./editData";

class ContainerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: Data(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onInputDataEventHandler = this.onInputDataEventHandler.bind(this);
    this.onEditEventHandler = this.onEditEventHandler.bind(this);
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
  }

  onDeleteHandler(id) {
    const dataList = this.state.dataList.filter((data) => data.id !== id);
    this.setState({ dataList });
  }

  onEditEventHandler(id, newData) {
    const updatedDataList = this.state.dataList.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          judul: newData.judul,
          deskripsi: newData.deskripsi,
        };
      }
      return data;
    });
    this.setState({ dataList: updatedDataList });
  }

  onInputDataEventHandler({ judul, deskripsi, gambar }) {
    var today = new Date(),
      date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
    this.setState((PrevState) => {
      return {
        dataList: [
          ...PrevState.dataList,
          {
            id: +new Date(),
            judul,
            deskripsi,
            gambar,
            tanggal: date,
          },
        ],
      };
    });
  }

  onEditButtonClick(id) {
    const { data } = this.props;
    this.setState({
      isEditing: true,
      editedTitle: data.title,
      editedDesc: data.desc,
    });
  }

  render() {
    return (
      <>
        <div className="bg1">
          <Header />
          <Intro />
        </div>
        <div className="bg2">
          <InputData InputData={this.onInputDataEventHandler} />
          {this.state.dataList.length == 0 ? (
            <p className="pnotif">Tidak Ada Data</p>
          ) : (
            <ListData
              onEdit={this.onEditEventHandler}
              dataList={this.state.dataList}
              onDelete={this.onDeleteHandler}
            />
          )}
        </div>
      </>
    );
  }
}

export default ContainerData;
