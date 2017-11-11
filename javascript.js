function creatTable() {

    var table=document.getElementById("myTable");

    for(i=0;i<=9;i++){
        table.innerHTML+="<tr "+"id='tr"+i+"'>"+"</tr>";
        for(j=0;j<=9;j++){
            document.getElementsByTagName("tr")[i].innerHTML+="<td onclick='onClick(event)' class='trclose' "+"id='td"+i+j+"'>"+"</img>"+"</td>";


        }
    }


    bombe();
    bombCount();


}


function bombe() {
    var tedaeBomb=Number(prompt("تعداد بمب ها زا وارد کنید"));
    td=document.getElementsByTagName("td");

    for (i=0;i<=tedaeBomb-1;i++){
    var x = Math.floor((Math.random() * 99) );
    //console.log(x);
        if (!td[x].getElementsByTagName("img")[0]) {
            td[x].innerHTML += "<img id='bomb' src='img/bombsvg.svg' class='bombCloseimg'>"
        } else {
            continue;
        }
    }

}
function bombCount() {

    //var bombcount=0;
    //var bomb=document.getElementsByTagName("img");
   // var chap=tr[i].td[j-1]

    for(i=0;i<=9;i++){
        tr=document.getElementsByTagName("tr");
    for (j=0;j<=9;j++){
        td=tr[i].getElementsByTagName("td");
        // var Bala,BalaChap,BalaRast,Pain,PainChap,PainRast;
        var bombCount=0;
        if (td[j]===document.getElementById("td00")){
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}

        }else if (td[j]===document.getElementById("td09")){
            if(td[j-1]){var chap=td[j-1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j-1]){var  PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            if(chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}

        }else if (td[j]===document.getElementById("td90")){
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}


        }else if (td[j]===document.getElementById("td99")){
            if(td[j-1]){var chap=td[j-1]}
            if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
                if(chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
                if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
                if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
                if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}

        }
        else if (td[j]=== document.getElementById("td10")||td[j]=== document.getElementById("td20")||td[j]=== document.getElementById("td30")){
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}



        }
        else if (td[j]=== document.getElementById("td40")||td[j]=== document.getElementById("td50")||td[j]=== document.getElementById("td60")){
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}
        else if (td[j]=== document.getElementById("td70")||td[j]=== document.getElementById("td80")){
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}

        else if (td[j]=== document.getElementById("td19")||td[j]=== document.getElementById("td29")||td[j]=== document.getElementById("td39")){
            if(td[j-1]){var chap=td[j-1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j-1]){var  PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}



        }
        else if (td[j]=== document.getElementById("td49")||td[j]=== document.getElementById("td59")||td[j]=== document.getElementById("td69")){
            if(td[j-1]){var chap=td[j-1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j-1]){var  PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}


        else if (td[j]=== document.getElementById("td79")||td[j]=== document.getElementById("td89")){
            if(td[j-1]){var chap=td[j-1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j-1]){var  PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}

        else if (td[j]=== document.getElementById("td01")||td[j]=== document.getElementById("td02")||td[j]=== document.getElementById("td03")){
            if(td[j-1]){var chap=td[j-1]}
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j+1]){var PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}



        }
        else if (td[j]=== document.getElementById("td04")||td[j]=== document.getElementById("td05")||td[j]=== document.getElementById("td06")){
            if(td[j-1]){var chap=td[j-1]}
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j+1]){var PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}
        else if (td[j]=== document.getElementById("td07")||td[j]=== document.getElementById("td08")){
            if(td[j-1]){var chap=td[j-1]}
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            if(tr[i+1]&&td[j+1]){var PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}


        else if (td[j]=== document.getElementById("td91")||td[j]=== document.getElementById("td92")||td[j]=== document.getElementById("td93")){
            if(td[j-1]){var chap=td[j-1]}
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
            if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}

            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}



        }
        else if (td[j]=== document.getElementById("td94")||td[j]=== document.getElementById("td95")||td[j]=== document.getElementById("td96")){
            if(td[j-1]){var chap=td[j-1]}
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
            if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}
        else if (td[j]=== document.getElementById("td97")||td[j]=== document.getElementById("td98")){
            if(td[j-1]){var chap=td[j-1]}
            if(td[j+1]){var RasT=td[j+1]}
            if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
            if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
            if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
            if (chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}


        else {
        if(td[j-1]){var chap=td[j-1]}
        if(td[j+1]){var RasT=td[j+1]}
        if(tr[i-1]){var BalA=tr[i-1].getElementsByTagName("td")[j]}
        if(tr[i-1]&&td[j-1]){var BalAChap=tr[i-1].getElementsByTagName("td")[j-1]}
        if(tr[i-1]&&td[j+1]){var BalARasT=tr[i-1].getElementsByTagName("td")[j+1]}
        if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
        if(tr[i+1]&&td[j-1]){var  PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
        if(tr[i+1]&&td[j+1]){var PainRasT=tr[i+1].getElementsByTagName("td")[j+1]}



            if(chap)if(chap.getElementsByTagName("img")[0]){bombCount++}
            if (RasT)if(RasT.getElementsByTagName("img")[0]){bombCount++}
            if (BalA)if(BalA.getElementsByTagName("img")[0]){bombCount++}
            if (BalAChap)if(BalAChap.getElementsByTagName("img")[0]){bombCount++}
            if (BalARasT)if(BalARasT.getElementsByTagName("img")[0]){bombCount++}
            if (Pain)if(Pain.getElementsByTagName("img")[0]){bombCount++}
            if (PainRasT)if(PainRasT.getElementsByTagName("img")[0]){bombCount++}
            if (PainChap)if(PainChap.getElementsByTagName("img")[0]){bombCount++}
            if(bombCount!==0&&td[j].children.length===0){td[j].innerHTML+="<div>"+bombCount+"</div>"}}




}}

    empthcell();
}
function empthcell() {
    td = document.getElementsByTagName("td");
    for (i = 0; i <= 99; i++) {
        if (td[i].children.length === 0){td[i].innerHTML+="<div class='sefr'>"+0+"</div>"}

    }

}
function onClick(event) {
    var audio = new Audio('btn_clk.ogg');
    audio.play();
    var click=event.target;
    var getId=click.setAttribute("class","tropne");
    var bombopening=click.getElementsByTagName("img")[0];
    if (bombopening){bombopening.setAttribute("class","openbomb");alert("بازی رو باختی"); var audio = new Audio('level_failed.ogg');
        audio.play();}

    if (click.getElementsByTagName("div")[0]){ if(Number(click.getElementsByTagName("div")[0].innerHTML)===0){chekkardane(click)}}

}



