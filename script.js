//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
function hideDescRows()
    {
      var elements=document.getElementsByClassName("dropDownTextArea");
      for(var i=0;i<elements.length;i++)
      {
        var element=elements[i];
        element.style.display="none";
      }
      document.getElementById("submit").disabled="true";
      document.getElementById("submit").style.background="grey";
    }
    function deleteStudent(id)
    {
      document.getElementById("student"+id).style.display="none";
      document.getElementById("studentDesc"+id).style.display="none";
      alert("Record deleted successfully");


    }
    function editButton()
    {
      alert("Edit the details");
    }
    function showDetail(id)
    {
      var element=document.getElementById("studentDesc"+id);
      var isVisible=element.style.display;
      if(isVisible=="none")
      {
       element.style.display="table-row";
      }else
     {
      element.style.display="none";
     }
    }
    function addStudent(){
      try{
      
      var table = document.getElementById("myTable");
      var rowCount = document.querySelectorAll("table tr").length;
      var row = table.insertRow(rowCount);
    row.setAttribute("id","student"+rowCount);


      var rowCountToInsert = Math.floor(rowCount/2)+1;  

      var cell1 = row.insertCell(0);  //1
        var elementA = document.createElement("input");  
        elementA.type = "checkbox"; 
        elementA.onclick = function() {  
            selectStudent(this,rowCount);
        }        
        cell1.appendChild(elementA); 
        var elementK = document.createElement("br");
        cell1.appendChild(elementK);
        var elementL = document.createElement("br");
        cell1.appendChild(elementL);
        var elementM = document.createElement("img");
        elementM.setAttribute("src", "down.png");
        elementM.setAttribute("width","25px");
        elementM.onclick = function() 
        {
          showDetail(rowCount);
        }      
        cell1.appendChild(elementM); 

        var cell2 = row.insertCell(1);  
        var elementB = document.createElement("span");
        elementB.innerText = "Student "+(rowCountToInsert);
        cell2.appendChild(elementB);

        var cell3 = row.insertCell(2); 
        var elementC = document.createElement("span");
        elementC.innerText = "Teacher "+rowCountToInsert;
        cell3.appendChild(elementC);

        var cell4 = row.insertCell(3);  
        var elementD = document.createElement("span");
        elementD.innerText = "Approved";
        cell4.appendChild(elementD);

        var cell5 = row.insertCell(4);  
        var elementE = document.createElement("span");
        elementE.innerText = "Spring";
        cell5.appendChild(elementE);

        var cell6 = row.insertCell(5);   
        var elementF = document.createElement("span");
        elementF.innerText = "TA";
        cell6.appendChild(elementF);

        var cell7 = row.insertCell(6);    
        var elementG = document.createElement("span");
        elementG.innerText = Math.floor(Math.random() * 100001); 
        cell7.appendChild(elementG);

        var cell8 = row.insertCell(7);  
        var elementH = document.createElement("span");
        elementH.innerText = Math.floor(Math.random() * 101)+"%";
        cell8.appendChild(elementH);

        var cell9 = row.insertCell(8);
        var elementI = document.createElement("input");
        elementI.type="submit";
        elementI.setAttribute('value', 'DELETE');
        elementI.setAttribute("id", "delete"+(rowCount));
        elementI.style.display ="none";
        elementI.onclick = function() {  
            deleteStudent(rowCount);  
        }  
        cell9.appendChild(elementI);
        var cell10 = row.insertCell(9);
        var elementJ = document.createElement("input");
        elementJ.type="submit";
        elementJ.setAttribute('value', 'EDIT');
        elementJ.setAttribute("id", "edit"+(rowCount));
        elementJ.style.display ="none";
        elementJ.onclick = function() {  
            editButton(rowCount);  
        }  
        cell10.appendChild(elementJ);

        var row2 = table.insertRow(rowCount+1); 
        row2.setAttribute("class", "dropDownTextArea");
        row2.setAttribute("id","studentDesc"+rowCount);
        row2.style.display="none";
        var cellRow21 = row2.insertCell(0);  
        cellRow21.setAttribute("colspan", "10");
        var descCol = document.createElement("span");
        var data = "Advisor:<br /><br />"+
            "Award Details<br />"+
            "Summer 1-2014(TA)<br />"+
            "Budget Number: <br />"+
            "Tuition Number: <br />"+
            "Comments:<br /><br /><br />"+
            "Award Status:<br /><br /><br />";
        descCol.innerHTML = data;		
        cellRow21.appendChild(descCol);

        alert("Student added successfully!");
      }catch(err){
      alert("error adding student");
      }
    }
    function selectStudent(element,id)
    {
      var row=document.getElementById("student"+id);
      var isChecked=element.checked;
      if(isChecked)
      {
        row.style.background="yellow";
        document.getElementById("submit").disabled=false;
        document.getElementById("submit").style.background="orange";
        document.getElementById("edit"+id).style.display="inline";
        document.getElementById("delete"+id).style.display="inline";
      }else
      {
       row.style.background="white"; 
       document.getElementById("submit").disabled=true;
       document.getElementById("submit").style.background="grey";
       document.getElementById("edit"+id).style.display="none";
        document.getElementById("delete"+id).style.display="none";
      }
     
    }

    var m ;