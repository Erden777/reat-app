import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDom from 'react-dom';
import './bootstrap/css/bootstrap.min.css';

const news ={
  title: 'Zaysan News',
  date: '20/09/2020',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... To take a trivial example, which of us ever undertakes laborious physical exercise, ...',
  photo: 'testUserBot.jpg'
}

class BlockNews extends React.Component {
  render(){
    var newsAlmaty = [
      {title:"Almaty News" ,date:"20/09/2020" ,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... To take a trivial example, which of us ever undertakes laborious physical exercise, ...",
      photo:"almaty.jpg"
    },
    {title:"Nursultan News" ,date:"20/09/2020" ,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... To take a trivial example, which of us ever undertakes laborious physical exercise, ...",
      photo:"testUserBot.jpg"
    },
    {title:"Zaysan News" ,date:"20/09/2020" ,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... To take a trivial example, which of us ever undertakes laborious physical exercise, ...",
      photo:"almaty.jpg"
    },
    {title:"Semey News" ,date:"20/09/2020" ,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... To take a trivial example, which of us ever undertakes laborious physical exercise, ...",
      photo:"almaty.jpg"
    }
    ]
   
    return <div className="row">

    {newsAlmaty.map((news1) =>
    <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
            <img height="350px" width="100%" src={news1.photo}/>
              <div className="card-body">
              <h3 className="card-text">{news1.title}</h3>
              <p className="card-text">{news1.date}</p>
              <p className="card-text">{news1.text}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button typnpe="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
    )}
    </div>;
    }
}

const title=(
  <h1 className="Display-4 h1">All Zaysan News</h1>
)


class MainFrame extends React.Component{ 
  render(){
  return <div className='col-md-12 mt-3 mb-3'>  
        <BlockNews/>
      </div>;
  }
}


function App() {
  return (
    <div  >
    <div className="jumbotron jumbotron-fluid mt-4">
      <div className="container ">
       {title}
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
     
      </div>
    </div>
      <MainFrame/>
      
    </div>
  );
}

export default App;
