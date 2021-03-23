let x = '**'; 
let z = '*';
let y ='     ';

for (let i = 1; i < 6; i++) {
    console.log(y+z);
    y = y.substr(0, y.length -1);
    z= z + x;
}
