$(document).ready(function(){
  

  $.get('http://json-data.herokuapp.com/forms', function(data){
    var htmlStr = '';
    data.forEach(function(field){


      if (field.type === 'text') {
        htmlStr += `
          <input type="text" placeholder="${field.label}" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
        `;
      }else if(field.type ==='email'){
        htmlStr += `
        <input type='email' placeholder='${field.label}' id='${field.id}' />
        <i class="fa ${field.icon}"></i>
        `
      }else if(field.type ==='select'){
        
        htmlStr += `<select form='${field.id}'>
        <option selected="selected">${field.label}</option>`
        field.options.forEach(function(lang){
          htmlStr += `
          <option value="${lang.value}">${lang.label}</option>
          `
        })
        htmlStr += `</select>`
      }else if(field.type ==='textarea'){
        htmlStr+= `
        <textarea placeholder='${field.label}' id='${field.id}' />
        <i class="fa ${field.icon}"></i>
        `
      }else{
        htmlStr+= `
        <input type='tel' placeholder='${field.label}' id='${field.id}' />
        <i class="fa ${field.icon}"></i>
        `
      }


    })
    $("#content").html(htmlStr);
  });
});