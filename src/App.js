import React from "react";
import {jsPDF} from "jspdf";
const App = ()=>{
  function generatePdf(){
    var doc = new jsPDF('h1', 'pt');
      
    doc.text(20, 20, 'This is the first title.')

    doc.setFont('helvetica')
    
    doc.text(20, 60, 'This is the second title.')

    doc.setFont('times new roman')
   
    doc.text(20, 100, 'This is the thrid title.')      
    doc.save('demo.pdf')
  }
 
  return(
    <div>
        <button onClick={generatePdf}>Generate PDF</button>
      </div>
  )
}
export default App;