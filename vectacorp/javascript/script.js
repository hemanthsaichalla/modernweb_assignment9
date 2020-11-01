$( document ).ready(function() {
    $("section h2, aside h2").
      css({
        'border': 'solid black 1px',
        'color': '#CC1C0D',
        'padding-top': '3px',
        'padding-bottom': '3px',
        'padding-left': '20px',
        'border-radius': '0px 5px 0px 5px',
        'background-color': '#DFE3E6'
      })
    $("nav ul li a").addClass('navigation')
    $(".navigation").
      css({
        'border': 'solid #929CA4 1px',
        'color': '#CC1C0D',
        'padding': '3px auto 3px 20px',
        'background-color': '#DFE3E6'
      })
    $("section p").removeClass("vprospect vconvert vretain")
    $("aside p:first-child").wrap("<q></q>")
    $("aside p:last-child").append('<br/> Chevy Dealers Association <br/>')
  });