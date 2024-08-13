import './App.css'
import { useEffect } from 'react'// imported to test demo functions
import CRUDAddDocs from './demo/CRUDAddDocs'//import add docs function
import CRUDGetDocsId from './demo/CRUDGetDocsId';


function App() {

  useEffect(() => {
    //test add docs
    const demoAddDocTest = async () => {
      const successAddDoc =  await CRUDAddDocs();
      if(successAddDoc){console.log("Doc Added successfully")}
      else{console.error("Doc not added")}
    };
    //demoAddDocTest();

    //test get doc by id
    const demoGetDocIdTest = async () => {
      const successGetDocID =  await CRUDGetDocsId("NEHPZxlUAtX5mLaohzBI");
      console.log(successGetDocID)
    };
    demoGetDocIdTest();    

  },[]);
  return (
    <>
      <h1>CCU Firebase Demo</h1>
    </>
  )
}

export default App
