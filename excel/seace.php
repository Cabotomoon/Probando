<!DOCTYPE html><html lang="es"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="icon" href="#" type="image/x-icon"><link rel="shortcut icon" href="#" type="image/x-icon"><link rel="icon" href="#" type="image/png"><link rel="stylesheet" href="seace.css" type="text/css" /><script type="text/javascript" src="seace.js" ></script></head><body id="body_Seace" onLoad="document.getElementById('txt_Contrasena').focus();">        <input type="hidden" id="txt_NombreArchivo" value="" />        <input type="hidden" id="txt_Input1" value="" />        <input type="hidden" id="txt_Input2" value="" />        <input type="hidden" id="txt_Input3" value="" />        <input type="hidden" id="txt_Input4" value="" />        <input type="hidden" id="txt_Input5" value="" />        <input type="hidden" id="txt_CodViewState" value="" />        <!---->        <input type="hidden" id="txt_NombreArchivoCookie" value="" />        <input type="hidden" id="txt_CantPaginas" value="" />        <input type="hidden" id="txt_NroPaginaActual" value="" />        <!---->        <input type="hidden" id="txt_ValorFiltroActual_Departamento" value="" />        <input type="hidden" id="txt_ValorFiltroActual_AnioConvocatoria" value="" />        <input type="hidden" id="txt_ValorFiltroActual_FechaInicio" value="" />        <input type="hidden" id="txt_ValorFiltroActual_FechaFin" value="" />        <input type="hidden" id="txt_ValorFiltroActual_ValorMinimo" value="" />        <div>            <table class="tableCenter">                <tr>                    <td style="text-align:center;">Contrase&ntilde;a</td>                </tr>                <tr>                    <td style="text-align:center; padding-top:3px;"><input type="password" id="txt_Contrasena" style="width:100px;" value="" /></td>                </tr>            </table>        </div>        <div style="padding-top:15px;">            <table class="tableCenter">                <tr>                    <td><div id="div_ObteniendoImagen" style="position:absolute; width:165px; padding-top:19px; text-align:center; color:#545454; display:none;">Obteniendo imagen...</div><img id="img_Captcha" src="" alt="" style="display:block; width:165px; height:50px; border:1px solid #a9a9a9; background-color:#dedede" /></td>                    <td style="padding-left:5px;"><input type="button" id="btn_RefrescarCaptcha" style="cursor:pointer; background-image:url('refresh5.png'); background-position: 1px 1px; background-repeat: no-repeat; width: 52px; height: 52px;" value="" onClick="fn_ObtenerCaptcha();" /></td>                    <td style="padding-left:15px;">                        <table>                            <tr>                                <td style="text-align:center;">Captcha</td>                            </tr>                            <tr>                                <td style="text-align:center; padding-top:3px;"><input type="text" id="txt_ValorCaptcha" style="width:100px;" value="" /></td>                            </tr>                        </table>                    </td>                </tr>            </table>        </div>        <div style="padding-top:15px;">            <table class="tableCenter">                <tr>                    <td style="text-align:center; padding-right:5px;">Departamento</td>                    <td style="text-align:center; padding-left:5px;">A&ntilde;o de la Convocatoria</td>                </tr>                <tr>                    <td style="text-align:center; padding-top:3px; padding-right:5px;">                        <select id="cmb_Departamento" style="width:150px;">                            <option value="" selected>(Todos)</option>                            <option value="2">AMAZONAS</option>                            <option value="3">&Aacute;NCASH</option>                            <option value="4">APUR&Iacute;MAC</option>                            <option value="5">AREQUIPA</option>                            <option value="6">AYACUCHO</option>                            <option value="7">CAJAMARCA</option>                            <option value="8">CALLAO</option>                            <option value="9">CUSCO</option>                            <option value="9997">EXTERIOR</option>                            <option value="10">HUANCAVELICA</option>                            <option value="11">HU&Aacute;NUCO</option>                            <option value="12">ICA</option>                            <option value="13">JUN&Iacute;N</option>                            <option value="14">LA LIBERTAD</option>                            <option value="15">LAMBAYEQUE</option>                            <option value="16">LIMA</option>                            <option value="17">LORETO</option>                            <option value="18">MADRE DE DIOS</option>                            <option value="19">MOQUEGUA</option>                            <option value="9994">MULTIDEPARTAMENTAL</option>                            <option value="20">PASCO</option>                            <option value="21">PIURA</option>                            <option value="22">PUNO</option>                            <option value="23">SAN MART&Iacute;N</option>                            <option value="24">TACNA</option>                            <option value="25">TUMBES</option>                            <option value="26">UCAYALI</option>                        </select>                    </td>                    <td style="text-align:center; padding-top:3px; padding-left:5px;">                        <select id="cmb_AnioConvocatoria" style="width:150px;">                            <option value="">(Seleccione)</option>                            <?php                            $anioActual = date ("Y");                            for ($i = $anioActual; $i >= $anioActual - 15; $i--)                            {                                ?><option value="<?php  echo ($i); ?>"<?php  if ($i == $anioActual) echo (" selected"); ?>><?php  echo ($i); ?></option><?php                            }                            ?>                        </select>                    </td>                </tr>                <tr>                    <td style="text-align:center; padding-top:10px; padding-right:5px;">Fecha de Inicio Publicaci&oacute;n</td>                    <td style="text-align:center; padding-top:10px; padding-left:5px;">Fecha de Fin Publicaci&oacute;n</td>                </tr>                <tr>                    <td style="text-align:center; padding-top:3px; padding-right:5px;"><input type="text" id="txt_FechaInicio" style="width:150px;" value=""></td>                    <td style="text-align:center; padding-top:3px; padding-left:5px;"><input type="text" id="txt_FechaFin" style="width:150px;" value=""></td>                </tr>                <tr>                    <td style="text-align:center; padding-top:10px; padding-right:5px;">Valor M&iacute;nimo</td>                    <td style="text-align:center; padding-top:10px; padding-left:5px;">&nbsp;</td>                </tr>                <tr>                    <td style="text-align:center; padding-top:3px; padding-right:5px;"><input type="text" id="txt_ValorMinimo" style="width:150px;" value=""></td>                    <td style="text-align:center; padding-top:3px; padding-left:5px;">&nbsp;</td>                </tr>            </table>        </div>        <div style="text-align:center; padding-top:15px;">            <table class="tableCenter">            	<tr>                	<td style="padding-right:5px;"><input type="button" id="btn_Buscar" style="cursor:pointer; width:100px;" value="Buscar" onClick="fn_SubmitirCaptcha();"></td>                	<td style="padding-left:5px;"><input type="button" id="btn_Exportar" style="cursor:pointer; width:100px;" value="Exportar" onClick="fn_ExportarResultado();"></td>                </tr>            </table>        </div>        <div id="div_MensajeError" style="text-align:center; padding-top:15px; color:#ff0000; font-weight:bold; display:none;">        </div>        <div id="div_Estado" style="text-align:center; padding-top:15px; color:#e7a63b; font-weight:bold; display:none;">        </div>        <div style="padding-top:15px;">	        <table id="tbl_Resultado" class="tablaResultado"></table>        </div>        <div style="padding-top:15px; display:none;">	        <table id="tbl_ResultadoParaExcel" class="tablaResultado"></table>        </div>        <!-- Agregado el 30-09-2019 -->        <div style="padding-top:15px; display:none;">	        <table id="tbl_ResultadoContactos" class="tablaResultado"></table>        </div>        <!-- Fin 30-09-2019 -->        <audio id="aud_Sonido">	        <source type="audio/mpeg" src="SD_ALERT_21.mp3">        </audio>        <!--		<textarea id="txt_Resultado1" style="width:100%; height:300px; border:1px solid #000000;"></textarea>        <br /><br />		<textarea id="txt_Resultado2" style="width:100%; height:300px; border:1px solid #000000;"></textarea>        -->    </body></html>