function chekkardane(click) {
    td=document.getElementsByTagName("td");

        for(i=0;i<=99;i++){


            //console.log(tr[j].getElementsByTagName("td")[i])
            if (td[i].attributes==click.attributes){
                atrribValiu3=Number(td[i].attributes[2].value[3]);
                atrribValiu2=Number(td[i].attributes[2].value[2]);
                bala="td"+String(atrribValiu2-1)+String(atrribValiu3);
                pain="td"+String(atrribValiu2+1)+String(atrribValiu3);
                chap="td"+String(atrribValiu2)+String(atrribValiu3-1);
                rast="td"+String(atrribValiu2)+String(atrribValiu3+1);
                balarast="td"+String(atrribValiu2-1)+String(atrribValiu3+1);
                balaChap="td"+String(atrribValiu2-1)+String(atrribValiu3-1);
                painrast="td"+String(atrribValiu2+1)+String(atrribValiu3+1);
                painChap="td"+String(atrribValiu2+1)+String(atrribValiu3-1);
                td[i].getElementsByTagName("div")[0].innerHTML+=1;



                if (document.getElementById(painChap)){
                    document.getElementById(painChap).setAttribute("class","tropne");
                    // if( Number(document.getElementById(painChap).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(painChap))}

                }
                if (document.getElementById(painrast)){
                    document.getElementById(painrast).setAttribute("class","tropne");
                    // if( Number(document.getElementById(painrast).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(painrast))}

                }
                if (document.getElementById(balaChap)){
                    document.getElementById(balaChap).setAttribute("class","tropne");
                    // if( Number(document.getElementById(balaChap).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(balaChap))}

                }
                if (document.getElementById(balarast)){
                    document.getElementById(balarast).setAttribute("class","tropne");
                    // if( Number(document.getElementById(balarast).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(balarast))}

                }
                if (document.getElementById(chap)){
                    document.getElementById(chap).setAttribute("class","tropne");
                    if( Number(document.getElementById(chap).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(chap))}

                }
                if (document.getElementById(rast)){
                    document.getElementById(rast).setAttribute("class","tropne");
                    if( Number(document.getElementById(rast).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(rast))}
                }


                if (document.getElementById(bala)){
                    document.getElementById(bala).setAttribute("class","tropne");
                    if( Number(document.getElementById(bala).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(bala))
                    }

                }
                if (document.getElementById(pain)){
                    document.getElementById(pain).setAttribute("class","tropne");
                    if( Number(document.getElementById(pain).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(pain))}
                }
                chekkardane2(click);




            }

        }}
    function chekkardane2(click) {
        td=document.getElementsByTagName("td");

        for(i=0;i<=99;i++){


            //console.log(tr[j].getElementsByTagName("td")[i])
            if (td[i].attributes==click.attributes){
                atrribValiu3=Number(td[i].attributes[2].value[3]);
                atrribValiu2=Number(td[i].attributes[2].value[2]);
                bala="td"+String(atrribValiu2-1)+String(atrribValiu3);
                pain="td"+String(atrribValiu2+1)+String(atrribValiu3);
                chap="td"+String(atrribValiu2)+String(atrribValiu3-1);
                rast="td"+String(atrribValiu2)+String(atrribValiu3+1);
                balarast="td"+String(atrribValiu2-1)+String(atrribValiu3+1);
                balaChap="td"+String(atrribValiu2-1)+String(atrribValiu3-1);
                painrast="td"+String(atrribValiu2+1)+String(atrribValiu3+1);
                painChap="td"+String(atrribValiu2+1)+String(atrribValiu3-1);
                td[i].getElementsByTagName("div")[0].innerHTML+=1;



                if (document.getElementById(painChap)){
                    document.getElementById(painChap).setAttribute("class","tropne");
                    // if( Number(document.getElementById(painChap).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(painChap))}

                }
                if (document.getElementById(painrast)){
                    document.getElementById(painrast).setAttribute("class","tropne");
                    // if( Number(document.getElementById(painrast).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(painrast))}

                }
                if (document.getElementById(balaChap)){
                    document.getElementById(balaChap).setAttribute("class","tropne");
                    // if( Number(document.getElementById(balaChap).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(balaChap))}

                }
                if (document.getElementById(balarast)){
                    document.getElementById(balarast).setAttribute("class","tropne");
                    // if( Number(document.getElementById(balarast).getElementsByTagName("div")[0].innerHTML)===0){
                    //     chekkardane(document.getElementById(balarast))}

                }
                if (document.getElementById(chap)){
                    document.getElementById(chap).setAttribute("class","tropne");
                    if( Number(document.getElementById(chap).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(chap))}

                }
                if (document.getElementById(rast)){
                    document.getElementById(rast).setAttribute("class","tropne");
                    if( Number(document.getElementById(rast).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(rast))}
                }


                if (document.getElementById(bala)){
                    document.getElementById(bala).setAttribute("class","tropne");
                    if( Number(document.getElementById(bala).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(bala))
                    }

                }
                if (document.getElementById(pain)){
                    document.getElementById(pain).setAttribute("class","tropne");
                    if( Number(document.getElementById(pain).getElementsByTagName("div")[0].innerHTML)===0){
                        chekkardane(document.getElementById(pain))}
                }
                // chekkardane2(click);




            }

        }}


        // td=tr[i].getElementsByTagName("td");
            // chap=td[j-1];
            // var Rast=td[j+1];
            // if (tr[i-1]){var Bala=tr[i-1].getElementsByTagName("td")[j]}
            // if (tr[i-1]){var BalaChap=tr[i-1].getElementsByTagName("td")[j-1]}
            // if (tr[i-1]){var BalaRast=tr[i-1].getElementsByTagName("td")[j+1]}
            // if(tr[i+1]){var Pain=tr[i+1].getElementsByTagName("td")[j]}
            // if(tr[i+1]){var  PainChap=tr[i+1].getElementsByTagName("td")[j-1]}
            // if(tr[i+1]){var PainRast=tr[i+1].getElementsByTagName("td")[j+1]}
            //
            // if(chap)if(chap.innerHTML===""){chap.setAttribute("class","tropne")}
            // if (Rast)if(Rast.innerHTML===""){Rast.setAttribute("class","tropne")}
            // if (Bala)if(Bala.innerHTML===""){Bala.setAttribute("class","tropne")}
            // if (BalaChap)if(BalaChap.innerHTML===""){bombCount++}
            // if (BalaRast)if(BalaRast.innerHTML===""){bombCount++}
            // if (Pain)if(Pain.innerHTML===""){bombCount++}
            // if (PainRast)if(PainRast.innerHTML===""){bombCount++}
            // if (PainChap)if(PainChap.innerHTML===""){bombCount++}
            //





