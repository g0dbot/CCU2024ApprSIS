import './App.css'
import { useEffect } from 'react'// imported to test demo functions
import CRUDAddDocs from './demo/CRUDAddDocs'//import add docs function
import CRUDGetDocsId from './demo/CRUDGetDocsId';
import CRUDGetDocsQuery from './demo/CRUDGetDocsQuery';
import CRUDUpdateDoc from './demo/CRUDUpdateDoc';
import CRUDDeleteDoc from './demo/CRUDDeleteDoc';
import DocListeners from './demo/DocListeners';


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
    //demoGetDocIdTest();
    
    //test get doc by query
    const demoGetDocQueryTest = async (name) => {
      const successGetDocQuery = await CRUDGetDocsQuery(name)
      console.log(successGetDocQuery)
    };
    //demoGetDocQueryTest("John Doe");


    //test update doc
    const demoUpdateDocTest = async (id) => {
      const successUpdateDoc = await CRUDUpdateDoc(id)
      console.log(successUpdateDoc)
    }
    //demoUpdateDocTest("A6f5wwdgkSfKRbOgKMxq");

    //test delete doc
    const demoDeleteDocTest = async (id) => {
      const successDeleteDoc = await CRUDDeleteDoc(id)
      console.log(successDeleteDoc)
    };
    //demoDeleteDocTest("A6f5wwdgkSfKRbOgKMxq");

    //test listener
    //const unsubscribe = DocListeners("1TUCqp4jnXoRnQHXvIYl")

    return () => {
      unsubscribe();
    };

  },[]);
  return (
    <>
      <h1>CCU Firebase Demo</h1>
    </>
  )
}

export default App
