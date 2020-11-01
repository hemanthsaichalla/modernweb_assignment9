$( document ).ready(function() {
    $('#clickButton').click(function(){
      window.alert("Click event button is clicked")
    })
    $('#bindButton').bind('click', function(){
      window.alert("Bind event button is clicked")
    })
    $('#onButton').on('click', function(){
      window.alert("on event button is clicked")
    })
    $('.buttonPair').on('click', function(){
      window.alert("Button pair is clicked")
    })
    $('.buttonPair').on('click', function(){
      window.alert("Button pair is clicked")
    })
    $('#myDiv').css({'width':'400px','height':'400px'})
    $('#myDiv').on({
      'click' : function(){
                  window.alert("Div is clicked")
                  $("#myDivEventLabel").text("Div is clicked")
                },
      'mouseenter': function() {
                  window.alert("Mouse entered into div")
                  $("#myDivEventLabel").text("Mouse is entered into the div")
                },
      'mouseleave': function() {
                  window.alert("Mouse is left the div")
                  $("#myDivEventLabel").text("Mouse is left from the div")
                }
    })
    $('a').click(function(event) {
      event.preventDefault();
      $(this).css('color', '#FF0000')
      window.alert($(this).attr('id'))
    })
    $(window).resize(function(){
      $('#browserDimensions').text(`Window dimensions: ${$(window).width()}x${$(window).height()}`)
    })
    $('input[type=text]').on({
      'focusin': function(){
                    $(this).css('background-color','#DFE3E6')
      },
      'focusout': function(){
                    $(this).css('background-color','#FFFFFF')
      }
    })
    $('form').on('submit', function(event){
      $(this).children().each(function(index, textField){
        var areAllFieldsValid = true;
        if(textField.type && textField.type === 'text') { //Filter text fields in the children
          var borderColor = '#00FF00 solid 1px'; //Default bg as green
          if(!textField.value.length) { //If any text field is empty, set its border to red and set valid flag to false
            borderColor = '#FF0000 solid 1px'
            areAllFieldsValid = areAllFieldsValid && false;
          }
          $('#' + textField.id).css('border',borderColor) //Set border of tag according to above decision
          if(!areAllFieldsValid) {  //Prevent form submission if any of the text fields are empty
            event.preventDefault();
          }
        }
      })
    })
  });
