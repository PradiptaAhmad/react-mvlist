import React from "react";

class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      judul: "",
      deskripsi: "",
      gambar: "",
      tanggal: new Date(),
    };

    this.onJudulEventHandler = this.onJudulEventHandler.bind(this);
    this.onDeskripsiEventHandler = this.onDeskripsiEventHandler.bind(this)
    this.onGambarEventHandler = this.onGambarEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onJudulEventHandler(event) {
    this.setState(() => {
      return {
        judul: event.target.value,
      };
    });
  }

  onDeskripsiEventHandler(event) {
    this.setState(() => {
      return {
        deskripsi: event.target.value,
      };
    });
  }
  onGambarEventHandler(event) {
    const file = event.target.files[0];
    const fileLocation = URL.createObjectURL(file);
    this.setState(() => {
      return {
        gambar: fileLocation,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.InputData(this.state) 
    this.setState(() => {
      return {
        judul: "",
        deskripsi: "",
        gambar: ""
      }
    })
  }
  render() {
    return (
      <div className="inputdata" onSubmit={this.onSubmitEventHandler}>
        <form className="data-input">
          <h2>Input Film</h2>
          <div className="form-input">
            <input
              type="text"
              placeholder="Judul"
              value={this.state.judul}
              onChange={this.onJudulEventHandler}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Deskripsi"
                value={this.state.deskripsi}
                onChange={this.onDeskripsiEventHandler}
            />
          </div>

          <div className="mt-2 mb-2 form-file">
            <input 
            type="file" 
            accept="image/*" 
            onChange={this.onGambarEventHandler}/>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputData;
