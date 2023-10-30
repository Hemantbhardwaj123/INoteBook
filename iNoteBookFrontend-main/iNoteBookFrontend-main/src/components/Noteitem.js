import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
const Noteitem = (props) => {
      const context = useContext(noteContext);
      const {deleteNote} = context;
      const { note,updateNote } = props;
      return (
            <div className = "col-md-3 my-3">               
                  <div className="card" >
                        
                              <div className="card-body">
                                    <h5 className="card-title">{note.title}</h5>
                                    <p className="card-text">{note.description}</p>
                                    <i className="fa fa-light fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                                    <i className="fa fa-regular fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>
                              </div>
                  </div>
            </div>
      )
}

export default Noteitem
