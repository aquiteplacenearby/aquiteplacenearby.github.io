window.onload = function() {
    rl_grid_example(1)
}

$( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
        range: "max",
        min: 1,
        max: 12,
        create: function() {
            handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            handle.text( ui.value );
            rl_grid_example(ui.value)
        }
    });
} );

function rl_grid_example(iterMax) {
    var table = document.getElementById("myTable");

    var l=table.rows.length
    for (var i=0;i<l;i++) {
        table.deleteRow(0)
    }

    var UP=0
    var DOWN=1
    var LEFT=2
    var RIGHT=3
    var S0=0
    var S1=1
    var S2=2
    var S3=3
    var S4=4
    var S5=5
    var S6=6
    var S7=7
    var S8=8
    var S9=9
    var S10=10
    var S11=11
    var row0 = table.insertRow(0);
    var row1 = table.insertRow(1);
    var row2 = table.insertRow(2);

    var s8 = row0.insertCell(0);
    var s9 = row0.insertCell(1);
    var s10 = row0.insertCell(2);
    var s11 = row0.insertCell(3);

    var s4 = row1.insertCell(0);
    var s5 = row1.insertCell(1);
    var s6 = row1.insertCell(2);
    var s7 = row1.insertCell(3);

    var s0 = row2.insertCell(0);
    var s1 = row2.insertCell(1);
    var s2 = row2.insertCell(2);
    var s3 = row2.insertCell(3);

    var grids = {0:s0,1:s1,2:s2,3:s3,4:s4,5:s5,6:s6,7:s7,8:s8,9:s9,10:s10,11:s11}
    var S=12
    var A=4
    var P = math.zeros(S,A,S)

    P.subset(math.index(S0,UP,S0),0.1)
    P.subset(math.index(S0,UP,S4),0.8)
    P.subset(math.index(S0,UP,S1),0.1)
    P.subset(math.index(S0,DOWN,S0),0.8 + 0.1)
    P.subset(math.index(S0,DOWN,S1),0.1)
    P.subset(math.index(S0,LEFT,S0),0.8 + 0.1)
    P.subset(math.index(S0,LEFT,S4),0.1)
    P.subset(math.index(S0,RIGHT,S1),0.8)
    P.subset(math.index(S0,RIGHT,S0),0.1)
    P.subset(math.index(S0,RIGHT,S4),0.1)
    //
    P.subset(math.index(S1,UP,S1),0.8)
    P.subset(math.index(S1,UP,S0),0.1)
    P.subset(math.index(S1,UP,S2),0.1)
    P.subset(math.index(S1,DOWN,S1),0.8)
    P.subset(math.index(S1,DOWN,S0),0.1)
    P.subset(math.index(S1,DOWN,S2),0.1)
    P.subset(math.index(S1,LEFT,S0),0.8)
    P.subset(math.index(S1,LEFT,S1),0.1 + 0.1)
    P.subset(math.index(S1,RIGHT,S2),0.8)
    P.subset(math.index(S1,RIGHT,S1),0.1 + 0.1)
    //
    P.subset(math.index(S2,UP,S6),0.8)
    P.subset(math.index(S2,UP,S1),0.1)
    P.subset(math.index(S2,UP,S3),0.1)
    P.subset(math.index(S2,DOWN,S2),0.8)
    P.subset(math.index(S2,DOWN,S1),0.1)
    P.subset(math.index(S2,DOWN,S3),0.1)
    P.subset(math.index(S2,LEFT,S1),0.8)
    P.subset(math.index(S2,LEFT,S2),0.1)
    P.subset(math.index(S2,LEFT,S6),0.1)
    P.subset(math.index(S2,RIGHT,S3),0.8)
    P.subset(math.index(S2,RIGHT,S2),0.1)
    P.subset(math.index(S2,RIGHT,S6),0.1)
    //
    P.subset(math.index(S3,UP,S7),0.8)
    P.subset(math.index(S3,UP,S2),0.1)
    P.subset(math.index(S3,UP,S3),0.1)
    P.subset(math.index(S3,DOWN,S3),0.8 + 0.1)
    P.subset(math.index(S3,DOWN,S2),0.1)
    P.subset(math.index(S3,LEFT,S2),0.8)
    P.subset(math.index(S3,LEFT,S3),0.1)
    P.subset(math.index(S3,LEFT,S7),0.1)
    P.subset(math.index(S3,RIGHT,S3),0.8+0.1)
    P.subset(math.index(S3,RIGHT,S7),0.1)
    //
    P.subset(math.index(S4,UP,S8),0.8)
    P.subset(math.index(S4,UP,S4),0.1 + 0.1)
    P.subset(math.index(S4,DOWN,S0),0.8)
    P.subset(math.index(S4,DOWN,S4),0.1 + 0.1)
    P.subset(math.index(S4,LEFT,S4),0.8)
    P.subset(math.index(S4,LEFT,S0),0.1)
    P.subset(math.index(S4,LEFT,S8),0.1)
    P.subset(math.index(S4,RIGHT,S4),0.8)
    P.subset(math.index(S4,RIGHT,S0),0.1)
    P.subset(math.index(S4,RIGHT,S8),0.1)
    // S5 can not be reached , no need to do assignments
    P.subset(math.index(S6,UP,S10),0.8)
    P.subset(math.index(S6,UP,S6),0.1)
    P.subset(math.index(S6,UP,S7),0.1)
    P.subset(math.index(S6,DOWN,S2),0.8)
    P.subset(math.index(S6,DOWN,S6),0.1)
    P.subset(math.index(S6,DOWN,S7),0.1)
    P.subset(math.index(S6,LEFT,S6),0.8)
    P.subset(math.index(S6,LEFT,S10),0.1)
    P.subset(math.index(S6,LEFT,S2),0.1)
    P.subset(math.index(S6,RIGHT,S7),0.8)
    P.subset(math.index(S6,RIGHT,S2),0.1)
    P.subset(math.index(S6,RIGHT,S10),0.1)
    // S7 is an absorbing state , 0 is fine
    P.subset(math.index(S8,UP,S8),0.8+0.1)
    P.subset(math.index(S8,UP,S9),0.1)
    P.subset(math.index(S8,DOWN,S4),0.8)
    P.subset(math.index(S8,DOWN,S8),0.1)
    P.subset(math.index(S8,DOWN,S9),0.1)
    P.subset(math.index(S8,LEFT,S8),0.8+0.1)
    P.subset(math.index(S8,LEFT,S4),0.1)
    P.subset(math.index(S8,RIGHT,S9),0.8)
    P.subset(math.index(S8,RIGHT,S8),0.1)
    P.subset(math.index(S8,RIGHT,S4),0.1)
    //
    P.subset(math.index(S9,UP,S9),0.8)
    P.subset(math.index(S9,UP,S8),0.1)
    P.subset(math.index(S9,UP,S10),0.1)
    P.subset(math.index(S9,DOWN,S9),0.8)
    P.subset(math.index(S9,DOWN,S8),0.1)
    P.subset(math.index(S9,DOWN,S10),0.1)
    P.subset(math.index(S9,LEFT,S8),0.8)
    P.subset(math.index(S9,LEFT,S9),0.1+0.)
    P.subset(math.index(S9,RIGHT,S10),0.8)
    P.subset(math.index(S9,RIGHT,S9),0.1+0.1)
    //
    P.subset(math.index(S10,UP,S10),0.8)
    P.subset(math.index(S10,UP,S9),0.1)
    P.subset(math.index(S10,UP,S11),0.1)
    P.subset(math.index(S10,DOWN,S6),0.8)
    P.subset(math.index(S10,DOWN,S9),0.1)
    P.subset(math.index(S10,DOWN,S11),0.1)
    P.subset(math.index(S10,LEFT,S9),0.8)
    P.subset(math.index(S10,LEFT,S6),0.1)
    P.subset(math.index(S10,LEFT,S10),0.1)
    P.subset(math.index(S10,RIGHT,S11),0.8)
    P.subset(math.index(S10,RIGHT,S10),0.1)
    P.subset(math.index(S10,RIGHT,S6),0.1)
    var V_last=math.ones(12)
    var V_cur=math.zeros(12)
    var R=math.zeros(12)
    R=math.subset(R,math.index(7),-1)
    R=math.subset(R,math.index(11),1)
    console.log(R)
    var gamma=0.9

    var i=0
    var V_max = math.matrix([0.491,0.431,0.475,0.277,0.566,0,0.572,-1,0.645,0.744,0.848,1])

    while(i<iterMax) {
        V_last=V_cur.clone()
        for(var s=0;s<S;s++) {
            var T=math.subset(P,math.index(s,math.range(0,4),math.range(0,12)))
            T=math.reshape(T,[A,S])
            var m = math.multiply(T,V_last)
            V_cur.subset(math.index(s),R.subset(math.index(s))+gamma*math.max(math.multiply(T,V_last)))
        }
        diff = math.sum(math.abs(math.subtract(V_cur,V_last)))
        update(V_cur, V_max, grids)
        console.log("diff"+diff)
        i=i+1
    }
}

function update(V, V_max, grids)  {
    var size = math.subset(math.size(V),math.index(0))
    console.log("size:"+size)
    for(var i=0;i<size;i++) {
        grids[i].innerHTML = math.subset(V,math.index(i)).toFixed(3) + "/" + math.subset(V_max,math.index(i)).toFixed(3)
        var x =math.subset(V,math.index(i)) / math.subset(V_max,math.index(i))
        var y = 255 * (1-x)
        var z = Math.round(y).toString(16)
        grids[i].style.backgroundColor = "#00"+z+"FF"
    }
    grids[11].style.backgroundColor = "#00FF00"
    grids[7].style.backgroundColor = "#FF0000"
    grids[5].style.backgroundColor = "#D3D3D3"
}