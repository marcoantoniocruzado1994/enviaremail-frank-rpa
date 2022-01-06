const axios = require('axios');
//f.palma@rpalatam.com.pe - F.PALMA@RPALATAM.COM.PE
//rpujalt@outlook.com

const correo = "rossmgalindo@gmail.com"
let nombre = "GALINDO HUERTA, ROSS MERY"
let subject = "Confirmación de cambio de dirección - Alicia Grupo El Comercio"

let direccion = "CALLE HONDURAS 361 URBANIZACION SANTA RITA, SANTIAGO DE SURCO"

let cuerpo = "<table border='0' width='100%' cellpadding='0' cellspacing='0' bgcolor='#ffffff'><tr><td align='center' valign='top' bgcolor='#ffffff'><table border='0' width='50%' cellpadding='0' cellspacing='0' class='container' bgcolor='#ffffff'><tr><td bgcolor='#ffffff'><table border='0' cellpadding='0' cellspacing='0' width='100%' class='columns-container' bgcolor='#ffffff'><tr><td align='center' class='force-col' valign='top' bgcolor='#ffffff' style='font-family: Calibri, sans-serif;'><div style='background-color: #000000;width:100%;height:4em;padding:0.3em 0.6em;display:flex;'><img src='https://i.ibb.co/yd0m9wQ/Cabecera.png' alt='Cabecera' border='0' style='margin-right:auto;margin-left:auto;width:9em;height:3em;margin-top:0.4em;'></div><br><br><div style='margin-left:1.3em;text-align:left;font-size:1.5em;font-weight:normal;'>"
cuerpo = cuerpo + "<div><p style='padding:0;margin:0;font-weight:lighter;'>Hola, " + nombre + "</p> <br><p style='padding:0;margin:0;'>¡Gracias por usar el canal de autoayuda!</p>"
cuerpo = cuerpo + "<p style='padding:0;margin:0;'><span style='font-weight:lighter;'>Se realizó el cambio de dirección a " + direccion + ".</span></p><br><p style='padding:0;margin:0;'>Sigue disfrutando de los beneficios del Club y mantente actualizado con las noticias de la semana.​</p><br> <div style='display:flex;'> <div><p>Alicia - Asistente Virtual<br>Grupo El Comercio.</p></div><div style='margin-left:1.5em;'><img src='https://i.ibb.co/tKc46cR/cara-alicia.png' alt='cara-alicia' border='0'></div></div></div></div><br><br>"


footer = "<div align='left' style='margin-left:1.9em;'><p align='left' style='display:inline-block;font-size:0.7em;'><a href='http://bit.ly/3nQDdpg'>https://autogestion.clubelcomercio.pe/#/</a></p><div align='rigth' style='font-size:1em;display:inline-block;margin-left:6em;'><span style='font-family: Calibri, sans-serif;font-size:1em;'>SIGUENOS EN </span><a style='margin-left:0.3em;' href='https://www.facebook.com/ClubElComercioPeru'><img src='https://i.ibb.co/1f734xN/facebook.png' alt='facebook' border='0' style='opacity:0.65;' width='20' height='20'></a><a style='margin-left:0.3em;' href='https://www.instagram.com/clubelcomercio.pe/'><img src='https://i.ibb.co/7brCYJh/instagram.png' alt='instagram' border='0' style='opacity:0.65;' width='20' height='20'></a></p></div></div></td></tr></table><!-- ### /main content ### --><table cellpadding='0' cellspacing='0' border='0' width='100%' class='columns-container' bgcolor='#ffffff'><tr><td class='force-col' valign='middle' bgcolor='#ffffff'><!-- ### legal ### --><table cellpadding='0' cellspacing='0' border='0' width='100%' class='col-2'><tr><td class='center' style='font-style: italic; padding-left: 30px; padding-right: 30px; padding-top: 20px; font-family: Arial, sans serif; color: #DCDCDC; text-align: left;'><div style='font-size: 14px; margin-top: 12px;'>El Comercio &copy;2021. Todos los derechos reservados (https://elcomercio.pe/)</div></td></tr></table> </td><td class='force-col' valign='top' bgcolor='#ffffff' align='right'><!-- ### social ### --></td></tr></table><table cellpadding='0' cellspacing='0' border='0' width='100%' class='columns-container' bgcolor='#ffffff'><tr><td style='padding-left: 30px; padding-top: 20px; padding-bottom: 20px; font-family: Arial, sans serif; color: #ffffff; text-align: left;'><a href='#' style='color: #ffffff; margin-left:5px; margin-right:5px;'></a></tr></table></td></tr></table></td></tr></table>"
cuerpo = cuerpo + footer


axios.post('https://mthhurndg7.execute-api.us-east-1.amazonaws.com/bpi/sendemail', {
  to: correo,
  text: cuerpo,
  subject: subject,
  html: true
})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });