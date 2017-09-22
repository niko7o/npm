function changeAcronym(){
  var namelist = ['Never Push to Master','Neil Patricks Mansion','No Princess Mario','Nothing Prevents Misery','Node Package Manager','Naughty Push Message','Never Program Mad','Nineties Party Mix','Neverending Plethora of Modules'];
  var acronym = document.getElementById("acronym");
  // we use the array's length so that our Math.random maximum won't have
  // to be updated in the future even if we add more names
  acronym.innerHTML = namelist[Math.floor(Math.random() * namelist.length)];
  console.log("Namelist has: " + namelist.length + " elements");
}
